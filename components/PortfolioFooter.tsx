import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiFiverr, SiToptal, SiUpwork } from "react-icons/si";

const profiles = [
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/adnanhasib565",
    icon: SiFiverr,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~016c22697bb208b08b?mp_source=share",
    icon: SiUpwork,
  },
  {
    label: "Toptal",
    href: "https://www.toptal.com/developers/resume/md-hasibul-hasan",
    icon: SiToptal,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/coder-hasib",
    icon: FaLinkedinIn,
  },
];

export default function PortfolioFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand brand--footer">
        <span className="brand__mark">H.</span>
        <span className="brand__name">Hasibul</span>
      </Link>
      <p>Full-stack product development for ambitious teams.</p>
      <div className="footer-profiles">
        {profiles.map((profile) => {
          const Icon = profile.icon;
          return (
            <a
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              aria-label={profile.label}
              title={profile.label}
              key={profile.label}
            >
              <Icon aria-hidden="true" />
              <span>{profile.label}</span>
            </a>
          );
        })}
        <Link href="/#main">Back to top ↑</Link>
      </div>
      <small>© {new Date().getFullYear()} Md Hasibul Hasan</small>
    </footer>
  );
}
