import { type Activity } from "@/data/activities";
import { type HomepageMedia } from "@/data/homepageMedia";
import EventPortfolioDetail, { type EventPortfolioConfig } from "@/components/EventPortfolioDetail";

interface Props {
  activity: Activity;
}

const isPraiseTeamMedia = (media: HomepageMedia) => media.eventName === "Praise Team";

const config: EventPortfolioConfig = {
  mediaTitle: "Church & Retreats",
  eyebrow: "Worship Leadership",
  sectionLabel: "Praise Team Media",
  sectionTitle: "Leading worship through music",
  sectionIntro:
    "A focused record of youth praise team media, highlighting worship leadership, musical coordination, and serving the church community.",
  defaultEventName: "Praise Team",
  filterMedia: isPraiseTeamMedia,
  eventOrder: ["Praise Team"],
  eventDates: {
    "Praise Team": "July 2024 - Present",
  },
  eventDescriptions: {
    "Praise Team":
      "Led and supported the youth praise team through worship, rehearsal coordination, and collaborative musical service.",
  },
  stats: [{ value: "7", label: "Team Members" }],
  extraSections: [
    {
      label: "Leadership Focus",
      title: "Serving through worship",
      body: "As team leader, I helped coordinate rehearsals, guide arrangements, and create a supportive environment for student musicians.",
      items: [
        "Led youth worship with a student team",
        "Coordinated rehearsals and song flow",
        "Supported musicians across instruments and vocals",
        "Helped create a collaborative worship environment",
      ],
    },
  ],
};

const YouthPraiseTeamDetail = ({ activity }: Props) => (
  <EventPortfolioDetail activity={activity} config={config} />
);

export default YouthPraiseTeamDetail;
