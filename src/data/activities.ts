import { assetPath } from "@/lib/assets";

export type Category = "School" | "Faith" | "Volunteering" | "Research";

export interface Activity {
  slug: string;
  title: string;
  org: string;
  date: string;
  role?: string;
  summary: string;
  highlights: string[];
  category: Category;
  coverImage?: string;
  galleryImages?: string[];
}

export const activities: Activity[] = [
  // School
  {
    slug: "friends-in-serving-him",
    title: "Friends in Serving Him",
    org: "Dublin High School",
    date: "April 2024 – Present",
    role: "Christian Club President",
    summary: "Refounded and re-established the Friends in Serving Him Christian club after it had been discontinued, growing it into one of the school's most active organizations.",
    highlights: [
      "Led and coordinated a club of approximately 40 members",
      "Planned and executed an outreach event with 100+ attendees promoting Christianity",
      "Organized weekly meetings and community discussions",
    ],
    category: "School",
    coverImage: assetPath("/photos/fishclub.jpg"),
  },
  {
    slug: "generation-code",
    title: "Generation Code",
    org: "Dublin High School",
    date: "July 2024 – Present",
    role: "Club President",
    summary: "Founded and lead a coding education club focused on making programming accessible to younger students through structured instructional sessions.",
    highlights: [
      "Co-founded the club with co-president Veer Gill and recruited officers",
      "Delivered 6-week instructional sessions teaching introductory Python and vibe coding to middle school students",
      "Ran camps at Cottonwood Creek, Harvest Park, Wells, and Fallon middle schools",
      "Closed each session with a week 6 project students built and presented themselves",
    ],
    category: "School",
    coverImage: assetPath("/photos/generationcode.png"),
  },
  {
    slug: "chamber-orchestra",
    title: "Chamber Orchestra",
    org: "Dublin High School",
    date: "August 2024 – Present",
    role: "First Violin — 4th Chair",
    summary: "Performing as first violin in the school's top orchestra ensemble, contributing to performances at prestigious venues.",
    highlights: [
      "Played first violin contributing to ensemble performance",
      "Participated in the Midwest Clinic as an orchestra member",
    ],
    category: "School",
    coverImage: assetPath("/photos/orchestra.jpg"),
  },
  // Faith
  {
    slug: "youth-praise-team",
    title: "Youth Praise Team",
    org: "New Life Church",
    date: "July 2024 – Present",
    role: "Team Leader",
    summary: "Leading the youth praise team in worship, coordinating rehearsals and fostering a collaborative musical environment for weekly services.",
    highlights: [
      "Led a youth praise team of ~7 members",
      "Coordinated rehearsals and song arrangements",
      "Fostered a collaborative and supportive musical environment",
    ],
    category: "Faith",
    coverImage: assetPath("/photos/praiseteam.jpg"),
  },
  {
    slug: "navajo-mission-trip",
    title: "Navajo Mission Trip",
    org: "Church Mission",
    date: "November 22–25, 2025",
    role: "Youth Leader",
    summary: "Served as Youth Leader for a cross-cultural mission trip to the Navajo Nation, guiding students and leading outreach activities for community members.",
    highlights: [
      "Guided a group of 10+ students from elementary through high school",
      "Led evangelism efforts and coordinated communication between youth and parents",
      "Organized outreach programs for ~50 Navajo children and adults",
    ],
    category: "Faith",
    coverImage: assetPath("/homepage-media/generated/church/03-navajo-mission-trip-img-8910.jpg"),
  },
  // Volunteering
  {
    slug: "hwarang-youth-foundation",
    title: "Hwarang Youth Foundation",
    org: "Hwarang Youth Foundation",
    date: "April 2023 – Present",
    role: "Regional President & Systems Manager",
    summary: "Leading a regional chapter while building the digital infrastructure that powers volunteer coordination across the organization.",
    highlights: [
      "Led a regional chapter of ~10 members overseeing ~70 volunteers",
      "Coordinated service initiatives contributing to 1000+ volunteer hours",
      "Developed software tools and website systems to track volunteer hours",
      "Co-developed a volunteer tracking application for service hour reporting",
      "Tutored students in English, Korean, and coding",
      "Participated in senior center visits and local park cleanups",
    ],
    category: "Volunteering",
    coverImage: assetPath("/photos/photo2.jpg"),
  },
  {
    slug: "ai-senior-center-workshops",
    title: "AI Senior Center Workshops",
    org: "Senior Centers",
    date: "July 2025 – Present",
    role: "Workshop Leader",
    summary: "Teaching seniors how to use generative AI tools through interactive, hands-on workshops designed to bridge the digital divide.",
    highlights: [
      "Led interactive workshops for 70+ seniors across multiple centers",
      "Taught generative AI for search, writing, and communication",
      "Co-developed tech curriculum with a Google AI consultant",
    ],
    category: "Volunteering",
    coverImage: assetPath("/homepage-media/generated/ai-senior-center/03-img-2132.jpg"),
  },
  {
    slug: "guatemala-medical-camp",
    title: "Guatemala Medical Camp",
    org: "Medical Mission",
    date: "June 18–25, 2025",
    role: "Mission Volunteer",
    summary: "Participated in a medical mission trip to Guatemala, assisting with eye surgeries and engaging rural communities through service activities.",
    highlights: [
      "Shadowed cataract eye surgeries, observing surgical techniques and patient care",
      "Assisted with pre-surgical patient preparation",
      "Led dance and movement activities in rural villages to engage patients and community members",
    ],
    category: "Volunteering",
    coverImage: assetPath("/homepage-media/generated/hwarang/36-24-25-guatemala-img-0782.jpg"),
  },
  // Research
  {
    slug: "biovibe-startup",
    title: "BioVibe Startup",
    org: "Student Startup",
    date: "April 2024 – Present",
    role: "Co-Founder & Developer",
    summary: "Designing and developing a wearable stress-tracking headband specifically tailored for high school students, from research through prototyping.",
    highlights: [
      "Designed and developed a personalized stress-tracking headband",
      "Collaborated with a team of three students to research, prototype, and refine the device",
      "Integrated stress-monitoring principles to support student well-being",
    ],
    category: "Research",
    coverImage: assetPath("/homepage-media/generated/biovibe/09-acfgroupphoto.png"),
  },
  {
    slug: "socratic-spark-project",
    title: "Socratic Spark Project",
    org: "San Francisco State University",
    date: "2025 – Present",
    role: "Student Collaborator",
    summary: "Collaborating with Professor Rav Suri at SFSU on the Socratic Spark project, combining academic mentorship with hands-on research and development.",
    highlights: [
      "Collaborated with Professor Rav Suri at San Francisco State University",
      "Contributed to the Socratic Spark research and development effort",
      "Connected academic guidance with practical project work",
    ],
    category: "Research",
    coverImage: assetPath("/homepage-media/generated/socratic-spark/01-screenshot-2026-06-30-at-4-01-08-pm.png"),
  },
  {
    slug: "agentic-ai-research",
    title: "Agentic AI Research",
    org: "Aspiring Scholars Directed Research Program (ASDRP)",
    date: "Jan 2025 – Feb 2026",
    role: "Researcher",
    summary:
      "Researched multi-agent communication and coordination systems with data scientist and AI specialist Mr. Suresh Subramaniam, co-authored a JEI paper, and built a Hyper-Local Growth Engine for small-medium businesses.",
    highlights: [
      "Researched multi-agent communication and coordination systems",
      "Analyzed the impact of different communication structures on system outputs",
      "Co-authored a JEI research paper titled “The Effect of Communication Structure on Multi-Agent System Outputs” (submitted for publication)",
      "Developed a Hyper-Local Growth Engine for small-medium businesses",
      "Designed system workflows for personalized local marketing content",
      "Presented research findings at ASDRP conferences with 2000+ attendees",
    ],
    category: "Research",
    coverImage: assetPath("/homepage-media/generated/asdrp/03-screenshot-2026-07-01-at-7-55-01-pm.png"),
  },
];

export const categories: Category[] = ["School", "Faith", "Volunteering", "Research"];

export const categoryDisplayNames: Record<Category, string> = {
  School: "School Life",
  Faith: "My Faith Journey",
  Volunteering: "Volunteering",
  Research: "Research",
};

export const categoryDescriptions: Record<Category, string> = {
  School: "Clubs, organizations, and extracurriculars that have shaped my high school experience at Dublin High School.",
  Faith: "Faith-based activities, mission trips, and ministry work that reflect my commitment to serving God and others.",
  Volunteering: "Community service and volunteer work where I give back through leadership, teaching, and direct action.",
  Research: "Academic research and entrepreneurial projects at the intersection of technology and real-world impact.",
};

export const findActivity = (category: string, slug: string) =>
  activities.find(
    (a) => a.category.toLowerCase() === category.toLowerCase() && a.slug === slug
  );

export const categoryStyles: Record<Category, { badge: string; dot: string }> = {
  School: {
    badge: "bg-clubs text-clubs-foreground",
    dot: "bg-clubs",
  },
  Faith: {
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
