import { Badge } from "@/components/ui/badge";

type Category = "Clubs" | "Volunteering" | "Faith";

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
    category: "Clubs",
  },
  {
    title: "Youth Group Leader",
    org: "Community Church",
    date: "2023 – Present",
    description: "Mentoring younger students in weekly Bible study, organizing retreats, and coordinating service projects.",
    category: "Faith",
  },
  {
    title: "Habitat for Humanity Volunteer",
    org: "Local Chapter",
    date: "2023 – Present",
    description: "Building homes on weekends, fundraising for materials, and recruiting fellow students to join the cause.",
    category: "Volunteering",
  },
  {
    title: "Debate Club Vice President",
    org: "School Debate Team",
    date: "2022 – Present",
    description: "Competing in regional tournaments, coaching new members, and organizing practice sessions.",
    category: "Clubs",
  },
  {
    title: "Food Bank Assistant",
    org: "City Food Bank",
    date: "2022 – 2023",
    description: "Sorting and distributing food donations every Saturday, helping families in need within the community.",
    category: "Volunteering",
  },
  {
    title: "Worship Team Member",
    org: "Community Church",
    date: "2021 – Present",
    description: "Playing guitar and singing on the worship team for Sunday services and special events.",
    category: "Faith",
  },
];

const categoryStyles: Record<Category, string> = {
  Clubs: "bg-[hsl(var(--clubs))] text-[hsl(var(--clubs-foreground))]",
  Volunteering: "bg-[hsl(var(--volunteer))] text-[hsl(var(--volunteer-foreground))]",
  Faith: "bg-[hsl(var(--faith))] text-[hsl(var(--faith-foreground))]",
};

const ActivitiesSection = () => (
  <section id="activities" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">
        Activities & Involvement
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
        A timeline of the clubs, volunteering, and faith-based activities that keep me busy and fulfilled.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-10">
          {activities.map((a, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-4`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5 translate-y-1 z-10" />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge className={`${categoryStyles[a.category]} border-0 text-xs`}>
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
    </div>
  </section>
);

export default ActivitiesSection;
