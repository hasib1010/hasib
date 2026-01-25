import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/case-studies';
import { companyInfo } from '@/data/site';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Case Studies | Hasib Digital',
    description: 'Explore our portfolio of successful projects.',
};

export default function CaseStudiesPage() {
    return (
        <>
            <Navbar />
            <main>
                <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 via-white to-white relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10" />
                    
                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            {/* Label with decorative lines */}
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-6 before:h-0.5 before:w-12 before:bg-emerald-600/30 after:h-0.5 after:w-12 after:bg-emerald-600/30">
                                Our Work
                            </span>
                            
                            {/* Main heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                                Case{' '}
                                <span className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                                    Studies
                                </span>
                            </h1>
                            
                            {/* Description */}
                            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
                                Real results for real clients. Explore our portfolio of successful projects and digital transformations.
                            </p>
                            
                            {/* Stats or additional info */}
                            <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-slate-200">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-slate-900 mb-1">{caseStudies.length}+</div>
                                    <div className="text-sm text-slate-500">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-slate-900 mb-1">{caseStudies.filter(cs => cs.featured).length}</div>
                                    <div className="text-sm text-slate-500">Featured</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                                    <div className="text-sm text-slate-500">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {caseStudies.map((cs) => (
                                <Link key={cs.id} href={`/case-studies/${cs.id}`} className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-emerald-200 transition-all duration-300">
                                    <div className="aspect-video bg-slate-100 relative overflow-hidden">
                                        {cs.image ? (
                                            <>
                                                <Image
                                                    src={cs.image}
                                                    alt={cs.title}
                                                    fill
                                                    quality={95}
                                                    className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                {/* Subtle overlay only on hover for better image visibility */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </>
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600">
                                                <span className="text-8xl font-black text-white/20 group-hover:scale-110 transition-transform">{cs.title.charAt(0)}</span>
                                            </div>
                                        )}
                                        {/* Category badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-slate-800 shadow-lg">
                                                {cs.category}
                                            </span>
                                        </div>
                                        {/* Featured badge */}
                                        {cs.featured && (
                                            <div className="absolute top-4 right-4">
                                                <span className="px-3 py-1.5 bg-emerald-500/95 backdrop-blur-md rounded-full text-xs font-bold text-white shadow-lg">
                                                    Featured
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">{cs.title}</h2>
                                        <p className="text-sm text-slate-500 mb-3">{cs.client}</p>
                                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">{cs.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {cs.technologies.slice(0, 3).map((t) => (
                                                <span key={t} className="px-2.5 py-1 bg-slate-50 rounded-md text-xs text-slate-600 font-medium border border-slate-200">
                                                    {t}
                                                </span>
                                            ))}
                                            {cs.technologies.length > 3 && (
                                                <span className="px-2.5 py-1 bg-slate-50 rounded-md text-xs text-slate-500 font-medium border border-slate-200">
                                                    +{cs.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section section-alt text-center">
                    <div className="container mx-auto px-6 lg:px-12 my-10">
                        <h2 className="text-2xl font-bold mb-4">Ready to join our success stories?</h2>
                        <p className="text-gray-500 mb-8 max-w-lg mx-auto">Let&apos;s create something amazing together.</p>
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
                </section>
            </main>
            <Footer />
        </>
    );
}
