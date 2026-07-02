import { ArrowRight, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import { assetPath } from "@/lib/assets";

const ContactSection = () => {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary)/0.45)_45%,hsl(var(--background))_100%)]">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-violet-200/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-px w-[min(90vw,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200/80 to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[320px] overflow-hidden bg-[#eef2ff]">
              <img
                src={assetPath("/homepage-media/generated/photo-gallery/02-04-25-26-2.jpeg")}
                alt="Siwoo Lee"
                className="h-full w-full object-cover object-[center_45%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-2 text-xs font-light uppercase tracking-widest text-white/75">
                  Open to connect
                </p>
                <p className="max-w-xs text-lg font-normal tracking-wide text-white">
                  Questions about my activities, projects, or anything else — I&apos;d love to hear from you.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-light uppercase tracking-widest text-muted-foreground">
                    Contact
                  </p>
                  <h2 className="text-3xl font-normal tracking-wide text-foreground md:text-4xl">
                    Let&apos;s Connect
                  </h2>
                </div>
              </div>

              <p className="mb-8 max-w-md font-light leading-relaxed text-muted-foreground">
                I&apos;m open to research, student projects, or any questions about who I am — feel
                free to reach out! My inbox is always open.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:siwlee1017@gmail.com"
                  className="group inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-background px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/10"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="text-left">
                      <span className="block text-[10px] font-light uppercase tracking-widest text-muted-foreground">
                        Email me
                      </span>
                      <span className="block text-sm font-light text-foreground">
                        siwlee1017@gmail.com
                      </span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground" />
                </a>

                <Link
                  to="/activities"
                  className="group inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-dashed border-border bg-secondary/40 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-secondary/70"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <span className="text-left">
                      <span className="block text-[10px] font-light uppercase tracking-widest text-muted-foreground">
                        Explore first
                      </span>
                      <span className="block text-sm font-light text-foreground">
                        Browse my activities and projects
                      </span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground" />
                </Link>
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-2xl bg-secondary/50 px-4 py-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <p className="text-xs font-light leading-relaxed text-muted-foreground">
                  I&apos;ll do my best to respond within a couple of days. Thanks for stopping by!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
