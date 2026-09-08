import PageHero from "@/components/PageHero";
import Localized from "@/components/Localized";
import CTA from "@/components/CTA";
import { services } from "@/components/Data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Services", "Custom software, web and mobile applications, integrations, business platforms and automation.", "/services");

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="SERVICES" title="Technology services built around business outcomes."
        description="From discovery to go-live, NXENABLE delivers end-to-end software engineering with clear scope, practical architecture and measurable progress."
        eyebrowTh="บริการ" titleTh="บริการเทคโนโลยีที่ออกแบบจากผลลัพธ์ทางธุรกิจ"
        descriptionTh="ตั้งแต่ค้นหาความต้องการจนถึง Go-live เราพัฒนาซอฟต์แวร์แบบครบวงจร ด้วย Scope ที่ชัด Architecture ที่เหมาะสม และติดตามความก้าวหน้าได้" />
      <section className="section">
        <div className="shell card-grid card-grid-3">
          {services.map(({title,titleTh,text,textTh,icon:Icon}) => (
            <article className="feature-card" key={title}>
              <div className="icon-disc"><Icon /></div><Localized as="h2" en={title} th={titleTh} /><Localized as="p" en={text} th={textTh} />
              <ul>
                <li>Discovery & requirement analysis</li>
                <li>Architecture & technical design</li>
                <li>Milestone-based delivery</li>
                <li>UAT, deployment & handover</li>
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
