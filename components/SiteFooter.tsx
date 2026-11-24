import Link from "next/link";
import Logo from "@/components/Logo";
import PlatformIcon from "@/components/PlatformIcon";
import { agency, platforms, profile, resume, type PlatformKey } from "@/data/profile";

export default function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link href="/" className="logo-link" aria-label={`${profile.name}, home`}>
              <Logo />
            </Link>
            <p>
              Full-stack web, mobile app and game developer in {profile.location}.
              Founder of {agency.name}.
            </p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <Link href="/#work">Work</Link>
            <Link href="/#design">UI/UX design</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#about">About</Link>
            <Link href="/case-studies">Case studies</Link>
          </nav>

          <div className="footer__col">
            {(Object.keys(platforms) as PlatformKey[]).map((key) => (
              <a key={key} href={platforms[key].href} target="_blank" rel="noreferrer">
                <PlatformIcon name={key} />
                {platforms[key].name}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <a href={agency.href} target="_blank" rel="noreferrer">
              {agency.name}
            </a>
            <a href={resume.href} download={resume.fileName}>
              Download resume
            </a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.whatsapp.href} target="_blank" rel="noreferrer">
              <PlatformIcon name="whatsapp" />
              {profile.whatsapp.display}
            </a>
          </div>
        </div>
        <p className="footer__legal">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>

      <a
        className="whatsapp-float"
        href={profile.whatsapp.href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <PlatformIcon name="whatsapp" />
        <span>Chat on WhatsApp</span>
      </a>
    </>
  );
}
