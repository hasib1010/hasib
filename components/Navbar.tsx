"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#team", label: "Team" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

const FiverrSVG = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 508.02 508.02"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="#1dbf73" cx="254.01" cy="254.01" r="254.01" />
    <circle fill="#fff" cx="315.97" cy="162.19" r="26.87" />
    <path
      fill="#fff"
      d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z"
      transform="translate(-1.83 -0.98)"
    />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (pathname !== "/") return;

      const sections = navLinks.map((link) => link.href.replace("/#", ""));
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const targetId = href.replace("/#", "");

    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed py-6 top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || pathname !== "/"
            ? "py-4 bg-white/95 backdrop-blur-lg shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              <span className="text-emerald-600"> Hasib Digital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 backdrop-blur-sm rounded-full p-1.5 border border-slate-200/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.replace("/#", "") &&
                  pathname === "/"
                    ? "bg-white text-emerald-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.fiverr.com/adnanhasib565"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FiverrSVG className="w-4 h-4" />
              Hire Now
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-slate-800 rounded transition-all origin-left ${isMobileMenuOpen ? "rotate-45 w-[22px]" : "w-5"}`}
              />
              <span
                className={`h-0.5 bg-slate-800 rounded transition-all ${isMobileMenuOpen ? "opacity-0 w-0" : "w-4"}`}
              />
              <span
                className={`h-0.5 bg-slate-800 rounded transition-all origin-left ${isMobileMenuOpen ? "-rotate-45 w-[22px]" : "w-5"}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isMobileMenuOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-2 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                activeSection === link.href.replace("/#", "") &&
                pathname === "/"
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="p-2 mt-2 border-t border-slate-100">
            <a
              href="https://www.fiverr.com/adnanhasib565"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg"
            >
              <FiverrSVG className="w-5 h-5" />
              Hire on Fiverr
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
