export type Category = "School" | "Christian" | "Volunteering" | "Research";

export interface Activity {
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
  },
  {
    title: "Generation Code",
    org: "Dublin High School",
    date: "July 2024 – Present",
    role: "Club President",
    summary: "Founded and lead a coding education club focused on making programming accessible to younger students through structured instructional sessions.",
    highlights: [
      "Delivered 6-week instructional sessions teaching introductory Python to middle school students",
      "Led student officers and organized meetings to support the program",
      "Coordinated with school districts to plan and execute coding camps",
    ],
    category: "School",
  },
  {
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
  },
  // Christian
  {
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
    category: "Christian",
  },
  {
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
    category: "Christian",
  },
  {
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
    category: "Christian",
  },
  // Volunteering
  {
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
    ],
    category: "Volunteering",
  },
  {
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
  },
  {
    title: "Community Volunteering",
    org: "Hwarang Youth Foundation",
    date: "August 2022 – Present",
    role: "Member",
    summary: "Ongoing community service across Dublin and Santa Clara, from tutoring students to organizing park cleanups, accumulating over 1000 volunteer hours.",
    highlights: [
      "Tutored students in English, Korean, and coding",
      "Interacted with seniors at senior centers",
      "Participated in local park cleanups",
      "1000+ total volunteer hours",
    ],
    category: "Volunteering",
  },
  // Research
  {
    title: "Agentic AI Research",
    org: "Aspiring Scholars Directed Research Program (ASDRP)",
    date: "Jan 2025 – Feb 2026",
    role: "Research Fellow",
    summary: "Conducting research on multi-agent AI systems, exploring how communication structures affect system outputs, and building practical applications for small businesses.",
    highlights: [
      "Researched multi-agent communication and coordination systems",
      "Co-authored a JEI research paper: \"The Effect of Communication Structure on Multi-Agent System Outputs\"",
      "Developed a Hyper-Local Growth Engine for small-medium businesses",
      "Presented research findings at ASDRP conferences",
    ],
    category: "Research",
  },
  {
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
  },
];

export const categories: Category[] = ["School", "Christian", "Volunteering", "Research"];

export const categoryDescriptions: Record<Category, string> = {
  School: "Clubs, organizations, and extracurriculars that have shaped my high school experience at Dublin High School.",
  Christian: "Faith-based activities, mission trips, and ministry work that reflect my commitment to serving God and others.",
  Volunteering: "Community service and volunteer work where I give back through leadership, teaching, and direct action.",
  Research: "Academic research and entrepreneurial projects at the intersection of technology and real-world impact.",
};

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
