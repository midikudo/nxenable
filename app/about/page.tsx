import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="ABOUT NXENABLE" title="We build technology to enable what comes next."
        description="NXENABLE is a technology partner focused on custom software, business platforms, web & mobile applications, integration, AI and automation."
        eyebrowTh="เกี่ยวกับ NXENABLE" titleTh="เราสร้างเทคโนโลยีเพื่อทำให้สิ่งต่อไปเกิดขึ้นได้"
        descriptionTh="NXENABLE คือ Technology Partner ที่เน้น Custom Software, Business Platform, Web & Mobile, Integration, AI และ Automation" />
      <section className="section">
        <div className="shell two-col">
          <div>
            <span className="eyebrow">OUR PURPOSE</span>
            <h2>Enable progress through technology.</h2>
          </div>
          <div>
            <p className="lead-sm">Our role is not simply to write code. We translate business goals into software that people can use, teams can operate and organizations can grow with.</p>
            <p>We value clear scope, transparent communication, maintainable engineering and long-term relationships over short-term delivery theatre.</p>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell card-grid card-grid-3">
          <article className="feature-card"><span className="eyebrow">01</span><h2>Business-first</h2><p>Technology decisions start with business goals, users and operational reality.</p></article>
          <article className="feature-card"><span className="eyebrow">02</span><h2>Built to scale</h2><p>Architecture and implementation are designed for change, not only launch day.</p></article>
          <article className="feature-card"><span className="eyebrow">03</span><h2>Long-term support</h2><p>We stay accountable beyond deployment through warranty and maintenance options.</p></article>
        </div>
      </section>
      <CTA />
    </main>
  );
}
