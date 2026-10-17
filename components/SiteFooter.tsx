import Link from "next/link";
import PlatformIcon from "@/components/PlatformIcon";
import { platforms, profile, type PlatformKey } from "@/data/profile";

export default function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="wordmark__name">{profile.name}</span>
            <p>
              Independent full-stack developer based in {profile.location},
              working with clients worldwide.
            </p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <Link href="/#work">Work</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/#services">Services</Link>
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
