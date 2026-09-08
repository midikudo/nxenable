import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

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
            <h2>Start with a conversation.</h2>
            <p>For project enquiries, partnerships and technical consultations:</p>
            <a href="mailto:contact@nxenable.co">contact@nxenable.co</a>
            <a href="https://nxenable.co">nxenable.co</a>
            <div className="contact-note"><strong>Typical first step</strong><p>30–60 minute discovery call → Requirement summary → Proposal / Estimate.</p></div>
          </aside>
        </div>
      </section>
    </main>
  );
}
