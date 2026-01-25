'use client';

import { useState } from 'react';
import { companyInfo } from '@/data/site';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate network request
        await new Promise(r => setTimeout(r, 2000));
        setLoading(false);
        setDone(true);
    };

    return (
        <section id="contact" className="py-20 lg:py-28 bg-white relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left */}
                        <div>
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 before:h-0.5 before:w-8 before:bg-emerald-600/30 after:h-0.5 after:w-8 after:bg-emerald-600/30">Contact</span>
                            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                                Let&apos;s Build <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">Together</span>
                            </h2>
                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                Ready to start? Get in touch and let&apos;s discuss your project.
                            </p>

                            {/* Quick Links */}
                            <div className="space-y-4">
                                <a href={companyInfo.fiverr} target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 rounded-3xl p-6 flex items-center gap-4 group hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.71h1.61v.74a1.332 1.332 0 0 1 1.21-.74c.674 0 1.17.37 1.378.996a1.328 1.328 0 0 1 1.236-.996c.898 0 1.61.673 1.61 1.68v2.466h-1.61v-2.466c0-.359-.18-.579-.49-.579-.325 0-.52.22-.52.615v2.43zm-6.03 0h.855v4.146h-1.61v-4.146h-.85c-.547 0-.84.41-.84 1.092v3.054h-1.61v-4.146h-1.125v-1.564h1.125v-.548c0-1.276.69-2.028 1.97-2.028h2.085v1.584h-1.47c-.38 0-.585.213-.585.583v.41h2.055v1.563z" /></svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Hire on Fiverr</div>
                                        <div className="text-sm text-slate-500">Secure payments & buyer protection</div>
                                    </div>
                                    <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </a>
                                <a href={`mailto:${companyInfo.email}`} className="bg-white border border-slate-200 rounded-3xl p-6 flex items-center gap-4 group hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Email Us</div>
                                        <div className="text-sm text-slate-500">{companyInfo.email}</div>
                                    </div>
                                    <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Right - Form */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 md:p-8 relative overflow-hidden">
                            {done ? (
                                <div className="text-center py-16 animate-fade-up">
                                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-slate-900">Message Sent!</h3>
                                    <p className="text-slate-500 mb-8">We&apos;ll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => { setDone(false); setForm({ name: '', email: '', company: '', budget: '', message: '' }); }}
                                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Name *</label>
                                            <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                                            <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Your Company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Budget</label>
                                            <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}>
                                                <option value="">Select range</option>
                                                <option value="1-5k">$1,000 - $5,000</option>
                                                <option value="5-10k">$5,000 - $10,000</option>
                                                <option value="10-25k">$10,000 - $25,000</option>
                                                <option value="25k+">$25,000+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Project Details *</label>
                                        <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none" placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                                    </div>
                                    <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-white font-bold rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                                        {loading ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Send Message
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
