"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Profiles", href: "/#profiles" },
];

export default function PortfolioHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 18);
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <Link href="/" className="brand" aria-label="Hasib home">
        <span className="brand__mark">H.</span>
        <span className="brand__name">
          Hasibul
          <small>Full-stack developer</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        {pathname !== "/" ? <Link href="/case-studies">Case studies</Link> : null}
      </nav>

      <a className="header-cta" href="mailto:hello@hasibdigital.com">
        Let&apos;s talk
        <ArrowUpRight aria-hidden="true" />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
          <Link href="/case-studies">
            Case studies
            <ArrowRight aria-hidden="true" />
          </Link>
          <a href="mailto:hello@hasibdigital.com">
            Start a project
            <Mail aria-hidden="true" />
          </a>
        </nav>
      </div>

      <span
        className="scroll-progress"
        style={{ transform: `scaleX(${Math.min(progress, 1)})` }}
        aria-hidden="true"
      />
    </header>
  );
}
