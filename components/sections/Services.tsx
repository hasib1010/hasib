"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const serviceImages: Record<string, string> = {
  "web-development": "/srevices/web_dev_mockup-removebg-preview.png",
  "ui-ux-design": "/srevices/uiux_mockup-removebg-preview.png",
  "frontend-development": "/srevices/frontend_mockup-removebg-preview.png",
  "backend-development": "/srevices/backend_mockup-removebg-preview.png",
  ecommerce: "/srevices/ecommerce_mockup-removebg-preview.png",
  "website-maintenance": "/srevices/maintenance_mockup-removebg-preview.png",
};

// Mesh Gradients for each service (Default State)
const cardGradients: Record<string, string> = {
  purple:
    "bg-[radial-gradient(at_top_left,_#f3e8ff_0%,_#faf5ff_40%,_#ffffff_100%)]",
  pink: "bg-[radial-gradient(at_top_left,_#fce7f3_0%,_#fdf2f8_40%,_#ffffff_100%)]",
  emerald:
    "bg-[radial-gradient(at_top_left,_#ecfdf5_0%,_#f0fdfa_40%,_#ffffff_100%)]",
  orange:
    "bg-[radial-gradient(at_top_left,_#fff7ed_0%,_#fffaf1_40%,_#ffffff_100%)]",
  yellow:
    "bg-[radial-gradient(at_top_left,_#fefce8_0%,_#fffdeb_40%,_#ffffff_100%)]",
  slate:
    "bg-[radial-gradient(at_top_left,_#f1f5f9_0%,_#f8fafc_40%,_#ffffff_100%)]",
};

// Solid colors for Hover State
const hoverColors: Record<string, string> = {
  purple: "bg-[#6366f1]", // Indigo
  pink: "bg-[#db2777]", // Pink 600
  emerald: "bg-[#059669]", // Emerald 600
  orange: "bg-[#ea580c]", // Orange 600
  yellow: "bg-[#facc15]", // Yellow 400
  slate: "bg-[#0f172a]", // Slate 900
};

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[30px_30px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Digital services for
              <br />
              <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                forward-thinking brands
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              We combine high-end design with technical excellence to build
              products that redefine industries and scale businesses.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id;
            const bgClass = isHovered
              ? hoverColors[service.accentColor] || hoverColors.slate
              : cardGradients[service.accentColor] || cardGradients.slate;

            const textColor = isHovered ? "text-white" : "text-slate-900";
            const descColor = isHovered ? "text-white/90" : "text-slate-700";
            const btnBg =
              service.accentColor === "yellow" && isHovered
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-900";

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-700 cursor-pointer h-[550px] flex flex-col ${bgClass} shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl`}
              >
                {/* 1. Header Section */}
                <div className="relative z-20">
                  <motion.h3
                    layout
                    className={`text-3xl lg:text-4xl font-bold tracking-tight leading-tight transition-colors duration-500 ${textColor}`}
                  >
                    {service.title.split(" & ").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <>
                            <br />&{" "}
                          </>
                        )}
                      </span>
                    ))}
                  </motion.h3>
                </div>

                {/* 2. Content Area */}
                <div className="relative grow flex flex-col mt-8 h-full">
                  <AnimatePresence mode="wait">
                    {!isHovered ? (
                      /* State 1: Mockup Image (Bleeding/Fading) */
                      <motion.div
                        key="image"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-x-[-10%] bottom-[-5%] flex justify-center items-end h-[75%] pointer-events-none"
                        style={{
                          maskImage:
                            "radial-gradient(circle at bottom, black 40%, transparent 90%)",
                          WebkitMaskImage:
                            "radial-gradient(circle at bottom, black 40%, transparent 90%)",
                        }}
                      >
                        <div className="relative w-full h-full flex items-end justify-center">
                          <div className="relative w-[90%] h-full transform translate-y-8 transition-transform duration-700 group-hover:-translate-y-4">
                            <Image
                              src={serviceImages[service.id]}
                              alt={service.title}
                              fill
                              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] mix-blend-multiply brightness-[1.02] contrast-[1.05]"
                              sizes="(max-width: 768px) 100vw, 33vw"
                              priority
                            />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      /* State 2: Info & CTA */
                      <motion.div
                        key="info"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="flex flex-col h-full relative z-20"
                      >
                        <p
                          className={`text-xl lg:text-2xl font-medium leading-relaxed mb-10 ${descColor}`}
                        >
                          {service.description}
                        </p>

                        <div className="mt-auto">
                          <Link
                            href={`/services/${service.id}`}
                            className={`inline-flex items-center justify-center px-10 py-5 font-black rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.1)] ${btnBg}`}
                          >
                            Explore Service
                            <svg
                              className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1"
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
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subtle Grain Overlay for Premium Feel */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] mb-8 text-sm">
            Next Project?
          </p>
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-6 px-12 py-6 bg-slate-900 overflow-hidden transition-all duration-500 hover:pr-16"
          >
            <span className="relative z-10 text-white font-black text-2xl lg:text-3xl tracking-tight leading-none uppercase">
              Schedule a <br className="sm:hidden" /> Free Discovery Call
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-emerald-600 to-teal-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            <svg
              className="w-8 h-8 relative z-10 text-white transition-transform duration-500 group-hover:rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
