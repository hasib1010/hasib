// Buyer reviews copied from the Fiverr gig:
// https://www.fiverr.com/adnanhasib565/build-a-responsive-custom-website-as-a-full-stack-developer-or-rebuild-a-website
//
// Only paste reviews exactly as they appear on Fiverr. Visitors can (and do)
// open the profile to compare, so wording, names and dates must match.
// Reviews Fiverr truncates with "See more" are cut at the last full sentence.
// Dates are the month implied by Fiverr's "x months ago", as of Oct 2026.

export interface FiverrReview {
  reviewer: string;
  country: string;
  countryCode?: string;
  rating: number;
  text: string;
  date: string;
  price?: string;
  duration?: string;
  repeatClient?: boolean;
}

export const fiverrGigUrl =
  "https://www.fiverr.com/adnanhasib565/build-a-responsive-custom-website-as-a-full-stack-developer-or-rebuild-a-website";

// Overall figures exactly as shown on the gig's review header.
// Leave a field as null to hide it rather than guess.
export const fiverrSummary: {
  rating: number | null;
  reviewCount: number | null;
  level: string | null;
  breakdown: { label: string; value: number }[];
} = {
  rating: 5.0,
  reviewCount: 165,
  level: null,
  breakdown: [
    { label: "Seller communication", value: 5 },
    { label: "Quality of delivery", value: 5 },
    { label: "Value of delivery", value: 5 },
  ],
};

const US = { country: "United States", countryCode: "US" };

export const fiverrReviews: FiverrReview[] = [
  { reviewer: "caroldillon76", ...US, rating: 5, date: "2026-08", price: "$100-$200", duration: "4 days",
    text: "Hasib and his team did a solid job turning our estimation workflow into a clean, practical SaaS platform. The calculations, project dashboard, and PDF exports work smoothly, and the interface is easy to use. They understood our requirements well and communicated clearly throughout. Very pleased with the result" },
  { reviewer: "generius375", country: "Slovenia", countryCode: "SI", rating: 5, date: "2026-07", price: "$1,000-$2,500", duration: "2 months", repeatClient: true,
    text: "I’m really happy with the work he did on my website. He built both the frontend and backend, and everything turned out exactly how I wanted. Communication was smooth throughout the project, and he was always quick to respond and make any changes I requested." },
  { reviewer: "nickbova65", ...US, rating: 5, date: "2026-08", price: "$100-$200", duration: "8 days",
    text: "Hasib did a great job improving our scheduling platform. The UI is much easier to use, the mobile experience is noticeably better, and the scheduling workflow feels smoother overall. Communication was excellent throughout, and everything was delivered as promised. I'd definitely recommend him for custom web application projects." },
  { reviewer: "robinmalkovazzs", ...US, rating: 5, date: "2026-07", price: "$50", duration: "7 days",
    text: "I thought in this low budget, I may not get the expected outcome, but Hasib proved me wrong. He treated me like a friend, rather than treating me like a buyer. Thank you so much. I will definitely get back to him with new work." },
  { reviewer: "jeanninewalket8", ...US, rating: 5, date: "2026-08", price: "$50-$100", duration: "6 days",
    text: "I’m very happy with the outcome. The website is exactly what I needed: simple, professional, and focused on making it easier for customers to send quote requests instead of relying on phone calls. Hasib was easy to communicate with, listened to my requirements, and delivered everything on time. It was a smooth experience from beginning to end." },
  { reviewer: "thomaspidgeon", ...US, rating: 5, date: "2026-08", price: "$50-$100", duration: "5 days",
    text: "Hasib is very professional. He answered all my questions patiently, suggested improvements that made my project even better, and delivered exactly on time. It's rare to find someone who genuinely wants your project to succeed." },
  { reviewer: "kimberlyckert54", ...US, rating: 5, date: "2026-07", price: "$50-$100", duration: "6 days",
    text: "Working with Hasib was a smooth experience. He understood what I needed right away, kept me updated, and delivered everything on time. The work was clean, and he even fixed a couple of things I hadn't noticed. I appreciate the attention to detail and would definitely work with him again." },
  { reviewer: "happinessajumuk", country: "United Kingdom", countryCode: "GB", rating: 5, date: "2026-06", price: "$50-$100", duration: "8 days",
    text: "The stock management system is clean, easy to use, and exactly what my restaurant needed. Communication was excellent throughout the project, and he kept me updated every step of the way." },
  { reviewer: "gotitemplates", ...US, rating: 5, date: "2026-09", price: "$100-$200", duration: "13 days", repeatClient: true,
    text: "It’s been a long journey with my program but Hasib and his team have been amazing throughout this whole project" },
  { reviewer: "roberdtcote", ...US, rating: 5, date: "2026-09", price: "$50-$100", duration: "10 days",
    text: "Very happy with the work! The Blogs page looks clean, matches the website perfectly, and works well on all devices. The seller was professional, responsive, and delivered everything as promised. Highly recommended!" },
  { reviewer: "milton_d_miller", ...US, rating: 5, date: "2026-10", price: "$100-$200", duration: "10 days",
    text: "Really happy with the work. Everything turned out great and communication was easy. Thank you!" },
  { reviewer: "philip_saymour", ...US, rating: 5, date: "2026-10", price: "$100-$200", duration: "2 weeks",
    text: "Very happy with the final website. Clean, fast, and professionally done. Great work!" },
  { reviewer: "workholic508", country: "India", countryCode: "IN", rating: 5, date: "2026-09", price: "$50", duration: "6 days",
    text: "Good understanding" },
  { reviewer: "abdulseo_guru", country: "Pakistan", countryCode: "PK", rating: 5, date: "2026-09", price: "$600-$800", duration: "6 weeks",
    text: "Nice work hasib" },
  { reviewer: "jimmyescobar97", ...US, rating: 5, date: "2026-08", price: "$50-$100", duration: "6 days",
    text: "A pleasure to work with. The project was completed on time and exceeded my expectations." },
  { reviewer: "nancyharrisont7", ...US, rating: 5, date: "2026-08", price: "$100-$200", duration: "6 days",
    text: "Excellent work! Hasib was professional, responsive, and delivered a beautiful website on time. Highly recommended!" },
  { reviewer: "reeltherapymn", ...US, rating: 5, date: "2026-08", price: "$400-$600", duration: "10 days",
    text: "Was amazing to work with!!! Vet professional and great product" },
  { reviewer: "lorraine_cruaz", ...US, rating: 5, date: "2026-08", price: "$100-$200", duration: "3 days",
    text: "Working with Hasib was easy from start to finish. Highly recommend!" },
  { reviewer: "marco_esquivel5", ...US, rating: 5, date: "2026-08", price: "$50-$100", duration: "9 days",
    text: "Great attention to detail. Hasib went above and beyond to make sure I was 100% satisfied. Thank you!" },
  { reviewer: "meleajama596", ...US, rating: 5, date: "2026-07", price: "$50-$100", duration: "5 days",
    text: "Professional and easy to work with. The project was completed on time and met my expectations." },
  { reviewer: "generius375", country: "Slovenia", countryCode: "SI", rating: 5, date: "2026-07", price: "$200-$400", duration: "1 day", repeatClient: true,
    text: "Amazing to work with" },
  { reviewer: "tammy_wilbur", ...US, rating: 5, date: "2026-07", price: "$50-$100", duration: "6 days",
    text: "A smooth and pleasant experience from start to finish. Great communication and high-quality work. Thanks again!" },
  { reviewer: "dougtricarico", ...US, rating: 5, date: "2026-07", price: "$50-$100", duration: "6 days",
    text: "Really happy with how everything turned out. Hasib was easy to work with and delivered exactly what I needed." },
  { reviewer: "wandaeaton114", ...US, rating: 5, date: "2026-07", price: "$50-$100", duration: "4 days",
    text: "Hasib helped us organize our ideas into a proper growth strategy. Professional, responsive, and always happy to answer questions." },
  { reviewer: "strawberrywindh", ...US, rating: 5, date: "2026-07", price: "$50-$100", duration: "5 days",
    text: "The design is clean, modern, and exactly the style I was looking for. Communication was great throughout the project, and the final result exceeded my expectations." },
  { reviewer: "youngangels102", ...US, rating: 5, date: "2026-07", price: "$50", duration: "5 days",
    text: "Excellent work! Everything was completed exactly as requested. Great communication and fast delivery." },
  { reviewer: "oowsg5", country: "Netherlands", countryCode: "NL", rating: 4, date: "2026-07", price: "$100-$200", duration: "3 weeks",
    text: "Good level of cooperation" },
  { reviewer: "igeekundayo6", ...US, rating: 5, date: "2026-07", price: "$50", duration: "6 days",
    text: "Really happy with the final result. Hasib understood what I wanted from the beginning and built the new programs section exactly how I imagined." },
  { reviewer: "anapedro272", ...US, rating: 5, date: "2026-07", price: "$50-$100", duration: "5 days",
    text: "Excellent service from start to finish. The seller was professional, knowledgeable, and easy to work with. The final delivery met my expectations and required no major revisions. Looking forward to future collaborations." },
  { reviewer: "singrabinda56", ...US, rating: 5, date: "2026-07", price: "$50-$100", duration: "6 days",
    text: "Fast delivery, great attention to detail, and excellent communication. The solution works perfectly and has improved our workflow significantly. Highly recommend. Thank you hasib." },
  { reviewer: "gotitemplates", ...US, rating: 5, date: "2026-07", price: "$200-$400", duration: "8 weeks", repeatClient: true,
    text: "Great work from Hasib and his team they are the best developers on Fiverr!" },
  { reviewer: "goldendol7", ...US, rating: 5, date: "2026-07", price: "$100-$200", duration: "10 days",
    text: "Great experience working with Hasib. The website was delivered on time, communication was excellent, and the quality exceeded my expectations. Highly recommend for web development projects." },
  { reviewer: "aleccredle25", ...US, rating: 5, date: "2026-07", price: "$50-$100", duration: "6 days",
    text: "Very professional and responsive. Hasib understood my requirements and delivered exactly what I needed. I would definitely hire them again for future website development work." },
  { reviewer: "gotitemplates", ...US, rating: 5, date: "2026-06", price: "$50-$100", duration: "4 days", repeatClient: true,
    text: "Great experience!" },
  { reviewer: "jennifer_washbu", ...US, rating: 5, date: "2026-06", price: "$100-$200", duration: "9 days",
    text: "Great technical skills and problem-solving ability. Any issues that came up were handled quickly and professionally." },
  { reviewer: "nv1620546", ...US, rating: 5, date: "2026-06", price: "$50-$100", duration: "6 days",
    text: "The website design is professional, fast, and user-friendly. The seller was patient, responsive, and very knowledgeable. Good work by hasib." },
  { reviewer: "diegoherrad", ...US, rating: 5, date: "2026-06", price: "$100-$200", duration: "7 days",
    text: "Hasib was easy to work with and delivered exactly what I needed. Communication was clear, delivery was on time, and the final website looked professional and polished. Highly recommended, and I'd be happy to work with him again." },
  { reviewer: "kobirbaizu898g", ...US, rating: 5, date: "2026-06", price: "$50-$100", duration: "5 days",
    text: "Excellent experience working with Hasib. Communication was clear and seamless throughout the entire project, making the process smooth and easy to follow. The final website was clean, professional, and exceeded our expectations. Everything was delivered on time and exactly as requested." },
  { reviewer: "kumarishrishti0", ...US, rating: 5, date: "2026-06", price: "$50-$100", duration: "5 days",
    text: "Great experience working with Hasib. The communication was smooth, everything was easy to understand and the final website was clean and professional. Delivered on time and exactly what we needed. Highly recommend!" },
  { reviewer: "hh3218726", ...US, rating: 5, date: "2026-06", price: "$50-$100", duration: "7 days",
    text: "Excellent work! Hasib delivered exactly what I was looking for. The landing page looks clean, modern, and professional. Communication was great throughout the project, and all requirements were completed on time. Hasib was responsive, easy to work with, and paid attention to details." },
];
