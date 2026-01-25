'use client';

import Link from 'next/link';
import { services } from '@/data/services';

const icons: Record<string, React.ReactNode> = {
    globe: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    palette: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    code: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    server: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
    'shopping-cart': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    settings: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

export default function Services() {
    return (
        <section id="services" className="py-20 lg:py-28 bg-white relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 before:h-0.5 before:w-8 before:bg-emerald-600/30 after:h-0.5 after:w-8 after:bg-emerald-600/30">Our Expertise</span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Solutions for <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">Growth</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                        We cover every aspect of digital product development, from initial concept to final deployment and support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                {icons[service.icon]}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Feature List (Compact) */}
                            <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                                {service.features.slice(0, 3).map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Link */}
                            <div className="flex items-center text-sm font-semibold text-emerald-600 group-hover:translate-x-2 transition-transform">
                                Read more
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
