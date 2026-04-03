import { Mail } from "lucide-react";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const ContactSection = () => {
  const ref = useScrollFade<HTMLDivElement>();
  return (
    <section className="py-24 px-6">
      <div ref={ref} className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Let's Connect
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Want to learn more about my activities or collaborate on a project? Reach out below.
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <a
            href="mailto:siwlee1017@gmail.com"
            aria-label="Email"
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
