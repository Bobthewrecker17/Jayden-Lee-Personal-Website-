import { Card, CardContent } from "@/components/ui/card";
import { useScrollFade } from "@/hooks/use-scroll-fade";

interface Award {
  title: string;
  org: string;
  date: string;
  icon: string;
}

const awards: Award[] = [
  { title: "Conrad Challenge Innovator Award", org: "Conrad Foundation", date: "March 2026", icon: "🏆" },
  { title: "Consulate General Award Certificate", org: "Republic of Korea in San Francisco", date: "February 2026", icon: "🇰🇷" },
  { title: "ACSL First Place — Senior 3 Contest", org: "American Computer Science League", date: "May 2025", icon: "💻" },
  { title: "Gold Presidential Volunteer Service Award", org: "United States Government", date: "August 2025", icon: "🏅" },
  { title: "CPR/AED Certificate", org: "Certified", date: "January 2025", icon: "❤️" },
];

const AwardsSection = () => {
  const ref = useScrollFade<HTMLDivElement>();
  return (
    <section className="py-24 px-6 bg-secondary/40">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">
          Awards & Achievements
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Recognitions I've received for leadership, service, and academic excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((a, i) => (
            <Card
              key={i}
              className="bg-card hover:shadow-md transition-shadow border-border"
            >
              <CardContent className="p-5">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="font-semibold text-foreground">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.org}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
