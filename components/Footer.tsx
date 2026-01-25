import Link from 'next/link';
import { companyInfo } from '@/data/site';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">H</span>
                            </div>
                            <span className="font-bold text-lg text-white">Hasib<span className="text-emerald-400">Digital</span></span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Crafting exceptional digital experiences since {companyInfo.founded}.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#services" className="hover:text-emerald-400 transition-colors">Web Development</a></li>
                            <li><a href="#services" className="hover:text-emerald-400 transition-colors">UI/UX Design</a></li>
                            <li><a href="#services" className="hover:text-emerald-400 transition-colors">E-Commerce</a></li>
                            <li><a href="#services" className="hover:text-emerald-400 transition-colors">Backend</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-emerald-400 transition-colors">About</a></li>
                            <li><a href="#team" className="hover:text-emerald-400 transition-colors">Team</a></li>
                            <li><a href="#work" className="hover:text-emerald-400 transition-colors">Work</a></li>
                            <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Connect</h4>
                        <div className="flex gap-3">
                            <a href={companyInfo.fiverr} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors" aria-label="Fiverr">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.71h1.61v.74a1.332 1.332 0 0 1 1.21-.74c.674 0 1.17.37 1.378.996a1.328 1.328 0 0 1 1.236-.996c.898 0 1.61.673 1.61 1.68v2.466h-1.61v-2.466c0-.359-.18-.579-.49-.579-.325 0-.52.22-.52.615v2.43zm-6.03 0h.855v4.146h-1.61v-4.146h-.85c-.547 0-.84.41-.84 1.092v3.054h-1.61v-4.146h-1.125v-1.564h1.125v-.548c0-1.276.69-2.028 1.97-2.028h2.085v1.584h-1.47c-.38 0-.585.213-.585.583v.41h2.055v1.563z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="GitHub">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm">© {year} Hasib Digital. All rights reserved.</p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
