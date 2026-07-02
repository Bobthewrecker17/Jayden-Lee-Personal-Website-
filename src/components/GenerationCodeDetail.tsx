import { useMemo, useState } from "react";
import { type Activity, categoryDisplayNames } from "@/data/activities";
import { homepageActivities, type HomepageMedia } from "@/data/homepageMedia";
import { ArrowLeft, Building2, Calendar, Code2, Presentation, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  activity: Activity;
}

type MediaGroup = {
  name: string;
  media: HomepageMedia[];
};

const excludedGenerationCodeSrcParts = [
  "screenshotgnerationcode",
];

const generationCodeActivity = homepageActivities.find(
  (activity) => activity.title === "Generation Code"
);

const generationCodeLogo = generationCodeActivity?.media.find((item) =>
  excludedGenerationCodeSrcParts.some((srcPart) => item.src.includes(srcPart))
);

const generationMedia =
  generationCodeActivity
    ?.media.filter(
      (item) =>
        !excludedGenerationCodeSrcParts.some((srcPart) => item.src.includes(srcPart))
    ) ?? [];

const groupOrder = [
  "Group Photos 25-26 Semester 2",
  "Group Photos 25-26 Semester 1",
];

const groupLabels: Record<string, string> = {
  "Group Photos 25-26 Semester 2": "Semester 2 Cohort",
  "Group Photos 25-26 Semester 1": "Semester 1 Cohort",
};

const groupMedia = (media: HomepageMedia[]): MediaGroup[] => {
  const groups = new Map<string, HomepageMedia[]>();

  media.forEach((item) => {
    const name = item.eventName || "Generation Code";
    groups.set(name, [...(groups.get(name) ?? []), item]);
  });

  return Array.from(groups.entries())
    .map(([name, items]) => ({ name, media: items }))
    .sort((a, b) => {
      const aIndex = groupOrder.indexOf(a.name);
      const bIndex = groupOrder.indexOf(b.name);

      if (aIndex === -1 && bIndex === -1) return a.name.localeCompare(b.name);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
};

const impactCards = [
  {
    icon: Code2,
    label: "Curriculum",
    value: "Python",
    description: "Taught beginner Python — printing, input, data types, loops — plus a brief introduction to vibe coding.",
  },
  {
    icon: Users,
    label: "Audience",
    value: "Middle School",
    description: "Taught students at Cottonwood Creek, Harvest Park, Wells, and Fallon middle schools.",
  },
  {
    icon: Presentation,
    label: "Format",
    value: "6 Weeks",
    description: "Closed with a week 6 project that students built and presented themselves.",
  },
];

const GenerationCodeDetail = ({ activity: a }: Props) => {
  const backTo = `/activities/${a.category.toLowerCase()}`;
  const mediaGroups = useMemo(() => groupMedia(generationMedia), []);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const activeGroup = mediaGroups[activeGroupIndex];
  const activeMedia = activeGroup?.media[activeMediaIndex] ?? activeGroup?.media[0];
  const heroImage = mediaGroups[0]?.media[0];

  const selectGroup = (index: number) => {
    setActiveGroupIndex(index);
    setActiveMediaIndex(0);
  };

  return (
    <section className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          {categoryDisplayNames[a.category]}
        </Link>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 text-white shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs font-light tracking-widest text-white/50">
              generation-code.club
            </span>
          </div>
          {generationCodeLogo && (
            <div className="absolute right-5 top-16 z-10 hidden rounded-2xl border border-white/15 bg-white/90 p-2 shadow-2xl backdrop-blur md:block">
              <img
                src={generationCodeLogo.src}
                alt="Generation Code logo"
                className="h-16 w-16 rounded-xl object-contain"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-0">
            <div className="p-7 md:p-10 lg:p-12">
              <div className="mb-8 flex flex-wrap gap-3 text-xs text-white/65 tracking-wide">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {a.date}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  {a.org}
                </span>
              </div>

              <p className="text-xs font-light uppercase tracking-widest text-emerald-300 mb-4">
                Club President
              </p>
              <h1 className="text-4xl md:text-6xl font-normal tracking-wide mb-6 leading-tight">
                {a.title}
              </h1>
              {a.role && <p className="text-lg font-light text-white/65 mb-7">{a.role}</p>}
              <p className="text-base md:text-lg font-light leading-relaxed text-white/70 max-w-xl">
                {a.summary}
              </p>

              <div className="mt-10 rounded-2xl bg-black/40 p-5 font-mono text-sm text-emerald-200">
                <p><span className="text-white/35">$</span> co-found club with co-president Veer Gill</p>
                <p><span className="text-white/35">$</span> teach python fundamentals + vibe coding</p>
                <p><span className="text-white/35">$</span> run 6-week camp across 4 middle schools</p>
                <p className="text-white/45">// output: students presenting their own final projects</p>
              </div>
            </div>

            {heroImage && (
              <div className="relative min-h-[420px] bg-emerald-300/10">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="h-full w-full object-cover object-[center_55%] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>
            )}
          </div>
        </div>

        <div className="my-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {impactCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.label}
                className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  {card.label}
                </p>
                <h3 className="text-2xl font-normal tracking-wide text-foreground mb-3">
                  {card.value}
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr] gap-6">
          <div className="rounded-[2rem] border border-border bg-card p-5 h-fit">
            <p className="text-xs font-light uppercase tracking-widest text-muted-foreground mb-4">
              Media Lab
            </p>
            <div className="space-y-2">
              {mediaGroups.map((group, index) => (
                <button
                  key={group.name}
                  type="button"
                  onClick={() => selectGroup(index)}
                  className={`w-full rounded-2xl px-4 py-3 text-left transition-all ${
                    index === activeGroupIndex
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <span className="block text-sm font-normal">
                    {groupLabels[group.name] ?? group.name}
                  </span>
                  <span className="text-[11px] opacity-70">{group.media.length} images</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-4 md:p-5 shadow-sm">
            {activeMedia && (
              <>
                <div className="overflow-hidden rounded-[1.5rem] bg-muted">
                  <img
                    key={activeMedia.src}
                    src={activeMedia.src}
                    alt={activeMedia.alt}
                    className="media-swap h-[360px] w-full object-cover object-[center_55%] md:h-[520px]"
                  />
                </div>
                <div
                  key={`${activeMedia.src}-caption`}
                  className="media-swap mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-sm font-normal text-foreground">
                      {groupLabels[activeGroup.name] ?? activeGroup.name}
                    </p>
                    <p className="text-xs font-light text-muted-foreground">
                      Students and officers from a Generation Code coding camp cohort.
                    </p>
                  </div>
                  <p className="text-xs font-light text-muted-foreground">
                    {activeMediaIndex + 1} / {activeGroup.media.length}
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-4 md:grid-cols-6 gap-2">
                  {activeGroup.media.map((media, index) => (
                    <button
                      key={media.src}
                      type="button"
                      onClick={() => setActiveMediaIndex(index)}
                      className={`overflow-hidden rounded-xl border transition-all ${
                        index === activeMediaIndex
                          ? "border-foreground ring-2 ring-foreground/20"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="h-20 w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-border bg-card p-6 md:p-8">
          <p className="text-xs font-light uppercase tracking-widest text-muted-foreground mb-5">
            Key Highlights
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {a.highlights.map((highlight) => (
              <p
                key={highlight}
                className="rounded-2xl bg-secondary px-4 py-3 text-sm font-light leading-relaxed text-muted-foreground"
              >
                {highlight}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerationCodeDetail;
