export type CourseGroup = {
  label: string;
  year: string;
  courses: {
    name: string;
    grade: string;
    apScore?: string;
  }[];
};

export const courseCatalog: CourseGroup[] = [
  {
    label: "Grade 11",
    year: "2025-2026",
    courses: [
      { name: "AP Calculus AB", grade: "A / A", apScore: "Pending" },
      { name: "AP Chemistry", grade: "A / A", apScore: "Pending" },
      { name: "AP Computer Science A", grade: "A / A", apScore: "Pending" },
      { name: "AP English Language and Composition", grade: "A / A", apScore: "Pending" },
      { name: "AP US History", grade: "A / A", apScore: "Pending" },
      { name: "Honors Chamber Orchestra", grade: "A / A" },
    ],
  },
  {
    label: "Grade 10",
    year: "2024-2025",
    courses: [
      { name: "AP Computer Science Principles", grade: "A / A", apScore: "5" },
      { name: "AP Precalculus", grade: "A / B", apScore: "5" },
      { name: "English 2", grade: "A / A" },
      { name: "Honors Chemistry", grade: "B / B" },
      { name: "Honors Chamber Orchestra", grade: "A / A" },
      { name: "Spanish 3", grade: "A / A" },
      { name: "World History", grade: "A / A" },
      { name: "AP Music Theory", grade: "A", apScore: "N/A" },
    ],
  },
];
