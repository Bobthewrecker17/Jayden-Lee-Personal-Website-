export type Category = "School" | "Christian" | "Volunteering" | "Research";

export interface Activity {
  title: string;
  org: string;
  date: string;
  description: string;
  category: Category;
  image?: string;
}

export const activities: Activity[] = [
  // School
  {
    title: "Friends in Serving Him — Christian Club President",
    org: "Dublin High School",
    date: "April 2024 – Present",
    description: "Refounded and re-established the Friends in Serving Him Christian club after it had been discontinued. Led and coordinated a club of approximately 40 members. Planned and executed an outreach event with 100+ attendees promoting Christianity.",
    category: "School",
  },
  {
    title: "Generation Code Club President",
    org: "Dublin High School",
    date: "July 2024 – Present",
    description: "Delivered 6-week instructional sessions for middle school students teaching introductory Python. Led student officers and organized meetings. Coordinated with school districts to plan and execute coding camps.",
    category: "School",
  },
  {
    title: "Chamber Orchestra — First Violin (4th Chair)",
    org: "Dublin High School",
    date: "August 2024 – Present",
    description: "Played first violin contributing to ensemble performance. Participated in the Midwest Clinic as an orchestra member.",
    category: "School",
  },
  // Christian
  {
    title: "New Life Church Youth Praise Team Leader",
    org: "New Life Church",
    date: "July 2024 – Present",
    description: "Led a youth praise team of ~7 members. Coordinated rehearsals and song arrangements. Fostered a collaborative and supportive musical environment.",
    category: "Christian",
  },
  {
    title: "Navajo Mission Trip — Youth Leader",
    org: "Church Mission",
    date: "November 22–25, 2025",
    description: "Served as Youth Leader guiding 10+ students from elementary through high school. Led evangelism efforts and outreach activities for groups of ~50 Navajo children and adults, organizing programs aimed at encouragement and community engagement.",
    category: "Christian",
  },
  {
    title: "Guatemala Medical Camp",
    org: "Medical Mission",
    date: "June 18–25, 2025",
    description: "Shadowed cataract eye surgeries, observing surgical techniques and patient care. Assisted with pre-surgical patient preparation. Led dance and movement activities in rural villages to engage patients and community members.",
    category: "Christian",
  },
  // Volunteering
  {
    title: "Hwarang Youth Foundation — Regional President & Systems Manager",
    org: "Hwarang Youth Foundation",
    date: "April 2023 – Present",
    description: "Led a regional chapter of ~10 members while overseeing digital infrastructure supporting ~70 volunteers and coordinating service initiatives contributing to 1000+ volunteer hours. Developed software tools and website systems to track volunteer hours.",
    category: "Volunteering",
  },
  {
    title: "AI Senior Center Workshops",
    org: "Senior Centers",
    date: "July 2025 – Present",
    description: "Led interactive workshops for 70+ seniors across multiple centers on using generative AI for search, writing, and communication. Co-developed tech curriculum with a Google AI consultant.",
    category: "Volunteering",
  },
  {
    title: "Hwarang Youth Foundation Member",
    org: "Hwarang Youth Foundation",
    date: "August 2022 – Present",
    description: "Volunteered in local activities in Dublin and Santa Clara. Tutored students in English, Korean, and coding; interacted with seniors at senior centers; and participated in local park cleanups. 1000+ volunteer hours.",
    category: "Volunteering",
  },
  // Research
  {
    title: "Agentic AI Research",
    org: "Aspiring Scholars Directed Research Program (ASDRP)",
    date: "Jan 2025 – Feb 2026",
    description: "Researched multi-agent communication and coordination systems. Co-authored a JEI research paper titled \"The Effect of Communication Structure on Multi-Agent System Outputs.\" Developed a Hyper-Local Growth Engine for small-medium businesses.",
    category: "Research",
  },
  {
    title: "BioVibe Startup",
    org: "Student Startup",
    date: "April 2024 – Present",
    description: "Designed and developed a personalized stress-tracking headband tailored for high school students. Collaborated with a team of three students to research, prototype, and refine the wearable device. Integrated stress-monitoring principles to support student well-being.",
    category: "Research",
  },
];

export const categories: Category[] = ["School", "Christian", "Volunteering", "Research"];

export const categoryStyles: Record<Category, { badge: string; dot: string }> = {
  School: {
    badge: "bg-clubs text-clubs-foreground",
    dot: "bg-clubs",
  },
  Christian: {
    badge: "bg-faith text-faith-foreground",
    dot: "bg-faith",
  },
  Volunteering: {
    badge: "bg-volunteer text-volunteer-foreground",
    dot: "bg-volunteer",
  },
  Research: {
    badge: "bg-primary text-primary-foreground",
    dot: "bg-primary",
  },
};
