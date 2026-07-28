import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  Lightbulb,
  Quote,
} from "lucide-react";
import MotionReveal from "@/components/MotionReveal";
import PortfolioFooter from "@/components/PortfolioFooter";
import PortfolioHeader from "@/components/PortfolioHeader";
import { caseStudies } from "@/data/case-studies";

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.id === slug);
  if (!caseStudy) return { title: "Case Study Not Found" };
  return {
    title: `${caseStudy.title} | Md Hasibul Hasan`,
    description: caseStudy.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.id === slug);
  if (!caseStudy) notFound();

  const currentIndex = caseStudies.findIndex((item) => item.id === slug);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PortfolioHeader />

      <main id="main">
        <div className="page-crumb">
          <Link href="/case-studies">
            <ArrowLeft aria-hidden="true" />
            All case studies
          </Link>
          <span>{caseStudy.category}</span>
        </div>

        <section className="case-detail-hero">
          <MotionReveal className="case-detail-hero__copy">
            <p className="eyebrow">
              <span />
              Case study {String(currentIndex + 1).padStart(2, "0")}
            </p>
            <h1>{caseStudy.title}</h1>
            <p>{caseStudy.description}</p>
            <div className="case-detail-hero__facts">
              <div>
                <span>Client</span>
                <strong>{caseStudy.client}</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>{caseStudy.category}</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>Full-stack product engineering</strong>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal className="case-detail-hero__visual" delay={0.08}>
            {caseStudy.image ? (
              <Image
                src={caseStudy.image}
                alt={`${caseStudy.title} product interface`}
                fill
                priority
                unoptimized
                sizes="(max-width: 900px) 100vw, 54vw"
              />
            ) : (
              <span>{caseStudy.title.charAt(0)}</span>
            )}
            <div className="case-detail-hero__stamp">
              <span>Built for</span>
              <strong>Production</strong>
            </div>
          </MotionReveal>
        </section>

        <section className="technology-rail" aria-label="Technologies used">
          <span>Technology</span>
          <div>
            {caseStudy.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        <section className="section case-narrative">
          <aside>
            <p className="eyebrow">
              <span />
              Project story
            </p>
            <p>
              The goal was not simply to ship features, but to create a product
              people could use confidently and a system the team could operate.
            </p>
          </aside>

          <div className="case-narrative__content">
            <MotionReveal className="narrative-block narrative-block--challenge">
              <div className="narrative-block__icon">
                <CircleAlert aria-hidden="true" />
              </div>
              <span>01 / Challenge</span>
              <h2>What needed to change</h2>
              <p>{caseStudy.challenge}</p>
            </MotionReveal>

            <MotionReveal className="narrative-block narrative-block--solution">
              <div className="narrative-block__icon">
                <Lightbulb aria-hidden="true" />
              </div>
              <span>02 / Solution</span>
              <h2>How the product was shaped</h2>
              <p>{caseStudy.solution}</p>
            </MotionReveal>
          </div>
        </section>

        <section className="section results-section">
          <MotionReveal className="section-heading-row">
            <p className="eyebrow">
              <span />
              What shipped
            </p>
            <div>
              <h2>Concrete capabilities, ready for real users.</h2>
              <p>
                The outcome is expressed in delivered product functionality—not
                vague performance claims.
              </p>
            </div>
          </MotionReveal>

          <div className="results-grid">
            {caseStudy.results.map((result, index) => (
              <MotionReveal
                className="result-card"
                delay={Math.min(index * 0.035, 0.2)}
                key={result}
              >
                <CheckCircle2 aria-hidden="true" />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{result}</p>
              </MotionReveal>
            ))}
          </div>
        </section>

        {caseStudy.testimonial ? (
          <section className="project-note">
            <MotionReveal>
              <Quote aria-hidden="true" />
              <p>Project reflection</p>
              <blockquote>“{caseStudy.testimonial.quote}”</blockquote>
              <span>
                {caseStudy.testimonial.author} · {caseStudy.testimonial.role}
              </span>
            </MotionReveal>
          </section>
        ) : null}

        <section className="next-project">
          <p>Next case study</p>
          <Link href={`/case-studies/${nextCaseStudy.id}`}>
            <span>
              <small>{nextCaseStudy.category}</small>
              {nextCaseStudy.title}
            </span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </section>

        <section className="contact-section contact-section--compact">
          <MotionReveal>
            <p className="eyebrow eyebrow--light">
              <span />
              Need similar capability?
            </p>
            <h2>
              Let&apos;s turn the requirement into
              <em>a reliable product.</em>
            </h2>
            <p>
              Share the current situation and desired outcome. I&apos;ll respond
              with a focused technical next step.
            </p>
            <div className="contact-section__actions">
              <a
                className="button button--light"
                href="mailto:mdhasibulhasan360@gmail.com"
              >
                Discuss your project
                <ArrowUpRight aria-hidden="true" />
              </a>
              <Link className="button button--outline-light" href="/case-studies">
                More case studies
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </MotionReveal>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
