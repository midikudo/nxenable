import { notFound } from "next/navigation";
import Link from "next/link";
import { work } from "@/components/Data";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = work.find((x) => x.slug === slug);
  if (!item) return notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow">{item.category}</span>
          <h1>{item.title}</h1>
          <p className="lead">{item.summary}</p>
        </div>
      </section>
      <section className="section">
        <div className="shell case-detail-grid">
          <div className="case-detail-visual"><div className="dashboard-mock"><i/><i/><i/><b/><b/><b/></div></div>
          <div>
            <span className="eyebrow">THE CHALLENGE</span>
            <h2>Complex workflows need a system that stays understandable.</h2>
            <p>Projects like this combine permissions, transactions, reporting and day-to-day operational workflows. The solution must remain reliable while still being easy for staff to use.</p>
            <span className="eyebrow block-gap">THE APPROACH</span>
            <p>NXENABLE structures the work around discovery, clear scope, scalable architecture, measurable milestones, UAT and production support.</p>
            <span className="eyebrow block-gap">OUTCOME</span>
            <p>{item.result}</p>
            <Link className="text-link" href="/contact">Discuss a similar project →</Link>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
