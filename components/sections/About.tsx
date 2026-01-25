'use client';

import { useEffect, useRef, useState } from 'react';
import { companyInfo } from '@/data/site';
import { teamStats } from '@/data/team';

const features = [
    { icon: '⚡', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
    { icon: '🔒', title: '100% Secure', desc: 'Your data and project are fully protected' },
    { icon: '💬', title: '24/7 Support', desc: 'Always here to help with any questions' },
    { icon: '✨', title: 'Premium Quality', desc: 'Pixel-perfect execution on every project' },
];

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const numValue = parseInt(value.replace(/\D/g, ''));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 2000;
                    const step = (timestamp: number) => {
                        if (!start) start = timestamp;
                        const progress = Math.min((timestamp - start) / duration, 1);
                        setCount(Math.floor(progress * numValue));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [numValue]);

    return <div ref={ref} className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">{count}{suffix}</div>;
}

export default function About() {
    return (
        <section id="about" className="py-20 lg:py-28 bg-slate-50 relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Left */}
                    <div>
                        <div className="inline-flex items-center gap-3 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 before:h-0.5 before:w-8 before:bg-emerald-600/30 after:h-0.5 after:w-8 after:bg-emerald-600/30">
                            About Us
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Building Digital <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">Excellence</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            {companyInfo.description}
                        </p>
                        <p className="text-slate-500 leading-relaxed mb-8">
                            {companyInfo.mission}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((f, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-sm transition-all cursor-default group">
                                    <span className="text-2xl group-hover:scale-110 transition-transform">{f.icon}</span>
                                    <div>
                                        <h4 className="font-semibold text-sm text-slate-900">{f.title}</h4>
                                        <p className="text-xs text-slate-500">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Stats */}
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 text-center">
                                <AnimatedNumber value={teamStats.totalMembers.toString()} />
                                <div className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider">Team Members</div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 text-center">
                                <AnimatedNumber value="8" suffix="+" />
                                <div className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider">Years Experience</div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 text-center">
                                <AnimatedNumber value="150" suffix="+" />
                                <div className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider">Projects Delivered</div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 text-center">
                                <AnimatedNumber value="99" suffix="%" />
                                <div className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider">Client Satisfaction</div>
                            </div>
                        </div>

                        {/* Team Bar */}
                        <div className="mt-6 p-5 bg-white rounded-2xl border border-slate-100">
                            <p className="text-sm text-slate-500 mb-3 font-medium">Our Team Composition</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-pink-50 text-pink-600 rounded-full text-xs font-medium">
                                    <span className="w-2 h-2 rounded-full bg-pink-500" />
                                    {teamStats.designers} Designers
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    {teamStats.frontendDevs} Frontend
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    {teamStats.backendDevs} Backend
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
                                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                                    {teamStats.qaEngineers} QA
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
