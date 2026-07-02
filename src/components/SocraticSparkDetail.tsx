import { type Activity } from "@/data/activities";
import EventPortfolioDetail, { type EventPortfolioConfig } from "@/components/EventPortfolioDetail";

interface Props {
  activity: Activity;
}

const config: EventPortfolioConfig = {
  mediaTitle: "Socratic Spark Project",
  eyebrow: "SFSU Collaboration",
  sectionLabel: "Project Snapshot",
  sectionTitle: "Building with Professor Rav Suri",
  sectionIntro:
    "A research collaboration with Professor Rav Suri at San Francisco State University, captured in a project snapshot from the Socratic Spark work.",
  defaultEventName: "Socratic Spark",
  eventOrder: ["Socratic Spark"],
  getEventName: () => "Socratic Spark",
  eventDates: {
    "Socratic Spark": "2025 - Present",
  },
  eventDescriptions: {
    "Socratic Spark":
      "Worked with Professor Rav Suri at SFSU on the Socratic Spark project, combining academic mentorship with hands-on research and development.",
  },
  eventDisplayNames: {
    "Socratic Spark": "Socratic Spark Project",
  },
  mediaCaptions: {
    "/homepage-media/generated/socratic-spark/01-screenshot-2026-06-30-at-4-01-08-pm.png":
      "Project snapshot from the Socratic Spark collaboration with Professor Rav Suri at SFSU.",
  },
  stats: [
    { value: "SFSU", label: "Partner University" },
    { value: "1", label: "Faculty Mentor" },
  ],
  containMedia: true,
  extraSections: [
    {
      label: "Collaboration",
      title: "Academic mentorship meets project work",
      body: "This project paired guidance from Professor Rav Suri with student-led development, bridging university research perspective and hands-on implementation.",
      items: [
        "Collaborated with Professor Rav Suri at San Francisco State University",
        "Contributed to the Socratic Spark research and development effort",
        "Applied interdisciplinary thinking across technology and education",
      ],
    },
  ],
};

const SocraticSparkDetail = ({ activity }: Props) => (
  <EventPortfolioDetail activity={activity} config={config} />
);

export default SocraticSparkDetail;
