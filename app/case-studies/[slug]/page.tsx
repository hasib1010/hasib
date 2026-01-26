import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/case-studies';
import { companyInfo } from '@/data/site';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
    return caseStudies.map((cs) => ({ slug: cs.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const cs = caseStudies.find((c) => c.id === slug);
    if (!cs) return { title: 'Not Found' };
    return {
        title: `${cs.title} | Hasib Digital`,
        description: cs.description,
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const cs = caseStudies.find((c) => c.id === slug);
    if (!cs) notFound();

    return (
        <>
            <Navbar />
            <main>
                {/* Hero with Image */}
                <section className="pt-32 pb-0 relative">
                    {cs.image ? (
                        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                            <Image
                                src={cs.image}
                                alt={cs.title}
                                fill
                                quality={95}
                                priority
                                className="object-cover object-center"
                                sizes="100vw"
                            />
                            {/* Gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/50" />
                            <div className="absolute inset-0 bg-linear-to-r from-black/10 backdrop-blur-xs to-transparent" />
                            <div className="container mx-auto px-6 lg:px-12 h-full flex items-end pb-16 relative z-10">
                                <div className="max-w-4xl">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold text-white border border-white/30">{cs.category}</span>
                                        {cs.featured && <span className="px-4 py-2 bg-emerald-500/90 backdrop-blur-md rounded-full text-sm font-semibold text-white border border-emerald-400/50">Featured</span>}
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">{cs.title}</h1>
                                    <p className="text-xl text-white/90">{cs.client}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                            <div className="container mx-auto px-6 lg:px-12">
                                <div className="max-w-3xl">
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{cs.category}</span>
                                        {cs.featured && <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Featured</span>}
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{cs.title}</h1>
                                    <p className="text-lg text-white/90">{cs.client}</p>
                                </div>
                            </div>
                        </section>
                    )}
                </section>

                {/* Tech */}
                <section className="py-8 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-wrap justify-center gap-3">
                            {cs.technologies.map((t) => (
                                <span
                                    key={t}
                                    className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 hover:scale-105 hover:shadow-md transition-all duration-200"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="section">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-3xl mx-auto space-y-12 mt-5">
                            <div>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    </span>
                                    Challenge
                                </h2>
                                <p className="text-gray-600 leading-relaxed">{cs.challenge}</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                    </span>
                                    Solution
                                </h2>
                                <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </span>
                                    Results
                                </h2>
                                <div className="grid-2 gap-4">
                                    {cs.results.map((r, i) => (
                                        <div key={i} className="card p-4 flex items-center gap-3">
                                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-sm text-gray-700">{r}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {cs.testimonial && (
                                <div className="bg-gray-50 rounded-2xl p-8">
                                    <blockquote className="text-lg text-gray-700 italic mb-4">&quot;{cs.testimonial.quote}&quot;</blockquote>
                                    <p className="font-semibold">{cs.testimonial.author}, <span className="font-normal text-gray-500">{cs.testimonial.role}</span></p>
                                </div>
                            )}
                            <div className="text-center py-8 border-t">
                                <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
                                <p className="text-gray-500 mb-6">Let&apos;s create something amazing together.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={companyInfo.fiverr} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-1 transition-all duration-300 group">
                                        <span>Hire on Fiverr</span>
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </a>
                                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-white text-slate-900 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 hover:bg-slate-50 transition-all duration-300">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
