'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#team', label: 'Team' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
const pathname = usePathname();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const sections = navLinks.map(link => link.href.replace('#', ''));
            for (const section of [...sections].reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.getElementById(href.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed py-6 top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/95 backdrop-blur-lg shadow-sm' : 'py-6 bg-transparent'
                }`}>
                <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow">
                            <span className="text-white font-bold text-xl">H</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">Hasib<span className="text-emerald-600">Digital</span></span>
                    </Link>

                    {/* Desktop Nav */}
                   {pathname === '/' && <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 backdrop-blur-sm rounded-full p-1.5 border border-slate-200/50">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeSection === link.href.replace('#', '')
                                    ? 'bg-white text-emerald-600 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>}

                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="https://www.fiverr.com/adnanhasib565"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.71h1.61v.74a1.332 1.332 0 0 1 1.21-.74c.674 0 1.17.37 1.378.996a1.328 1.328 0 0 1 1.236-.996c.898 0 1.61.673 1.61 1.68v2.466h-1.61v-2.466c0-.359-.18-.579-.49-.579-.325 0-.52.22-.52.615v2.43zm-6.03 0h.855v4.146h-1.61v-4.146h-.85c-.547 0-.84.41-.84 1.092v3.054h-1.61v-4.146h-1.125v-1.564h1.125v-.548c0-1.276.69-2.028 1.97-2.028h2.085v1.584h-1.47c-.38 0-.585.213-.585.583v.41h2.055v1.563z" />
                            </svg>
                            Hire Now
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-5 h-4 flex flex-col justify-between">
                            <span className={`h-0.5 bg-slate-800 rounded transition-all origin-left ${isMobileMenuOpen ? 'rotate-45 w-[22px]' : 'w-5'}`} />
                            <span className={`h-0.5 bg-slate-800 rounded transition-all ${isMobileMenuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
                            <span className={`h-0.5 bg-slate-800 rounded transition-all origin-left ${isMobileMenuOpen ? '-rotate-45 w-[22px]' : 'w-5'}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
                <div className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)} />
                <div className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${activeSection === link.href.replace('#', '')
                                ? 'bg-emerald-50 text-emerald-600'
                                : 'text-slate-700 hover:bg-slate-50'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="p-2 mt-2 border-t border-slate-100">
                        <a
                            href="https://www.fiverr.com/adnanhasib565"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg"
                        >
                            Hire on Fiverr
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
