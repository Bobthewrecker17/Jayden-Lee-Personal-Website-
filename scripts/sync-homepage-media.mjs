import { copyFile, mkdir, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const execFileAsync = promisify(execFile);
const projectRoot = path.resolve(__dirname, "..");
const sourceRoot = path.join(projectRoot, "Homepage Picture Drive");
const publicOutputRoot = path.join(projectRoot, "public", "homepage-media", "generated");
const dataOutputPath = path.join(projectRoot, "src", "data", "homepageMedia.ts");

const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const videoExtensions = new Set([".m4v", ".mov", ".mp4", ".webm"]);
const documentExtensions = new Set([".pdf"]);
const convertibleImageExtensions = new Set([".heic", ".heif"]);
const maxFileSizeMb = 125;

const activities = [
  {
    sourceFolder: "FISH Club",
    title: "Friends in Serving Him",
    category: "School & Faith",
    href: "/activities/school/friends-in-serving-him",
  },
  {
    sourceFolder: "Generation Code",
    title: "Generation Code",
    category: "School",
    href: "/activities/school/generation-code",
  },
  {
    sourceFolder: "Music",
    title: "Orchestra 1st Violin",
    category: "Music",
    href: "/music",
  },
  {
    sourceFolder: "Church",
    title: "Church & Retreats",
    category: "Faith",
    href: "/activities/faith/youth-praise-team",
  },
  {
    sourceFolder: "AI Senior Center",
    title: "AI Senior Center Workshops",
    category: "Volunteering",
    href: "/activities/volunteering/ai-senior-center-workshops",
  },
  {
    sourceFolder: "Hwarang",
    title: "Hwarang Youth Foundation",
    category: "Volunteering",
    href: "/activities/volunteering/hwarang-youth-foundation",
  },
  {
    sourceFolder: "BioVibe",
    title: "BioVibe Startup",
    category: "Research",
    href: "/activities/research/biovibe-startup",
  },
  {
    sourceFolder: "Socratic Spark",
    title: "Socratic Spark Project",
    category: "Research",
    href: "/activities/research/socratic-spark-project",
  },
  {
    sourceFolder: "ASDRP",
    title: "Agentic AI Research",
    category: "Research",
    href: "/activities/research/agentic-ai-research",
  },
  {
    sourceFolder: "Photo Gallary ",
    displayFolder: "Photo Gallery",
    title: "Photo Gallery",
    category: "Personal",
    href: "/gallery",
    sortBy: "captured",
  },
];

const leadershipVideos = [
  { source: "August22_2023.MOV", output: "august-22-2023.mp4" },
  { source: "August23 2023.mov", output: "august-23-2023.mp4" },
  { source: "3.1.25.mov", output: "3-1-25.mp4" },
  { source: "April 30 26.mp4.mov", output: "april-30-26.mp4" },
  { source: "June 10th 26.mov", output: "june-10th-26.mp4" },
  { source: "June 10 26.MOV", output: "june-10-26.mp4" },
];

const sanitize = (value) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

const toPosixPath = (...parts) => parts.join("/").replace(/\\/g, "/");

const isIgnoredDirectory = (name) =>
  name.toLowerCase().includes("personal videos");

const isSupportedMedia = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  return (
    imageExtensions.has(ext) ||
    convertibleImageExtensions.has(ext) ||
    videoExtensions.has(ext) ||
    documentExtensions.has(ext)
  );
};

const getMediaType = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();

  if (videoExtensions.has(ext)) {
    return "video";
  }

  if (documentExtensions.has(ext)) {
    return "document";
  }

  return "image";
};

const getEventName = (relativeSource, activityTitle) => {
  const [firstSegment, secondSegment] = relativeSource.split(path.sep);

  if (activityTitle === "Orchestra 1st Violin") {
    if (relativeSource.includes(path.sep)) {
      return firstSegment.trim();
    }

    return "General";
  }

  if (activityTitle === "Agentic AI Research") {
    return "Agentic AI Research";
  }

  if (activityTitle === "Generation Code") {
    if (relativeSource.includes("Semester 2")) {
      return "Group Photos 25-26 Semester 2";
    }

    if (relativeSource.includes("Semester 1")) {
      return "Group Photos 25-26 Semester 1";
    }

    return firstSegment;
  }

  if (/^\d{2}-\d{2}$/.test(firstSegment) && secondSegment) {
    return secondSegment;
  }

  return firstSegment === relativeSource ? "Chapter Leadership" : firstSegment;
};

const copyMediaFile = async (sourcePath, outputPath) => {
  const ext = path.extname(sourcePath).toLowerCase();

  if (convertibleImageExtensions.has(ext)) {
    await execFileAsync("sips", ["-s", "format", "jpeg", sourcePath, "--out", outputPath]);
    return;
  }

  await copyFile(sourcePath, outputPath);
};

const MIN_VALID_CAPTURED_DATE = new Date("1970-01-01").getTime();

async function getCapturedAt(filePath) {
  try {
    const { stdout } = await execFileAsync("mdls", [
      "-name",
      "kMDItemContentCreationDate",
      "-raw",
      filePath,
    ]);
    const trimmed = stdout.trim();

    if (!trimmed || trimmed === "(null)") {
      return null;
    }

    const parsed = new Date(trimmed);
    const timestamp = parsed.getTime();

    if (Number.isNaN(timestamp) || timestamp < MIN_VALID_CAPTURED_DATE) {
      return null;
    }

    return timestamp;
  } catch {
    return null;
  }
}

async function collectMediaFiles(directory, { useCapturedDate = false } = {}) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".DS_Store") {
      continue;
    }

    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!isIgnoredDirectory(entry.name)) {
        files.push(...(await collectMediaFiles(entryPath)));
      }
      continue;
    }

    if (!entry.isFile() || !isSupportedMedia(entryPath)) {
      continue;
    }

    const fileStat = await stat(entryPath);

    if (fileStat.size === 0) {
      console.warn(`Skipping ${entryPath} because it is empty.`);
      continue;
    }

    const sizeMb = fileStat.size / 1024 / 1024;

    if (sizeMb > maxFileSizeMb) {
      console.warn(`Skipping ${entryPath} because it is ${sizeMb.toFixed(1)}MB.`);
      continue;
    }

    const capturedAt = useCapturedDate ? await getCapturedAt(entryPath) : null;

    files.push({
      sourcePath: entryPath,
      modifiedAt: fileStat.mtimeMs,
      sortAt: capturedAt ?? fileStat.mtimeMs,
      size: fileStat.size,
    });
  }

  return files;
}

async function syncActivity(activity) {
  const sourceFolder = path.join(sourceRoot, activity.sourceFolder);
  const activitySlug = sanitize(activity.displayFolder ?? activity.sourceFolder);
  const activityOutputRoot = path.join(publicOutputRoot, activitySlug);
  const useCapturedDate = activity.sortBy === "captured";
  const sourceFiles = await collectMediaFiles(sourceFolder, { useCapturedDate });

  sourceFiles.sort((a, b) => b.sortAt - a.sortAt);

  const media = [];

  await mkdir(activityOutputRoot, { recursive: true });

  for (const [index, file] of sourceFiles.entries()) {
    const relativeSource = path.relative(sourceFolder, file.sourcePath);
    const ext = path.extname(file.sourcePath).toLowerCase();
    const baseName = sanitize(relativeSource.replace(path.extname(relativeSource), ""));
    const outputExt = convertibleImageExtensions.has(ext) ? ".jpg" : ext;
    const fileName = `${String(index + 1).padStart(2, "0")}-${baseName}${outputExt}`;
    const outputPath = path.join(activityOutputRoot, fileName);
    const publicPath = toPosixPath("", "homepage-media", "generated", activitySlug, fileName);

    await copyMediaFile(file.sourcePath, outputPath);

    media.push({
      type: getMediaType(file.sourcePath),
      src: publicPath,
      alt: `${activity.title} media ${index + 1}`,
      originalName: relativeSource,
      eventName: getEventName(relativeSource, activity.title),
    });
  }

  return {
    title: activity.title,
    category: activity.category,
    folder: activity.displayFolder ?? activity.sourceFolder.trim(),
    href: activity.href,
    description: "",
    media,
  };
}

async function convertLeadershipVideo(sourcePath, outputPath) {
  try {
    await execFileAsync(
      "avconvert",
      [
        "--source",
        sourcePath,
        "--preset",
        "Preset1280x720",
        "--output",
        outputPath,
        "--replace",
      ],
      { timeout: 300000 },
    );
    return;
  } catch (error) {
    console.warn(`Could not convert ${sourcePath} to MP4: ${error.message}`);
  }

  await copyFile(sourcePath, outputPath);
}

async function generateVideoPoster(videoPath, posterPath) {
  const outputDir = path.dirname(posterPath);

  try {
    await execFileAsync("qlmanage", ["-t", "-s", "1200", "-o", outputDir, videoPath]);
    const generatedPoster = path.join(outputDir, `${path.basename(videoPath)}.png`);

    try {
      await stat(generatedPoster);
      if (generatedPoster !== posterPath) {
        await rm(posterPath, { force: true });
        await rename(generatedPoster, posterPath);
      }
      return;
    } catch {
      // Fall through to ffmpeg attempt.
    }
  } catch {
    // Fall through to ffmpeg attempt.
  }

  try {
    await execFileAsync(
      "ffmpeg",
      ["-y", "-ss", "00:00:01", "-i", videoPath, "-vframes", "1", "-q:v", "2", posterPath],
      { timeout: 60000 },
    );
  } catch (error) {
    console.warn(`Could not generate poster for ${videoPath}: ${error.message}`);
  }
}

async function syncLeadershipVideos() {
  const sourceFolder = path.join(sourceRoot, "Leadership");
  const leadershipOutputRoot = path.join(publicOutputRoot, "leadership");

  await mkdir(leadershipOutputRoot, { recursive: true });

  for (const { source, output } of leadershipVideos) {
    const sourcePath = path.join(sourceFolder, source);
    const outputPath = path.join(leadershipOutputRoot, output);
    const posterPath = `${outputPath}.png`;

    try {
      await stat(sourcePath);
    } catch {
      console.warn(`Leadership video not found: ${sourcePath}`);
      continue;
    }

    await convertLeadershipVideo(sourcePath, outputPath);
    await generateVideoPoster(outputPath, posterPath);
  }
}

function renderDataFile(homepageActivities) {
  return `export type HomepageMedia = {
  type: "image" | "video" | "document";
  src: string;
  alt: string;
  originalName: string;
  eventName: string;
};

export type HomepageActivity = {
  title: string;
  category: string;
  folder: string;
  href: string;
  description: string;
  media: HomepageMedia[];
};

export const homepageActivities: HomepageActivity[] = ${JSON.stringify(homepageActivities, null, 2)};
`;
}

async function sync() {
  await rm(publicOutputRoot, { recursive: true, force: true });
  await mkdir(publicOutputRoot, { recursive: true });

  const homepageActivities = [];

  for (const activity of activities) {
    const syncedActivity = await syncActivity(activity);

    if (syncedActivity.media.length > 0) {
      homepageActivities.push(syncedActivity);
    }
  }

  await writeFile(dataOutputPath, renderDataFile(homepageActivities));
  await syncLeadershipVideos();

  const fileCount = homepageActivities.reduce((total, activity) => total + activity.media.length, 0);
  console.log(`Synced ${fileCount} files across ${homepageActivities.length} homepage sections.`);
  console.log(`Synced ${leadershipVideos.length} leadership speech videos.`);
}

async function watch() {
  await sync();

  const { watch: watchDirectory } = await import("node:fs");
  let timeout;

  console.log(`Watching ${sourceRoot} for homepage media changes...`);
  watchDirectory(sourceRoot, { recursive: true }, () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      sync().catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });
    }, 300);
  });
}

if (process.argv.includes("--watch")) {
  watch().catch((error) => {
    console.error(error);
    process.exit(1);
  });
} else {
  sync().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
