import { Badge } from "@/components/ui/badge";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import { ImagePlus, Calendar, Building2, ArrowLeft } from "lucide-react";
import { activities, categoryStyles, categoryDescriptions, type Category } from "@/data/activities";
import { Link } from "react-router-dom";

interface Props {
  category: Category;
}

const CategoryActivities = ({ category }: Props) => {
  const ref = useScrollFade<HTMLDivElement>();
  const filtered = activities.filter((a) => a.category === category);
  const styles = categoryStyles[category];

  return (
    <section className="py-16 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          to="/activities"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All Activities
        </Link>

        {/* Header */}
        <div className="mb-16">
          <Badge className={`${styles.badge} border-0 text-sm px-3 py-1 mb-4`}>
            {category}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            {category} Activities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {categoryDescriptions[category]}
          </p>
        </div>

        {/* Activity entries */}
        <div className="space-y-24">
          {filtered.map((a, idx) => (
            <article key={a.title} className="group">
              {/* Cover image */}
              <div className="rounded-2xl overflow-hidden mb-8">
                {a.coverImage ? (
                  <img
                    src={a.coverImage}
                    alt={a.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 md:h-80 bg-secondary/50 flex items-center justify-center">
                    <div className="text-center text-muted-foreground/40">
                      <ImagePlus className="w-10 h-10 mx-auto mb-2" />
                      <p className="text-sm">Cover photo</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="max-w-3xl">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {a.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    {a.org}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {a.title}
                </h2>
                {a.role && (
                  <p className="text-base font-medium text-muted-foreground mb-4">
                    {a.role}
                  </p>
                )}

                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {a.summary}
                </p>

                {/* Highlights */}
                {a.highlights.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-3">
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {a.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${styles.dot}`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {a.galleryImages && a.galleryImages.length > 0 ? (
                    a.galleryImages.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden">
                        <img src={img} alt={`${a.title} photo ${i + 1}`} className="w-full h-36 object-cover" />
                      </div>
                    ))
                  ) : (
                    <>
                      {[1, 2, 3].map((n) => (
                        <div
                          key={n}
                          className="rounded-xl bg-secondary/40 h-36 flex items-center justify-center"
                        >
                          <div className="text-center text-muted-foreground/30">
                            <ImagePlus className="w-6 h-6 mx-auto mb-1" />
                            <p className="text-xs">Photo {n}</p>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>

              {/* Divider between entries */}
              {idx < filtered.length - 1 && (
                <div className="h-px bg-border mt-24" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryActivities;
