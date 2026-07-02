import { type ReactNode, useEffect, useRef, useState } from "react";
import { type Activity, categoryDisplayNames } from "@/data/activities";
import { homepageActivities, type HomepageMedia } from "@/data/homepageMedia";
import { ArrowLeft, Building2, Calendar, ChevronLeft, ChevronRight, FileText, Globe, Images, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

type PortfolioStat = {
  value: string;
  label: string;
};

export type EventPortfolioConfig = {
  mediaTitle: string;
  eyebrow: string;
  sectionLabel: string;
  sectionTitle: string;
  sectionIntro: string;
  defaultEventName: string;
  eventOrder?: string[];
  eventDates?: Record<string, string>;
  eventDescriptions?: Record<string, string>;
  eventDisplayNames?: Record<string, string>;
  mediaCaptions?: Record<string, string>;
  getMediaCaption?: (media: HomepageMedia, eventName: string, index: number) => string | undefined;
  filterMedia?: (media: HomepageMedia) => boolean;
  getEventName?: (media: HomepageMedia) => string | undefined;
  stats: PortfolioStat[];
  websiteUrl?: string;
  containMedia?: boolean;
  eventMediaVariant?: Record<string, "logo" | "large-video">;
  extraSections?: {
    label: string;
    title: string;
    body: string;
    items: string[];
  }[];
  featuredMedia?: {
    match: (media: HomepageMedia) => boolean;
    label?: string;
    title: string;
    description?: string;
    sort?: (items: HomepageMedia[]) => HomepageMedia[];
  };
};

interface Props {
  activity: Activity;
  config: EventPortfolioConfig;
}

const normalizeEventName = (eventName: string, defaultEventName: string) =>
  eventName === "Chapter Leadership" ? defaultEventName : eventName;

const formatEventTitle = (eventName: string, displayNames?: Record<string, string>) =>
  displayNames?.[eventName] ?? eventName.replace("24-25", "2024-2025").replace("25-26", "2025-2026");

const groupMediaByEvent = (media: HomepageMedia[], config: EventPortfolioConfig) => {
  const groups = new Map<string, HomepageMedia[]>();

  media.forEach((item) => {
    const eventName = config.getEventName?.(item) ??
      normalizeEventName(item.eventName || config.defaultEventName, config.defaultEventName);
    groups.set(eventName, [...(groups.get(eventName) ?? []), { ...item, eventName }]);
  });

  return Array.from(groups.entries())
    .map(([eventName, items]) => ({ eventName, items }))
    .sort((a, b) => {
      const aIndex = config.eventOrder?.indexOf(a.eventName) ?? -1;
      const bIndex = config.eventOrder?.indexOf(b.eventName) ?? -1;

      if (aIndex === -1 && bIndex === -1) return a.eventName.localeCompare(b.eventName);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
};

const ScrollReveal = ({
  children,
  direction,
}: {
  children: ReactNode;
  direction: "left" | "right";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "translate-x-0 opacity-100"
          : direction === "left"
            ? "-translate-x-12 opacity-0"
            : "translate-x-12 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const HoverBubbles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
    <span className="absolute right-16 top-10 h-3 w-3 rounded-full bg-emerald-200/70 opacity-0 transition-all duration-700 group-hover/event:-translate-y-8 group-hover/event:scale-150 group-hover/event:opacity-100" />
    <span className="absolute right-8 top-24 h-2 w-2 rounded-full bg-sky-200/80 opacity-0 transition-all duration-700 delay-75 group-hover/event:-translate-y-10 group-hover/event:translate-x-2 group-hover/event:scale-150 group-hover/event:opacity-100" />
    <span className="absolute left-12 bottom-16 h-2.5 w-2.5 rounded-full bg-violet-200/70 opacity-0 transition-all duration-700 delay-100 group-hover/event:-translate-y-8 group-hover/event:-translate-x-2 group-hover/event:scale-150 group-hover/event:opacity-100" />
    <span className="absolute left-24 bottom-8 h-1.5 w-1.5 rounded-full bg-amber-200/80 opacity-0 transition-all duration-700 delay-150 group-hover/event:-translate-y-10 group-hover/event:scale-150 group-hover/event:opacity-100" />
  </div>
);

const imageFitClass = (config: EventPortfolioConfig, sizeClass: string) =>
  config.containMedia
    ? `${sizeClass} w-full object-contain bg-[#f7f1e8]`
    : `${sizeClass} w-full object-cover object-[center_60%]`;

const formatFileLabel = (originalName: string) =>
  originalName
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .trim() || "Project file";

const EventCarousel = ({
  eventName,
  media,
  config,
}: {
  eventName: string;
  media: HomepageMedia[];
  config: EventPortfolioConfig;
}) => {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const activeMedia = media[index];
  const isSingleVideo = media.length === 1 && media[0]?.type === "video";

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + media.length) % media.length);
  };

  const handlePointerUp = (clientX: number) => {
    if (startX.current === null) return;

    const diff = clientX - startX.current;
    startX.current = null;

    if (Math.abs(diff) < 45) return;
    goTo(diff < 0 ? index + 1 : index - 1);
  };

  if (!activeMedia) return null;

  const caption =
    config.getMediaCaption?.(activeMedia, eventName, index) ||
    config.mediaCaptions?.[activeMedia.src] ||
    `Add a short caption for ${formatEventTitle(eventName, config.eventDisplayNames)} media ${index + 1}.`;

  return (
    <div className="bg-[#f7f1e8] p-3 md:p-4 shadow-inner">
      <div className="relative overflow-hidden rounded-[1.75rem] border-[10px] border-white bg-black shadow-2xl">
        <div
          className="flex touch-pan-y transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onPointerDown={(event) => {
            startX.current = event.clientX;
          }}
          onPointerUp={(event) => handlePointerUp(event.clientX)}
          onPointerCancel={() => {
            startX.current = null;
          }}
        >
          {media.map((item) => (
            <div key={item.src} className="min-w-full">
              {item.type === "document" ? (
                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[360px] flex-col items-center justify-center gap-5 bg-[#f7f1e8] px-8 text-center transition hover:bg-white md:h-[500px]"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                    <FileText className="h-10 w-10" />
                  </span>
                  <span>
                    <span className="block text-xl font-normal tracking-wide text-foreground">
                      {formatFileLabel(item.originalName)}
                    </span>
                    <span className="mt-3 block text-sm font-light text-muted-foreground">
                      Open PDF document
                    </span>
                  </span>
                </a>
              ) : item.type === "video" ? (
                <video
                  className={`w-full bg-black object-contain ${
                    isSingleVideo ? "h-[460px] md:h-[640px]" : "h-[360px] object-cover object-[center_60%] md:h-[500px]"
                  }`}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={item.alt}
                >
                  <source src={item.src} />
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className={imageFitClass(config, "h-[360px] md:h-[500px]")}
                />
              )}
            </div>
          ))}
        </div>

        {media.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-foreground shadow-md backdrop-blur transition hover:bg-white"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-foreground shadow-md backdrop-blur transition hover:bg-white"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      <div className="mt-4 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
        <div className="mb-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-emerald-100" />
            <span className="text-xs font-normal text-foreground">
              {formatEventTitle(eventName, config.eventDisplayNames)}
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground">
            {index + 1} / {media.length}
          </span>
        </div>
        <p className="text-sm font-light leading-relaxed text-muted-foreground">{caption}</p>
      </div>

      {media.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {media.map((item, dotIndex) => (
            <button
              key={item.src}
              type="button"
              onClick={() => goTo(dotIndex)}
              className={`h-1.5 rounded-full transition-all ${
                dotIndex === index ? "w-6 bg-foreground" : "w-1.5 bg-muted-foreground/30"
              }`}
              aria-label={`Go to media ${dotIndex + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const LogoMediaDisplay = ({
  media,
  caption,
}: {
  media: HomepageMedia;
  caption?: string;
}) => (
  <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-6 bg-white p-10">
    <img
      src={media.src}
      alt={media.alt}
      className="max-h-40 w-auto object-contain md:max-h-56"
    />
    {caption && (
      <p className="max-w-sm text-center text-sm font-light leading-relaxed text-muted-foreground">
        {caption}
      </p>
    )}
  </div>
);

const LargeVideoDisplay = ({
  media,
  caption,
}: {
  media: HomepageMedia;
  caption?: string;
}) => (
  <div className="flex flex-col bg-black">
    <video
      className="h-[520px] w-full bg-black object-contain md:h-[860px]"
      controls
      muted
      playsInline
      preload="metadata"
      aria-label={media.alt}
    >
      <source src={media.src} />
    </video>
    {caption && (
      <p className="bg-white/95 px-6 py-4 text-sm font-light leading-relaxed text-muted-foreground">
        {caption}
      </p>
    )}
  </div>
);

const EventPortfolioDetail = ({ activity: a, config }: Props) => {
  const backTo = `/activities/${a.category.toLowerCase()}`;
  const allPortfolioMedia =
    homepageActivities.find((activity) => activity.title === config.mediaTitle)?.media ?? [];
  const featuredCarouselItems = (() => {
    if (!config.featuredMedia) {
      return [];
    }

    const items = allPortfolioMedia
      .filter(config.filterMedia ?? (() => true))
      .filter((item) => config.featuredMedia!.match(item));

    return config.featuredMedia.sort ? config.featuredMedia.sort(items) : items;
  })();
  const portfolioMedia = allPortfolioMedia
    .filter(config.filterMedia ?? (() => true))
    .filter((item) => !featuredCarouselItems.some((featured) => featured.src === item.src));
  const eventSections = groupMediaByEvent(portfolioMedia, config);
  const heroMedia =
    (a.coverImage
      ? allPortfolioMedia.find((item) => item.src === a.coverImage && item.type === "image")
      : undefined) ??
    eventSections[0]?.items.find((item) => item.type === "image") ??
    portfolioMedia.find((item) => item.type === "image") ??
    portfolioMedia[0];

  return (
    <section className="pt-28 pb-20 px-6 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary)/0.45)_45%,hsl(var(--background))_100%)]">
      <div className="max-w-6xl mx-auto">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          {categoryDisplayNames[a.category]}
        </Link>

        <div className="mb-16 overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground tracking-wide mb-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {a.date}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  {a.org}
                </span>
                {config.websiteUrl && (
                  <a
                    href={config.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 transition-colors hover:bg-secondary/70 hover:text-foreground"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    {config.websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </a>
                )}
              </div>

              <p className="text-xs font-light uppercase tracking-widest text-muted-foreground mb-4">
                {config.eyebrow}
              </p>
              <h1 className="text-4xl md:text-6xl font-normal tracking-wide text-foreground mb-5 leading-tight">
                {a.title}
              </h1>
              {a.role && (
                <p className="text-lg font-light text-muted-foreground mb-7">{a.role}</p>
              )}
              <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                {a.summary}
              </p>

              <div className="mt-9 grid grid-cols-2 gap-3">
                {config.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-2xl border border-border bg-background p-4 ${
                      config.stats.length === 1 ? "col-span-2" : ""
                    }`}
                  >
                    <p className="text-2xl font-normal text-foreground">{stat.value}</p>
                    <p className="text-[10px] font-light uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {heroMedia && (
              heroMedia.type === "video" ? (
                <video
                  className="h-80 w-full bg-black object-contain lg:h-full"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={heroMedia.alt}
                >
                  <source src={heroMedia.src} />
                </video>
              ) : (
                <img
                  src={heroMedia.src}
                  alt={heroMedia.alt}
                  className={imageFitClass(config, "h-80 lg:h-full")}
                />
              )
            )}
          </div>
        </div>

        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-light uppercase tracking-widest text-muted-foreground mb-3">
              {config.sectionLabel}
            </p>
            <h2 className="text-3xl md:text-5xl font-normal tracking-wide text-foreground">
              {config.sectionTitle}
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            {config.sectionIntro}
          </p>
        </div>

        {featuredCarouselItems.length > 0 && config.featuredMedia && (
          <div className="mb-12 overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <div className="p-6 md:p-8">
              <p className="mb-3 text-xs font-light uppercase tracking-widest text-muted-foreground">
                {config.featuredMedia.label ?? "Featured Media"}
              </p>
              <h3 className="mb-5 text-2xl font-normal tracking-wide text-foreground md:text-3xl">
                {config.featuredMedia.title}
              </h3>
              {config.featuredMedia.description && (
                <div className="rounded-2xl border border-dashed border-border bg-background p-4">
                  <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    Overview
                  </p>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {config.featuredMedia.description}
                  </p>
                </div>
              )}
            </div>
            <EventCarousel
              eventName={config.featuredMedia.title}
              media={featuredCarouselItems}
              config={config}
            />
          </div>
        )}

        <div className="space-y-8">
          {eventSections.map((event, eventIndex) => {
            const description = config.eventDescriptions?.[event.eventName];
            const variant = config.eventMediaVariant?.[event.eventName];
            const firstItem = event.items[0];
            const isFullWidthMedia = variant === "large-video";

            const textPanel = (
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="max-w-[12rem] text-sm font-light uppercase tracking-widest text-muted-foreground">
                      {config.eventDates?.[event.eventName] || "Date to add"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                      <Images className="h-3.5 w-3.5" />
                      {event.items.length} media
                    </span>
                  </div>

                  <h3 className={`font-normal tracking-wide text-foreground mb-4 ${
                    eventIndex === 1 ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
                  }`}>
                    {formatEventTitle(event.eventName, config.eventDisplayNames)}
                  </h3>
                  <div className="rounded-2xl border border-dashed border-border bg-background p-4">
                    <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                      {description ? "Overview" : "Description to add"}
                    </p>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      {description || "Add what you did, who you worked with, and what this moment meant here."}
                    </p>
                  </div>
                </div>
              </div>
            );

            const mediaPanel = (() => {
              if (variant === "logo" && firstItem) {
                return (
                  <LogoMediaDisplay
                    media={firstItem}
                    caption={config.getMediaCaption?.(firstItem, event.eventName, 0)}
                  />
                );
              }

              if (variant === "large-video" && firstItem) {
                return (
                  <LargeVideoDisplay
                    media={firstItem}
                    caption={config.getMediaCaption?.(firstItem, event.eventName, 0)}
                  />
                );
              }

              return (
                <EventCarousel eventName={event.eventName} media={event.items} config={config} />
              );
            })();

            return (
              <ScrollReveal
                key={event.eventName}
                direction={eventIndex % 2 === 0 ? "left" : "right"}
              >
                <article className="group/event relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <HoverBubbles />
                  {isFullWidthMedia ? (
                    <div className="grid grid-cols-1">
                      {textPanel}
                      {mediaPanel}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr]">
                      <div className={eventIndex % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                        {textPanel}
                      </div>
                      <div className={eventIndex % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                        {mediaPanel}
                      </div>
                    </div>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {config.extraSections?.map((section) => (
          <div
            key={section.title}
            className="mt-14 grid grid-cols-1 gap-6 rounded-[2rem] border border-border bg-card p-6 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:p-8"
          >
            <div>
              <p className="text-xs font-light uppercase tracking-widest text-muted-foreground mb-3">
                {section.label}
              </p>
              <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-secondary px-4 py-3 text-sm font-light leading-relaxed text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-14 rounded-[2rem] border border-border bg-card p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-light uppercase tracking-widest text-muted-foreground mb-3">
                Key Highlights
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default EventPortfolioDetail;
