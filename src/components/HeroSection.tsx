import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => (
  <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
    <div className="max-w-3xl mx-auto text-center space-y-6 fade-in-up">
      <Avatar className="w-28 h-28 mx-auto ring-4 ring-border">
        <AvatarFallback className="text-3xl font-bold bg-secondary text-secondary-foreground">
          YN
        </AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Your Name
        </h1>
        <p className="text-lg text-muted-foreground">
          High School Student · Leader · Volunteer · Person of Faith
        </p>
      </div>

      <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
        I'm a passionate high school student dedicated to making a difference through 
        leadership in clubs, community volunteering, and living out my Christian faith. 
        This page highlights the activities and experiences that shape who I am.
      </p>

      <div className="flex gap-3 justify-center pt-2">
        <a
          href="#activities"
          className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          See My Activities
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
