import { Activity, BookOpen, Church, Crown, GraduationCap } from "lucide-react";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const futurePlans = [
  {
    icon: Church,
    title: "New Life Church Argentina Mission Trip",
    date: "July 14–28",
    description: "Serving as Youth Leader and Bible Study Teacher.",
  },
  {
    icon: BookOpen,
    title: "Socratic Spark Project",
    date: "Ongoing",
    description: "Continuing research and development with Professor Rav Suri at San Francisco State University.",
  },
  {
    icon: GraduationCap,
    title: "College Applications",
    date: "2025–2026",
    description: "Applying to colleges and preparing for the next chapter after high school.",
  },
  {
    icon: Crown,
    title: "Hwarang Chairperson",
    date: "2025–2026",
    description: "Leading district-wide planning and chapter coordination as Hwarang SV District Chairperson.",
  },
  {
    icon: Activity,
    title: "Continuing BioVibe Research",
    date: "Ongoing",
    description: "Exploring whether stress can be reliably tracked using just SP1 and SP2 electrodes.",
  },
];

const FuturePlansSection = () => {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section id="future-plans" className="bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary)/0.35)_50%,hsl(var(--background))_100%)] px-6 pb-24 pt-28">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-light uppercase tracking-widest text-muted-foreground">
            What&apos;s Next
          </p>
          <h2 className="mb-4 text-3xl font-normal tracking-wide text-foreground md:text-4xl">
            Future Plans
          </h2>
          <p className="font-light leading-relaxed text-muted-foreground">
            A look at what I&apos;m working toward next — mission work, research, college, and
            leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {futurePlans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.title}
                className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-light uppercase tracking-widest text-muted-foreground">
                      {plan.date}
                    </p>
                    <h3 className="text-lg font-normal tracking-wide text-foreground">
                      {plan.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FuturePlansSection;
