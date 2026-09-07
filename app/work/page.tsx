import Link from "next/link";
import Localized from "@/components/Localized";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { work } from "@/components/Data";

export const metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main>
      <PageHero eyebrow="FEATURED WORK" title="Software built to solve real operational problems."
        description="Selected examples of the systems, workflows and platforms NXENABLE is positioned to deliver."
        eyebrowTh="ผลงาน" titleTh="ซอฟต์แวร์ที่สร้างมาเพื่อแก้ปัญหาการทำงานจริง"
        descriptionTh="ตัวอย่างระบบ Workflow และ Platform ที่สะท้อนขีดความสามารถด้านการพัฒนาของ NXENABLE" />
      <section className="section">
        <div className="shell case-grid">
          {work.map((item, i) => (
            <article className="case-card" key={item.slug}>
              <div className={`case-visual visual-${i+1}`}><div className="mini-window"><span/><span/><span/><div/></div></div>
              <div className="case-content">
                <span className="eyebrow">{item.category}</span><Localized as="h2" en={item.title} th={item.titleTh} /><Localized as="p" en={item.summary} th={item.summaryTh} />
                <Link href={`/work/${item.slug}`}>View Case Study →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
