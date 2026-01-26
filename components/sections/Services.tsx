"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const serviceImages: Record<string, string> = {
  "web-development": "/generated/web_dev_mockup.png",
  "ui-ux-design": "/generated/uiux_mockup.png",
  "frontend-development": "/generated/frontend_mockup.png",
  "backend-development": "/generated/backend_mockup.png",
  ecommerce: "/generated/ecommerce_mockup.png",
  "website-maintenance": "/generated/maintenance_mockup.png",
};

// Map accent colors to solid background colors for hover state
const hoverColors: Record<string, string> = {
  purple: "bg-purple-600",
  pink: "bg-pink-600",
  emerald: "bg-emerald-600",
  orange: "bg-orange-600",
  yellow: "bg-yellow-400", // Yellow is bright, so we use slightly different text colors
  slate: "bg-slate-900",
};

const hoverTextColors: Record<string, string> = {
  yellow: "text-slate-900",
  default: "text-white",
};

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]"
          >
            Digital services for
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              forward-thinking brands
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            We combine high-end design with technical excellence to build
            products that redefine industries and scale businesses.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id;
            const bgClass = isHovered
              ? hoverColors[service.accentColor] || hoverColors.slate
              : service.color;
            const textColor = isHovered
              ? hoverTextColors[service.accentColor] || hoverTextColors.default
              : "text-slate-900";
            const descColor = isHovered
              ? service.accentColor === "yellow"
                ? "text-slate-800"
                : "text-white/90"
              : "text-slate-700";
            const btnBg =
              service.accentColor === "yellow"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-900";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-[2.5rem] p-8 lg:p-10 overflow-hidden transition-colors duration-500 cursor-pointer min-h-[500px] flex flex-col ${bgClass} shadow-lg hover:shadow-2xl`}
              >
                {/* Title (Always visible) */}
                <h3
                  className={`text-3xl lg:text-4xl font-black mb-auto tracking-tight transition-colors duration-500 ${textColor}`}
                >
                  {service.title}
                </h3>

                {/* Dynamic Content Area */}
                <div className="relative flex-grow flex flex-col justify-center mt-8">
                  <AnimatePresence mode="wait">
                    {!isHovered ? (
                      /* State 1: Image */
                      <motion.div
                        key="image"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full aspect-square"
                      >
                        {serviceImages[service.id] && (
                          <Image
                            src={serviceImages[service.id]}
                            alt={service.title}
                            fill
                            className="object-contain"
                            priority
                          />
                        )}
                      </motion.div>
                    ) : (
                      /* State 2: Text & Button */
                      <motion.div
                        key="info"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col h-full items-start"
                      >
                        <p
                          className={`text-xl lg:text-2xl font-medium leading-relaxed mb-8 ${descColor}`}
                        >
                          {service.description}
                        </p>

                        <Link
                          href={`/services/${service.id}`}
                          className={`mt-auto inline-flex items-center justify-center px-8 py-4 font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg ${btnBg}`}
                        >
                          Explore Service
                          <svg
                            className="w-5 h-5 ml-2"
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
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white font-black text-xl rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10 text-white">
              Let&apos;s Build Something Great
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg
              className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
