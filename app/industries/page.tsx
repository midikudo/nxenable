import PageHero from "@/components/PageHero";
import Localized from "@/components/Localized";
import CTA from "@/components/CTA";
import { industries } from "@/components/Data";

export const metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <main>
      <PageHero eyebrow="INDUSTRIES" title="Technology that adapts to the way your industry operates."
        description="Different businesses have different workflows, risks and success metrics. We design the system around those realities."
        eyebrowTh="อุตสาหกรรม" titleTh="เทคโนโลยีที่ปรับตามรูปแบบการทำงานของแต่ละธุรกิจ"
        descriptionTh="แต่ละอุตสาหกรรมมี Workflow ความเสี่ยง และตัวชี้วัดต่างกัน เราออกแบบระบบจากความเป็นจริงเหล่านั้น" />
      <section className="section">
        <div className="shell card-grid card-grid-3">
          {industries.map(({title,titleTh,text,textTh,icon:Icon}) => (
            <article className="feature-card" key={title}>
              <div className="icon-disc"><Icon /></div><Localized as="h2" en={title} th={titleTh} /><Localized as="p" en={text} th={textTh} />
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
