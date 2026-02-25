export interface Course {
  semester: string;
  title: string;
  gatorEval?: string;
  note?: string;
  canvasUrl: string;
}

export const courses: Course[] = [
  {
    semester: "Spring 2026",
    title: "PHY4905 — Collider Physics at the Higgs Frontier",
    canvasUrl: "https://ufl.instructure.com/courses/542819",
  },
  {
    semester: "Fall 2025",
    title: "PHY2060 — Enriched Physics 1 w/ Calc",
    gatorEval: "4.68 / 5.00",
    canvasUrl: "https://ufl.instructure.com/courses/542819",
  },
  {
    semester: "Spring 2025",
    title: "PHY2048 — Physics 1 w/ Calc",
    gatorEval: "4.30 / 5.00",
    canvasUrl: "https://ufl.instructure.com/courses/532659",
  },
  {
    semester: "Fall 2024",
    title: "PHY2048 — Physics 1 w/ Calc",
    gatorEval: "4.26 / 5.00",
    canvasUrl: "https://ufl.instructure.com/courses/515736",
  },
  {
    semester: "Spring 2024",
    title: "PHY2048 — Physics 1 w/ Calc",
    gatorEval: "3.53 / 5.00",
    canvasUrl: "https://ufl.instructure.com/courses/498010",
  },
  {
    semester: "Fall 2023",
    title: "PHY2048 — Physics 1 w/ Calc",
    gatorEval: "3.31 / 5.00",
    canvasUrl: "https://ufl.instructure.com/courses/486237",
  },
  {
    semester: "Fall 2022",
    title: "PHY2049 — Physics 2 w/ Calc",
    gatorEval: "4.38 / 5.00",
    note: "Taught Discussion Sections",
    canvasUrl: "https://ufl.instructure.com/courses/463702",
  },
];
