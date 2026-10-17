import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import ContactBlock from "@/components/ContactBlock";
import PlatformIcon from "@/components/PlatformIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import BrowserFrame from "@/components/BrowserFrame";
import { platforms, profile } from "@/data/profile";
import { services } from "@/data/services";
import { featuredWork, groupFor, fullPageFor, nameFor, stageFor } from "@/data/showcase";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);
  if (!service) return { title: "Service not found" };
  return { title: service.title, description: service.description };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);
  if (!service) notFound();

  const related = featuredWork.slice(0, 3).map((study) => ({
    id: study.id,
    client: nameFor(study),
    category: study.category,
    image: study.image,
    group: groupFor(study),
    stage: stageFor(study.id),
    fullPage: fullPageFor(study.id),
  }));

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <Link className="crumb" href="/#services">
              <ArrowLeft aria-hidden="true" />
              All services
            </Link>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        </section>

        <div className="container svc">
          <div className="svc__main">
            <section>
              <h2>{service.tagline}</h2>
              <p>{service.longDescription}</p>
            </section>

            {service.benefits?.length ? (
              <section>
                <h2>What you get</h2>
                <ul className="ticks">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>
                      <Check aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {service.process?.length ? (
              <section>
                <h2>How it works</h2>
                <ol className="svc-steps">
                  {service.process.map((step, index) => (
                    <li key={step.step}>
                      <span className="steps__n">{index + 1}</span>
                      <strong>{step.step}</strong>
                      <p>{step.description}</p>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
          </div>

          <aside className="cs-aside" aria-label="Service summary">
            <dl>
              {service.deliverables?.length ? (
                <div>
                  <dt>Deliverables</dt>
                  <dd>
                    <ul className="ticks">
                      {service.deliverables.map((item) => (
                        <li key={item}>
                          <Check aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ) : null}
              {service.technologies?.length ? (
                <div>
                  <dt>Tools</dt>
                  <dd>
                    <ul className="chips">
                      {service.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ) : null}
            </dl>
            <a
              className="btn btn--whatsapp"
              href={profile.whatsapp.href}
              target="_blank"
              rel="noreferrer"
            >
              <PlatformIcon name="whatsapp" />
              Ask on WhatsApp
            </a>
            <a
              className="btn btn--ghost"
              href={platforms.fiverr.href}
              target="_blank"
              rel="noreferrer"
            >
              <PlatformIcon name="fiverr" />
              Order on Fiverr
            </a>
          </aside>
        </div>

        <section className="related" aria-labelledby="related-title">
          <div className="container">
            <header className="section-head">
              <h2 id="related-title">Recent work</h2>
              <p>A few live projects. Each one has a full case study.</p>
            </header>
            <ul className="tiles">
              {related.map((item) => (
                <li key={item.id}>
                  <Link href={`/case-studies/${item.id}`} className="tile">
                    <div
                      className="stage stage--sm"
                      style={{ "--stage": item.stage } as React.CSSProperties}
                    >
                      <BrowserFrame
                        src={item.image}
                        alt=""
                        sizes="(max-width: 600px) 92vw, 400px"
                      />
                    </div>
                    <span className="tile__kind">{item.category}</span>
                    <strong>{item.client}</strong>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactBlock />
      </main>
      <SiteFooter />
    </>
  );
}
