import { useScrollFade } from "@/hooks/use-scroll-fade";

const jobs = [
  {
    title: "Clerk",
    org: "Vons Chicken — Livermore",
    logo: "/photos/vons-logo.jpg",
    highlights: [
      "Received customer orders and ensured accurate communication to the kitchen and service areas",
      "Gained real-world work experience in a fast-paced food service environment",
      "Assisted with basic customer service needs while supporting daily store operations",
    ],
  },
];

const Job = () => {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section className="pt-28 pb-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className="border-b border-border pb-10 mb-12">
          <h1 className="text-4xl md:text-5xl font-normal tracking-wide text-foreground mb-3">
            Job
          </h1>
          <p className="font-light text-muted-foreground leading-relaxed">
            Work experience and professional roles.
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <article
              key={`${job.org}-${job.title}`}
              className="rounded-[1.75rem] border border-border bg-card p-6 md:p-8 shadow-sm"
            >
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white">
                  <img src={job.logo} alt={`${job.org} logo`} className="h-full w-full object-contain p-1.5" />
                </div>
                <div>
                  <h2 className="text-xl font-normal tracking-wide text-foreground md:text-2xl">
                    {job.title}
                  </h2>
                  <p className="mt-1 text-sm font-light text-muted-foreground">{job.org}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Job;
