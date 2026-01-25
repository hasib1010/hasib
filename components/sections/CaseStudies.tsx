'use client';

import { useState } from 'react';
import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';

const categories = ['All', 'E-Commerce', 'SaaS / Healthcare', 'FinTech', 'EdTech'];

export default function CaseStudies() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? caseStudies : caseStudies.filter(c => c.category === active);

    return (
        <section id="work" className="py-20 lg:py-28 bg-slate-50 relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 before:h-0.5 before:w-8 before:bg-emerald-600/30 after:h-0.5 after:w-8 after:bg-emerald-600/30">Selected Work</span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Featured <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">Case Studies</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                        Explore our portfolio of successful projects and digital transformations.
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${active === cat
                                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 transform scale-105'
                                : 'bg-white text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 border border-transparent hover:border-emerald-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {filtered.slice(0, 4).map((cs) => (
                        <Link
                            key={cs.id}
                            href={`/case-studies/${cs.id}`}
                            className="group block bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${cs.id.includes('ecommerce') ? 'from-blue-500/10 to-purple-500/10' :
                                    cs.id.includes('health') ? 'from-emerald-500/10 to-teal-500/10' :
                                        'from-indigo-500/10 to-cyan-500/10'
                                    }`} />

                                {/* Placeholder Visualization */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-3xl bg-white shadow-lg flex items-center justify-center text-4xl font-bold text-slate-300 group-hover:scale-110 group-hover:text-emerald-500 transition-all duration-500">
                                        {cs.title.charAt(0)}
                                    </div>
                                </div>

                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-800 shadow-sm">
                                        {cs.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                    {cs.title}
                                </h3>
                                <p className="text-slate-500 mb-6 line-clamp-2">
                                    {cs.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cs.technologies.slice(0, 3).map(tech => (
                                        <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 text-xs font-medium border border-slate-100">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 border-t border-slate-100 pt-6">
                                    {cs.results.slice(0, 2).map((res, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                            </div>
                                            <span className="text-sm font-bold text-slate-700">{res}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold rounded-full bg-white text-slate-900 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
