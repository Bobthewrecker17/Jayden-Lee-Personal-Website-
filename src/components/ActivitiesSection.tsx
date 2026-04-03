import { useScrollFade } from "@/hooks/use-scroll-fade";
import { Link } from "react-router-dom";
import { activities, categories, categoryStyles, categoryDescriptions } from "@/data/activities";
import { School, Church, Heart, FlaskConical, ArrowRight } from "lucide-react";

const categoryIcons = {
  School: School,
  Christian: Church,
  Volunteering: Heart,
  Research: FlaskConical,
};

const ActivitiesSection = () => {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-foreground text-center mb-4">
          Activities & Involvement
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Explore the different areas I'm involved in — from school clubs to research and community service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const count = activities.filter((a) => a.category === cat).length;
            const Icon = categoryIcons[cat];
            return (
              <Link
                key={cat}
                to={`/activities/${cat.toLowerCase()}`}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:border-primary/20"
              >
                <Icon className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">{cat}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {categoryDescriptions[cat]}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {count} activit{count === 1 ? "y" : "ies"}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
