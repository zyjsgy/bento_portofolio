import type {
  HeroData,
  SkillsData,
  AboutData,
  ContactEntry,
  ProjectCategory,
} from "./types";

// Re-export types so existing imports keep working.
export type { ContactEntry, Project, ProjectCategory } from "./types";

// ─── Hero ────────────────────────────────────────────────────
export const heroData: HeroData = {
  greeting: "Hi, I am 晏宁",
  titles: ["CURIOSITY", "ENTHUSIASM", "STATISTICS"],
};

// ─── Skills ──────────────────────────────────────────────────
export const skillsData: SkillsData = {
  skills: "SQL, Python, Tableau, Javascript, Excel, deepseek ",
  highlights: ["SQL", "Python"],
};

// ─── About ───────────────────────────────────────────────────
export const aboutData: AboutData = {
  image: "/avatar4.png",
  imageAlt: " Character Illustration",
  text: `I am now a Business Analyst responsible for data/case study as well as operation analysis. I derived my MASTER degree in KU Leuven in 2024, and during this period 
  I learnt Photoshop and Front-End programming by myself, which gave me a lot of fun to express my ideas and creactivity`,
};

// ─── Contact ─────────────────────────────────────────────────
export const contactData: ContactEntry[] = [
  {
    type: "Email",
    value: "171653176@qq.com / zyjsgy@gmail.com",
    href: "mailto:171653176@qq.com",
  },
];

// ─── Projects ─────────────────────────────────────────
export const projectCategories: ProjectCategory[] = [
  {
    category: "My AI-assisted Projects",
    projects: [
      {
        title: "Interstitial Notes-Taking APP",
        image: "/projects/placeholder.png",
        techStack: ["Gemini"],
        href: "#",
      },
    ],
  },
];
