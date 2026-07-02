import { type Activity } from "@/data/activities";
import EventPortfolioDetail, { type EventPortfolioConfig } from "@/components/EventPortfolioDetail";

interface Props {
  activity: Activity;
}

const fishEventCaptionVariants: Record<string, string[]> = {
  Bonding: [
    "Fellowship, prayer, and worship with FISH clubs from across the Tri-Valley.",
    "Sharing testimonies about how God is working in our schools and lives.",
  ],
  "12-3 Guest Speaker ": [
    "Mikael from Presence City Church speaking on fear and anxiety.",
    "Students listening to Mikael's testimony at Dublin High School.",
    "About 40-50 students gathered for the December guest speaker event.",
    "FISH Club members hosting Mikael for our December meeting.",
  ],
  "Prayer Meeting 12-10": [
    "Leading worship with 'O Come to the Altar' and 'Hosanna' at our prayer meeting.",
    "Praying for students to lay down their worries and come to Jesus.",
    "Praying for transformation as God shapes us to be more like Him.",
    "FISH Club members gathered for our December prayer meeting.",
    "A quiet moment of prayer during our December meeting.",
  ],
  "Prayer Meeting 10-29": [
    "Vice President Timothy Koo leading our October prayer meeting.",
    "Singing 'Waymaker' and 'Worthy of It All' together.",
    "Praying for surrender — repentance and honesty with God.",
    "Asking God to work in our school and circumstances.",
    "FISH Club members in prayer during our October meeting.",
    "A moment of worship before our prayer topics.",
  ],
  "10-15 Guest Speaker": [
    "Pastor Barnaby speaking on sin and repentance.",
    "About 40 students listening to Pastor Barnaby's message.",
    "FISH Club hosting Pastor Barnaby for our October guest speaker event.",
    "Students reflecting after the message on repentance.",
    "Fellowship following the October guest speaker event.",
  ],
  "10-8 Prayer Meeting": [
    "A praise-focused meeting singing 'Good Good Father.'",
    "Worshipping together with 'Goodness of God.'",
    "FISH Club members gathered for our October praise meeting.",
    "A moment of worship during our October prayer meeting.",
  ],
  "9-17 First Meeting": [
    "50-60 students at our first meeting of the year.",
    "Officers collaborating to share the gospel at our first meeting.",
    "Welcoming new students to FISH Club.",
    "Kicking off the school year with our first FISH Club meeting.",
    "Officers introducing what FISH Club is about.",
  ],
  "9-12 Club Fair": [
    "Sharing what FISH Club is about at the Dublin High School club fair.",
    "Students signing up for FISH Club at the club fair.",
  ],
  "Group Photo": [
    "A group photo with FISH Club members.",
    "FISH Club officers and members together.",
  ],
  "3-10 Meant For More than Anxiety Event": [
    "Pastor Howard Lee speaking on anxiety at day one of Meant For More.",
    "About 60 students attending the first day of our outreach.",
    "Setting up for day one of the three-day Meant For More outreach.",
    "Students hearing the gospel on day one of Meant For More.",
    "Food and fellowship at the Meant For More anxiety event.",
    "FISH Club officers running day one of the outreach.",
  ],
  "3-11 Meant For More than Just this Life Event": [
    "Andrew Chen speaking on day two of Meant For More.",
    "About 80 students attending the second day of our outreach.",
    "Students engaging with the message on day two.",
    "FISH Club officers running day two of the Meant For More outreach.",
    "Fellowship and food at the Just This Life event.",
    "Sharing the gospel with more students on day two.",
  ],
  "3-12 Meant for Eternity Event": [
    "Pastor Sam speaking on day three of Meant For More.",
    "About 120 students attending the final day of our outreach.",
    "Wrapping up our three-day outreach that reached 300 students total.",
    "Students hearing the gospel on the final day of Meant For More.",
    "FISH Club officers closing out the Meant For More outreach.",
    "Fellowship and food at the Meant for Eternity event.",
  ],
};

const config: EventPortfolioConfig = {
  mediaTitle: "Friends in Serving Him",
  eyebrow: "School & Faith Leadership",
  sectionLabel: "FISH Events",
  sectionTitle: "Meetings, outreach, and community moments",
  sectionIntro:
    "Each section comes from a FISH Club media folder, including weekly meetings, prayer gatherings, speaker events, bonding, and outreach. Follow along on Instagram @fishclubdublin.",
  defaultEventName: "FISH Club Moments",
  eventOrder: [
    "Bonding",
    "12-3 Guest Speaker ",
    "Prayer Meeting 12-10",
    "Prayer Meeting 10-29",
    "10-15 Guest Speaker",
    "10-8 Prayer Meeting",
    "9-17 First Meeting",
    "9-12 Club Fair",
    "Group Photo",
    "3-10 Meant For More than Anxiety Event",
    "3-11 Meant For More than Just this Life Event",
    "3-12 Meant for Eternity Event",
  ],
  eventDates: {
    Bonding: "April 2025",
    "12-3 Guest Speaker ": "December 2025",
    "Prayer Meeting 12-10": "December 2025",
    "Prayer Meeting 10-29": "October 2025",
    "10-15 Guest Speaker": "October 2025",
    "10-8 Prayer Meeting": "October 2025",
    "9-17 First Meeting": "September 2025",
    "9-12 Club Fair": "September 2025",
    "Group Photo": "February 2025",
    "3-10 Meant For More than Anxiety Event": "March 2025",
    "3-11 Meant For More than Just this Life Event": "March 2025",
    "3-12 Meant for Eternity Event": "March 2025",
  },
  eventDescriptions: {
    Bonding:
      "Organized a fellowship bonding event with Christian clubs from across the Tri-Valley — Foothill High School FISH Club, Amador Valley High School FISH Club, Emerald High School Christian Club, Dublin High School FISH Christian Club (us), California High School FISH Club, and California High School Bible Buddies. We shared fellowship, prayer, praise, and testimonies about how God is working in our individual schools and lives. An amazing time!",
    "12-3 Guest Speaker ":
      "Invited Mikael from Presence City Church to speak at Dublin High School about fear and anxiety, sharing his own testimony. About 40-50 students attended.",
    "Prayer Meeting 12-10":
      "Led a FISH Club prayer meeting, opening with 'O Come to the Altar' (Elevation Worship) and 'Hosanna' (Hillsong Worship). We prayed for students to come to Jesus by laying down worries and distractions, and for transformation as God cleanses sinful areas and shapes us to be more like Him.",
    "Prayer Meeting 10-29":
      "A prayer meeting led by Vice President Timothy Koo, opening with 'Waymaker' and 'Worthy of It All.' We prayed for surrender — repentance and honesty with God — and asked Him to work in our school and other circumstances.",
    "10-15 Guest Speaker":
      "Pastor Barnaby spoke to about 40 students on the topic of sin and repentance.",
    "10-8 Prayer Meeting":
      "A praise-focused meeting where we sang 'Good Good Father' and 'Goodness of God.'",
    "9-17 First Meeting":
      "Our first meeting of the year, with 50-60 students in attendance. All club officers collaborated in sharing the gospel and introducing what FISH Club is about.",
    "9-12 Club Fair":
      "Shared what FISH Club is about with Dublin High School students at the club fair — many students signed up!",
    "Group Photo": "A group photo with FISH Club members.",
    "3-10 Meant For More than Anxiety Event":
      "Day one of our three-day 'Meant For More' outreach sharing the gospel with Dublin High School students. Pastor Howard Lee from San Ramon Cornerstone Fellowship Church spoke, with about 60 students attending.",
    "3-11 Meant For More than Just this Life Event":
      "Day two of the 'Meant For More' outreach, featuring Andrew Chen from Decision Point Staff, with about 80 students attending.",
    "3-12 Meant for Eternity Event":
      "Day three of the 'Meant For More' outreach, featuring Pastor Sam from Maranatha Presbyterian Church, with about 120 students attending. Across all three days we brought food, guest speakers, and advertised to hundreds of students — reaching about 300 students total, with many hearing the gospel.",
  },
  getMediaCaption: (_media, eventName, index) => {
    const variants = fishEventCaptionVariants[eventName];
    return variants ? variants[index % variants.length] : undefined;
  },
  stats: [
    { value: "40+", label: "Club Members" },
    { value: "300+", label: "Outreach Attendees" },
  ],
  extraSections: [
    {
      label: "Outreach Impact",
      title: "Meant For More: three days, hundreds reached",
      body: "Our biggest outreach of the year brought food, guest speakers, and advertising to hundreds of Dublin High School students over three consecutive days, sharing the gospel with about 300 students total.",
      items: [
        "Day 1: Pastor Howard Lee — ~60 students",
        "Day 2: Andrew Chen — ~80 students",
        "Day 3: Pastor Sam — ~120 students",
        "Follow along on Instagram @fishclubdublin",
      ],
    },
  ],
};

const FishDetail = ({ activity }: Props) => (
  <EventPortfolioDetail activity={activity} config={config} />
);

export default FishDetail;
