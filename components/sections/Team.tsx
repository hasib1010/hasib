'use client';

import { useState } from 'react';
import { team, teamStats } from '@/data/team';

const tabs = [
    { id: 'all', label: 'All', count: 13 },
    { id: 'design', label: 'Design', count: 2 },
    { id: 'frontend', label: 'Frontend', count: 6 },
    { id: 'backend', label: 'Backend', count: 3 },
    { id: 'qa', label: 'QA', count: 1 },
];

const colors: Record<string, string> = {
    design: 'from-pink-500 to-rose-600',
    frontend: 'from-blue-500 to-indigo-600',
    backend: 'from-emerald-500 to-teal-600',
    qa: 'from-amber-500 to-orange-600',
};

export default function Team() {
    const [activeTab, setActiveTab] = useState('all');
    const filtered = activeTab === 'all' ? team : team.filter(m => m.department === activeTab);

    return (
        <section id="team" className="py-20 lg:py-28 bg-white relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 before:h-0.5 before:w-8 before:bg-emerald-600/30 after:h-0.5 after:w-8 after:bg-emerald-600/30">Our Team</span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Expert <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">Engineers</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                        A small, high-impact team of {teamStats.totalMembers} experts dedicated to your success.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-14">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border flex items-center gap-2 ${activeTab === tab.id
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md transform scale-105'
                                : 'bg-white text-slate-500 border-slate-200 hover:border-emerald-200 hover:text-emerald-600'
                                }`}
                        >
                            {tab.label}
                            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                                }`}>
                                {tab.count}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6">
                    {team.map((member, index) => (
                        <div
                            key={member.id}
                            className="group text-center"
                        >
                            <div className="relative mb-4 mx-auto w-32 h-32">
                                <div className="absolute inset-0 bg-emerald-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center opacity-50" />
                                <div className="relative w-full h-full rounded-full bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center text-3xl font-bold text-slate-300 group-hover:text-emerald-500 group-hover:border-emerald-200 transition-all duration-300 shadow-sm group-hover:shadow-md">
                                    {member.name.charAt(0)}
                                </div>
                            </div>

                            <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                {member.name}
                            </h4>
                            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                                {member.role}
                            </p>

                            <div className="flex flex-wrap justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {member.skills.slice(0, 2).map(skill => (
                                    <span key={skill} className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full text-slate-600">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
