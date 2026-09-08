import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { T } from "@/components/LanguageContext";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About", "Learn how NXENABLE approaches software, systems and long-term technology partnerships.", "/about");

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
            <T as="span" className="eyebrow" en="OUR PURPOSE" th="เป้าหมายของเรา" />
            <T as="h2" en="Enable progress through technology." th="ขับเคลื่อนความก้าวหน้าด้วยเทคโนโลยี" />
          </div>
          <div>
            <T as="p" className="lead-sm" en="Our role is not simply to write code. We translate business goals into software that people can use, teams can operate and organizations can grow with." th="บทบาทของเราไม่ใช่เพียงการเขียนโค้ด แต่คือการแปลงเป้าหมายธุรกิจให้เป็นซอฟต์แวร์ที่คนใช้งานได้ ทีมทำงานต่อได้ และองค์กรเติบโตไปกับระบบได้" />
            <T as="p" en="We value clear scope, transparent communication, maintainable engineering and long-term relationships over short-term delivery theatre." th="เราให้ความสำคัญกับ Scope ที่ชัดเจน การสื่อสารที่โปร่งใส งานวิศวกรรมที่ดูแลต่อได้ และความสัมพันธ์ระยะยาว" />
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell card-grid card-grid-3">
          <article className="feature-card"><span className="eyebrow">01</span><T as="h2" en="Business-first" th="เริ่มจากธุรกิจ" /><T as="p" en="Technology decisions start with business goals, users and operational reality." th="การตัดสินใจด้านเทคโนโลยีเริ่มจากเป้าหมาย ผู้ใช้ และบริบทการทำงานจริง" /></article>
          <article className="feature-card"><span className="eyebrow">02</span><T as="h2" en="Built to scale" th="พร้อมเติบโต" /><T as="p" en="Architecture and implementation are designed for change, not only launch day." th="ออกแบบ Architecture และการพัฒนาให้รองรับการเปลี่ยนแปลง ไม่ใช่แค่วันเปิดใช้งาน" /></article>
          <article className="feature-card"><span className="eyebrow">03</span><T as="h2" en="Long-term support" th="ดูแลระยะยาว" /><T as="p" en="We stay accountable beyond deployment through warranty and maintenance options." th="เราดูแลต่อหลัง Deploy ผ่านทางเลือกด้าน Warranty และ Maintenance" /></article>
        </div>
      </section>
      <CTA />
    </main>
  );
}
