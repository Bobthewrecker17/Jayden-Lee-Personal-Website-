import { ArrowLeft, AudioLines, Building2, Calendar, Music2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { activities } from "@/data/activities";
import { homepageActivities, type HomepageMedia } from "@/data/homepageMedia";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const chamberOrchestra = activities.find((activity) => activity.slug === "chamber-orchestra");

const orchestraMedia =
  homepageActivities.find((activity) => activity.title === "Orchestra 1st Violin")?.media ?? [];

const mediaByEvent = orchestraMedia.reduce<Record<string, HomepageMedia[]>>((groups, item) => {
  const eventName = item.eventName.trim();
  groups[eventName] = [...(groups[eventName] ?? []), item];
  return groups;
}, {});

const getEventMedia = (eventName: string) => mediaByEvent[eventName.trim()] ?? [];

const isLogoImage = (item: HomepageMedia) => item.src.includes("midwest-clinic-logo");

const isSeniorCenterVideo = (item: HomepageMedia) =>
  item.src.includes("07-other-performances-talkv-wulaycotvr");

const seniorCenterVideo = orchestraMedia.find(isSeniorCenterVideo);

const otherPerformanceCaptions: Record<string, string> = {
  "02-other-performances-img-9668.mov":
    "Performance commemorating Korea's Independence Movement.",
  "03-other-performances-talkv-wxcesdj9mg-ukf4xinycc2c1watyrqnkk-talkv-high.mov":
    "Performance for the SF Korean American Center.",
  "06-other-performances-talkv-wu3m8vmkm6-xhce40brn57xkmt8yukvk0-talkv-high.mov":
    "Performance for Vision Festival 24-25.",
};

const getOtherPerformanceCaption = (item: HomepageMedia) => {
  const fileName = item.src.split("/").pop() ?? "";
  return otherPerformanceCaptions[fileName];
};

const orchestraNotes = [
  {
    value: "1st",
    label: "Violin Section",
    body: "Surrounded by so many talented musicians, it was hard to fit in at first, but the 1st violin section welcomed me and I soon found real joy making music with them.",
  },
  {
    value: "4th",
    label: "Chair",
    body: "Performing within the top orchestra ensemble at Dublin High School.",
  },
  {
    value: "Midwest",
    label: "Clinic",
    body: "Attending one of the most prestigious music festivals was an astounding experience — stepping onto that stage still feels like a dream I want to relive.",
  },
];

const musicSections = [
  {
    eventName: "Chamber Orchestra",
    label: "School Ensemble",
    title: "Chamber Orchestra",
    description:
      "Performing as first violin in Dublin High School's top orchestra ensemble, including the Midwest Clinic experience.",
  },
  {
    eventName: "New Life Church Orchestra",
    label: "Church Ensemble",
    title: "New Life Church Orchestra",
    description:
      "School orchestra was about making the best music together, while church orchestra is about serving by playing as well as I can — through rehearsals, services, and ensemble performances at New Life Church.",
  },
  {
    eventName: "Ensemble Performance at MBK Senior Center",
    label: "Community Performance",
    title: "Ensemble Performance at MBK Senior Center",
    description:
      "A performance of 'Amazing Grace' for residents at the MBK Senior Center that gave me a strong sense of purpose in my playing as the seniors sang along.",
  },
  {
    eventName: "Other Performances",
    label: "Performance Archive",
    title: "Other Performances",
    description: "Additional violin performance clips and ensemble moments outside of school and church.",
  },
];

const ViolinBackdrop = () => (
  <svg
    aria-hidden
    viewBox="0 0 220 620"
    className="pointer-events-none absolute -left-4 top-1/2 hidden h-[680px] -translate-y-1/2 -rotate-12 text-amber-200/20 md:block"
    fill="none"
  >
    <path d="M110 20v230" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
    <path d="M76 74h68" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
    <path
      d="M96 250c-42 10-68 49-58 88 7 27 29 43 53 49-27 20-43 48-37 84 8 50 53 82 56 84 3-2 48-34 56-84 6-36-10-64-37-84 24-6 46-22 53-49 10-39-16-78-58-88l-14 25-14-25Z"
      fill="currentColor"
    />
    <path
      d="M110 260v292"
      stroke="#120f0b"
      strokeWidth="5"
      strokeLinecap="round"
      opacity="0.45"
    />
    <path
      d="M81 392c18-18 40-18 58 0M82 455c18 18 38 18 56 0"
      stroke="#120f0b"
      strokeWidth="5"
      strokeLinecap="round"
      opacity="0.35"
    />
    <path d="M72 586h76" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
  </svg>
);

const MidwestClinicMark = () => (
  <div className="inline-flex items-center gap-3 rounded-2xl border border-amber-100/20 bg-white/95 px-4 py-3 text-[#17120d] shadow-lg backdrop-blur">
    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white">
      <img
        src="/photos/midwest-clinic-logo.jpeg"
        alt="The Midwest Clinic logo"
        className="h-full w-full object-contain"
      />
    </div>
    <div>
      <p className="text-[10px] font-light uppercase tracking-[0.32em] text-amber-900/70">
        The Midwest Clinic
      </p>
      <p className="text-sm font-normal tracking-wide text-[#17120d]">
        International Band & Orchestra Conference
      </p>
    </div>
  </div>
);

const MediaGrid = ({
  media,
  largeFirst = false,
  getVideoCaption,
}: {
  media: HomepageMedia[];
  largeFirst?: boolean;
  getVideoCaption?: (item: HomepageMedia) => string | undefined;
}) => {
  const images = media.filter((item) => item.type === "image" && !isLogoImage(item));
  const videos = media.filter((item) => item.type === "video");

  if (images.length === 0 && videos.length === 0) {
    return null;
  }

  const videoGridClass =
    videos.length === 1
      ? "grid grid-cols-1"
      : videos.length === 2
        ? "grid grid-cols-1 gap-4 sm:grid-cols-2"
        : "grid grid-cols-1 gap-4 md:grid-cols-2";

  return (
    <div className="space-y-4">
      {images.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {images.map((item, index) => (
            <div
              key={item.src}
              className={`overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm ${
                largeFirst && index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`${largeFirst && index === 0 ? "h-80" : "h-64"} w-full object-cover object-[center_58%]`}
              />
            </div>
          ))}
        </div>
      )}

      {videos.length > 0 && (
        <div className={videoGridClass}>
          {videos.map((item) => {
            const caption = getVideoCaption?.(item);

            return (
              <div
                key={item.src}
                className={`overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm ${
                  videos.length === 1 ? "mx-auto w-full max-w-2xl" : ""
                }`}
              >
                <div className="bg-black">
                  <video
                    className={`w-full bg-black object-contain ${
                      videos.length === 1 ? "max-h-[min(80vh,720px)]" : "aspect-video"
                    }`}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={item.alt}
                  >
                    <source src={item.src} />
                  </video>
                </div>
                {caption && (
                  <p className="px-4 py-2.5 text-xs font-light leading-relaxed text-muted-foreground">
                    {caption}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

/** Stacked hero image + full-width video for church orchestra (avoids awkward side-by-side layout). */
const ChurchOrchestraMedia = ({ media }: { media: HomepageMedia[] }) => {
  const images = media.filter((item) => item.type === "image");
  const videos = media.filter((item) => item.type === "video");
  const heroImage = images[0];
  const heroVideo = videos[0];

  if (!heroImage && !heroVideo) {
    return null;
  }

  return (
    <div className="space-y-5">
      {heroImage && (
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="h-72 w-full object-cover object-[center_55%] md:h-96"
          />
        </div>
      )}

      {heroVideo && (
        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-border bg-black shadow-sm">
          <video
            className="mx-auto max-h-[min(80vh,720px)] w-full bg-black object-contain"
            controls
            muted
            playsInline
            preload="metadata"
            aria-label={heroVideo.alt}
          >
            <source src={heroVideo.src} />
          </video>
        </div>
      )}
    </div>
  );
};

const MusicSection = () => {
  const ref = useScrollFade<HTMLDivElement>();
  const activity = chamberOrchestra;
  const chamberMedia = getEventMedia("Chamber Orchestra");
  const chamberImages = chamberMedia.filter((item) => item.type === "image" && !isLogoImage(item));
  const chamberVideos = chamberMedia.filter((item) => item.type === "video");
  const heroImage = chamberImages[0];
  const generalImages = getEventMedia("General").filter(
    (item) => item.type === "image" && !isLogoImage(item),
  );

  if (!activity) {
    return null;
  }

  return (
    <section className="bg-[radial-gradient(circle_at_top_left,rgba(180,127,38,0.18),transparent_35%),linear-gradient(180deg,hsl(var(--background))_0%,#1b1610_18%,hsl(var(--background))_100%)] px-6 pb-24 pt-28">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-12 border-b border-border pb-10">
          <p className="mb-3 text-xs font-light uppercase tracking-widest text-foreground/70">
            Performance
          </p>
          <h1 className="mb-4 text-4xl font-normal tracking-wide text-foreground md:text-5xl">
            Music
          </h1>
          <p className="max-w-2xl font-light leading-relaxed text-foreground/80">
            A look at my musical journey through chamber orchestra, church ensemble performance,
            and other violin moments organized from rehearsals to the concert stage.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2.25rem] border border-amber-200/20 bg-[#120f0b] text-amber-50 shadow-2xl">
          <ViolinBackdrop />

          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative z-10 p-8 md:p-12 lg:p-14">
              <div className="mb-8 flex flex-wrap gap-3 text-xs tracking-wide text-amber-50/90">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-100/20 bg-white/8 px-3 py-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {activity.date}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-100/20 bg-white/8 px-3 py-1.5">
                  <Building2 className="h-3.5 w-3.5" />
                  {activity.org}
                </span>
              </div>

              <p className="mb-4 text-xs font-light uppercase tracking-[0.35em] text-amber-200">
                Chamber Orchestra
              </p>
              <h2 className="mb-5 text-4xl font-normal tracking-wide text-amber-50 md:text-5xl">
                {activity.title}
              </h2>
              {activity.role && (
                <p className="mb-7 text-lg font-light text-amber-50/90">{activity.role}</p>
              )}
              <p className="max-w-xl text-base font-light leading-relaxed text-amber-50/90 md:text-lg">
                {activity.summary}
              </p>

              <div className="mt-8">
                <MidwestClinicMark />
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {orchestraNotes.map((note) => (
                  <div
                    key={note.label}
                    className="rounded-2xl border border-amber-100/20 bg-amber-50/12 p-4 backdrop-blur"
                  >
                    <p className="text-2xl font-normal text-amber-100">{note.value}</p>
                    <p className="mb-2 text-[10px] font-light uppercase tracking-widest text-amber-100/80">
                      {note.label}
                    </p>
                    <p className="text-xs font-light leading-relaxed text-amber-50/85">
                      {note.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] bg-black">
              {heroImage && (
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="h-full min-h-[420px] w-full object-cover object-[center_55%] opacity-90"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120f0b] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-amber-100/25 bg-black/45 p-5 text-amber-50 backdrop-blur-md">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-200 text-[#120f0b]">
                  <Music2 className="h-5 w-5" />
                </div>
                <p className="text-sm font-light leading-relaxed text-amber-50/90">
                  A page styled like a concert program: warm stage lighting, musical staff lines,
                  and performance photos framed as ensemble moments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="rounded-[2rem] border border-amber-200/25 bg-[#17120d] p-6 text-amber-50 shadow-lg">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-200 text-[#17120d]">
              <AudioLines className="h-6 w-6" />
            </div>
            <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-amber-200">
              Ensemble Focus
            </p>
            <h2 className="mb-4 text-3xl font-normal tracking-wide text-amber-50">
              Performing With Precision
            </h2>
            <p className="text-sm font-light leading-relaxed text-amber-50/90">
              My work in Chamber Orchestra centers on preparation, listening across sections, and
              supporting the ensemble sound from the first violin section.
            </p>
          </div>

          <MediaGrid
            media={[...chamberImages.slice(1), ...generalImages, ...chamberVideos]}
            largeFirst
          />
        </div>

        {musicSections.slice(1).map((section) => {
          const sectionMedia =
            section.eventName === "Ensemble Performance at MBK Senior Center"
              ? seniorCenterVideo
                ? [seniorCenterVideo]
                : []
              : getEventMedia(section.eventName).filter((item) => !isSeniorCenterVideo(item));
          if (sectionMedia.length === 0) {
            return null;
          }

          const isChurchOrchestra = section.eventName === "New Life Church Orchestra";

          return (
            <div key={section.eventName} className="mt-16">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-3 text-xs font-light uppercase tracking-widest text-foreground/70">
                    {section.label}
                  </p>
                  <h2 className="text-3xl font-normal tracking-wide text-foreground md:text-4xl">
                    {section.title}
                  </h2>
                </div>
                <p className="max-w-md text-sm font-light leading-relaxed text-foreground/80">
                  {section.description}
                </p>
              </div>

              {isChurchOrchestra ? (
                <ChurchOrchestraMedia media={sectionMedia} />
              ) : (
                <MediaGrid
                  media={sectionMedia}
                  largeFirst
                  getVideoCaption={
                    section.eventName === "Other Performances" ? getOtherPerformanceCaption : undefined
                  }
                />
              )}
            </div>
          );
        })}

        <div className="mt-14 rounded-[2rem] border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="mb-3 text-xs font-light uppercase tracking-widest text-foreground/70">
                Key Highlights
              </p>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {activity.highlights.map((highlight) => (
                  <p
                    key={highlight}
                    className="rounded-2xl bg-secondary px-4 py-3 text-sm font-light leading-relaxed text-foreground/80"
                  >
                    {highlight}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/activities/school"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to School Life
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
