"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Layers3,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiFiverr, SiToptal, SiUpwork } from "react-icons/si";
import PortfolioFooter from "@/components/PortfolioFooter";
import PortfolioHeader from "@/components/PortfolioHeader";

const profiles = [
  {
    key: "fiverr",
    platform: "Fiverr",
    label: "Explore services and hire directly",
    href: "https://www.fiverr.com/adnanhasib565",
    icon: SiFiverr,
    action: "View Fiverr",
  },
  {
    key: "upwork",
    platform: "Upwork",
    label: "View my work history and availability",
    href: "https://www.upwork.com/freelancers/~016c22697bb208b08b?mp_source=share",
    icon: SiUpwork,
    action: "View Upwork",
  },
  {
    key: "toptal",
    platform: "Toptal",
    label: "Review my verified developer résumé",
    href: "https://www.toptal.com/developers/resume/md-hasibul-hasan",
    icon: SiToptal,
    action: "View Toptal",
  },
  {
    key: "linkedin",
    platform: "LinkedIn",
    label: "Connect and follow my professional work",
    href: "https://www.linkedin.com/in/coder-hasib",
    icon: FaLinkedinIn,
    action: "Connect",
  },
];

const services = [
  {
    number: "01",
    icon: Layers3,
    title: "Product engineering",
    description:
      "From idea to launch, I turn product requirements into polished, maintainable web experiences.",
    tags: ["Discovery", "Architecture", "UI engineering"],
    href: "/services/web-development",
  },
  {
    number: "02",
    icon: Code2,
    title: "Frontend systems",
    description:
      "Fast, accessible interfaces with thoughtful interaction design and reusable component systems.",
    tags: ["React", "Next.js", "TypeScript"],
    href: "/services/frontend-development",
  },
  {
    number: "03",
    icon: Database,
    title: "Backend & APIs",
    description:
      "Secure business logic, reliable data models, integrations, and APIs designed to scale.",
    tags: ["Node.js", "PostgreSQL", "REST / GraphQL"],
    href: "/services/backend-development",
  },
  {
    number: "04",
    icon: ServerCog,
    title: "Launch & scale",
    description:
      "Performance audits, cloud deployment, technical rescue work, and long-term product support.",
    tags: ["AWS", "Docker", "CI/CD"],
    href: "/services/website-maintenance",
  },
];

const projects = [
  {
    index: "01",
    title: "LSO Bar Exam",
    type: "Exam preparation platform",
    description:
      "A secure learning product with OTP authentication, paid exam sets, attempt tracking, Stripe payments, and a full admin workspace.",
    image: "/images/lsobar.png",
    href: "/case-studies/lso-bar-exam-platform",
    stack: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    tone: "project--blue",
  },
  {
    index: "02",
    title: "AirNexus",
    type: "B2B digital experience",
    description:
      "A confident, conversion-focused company site that turns complex service offerings into an easy path from discovery to enquiry.",
    image: "/images/airnexus.png",
    href: "/case-studies/airnexus-b2b-landing-page",
    stack: ["React", "Responsive UI", "UX strategy"],
    tone: "project--orange",
  },
  {
    index: "03",
    title: "Eco Agriculture",
    type: "Full-stack marketplace",
    description:
      "A modern agriculture platform connecting products, customers, and operational workflows through one responsive system.",
    image: "/images/eco.png",
    href: "/case-studies/eco-agriculture-platform",
    stack: ["MERN", "E-commerce", "Admin tools"],
    tone: "project--green",
  },
];

const projectArchive = [
  {
    index: "04",
    title: "44 Pro",
    type: "Custom commerce",
    image: "/images/44pro.png",
    size: "wide",
  },
  {
    index: "05",
    title: "Fliday",
    type: "Travel eSIM platform",
    image: "/images/fliday.webp",
    size: "standard",
  },
  {
    index: "06",
    title: "Interdimensional Cafe",
    type: "Community platform",
    image: "/images/inter-cafe.png",
    size: "standard",
  },
  {
    index: "07",
    title: "MapleStone",
    type: "Property management",
    image: "/images/marbelstone.png",
    size: "wide",
  },
  {
    index: "08",
    title: "DeepHash",
    type: "Cloud platform",
    image: "/images/deephash.png",
    size: "wide",
  },
  {
    index: "09",
    title: "AutoMarket",
    type: "Automotive marketplace",
    image: "/images/carrent.png",
    size: "standard",
  },
];

const stats = [
  { value: "150+", label: "Projects delivered" },
  { value: "8+", label: "Years of experience" },
  { value: "99%", label: "Client satisfaction" },
  { value: "Worldwide", label: "Remote collaboration" },
];

const process = [
  {
    step: "01",
    title: "Understand",
    copy: "We define the business goal, users, scope, and success criteria before touching the build.",
  },
  {
    step: "02",
    title: "Shape",
    copy: "I map the experience, choose the right architecture, and turn ambiguity into a focused plan.",
  },
  {
    step: "03",
    title: "Build",
    copy: "Design and engineering move together in short, transparent delivery cycles.",
  },
  {
    step: "04",
    title: "Launch",
    copy: "The product is tested, optimized, deployed, and supported after it reaches real users.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <div className="section-intro__body">
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </div>
  );
}

export default function Home() {
  const reveal = {
    // Keep content visible before JavaScript, during full-page captures, and
    // for crawlers. Motion should enhance the page, never gate its content.
    initial: false as const,
    whileInView: { y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <PortfolioHeader />

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__grid">
            <motion.div
              className="hero__copy"
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="availability">
                <span />
                Available for select projects
              </p>
              <h1 id="hero-title">
                Full-stack
                <span>developer.</span>
              </h1>
              <p className="hero__lede">
                I build fast, dependable web products that move businesses
                forward—from first idea to production.
              </p>

              <div className="hero__actions">
                <a className="button button--dark" href="#work">
                  Explore my work
                  <ArrowDown aria-hidden="true" />
                </a>
                <a
                  className="button button--text"
                  href="https://www.toptal.com/developers/resume/md-hasibul-hasan"
                  target="_blank"
                  rel="noreferrer"
                >
                  View résumé
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>

              <div className="hero__proof">
                <div className="avatar-stack" aria-hidden="true">
                  <span>150+</span>
                </div>
                <p>
                  <strong>Trusted across 150+ projects</strong>
                  Product thinking, precise delivery, clear communication.
                </p>
              </div>

              <div className="hero__platforms" aria-label="Professional profiles">
                <span>Available on</span>
                <div>
                  {profiles.map((profile) => {
                    const Icon = profile.icon;
                    return (
                      <a
                        href={profile.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit Hasib on ${profile.platform}`}
                        title={profile.platform}
                        key={profile.platform}
                      >
                        <Icon aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero__portrait-wrap"
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="hero__portrait">
                <Image
                  src="/hasib-portrait.png"
                  alt="Md Hasibul Hasan, full-stack developer"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 900px) 92vw, 42vw"
                />
                <div className="portrait-label">
                  <span>Based in Bangladesh</span>
                  <strong>Working worldwide</strong>
                </div>
              </div>
              <div className="hero__signature">
                <span>Md Hasibul Hasan</span>
                <Sparkles aria-hidden="true" />
              </div>
              <div className="code-note" aria-hidden="true">
                <span>01</span>
                <code>craft → ship → improve</code>
              </div>
            </motion.div>
          </div>

          <div className="hero__ticker" aria-label="Core expertise">
            <div>
              <span>React & Next.js</span>
              <i>✦</i>
              <span>Node.js & APIs</span>
              <i>✦</i>
              <span>Product UI</span>
              <i>✦</i>
              <span>Cloud & DevOps</span>
              <i>✦</i>
              <span>React & Next.js</span>
              <i>✦</i>
              <span>Node.js & APIs</span>
              <i>✦</i>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Career highlights">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="trust-strip" aria-label="How projects are delivered">
          <div>
            <span>01</span>
            <strong>Clear scope</strong>
            <p>Written priorities, milestones, and success criteria.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Visible progress</strong>
            <p>Short delivery cycles with direct, practical updates.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Production handoff</strong>
            <p>Tested code, documentation, deployment, and support.</p>
          </div>
        </section>

        <section className="section section--work" id="work">
          <motion.div {...reveal}>
            <SectionIntro
              eyebrow="Selected work"
              title="Built to solve the real problem—not just look good."
              copy="A selection of full-stack products where strategy, interface, and engineering came together."
            />
          </motion.div>

          <div className="projects">
            {projects.map((project) => (
              <motion.article
                className={`project ${project.tone}`}
                key={project.title}
                {...reveal}
              >
                <div className="project__content">
                  <div className="project__meta">
                    <span>{project.index}</span>
                    <span>{project.type}</span>
                  </div>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project__footer">
                    <div className="tag-list">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <Link
                      className="round-link"
                      href={project.href}
                      aria-label={`Read ${project.title} case study`}
                    >
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                <Link
                  className="project__visual"
                  href={project.href}
                  aria-label={`View ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} interface`}
                    fill
                    unoptimized
                    sizes="(max-width: 900px) 92vw, 52vw"
                  />
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div className="project-archive__intro" {...reveal}>
            <p className="eyebrow">
              <span />
              More shipped products
            </p>
            <p>
              A broader look at commerce, community, travel, property, and
              platform work delivered across industries.
            </p>
          </motion.div>

          <div className="project-archive">
            {projectArchive.map((project) => (
              <motion.article
                className={`archive-card archive-card--${project.size}`}
                key={project.title}
                {...reveal}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} interface`}
                  fill
                  unoptimized
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 60vw"
                />
                <div className="archive-card__wash" aria-hidden="true" />
                <div className="archive-card__meta">
                  <span>{project.index}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.type}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div className="all-work" {...reveal}>
            <Link href="/case-studies">
              Explore detailed case studies
              <ArrowRight aria-hidden="true" />
            </Link>
          </motion.div>
        </section>

        <section className="section section--services" id="services">
          <motion.div {...reveal}>
            <SectionIntro
              eyebrow="What I do"
              title="One experienced partner across the whole product."
              copy="You get a developer who can think through the experience, own the implementation, and stay accountable through launch."
            />
          </motion.div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className="service-card"
                  key={service.title}
                  {...reveal}
                >
                  <div className="service-card__top">
                    <span>{service.number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.tags.map((tag) => (
                      <li key={tag}>
                        <Check aria-hidden="true" />
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link className="service-card__link" href={service.href}>
                    Explore service
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section about" id="about">
          <motion.div className="about__statement" {...reveal}>
            <p className="eyebrow eyebrow--light">
              <span />
              About Hasib
            </p>
            <blockquote>
              “Great software feels simple on the surface because the hard
              decisions were made carefully underneath.”
            </blockquote>
          </motion.div>
          <motion.div className="about__copy" {...reveal}>
            <p className="about__lead">
              I&apos;m Md Hasibul Hasan, a full-stack developer focused on
              building useful, high-quality digital products.
            </p>
            <p>
              Over the last eight years, I&apos;ve helped founders, growing
              teams, and established businesses turn ambitious requirements
              into reliable web platforms. My work spans product strategy,
              frontend craft, backend architecture, integrations, and
              deployment.
            </p>
            <p>
              I care about the details users notice and the engineering choices
              they never have to think about.
            </p>
            <a href="mailto:hello@hasibdigital.com">
              Start a conversation
              <ArrowUpRight aria-hidden="true" />
            </a>
          </motion.div>
        </section>

        <section className="section process-section">
          <motion.div {...reveal}>
            <SectionIntro
              eyebrow="How I work"
              title="Clear process. No black box."
              copy="A practical delivery rhythm designed to reduce risk, keep momentum, and make every decision visible."
            />
          </motion.div>

          <div className="process-list">
            {process.map((item) => (
              <motion.article className="process-row" key={item.step} {...reveal}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ArrowUpRight aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section profiles-section" id="profiles">
          <motion.div {...reveal}>
            <SectionIntro
              eyebrow="Find me online"
              title="Choose the platform that works for you."
              copy="Review my experience, connect professionally, or start a project through your preferred network."
            />
          </motion.div>

          <div className="profile-grid">
            {profiles.map((profile) => {
              const Icon = profile.icon;
              return (
                <motion.a
                  className={`profile-card profile-card--${profile.key}`}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  key={profile.platform}
                  {...reveal}
                >
                  <span className="profile-card__mark">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{profile.platform}</h3>
                    <p>{profile.label}</p>
                  </div>
                  <span className="profile-card__cta">
                    {profile.action}
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-section__orbit" aria-hidden="true">
            <span>Available · Remote · Full-stack · </span>
          </div>
          <motion.div {...reveal}>
            <p className="eyebrow eyebrow--light">
              <span />
              Have a project in mind?
            </p>
            <h2>
              Let&apos;s build something
              <em>worth using.</em>
            </h2>
            <p>
              Tell me what you&apos;re working on, where you&apos;re stuck, and
              what success looks like. I&apos;ll reply with a clear next step.
            </p>
            <div className="contact-section__actions">
              <a
                className="button button--light"
                href="mailto:hello@hasibdigital.com"
              >
                hello@hasibdigital.com
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="button button--outline-light"
                href="https://www.fiverr.com/adnanhasib565"
                target="_blank"
                rel="noreferrer"
              >
                <SiFiverr aria-hidden="true" />
                Hire me on Fiverr
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
