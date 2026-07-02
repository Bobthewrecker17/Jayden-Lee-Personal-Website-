import { type LucideIcon, ArrowLeft, Building2, Calendar, HeartPulse, Stethoscope, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { type Activity, categoryDisplayNames } from "@/data/activities";
import { homepageActivities, type HomepageMedia } from "@/data/homepageMedia";

interface Props {
  activity: Activity;
}

type RoadmapStop = {
  title: string;
  label: string;
  description: string;
  icon: LucideIcon;
  image?: HomepageMedia;
};

const guatemalaMedia =
  homepageActivities
    .find((activity) => activity.title === "Hwarang Youth Foundation")
    ?.media.filter((item) => item.eventName === "24-25 Guatemala" && item.type === "image") ?? [];

const GuatemalaDetail = ({ activity }: Props) => {
  const backTo = `/activities/${activity.category.toLowerCase()}`;
  const heroImage = guatemalaMedia[0];

  const roadmapStops: RoadmapStop[] = [
    {
      title: "Caring for Raiz",
      label: "Step 01",
      description:
        "On the first day, I was assigned to care for Raiz, a 76-year-old patient scheduled for cataract surgery, and accompanied him through the entire process. Using all the Spanish I knew, I offered encouragement and held his hand right before the surgery. Afterward, he grasped my hand and said \"Gracias\" — a reminder that my words and actions were not in vain.",
      icon: Stethoscope,
      image: guatemalaMedia[0],
    },
    {
      title: "Vacation Bible School in Volcano Village",
      label: "Step 02",
      description:
        "After coordinating with Pastor Bae, I organized a Vacation Bible School session for children in Volcano Village. The session started rough with technical difficulties but soon became an exhilarating experience for the kids and us — when I asked a few of them afterward if they were happy, every single one said yes.",
      icon: Users,
      image: guatemalaMedia[1],
    },
    {
      title: "Reflection and Other Service",
      label: "Step 03",
      description:
        "Beyond these moments, I taught CPR through skits and assisted in the optometry clinic. Watching how the cataract surgeries restored sight taught me that finance can enhance life but can't determine someone's joy — and that even small, unseen acts of kindness can leave a lasting impact.",
      icon: HeartPulse,
      image: guatemalaMedia[2],
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          {categoryDisplayNames[activity.category]}
        </Link>

        <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-[#f6f2e9] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 md:p-12 lg:p-14">
              <div className="mb-7 flex flex-wrap gap-3 text-xs tracking-wide text-emerald-900/70">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {activity.date}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5">
                  <Building2 className="h-3.5 w-3.5" />
                  {activity.org}
                </span>
              </div>

              <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-emerald-700">
                Medical Mission Roadmap
              </p>
              <h1 className="mb-5 text-4xl font-normal tracking-wide text-emerald-950 md:text-6xl">
                {activity.title}
              </h1>
              {activity.role && (
                <p className="mb-7 text-base font-light text-emerald-900/65">{activity.role}</p>
              )}
              <p className="max-w-xl text-base font-light leading-relaxed text-emerald-950/70 md:text-lg">
                {activity.summary}
              </p>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { value: "3", label: "Roadmap Stops" },
                  { value: "8", label: "Service Days" },
                  { value: "1", label: "Shared Mission" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/70 p-4">
                    <p className="text-2xl font-normal text-emerald-950">{stat.value}</p>
                    <p className="text-[10px] font-light uppercase tracking-widest text-emerald-900/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[360px] bg-emerald-900">
              {heroImage && (
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="h-full min-h-[360px] w-full object-cover object-[center_55%]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-emerald-800">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <p className="text-sm font-light leading-relaxed">
                  A mission trip centered on caring for patients before cataract surgery and bringing Vacation Bible School to children in Volcano Village.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
              Camp Roadmap
            </p>
            <h2 className="text-3xl font-normal tracking-wide text-foreground md:text-4xl">
              What I Did at the Camp
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-200 via-emerald-500 to-emerald-200 md:left-1/2 md:block" />

            <div className="space-y-8">
              {roadmapStops.map((stop, index) => {
                const Icon = stop.icon;
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={stop.title}
                    className={`relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 ${
                      isEven ? "" : "md:[&>div:first-child]:col-start-2"
                    }`}
                  >
                    <div className={isEven ? "" : "md:col-start-2"}>
                      <div className="rounded-[2rem] border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-5 flex items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-[10px] font-light uppercase tracking-widest text-muted-foreground">
                              {stop.label}
                            </p>
                            <h3 className="text-2xl font-normal tracking-wide text-foreground">
                              {stop.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm font-light leading-relaxed text-muted-foreground">
                          {stop.description}
                        </p>
                      </div>

                      {stop.image && (
                        <div className="mt-4 overflow-hidden rounded-[2rem] bg-muted shadow-sm md:hidden">
                          <img
                            src={stop.image.src}
                            alt={stop.image.alt}
                            className="h-56 w-full object-cover object-[center_55%]"
                          />
                        </div>
                      )}
                    </div>

                    <div className={`hidden md:block ${isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}>
                      {stop.image && (
                        <div className="overflow-hidden rounded-[2rem] bg-muted shadow-sm">
                          <img
                            src={stop.image.src}
                            alt={stop.image.alt}
                            className="h-72 w-full object-cover object-[center_55%]"
                          />
                        </div>
                      )}
                    </div>

                    <span className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-emerald-600 md:block" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuatemalaDetail;
