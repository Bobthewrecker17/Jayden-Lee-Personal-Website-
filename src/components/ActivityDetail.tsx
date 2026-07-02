import { useScrollFade } from "@/hooks/use-scroll-fade";
import { ArrowLeft, Calendar, Building2 } from "lucide-react";
import { type Activity, categoryDisplayNames } from "@/data/activities";
import { Link } from "react-router-dom";

interface Props {
  activity: Activity;
}

const categoryColors: Record<string, { placeholder: string; dot: string }> = {
  School:      { placeholder: "bg-sky-50",     dot: "bg-sky-500" },
  Faith:       { placeholder: "bg-violet-50",  dot: "bg-violet-500" },
  Volunteering:{ placeholder: "bg-emerald-50", dot: "bg-emerald-500" },
  Research:    { placeholder: "bg-amber-50",   dot: "bg-amber-500" },
};

const ActivityDetail = ({ activity: a }: Props) => {
  const ref = useScrollFade<HTMLDivElement>();
  const colors = categoryColors[a.category];
  const backTo = `/activities/${a.category.toLowerCase()}`;

  return (
    <section className="pt-28 pb-16 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          {categoryDisplayNames[a.category]}
        </Link>

        {/* Hero image */}
        <div className="mb-12 overflow-hidden">
          {a.coverImage ? (
            <img
              src={a.coverImage}
              alt={a.title}
              className="w-full h-64 md:h-[420px] object-cover"
            />
          ) : (
            <div className={`w-full h-64 md:h-[420px] ${colors.placeholder}`} />
          )}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-6 tracking-wide">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {a.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            {a.org}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-normal tracking-wide text-foreground mb-3">
          {a.title}
        </h1>
        {a.role && (
          <p className="text-base font-light text-muted-foreground mb-8">{a.role}</p>
        )}

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Summary */}
        <p className="text-base font-light text-muted-foreground leading-relaxed mb-12">
          {a.summary}
        </p>

        {/* Highlights */}
        {a.highlights.length > 0 && (
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
              Key Highlights
            </p>
            <ul className="space-y-4">
              {a.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
                  <p className="text-base font-light text-muted-foreground leading-relaxed">{h}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Gallery */}
        {a.galleryImages && a.galleryImages.length > 0 && (
          <div className="mt-16">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
              Photos
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {a.galleryImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${a.title} photo ${i + 1}`}
                  className="w-full h-48 object-cover"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivityDetail;
