import { Badge } from "@/components/ui/badge";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import { ImagePlus } from "lucide-react";
import { activities, categoryStyles, type Category } from "@/data/activities";

interface Props {
  category: Category;
}

const CategoryActivities = ({ category }: Props) => {
  const ref = useScrollFade<HTMLDivElement>();
  const filtered = activities.filter((a) => a.category === category);
  const styles = categoryStyles[category];

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-4">
          <Badge className={`${styles.badge} border-0 text-sm px-3 py-1`}>
            {category}
          </Badge>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">
          {category} Activities
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          {filtered.length} activit{filtered.length === 1 ? "y" : "ies"} in this category.
        </p>

        <div className="space-y-6">
          {filtered.map((a) => (
            <div
              key={a.title}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
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
                  <span className="text-xs text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{a.org}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryActivities;
