import Link from 'next/link';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const icons: Record<string, React.ReactNode> = {
    globe: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    palette: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    code: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    server: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
    'shopping-cart': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    settings: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);
    if (!service) return { title: 'Not Found' };
    return { title: `${service.title} | Hasib Digital`, description: service.description };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);
    if (!service) notFound();
    const others = services.filter((s) => s.id !== slug).slice(0, 3);

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
                    <Link href="/#services" className="btn btn-ghost">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Services
                    </Link>
                </div>
            </header>

            <section className="pt-32 pb-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-6">
                            {icons[service.icon]}
                        </div>
                        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                        <p className="text-lg text-gray-600">{service.description}</p>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center">What&apos;s Included</h2>
                        <div className="space-y-4">
                            {service.features.map((f, i) => (
                                <div key={i} className="card flex items-center gap-4 p-5">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-gray-700">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-gray-500 mb-8">Let&apos;s discuss your project.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://www.fiverr.com/adnanhasib565" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Hire on Fiverr</a>
                        <Link href="/#contact" className="btn btn-secondary">Contact Us</Link>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-8 text-center">Other Services</h2>
                    <div className="grid-3">
                        {others.map((s) => (
                            <Link key={s.id} href={`/services/${s.id}`} className="card group p-6">
                                <div className="icon-box mb-4 group-hover:scale-110 transition-transform">{icons[s.icon]}</div>
                                <h3 className="font-semibold mb-2 group-hover:text-emerald-600 transition-colors">{s.title}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{s.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
