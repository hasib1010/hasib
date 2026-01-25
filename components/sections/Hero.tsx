'use client';

import { useEffect, useState } from 'react';
import { companyStats } from '@/data/site';

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="home" className="relative overflow-hidden mx-auto pt-32 min-h-screen flex items-center bg-white">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-emerald-100/40 rounded-full blur-[100px] animate-float opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-teal-100/40 rounded-full blur-[100px] animate-float opacity-50" style={{ animationDelay: '-2s' }} />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase text-[11px]">Available for Projects</span>
                    </div>

                    {/* Heading */}
                    <h1 className="mb-6 leading-[1.1] tracking-tight text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900">
                        Building
                        <span className="relative inline-block mx-3">
                            <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent relative z-10">Exceptional</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-100/50 -z-0 -rotate-1 rounded-sm"></span>
                        </span>
                        <br />
                        Digital Products
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed text-balance font-medium">
                        We are a team of 13 experts crafting premium websites, web apps, and e-commerce solutions that drive real results.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                        <a href="#work" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-1 transition-all duration-300 group">
                            <span>View Our Work</span>
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                        <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-white text-slate-900 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 hover:bg-slate-50 transition-all duration-300">
                            Talk to an Expert
                        </a>
                    </div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-slate-200/60 bg-white/50 backdrop-blur-sm rounded-2xl mx-auto max-w-3xl">
                        {companyStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-slate-900 mb-1 font-heading">{stat.value}{stat.suffix}</div>
                                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider text-[11px]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
