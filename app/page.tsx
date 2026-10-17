import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import BrowserFrame from "@/components/BrowserFrame";
import ContactBlock from "@/components/ContactBlock";
import CountUp from "@/components/CountUp";
import FiverrReviews from "@/components/FiverrReviews";
import HeroWall from "@/components/HeroWall";
import OrderInsights from "@/components/OrderInsights";
import PlatformIcon from "@/components/PlatformIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { caseStudies } from "@/data/case-studies";
import { highlights, platforms, profile, stack, type PlatformKey } from "@/data/profile";
import {
  featuredWork,
  fullPageFor,
  liveFor,
  moreWork,
  nameFor,
  pitchFor,
  stageFor,
} from "@/data/showcase";

const services = [
  {
    title: "Web applications",
    copy: "Dashboards, portals, booking and membership systems: the product your business actually runs on, with accounts, roles, payments and an admin side.",
    points: ["Next.js & React", "Auth, roles & payments", "Admin dashboards"],
    href: "/services/web-development",
  },
  {
    title: "E-commerce & marketplaces",
    copy: "Stores, auctions and multi-vendor marketplaces with checkout, inventory, order emails and invoices that work without manual fixing.",
    points: ["Stripe checkout", "Product builders", "Orders & invoicing"],
    href: "/services/ecommerce",
  },
  {
    title: "Backend & APIs",
    copy: "Data models, APIs, integrations and background jobs, designed so the next developer can read them and the database holds up as you grow.",
    points: ["Node.js / Django", "PostgreSQL & MongoDB", "Third-party integrations"],
    href: "/services/backend-development",
  },
  {
    title: "Fixes, speed & maintenance",
    copy: "Taking over an existing codebase: bugs, slow pages, failed deploys, upgrades and the steady monthly care that keeps a live product healthy.",
    points: ["Codebase rescue", "Performance audits", "Ongoing support"],
    href: "/services/website-maintenance",
  },
];

const steps = [
  {
    title: "A short call or chat",
    copy: "You explain the goal. I ask questions until the scope, priorities and deadline are clear to both of us.",
  },
  {
    title: "Written plan and fixed quote",
    copy: "You get the scope in writing, split into milestones, with a price and timeline before any work starts.",
  },
  {
    title: "Build in the open",
    copy: "A live preview link from the first week, with progress updates every few days so nothing is a surprise.",
  },
  {
    title: "Launch and handover",
    copy: "I deploy, test on real devices, hand over the code and accounts, and fix anything that comes up after launch.",
  },
];

const faqs = [
  {
    q: "How do payments work?",
    a: "Through Fiverr or Upwork if you prefer. They hold the payment until you approve the delivery. For direct contracts, larger projects are split into milestones so you only pay for finished work.",
  },
  {
    q: "Who owns the code?",
    a: "You do. The repository, hosting and third-party accounts are set up in your name or transferred to you at handover.",
  },
  {
    q: "Can you work on my existing project?",
    a: "Yes. A lot of my work is taking over codebases built by someone else. I start with a short review and tell you honestly what's worth keeping.",
  },
  {
    q: "What happens after launch?",
    a: "Bugs found after launch are fixed at no cost for an agreed period. After that, I offer monthly maintenance or you can hire me per task.",
  },
  {
    q: "We're in a different time zone. Is that a problem?",
    a: `I'm in ${profile.location} (${profile.timezone}) and keep a few hours of overlap with US, UK and European working days for calls and quick replies.`,
  },
];

const heroLines = ["Full-stack developer", "for web products", "that have to work."];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader tone="dark" />

      <main id="main">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title" data-glow>
          <HeroWall />
          <span className="glow" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <div className="hero__who">
                <Image
                  src={profile.portrait}
                  alt=""
                  width={52}
                  height={52}
                  priority
                  unoptimized
                />
                <p>
                  <strong>{profile.name}</strong>
                  <span>
                    <i className="status-dot" aria-hidden="true" />
                    Available for new projects
                  </span>
                </p>
              </div>

              <h1 id="hero-title" className="hero__title">
                {heroLines.map((line, index) => (
                  <span className="hero__line" key={line}>
                    <span style={{ animationDelay: `${120 + index * 110}ms` }}>{line}</span>
                  </span>
                ))}
              </h1>

              <p className="hero__lede">
                I&apos;m Hasib. For over eight years I&apos;ve designed and built
                web platforms for founders and businesses, from exam portals and
                auction houses to eSIM stores and recruiting sites, and stayed on
                after launch to keep them running.
              </p>

              <div className="hero__actions">
                <a className="btn btn--light btn--lg" href="#work">
                  See my work
                  <ArrowRight aria-hidden="true" />
                </a>
                <a
                  className="btn btn--whatsapp btn--lg"
                  href={profile.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PlatformIcon name="whatsapp" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="verify">
                <p>Verify me on</p>
                <ul>
                  {(Object.keys(platforms) as PlatformKey[]).map((key) => (
                    <li key={key}>
                      <a
                        href={platforms[key].href}
                        target="_blank"
                        rel="noreferrer"
                        className={`verify__chip verify__chip--${key}`}
                      >
                        <PlatformIcon name={key} />
                        {platforms[key].name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <dl className="highlights">
              {highlights.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    <CountUp value={item.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Featured work */}
        <section className="work" id="work" aria-labelledby="work-title">
          <div className="container">
            <header className="section-head">
              <h2 id="work-title">Selected work</h2>
              <p>
                Live products built for real clients. Each one links to a case
                study with the problem, what I built and the stack behind it.
              </p>
            </header>

            <div className="featured">
              {featuredWork.map((study, index) => (
                <article
                  className={`feature${index % 2 ? " feature--flip" : ""}`}
                  key={study.id}
                >
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="stage"
                    data-tilt
                    style={{ "--stage": stageFor(study.id) } as React.CSSProperties}
                    aria-label={`Read the ${nameFor(study)} case study`}
                  >
                    <BrowserFrame
                      src={study.image}
                      alt={`${nameFor(study)} website`}
                      label={liveFor(study.id)?.replace(/^https?:\/\//, "") ?? nameFor(study)}
                      fit
                      fullPage={fullPageFor(study.id)}
                      priority={index === 0}
                      sizes="(max-width: 900px) 92vw, 720px"
                    />
                    {fullPageFor(study.id) ? (
                      <span className="stage__hint">Hover to scroll the live site</span>
                    ) : null}
                  </Link>

                  <div className="feature__body">
                    <p className="feature__kind">{study.category}</p>
                    <h3>{nameFor(study)}</h3>
                    <p className="feature__pitch">{pitchFor(study)}</p>
                    <ul className="feature__results">
                      {study.results.slice(0, 3).map((result) => (
                        <li key={result}>
                          <Check aria-hidden="true" />
                          {result}
                        </li>
                      ))}
                    </ul>
                    <ul className="chips" aria-label="Technologies">
                      {study.technologies.slice(0, 5).map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className="feature__links">
                      <Link className="text-link" href={`/case-studies/${study.id}`}>
                        Read the case study
                        <ArrowRight aria-hidden="true" />
                      </Link>
                      {liveFor(study.id) ? (
                        <a
                          className="text-link text-link--muted"
                          href={liveFor(study.id)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit live site
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="more-work">
              <header className="more-work__head">
                <h3>More projects</h3>
                <Link className="text-link" href="/case-studies">
                  View all {caseStudies.length} case studies
                  <ArrowRight aria-hidden="true" />
                </Link>
              </header>
              <ul className="tiles">
                {moreWork.slice(0, 6).map((study) => (
                  <li key={study.id}>
                    <Link href={`/case-studies/${study.id}`} className="tile">
                      <div
                        className="stage stage--sm"
                        style={{ "--stage": stageFor(study.id) } as React.CSSProperties}
                      >
                        <BrowserFrame
                          src={study.image}
                          alt=""
                          fullPage={fullPageFor(study.id)}
                          sizes="(max-width: 700px) 92vw, 400px"
                        />
                      </div>
                      <span className="tile__kind">{study.category}</span>
                      <strong>{nameFor(study)}</strong>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <FiverrReviews />

        <OrderInsights />

        {/* Services */}
        <section className="services" id="services" aria-labelledby="services-title">
          <div className="container">
            <header className="section-head">
              <h2 id="services-title">What I can build for you</h2>
              <p>
                One developer across design, frontend, backend and deployment,
                so nothing gets lost between people.
              </p>
            </header>
            <ul className="service-list">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="service" data-glow>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <ul className="service__points">
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <ArrowUpRight className="service__arrow" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="stack">
              <p>Tools I use every week</p>
              <ul className="chips chips--plain">
                {stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="process" aria-labelledby="process-title">
          <div className="container">
            <header className="section-head">
              <h2 id="process-title">How a project runs</h2>
              <p>
                The same four steps whether it&apos;s a two-week fix or a
                three-month build.
              </p>
            </header>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="steps__n">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section className="about" id="about" aria-labelledby="about-title">
          <div className="container about__grid">
            <div className="about__photo">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                unoptimized
                sizes="(max-width: 900px) 60vw, 320px"
              />
            </div>
            <div className="about__copy">
              <h2 id="about-title">You work with me directly, start to finish.</h2>
              <p>
                I&apos;m {profile.name}, an independent full-stack developer
                from {profile.location}. I&apos;ve been building for the web
                since {profile.startedYear}, mostly for small businesses and
                founders who need one person they can rely on rather than an
                agency with layers of account managers.
              </p>
              <p>
                That means the person you talk to is the person writing the
                code. I&apos;ll tell you when an idea is too expensive for what
                it returns, suggest a simpler route when there is one, and
                write things down so you&apos;re never guessing where the
                project stands.
              </p>
              <dl className="facts">
                <div>
                  <dt>Based in</dt>
                  <dd>
                    {profile.location} ({profile.timezone})
                  </dd>
                </div>
                <div>
                  <dt>Works with</dt>
                  <dd>Clients worldwide, remotely</dd>
                </div>
                <div>
                  <dt>Languages</dt>
                  <dd>English, Bangla</dd>
                </div>
                <div>
                  <dt>Résumé</dt>
                  <dd>
                    <a href={platforms.toptal.href} target="_blank" rel="noreferrer">
                      View on Toptal
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <h2 id="faq-title">Questions clients usually ask</h2>
            <div className="faq__list">
              {faqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactBlock />
      </main>

      <SiteFooter />
    </>
  );
}
