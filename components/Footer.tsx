"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const th = lang === "th";
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Logo />
          <p className="muted footer-tagline">Enable What&apos;s Next.</p>
        </div>
        <div>
          <strong>NXENABLE TECHNOLOGIES CO., LTD.</strong>
          <p className="muted">{th ? "อยู่ระหว่างดำเนินการจัดตั้งและจดทะเบียนบริษัท" : "Company registration in progress"}</p>
          <p className="muted">contact@nxenable.co</p>
          <p className="muted">nxenable.co</p>
        </div>
        <div className="footer-links">
          <Link href="/privacy">{th ? "ความเป็นส่วนตัว" : "Privacy"}</Link>
          <Link href="/terms">{th ? "ข้อกำหนด" : "Terms"}</Link>
          <Link href="/contact">{th ? "ติดต่อ" : "Contact"}</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} NXENABLE</span>
        <span>{th ? "เทคโนโลยีเพื่อวันพรุ่งนี้ที่ดีกว่า" : "Technology for a brighter tomorrow."}</span>
      </div>
    </footer>
  );
}
