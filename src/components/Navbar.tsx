import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "School Life", to: "/activities/school" },
  { label: "My Faith Journey", to: "/activities/faith" },
  { label: "Volunteering", to: "/activities/volunteering" },
  { label: "Leadership", to: "/leadership" },
  { label: "Music", to: "/music" },
  { label: "Research", to: "/activities/research" },
  { label: "Job", to: "/job" },
  { label: "Awards", to: "/awards" },
  { label: "Future Plans", to: "/future-plans" },
  { label: "Photo Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  // Show white text when floating over the hero image on the home page
  const onHero = location.pathname === "/" && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link
          to="/"
          className={`group flex items-center gap-2 shrink-0 rounded-xl px-2 py-1.5 transition-all duration-300 hover:-translate-y-0.5 ${
            onHero ? "hover:bg-white/10" : "hover:bg-secondary/70"
          }`}
          aria-label="Go back to homepage"
        >
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${onHero ? "bg-white" : "bg-foreground"}`}>
            <span className={`text-[10px] tracking-wider font-medium transition-colors duration-500 ${onHero ? "text-foreground" : "text-background"}`}>SL</span>
          </div>
          <span className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 group-hover:tracking-[0.24em] ${onHero ? "text-white" : "text-foreground"}`}>
            Siwoo Lee
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex gap-1 items-center">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-1.5 text-xs tracking-widest uppercase rounded-lg transition-colors duration-500 whitespace-nowrap ${
                onHero
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : isActive(to)
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-500 ${onHero ? "text-white hover:bg-white/10" : "text-foreground hover:bg-secondary"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden slide-down bg-background/98 backdrop-blur-md border-b border-border px-4 pb-5 pt-2 space-y-0.5">
          {navLinks.map(({ label, to }, i) => (
            <Link
              key={to}
              to={to}
              style={{ animationDelay: `${i * 40}ms` }}
              className={`fade-in-up flex items-center justify-between px-4 py-3 text-xs tracking-widest uppercase rounded-xl transition-all duration-300 group ${
                isActive(to)
                  ? "text-foreground bg-secondary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/70 hover:px-5"
              }`}
            >
              {label}
              <span className={`w-1 h-1 rounded-full bg-foreground transition-all duration-300 ${isActive(to) ? "opacity-100" : "opacity-0 group-hover:opacity-30"}`} />
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
