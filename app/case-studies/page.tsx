import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MessagesSquare,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SiFiverr } from "react-icons/si";
import MotionReveal from "@/components/MotionReveal";
import PortfolioFooter from "@/components/PortfolioFooter";
import PortfolioHeader from "@/components/PortfolioHeader";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Md Hasibul Hasan",
  description:
    "Explore full-stack products designed and engineered by Md Hasibul Hasan, from secure platforms to commerce and real-time applications.",
};

const deliverySignals = [
  {
    icon: MessagesSquare,
    title: "Direct communication",
    copy: "You work directly with the developer responsible for every technical decision.",
  },
  {
    icon: Workflow,
    title: "Visible delivery",
    copy: "Milestones, tradeoffs, and progress stay clear from discovery through launch.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible handoff",
    copy: "Testing, deployment, documentation, and maintainable code are part of the build.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PortfolioHeader />

      <main id="main">
        <section className="subpage-hero subpage-hero--work">
          <MotionReveal className="subpage-hero__copy">
            <p className="eyebrow">
              <span />
              Selected case studies
            </p>
            <h1>
              Products built for
              <em>real-world use.</em>
            </h1>
            <p>
              A closer look at how product thinking, interface design, backend
              engineering, and delivery come together in production.
            </p>
          </MotionReveal>

          <div className="subpage-hero__proof" aria-label="Portfolio overview">
            <div>
              <strong>{caseStudies.length}</strong>
              <span>Detailed case studies</span>
            </div>
            <div>
              <strong>8+</strong>
              <span>Years building products</span>
            </div>
            <div>
              <strong>End-to-end</strong>
              <span>Strategy through launch</span>
            </div>
          </div>
        </section>

        <section className="section case-index">
          <MotionReveal className="section-heading-row">
            <p className="eyebrow">
              <span />
              The work
            </p>
            <div>
              <h2>Evidence over promises.</h2>
              <p>
                Each case study explains the problem, the engineering response,
                and what was actually delivered.
              </p>
            </div>
          </MotionReveal>

          <div className="case-index__grid">
            {caseStudies.map((caseStudy, index) => (
              <MotionReveal delay={Math.min(index * 0.05, 0.2)} key={caseStudy.id}>
                <Link
                  href={`/case-studies/${caseStudy.id}`}
                  className="case-index-card"
                >
                  <div className="case-index-card__visual">
                    {caseStudy.image ? (
                      <Image
                        src={caseStudy.image}
                        alt={`${caseStudy.title} interface`}
                        fill
                        unoptimized
                        sizes="(max-width: 760px) 100vw, 50vw"
                      />
                    ) : (
                      <span>{caseStudy.title.charAt(0)}</span>
                    )}
                    <div className="case-index-card__badges">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{caseStudy.category}</span>
                    </div>
                  </div>
                  <div className="case-index-card__body">
                    <div>
                      <p>{caseStudy.client}</p>
                      <h2>{caseStudy.title}</h2>
                    </div>
                    <p>{caseStudy.description}</p>
                    <div className="case-index-card__footer">
                      <div>
                        {caseStudy.technologies.slice(0, 4).map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>
                      <span className="round-link" aria-hidden="true">
                        <ArrowUpRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="section confidence-section">
          <MotionReveal className="section-heading-row section-heading-row--light">
            <p className="eyebrow eyebrow--light">
              <span />
              A dependable partner
            </p>
            <div>
              <h2>Professional delivery without the black box.</h2>
              <p>
                Trust comes from clear decisions, visible work, and a product
                that remains maintainable after launch.
              </p>
            </div>
          </MotionReveal>
          <div className="confidence-grid">
            {deliverySignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <MotionReveal
                  className="confidence-card"
                  delay={index * 0.06}
                  key={signal.title}
                >
                  <Icon aria-hidden="true" />
                  <span>0{index + 1}</span>
                  <h3>{signal.title}</h3>
                  <p>{signal.copy}</p>
                </MotionReveal>
              );
            })}
          </div>
        </section>

        <section className="contact-section contact-section--compact">
          <MotionReveal>
            <p className="eyebrow eyebrow--light">
              <span />
              Have a product to build?
            </p>
            <h2>
              Let&apos;s make the next case study
              <em>yours.</em>
            </h2>
            <p>
              Share the goal, current constraints, and ideal launch window. I&apos;ll
              reply with a practical next step.
            </p>
            <div className="contact-section__actions">
              <a
                className="button button--light"
                href="mailto:hello@hasibdigital.com"
              >
                Start a conversation
                <ArrowRight aria-hidden="true" />
              </a>
              <a
                className="button button--outline-light"
                href="https://www.fiverr.com/adnanhasib565"
                target="_blank"
                rel="noreferrer"
              >
                <SiFiverr aria-hidden="true" />
                Hire on Fiverr
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </MotionReveal>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
