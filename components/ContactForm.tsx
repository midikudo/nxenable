"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function ContactForm() {
	const { lang } = useLanguage();
	const th = lang === "th";
	const [isSending, setIsSending] = useState(false);
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
	const submissionInProgress = useRef(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (submissionInProgress.current) return;

		const form = event.currentTarget;
		if (!form.checkValidity()) {
			form.querySelector<HTMLElement>(":invalid")?.focus();
			return;
		}

		submissionInProgress.current = true;
		setIsSending(true);
		setStatus("idle");

		const formData = new FormData(form);
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(Object.fromEntries(formData.entries()))
			});
			const result = await response.json().catch(() => null);
			const sentSuccessfully = response.ok && result?.success === true;

			setStatus(sentSuccessfully ? "success" : "error");
			if (sentSuccessfully) form.reset();
		} catch {
			setStatus("error");
		} finally {
			submissionInProgress.current = false;
			setIsSending(false);
		}
	}

	return (
		<form className="contact-form" onSubmit={handleSubmit}>
			<label className="sr-only">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
			<div className="field-grid">
				<label>{th ? "ชื่อ" : "Name"}<input name="name" required maxLength={100} placeholder={th ? "ชื่อของคุณ" : "Your name"} /></label>
				<label>{th ? "บริษัท" : "Company"}<input name="company" maxLength={150} placeholder={th ? "ชื่อบริษัท" : "Company name"} /></label>
			</div>
			<div className="field-grid">
				<label>{th ? "อีเมล" : "Email"}<input type="email" name="email" required maxLength={254} placeholder="you@company.com" /></label>
				<label>{th ? "โทรศัพท์" : "Phone"}<input name="phone" maxLength={50} placeholder="+66..." /></label>
			</div>
			<div className="field-grid">
				<label>{th ? "ประเภทโปรเจกต์" : "Project type"}
					<select name="projectType">
						<option value="">{th ? "เลือกประเภทโปรเจกต์" : "Select a project type"}</option>
						{[
							["Custom Software", "ซอฟต์แวร์เฉพาะธุรกิจ"], ["Web Application", "เว็บแอปพลิเคชัน"],
							["Mobile Application", "โมบายแอปพลิเคชัน"], ["Business Platform", "แพลตฟอร์มธุรกิจ"],
							["API / Integration", "API / การเชื่อมต่อระบบ"], ["AI / Automation", "AI / ระบบอัตโนมัติ"],
							["POS / Retail", "POS / ค้าปลีก"], ["Booking / Membership", "Booking / Membership"],
							["Dashboard / Internal Tool", "Dashboard / ระบบภายใน"], ["Other", "อื่น ๆ"]
						].map(([en, thLabel]) => <option key={en} value={en}>{th ? thLabel : en}</option>)}
					</select>
				</label>
				<label>{th ? "งบประมาณโดยประมาณ" : "Estimated budget"}
					<select name="estimatedBudget">
						<option value="">{th ? "เลือกงบประมาณ" : "Select a budget range"}</option>
						{[["Under 100,000 THB", "ต่ำกว่า 100,000 บาท"], ["100,000–300,000 THB", "100,000–300,000 บาท"], ["300,000–500,000 THB", "300,000–500,000 บาท"], ["500,000–1,000,000 THB", "500,000–1,000,000 บาท"], ["1,000,000+ THB", "มากกว่า 1,000,000 บาท"], ["Not sure yet", "ยังไม่แน่ใจ"]].map(([value, label]) => <option key={value} value={value}>{th ? label : value}</option>)}
					</select>
				</label>
			</div>
			<div className="field-grid">
				<label>{th ? "ระยะเวลาที่คาดหวัง" : "Expected timeline"}
					<select name="expectedTimeline">
						<option value="">{th ? "เลือกระยะเวลา" : "Select a timeline"}</option>
						{[["ASAP", "ด่วนที่สุด"], ["Within 1 month", "ภายใน 1 เดือน"], ["1–3 months", "1–3 เดือน"], ["3–6 months", "3–6 เดือน"], ["6+ months", "มากกว่า 6 เดือน"], ["Not sure yet", "ยังไม่แน่ใจ"]].map(([value, label]) => <option key={value} value={value}>{th ? label : value}</option>)}
					</select>
				</label>
				<label>{th ? "ระบบเดิมที่มีอยู่" : "Existing system"}
					<select name="existingSystem">
						<option value="">{th ? "เลือกสถานะระบบเดิม" : "Select an option"}</option>
						{[["No, starting from scratch", "ไม่มี เริ่มต้นใหม่"], ["Yes, need enhancement", "มี ต้องการปรับปรุง"], ["Yes, need integration", "มี ต้องการเชื่อมต่อ"], ["Yes, need replacement", "มี ต้องการเปลี่ยนระบบ"], ["Not sure", "ยังไม่แน่ใจ"]].map(([value, label]) => <option key={value} value={value}>{th ? label : value}</option>)}
					</select>
				</label>
			</div>
			<label>{th ? "คุณต้องการสร้างอะไร?" : "What do you want to build?"}<textarea name="message" required maxLength={3000} rows={7} placeholder={th ? "อธิบายโปรเจกต์ ปัญหาปัจจุบัน ระยะเวลาที่ต้องการ และระบบเดิมที่มีอยู่..." : "Describe your project, current pain point, required timeline and any existing system..."} /></label>
			<button className="btn btn-primary" type="submit" disabled={isSending}>
				{isSending ? (th ? "กำลังส่ง..." : "Sending...") : (th ? "ส่งรายละเอียดโปรเจกต์ →" : "Send Project Brief →")}
			</button>
			<p className="form-consent">{th ? <>การส่งแบบฟอร์มนี้ถือว่าคุณยอมรับ<Link href="/privacy">นโยบายความเป็นส่วนตัว</Link>ของเรา</> : <>By submitting this form, you agree to our <Link href="/privacy">Privacy Policy</Link>.</>}</p>
			{status === "success" && <p role="status" aria-live="polite">{th ? "ส่งสำเร็จ" : "Sent successfully"}</p>}
			{status === "error" && <p role="alert" aria-live="assertive">{th ? "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง" : "The message could not be sent. Please try again."}</p>}
		</form>
	);
}
