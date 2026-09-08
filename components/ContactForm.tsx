"use client";

import { useLanguage } from "./LanguageContext";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const { lang } = useLanguage();
  const th = lang === "th";
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("idle");

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      setStatus(response.ok ? "success" : "error");
      if (response.ok) event.currentTarget.reset();
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>{th ? "ชื่อ" : "Name"}<input name="name" required placeholder={th ? "ชื่อของคุณ" : "Your name"} /></label>
        <label>{th ? "บริษัท" : "Company"}<input name="company" placeholder={th ? "ชื่อบริษัท" : "Company name"} /></label>
      </div>
      <div className="field-grid">
        <label>{th ? "อีเมล" : "Email"}<input type="email" name="email" required placeholder={th ? "you@company.com" : "you@company.com"} /></label>
        <label>{th ? "โทรศัพท์" : "Phone"}<input name="phone" placeholder="+66..." /></label>
      </div>
      <label>{th ? "คุณต้องการสร้างอะไร?" : "What do you want to build?"}<textarea name="message" required rows={7} placeholder={th ? "อธิบายโปรเจกต์ ปัญหาปัจจุบัน ระยะเวลาที่ต้องการ และระบบเดิมที่มีอยู่..." : "Describe your project, current pain point, required timeline and any existing system..."} /></label>
      <button className="btn btn-primary" type="submit" disabled={isSending}>
        {isSending ? (th ? "กำลังส่ง..." : "Sending...") : (th ? "ส่งรายละเอียดโปรเจกต์ →" : "Send Project Brief →")}
      </button>
      {status === "success" && <p role="status">{th ? "ส่งข้อมูลเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็ว" : "Your message was sent. We will get back to you soon."}</p>}
      {status === "error" && <p role="alert">{th ? "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง" : "The message could not be sent. Please try again."}</p>}
    </form>
  );
}