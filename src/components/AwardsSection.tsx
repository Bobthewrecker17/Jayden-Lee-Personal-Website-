import { Card, CardContent } from "@/components/ui/card";
import { useScrollFade } from "@/hooks/use-scroll-fade";

interface Award {
  title: string;
  org: string;
  date: string;
  icon: string;
}

const awards: Award[] = [
  { title: "National Honor Society", org: "School Chapter", date: "2024", icon: "🏅" },
  { title: "Regional Debate Champion", org: "State Debate League", date: "2024", icon: "🏆" },
  { title: "Community Service Award", org: "City Council", date: "2023", icon: "🤝" },
  { title: "Leadership Excellence", org: "Student Government", date: "2023", icon: "⭐" },
  { title: "Volunteer of the Year", org: "Habitat for Humanity", date: "2023", icon: "🏠" },
  { title: "Youth Ministry Award", org: "Community Church", date: "2022", icon: "✝️" },
];

const AwardsSection = () => {
  const ref = useScrollFade<HTMLDivElement>();
  return (
  <section id="awards" className="py-24 px-6 bg-secondary/40">
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
