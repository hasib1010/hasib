import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Studies | Hasib Digital',
    description: 'Explore our portfolio of successful projects.',
};

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen">
            <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/95 backdrop-blur-lg border-b border-gray-100">
                <div className="container flex-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                            <span className="text-white font-bold">H</span>
                        </div>
                        <span className="font-bold text-lg">Hasib<span className="text-emerald-600">Digital</span></span>
                    </Link>
                    <Link href="/" className="btn btn-ghost">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Home
                    </Link>
                </div>
            </header>

            <section className="pt-32 pb-16 bg-gray-50">
                <div className="container section-header">
                    <span className="section-label">Our Work</span>
                    <h1 className="section-title">Case <span className="gradient-text">Studies</span></h1>
                    <p className="section-description">Real results for real clients.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2 gap-8">
                        {caseStudies.map((cs) => (
                            <Link key={cs.id} href={`/case-studies/${cs.id}`} className="card card-interactive overflow-hidden p-0 group">
                                <div className="aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-8xl font-black text-white/10 group-hover:scale-110 transition-transform">{cs.title.charAt(0)}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                                        {cs.technologies.slice(0, 4).map((t) => (
                                            <span key={t} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white font-medium">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex gap-2 mb-3">
                                        <span className="badge badge-primary">{cs.category}</span>
                                        {cs.featured && <span className="badge badge-success">Featured</span>}
                                    </div>
                                    <h2 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">{cs.title}</h2>
                                    <p className="text-sm text-gray-500 mb-4">{cs.client}</p>
                                    <p className="text-gray-600 text-sm line-clamp-2">{cs.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt text-center">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-4">Ready to join our success stories?</h2>
                    <p className="text-gray-500 mb-8 max-w-lg mx-auto">Let&apos;s create something amazing together.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://www.fiverr.com/adnanhasib565" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Hire on Fiverr</a>
                        <Link href="/#contact" className="btn btn-secondary">Contact Us</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
