"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const companyStats = [
  { value: "150", suffix: "+", label: "Projects" },
  { value: "13", suffix: "", label: "Team Members" },
  { value: "98", suffix: "%", label: "Success Rate" },
  { value: "50", suffix: "+", label: "Happy Clients" },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cursorX = useSpring(mousePosition.x, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mousePosition.y, { stiffness: 500, damping: 28 });

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-black"
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-emerald-500/50 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-500/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * -100 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid Pattern with Animation */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
          backgroundSize: "100px 100px",
          y,
        }}
      />

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6 lg:px-12 relative z-10 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-xl mb-8 shadow-lg shadow-emerald-500/10"
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative flex h-3 w-3"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </motion.span>
              <span className="text-sm font-bold text-emerald-400 tracking-widest uppercase">
                Available for Projects
              </span>
            </motion.div>

            {/* Main Heading with Stagger Animation */}
            <div className="mb-8 overflow-hidden">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9]"
              >
                <motion.span
                  className="block"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  HI&apos;S ME
                </motion.span>
                <motion.span
                  className="block bg-linear-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent bg-size-[200%_auto]"
                  animate={{
                    backgroundPosition: ["0% center", "200% center"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  HASIB!
                </motion.span>
              </motion.h1>
            </div>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <motion.p
                className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Building Exceptional
                <br />
                <span className="italic text-emerald-400">
                  Digital Products
                </span>
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We are a team of 13 experts crafting premium websites, web apps,
              and e-commerce solutions that drive real results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-black rounded-full bg-white text-black overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-white transition-colors">
                  Schedule Call
                </span>
                <motion.svg
                  className="w-5 h-5 relative z-10 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>

              <motion.a
                href="#work"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(16, 185, 129, 1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-full border-2 border-slate-700 text-white hover:bg-emerald-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Portfolio
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Tech Stack with Hover Effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="hidden lg:flex gap-4 flex-wrap"
            >
              {["React", "Next.js", "TypeScript", "Figma", "Tailwind"].map(
                (tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
                    }}
                    className="relative px-6 py-3 bg-slate-900/50 border border-slate-700 rounded-2xl text-sm font-bold text-slate-300 backdrop-blur-sm overflow-hidden group cursor-pointer"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 group-hover:text-emerald-400 transition-colors">
                      {tech}
                    </span>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative order-1 lg:order-2"
            style={{ perspective: 1000 }}
          >
            {/* Animated Glow Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-500/20 rounded-full blur-[100px]"
            />

            {/* Main Image Container */}
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 opacity-30 blur-xl"
              />

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900"
              >
                <Image
                  src="/contact/hasib image.webp"
                  alt="Adnan Hasib"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="absolute -left-8 top-1/4 bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-6 shadow-2xl shadow-emerald-500/20"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-4"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-3xl">
                    🎯
                  </div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-3xl font-black text-white"
                    >
                      150+
                    </motion.div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      Projects
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Review Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="absolute -right-8 bottom-1/4 bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-6 shadow-2xl shadow-emerald-500/20 max-w-[220px]"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + i * 0.1 }}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  "Exceptional work! Highly recommended."
                </p>
                <p className="text-xs text-slate-500 font-bold">
                  — Happy Client
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-slate-800/50"
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="text-center group cursor-default"
            >
              <motion.div
                className="text-5xl font-black bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent mb-3"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
                {stat.suffix}
              </motion.div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs font-bold uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div> */}
    </section>
  );
}
