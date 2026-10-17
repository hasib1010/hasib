import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import BrowserFrame from "@/components/BrowserFrame";
import ContactBlock from "@/components/ContactBlock";
import PlatformIcon from "@/components/PlatformIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { caseStudies } from "@/data/case-studies";
import { profile } from "@/data/profile";
import { fullPageFor, liveFor, nameFor, stageFor } from "@/data/showcase";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.id === slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: study.title,
    description: study.description,
    openGraph: { images: [study.image] },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = caseStudies.findIndex((item) => item.id === slug);
  if (index === -1) notFound();
  const study = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="cs-hero">
          <div className="container">
            <Link className="crumb" href="/case-studies">
              <ArrowLeft aria-hidden="true" />
              All case studies
            </Link>
            <div className="cs-hero__top">
              <div>
                <p className="cs-hero__kind">{study.category}</p>
                <h1>{study.title}</h1>
              </div>
              <p>{study.description}</p>
            </div>
            <div
              className="stage stage--hero"
              style={{ "--stage": stageFor(study.id) } as React.CSSProperties}
            >
              <BrowserFrame
                src={study.image}
                alt={`${nameFor(study)}, screenshot of the live site`}
                label={study.link ?? nameFor(study)}
                fit
                fullPage={fullPageFor(study.id)}
                priority
                sizes="(max-width: 1200px) 92vw, 1000px"
              />
            </div>
          </div>
        </section>

        <div className="container cs-body">
          <aside className="cs-aside" aria-label="Project summary">
            <dl>
              <div>
                <dt>Client</dt>
                <dd>{study.client}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{study.category}</dd>
              </div>
              <div>
                <dt>My role</dt>
                <dd>{study.role ?? "Full-stack development"}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>
                  <ul className="chips">
                    {study.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            {liveFor(study.id) ? (
              <a
                className="btn btn--ghost"
                href={liveFor(study.id)}
                target="_blank"
                rel="noreferrer"
              >
                Visit live site
                <ArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
            <a
              className="btn btn--whatsapp"
              href={profile.whatsapp.href}
              target="_blank"
              rel="noreferrer"
            >
              <PlatformIcon name="whatsapp" />
              Discuss a similar project
            </a>
          </aside>

          <div className="cs-main">
            <section>
              <h2>The challenge</h2>
              <p>{study.challenge}</p>
            </section>
            <section>
              <h2>What I built</h2>
              <p>{study.solution}</p>
            </section>
            <section>
              <h2>What went live</h2>
              <ul className="shipped">
                {study.results.map((result) => (
                  <li key={result}>
                    <CheckCircle2 aria-hidden="true" />
                    {result}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <section className="next-case container" aria-label="Next case study">
          <Link href={`/case-studies/${next.id}`}>
            <span>
              <small>Next case study</small>
              <strong>{next.title}</strong>
            </span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </section>

        <ContactBlock title="Need something like this built?" />
      </main>
      <SiteFooter />
    </>
  );
}
