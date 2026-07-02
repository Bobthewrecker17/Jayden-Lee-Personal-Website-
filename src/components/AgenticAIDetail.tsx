import { type Activity } from "@/data/activities";
import { type HomepageMedia } from "@/data/homepageMedia";
import EventPortfolioDetail, { type EventPortfolioConfig } from "@/components/EventPortfolioDetail";

interface Props {
  activity: Activity;
}

const isAgenticMedia = (media: HomepageMedia) =>
  media.eventName.trim() === "Agentic AI Research";

const isJeiLogo = (media: HomepageMedia) => media.originalName.toLowerCase().includes("jei");
const isBusinessVideo = (media: HomepageMedia) => media.type === "video";

const researchEvent = "Multi-Agent Communication Research";
const businessEvent = "Hyper-Local Growth Engine";

const config: EventPortfolioConfig = {
  mediaTitle: "Agentic AI Research",
  eyebrow: "ASDRP Research",
  sectionLabel: "Agentic AI Media",
  sectionTitle: "The research and the product it powered",
  sectionIntro:
    "One thread on the multi-agent communication research behind our JEI paper, and one on the Hyper-Local Growth Engine product we built and presented from it.",
  defaultEventName: researchEvent,
  filterMedia: (media) => isAgenticMedia(media) && (isJeiLogo(media) || isBusinessVideo(media)),
  getEventName: (media) => (isJeiLogo(media) ? researchEvent : businessEvent),
  eventOrder: [researchEvent, businessEvent],
  eventMediaVariant: {
    [researchEvent]: "logo",
    [businessEvent]: "large-video",
  },
  eventDates: {
    [researchEvent]: "2025 – 2026",
    [businessEvent]: "2026 ASDRP Expo",
  },
  eventDescriptions: {
    [researchEvent]:
      "Worked with data scientist and AI specialist Mr. Suresh Subramaniam to research multi-agent communication and coordination systems, analyzing how different communication structures affect system outputs. This research was co-authored into a paper for the Journal of Emerging Investigators (JEI) titled \u201cThe Effect of Communication Structure on Multi-Agent System Outputs\u201d, currently submitted for publication.",
    [businessEvent]:
      "Applied that research to build the Hyper-Local Growth Engine, a multi-agent product that designs personalized local marketing content for small-medium businesses. Presented the system and its workflows at ASDRP conferences with 2000+ attendees.",
  },
  getMediaCaption: (media) => {
    const name = media.originalName.toLowerCase();

    if (name.includes("jei")) {
      return "Journal of Emerging Investigators (JEI) — co-authored paper titled \u201cThe Effect of Communication Structure on Multi-Agent System Outputs\u201d (submitted for publication).";
    }

    if (name.includes("img_1441")) {
      return "Presenting the Hyper-Local Growth Engine at the ASDRP expo — a multi-agent product that generates personalized local marketing content for small-medium businesses, in front of 2000+ attendees.";
    }

    return undefined;
  },
  stats: [
    { value: "2000+", label: "Conference Attendees" },
    { value: "JEI", label: "Paper Submitted" },
  ],
  containMedia: true,
  extraSections: [
    {
      label: "Research Focus",
      title: "Communication structure in multi-agent AI",
      body: "Worked with Mr. Suresh Subramaniam to research how different communication structures affect multi-agent system outputs, while also building practical AI tools for local business growth.",
      items: [
        "Researched multi-agent communication and coordination systems",
        "Analyzed the impact of different communication structures on system outputs",
        "Co-authored a JEI research paper (submitted for publication)",
        "Developed a Hyper-Local Growth Engine for small-medium businesses",
        "Designed system workflows for personalized local marketing content",
        "Presented research findings at ASDRP conferences with 2000+ attendees",
      ],
    },
  ],
};

const AgenticAIDetail = ({ activity }: Props) => (
  <EventPortfolioDetail activity={activity} config={config} />
);

export default AgenticAIDetail;
