import PageHero from "@/components/PageHero";

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
          <form className="contact-form" action="mailto:contact@nxenable.co" method="post" encType="text/plain">
            <div className="field-grid">
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Company<input name="company" placeholder="Company name" /></label>
            </div>
            <div className="field-grid">
              <label>Email<input type="email" name="email" required placeholder="you@company.com" /></label>
              <label>Phone<input name="phone" placeholder="+66..." /></label>
            </div>
            <label>What do you want to build?<textarea name="message" required rows={7} placeholder="Describe your project, current pain point, required timeline and any existing system..." /></label>
            <button className="btn btn-primary" type="submit">Send Project Brief →</button>
          </form>
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
