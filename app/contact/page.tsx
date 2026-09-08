import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { T } from "@/components/LanguageContext";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact", "Tell NXENABLE what you want to build and book a practical discovery conversation.", "/contact");

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="CONTACT" title="Tell us what you want to build."
        description="Share your goal, current problem or requirement. We’ll help structure the scope and recommend a practical next step."
        eyebrowTh="ติดต่อเรา" titleTh="บอกเราว่าคุณอยากสร้างอะไร"
        descriptionTh="แชร์เป้าหมาย ปัญหาปัจจุบัน หรือ Requirement ของคุณ เราจะช่วยจัด Scope และแนะนำขั้นตอนถัดไปที่เหมาะสม" />
      <section className="section">
        <div className="shell contact-grid">
          <ContactForm />
          <aside className="contact-card">
            <span className="eyebrow">NXENABLE TECHNOLOGIES CO., LTD.</span>
            <T as="h2" en="Start with a conversation." th="เริ่มต้นด้วยการพูดคุย" />
            <T as="p" en="For project enquiries, partnerships and technical consultations:" th="สำหรับการสอบถามโปรเจกต์ ความร่วมมือ และคำปรึกษาด้านเทคนิค" />
            <a href="mailto:contact@nxenable.co">contact@nxenable.co</a>
            <a href="https://nxenable.co">nxenable.co</a>
            <div className="contact-note"><T as="strong" en="Typical first step" th="ขั้นตอนแรกที่มักเริ่มต้น" /><T as="p" en="30–60 minute discovery call → Requirement summary → Proposal / Estimate." th="Discovery Call 30–60 นาที → สรุป Requirement → Proposal / Estimate" /></div>
          </aside>
        </div>
      </section>
    </main>
  );
}
