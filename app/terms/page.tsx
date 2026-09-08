import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { T } from "@/components/LanguageContext";

export const metadata = pageMetadata("Website Terms", "General terms for using the NXENABLE public website.", "/terms");

export default function TermsPage() {
  return (
    <main>
      <PageHero eyebrow="LEGAL" title="Website Terms" description="General terms for using the NXENABLE public website." eyebrowTh="กฎหมาย" titleTh="ข้อกำหนดการใช้งานเว็บไซต์" descriptionTh="ข้อกำหนดทั่วไปสำหรับการใช้งานเว็บไซต์ NXENABLE" />
      <section className="section"><div className="shell prose">
        <T as="h2" en="Website content" th="เนื้อหาเว็บไซต์" /><T as="p" en="Content on this website is provided for general information and may be updated without notice." th="เนื้อหาในเว็บไซต์นี้จัดทำเพื่อข้อมูลทั่วไปและอาจมีการปรับปรุงโดยไม่ต้องแจ้งให้ทราบล่วงหน้า" />
        <T as="h2" en="Project engagements" th="การว่าจ้างโปรเจกต์" /><T as="p" en="Software development services, pricing, scope, intellectual property, support and delivery obligations are governed by the applicable quotation, proposal and contract." th="บริการพัฒนาซอฟต์แวร์ ราคา Scope ทรัพย์สินทางปัญญา การดูแล และหน้าที่การส่งมอบให้เป็นไปตามใบเสนอราคา Proposal และสัญญาที่เกี่ยวข้อง" />
        <T as="h2" en="Intellectual property" th="ทรัพย์สินทางปัญญา" /><T as="p" en="NXENABLE branding, website design and original website content may not be reproduced for commercial use without permission." th="Branding การออกแบบเว็บไซต์ และเนื้อหาต้นฉบับของ NXENABLE ห้ามนำไปทำซ้ำเพื่อการค้าโดยไม่ได้รับอนุญาต" />
        <T as="h2" en="Contact" th="ติดต่อ" /><T as="p" en="Questions may be sent to contact@nxenable.co." th="ส่งคำถามได้ที่ contact@nxenable.co" />
      </div></section>
    </main>
  );
}
