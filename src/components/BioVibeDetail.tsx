import { type Activity } from "@/data/activities";
import EventPortfolioDetail, { type EventPortfolioConfig } from "@/components/EventPortfolioDetail";

interface Props {
  activity: Activity;
}

const config: EventPortfolioConfig = {
  mediaTitle: "BioVibe Startup",
  eyebrow: "Student Startup",
  sectionLabel: "BioVibe Project Files",
  sectionTitle: "From research files to pitch-ready prototype",
  sectionIntro:
    "A folder-based look at BioVibe: team and mentor photos, brand assets, EEG visuals, prototype demo clips, planning documents, and Conrad Challenge materials.",
  defaultEventName: "Team & Mentor",
  eventOrder: [
    "Team & Mentor",
    "Brand Identity",
    "Prototype Graphs & Demos",
    "Research Files",
    "Conrad Challenge",
  ],
  getEventName: (media) => {
    const name = media.originalName.toLowerCase();

    if (name.includes("conrad challenge")) {
      return "Conrad Challenge";
    }

    if (name.includes("logo") || name.includes("transparent")) {
      return "Brand Identity";
    }

    if (name.includes("competitor") || name.includes("budget")) {
      return "Research Files";
    }

    if (
      name.includes("graph") ||
      name.includes("output") ||
      name.includes("screenshot") ||
      name.includes("kakaotalk")
    ) {
      return "Prototype Graphs & Demos";
    }

    return "Team & Mentor";
  },
  eventDates: {
    "Team & Mentor": "2025",
    "Brand Identity": "2025",
    "Prototype Graphs & Demos": "2025-2026",
    "Research Files": "2025-2026",
    "Conrad Challenge": "2026",
  },
  eventDescriptions: {
    "Team & Mentor":
      "Team and mentorship photos documenting the people behind BioVibe, including guidance from SFSU Professor Rav Suri.",
    "Brand Identity":
      "Logo and visual identity assets used to present BioVibe as a student startup with a clear product concept.",
    "Prototype Graphs & Demos":
      "EEG graph assets, prototype outputs, and short demo clips collected from the BioVibe files folder.",
    "Research Files":
      "Planning documents that supported the project, including competitor analysis and budget materials.",
    "Conrad Challenge":
      "Pitch and demo footage prepared for the Conrad Challenge, showing BioVibe's product vision and prototype progress.",
  },
  eventDisplayNames: {
    "Team & Mentor": "Team, ACF, and SFSU mentorship",
    "Brand Identity": "BioVibe brand identity",
    "Prototype Graphs & Demos": "Prototype graphs and demos",
    "Research Files": "Research and planning files",
    "Conrad Challenge": "Conrad Challenge",
  },
  getMediaCaption: (media) => {
    const name = media.originalName.toLowerCase();

    if (name.includes("picture with dr suri")) {
      return "Meeting with SFSU Professor Rav Suri to discuss BioVibe's prototype direction and research approach.";
    }

    if (name.includes("acfgroupphoto")) {
      return "BioVibe team photo from the ACF startup context.";
    }

    if (name.includes("logo") || name.includes("transparent")) {
      return "BioVibe logo and transparent brand asset for presentations and product materials.";
    }

    if (name.includes("eeg graph")) {
      return "EEG signal graph used while exploring stress-monitoring signals for the headband concept.";
    }

    if (name.includes("graphacf")) {
      return "Graph demo clip from the BioVibe files folder.";
    }

    if (name.includes("kakaotalk")) {
      return "Prototype demo video captured during the BioVibe build process.";
    }

    if (name.includes("screenshot")) {
      return "Project screenshot from the updated BioVibe files folder.";
    }

    if (name.includes("output")) {
      return "Prototype output image from the BioVibe files folder.";
    }

    if (name.includes("competitor")) {
      return "Competitor analysis document used to compare BioVibe's positioning and product direction.";
    }

    if (name.includes("budget")) {
      return "Budget planning document for BioVibe's prototype and startup costs.";
    }

    if (name.includes("conrad challenge")) {
      return "Conrad Challenge pitch video showcasing BioVibe's problem, product vision, and prototype progress.";
    }

    return undefined;
  },
  stats: [
    { value: "3", label: "Student Team" },
    { value: "2", label: "Planning Docs" },
  ],
  websiteUrl: "https://biovibe.us",
  extraSections: [
    {
      label: "Product Vision",
      title: "Stress tracking built for students",
      body: "BioVibe is a wearable headband designed to help high school students understand and manage stress through personalized monitoring and actionable insights.",
      items: [
        "Designed a personalized stress-tracking headband",
        "Researched and prototyped with a three-person student team",
        "Integrated stress-monitoring principles for student well-being",
        "Presented the concept at the Conrad Challenge",
      ],
    },
  ],
};

const BioVibeDetail = ({ activity }: Props) => (
  <EventPortfolioDetail activity={activity} config={config} />
);

export default BioVibeDetail;
