"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import PlatformIcon from "@/components/PlatformIcon";
import PointerFX from "@/components/PointerFX";
import { platforms, profile } from "@/data/profile";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Case studies", href: "/case-studies" },
];

// `tone="dark"` lets the header sit transparently over the homepage's dark
// hero; it switches to the light bar once the page scrolls or the menu opens.
export default function SiteHeader({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`header${scrolled || open ? " header--scrolled" : tone === "dark" ? " header--dark" : ""}`}
    >
      <PointerFX />
      <span className="progress" aria-hidden="true" />
      <div className="header__inner">
        <Link href="/" className="wordmark" aria-label={`${profile.name}, home`}>
          <span className="wordmark__name">Hasibul Hasan</span>
          <span className="wordmark__role">{profile.role}</span>
        </Link>

        <nav className="header__nav" aria-label="Main">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <a
            className="icon-button icon-button--whatsapp"
            href={profile.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Message me on WhatsApp"
            title="WhatsApp"
          >
            <PlatformIcon name="whatsapp" />
          </a>
          <a
            className="btn btn--primary btn--sm"
            href={platforms.fiverr.href}
            target="_blank"
            rel="noreferrer"
          >
            Hire me on Fiverr
          </a>
          <button
            className="icon-button header__menu"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <a
            className="btn btn--primary"
            href={platforms.fiverr.href}
            target="_blank"
            rel="noreferrer"
          >
            <PlatformIcon name="fiverr" />
            Hire me on Fiverr
          </a>
          <a
            className="btn btn--whatsapp"
            href={profile.whatsapp.href}
            target="_blank"
            rel="noreferrer"
          >
            <PlatformIcon name="whatsapp" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
