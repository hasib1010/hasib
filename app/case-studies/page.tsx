import type { Metadata } from "next";
import ContactBlock from "@/components/ContactBlock";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WorkIndex from "@/components/WorkIndex";
import { caseStudies } from "@/data/case-studies";
import { groupFor, fullPageFor, nameFor, stageFor } from "@/data/showcase";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Web apps, stores, marketplaces and business websites built by Md Hasibul Hasan, with the problem, the solution and the stack for each.",
};

export default function CaseStudiesPage() {
  const items = caseStudies.map((study) => ({
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
            <h1>Every project, with the story behind it.</h1>
            <p>
              {caseStudies.length} products I&apos;ve designed and built: what the
              client needed, how I approached it, and what went live.
            </p>
          </div>
        </section>

        <section className="case-index">
          <div className="container">
            <WorkIndex items={items} />
          </div>
        </section>

        <ContactBlock title="Have a project like these?" />
      </main>
      <SiteFooter />
    </>
  );
}
