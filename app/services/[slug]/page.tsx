import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  FileCode2,
  Gauge,
  Globe2,
  Handshake,
  Palette,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SiFiverr } from "react-icons/si";
import MotionReveal from "@/components/MotionReveal";
import PortfolioFooter from "@/components/PortfolioFooter";
import PortfolioHeader from "@/components/PortfolioHeader";
import { services } from "@/data/services";

const serviceIcons: Record<string, LucideIcon> = {
  globe: Globe2,
  palette: Palette,
  code: Code2,
  server: ServerCog,
  "shopping-cart": ShoppingBag,
  settings: Wrench,
};

const serviceImages: Record<string, string> = {
  "web-development": "/srevices/web_dev_mockup-removebg-preview.png",
  "ui-ux-design": "/srevices/uiux_mockup-removebg-preview.png",
  "frontend-development": "/srevices/frontend_mockup-removebg-preview.png",
  "backend-development": "/srevices/backend_mockup-removebg-preview.png",
  ecommerce: "/srevices/ecommerce_mockup-removebg-preview.png",
  "website-maintenance": "/srevices/maintenance_mockup-removebg-preview.png",
};

const deliveryPrinciples = [
  {
    icon: Handshake,
    title: "Direct collaboration",
    copy: "You speak with the developer making the decisions and doing the work.",
  },
  {
    icon: FileCode2,
    title: "Source ownership",
    copy: "Clean source code, documentation, and a practical handoff are included.",
  },
  {
    icon: Gauge,
    title: "Production quality",
    copy: "Performance, accessibility, testing, and maintainability shape the build.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible delivery",
    copy: "Security, deployment, and post-launch stability are considered from day one.",
  },
];

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
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Md Hasibul Hasan`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);
  if (!service) notFound();

  const ServiceIcon = serviceIcons[service.icon] ?? Code2;
  const otherServices = services
    .filter((item) => item.id !== slug)
    .slice(0, 3);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PortfolioHeader />

      <main id="main">
        <div className="page-crumb">
          <Link href="/#services">
            <ArrowLeft aria-hidden="true" />
            All services
          </Link>
          <span>{service.title}</span>
        </div>

        <section
          className={`service-detail-hero service-detail-hero--${service.accentColor}`}
        >
          <MotionReveal className="service-detail-hero__copy">
            <div className="service-detail-hero__icon">
              <ServiceIcon aria-hidden="true" />
            </div>
            <p className="eyebrow">
              <span />
              {service.tagline}
            </p>
            <h1>{service.title}</h1>
            <p>{service.longDescription || service.description}</p>
            <div className="service-detail-hero__actions">
              <a
                className="button button--dark"
                href="mailto:hello@hasibdigital.com"
              >
                Discuss this service
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="button button--text"
                href="https://www.fiverr.com/adnanhasib565"
                target="_blank"
                rel="noreferrer"
              >
                <SiFiverr aria-hidden="true" />
                Hire on Fiverr
              </a>
            </div>
          </MotionReveal>

          <MotionReveal className="service-detail-hero__visual" delay={0.08}>
            {serviceImages[service.id] ? (
              <Image
                src={serviceImages[service.id]}
                alt={`${service.title} service preview`}
                fill
                priority
                unoptimized
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            ) : null}
            <div className="service-detail-hero__note">
              <span>01</span>
              <p>Plan → build → validate → launch</p>
            </div>
          </MotionReveal>
        </section>

        <section className="trust-strip trust-strip--service">
          {deliveryPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={principle.title}>
                <Icon aria-hidden="true" />
                <span>0{index + 1}</span>
                <strong>{principle.title}</strong>
                <p>{principle.copy}</p>
              </div>
            );
          })}
        </section>

        {service.benefits?.length ? (
          <section className="section service-benefits">
            <MotionReveal className="section-heading-row">
              <p className="eyebrow">
                <span />
                Business value
              </p>
              <div>
                <h2>Built around the outcome—not a generic package.</h2>
                <p>
                  The technical approach is shaped by your users, constraints,
                  existing systems, and definition of success.
                </p>
              </div>
            </MotionReveal>
            <div className="service-benefit-grid">
              {service.benefits.map((benefit, index) => (
                <MotionReveal
                  className="service-benefit-card"
                  delay={Math.min(index * 0.05, 0.2)}
                  key={benefit}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{benefit}</p>
                </MotionReveal>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section service-scope">
          <MotionReveal className="service-scope__heading">
            <p className="eyebrow">
              <span />
              Scope
            </p>
            <h2>What&apos;s included</h2>
            <p>
              A clear working scope creates predictable delivery and fewer
              surprises.
            </p>
          </MotionReveal>
          <div className="service-scope__list">
            {service.features.map((feature, index) => (
              <MotionReveal
                className="service-scope__item"
                delay={Math.min(index * 0.04, 0.16)}
                key={feature}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
                <Check aria-hidden="true" />
              </MotionReveal>
            ))}
          </div>
        </section>

        {service.process?.length ? (
          <section className="section service-process">
            <MotionReveal className="section-heading-row section-heading-row--light">
              <p className="eyebrow eyebrow--light">
                <span />
                Delivery process
              </p>
              <div>
                <h2>A visible path from requirement to release.</h2>
                <p>
                  Each stage has a purpose, a clear output, and a decision point
                  before the work moves forward.
                </p>
              </div>
            </MotionReveal>
            <div className="service-process__list">
              {service.process.map((step, index) => (
                <MotionReveal
                  className="service-process__step"
                  delay={Math.min(index * 0.05, 0.2)}
                  key={step.step}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.step}</h3>
                  <p>{step.description}</p>
                </MotionReveal>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section delivery-package">
          <MotionReveal className="delivery-package__column">
            <p className="eyebrow">
              <span />
              Technology
            </p>
            <h2>Tools selected for fit and longevity.</h2>
            <div className="technology-cloud">
              {service.technologies?.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal className="delivery-package__column" delay={0.08}>
            <p className="eyebrow">
              <span />
              Handoff
            </p>
            <h2>What you receive.</h2>
            <ul>
              {service.deliverables?.map((deliverable) => (
                <li key={deliverable}>
                  <Check aria-hidden="true" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </section>

        <section className="section related-services">
          <MotionReveal className="section-heading-row">
            <p className="eyebrow">
              <span />
              Related expertise
            </p>
            <div>
              <h2>One partner across the full product.</h2>
              <p>
                Combine services when the project needs design, frontend,
                backend, commerce, or ongoing support.
              </p>
            </div>
          </MotionReveal>
          <div className="related-services__grid">
            {otherServices.map((item) => {
              const Icon = serviceIcons[item.icon] ?? Code2;
              return (
                <MotionReveal key={item.id}>
                  <Link
                    className={`related-service related-service--${item.accentColor}`}
                    href={`/services/${item.id}`}
                  >
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </section>

        <section className="contact-section contact-section--compact">
          <MotionReveal>
            <p className="eyebrow eyebrow--light">
              <span />
              Ready to move forward?
            </p>
            <h2>
              Let&apos;s define the right
              <em>next step.</em>
            </h2>
            <p>
              Tell me what you need, what already exists, and where the product
              needs to go. I&apos;ll respond with a focused recommendation.
            </p>
            <div className="contact-section__actions">
              <a
                className="button button--light"
                href="mailto:hello@hasibdigital.com"
              >
                Start a conversation
                <ArrowUpRight aria-hidden="true" />
              </a>
              <Link className="button button--outline-light" href="/case-studies">
                Review my work
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
