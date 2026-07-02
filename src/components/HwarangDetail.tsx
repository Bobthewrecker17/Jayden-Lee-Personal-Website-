import { type ReactNode, useEffect, useRef, useState } from "react";
import { type Activity, categoryDisplayNames } from "@/data/activities";
import { homepageActivities, type HomepageMedia } from "@/data/homepageMedia";
import { ArrowLeft, Building2, Calendar, ChevronLeft, ChevronRight, Images, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  activity: Activity;
}

const hwarangMedia =
  homepageActivities.find((activity) => activity.title === "Hwarang Youth Foundation")?.media ?? [];

const impactStats = [
  { value: "70+", label: "Volunteers Coordinated" },
  { value: "1,000+", label: "Service Hours" },
];

const communityService = [
  "Tutored students in English, Korean, and coding",
  "Biweekly volunteered at MBK Senior Center, including with seniors experiencing dementia",
  "Bimonthly organized chapter recycling drives, donating proceeds to Guatemala eye surgeries",
  "Biweekly helped clean Alamo Creek Park through the P.O.P. Program, earning a City of Dublin award",
];

const eventOrder = [
  "6.25 Korean War 76th Anniversary",
  "Vision Festival 25-26",
  "Senior Center Volunteer Activity",
  "Recycling",
  "P.O.P. Program",
  "Tonkatsu",
  "24-25 LA GALA",
  "24-25 Guatemala",
  "Chapter Leadership",
];

const eventDescriptions: Record<string, string> = {
  "6.25 Korean War 76th Anniversary":
    "Helped organize an event commemorating the 76th anniversary of the Korean War, attended by the Korea Consulate General. We invited veterans, including Korean War veteran Donald Reed, and I supervised and led officers in preparing speeches from the younger generation about what these veterans mean to us — along with handwritten letters of appreciation.",
  "Vision Festival 25-26":
    "Vision Festival is Hwarang Youth Foundation's annual fundraiser for Guatemala cataract eye surgeries, featuring guest speeches, chapter performances, and a raffle. I performed in both a dance number and a band performance as vocalist.",
  "Senior Center Volunteer Activity":
    "Volunteered biweekly at MBK Senior Center for two hours, interacting with seniors since 9th grade and leading the effort in 11th grade. Working with seniors experiencing dementia and watching them age over time helped me realize the true value of time.",
  Recycling:
    "Organized bimonthly recycling collection with the Dublin chapter, gathering recyclables from individual members and selling them to a recycling center — with all proceeds donated toward Guatemala eye surgeries. Participated since 9th grade and led the initiative in 11th grade.",
  "P.O.P. Program":
    "Met biweekly on weekends to clean up Alamo Creek Park and trail, starting in 9th grade and leading the program in 11th grade. Our chapter received an award from the City of Dublin for consistently cleaning the park.",
  Tonkatsu:
    "Met every few months with other chapter members to make tonkatsu — a physically tiring but rewarding process. We collaborated with Korean food company Ploma to sell it on their website, directing the majority of profits toward Guatemala eye camps.",
  "24-25 LA GALA":
    "A ceremony hosted by International Hwarang with members from around the globe. I received awards recognizing my effort within Hwarang Youth Foundation, alongside many inspiring speeches.",
  "24-25 Guatemala":
    "Spent a week in Guatemala with the Hwarang Guatemala Medical Team, caring for patients before cataract surgery and bringing a Vacation Bible School day to children in Volcano Village. Read the full story on the Guatemala Medical Camp page.",
  "Chapter Leadership":
    "Served as Dublin Chapter President of Hwarang Youth Foundation from May 2025 to April 2026, leading about 10 chapter members, organizing volunteering activities, and helping new members grow into leaders themselves. I also helped launch the Fremont chapter, recruiting 10+ new members and advising them as they got started. As Dublin chapter we raised about $2,000, contributing to over $30,000 raised across the organization.",
};

const eventDates: Record<string, string> = {
  "6.25 Korean War 76th Anniversary": "June 2026",
  "Vision Festival 25-26": "February 2026",
  "Senior Center Volunteer Activity": "October 2025",
  Recycling: "April 2026",
  "P.O.P. Program": "2025-2026",
  Tonkatsu: "December 2025",
  "24-25 LA GALA": "June 2025",
  "24-25 Guatemala": "June 2025",
  "Chapter Leadership": "April 2023 - Present",
};

const formatEventTitle = (eventName: string) =>
  eventName.replace("24-25", "2024-2025").replace("25-26", "2025-2026");

const isPopAwardMedia = (media: HomepageMedia) =>
  media.eventName === "P.O.P. Program" &&
  media.originalName.includes("92C8EDF7-3B09-4EE8-9C04-D89DC0991310");

const groupMediaByEvent = (media: HomepageMedia[]) => {
  const groups = new Map<string, HomepageMedia[]>();

  media.forEach((item) => {
    const eventName = item.eventName || "Chapter Leadership";
    groups.set(eventName, [...(groups.get(eventName) ?? []), item]);
  });

  return Array.from(groups.entries())
    .map(([eventName, items]) => ({
      eventName,
      items: [...items].sort((a, b) => Number(isPopAwardMedia(a)) - Number(isPopAwardMedia(b))),
    }))
    .sort((a, b) => {
      const aIndex = eventOrder.indexOf(a.eventName);
      const bIndex = eventOrder.indexOf(b.eventName);

      if (aIndex === -1 && bIndex === -1) return a.eventName.localeCompare(b.eventName);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
};

const mediaCaptions: Record<string, string> = {};

const hwarangEventCaptionVariants: Record<string, string[]> = {
  "6.25 Korean War 76th Anniversary": [
    "Officers preparing handwritten letters of appreciation for Korean War veterans.",
    "The Korea Consulate General in attendance at our 76th anniversary commemoration.",
    "Korean War veteran Donald Reed at the anniversary event.",
    "Officers sharing speeches from the younger generation honoring veterans.",
  ],
  "Vision Festival 25-26": [
    "Performing at Vision Festival 2025-2026 to help raise funds for Guatemala eye surgeries.",
    "Dancing on stage at Vision Festival.",
    "Singing as vocalist in the band performance at Vision Festival.",
    "The raffle and guest speeches that helped raise funds for Guatemala at Vision Festival.",
  ],
  "Senior Center Volunteer Activity": [
    "Volunteering with seniors at MBK Senior Center.",
    "Leading the Dublin chapter's biweekly visits to MBK Senior Center.",
  ],
  Recycling: [
    "Sorting recyclables collected from chapter members.",
    "Organizing the Dublin chapter's bimonthly recycling drive for Guatemala.",
  ],
  "P.O.P. Program": [
    "Cleaning up Alamo Creek Park and trail through the P.O.P. Program.",
    "Biweekly weekend cleanup with the Dublin chapter.",
    "Picking up litter along Alamo Creek trail.",
    "Chapter members working together to keep Alamo Creek Park clean.",
  ],
  Tonkatsu: [
    "Making tonkatsu with chapter members — a tiring but rewarding process.",
    "Preparing tonkatsu to sell through our partnership with Ploma, supporting Guatemala eye camps.",
  ],
  "24-25 LA GALA": [
    "Receiving an award for my effort in Hwarang Youth Foundation at the LA GALA.",
    "Celebrating with international Hwarang members at the LA GALA.",
    "One of the many inspiring speeches at the 24-25 LA GALA.",
  ],
  "24-25 Guatemala": [
    "Serving with the Hwarang Guatemala Medical Team.",
    "Assisting with cataract eye surgery preparation in Guatemala.",
    "Time with the community during the Guatemala medical mission.",
  ],
  "Chapter Leadership": [
    "Leading Dublin Chapter meetings and service projects.",
  ],
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

const EventCarousel = ({ eventName, media }: { eventName: string; media: HomepageMedia[] }) => {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const activeMedia = media[index];
  const imageFitClass = (item: HomepageMedia) =>
    isPopAwardMedia(item)
      ? "h-[360px] w-full bg-[#f7f1e8] object-contain p-3 md:h-[500px]"
      : "h-[360px] w-full object-cover object-[center_60%] md:h-[500px]";

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

  const eventCaptionVariants = hwarangEventCaptionVariants[eventName];
  const caption =
    mediaCaptions[activeMedia.src] ||
    (isPopAwardMedia(activeMedia)
      ? "The award received from the City of Dublin for consistently cleaning Alamo Creek Park through the P.O.P. Program."
      : eventCaptionVariants?.[index % eventCaptionVariants.length]) ||
    `Add a short caption for ${formatEventTitle(eventName)} photo ${index + 1}.`;

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
              {item.type === "video" ? (
                <video
                  className="h-[360px] w-full bg-black object-cover object-[center_60%] md:h-[500px]"
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
                  className={imageFitClass(item)}
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
              {formatEventTitle(eventName)}
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

const HoverBubbles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
    <span className="absolute right-16 top-10 h-3 w-3 rounded-full bg-emerald-200/70 opacity-0 transition-all duration-700 group-hover/event:-translate-y-8 group-hover/event:scale-150 group-hover/event:opacity-100" />
    <span className="absolute right-8 top-24 h-2 w-2 rounded-full bg-sky-200/80 opacity-0 transition-all duration-700 delay-75 group-hover/event:-translate-y-10 group-hover/event:translate-x-2 group-hover/event:scale-150 group-hover/event:opacity-100" />
    <span className="absolute left-12 bottom-16 h-2.5 w-2.5 rounded-full bg-violet-200/70 opacity-0 transition-all duration-700 delay-100 group-hover/event:-translate-y-8 group-hover/event:-translate-x-2 group-hover/event:scale-150 group-hover/event:opacity-100" />
    <span className="absolute left-24 bottom-8 h-1.5 w-1.5 rounded-full bg-amber-200/80 opacity-0 transition-all duration-700 delay-150 group-hover/event:-translate-y-10 group-hover/event:scale-150 group-hover/event:opacity-100" />
  </div>
);

const HwarangDetail = ({ activity: a }: Props) => {
  const backTo = `/activities/${a.category.toLowerCase()}`;
  const eventSections = groupMediaByEvent(hwarangMedia);
  const heroImage = eventSections[0]?.items.find((item) => item.type === "image") ?? hwarangMedia[0];

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
              </div>

              <p className="text-xs font-light uppercase tracking-widest text-muted-foreground mb-4">
                Event Portfolio
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
                {impactStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-2xl font-normal text-foreground">{stat.value}</p>
                    <p className="text-[10px] font-light uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {heroImage && (
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="h-80 w-full object-cover object-[center_60%] lg:h-full"
              />
            )}
          </div>
        </div>

        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-light uppercase tracking-widest text-muted-foreground mb-3">
              Hwarang Events
            </p>
            <h2 className="text-3xl md:text-5xl font-normal tracking-wide text-foreground">
              A record of each service project
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            From commemorating Korean War veterans to raising funds for Guatemala eye surgeries, each section below covers a service project I helped organize or lead.
          </p>
        </div>

        <div className="space-y-8">
          {eventSections.map((event, eventIndex) => {
            const description = eventDescriptions[event.eventName];

            return (
              <ScrollReveal
                key={event.eventName}
                direction={eventIndex % 2 === 0 ? "left" : "right"}
              >
                <article className="group/event relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <HoverBubbles />
                  <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr]">
                  <div
                    className={`flex flex-col justify-between p-6 md:p-8 ${
                      eventIndex % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                      <div>
                        <div className="mb-8 flex items-center justify-between gap-4">
                          <span className="max-w-[12rem] text-sm font-light uppercase tracking-widest text-muted-foreground">
                            {eventDates[event.eventName] || "Date to add"}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                            <Images className="h-3.5 w-3.5" />
                            {event.items.length} media
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
                          {formatEventTitle(event.eventName)}
                        </h3>
                        <div className="rounded-2xl border border-dashed border-border bg-background p-4">
                          <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                            Description to add
                          </p>
                          <p className="text-sm font-light leading-relaxed text-muted-foreground">
                            {description || "Add what you did, who you served, and what this event meant here."}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={eventIndex % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                      <EventCarousel eventName={event.eventName} media={event.items} />
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 rounded-[2rem] border border-border bg-card p-6 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div>
            <p className="text-xs font-light uppercase tracking-widest text-muted-foreground mb-3">
              Broader Service
            </p>
            <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
              Community volunteering through Hwarang
            </h2>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Some of my Hwarang work happened across recurring service activities rather than a single photo folder, so I grouped those responsibilities here.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {communityService.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-secondary px-4 py-3 text-sm font-light leading-relaxed text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

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

export default HwarangDetail;
