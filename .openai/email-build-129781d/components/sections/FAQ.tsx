"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teamImages = [
  "/team/female-freelancer-looking-laptop.jpg",
  "/team/young-indian-man-with-laptop-gray-wall.jpg",
  "/contact/hasib image.webp",
];

const faqs = [
  {
    question: "What services does Hasib Digital offer?",
    answer:
      "We specialize in full-stack web development, including custom websites, web applications, e-commerce solutions, UI/UX design, and mobile-responsive development. Our team of 13 experts handles everything from initial concept to deployment and maintenance.",
  },
  {
    question: "How long does a typical web development project take?",
    answer:
      "Project timelines vary based on complexity and scope. A standard website typically takes 4-6 weeks, while complex web applications can take 8-12 weeks or more. We provide detailed timelines during our discovery phase and keep you updated throughout the development process.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use cutting-edge technologies including React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, and cloud platforms like AWS and Vercel. We select the best tech stack based on your specific project requirements to ensure optimal performance and scalability.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! We provide comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. We offer flexible maintenance packages tailored to your needs to ensure your digital product continues to perform at its best.",
  },
  {
    question: "How much does a web development project cost?",
    answer:
      "Project costs vary based on complexity, features, and timeline. Our projects typically range from $5,000 for basic websites to $50,000+ for complex web applications. We provide transparent pricing and detailed proposals after understanding your specific requirements during our discovery call.",
  },
  {
    question: "Can you help redesign our existing website or app?",
    answer:
      "Absolutely! We specialize in redesigning and modernizing existing websites and applications. We'll analyze your current platform, identify areas for improvement, and create a strategic plan to enhance user experience, performance, and conversion rates while maintaining your brand identity.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our process includes four key phases: Discovery (understanding your goals and requirements), Design (creating wireframes and prototypes), Development (building with clean, maintainable code), and Deploy (rigorous testing, optimization, and launch with ongoing support).",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes! We work with businesses of all sizes, from startups to established enterprises. We understand the unique challenges startups face and offer flexible solutions and payment plans to help bring your vision to life within your budget constraints.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-[120px] opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Sticky CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-[60px]" />

              <div className="relative z-10">
                {/* Team Member Avatars */}
                <div className="flex -space-x-4 mb-6">
                  {teamImages.map((image, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-4 border-slate-900 overflow-hidden ring-2 ring-emerald-500/20"
                    >
                      <Image
                        src={image}
                        alt={`Team member ${i + 1}`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  Have questions?
                </h2>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Find the right solution for you now
                </p>

                <a
                  href="https://www.fiverr.com/adnanhasib565"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-black rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 group"
                >
                  Hire now
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                {/* Decorative Pattern */}
                <div className="absolute bottom-8 right-8 opacity-10">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="2"
                      fill="currentColor"
                      className="text-white"
                    />
                    <circle
                      cx="40"
                      cy="20"
                      r="2"
                      fill="currentColor"
                      className="text-white"
                    />
                    <circle
                      cx="60"
                      cy="20"
                      r="2"
                      fill="currentColor"
                      className="text-white"
                    />
                    <circle
                      cx="80"
                      cy="20"
                      r="2"
                      fill="currentColor"
                      className="text-white"
                    />
                    <circle
                      cx="100"
                      cy="20"
                      r="2"
                      fill="currentColor"
                      className="text-white"
                    />
                    <circle
                      cx="20"
                      cy="40"
                      r="2"
                      fill="currentColor"
                      className="text-white"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="2"
                      fill="currentColor"
                      className="text-white"
                    />
                    <circle
                      cx="60"
                      cy="40"
                      r="2"
                      fill="currentColor"
                      className="text-white"
                    />
                    <circle
                      cx="80"
                      cy="40"
                      r="2"
                      fill="currentColor"
                      className="text-white"
                    />
                    <circle
                      cx="100"
                      cy="40"
                      r="2"
                      fill="currentColor"
                      className="text-white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 before:h-0.5 before:w-8 before:bg-emerald-600/30 after:h-0.5 after:w-8 after:bg-emerald-600/30">
                FAQ
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Everything you need to know about working with Hasib Digital
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-emerald-600 py-6 text-base lg:text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Bottom CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-slate-600 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Please chat
                to our friendly team.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all"
              >
                Get in touch
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
