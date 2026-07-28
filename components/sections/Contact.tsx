"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FiverrSVG = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 508.02 508.02"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="#1dbf73" cx="254.01" cy="254.01" r="254.01" />
    <circle fill="#fff" cx="315.97" cy="162.19" r="26.87" />
    <path
      fill="#fff"
      d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z"
      transform="translate(-1.83 -0.98)"
    />
  </svg>
);

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setDone(true);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#E2E6E9] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side - Content & Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]">
              Have a project <br />
              idea in mind? <br />
              <span className="text-emerald-600">Let&apos;s get started</span>
            </h2>
            <p className="text-xl text-slate-600 mb-16 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
              We&apos;ll schedule a call to discuss your idea. After discovery
              sessions, we&apos;ll send a proposal, and upon approval,
              we&apos;ll get started.
            </p>

            {/* Profile Card & Links Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-12"
            >
              {/* Profile Card */}
              <div className="relative group shrink-0">
                <div className="w-48 h-56 relative rounded-2xl overflow-hidden mb-6 shadow-2xl shadow-slate-400/20 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/contact/hasib image.webp"
                    alt="Adnan Hasib"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 leading-none">
                    Adnan Hasib
                  </h4>
                  {/* <p className="text-slate-500 font-bold text-sm tracking-wide uppercase">
                    Founder & Chief Strategy Officer
                  </p> */}
                </div>
              </div>

              {/* Quick Links Group */}
              <div className="space-y-4 w-full max-w-[340px]">
                <a
                  href="https://www.fiverr.com/adnanhasib565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm border border-white rounded-3xl hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-200 transition-all duration-300 group/link"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 transition-colors group-hover/link:bg-emerald-600 group-hover/link:text-white">
                    <FiverrSVG className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-slate-900 text-base leading-tight">
                      Hire on Fiverr
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      Safe payments & protection
                    </div>
                  </div>
                  <svg
                    className="w-4 h-4 text-slate-300 group-hover/link:text-emerald-500 group-hover/link:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

                <a
                  href="mailto:mdhasibulhasan360@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm border border-white rounded-3xl hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-200 transition-all duration-300 group/link"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 transition-colors group-hover/link:bg-emerald-600 group-hover/link:text-white">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-slate-900 text-base leading-tight">
                      Email Us
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      mdhasibulhasan360@gmail.com
                    </div>
                  </div>
                  <svg
                    className="w-4 h-4 text-slate-300 group-hover/link:text-emerald-500 group-hover/link:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Premium Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[2.5rem] shadow-2xl p-10 lg:p-14"
          >
            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg
                    className="w-12 h-12 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">
                  Request Sent!
                </h3>
                <p className="text-slate-500 text-lg mb-10">
                  We&apos;ll review your project details and reach out within 24
                  hours.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="text-emerald-600 font-black hover:underline underline-offset-4"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm font-black text-slate-900 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-slate-900 transition-colors text-lg placeholder-slate-300"
                    placeholder="Jane Cooper"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-slate-900 uppercase tracking-widest">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-slate-900 transition-colors text-lg placeholder-slate-300"
                      placeholder="Ex. Tesla Inc"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-slate-900 uppercase tracking-widest">
                      Email*
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-slate-900 transition-colors text-lg placeholder-slate-300"
                      placeholder="You@Example.Com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-slate-900 uppercase tracking-widest">
                      Service Required*
                    </label>
                    <select className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-slate-900 transition-colors text-lg appearance-none cursor-pointer">
                      <option>Select Your Service</option>
                      <option>Web Development</option>
                      <option>UI/UX Design</option>
                      <option>Mobile App</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-slate-900 uppercase tracking-widest">
                      Project Budget*
                    </label>
                    <select className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-slate-900 transition-colors text-lg appearance-none cursor-pointer">
                      <option>Select Your Range</option>
                      <option>$5k - $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-black text-slate-900 uppercase tracking-widest">
                    Project details*
                  </label>
                  <textarea
                    rows={3}
                    required
                    className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-slate-900 transition-colors text-lg placeholder-slate-300 resize-none"
                    placeholder="Tell us more about your idea"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white rounded-full py-6 text-lg font-black shadow-xl hover:bg-black transition-all group overflow-hidden relative"
                >
                  <span className="relative z-10">
                    {loading ? "Sending Request..." : "Send inquiry"}
                  </span>
                  <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
