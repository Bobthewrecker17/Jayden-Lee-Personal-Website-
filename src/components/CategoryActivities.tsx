import { useScrollFade } from "@/hooks/use-scroll-fade";
import { ArrowLeft } from "lucide-react";
import { activities, categoryDescriptions, categoryDisplayNames, type Category } from "@/data/activities";
import { homepageActivities } from "@/data/homepageMedia";
import AutoCyclingCover from "@/components/AutoCyclingCover";
import CourseCatalog from "@/components/CourseCatalog";
import { Link } from "react-router-dom";

interface Props {
  category: Category;
}

const schoolAutoCycleSlugs = new Set([
  "friends-in-serving-him",
  "generation-code",
]);

const slugToMediaTitle: Record<string, string> = {
  "friends-in-serving-him": "Friends in Serving Him",
  "generation-code": "Generation Code",
};

const autoCycleStaggerMs: Record<string, number> = {
  "friends-in-serving-him": 0,
  "generation-code": 1700,
};

const generationCodeCoverExcludedEvents = new Set([
  "Group Photos 25-26 Semester 1",
]);

const generationCodeCoverExcludedSrcParts = [
  "screenshotgnerationcode",
];

const slugToChurchEventName: Record<string, string> = {
  "youth-praise-team": "Praise Team",
  "navajo-mission-trip": "Navajo Mission Trip",
};

const normalizeEventName = (value: string) => value.trim();

const isSchoolCoverImage = (
  activityTitle: string,
  item: (typeof homepageActivities)[number]["media"][number],
) => {
  if (item.type !== "image") {
    return false;
  }

  if (activityTitle !== "Generation Code") {
    return true;
  }

  return (
    !generationCodeCoverExcludedEvents.has(item.eventName ?? "") &&
    !generationCodeCoverExcludedSrcParts.some((srcPart) => item.src.includes(srcPart))
  );
};

const activityImagesBySlug = new Map(
  homepageActivities.map((activity) => [
    activity.title,
    activity.media
      .filter((item) => isSchoolCoverImage(activity.title, item))
      .map((item) => item.src),
  ])
);

const getHomepageCoverImages = (a: (typeof activities)[0]) => {
  if (a.slug === "chamber-orchestra") {
    const orchestraMedia =
      homepageActivities.find((item) => item.title === "Orchestra 1st Violin")?.media ?? [];

    return orchestraMedia
      .filter(
        (item) =>
          item.type === "image" &&
          item.eventName.trim() === "Chamber Orchestra" &&
          !item.src.includes("midwest-clinic-logo"),
      )
      .map((item) => item.src);
  }

  const detailHref = `/activities/${a.category.toLowerCase()}/${a.slug}`;
  const homepageMatch = homepageActivities.find((item) => item.href === detailHref);
  const churchEventName = slugToChurchEventName[a.slug];

  if (homepageMatch) {
    const images = homepageMatch.media.filter((item) => item.type === "image");

    if (churchEventName) {
      return images
        .filter((item) => normalizeEventName(item.eventName ?? "") === churchEventName)
        .map((item) => item.src);
    }

    return images.map((item) => item.src);
  }

  const churchMedia = homepageActivities.find((item) => item.title === "Church & Retreats");
  if (!churchMedia) {
    return [];
  }

  const eventName = churchEventName ?? a.title;

  return churchMedia.media
    .filter(
      (item) =>
        item.type === "image" && normalizeEventName(item.eventName ?? "") === normalizeEventName(eventName),
    )
    .map((item) => item.src);
};

function ActivityCard({ a }: { a: (typeof activities)[0] }) {
  const detailUrl =
    a.slug === "chamber-orchestra"
      ? "/music"
      : `/activities/${a.category.toLowerCase()}/${a.slug}`;
  const autoCycleImages =
    schoolAutoCycleSlugs.has(a.slug) && slugToMediaTitle[a.slug]
      ? activityImagesBySlug.get(slugToMediaTitle[a.slug]) ?? []
      : [];
  const homepageCoverImages = getHomepageCoverImages(a);
  const cyclingImages =
    autoCycleImages.length > 1
      ? autoCycleImages
      : a.coverImage
        ? []
        : homepageCoverImages.length > 1
          ? homepageCoverImages
          : [];
  const coverImages =
    cyclingImages.length > 0
      ? cyclingImages
      : a.coverImage
        ? [a.coverImage]
        : homepageCoverImages.length > 0
          ? homepageCoverImages
          : autoCycleImages;

  return (
    <article className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
      {/* Image — clicking goes to detail */}
      <Link to={detailUrl} className="overflow-hidden block">
        {coverImages.length > 0 ? (
          cyclingImages.length > 1 ? (
            <AutoCyclingCover
              images={cyclingImages}
              alt={a.title}
              initialDelayMs={autoCycleStaggerMs[a.slug] ?? 0}
              className="w-full h-72 md:h-[420px]"
            />
          ) : (
            <img
              src={coverImages[0]}
              alt={a.title}
              className="w-full h-72 md:h-[420px] object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          )
        ) : (
          <div className="w-full h-72 md:h-[420px] bg-muted/30" />
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col justify-center px-10 md:px-14 py-12">
        <p className="text-xs text-muted-foreground mb-4">{a.date}</p>

        <h2 className="text-2xl md:text-3xl font-normal leading-snug text-foreground mb-3">
          {a.title}
        </h2>

        {a.role && (
          <p className="text-sm font-light text-muted-foreground mb-3">{a.role}</p>
        )}

        <p className="text-sm font-light text-muted-foreground leading-relaxed mb-5">
          {a.summary}
        </p>

        <Link
          to={detailUrl}
          className="text-sm underline underline-offset-4 text-foreground w-fit hover:text-muted-foreground transition-colors"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

const CategoryActivities = ({ category }: Props) => {
  const ref = useScrollFade<HTMLDivElement>();
  const filtered = activities.filter((a) => a.category === category);

  return (
    <section className="pt-28 pb-16 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Back */}
        <Link
          to="/activities"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          All Activities
        </Link>

        {/* Header */}
        <div className="mb-12 border-b border-border pb-10">
          <h1 className="text-4xl md:text-5xl font-normal tracking-wide text-foreground mb-3">
            {categoryDisplayNames[category]}
          </h1>
          <p className="font-light text-muted-foreground max-w-xl leading-relaxed">
            {categoryDescriptions[category]}
          </p>
        </div>

        {category === "School" && <CourseCatalog />}

        {/* Activity list */}
        <div className="divide-y divide-border">
          {filtered.map((a) => (
            <div key={a.title} className="py-2">
              <ActivityCard a={a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryActivities;
