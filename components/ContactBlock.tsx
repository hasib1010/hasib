import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import PlatformIcon from "@/components/PlatformIcon";
import { platforms, profile } from "@/data/profile";

export default function ContactBlock({
  title = "Tell me what you're building.",
  copy = "Send a short description of the project, where it stands today and when you'd like to launch. I reply within a day with questions, a rough plan and an estimate.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <div className="contact__copy">
          <div className="contact__person">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={64}
              height={64}
              unoptimized
            />
            <p>
              <strong>{profile.name}</strong>
              <span>
                <i className="status-dot" aria-hidden="true" />
                Taking on new projects
              </span>
            </p>
          </div>
          <h2 id="contact-title">{title}</h2>
          <p>{copy}</p>
        </div>

        <div className="contact__options">
          <a
            className="contact-option contact-option--whatsapp"
            href={profile.whatsapp.href}
            target="_blank"
            rel="noreferrer"
          >
            <PlatformIcon name="whatsapp" className="contact-option__icon" />
            <span>
              <strong>Message on WhatsApp</strong>
              <small>{profile.whatsapp.display} · fastest reply</small>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="contact-option contact-option--fiverr"
            href={platforms.fiverr.href}
            target="_blank"
            rel="noreferrer"
          >
            <PlatformIcon name="fiverr" className="contact-option__icon" />
            <span>
              <strong>Hire me on Fiverr</strong>
              <small>Payment held by Fiverr until you approve</small>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="contact-option"
            href={platforms.upwork.href}
            target="_blank"
            rel="noreferrer"
          >
            <PlatformIcon name="upwork" className="contact-option__icon" />
            <span>
              <strong>Hire me on Upwork</strong>
              <small>Hourly or fixed-price contracts</small>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="contact-option" href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" className="contact-option__icon" />
            <span>
              <strong>Email me</strong>
              <small>{profile.email}</small>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
