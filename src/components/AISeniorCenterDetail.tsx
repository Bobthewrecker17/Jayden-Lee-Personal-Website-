import { type Activity } from "@/data/activities";
import EventPortfolioDetail, { type EventPortfolioConfig } from "@/components/EventPortfolioDetail";

interface Props {
  activity: Activity;
}

const config: EventPortfolioConfig = {
  mediaTitle: "AI Senior Center Workshops",
  eyebrow: "AI Education & Service",
  sectionLabel: "Workshop Portfolio",
  sectionTitle: "Teaching seniors how to use AI",
  sectionIntro:
    "Photos from workshops at the SF Korean American Bay Area Center and Carlton Senior Living, where I helped make ChatGPT approachable through hands-on examples, guided practice, and patient support.",
  defaultEventName: "AI Workshop Moments",
  eventOrder: ["AI Workshop Moments"],
  getEventName: () => "AI Workshop Moments",
  eventDates: {
    "AI Workshop Moments": "July 2025 - Present",
  },
  eventDescriptions: {
    "AI Workshop Moments":
      "Taught seniors at the SF Korean American Bay Area Center and Carlton Senior Living how to use ChatGPT for everyday tasks — from finding a recipe for chicken noodle soup to looking up nearby restaurants. After presenting the curriculum on slides, our team helped seniors practice prompts one-on-one. One of the most memorable moments was when a senior held my hand, looked me in the eyes, and said, \"Thank you, we really appreciate it — please come back.\"",
  },
  getMediaCaption: (media, _eventName, index) => {
    if (media.originalName.toLowerCase().includes("screenshot")) {
      return "The slides I used to walk seniors through ChatGPT.";
    }

    const variants = [
      "Helping a senior practice an AI prompt one-on-one.",
      "Presenting the curriculum before hands-on practice time.",
      "A senior trying out ChatGPT for the first time.",
      "Working through an everyday task with AI during the workshop.",
    ];
    return variants[index % variants.length];
  },
  stats: [
    { value: "70+", label: "Seniors Reached" },
    { value: "AI", label: "Workshop Focus" },
  ],
  extraSections: [
    {
      label: "Teaching Approach",
      title: "Making new technology feel approachable",
      body: "The workshop design focused on meeting seniors where they were, using everyday examples and one-on-one guidance instead of abstract explanations.",
      items: [
        "Taught workshops at SF Korean American Bay Area Center and Carlton Senior Living",
        "Introduced ChatGPT through everyday tasks like recipes and finding restaurants",
        "Presented curriculum on slides, then helped seniors practice prompts one-on-one",
        "Built confidence through repeated, patient hands-on support",
      ],
    },
  ],
};

const AISeniorCenterDetail = ({ activity }: Props) => (
  <EventPortfolioDetail activity={activity} config={config} />
);

export default AISeniorCenterDetail;
