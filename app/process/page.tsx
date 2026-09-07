import PageHero from "@/components/PageHero";
import Localized from "@/components/Localized";
import CTA from "@/components/CTA";
import { process } from "@/components/Data";

export const metadata = { title: "Process" };

export default function ProcessPage() {
  return (
    <main>
      <PageHero eyebrow="PROCESS" title="Clear milestones. Fewer surprises."
        description="A disciplined delivery process helps keep scope, budget, communication and quality under control from the first conversation to production."
        eyebrowTh="ขั้นตอนการทำงาน" titleTh="Milestone ชัด ลดความไม่แน่นอน"
        descriptionTh="กระบวนการที่เป็นระบบช่วยควบคุม Scope งบประมาณ การสื่อสาร และคุณภาพ ตั้งแต่เริ่มคุยจนขึ้น Production" />
      <section className="section">
        <div className="shell timeline">
          {process.map(({n,title,titleTh,text,textTh,icon:Icon}) => (
            <article className="timeline-row" key={n}>
              <div className="timeline-no">{n}</div>
              <div className="icon-disc"><Icon /></div>
              <div><Localized as="h2" en={title} th={titleTh} /><Localized as="p" en={text} th={textTh} /></div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
