import PageHero from "@/components/PageHero";
import Localized from "@/components/Localized";
import CTA from "@/components/CTA";
import { solutions } from "@/components/Data";
import { pageMetadata } from "@/lib/seo";
import { T } from "@/components/LanguageContext";

export const metadata = pageMetadata("Solutions", "Business systems for POS, CRM, booking, membership, dashboards and internal workflows.", "/solutions");

export default function SolutionsPage() {
  return (
    <main>
      <PageHero eyebrow="SOLUTIONS" title="Systems designed around how your business actually works."
        description="We build operational software that reduces manual work, improves visibility and gives teams a stronger foundation to scale."
        eyebrowTh="โซลูชัน" titleTh="ระบบที่ออกแบบตามวิธีทำงานจริงของธุรกิจคุณ"
        descriptionTh="เราสร้างระบบที่ช่วยลดงาน Manual เพิ่มการมองเห็นข้อมูล และเป็นฐานที่แข็งแรงสำหรับการเติบโต" />
      <section className="section">
        <div className="shell solution-grid solution-grid-large">
          {solutions.map(({title,titleTh,text,textTh,icon:Icon}) => (
            <article className="feature-card" key={title}>
              <div className="icon-disc"><Icon /></div><Localized as="h2" en={title} th={titleTh} /><Localized as="p" en={text} th={textTh} />
              <T as="p" className="muted" en="Can be delivered as a standalone system or integrated into your existing ecosystem." th="ส่งมอบเป็นระบบแยกหรือเชื่อมต่อกับ Ecosystem เดิมของคุณได้" />
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
