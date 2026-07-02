import { useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { courseCatalog } from "@/data/courseCatalog";

const isApCourse = (name: string) => name.trim().toUpperCase().startsWith("AP");

const CourseCatalog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showApScores, setShowApScores] = useState(false);
  const closeTimeoutRef = useRef<number>();

  const apGroups = courseCatalog
    .map((group) => ({
      ...group,
      courses: group.courses.filter((course) => isApCourse(course.name)),
    }))
    .filter((group) => group.courses.length > 0);

  const cancelScheduledClose = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }
  };

  const openPanel = () => {
    cancelScheduledClose();
    setIsOpen(true);
  };

  // A short delay (instead of closing instantly) keeps the panel open while
  // the pointer briefly crosses between the button and the panel, or while
  // focus is moving between elements inside it. This makes the dropdown
  // behave identically no matter which page/layout it's rendered in,
  // instead of relying on CSS-only hover/focus chaining that can be
  // sensitive to ancestor stacking contexts.
  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setShowApScores(false);
    }, 150);
  };

  return (
    <div
      className="relative mb-8 w-fit"
      onMouseEnter={openPanel}
      onMouseLeave={scheduleClose}
      onFocus={openPanel}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          scheduleClose();
        }
      }}
    >
      <button
        type="button"
        className="flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-sm font-light text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring/30"
      >
        <span>Course Catalog</span>
      </button>

      {/*
        The panel sits flush against the trigger button (no margin/offset
        gap) and uses padding instead of margin to create the visual gap on
        top/left, so the padding area stays part of this same hoverable
        element. Visibility is driven entirely by the isOpen state above
        (set via mouseenter/focus, cleared with a short delay) rather than
        CSS :hover/:focus-within, so it can't silently break on some pages.
      */}
      <div
        className={`absolute left-0 top-full z-30 w-[min(88vw,46rem)] pt-2 transition-opacity duration-300 md:left-full md:top-0 md:w-[min(72vw,62rem)] md:pl-3 md:pt-0 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-border bg-card p-4 shadow-xl md:rounded-3xl md:p-3">
          <div className="mb-3 flex items-end justify-between gap-3 md:mb-2 md:px-1">
            <div>
              <p className="text-[10px] font-light uppercase tracking-widest text-muted-foreground">
                {showApScores ? "AP Exams" : "Coursework"}
              </p>
              <h2 className="text-base font-normal tracking-wide text-foreground">
                {showApScores ? "AP Scores" : "Course Catalog"}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setShowApScores((prev) => !prev)}
              className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-light text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring/30"
            >
              {showApScores && <RotateCcw className="h-3 w-3" />}
              {showApScores ? "Revert" : "Flip to AP Scores"}
            </button>
          </div>

          <div
            key={showApScores ? "ap-scores" : "courses"}
            className="grid max-h-[28rem] grid-cols-1 gap-2 overflow-y-auto pr-1 duration-300 animate-in fade-in-0 slide-in-from-bottom-1 sm:grid-cols-2 md:max-h-none md:grid-cols-4 md:gap-1.5 md:overflow-visible md:pr-0"
          >
            {(showApScores ? apGroups : courseCatalog).map((group) => (
              <article
                key={group.label}
                className="rounded-xl border border-border/70 bg-background/70 p-2.5 md:p-2"
              >
                <div className="mb-2 flex items-baseline justify-between gap-3 border-b border-border/70 pb-1.5 md:mb-1.5 md:pb-1">
                  <h3 className="text-xs font-normal tracking-wide text-foreground">
                    {group.label}
                  </h3>
                  <p className="text-[10px] font-light text-muted-foreground">{group.year}</p>
                </div>

                <div className="space-y-1 md:flex md:flex-wrap md:gap-1 md:space-y-0">
                  {group.courses.map((course) => (
                    <div
                      key={course.name}
                      className="group/course flex items-center justify-between gap-2 rounded-lg px-2 py-1 transition-all duration-200 hover:bg-secondary md:w-fit md:max-w-full md:bg-secondary/40 md:py-0.5"
                      aria-label={
                        showApScores
                          ? `${course.name}, AP score ${course.apScore ?? "Pending"}`
                          : `${course.name}, grade ${course.grade}`
                      }
                    >
                      <span className="text-[10px] font-light text-muted-foreground md:whitespace-nowrap">
                        {course.name}
                      </span>
                      <span className="shrink-0 rounded-full bg-card px-2 py-0.5 text-[10px] font-normal text-foreground opacity-0 translate-x-1 transition-all duration-200 group-hover/course:opacity-100 group-hover/course:translate-x-0">
                        {showApScores ? course.apScore ?? "Pending" : course.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
