import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const activitySublinks = [
  { label: "School", to: "/activities/school" },
  { label: "Christian", to: "/activities/christian" },
  { label: "Volunteering", to: "/activities/volunteering" },
  { label: "Research", to: "/activities/research" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
  const location = useLocation();

  const isActivitiesActive = location.pathname.startsWith("/activities");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileActivitiesOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          Siwoo Lee
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className={`text-sm transition-colors ${
              location.pathname === "/" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            About
          </Link>

          {/* Activities dropdown */}
          <div className="relative group">
            <Link
              to="/activities"
              className={`text-sm transition-colors flex items-center gap-1 ${
                isActivitiesActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Activities
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </Link>

            {/* Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[160px]">
                <Link
                  to="/activities"
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  All Activities
                </Link>
                <div className="h-px bg-border mx-2 my-1" />
                {activitySublinks.map((sub) => (
                  <Link
                    key={sub.to}
                    to={sub.to}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      location.pathname === sub.to
                        ? "text-foreground font-medium bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/awards"
            className={`text-sm transition-colors ${
              location.pathname === "/awards" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Awards
          </Link>
          <Link
            to="/contact"
            className={`text-sm transition-colors ${
              location.pathname === "/contact" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4 space-y-1">
          <Link to="/" className="block py-2 text-sm text-muted-foreground hover:text-foreground">About</Link>

          <button
            onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
            className={`flex items-center justify-between w-full py-2 text-sm ${
              isActivitiesActive ? "text-foreground font-medium" : "text-muted-foreground"
            }`}
          >
            Activities
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileActivitiesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileActivitiesOpen && (
            <div className="pl-4 space-y-1">
              <Link to="/activities" className="block py-1.5 text-sm text-muted-foreground hover:text-foreground">All Activities</Link>
              {activitySublinks.map((sub) => (
                <Link key={sub.to} to={sub.to} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground">
                  {sub.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/awards" className="block py-2 text-sm text-muted-foreground hover:text-foreground">Awards</Link>
          <Link to="/contact" className="block py-2 text-sm text-muted-foreground hover:text-foreground">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
