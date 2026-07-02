import { type Activity } from "@/data/activities";
import { type HomepageMedia } from "@/data/homepageMedia";
import EventPortfolioDetail, { type EventPortfolioConfig } from "@/components/EventPortfolioDetail";

interface Props {
  activity: Activity;
}

const isNavajoMedia = (media: HomepageMedia) => media.eventName.trim() === "Navajo Mission Trip";

const navajoTripCaptions = [
  "An overview of our mission trip — youth leadership, the two-day kids program, and outreach in the Navajo community.",
  "Serving kids during the two-day program on the Navajo mission trip.",
  "A moment from door-to-door evangelism sharing about Jesus in the community.",
  "Leading K-pop dance and science time with kids on the reservation.",
];

const config: EventPortfolioConfig = {
  mediaTitle: "Church & Retreats",
  eyebrow: "Mission Leadership",
  sectionLabel: "Navajo Mission Media",
  sectionTitle: "Outreach with the Navajo community",
  sectionIntro:
    "Swipe through the trip overview video, photos, and clips from our short-term mission to the Navajo Nation.",
  defaultEventName: "Navajo Mission Trip",
  filterMedia: isNavajoMedia,
  getEventName: () => "Navajo Mission Trip",
  featuredMedia: {
    match: isNavajoMedia,
    label: "Trip Overview",
    title: "Navajo Mission Trip Overview",
    description:
      "Led a two-day program for kids during a short-term mission trip to the Navajo Nation, including a K-pop dance I led, science time, movie watching, and prayer with the kids. We also went door-to-door sharing about Jesus with community members. I served as youth leader for the 2025 trip.",
  },
  eventOrder: ["Navajo Mission Trip"],
  eventDates: {
    "Navajo Mission Trip": "November 2025",
  },
  eventDescriptions: {
    "Navajo Mission Trip":
      "Led a two-day program for kids during a short-term mission trip to the Navajo Nation, including a K-pop dance I led, science time, movie watching, and prayer with the kids. We also went door-to-door sharing about Jesus with community members. I served as youth leader for the 2025 trip.",
  },
  getMediaCaption: (_media, _eventName, index) => navajoTripCaptions[index % navajoTripCaptions.length],
  stats: [
    { value: "10+", label: "Students Guided" },
    { value: "50+", label: "People Served" },
  ],
  extraSections: [
    {
      label: "Mission Role",
      title: "Leading students in cross-cultural service",
      body: "As youth leader, I helped plan and run a two-day program of activities for kids alongside evangelism efforts in the community.",
      items: [
        "Led a K-pop dance activity for the kids",
        "Ran science time and movie watching sessions",
        "Prayed with children throughout the program",
        "Did door-to-door evangelism sharing about Jesus",
      ],
    },
  ],
};

const NavajoDetail = ({ activity }: Props) => (
  <EventPortfolioDetail activity={activity} config={config} />
);

export default NavajoDetail;
