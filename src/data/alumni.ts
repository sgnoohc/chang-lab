export interface Alumnus {
  name: string;
  info: string;
  linkUrl?: string;
  linkText?: string;
}

export const alumni: Alumnus[] = [
  { name: "Cedric Broussard", info: "Univ. of Florida (2025 BS Physics) — University of Florida (Current)" },
  { name: "Dr. Eslam Zenhom", info: "Univ. of Florida (2025 PhD Physics)" },
  { name: "Amilqar Karam", info: "Univ. of Florida (2025 BS Physics) — Johns Hopkins University (Current)" },
  { name: "Samuel Sebastian", info: "Univ. of Florida" },
  { name: "Joseph Mezzetti", info: "Univ. of Florida" },
  {
    name: "Tsion (Zion) Dessalegn",
    info: "Univ. of Michigan-Flint",
    linkUrl: "https://sites.google.com/upr.edu/uscms-pursue/",
    linkText: "PURSUE Intern 2024",
  },
  { name: "Mayra Silva", info: "Univ. of Florida" },
];
