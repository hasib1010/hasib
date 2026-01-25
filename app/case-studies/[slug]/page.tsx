import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';
import { notFound } from 'next/navigation';

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
        <main className="min-h-screen">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/95 backdrop-blur-lg border-b border-gray-100">
                <div className="container flex-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                            <span className="text-white font-bold">H</span>
                        </div>
                        <span className="font-bold text-lg">Hasib<span className="text-emerald-600">Digital</span></span>
                    </Link>
                    <Link href="/#work" className="btn btn-ghost">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                <div className="container">
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

            {/* Tech */}
            <section className="py-6 bg-gray-50 border-b">
                <div className="container">
                    <div className="flex flex-wrap gap-2">
                        {cs.technologies.map((t) => <span key={t} className="badge badge-primary">{t}</span>)}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto space-y-12">
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
                        <div className="text-center pt-8 border-t">
                            <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
                            <p className="text-gray-500 mb-6">Let&apos;s create something amazing together.</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a href="https://www.fiverr.com/adnanhasib565" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Hire on Fiverr</a>
                                <Link href="/#contact" className="btn btn-secondary">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
