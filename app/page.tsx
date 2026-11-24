import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Download,
  Gamepad2,
  Globe,
  Palette,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import BrowserFrame from "@/components/BrowserFrame";
import ContactBlock from "@/components/ContactBlock";
import CountUp from "@/components/CountUp";
import DesignGallery from "@/components/DesignGallery";
import FiverrReviews from "@/components/FiverrReviews";
import GameStage from "@/components/GameStage";
import HeroWall from "@/components/HeroWall";
import OrderInsights from "@/components/OrderInsights";
import PlatformIcon from "@/components/PlatformIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SkillGrid from "@/components/SkillGrid";
import { caseStudies } from "@/data/case-studies";
import { designConcepts } from "@/data/designs";
import { agency, highlights, platforms, profile, resume, stack, type PlatformKey } from "@/data/profile";
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
    copy: "Websites and web apps with accounts, payments and an admin side. Next.js and React on the front, a real backend behind them.",
    points: ["Next.js & React", "Auth, roles & payments", "Admin dashboards"],
    href: "/services/web-development",
    icon: Globe,
  },
  {
    title: "Mobile apps",
    copy: "Cross-platform apps in Flutter and React Native, designed for a phone and built through to an installable preview.",
    points: ["Flutter", "React Native", "iOS & Android"],
    href: "/services/mobile-apps",
    icon: Smartphone,
  },
  {
    title: "Mobile games",
    copy: "Arcade and casual mobile games. Godot with GDScript, or Unity with C#, including the Android game Gulpy.",
    points: ["Godot & GDScript", "Unity & C#", "Android builds"],
    href: "/services/game-development",
    icon: Gamepad2,
  },
  {
    title: "UI/UX design",
    copy: "Figma interfaces for sites, apps and marketing pages. The concept gallery below is invented brands, drawn to be buildable.",
    points: ["Figma", "Desktop & mobile", "Ready to develop"],
    href: "/services/ui-ux-design",
    icon: Palette,
  },
  {
    title: "E-commerce",
    copy: "Stores, auctions and marketplaces with checkout, inventory and orders that arrive where they should.",
    points: ["Stripe checkout", "Product catalogues", "Orders & invoicing"],
    href: "/services/ecommerce",
    icon: ShoppingBag,
  },
  {
    title: "Backend & APIs",
    copy: "Data models, APIs and integrations, written so the next developer can read them and the database still makes sense later.",
    points: ["Node.js & Django", "PostgreSQL & MongoDB", "Third-party APIs"],
    href: "/services/backend-development",
    icon: Code2,
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
    copy: "A preview you can click or install, with progress updates so nothing is a surprise.",
  },
  {
    title: "Launch and handover",
    copy: "I ship it, test on real devices, hand over the code and accounts, and fix what comes up after launch.",
  },
];

const faqs = [
  {
    q: "Do you build mobile apps and games?",
    a: "Yes. Mobile apps in Flutter and React Native, and mobile games in Godot with GDScript or Unity with C#, alongside the web work.",
  },
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

const heroLines = [
  { text: "Web, mobile", em: false },
  { text: "and games.", em: true },
  { text: "Designed and built.", em: false },
];

const gulpyPhones = [
  { src: "/work/gulpy/city.webp", alt: "Gulpy gameplay on the city map" },
  { src: "/work/gulpy/island.webp", alt: "Gulpy gameplay on the island map" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader tone="dark" />

      <main id="main">
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

              <ul className="hero__kicker">
                <li>Web</li>
                <li>Mobile apps</li>
                <li>Games</li>
                <li>UI/UX</li>
              </ul>

              <h1 id="hero-title" className="hero__title">
                {heroLines.map((line, index) => (
                  <span className="hero__line" key={line.text}>
                    <span
                      className={line.em ? "hero__em" : undefined}
                      style={{ animationDelay: `${120 + index * 110}ms` }}
                    >
                      {line.text}
                    </span>
                  </span>
                ))}
              </h1>

              <p className="hero__lede">
                I&apos;m Hasib, a full-stack developer and UI/UX designer in{" "}
                {profile.location}. I ship websites and web apps, Flutter and
                React Native apps, and mobile games in Godot and Unity. I also
                run {agency.name}.
              </p>

              <div className="hero__actions">
                <a className="btn btn--light btn--lg" href="#work">
                  See my work
                  <ArrowRight aria-hidden="true" />
                </a>
                <a className="btn btn--outline btn--lg" href={resume.href} download={resume.fileName}>
                  <Download aria-hidden="true" />
                  Download resume
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

        <section className="skills" aria-labelledby="skills-title">
          <div className="container">
            <header className="section-head">
              <h2 id="skills-title">Web, mobile, games and the interface.</h2>
              <p>
                One person across the stack. Mobile apps in Flutter and React
                Native. Games in Godot with GDScript, and in Unity with C#.
              </p>
            </header>
            <SkillGrid />
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="container">
            <header className="section-head">
              <h2 id="work-title">Selected work</h2>
              <p>
                Live websites, the agency I run, and Gulpy, an Android game I
                published. Each one links to a short case study.
              </p>
            </header>

            <div className="featured">
              {featuredWork.map((study, index) => (
                <article
                  className={`feature${index % 2 ? " feature--flip" : ""}`}
                  key={study.id}
                >
                  {study.layout === "game" ? (
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="game-link"
                      aria-label={`Read the ${nameFor(study)} case study`}
                    >
                      <GameStage
                        poster={study.image}
                        icon="/work/gulpy/icon.webp"
                        phones={gulpyPhones}
                      />
                    </Link>
                  ) : (
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
                  )}

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
          </div>
        </section>

        <section className="designs" id="design" aria-labelledby="design-title">
          <div className="container">
            <header className="section-head">
              <h2 id="design-title">UI/UX design</h2>
              <p>
                Website concepts from Figma. The brands are invented. The boards
                show type, grid and how the same page works on a phone.
              </p>
            </header>
            <DesignGallery items={designConcepts} />
          </div>
        </section>

        <section className="work work--more" aria-labelledby="more-work-title">
          <div className="container">
            <div className="more-work">
              <header className="more-work__head">
                <h3 id="more-work-title">Earlier projects</h3>
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

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="container">
            <header className="section-head">
              <h2 id="services-title">What I can build for you</h2>
              <p>
                Web, mobile, games and UI/UX. One person from the first screen
                to the launch, so nothing gets lost between people.
              </p>
            </header>
            <ul className="service-list">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="service" data-glow>
                    <span className="service__icon">
                      <service.icon aria-hidden="true" />
                    </span>
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
            <p className="services__also">
              Also:{" "}
              <Link href="/services/frontend-development">frontend development</Link>
              {" and "}
              <Link href="/services/website-maintenance">fixes, speed and maintenance</Link>.
            </p>
            <div className="stack">
              <p>Tools I use</p>
              <ul className="chips chips--plain">
                {stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="process" aria-labelledby="process-title">
          <div className="container">
            <header className="section-head">
              <h2 id="process-title">How a project runs</h2>
              <p>The same four steps for a website, an app or a game.</p>
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
              <h2 id="about-title">You work with me directly.</h2>
              <p>
                I&apos;m {profile.name}. I go by Hasib. I&apos;m an independent
                developer and designer in {profile.location}, building for the
                web since {profile.startedYear}. I also design and ship mobile
                apps and games. For larger work I do it through{" "}
                <a href={agency.href} target="_blank" rel="noreferrer">
                  {agency.name}
                </a>
                , the software agency I own.
              </p>
              <p>
                The person you talk to is the person doing the work. I&apos;ll
                say when a simpler version is the better one, and I&apos;ll
                write the scope down before anything starts.
              </p>
              <div className="about__actions">
                <a className="btn btn--primary" href={resume.href} download={resume.fileName}>
                  <Download aria-hidden="true" />
                  Download resume
                </a>
                <a className="btn btn--ghost" href={agency.href} target="_blank" rel="noreferrer">
                  {agency.name}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
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
                  <dt>LinkedIn</dt>
                  <dd>
                    <a href={platforms.linkedin.href} target="_blank" rel="noreferrer">
                      coder-hasib
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

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
