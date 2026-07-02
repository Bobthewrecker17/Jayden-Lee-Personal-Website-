import { useScrollFade } from "@/hooks/use-scroll-fade";
import { Trophy } from "lucide-react";

interface Award {
  title: string;
  org: string;
  date: string;
  icon: string;
  accent: string;
}

const awards: Award[] = [
  {
    title: "Conrad Challenge Innovator Award",
    org: "Conrad Foundation",
    date: "March 2026",
    icon: "🏆",
    accent: "from-amber-400/20 to-orange-400/10 border-amber-200",
  },
  {
    title: "Consulate General Award Certificate",
    org: "Republic of Korea in San Francisco",
    date: "February 2026",
    icon: "🇰🇷",
    accent: "from-blue-400/20 to-indigo-400/10 border-blue-200",
  },
  {
    title: "ACSL State First Place — Senior 5 Contest",
    org: "American Computer Science League, State of California",
    date: "2025-2026",
    icon: "💻",
    accent: "from-fuchsia-400/20 to-pink-400/10 border-fuchsia-200",
  },
  {
    title: "ACSL First Place — Senior 3 Contest",
    org: "American Computer Science League",
    date: "May 2025",
    icon: "💻",
    accent: "from-violet-400/20 to-purple-400/10 border-violet-200",
  },
  {
    title: "Gold Presidential Volunteer Service Award",
    org: "United States Government",
    date: "2023-2025",
    icon: "🏅",
    accent: "from-yellow-400/20 to-amber-400/10 border-yellow-200",
  },
  {
    title: "People of Parks Program Award",
    org: "City of Dublin",
    date: "2026",
    icon: "🌿",
    accent: "from-emerald-400/20 to-green-400/10 border-emerald-200",
  },
  {
    title: "CA Legislative Assembly Certificate of Recognition",
    org: "California Legislative Assembly",
    date: "2025",
    icon: "📜",
    accent: "from-sky-400/20 to-blue-400/10 border-sky-200",
  },
  {
    title: "Ministry of Public Health and Social Assistance Award",
    org: "Ministry of Public Health and Social Assistance",
    date: "2025",
    icon: "🤝",
    accent: "from-teal-400/20 to-cyan-400/10 border-teal-200",
  },
  {
    title: "Certificate of Recognition",
    org: "Municipality of New Santa Rosa",
    date: "2025",
    icon: "🏛️",
    accent: "from-stone-400/20 to-zinc-400/10 border-stone-200",
  },
  {
    title: "Certificate of Appreciation",
    org: "Santa Clara City Council",
    date: "2025",
    icon: "🌟",
    accent: "from-lime-400/20 to-green-400/10 border-lime-200",
  },
  {
    title: "Certificate of Recognition",
    org: "Ophthalmological Hospital",
    date: "2025",
    icon: "👁️",
    accent: "from-cyan-400/20 to-sky-400/10 border-cyan-200",
  },
  {
    title: "Consulate General Award Certificate",
    org: "Republic of Korea in San Francisco",
    date: "2024",
    icon: "🇰🇷",
    accent: "from-blue-400/20 to-indigo-400/10 border-blue-200",
  },
  {
    title: "The Order of Peace Korea Medal",
    org: "Korea",
    date: "2024",
    icon: "🕊️",
    accent: "from-indigo-400/20 to-blue-400/10 border-indigo-200",
  },
  {
    title: "Certificate of Congressional Recognition",
    org: "United States Congress",
    date: "2024",
    icon: "🏛️",
    accent: "from-red-400/20 to-rose-400/10 border-red-200",
  },
  {
    title: "Senator Leadership Award",
    org: "State Senator",
    date: "2024",
    icon: "⭐",
    accent: "from-orange-400/20 to-amber-400/10 border-orange-200",
  },
  {
    title: "CPR/AED Certificate",
    org: "Certified",
    date: "January",
    icon: "❤️",
    accent: "from-rose-400/20 to-pink-400/10 border-rose-200",
  },
];

const awardGroups = [
  {
    title: "Innovation Awards",
    description: "Recognition for entrepreneurship, leadership, and creative problem solving.",
    awards: awards.filter((award) =>
      [
        "Conrad Challenge Innovator Award",
      ].includes(award.title)
    ),
  },
  {
    title: "Volunteer Awards",
    description: "Service recognitions from government, civic, and community organizations.",
    awards: awards.filter((award) =>
      [
        "Consulate General Award Certificate",
        "Gold Presidential Volunteer Service Award",
        "People of Parks Program Award",
        "CA Legislative Assembly Certificate of Recognition",
        "Ministry of Public Health and Social Assistance Award",
        "Certificate of Recognition",
        "Certificate of Appreciation",
        "The Order of Peace Korea Medal",
        "Certificate of Congressional Recognition",
        "Senator Leadership Award",
        "CPR/AED Certificate",
      ].includes(award.title)
    ),
  },
  {
    title: "Computer Science Awards",
    description: "Awards connected to programming and computational problem solving.",
    awards: awards.filter((award) =>
      [
        "ACSL First Place — Senior 3 Contest",
        "ACSL State First Place — Senior 5 Contest",
      ].includes(award.title)
    ),
  },
];

const AwardTab = ({ award, index }: { award: Award; index: number }) => (
  <article
    tabIndex={0}
    className={`group/award relative overflow-hidden bg-gradient-to-br ${award.accent} border rounded-2xl p-4 shadow-sm outline-none transition-all duration-500 ease-out hover:z-20 hover:-translate-y-2 hover:shadow-xl focus-visible:z-20 focus-visible:-translate-y-2 focus-visible:shadow-xl focus-visible:ring-2 focus-visible:ring-ring/30`}
    style={{ marginTop: index === 0 ? 0 : -10 }}
  >
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background/70 text-xl shadow-sm transition-transform duration-500 group-hover/award:scale-110 group-focus-visible/award:scale-110">
        {award.icon}
      </div>
      <div className="min-w-0">
        <h3 className="truncate text-sm font-normal leading-snug text-foreground transition-all duration-500 group-hover/award:whitespace-normal group-hover/award:text-base group-focus-visible/award:whitespace-normal group-focus-visible/award:text-base">
          {award.title}
        </h3>
        <p className="text-[11px] font-light uppercase tracking-widest text-muted-foreground/70">
          {award.date}
        </p>
      </div>
    </div>

    <div className="max-h-0 opacity-0 transition-all duration-500 group-hover/award:mt-5 group-hover/award:max-h-44 group-hover/award:opacity-100 group-focus-visible/award:mt-5 group-focus-visible/award:max-h-44 group-focus-visible/award:opacity-100">
      <p className="mb-3 text-[10px] font-light uppercase tracking-widest text-muted-foreground">
        Specifics
      </p>
      <div className="grid grid-cols-1 gap-2">
        <div className="rounded-xl bg-background/70 px-3 py-2">
          <p className="text-[10px] font-light uppercase tracking-widest text-muted-foreground/70">
            Organization
          </p>
          <p className="text-xs font-light leading-relaxed text-foreground">{award.org}</p>
        </div>
        <div className="rounded-xl bg-background/70 px-3 py-2">
          <p className="text-[10px] font-light uppercase tracking-widest text-muted-foreground/70">
            Date
          </p>
          <p className="text-xs font-light leading-relaxed text-foreground">{award.date}</p>
        </div>
      </div>
    </div>
  </article>
);

const AwardsSection = () => {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section className="pt-28 pb-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <p className="text-xs font-light uppercase tracking-widest text-muted-foreground">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-normal tracking-wide text-foreground">
            Awards & Achievements
          </h2>
          <p className="font-light text-muted-foreground max-w-lg mx-auto">
            Recognitions I've received for leadership, service, and academic excellence.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6">
          {awardGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-3xl border border-border bg-card/70 p-4 md:p-5"
            >
              <div className="mb-5">
                <p className="text-[10px] font-light uppercase tracking-widest text-muted-foreground mb-2">
                  {group.awards.length} recognition{group.awards.length === 1 ? "" : "s"}
                </p>
                <h3 className="text-xl font-normal tracking-wide text-foreground">
                  {group.title}
                </h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              </div>

              <div className="pt-2">
                {group.awards.map((award, index) => (
                  <AwardTab
                    key={`${award.title}-${award.date}-${award.org}`}
                    award={award}
                    index={index}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
