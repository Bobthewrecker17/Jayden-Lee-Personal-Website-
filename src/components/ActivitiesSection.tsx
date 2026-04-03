import { Badge } from "@/components/ui/badge";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import { useState } from "react";
import { ImagePlus } from "lucide-react";

type Category = "School" | "Christian" | "Volunteering" | "Research";

interface Activity {
  title: string;
  org: string;
  date: string;
  description: string;
  category: Category;
  image?: string;
}

const activities: Activity[] = [
  // School
  {
    title: "Friends in Serving Him — Christian Club President",
    org: "Dublin High School",
    date: "April 2024 – Present",
    description: "Refounded and re-established the Friends in Serving Him Christian club after it had been discontinued. Led and coordinated a club of approximately 40 members. Planned and executed an outreach event with 100+ attendees promoting Christianity.",
    category: "School",
  },
  {
    title: "Generation Code Club President",
    org: "Dublin High School",
    date: "July 2024 – Present",
    description: "Delivered 6-week instructional sessions for middle school students teaching introductory Python. Led student officers and organized meetings. Coordinated with school districts to plan and execute coding camps.",
    category: "School",
  },
  {
    title: "Chamber Orchestra — First Violin (4th Chair)",
    org: "Dublin High School",
    date: "August 2024 – Present",
    description: "Played first violin contributing to ensemble performance. Participated in the Midwest Clinic as an orchestra member.",
    category: "School",
  },
  // Christian
  {
    title: "New Life Church Youth Praise Team Leader",
    org: "New Life Church",
    date: "July 2024 – Present",
    description: "Led a youth praise team of ~7 members. Coordinated rehearsals and song arrangements. Fostered a collaborative and supportive musical environment.",
    category: "Christian",
  },
  {
    title: "Navajo Mission Trip — Youth Leader",
    org: "Church Mission",
    date: "November 22–25, 2025",
    description: "Served as Youth Leader guiding 10+ students from elementary through high school. Led evangelism efforts and outreach activities for groups of ~50 Navajo children and adults, organizing programs aimed at encouragement and community engagement.",
    category: "Christian",
  },
  {
    title: "Guatemala Medical Camp",
    org: "Medical Mission",
    date: "June 18–25, 2025",
    description: "Shadowed cataract eye surgeries, observing surgical techniques and patient care. Assisted with pre-surgical patient preparation. Led dance and movement activities in rural villages to engage patients and community members.",
    category: "Christian",
  },
  // Volunteering
  {
    title: "Hwarang Youth Foundation — Regional President & Systems Manager",
    org: "Hwarang Youth Foundation",
    date: "April 2023 – Present",
    description: "Led a regional chapter of ~10 members while overseeing digital infrastructure supporting ~70 volunteers and coordinating service initiatives contributing to 1000+ volunteer hours. Developed software tools and website systems to track volunteer hours.",
    category: "Volunteering",
  },
  {
    title: "AI Senior Center Workshops",
    org: "Senior Centers",
    date: "July 2025 – Present",
    description: "Led interactive workshops for 70+ seniors across multiple centers on using generative AI for search, writing, and communication. Co-developed tech curriculum with a Google AI consultant.",
    category: "Volunteering",
  },
  {
    title: "Hwarang Youth Foundation Member",
    org: "Hwarang Youth Foundation",
    date: "August 2022 – Present",
    description: "Volunteered in local activities in Dublin and Santa Clara. Tutored students in English, Korean, and coding; interacted with seniors at senior centers; and participated in local park cleanups. 1000+ volunteer hours.",
    category: "Volunteering",
  },
  // Research
  {
    title: "Agentic AI Research",
    org: "Aspiring Scholars Directed Research Program (ASDRP)",
    date: "Jan 2025 – Feb 2026",
    description: "Researched multi-agent communication and coordination systems. Co-authored a JEI research paper titled \"The Effect of Communication Structure on Multi-Agent System Outputs.\" Developed a Hyper-Local Growth Engine for small-medium businesses.",
    category: "Research",
  },
  {
    title: "BioVibe Startup",
    org: "Student Startup",
    date: "April 2024 – Present",
    description: "Designed and developed a personalized stress-tracking headband tailored for high school students. Collaborated with a team of three students to research, prototype, and refine the wearable device. Integrated stress-monitoring principles to support student well-being.",
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
          {(["All", ...categories] as const).map((cat) => {
            const count = cat === "All" ? activities.length : activities.filter(a => a.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat} <span className="ml-1 opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Activity cards */}
        <div className="space-y-6">
          {filtered.map((a) => {
            const styles = categoryStyles[a.category];
            return (
              <div
                key={`${a.title}-${a.category}`}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image placeholder area */}
                {a.image ? (
                  <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-36 bg-secondary/60 flex items-center justify-center">
                    <div className="text-center text-muted-foreground/50">
                      <ImagePlus className="w-8 h-8 mx-auto mb-1" />
                      <p className="text-xs">Add a photo</p>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge className={`${styles.badge} border-0 text-xs`}>
                      {a.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{a.org}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">No activities in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default ActivitiesSection;
