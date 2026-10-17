// Single source of truth for personal details shown across the site.
// Keep every number here accurate — visitors can check them against the
// linked profiles, and one inflated figure undoes the rest of the page.

export const profile = {
  name: "Md Hasibul Hasan",
  shortName: "Hasib",
  role: "Full-stack developer",
  location: "Bangladesh",
  timezone: "GMT+6",
  email: "mdhasibulhasan360@gmail.com",
  whatsapp: {
    display: "+880 1608-471414",
    href: "https://wa.me/8801608471414?text=Hi%20Hasib%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  },
  portrait: "/work/hasib-portrait.webp",
  avatar: "/contact/hasib image.webp",
  startedYear: 2017,
};

export const platforms = {
  fiverr: {
    name: "Fiverr",
    href: "https://www.fiverr.com/adnanhasib565",
    note: "Hire with Fiverr's payment protection",
  },
  upwork: {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~016c22697bb208b08b?mp_source=share",
    note: "Work history and contracts",
  },
  toptal: {
    name: "Toptal",
    href: "https://www.toptal.com/developers/resume/md-hasibul-hasan",
    note: "Developer résumé",
  },
  linkedin: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/coder-hasib",
    note: "Professional background",
  },
} as const;

export type PlatformKey = keyof typeof platforms;

export const highlights = [
  { value: "8+", label: "years building for the web" },
  { value: "150+", label: "projects delivered" },
  { value: "5.0", label: "rating from 165 Fiverr reviews" },
];

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Redis",
  "Stripe",
  "Tailwind CSS",
  "AWS",
  "Vercel",
  "Docker",
];
