"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function CTA() {
  const { lang } = useLanguage();
  return (
    <section className="section">
      <div className="shell">
        <div className="cta-band">
          <div>
            <span className="eyebrow eyebrow-on-dark">
              {lang === "th" ? "มาสร้างสิ่งต่อไปด้วยกัน" : "LET'S BUILD WHAT'S NEXT"}
            </span>
            <h2>{lang === "th" ? "บอกเราว่าคุณอยากสร้างอะไร" : "Tell us what you want to build."}</h2>
            <p>{lang === "th" ? "ซอฟต์แวร์เฉพาะธุรกิจ ระบบที่ฉลาดขึ้น และผลลัพธ์ที่วัดได้" : "Custom software. Smarter systems. Real business impact."}</p>
          </div>
          <Link className="btn btn-primary" href="/contact">
            {lang === "th" ? "ติดต่อ NXENABLE →" : "Contact NXENABLE →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
