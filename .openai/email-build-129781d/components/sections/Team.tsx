"use client";

import { useState } from "react";
import Image from "next/image";
import { team, teamStats } from "@/data/team";

const tabs = [
  { id: "all", label: "All", count: teamStats.totalMembers },
  { id: "design", label: "Design", count: 2 },
  { id: "frontend", label: "Frontend", count: 6 },
  { id: "backend", label: "Backend", count: 3 },
  { id: "qa", label: "QA", count: 1 },
];

export default function Team() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered =
    activeTab === "all" ? team : team.filter((m) => m.department === activeTab);

  return (
    <section
      id="team"
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 before:h-0.5 before:w-8 before:bg-emerald-600/30">
              Our Team
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Meet Our{" "}
              <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Digital Craftsmen
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A high-impact team of {teamStats.totalMembers} experts specialized
              in building premium web applications and scalable solutions.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                    : "bg-white text-slate-500 border-slate-100 hover:border-emerald-200 hover:text-emerald-600"
                }`}
              >
                {tab.label}
                <span
                  className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === tab.id ? "bg-white/20" : "bg-slate-100"}`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Department Tag on Image */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-wider shadow-sm">
                    {member.department}
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-extrabold text-xl text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                  {member.name}
                </h4>
                <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">
                  {member.role}
                </p>

                <div className="flex flex-wrap justify-center gap-1.5 pt-4 border-t border-slate-50">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2.5 py-1 bg-slate-50 rounded-full text-slate-600 font-medium group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
