import { caseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/types";

// Presentation details for the portfolio: a stage colour drawn from each
// product's own brand, and the short pitch used on the homepage.
// `live` and `fullPage` are only set for sites confirmed to be live; the
// full-page capture powers the hover-to-scroll preview.
const presentation: Record<
  string,
  { stage: string; pitch?: string; live?: string; fullPage?: string }
> = {
  "lso-bar-exam-platform": {
    stage: "#6d1a22",
    pitch:
      "Exam prep platform for Ontario bar candidates: OTP sign-in, paid practice sets, timed attempts, Stripe checkout and a full admin workspace.",
  },
  "super-media-bros-auction": {
    stage: "#a13ad9",
    pitch:
      "Live auction house for collectibles with real-time bidding, proxy bids, seller consignments, automatic invoices and payouts.",
  },
  "fliday-esim": {
    stage: "#e8692e",
    pitch:
      "Travel eSIM store where buyers pick a country, pay, and receive a working eSIM instantly, built for SEO and global traffic.",
  },
  "myperfecthire-recruiting-platform": {
    stage: "#4b0a6b",
    live: "https://myperfecthire.com",
    fullPage: "/work/full/perfect.webp",
    pitch:
      "Marketing site and lead funnel for a flat-fee executive search firm, including an ROI calculator and content hub.",
  },
  "inter-cafe-social-platform": {
    stage: "#1c2456",
    pitch:
      "Community platform with real-time chat, groups, a built-in marketplace and paid subscriptions, on Next.js and Django Channels.",
  },
  "44pro-custom-ecommerce": {
    stage: "#1f8a5b",
    pitch:
      "Custom baseball glove store with a product builder, stock catalogue and team ordering for a brand serving 500,000+ players.",
  },
  "i24pay-payment-automation": {
    stage: "#3d2fc9",
    live: "https://i24pay.com",
    fullPage: "/work/full/i24pay.webp",
  },
  "one-newz-express": {
    stage: "#0f4c6e",
    live: "https://onewzx.com",
    fullPage: "/work/full/onewzx.webp",
  },
  "marblestone-property-management": { stage: "#7d97bd" },
  "i-need-hypno": {
    stage: "#1f6f68",
    live: "https://ineedhypno.com",
    fullPage: "/work/full/hypno.webp",
    pitch:
      "Online hypnotherapy platform: book one-on-one video sessions with certified therapists, start with a free session, and keep going with a guided audio library and journal.",
  },
  "eco-agriculture-platform": { stage: "#3f7d3a" },
  "deephash-cloud-mining": { stage: "#1d2b4a" },
  "airnexus-b2b-landing-page": { stage: "#d4672b" },
  "clemson-printing-lab-scheduler": { stage: "#f56600" },
};

const featuredOrder = [
  "lso-bar-exam-platform",
  "i-need-hypno",
  "super-media-bros-auction",
  "fliday-esim",
  "myperfecthire-recruiting-platform",
];

export const stageFor = (id: string) => presentation[id]?.stage ?? "#2a3550";
export const liveFor = (id: string) => presentation[id]?.live;
export const fullPageFor = (id: string) => presentation[id]?.fullPage;
export const pitchFor = (study: CaseStudy) =>
  presentation[study.id]?.pitch ?? study.description;

export const featuredWork = featuredOrder
  .map((id) => caseStudies.find((study) => study.id === id))
  .filter((study): study is CaseStudy => Boolean(study));

// Strongest visuals first; everything else follows in data order.
const moreOrder = [
  "inter-cafe-social-platform",
  "44pro-custom-ecommerce",
  "i24pay-payment-automation",
  "one-newz-express",
  "marblestone-property-management",
  "eco-agriculture-platform",
  "deephash-cloud-mining",
  "airnexus-b2b-landing-page",
];

export const moreWork = [
  ...moreOrder
    .map((id) => caseStudies.find((study) => study.id === id))
    .filter((study): study is CaseStudy => Boolean(study)),
  ...caseStudies.filter(
    (study) => !featuredOrder.includes(study.id) && !moreOrder.includes(study.id),
  ),
];

// Product name for display: the part of the title before ": ", which reads
// better than generic client labels like "Personal Project".
export function nameFor(study: CaseStudy) {
  const [prefix, rest] = study.title.split(/:\s|\s-\s/);
  if (rest) return prefix.trim();
  const genericClient = /client|business|project|platform|agency/i.test(study.client);
  return genericClient ? study.title : study.client;
}

// Broad groups for filtering the full case-study index.
export function groupFor(study: CaseStudy): string {
  const text = `${study.category} ${study.title}`.toLowerCase();
  if (/commerce|store|shop|retail|pos|auction|marketplace|rental/.test(text))
    return "Commerce";
  if (/platform|saas|scheduler|management|social|cloud|exam|recruit|appointment/.test(text))
    return "Platforms";
  return "Websites";
}
