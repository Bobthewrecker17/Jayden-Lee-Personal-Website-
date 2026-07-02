import { useScrollFade } from "@/hooks/use-scroll-fade";
import { Link } from "react-router-dom";
import { activities, categories, categoryDescriptions, categoryDisplayNames } from "@/data/activities";
import { School, Church, Heart, FlaskConical, ArrowRight } from "lucide-react";

const categoryIcons = {
  School: School,
  Faith: Church,
  Volunteering: Heart,
  Research: FlaskConical,
};

const categoryAccents: Record<string, { icon: string; border: string; bg: string; text: string }> = {
  School: {
    icon: "bg-sky-100 text-sky-600",
    border: "hover:border-sky-200",
    bg: "hover:bg-sky-50/40",
    text: "text-sky-600",
  },
  Faith: {
    icon: "bg-violet-100 text-violet-600",
    border: "hover:border-violet-200",
    bg: "hover:bg-violet-50/40",
    text: "text-violet-600",
  },
  Volunteering: {
    icon: "bg-emerald-100 text-emerald-600",
    border: "hover:border-emerald-200",
    bg: "hover:bg-emerald-50/40",
    text: "text-emerald-600",
  },
  Research: {
    icon: "bg-amber-100 text-amber-600",
    border: "hover:border-amber-200",
    bg: "hover:bg-amber-50/40",
    text: "text-amber-600",
  },
};

const ActivitiesSection = () => {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section className="pt-28 pb-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs font-light uppercase tracking-widest text-muted-foreground">What I Do</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-wide text-foreground">
            Activities & Involvement
          </h1>
          <p className="text-base font-light text-muted-foreground max-w-xl mx-auto">
            Explore the different areas I'm involved in — from school clubs to research and community service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat) => {
            const count = activities.filter((a) => a.category === cat).length;
            const Icon = categoryIcons[cat];
            const accent = categoryAccents[cat];
            return (
              <Link
                key={cat}
                to={`/activities/${cat.toLowerCase()}`}
                className={`group bg-card border border-border rounded-2xl p-7 transition-all duration-300 ${accent.border} ${accent.bg} hover:shadow-lg hover:-translate-y-0.5`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${accent.icon} transition-transform group-hover:scale-105`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-normal text-foreground text-xl mb-2">{categoryDisplayNames[cat]}</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed mb-5">
                  {categoryDescriptions[cat]}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-border/60">
                  <span className={`text-sm font-light ${accent.text}`}>
                    {count} activit{count === 1 ? "y" : "ies"}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${accent.text} group-hover:translate-x-1 transition-transform`} />
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
