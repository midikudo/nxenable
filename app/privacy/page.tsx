import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { T } from "@/components/LanguageContext";

export const metadata = pageMetadata("Privacy Policy", "NXENABLE privacy notice for website visitors and project enquiries.", "/privacy");

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="LEGAL" title="Privacy Policy" description="A simple website privacy notice for NXENABLE." eyebrowTh="กฎหมาย" titleTh="นโยบายความเป็นส่วนตัว" descriptionTh="ประกาศความเป็นส่วนตัวสำหรับเว็บไซต์ NXENABLE" />
      <section className="section"><div className="shell prose">
        <T as="h2" en="Information we receive" th="ข้อมูลที่เราได้รับ" /><T as="p" en="We may receive information you submit through email or contact channels, such as your name, company, contact details and project information." th="เราอาจได้รับข้อมูลที่คุณส่งผ่านอีเมลหรือช่องทางติดต่อ เช่น ชื่อ บริษัท รายละเอียดการติดต่อ และข้อมูลโปรเจกต์" />
        <T as="h2" en="How we use information" th="เราใช้ข้อมูลอย่างไร" /><T as="p" en="We use submitted information to respond to enquiries, prepare proposals, communicate about projects and operate our business." th="เราใช้ข้อมูลเพื่อ ตอบข้อสอบถาม จัดทำข้อเสนอ สื่อสารเกี่ยวกับโปรเจกต์ และดำเนินธุรกิจ" />
        <T as="h2" en="Third-party services" th="บริการจากผู้ให้บริการภายนอก" /><T as="p" en="Hosting, analytics, email and other infrastructure providers may process limited technical data under their own terms." th="ผู้ให้บริการ Hosting, Analytics, อีเมล และโครงสร้างพื้นฐานอื่นอาจประมวลผลข้อมูลทางเทคนิคบางส่วนตามข้อกำหนดของตน" />
        <T as="h2" en="Contact" th="ติดต่อ" /><T as="p" en="For privacy enquiries, contact contact@nxenable.co." th="หากมีข้อสอบถามด้านความเป็นส่วนตัว ติดต่อ contact@nxenable.co" />
      </div></section>
    </main>
  );
}
