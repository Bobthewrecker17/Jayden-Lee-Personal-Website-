import { useScrollFade } from "@/hooks/use-scroll-fade";
import { Link } from "react-router-dom";
import { activities, categories, categoryStyles } from "@/data/activities";
import { School, Church, Heart, FlaskConical } from "lucide-react";

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
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">
          Activities & Involvement
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Explore the different areas I'm involved in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => {
            const count = activities.filter((a) => a.category === cat).length;
            const Icon = categoryIcons[cat];
            return (
              <Link
                key={cat}
                to={`/activities/${cat.toLowerCase()}`}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all hover:border-primary/30"
              >
                <Icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors mb-3" />
                <h3 className="font-semibold text-foreground text-lg">{cat}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {count} activit{count === 1 ? "y" : "ies"}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
