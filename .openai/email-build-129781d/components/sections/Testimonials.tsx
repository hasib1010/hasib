'use client';

import { useState, useEffect, useCallback } from 'react';
import { testimonials, testimonialStats } from '@/data/testimonials';

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [auto, setAuto] = useState(true);

    const next = useCallback(() => setCurrent(p => (p + 1) % testimonials.length), []);
    const prev = useCallback(() => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length), []);

    useEffect(() => {
        if (!auto) return;
        const id = setInterval(next, 5000);
        return () => clearInterval(id);
    }, [auto, next]);

    const t = testimonials[current];

    return (
        <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 overflow-hidden relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 before:h-0.5 before:w-8 before:bg-emerald-600/30 after:h-0.5 after:w-8 after:bg-emerald-600/30">Reviews</span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Loved by <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">Clients</span>
                    </h2>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900">{testimonialStats.totalReviews}</div>
                        <div className="text-sm text-slate-500">Reviews</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500">{testimonialStats.averageRating}★</div>
                        <div className="text-sm text-slate-500">Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-600">{testimonialStats.satisfactionRate}</div>
                        <div className="text-sm text-slate-500">Satisfaction</div>
                    </div>
                </div>

                {/* Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[2rem] shadow-xl shadow-emerald-900/5 p-8 md:p-14 border border-emerald-100 relative text-center">
                        {/* Quote Mark */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>

                        {/* Stars */}
                        <div className="stars mb-6 justify-center flex" aria-label={`${t.rating} out of 5 stars`}>
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-6 h-6 ${i < t.rating ? 'text-yellow-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-xl md:text-3xl text-slate-800 leading-relaxed mb-10 font-semibold tracking-tight">
                            &quot;{t.quote}&quot;
                        </blockquote>

                        {/* Author */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-xl font-bold shadow-md ring-4 ring-emerald-50">
                                {t.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 text-lg">{t.author}</div>
                                <div className="text-emerald-600 font-medium">{t.role}, {t.company}</div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-6 mt-10">
                        <button onClick={() => { setAuto(false); prev(); }} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm hover:shadow-md" aria-label="Previous">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <div className="flex gap-3">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setAuto(false); setCurrent(i); }}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'w-10 bg-emerald-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
                                    aria-label={`Go to review ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={() => { setAuto(false); next(); }} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm hover:shadow-md" aria-label="Next">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Fiverr CTA */}
                <div className="text-center mt-10">
                    <a href="https://www.fiverr.com/adnanhasib565" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold rounded-full bg-white text-slate-900 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.71h1.61v.74a1.332 1.332 0 0 1 1.21-.74c.674 0 1.17.37 1.378.996a1.328 1.328 0 0 1 1.236-.996c.898 0 1.61.673 1.61 1.68v2.466h-1.61v-2.466c0-.359-.18-.579-.49-.579-.325 0-.52.22-.52.615v2.43zm-6.03 0h.855v4.146h-1.61v-4.146h-.85c-.547 0-.84.41-.84 1.092v3.054h-1.61v-4.146h-1.125v-1.564h1.125v-.548c0-1.276.69-2.028 1.97-2.028h2.085v1.584h-1.47c-.38 0-.585.213-.585.583v.41h2.055v1.563z" /></svg>
                        See All on Fiverr
                    </a>
                </div>
            </div>
        </section>
    );
}
