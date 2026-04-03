import { Badge } from "@/components/ui/badge";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import { useState } from "react";

type Category = "School" | "Christian" | "Volunteering" | "Research";

interface Activity {
  title: string;
  org: string;
  date: string;
  description: string;
  category: Category;
}

const activities: Activity[] = [
  {
    title: "Student Council President",
    org: "School Student Government",
    date: "2024 – Present",
    description: "Leading weekly council meetings, organizing school-wide events, and representing student interests to administration.",
    category: "School",
  },
  {
    title: "Debate Club Vice President",
    org: "School Debate Team",
    date: "2022 – Present",
    description: "Competing in regional tournaments, coaching new members, and organizing practice sessions.",
    category: "School",
  },
  {
    title: "Youth Group Leader",
    org: "Community Church",
    date: "2023 – Present",
    description: "Mentoring younger students in weekly Bible study, organizing retreats, and coordinating service projects.",
    category: "Christian",
  },
  {
    title: "Worship Team Member",
    org: "Community Church",
    date: "2021 – Present",
    description: "Playing guitar and singing on the worship team for Sunday services and special events.",
    category: "Christian",
  },
  {
    title: "Habitat for Humanity Volunteer",
    org: "Local Chapter",
    date: "2023 – Present",
    description: "Building homes on weekends, fundraising for materials, and recruiting fellow students to join the cause.",
    category: "Volunteering",
  },
  {
    title: "Food Bank Assistant",
    org: "City Food Bank",
    date: "2022 – 2023",
    description: "Sorting and distributing food donations every Saturday, helping families in need within the community.",
    category: "Volunteering",
  },
  {
    title: "Science Fair Research",
    org: "School Science Department",
    date: "2023 – Present",
    description: "Conducting independent research on environmental science topics and presenting findings at regional competitions.",
    category: "Research",
  },
];

const categories: Category[] = ["School", "Christian", "Volunteering", "Research"];

const categoryStyles: Record<Category, { badge: string; dot: string }> = {
  School: {
    badge: "bg-clubs text-clubs-foreground",
    dot: "bg-clubs",
  },
  Christian: {
    badge: "bg-faith text-faith-foreground",
    dot: "bg-faith",
  },
  Volunteering: {
    badge: "bg-volunteer text-volunteer-foreground",
    dot: "bg-volunteer",
  },
  Research: {
    badge: "bg-primary text-primary-foreground",
    dot: "bg-primary",
  },
};

const ActivitiesSection = () => {
  const ref = useScrollFade<HTMLDivElement>();
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = active === "All"
    ? activities
    : activities.filter((a) => a.category === active);

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">
          Activities & Involvement
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto">
          Filter by category to explore the different areas I'm involved in.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {filtered.map((a, i) => {
              const isLeft = i % 2 === 0;
              const styles = categoryStyles[a.category];
              return (
                <div
                  key={`${a.title}-${a.category}`}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start md:items-center gap-4`}
                >
                  {/* Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full ${styles.dot} md:-translate-x-1.5 translate-y-1 z-10`} />

                  {/* Card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge className={`${styles.badge} border-0 text-xs`}>
                          {a.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{a.date}</span>
                      </div>
                      <h3 className="font-semibold text-foreground">{a.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{a.org}</p>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">No activities in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default ActivitiesSection;
