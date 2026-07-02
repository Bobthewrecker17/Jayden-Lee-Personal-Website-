import { Church, Code2, Crown, Music2, Network, PlayCircle, ShieldCheck, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useScrollFade } from "@/hooks/use-scroll-fade";

type LeadershipVideo = {
  title: string;
  src: string;
  poster: string;
  alt: string;
};

type LeadershipVideoEvent = {
  month: string;
  title: string;
  description: string;
  videos: LeadershipVideo[];
};

type LeadershipRole = {
  grade: string;
  dateRange: string;
  title: string;
  description: string;
  activities: string[];
  icon: LucideIcon;
  videos?: LeadershipVideo[];
};

const leadershipRoles: LeadershipRole[] = [
  {
    grade: "9th-10th Grade",
    dateRange: "May 2023 - May 2025",
    title: "Hwarang SV District Systems Manager",
    description:
      "Supported the district's digital systems and helped organize service-hour tracking and volunteer coordination workflows.",
    activities: [
      "Maintained and improved volunteer-hour tracking systems for Hwarang SV District",
      "Helped organize member data, service records, and communication workflows",
      "Supported chapter leaders with technical setup for volunteer coordination",
      "Built a foundation for more efficient district-wide service reporting",
    ],
    icon: Network,
  },
  {
    grade: "10th-12th Grade",
    dateRange: "July 2024 - Present",
    title: "Generation Code President",
    description:
      "Founded and lead Generation Code, a coding education club that makes programming more accessible to younger students.",
    activities: [
      "Led student officers and organized club meetings",
      "Built structured introductory Python lessons for middle school students",
      "Coordinated with school districts to plan and execute coding camps",
      "Helped younger students build confidence through hands-on programming",
    ],
    icon: Code2,
  },
  {
    grade: "10th-12th Grade",
    dateRange: "July 2024 - Present",
    title: "Youth Praise Team Leader",
    description:
      "Led the youth praise team at New Life Church in worship, coordinating rehearsals and fostering a collaborative musical environment for weekly services.",
    activities: [
      "Led a youth praise team of about seven members",
      "Coordinated rehearsals and song arrangements",
      "Supported musicians across instruments and vocals",
      "Helped create a collaborative worship environment for weekly services",
    ],
    icon: Music2,
  },
  {
    grade: "10th-12th Grade",
    dateRange: "August 2024 - Present",
    title: "Friends in Serving Him President",
    description:
      "Refounded and led the Friends in Serving Him Christian club, rebuilding it into an active faith community on campus.",
    activities: [
      "Refounded the club after it had been discontinued",
      "Led weekly meetings, discussions, and community-building activities",
      "Coordinated outreach planning for an event with 100+ attendees",
      "Helped grow the club into a consistent space for Christian fellowship at school",
    ],
    icon: Church,
  },
  {
    grade: "11th Grade",
    dateRange: "May 2025 - May 2026",
    title: "Hwarang SV Dublin Chapter President",
    description:
      "Led the Dublin chapter locally, coordinated members, and helped guide service projects for the community.",
    activities: [
      "Led Dublin chapter meetings and coordinated chapter members",
      "Planned and supported local service projects with chapter volunteers",
      "Communicated with district leadership about chapter needs and progress",
      "Helped create a stronger structure for consistent community service",
    ],
    icon: ShieldCheck,
  },
  {
    grade: "12th Grade",
    dateRange: "May 2026 - Present",
    title: "Hwarang SV District Chairperson",
    description:
      "Expanded leadership from chapter-level work to a district-wide role, supporting broader planning and chapter direction.",
    activities: [
      "Guided district-level planning across multiple Hwarang chapters",
      "Coordinated with chapter presidents to align events and service goals",
      "Supported broader volunteer initiatives and district leadership decisions",
      "Helped shape long-term direction for Hwarang SV service programs",
    ],
    icon: Crown,
    videos: [
      {
        title: "District Chairperson Handover Ceremony",
        src: "/homepage-media/generated/leadership/june-10-26.mp4",
        poster: "/homepage-media/generated/leadership/june-10-26.mp4.png",
        alt: "June 2026 district chairperson handover ceremony video",
      },
    ],
  },
];

const leadershipVideoEvents: LeadershipVideoEvent[] = [
  {
    month: "August 2023",
    title: "First District Systems Manager Presentation",
    description:
      "My first presentation as District Systems Manager, and the first time I spoke in front of an audience. I was very nervous, but it marked the start of my leadership journey.",
    videos: [
      {
        title: "Leadership Speech",
        src: "/homepage-media/generated/leadership/august-22-2023.mp4",
        poster: "/homepage-media/generated/leadership/august-22-2023.mp4.png",
        alt: "August 2023 leadership speech video",
      },
      {
        title: "Leadership Speech",
        src: "/homepage-media/generated/leadership/august-23-2023.mp4",
        poster: "/homepage-media/generated/leadership/august-23-2023.mp4.png",
        alt: "August 2023 leadership speech video",
      },
    ],
  },
  {
    month: "March 2025",
    title: "Reciting Korea's Declaration of Independence",
    description:
      "Took part in reciting Korea's Declaration of Independence, an experience that reflected my Korean heritage and my embrace of that culture.",
    videos: [
      {
        title: "Leadership Speech",
        src: "/homepage-media/generated/leadership/3-1-25.mp4",
        poster: "/homepage-media/generated/leadership/3-1-25.mp4.png",
        alt: "March 2025 leadership speech video",
      },
    ],
  },
  {
    month: "April 2026",
    title: "Dublin High School Dubversity Rally Speech",
    description:
      "A speech I gave as FISH Club President about Christianity in my personal life for Dublin High School's Dubversity Rally.",
    videos: [
      {
        title: "Christianity in My Personal Life",
        src: "/homepage-media/generated/leadership/april-30-26.mp4",
        poster: "/homepage-media/generated/leadership/april-30-26.mp4.png",
        alt: "April 2026 leadership speech video",
      },
    ],
  },
  {
    month: "June 2026",
    title: "Hwarang Honorable Medal Address",
    description:
      "After receiving Hwarang's Honorable Medal, I spoke to more than 100 people, encouraging the younger generation about leadership and how volunteering has shaped my life — and can shape theirs too.",
    videos: [
      {
        title: "Leadership Speech",
        src: "/homepage-media/generated/leadership/june-10th-26.mp4",
        poster: "/homepage-media/generated/leadership/june-10th-26.mp4.png",
        alt: "June 2026 leadership speech video",
      },
    ],
  },
];

const timelineItems = [
  { type: "role" as const, roleIndex: 0 },
  { type: "video" as const, videoIndex: 0 },
  { type: "role" as const, roleIndex: 1 },
  { type: "role" as const, roleIndex: 2 },
  { type: "role" as const, roleIndex: 3 },
  { type: "video" as const, videoIndex: 1 },
  { type: "role" as const, roleIndex: 4 },
  { type: "video" as const, videoIndex: 2 },
  { type: "role" as const, roleIndex: 5 },
  { type: "video" as const, videoIndex: 3 },
];

const getVideoType = (src: string) => {
  const lowerSrc = src.toLowerCase();

  if (lowerSrc.endsWith(".mp4") || lowerSrc.includes(".mp4.")) {
    return "video/mp4";
  }

  if (lowerSrc.endsWith(".mov") || lowerSrc.endsWith(".m4v")) {
    return "video/quicktime";
  }

  return undefined;
};

const LazyVideo = ({
  src,
  poster,
  alt,
}: {
  src: string;
  poster: string;
  alt: string;
}) => {
  const [isActivated, setIsActivated] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const showPoster = Boolean(poster) && !posterFailed;

  if (!isActivated) {
    return (
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setIsActivated(true);
        }}
        className="group/preview relative block aspect-video w-full overflow-hidden bg-slate-950"
        aria-label={`Play ${alt}`}
      >
        {showPoster ? (
          <img
            src={poster}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/preview:scale-[1.02]"
            aria-hidden="true"
            onError={() => setPosterFailed(true)}
          />
        ) : (
          <video
            src={src}
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
        )}
        <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover/preview:bg-black/10" />
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-emerald-700 shadow-lg transition-transform duration-300 group-hover/preview:scale-105">
          <PlayCircle className="h-7 w-7" />
        </span>
      </button>
    );
  }

  return (
    <video
      className="aspect-video w-full bg-black object-cover"
      controls
      autoPlay
      muted
      playsInline
      poster={showPoster ? poster : undefined}
      preload="metadata"
      aria-label={alt}
      onClick={(event) => event.stopPropagation()}
    >
      <source src={src} type={getVideoType(src)} />
    </video>
  );
};

const LeadershipVideoCard = ({ event }: { event: LeadershipVideoEvent }) => {
  const isSingleVideo = event.videos.length === 1;

  return (
    <div className="group/video relative z-10 overflow-hidden rounded-[2rem] border border-border bg-card p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-100 hover:shadow-md hover:shadow-emerald-900/5">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-transform duration-300 ease-out group-hover/video:-translate-y-0.5">
          <PlayCircle className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[11px] font-light uppercase tracking-widest text-emerald-700">
            {event.month}
          </p>
          <h3 className="text-xl font-normal tracking-wide text-foreground md:text-2xl">
            {event.title}
          </h3>
        </div>
      </div>

      <p className="mb-5 text-sm font-light leading-relaxed text-muted-foreground">
        {event.description}
      </p>

      <div className={`grid grid-cols-1 gap-4 ${isSingleVideo ? "" : "lg:grid-cols-2"}`}>
        {event.videos.map((video) => (
          <div
            key={video.src}
            className="overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/60"
          >
            <div className="relative overflow-hidden bg-slate-950">
              <LazyVideo src={video.src} poster={video.poster} alt={video.alt} />
            </div>
            <div className="px-4 py-3">
              <p className="text-sm font-light leading-relaxed text-emerald-950/80">
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RoleDetailContent = ({ role }: { role: LeadershipRole }) => {
  const Icon = role.icon;

  return (
    <div className="mx-auto flex max-w-2xl flex-col justify-center">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs font-light uppercase tracking-widest text-muted-foreground">
            {role.grade}
          </p>
          <p className="mt-1 text-[11px] font-light uppercase tracking-widest text-emerald-700">
            {role.dateRange}
          </p>
          <h3 className="text-3xl font-normal tracking-wide text-foreground">
            {role.title}
          </h3>
        </div>
      </div>
      <p className="text-base font-light leading-relaxed text-muted-foreground">
        {role.description}
      </p>

      <div className="mt-6">
        <p className="mb-4 text-xs font-light uppercase tracking-widest text-emerald-700">
          Activities I Did
        </p>
        <div className="grid grid-cols-1 gap-3">
          {role.activities.map((activity) => (
            <div
              key={activity}
              className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-light leading-relaxed text-emerald-950/75"
            >
              {activity}
            </div>
          ))}
        </div>
        {role.videos && (
          <div className="mt-6">
            <p className="mb-4 text-xs font-light uppercase tracking-widest text-emerald-700">
              Related Video
            </p>
            <div className="grid grid-cols-1 gap-4">
              {role.videos.map((video) => (
                <div
                  key={video.src}
                  className="overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/60"
                >
                  <LazyVideo src={video.src} poster={video.poster} alt={video.alt} />
                  <div className="px-4 py-3">
                    <p className="text-sm font-light leading-relaxed text-emerald-950/80">
                      {video.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const LeadershipSection = () => {
  const ref = useScrollFade<HTMLDivElement>();
  const [activeRoleIndex, setActiveRoleIndex] = useState<number | null>(null);
  const lastScrollY = useRef(0);
  const activeRole = activeRoleIndex === null ? null : leadershipRoles[activeRoleIndex];

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current - 8) {
        setActiveRoleIndex(null);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="leadership" className="px-6 py-24 md:py-28">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs font-light uppercase tracking-widest text-muted-foreground">
            Leadership
          </p>
          <h2 className="mb-5 text-4xl font-normal tracking-wide text-foreground md:text-5xl">
            Growth Through Responsibility
          </h2>
          <p className="text-base font-light leading-relaxed text-muted-foreground">
            A chronological look at how my Hwarang leadership roles developed from systems work
            into chapter and district-level responsibility.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-emerald-400 to-transparent md:left-1/2 md:block" />

          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => {
              if (item.type === "video") {
                const event = leadershipVideoEvents[item.videoIndex];
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={`${event.month}-${event.title}`}
                    className="relative grid min-h-[230px] grid-cols-1 gap-5 md:grid-cols-2 md:gap-12"
                  >
                    <div className={isEven ? "md:pr-2" : "md:col-start-2 md:pl-2"}>
                      <LeadershipVideoCard event={event} />
                    </div>

                    <span className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-emerald-600 md:block" />
                  </article>
                );
              }

              const role = leadershipRoles[item.roleIndex];
              const Icon = role.icon;
              const isEven = index % 2 === 0;
              const isActive = activeRoleIndex === item.roleIndex;

              return (
                <article
                  key={role.title}
                  className="group/role relative grid min-h-[230px] grid-cols-1 gap-5 md:min-h-[270px] md:grid-cols-2 md:gap-12"
                >
                  <span
                    onClick={() => setActiveRoleIndex(null)}
                    className={`fixed inset-0 z-[70] backdrop-blur-0 transition-all duration-500 ${
                      isActive
                        ? "pointer-events-auto bg-background/75 backdrop-blur-sm"
                        : "pointer-events-none bg-background/0"
                    }`}
                  />
                  <div className={isEven ? "md:pr-2" : "md:col-start-2 md:pl-2"}>
                    <div
                      role="button"
                      tabIndex={0}
                      aria-expanded={isActive}
                      onClick={() => setActiveRoleIndex(isActive ? null : item.roleIndex)}
                      onKeyDown={(event) => {
                        if (event.key !== "Enter" && event.key !== " ") return;

                        event.preventDefault();
                        setActiveRoleIndex(isActive ? null : item.roleIndex);
                      }}
                      className="relative z-10 cursor-pointer rounded-[2rem] border border-border bg-card p-6 shadow-sm outline-none transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-100 hover:shadow-md hover:shadow-emerald-900/5 active:scale-[0.98] active:shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      <div className="pointer-events-none absolute inset-x-8 top-5 hidden h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent opacity-0 transition-opacity duration-300 ease-out md:block md:group-hover/role:opacity-100 md:group-focus-within/role:opacity-100" />
                      <div className="pointer-events-none absolute inset-x-8 bottom-5 hidden h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent opacity-0 transition-opacity duration-300 ease-out md:block md:group-hover/role:opacity-100 md:group-focus-within/role:opacity-100" />

                      <div className="grid gap-8">
                        <div>
                          <div className="mb-5 flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-transform duration-300 ease-out group-hover/role:-translate-y-0.5">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-xs font-light uppercase tracking-widest text-muted-foreground">
                                {role.grade}
                              </p>
                              <p className="mt-1 text-[11px] font-light uppercase tracking-widest text-emerald-700">
                                {role.dateRange}
                              </p>
                              <h3 className="text-xl font-normal tracking-wide text-foreground transition-all duration-500 md:text-2xl">
                                {role.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-sm font-light leading-relaxed text-muted-foreground">
                            {role.description}
                          </p>

                          <div className="hidden">
                            <p className="mb-4 text-xs font-light uppercase tracking-widest text-emerald-700">
                              Activities I Did
                            </p>
                            <div className="grid grid-cols-1 gap-3">
                              {role.activities.map((activity) => (
                                <div
                                  key={activity}
                                  className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-light leading-relaxed text-emerald-950/75"
                                >
                                  {activity}
                                </div>
                              ))}
                            </div>
                            {role.videos && (
                              <div
                                className="mt-6"
                                onClick={(event) => event.stopPropagation()}
                              >
                                <p className="mb-4 text-xs font-light uppercase tracking-widest text-emerald-700">
                                  Related Video
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                  {role.videos.map((video) => (
                                    <div
                                      key={video.src}
                                      className="overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/60"
                                    >
                                      <LazyVideo
                                        src={video.src}
                                        poster={video.poster}
                                        alt={video.alt}
                                      />
                                      <div className="px-4 py-3">
                                        <p className="text-sm font-light leading-relaxed text-emerald-950/80">
                                          {video.title}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>

                    <div
                      className={`pointer-events-none fixed left-1/2 top-24 z-[80] block max-h-[72vh] w-[calc(100vw-2rem)] -translate-x-1/2 origin-center overflow-y-auto rounded-[2rem] border border-emerald-200 bg-background p-6 shadow-2xl ring-1 ring-emerald-100 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] md:top-28 md:max-h-[68vh] md:w-[min(78vw,48rem)] md:p-8 ${
                        isActive
                          ? "pointer-events-auto scale-y-100 opacity-100"
                          : "scale-y-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`pointer-events-none absolute inset-x-8 top-5 h-px origin-center bg-gradient-to-r from-transparent via-emerald-300 to-transparent transition-transform delay-300 duration-700 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                      <div
                        className={`pointer-events-none absolute inset-x-8 bottom-5 h-px origin-center bg-gradient-to-r from-transparent via-emerald-300 to-transparent transition-transform delay-300 duration-700 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />

                      <div
                        className={`grid gap-8 transition-opacity delay-300 duration-700 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="mx-auto flex max-w-2xl flex-col justify-center">
                          <div className="mb-5 flex items-center gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <p className="text-xs font-light uppercase tracking-widest text-muted-foreground">
                                {role.grade}
                              </p>
                              <p className="mt-1 text-[11px] font-light uppercase tracking-widest text-emerald-700">
                                {role.dateRange}
                              </p>
                              <h3 className="text-3xl font-normal tracking-wide text-foreground">
                                {role.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-base font-light leading-relaxed text-muted-foreground">
                            {role.description}
                          </p>

                          <div className="mt-6">
                            <p className="mb-4 text-xs font-light uppercase tracking-widest text-emerald-700">
                              Activities I Did
                            </p>
                            <div className="grid grid-cols-1 gap-3">
                              {role.activities.map((activity) => (
                                <div
                                  key={activity}
                                  className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-light leading-relaxed text-emerald-950/75"
                                >
                                  {activity}
                                </div>
                              ))}
                            </div>
                            {role.videos && (
                              <div className="mt-6">
                                <p className="mb-4 text-xs font-light uppercase tracking-widest text-emerald-700">
                                  Related Video
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                  {role.videos.map((video) => (
                                    <div
                                      key={video.src}
                                      className="overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/60"
                                    >
                                      <LazyVideo
                                        src={video.src}
                                        poster={video.poster}
                                        alt={video.alt}
                                      />
                                      <div className="px-4 py-3">
                                        <p className="text-sm font-light leading-relaxed text-emerald-950/80">
                                          {video.title}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-emerald-600 md:block" />
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <>
            <span
              onClick={() => setActiveRoleIndex(null)}
              className={`fixed inset-0 z-[90] backdrop-blur-0 transition-all duration-500 ${
                activeRole
                  ? "pointer-events-auto bg-background/75 backdrop-blur-sm"
                  : "pointer-events-none bg-background/0"
              }`}
            />
            <div
              className={`fixed left-1/2 top-24 z-[100] max-h-[72vh] w-[calc(100vw-2rem)] -translate-x-1/2 overflow-y-auto rounded-[2rem] border border-emerald-200 bg-background p-6 shadow-2xl ring-1 ring-emerald-100 transition-transform duration-300 ease-out md:top-28 md:max-h-[68vh] md:w-[min(78vw,48rem)] md:p-8 ${
                activeRole
                  ? "pointer-events-auto block translate-y-0"
                  : "pointer-events-none hidden translate-y-3"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-8 top-5 h-px origin-center bg-gradient-to-r from-transparent via-emerald-300 to-transparent transition-transform delay-300 duration-700 ${
                  activeRole ? "scale-x-100" : "scale-x-0"
                }`}
              />
              <div
                className={`pointer-events-none absolute inset-x-8 bottom-5 h-px origin-center bg-gradient-to-r from-transparent via-emerald-300 to-transparent transition-transform delay-300 duration-700 ${
                  activeRole ? "scale-x-100" : "scale-x-0"
                }`}
              />

              <div className="grid gap-8">
                {activeRole && <RoleDetailContent role={activeRole} />}
              </div>
            </div>
          </>,
          document.body
        )}
    </section>
  );
};

export default LeadershipSection;
