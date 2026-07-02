import { Link } from "react-router-dom";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import { assetPath } from "@/lib/assets";
import CourseCatalog from "@/components/CourseCatalog";

const stats = [
  { value: "4.67", label: "Weighted GPA (10-12)" },
  { value: "3.89", label: "Unweighted GPA (10-12)" },
  { value: "1,200+", label: "Volunteer Hours" },
  { value: "1500", label: "SAT" },
  { value: "15", label: "Awards" },
];

const HeroSection = () => {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <>
      {/* Full-bleed hero image */}
      <div className="relative w-full h-[58vh] md:h-[68vh] overflow-hidden">
        <img
          src={assetPath("/photos/background.avif")}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Gradient at top so navbar always blends cleanly */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Content below image */}
      <div ref={ref} className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-normal tracking-wide text-foreground mb-5 leading-tight">
              Siwoo Lee
            </h1>
            <p className="text-base font-light text-muted-foreground leading-relaxed mb-10">
              Hi, and welcome to my personal webpage! Here you&apos;ll find a look back at my high
              school journey: the projects, activities, and milestones that shaped these past four
              years. I hope it gives you a better sense of who I am. Feel free to reach out if you
              have any questions!
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/activities"
                className="px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-light tracking-wide hover:opacity-80 transition-all"
              >
                See My Activities
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full border border-border text-sm font-light tracking-wide text-foreground hover:bg-secondary transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="shrink-0 mx-auto md:mx-0">
            <img
              src={assetPath("/photos/IMG_2129.jpg")}
              alt="Siwoo Lee"
              className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover object-[center_20%] shadow-lg"
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-10 border-t border-border grid grid-cols-2 sm:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-normal text-foreground mb-1">{s.value}</p>
              <p className="text-xs font-light text-muted-foreground tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="mb-3 text-xs font-light uppercase tracking-widest text-muted-foreground">
            Coursework
          </p>
          <CourseCatalog />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
