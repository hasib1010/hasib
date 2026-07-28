'use client';

import { processSteps } from '@/data/site';

const icons: Record<string, React.ReactNode> = {
    search: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    palette: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    code: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    rocket: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
};

export default function Process() {
    return (
        <section className="py-20 lg:py-28 bg-slate-50 relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 before:h-0.5 before:w-8 before:bg-emerald-600/30 after:h-0.5 after:w-8 after:bg-emerald-600/30">Our Process</span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        How We <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">Deliver</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                        A proven 4-step methodology that ensures project success every time.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-300 to-transparent hidden sm:block" />

                        {processSteps.map((step, index) => (
                            <div key={step.step} className={`relative flex items-center gap-8 mb-12 last:mb-0 group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}>
                                {/* Number Circle - Centered on Desktop */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 flex-shrink-0 hidden sm:flex">
                                    <div className="w-16 h-16 rounded-2xl bg-white border-4 border-slate-50 flex items-center justify-center shadow-md group-hover:border-emerald-500/30 group-hover:scale-110 transition-all duration-300 relative">
                                        <span className="text-emerald-600 transition-transform">
                                            {icons[step.icon]}
                                        </span>
                                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-sm font-bold flex items-center justify-center shadow-lg transform rotate-12">
                                            {step.step}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Spacer for Desktop Alternating Layout */}
                                <div className="hidden md:block w-1/2"></div>

                                {/* Content */}
                                <div className={`flex-1 sm:pl-24 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                                    }`}>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-600 transition-colors flex items-center gap-3 md:block text-slate-900">
                                        <span className="sm:hidden w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">
                                            {step.step}
                                        </span>
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-lg">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
