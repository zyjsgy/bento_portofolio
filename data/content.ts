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
  titles: ["CURIOSITY", "ENTHUSIASM", "CARENESS"],
};

// ─── Skills ──────────────────────────────────────────────────
export const skillsData: SkillsData = {
  skills: "SQL, Python, Tableau, Javascript, Excel, deepseek ",
  highlights: ["SQL", "Python"],
};

// ─── About ───────────────────────────────────────────────────
export const aboutData: AboutData = {
  image: "/avatar.png",
  imageAlt: " Character Illustration",
  text: `2021 - 2024    KU Leuven`,
};

// ─── Contact ─────────────────────────────────────────────────
export const contactData: ContactEntry[] = [
  {
    type: "Email",
    value: "171653176@qq.com / zyjsgy@gmail.com",
    href: "mailto:171653176@qq.com",
  },
];

// ─── Work / Projects ─────────────────────────────────────────
export const projectCategories: ProjectCategory[] = [
  {
    category: "My AI-assisted Products",
    projects: [
      {
        title: "Interstitial Notes-Taking APP",
        image: "/projects/placeholder.png",
        techStack: ["GSAP", "Three.js"],
        href: "#",
      },
    ],
  },
];
