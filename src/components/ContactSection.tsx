import { Mail, Instagram, Linkedin, Github } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        Let's Connect
      </h2>
      <p className="text-muted-foreground max-w-md mx-auto">
        Want to learn more about my activities or collaborate on a project? Reach out through any of the links below.
      </p>

      <div className="flex justify-center gap-4 pt-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <s.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <p className="text-xs text-muted-foreground pt-8">
        © {new Date().getFullYear()} Your Name. Built with ❤️
      </p>
    </div>
  </section>
);

export default ContactSection;
