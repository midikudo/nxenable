import { notFound } from "next/navigation";
import Link from "next/link";
import { work } from "@/components/Data";
import CTA from "@/components/CTA";
import Localized from "@/components/Localized";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = work.find((x) => x.slug === slug);
  return item ? pageMetadata(item.title, item.summary, `/work/${item.slug}`) : pageMetadata("Case Study", "Selected NXENABLE project experience.", `/work/${slug}`);
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
          <Localized as="h1" en={item.title} th={item.titleTh} />
          <Localized as="p" className="lead" en={item.summary} th={item.summaryTh} />
        </div>
      </section>
      <section className="section">
        <div className="shell case-detail-grid">
          <div className="case-detail-visual"><div className="dashboard-mock"><i/><i/><i/><b/><b/><b/></div></div>
          <div>
            <Localized as="span" className="eyebrow" en="THE CHALLENGE" th="ความท้าทาย" />
            <Localized as="h2" en="Complex workflows need a system that stays understandable." th="Workflow ที่ซับซ้อนต้องการระบบที่เข้าใจง่ายและใช้งานได้จริง" />
            <Localized as="p" en="Projects like this combine permissions, transactions, reporting and day-to-day operational workflows. The solution must remain reliable while still being easy for staff to use." th="โปรเจกต์ลักษณะนี้รวมสิทธิ์การใช้งาน ธุรกรรม รายงาน และ Workflow ประจำวันไว้ด้วยกัน ระบบจึงต้องเสถียรและใช้งานง่ายสำหรับทีม" />
            <Localized as="span" className="eyebrow block-gap" en="THE APPROACH" th="แนวทางการทำงาน" />
            <Localized as="p" en="NXENABLE structures the work around discovery, clear scope, scalable architecture, measurable milestones, UAT and production support." th="NXENABLE วางงานผ่าน Discovery, Scope ที่ชัดเจน, Architecture ที่ขยายได้, Milestone ที่วัดผลได้, UAT และ Production Support" />
            <Localized as="span" className="eyebrow block-gap" en="OUTCOME" th="ผลลัพธ์" />
            <Localized as="p" en={item.result} th={item.resultTh} />
            <Localized as="span" className="text-link" en={<Link href="/contact">Discuss a similar project →</Link>} th={<Link href="/contact">คุยโปรเจกต์ที่คล้ายกัน →</Link>} />
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
