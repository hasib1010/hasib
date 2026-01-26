"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { companyStats } from "@/data/site";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 lg:pt-32 min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">
                Open for freelance works
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.95]"
            >
              HI—IT&apos;S ME
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                HASIB!
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl lg:text-4xl font-bold text-slate-400 mb-8 italic"
            >
              {/* Full-Stack Developer & Designer */}
              Building Exceptional Digital Products
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-300 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We are a team of 13 experts crafting premium websites, web apps,
              and e-commerce solutions that drive real results.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-black rounded-full bg-white text-slate-900 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Schedule Call</span>
                <svg
                  className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
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
                <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full border-2 border-slate-700 text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
              >
                View Portfolio
              </a>
            </motion.div>

            {/* Floating Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="hidden lg:flex gap-3 mt-16"
            >
              {["React", "Next.js", "TypeScript", "Figma"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm font-bold text-slate-300 backdrop-blur-sm hover:border-emerald-500 hover:text-emerald-400 transition-all cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse" />
            <div
              className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] animate-pulse"
              style={{ animationDelay: "1s" }}
            />

            {/* Main Image Container */}
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[3rem] rotate-6 opacity-20 blur-xl" />

              {/* Image */}
              <div className="relative rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-2xl">
                <Image
                  src="/contact/hasib image.webp"
                  alt="Adnan Hasib"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-6 top-1/4 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">150+</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      Projects
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Review Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -right-6 bottom-1/4 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl max-w-[200px]"
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "Exceptional work! Highly recommended."
                </p>
                <p className="text-[10px] text-slate-500 mt-2 font-bold">
                  — Happy Client
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-800"
        >
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
