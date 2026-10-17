import { fiverrReviews, fiverrSummary } from "@/data/reviews";

// Figures derived from the Fiverr reviews in data/reviews.ts, so they update
// whenever reviews are added. Every number on the page traces back to them.

const toDays = (duration?: string) => {
  const match = duration?.match(/(\d+)\s*(day|week|month)/i);
  if (!match) return null;
  const n = Number(match[1]);
  const unit = match[2].toLowerCase();
  return unit === "day" ? n : unit === "week" ? n * 7 : n * 30;
};

const median = (values: number[]) => {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
};

const days = fiverrReviews.map((r) => toDays(r.duration)).filter((d): d is number => d !== null);

export const sampleSize = fiverrReviews.length;

const monthIndex = (date: string) => {
  const [y, m] = date.split("-").map(Number);
  return y * 12 + m;
};
const newest = Math.max(...fiverrReviews.map((r) => monthIndex(r.date)));
const oldest = Math.min(...fiverrReviews.map((r) => monthIndex(r.date)));

const { reviewCount, fiveStarCount } = fiverrSummary;

export const orderStats = [
  {
    value: `${median(days)}`,
    unit: "days",
    label: "median delivery time in recent orders",
  },
  ...(reviewCount && fiveStarCount
    ? [
        {
          value: `${Math.floor((fiveStarCount / reviewCount) * 100)}`,
          unit: "%",
          label: `of ${reviewCount} Fiverr reviews are five stars`,
        },
      ]
    : []),
  {
    value: `${sampleSize}`,
    unit: "reviews",
    label: `in the last ${newest - oldest} months`,
  },
  {
    value: `${new Set(fiverrReviews.map((r) => r.country)).size}`,
    unit: "countries",
    label: "in those recent orders",
  },
];

// What buyers bring up unprompted, counted as reviews that mention it.
const themes: { label: string; pattern: RegExp }[] = [
  { label: "Clear communication", pattern: /communicat|responsive|kept me updated|answered/i },
  { label: "Delivered on time", pattern: /on time|fast delivery|as promised|delivered exactly|quick to respond/i },
  { label: "Professional", pattern: /professional/i },
  { label: "Easy to work with", pattern: /easy to work|easy from start|pleasure to work|smooth experience|amazing to work|easy to communicate/i },
  { label: "Clean, polished result", pattern: /clean|polished|modern|beautiful/i },
  { label: "Understood the brief", pattern: /understood|understanding|exactly (what|how)|listened/i },
  { label: "Attention to detail", pattern: /detail/i },
];

export const mentions = themes
  .map(({ label, pattern }) => ({
    label,
    count: fiverrReviews.filter((r) => pattern.test(r.text)).length,
  }))
  .filter((m) => m.count > 0)
  .sort((a, b) => b.count - a.count);
