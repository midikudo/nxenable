"use client";

import Link from "next/link";
import {
  Bot, Code2, Headphones, MonitorSmartphone, ShieldCheck, TrendingUp, Layers3,
  UsersRound, Clock3, HeartHandshake
} from "lucide-react";
import { services, solutions, process, work } from "@/components/Data";
import CTA from "@/components/CTA";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();
  const th = lang === "th";
  return (
    <main>
      <section className="hero">
        <div className="hero-grid-overlay" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker"><span>{th ? "เทคโนโลยีเพื่อวันพรุ่งนี้ที่ดีกว่า" : "TECHNOLOGY FOR A BRIGHTER TOMORROW"}</span><i /></div>
            <h1>{th ? <>สร้าง<br />สิ่งที่ <span>เป็นไปได้.</span></> : <>Enable<br />What&apos;s <span>Next.</span></>}</h1>
            <p>{th
              ? "Custom Software, Web & Mobile Application, Business Platform และ AI & Automation เพื่อธุรกิจที่ฉลาดและเชื่อมต่อมากขึ้น"
              : "Custom software, web & mobile applications, business platforms, and AI & automation for a smarter, more connected future."}
            </p>
            <div className="button-row">
              <Link className="btn btn-primary" href="/contact">{th ? "ขอใบเสนอราคา →" : "Get a Proposal →"}</Link>
              <Link className="btn btn-outline-light" href="/services">{th ? "ดูบริการ" : "View Services"}</Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="planet">
              <div className="planet-grid" />
            </div>
            <div className="hero-words">
              <span>{th ? "ไอเดีย" : "IDEAS"}</span><span>{th ? "ออโตเมชัน" : "AUTOMATION"}</span><span>{th ? "ผู้คน" : "PEOPLE"}</span><span>{th ? "วันพรุ่งนี้ที่ดีกว่า" : "A BRIGHTER TOMORROW"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip-wrap">
        <div className="shell">
          <div className="trust-strip">
            <div className="trust-item"><strong>10+</strong><span>{th ? "ปีประสบการณ์ด้านเทคนิค" : "Years Technical Experience"}</span><small>{th ? "ประสบการณ์ด้านเทคนิคที่พิสูจน์ได้" : "Proven technical expertise."}</small></div>
            <div className="trust-item"><Code2/><span>{th ? "ซอฟต์แวร์เฉพาะธุรกิจ" : "Custom Software"}</span><small>{th ? "ออกแบบตามเป้าหมายของคุณ" : "Tailored to your goals."}</small></div>
            <div className="trust-item"><MonitorSmartphone/><span>{th ? "เว็บและโมบาย" : "Web & Mobile"}</span><small>{th ? "แอปพลิเคชันสมัยใหม่" : "Modern applications."}</small></div>
            <div className="trust-item"><Bot/><span>{th ? "AI และ Automation" : "AI & Automation"}</span><small>{th ? "ผลลัพธ์ทางธุรกิจที่วัดได้" : "Practical business impact."}</small></div>
            <div className="trust-item"><Headphones/><span>{th ? "ดูแลต่อเนื่อง" : "Support"}</span><small>{th ? "ดูแลหลังเปิดใช้งาน" : "Beyond launch."}</small></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div><span className="eyebrow">{th ? "บริการของเรา" : "OUR SERVICES"}</span><h2>{th ? "จากไอเดีย สู่ผลลัพธ์จริง" : "From idea to impact."}</h2><p>{th ? "บริการเทคโนโลยีครบวงจร เพื่อให้คุณสร้าง เติบโต และดำเนินธุรกิจได้อย่างมั่นใจ" : "End-to-end technology services to help you build, grow and operate with confidence."}</p></div>
            <Link href="/services">{th ? "ดูบริการทั้งหมด →" : "View All Services →"}</Link>
          </div>
          <div className="card-grid card-grid-3">
            {services.map(({title,titleTh,text,textTh,icon:Icon}) => (
              <article className="service-card" key={title}>
                <div className="icon-disc"><Icon /></div><div><h3>{th ? titleTh : title}</h3><p>{th ? textTh : text}</p></div><span className="card-arrow">→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-head">
            <div><span className="eyebrow">{th ? "โซลูชันและอุตสาหกรรม" : "SOLUTIONS & INDUSTRIES"}</span><h2>{th ? "สร้างจากความต้องการจริงของธุรกิจ" : "Built for real business needs."}</h2></div>
            <Link href="/solutions">{th ? "ดูโซลูชันทั้งหมด →" : "Explore All Solutions →"}</Link>
          </div>
          <div className="solution-grid">
            {solutions.map(({title,titleTh,text,textTh,icon:Icon}) => (
              <article className="solution-card" key={title}>
                <div className="solution-thumb"><Icon /></div>
                <h3>{th ? titleTh : title}</h3><p>{th ? textTh : text}</p><span>→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <span className="eyebrow">{th ? "ขั้นตอนการทำงาน" : "OUR PROCESS"}</span>
          <div className="section-head"><div><h2>{th ? "เส้นทางที่ชัด จากไอเดียสู่การใช้งานจริง" : "A clear path from idea to launch."}</h2></div><p>{th ? "ขั้นตอนชัดเจน ทำงานลื่นไหล และวัดผลได้" : "A proven process. A smoother journey. Real results."}</p></div>
          <div className="process-grid">
            {process.map(({n,title,titleTh,text,textTh,icon:Icon}) => (
              <article className="process-step" key={n}>
                <span className="step-no">{n}</span><div className="icon-disc"><Icon /></div><h3>{th ? titleTh : title}</h3><p>{th ? textTh : text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-head">
            <div><span className="eyebrow">{th ? "ผลงานเด่น" : "FEATURED WORK"}</span><h2>{th ? "เปลี่ยนไอเดียให้เป็นระบบที่ใช้งานได้จริง" : "Turning ideas into real solutions."}</h2></div>
            <Link href="/work">{th ? "ดูผลงานทั้งหมด →" : "View All Projects →"}</Link>
          </div>
          <div className="case-grid">
            {work.map((item, i) => (
              <article className="case-card" key={item.slug}>
                <div className={`case-visual visual-${i+1}`}>
                  <div className="mini-window"><span/><span/><span/><div/></div>
                </div>
                <div className="case-content">
                  <span className="eyebrow">{item.category}</span>
                  <h3>{th ? item.titleTh : item.title}</h3><p>{th ? item.summaryTh : item.summary}</p>
                  <Link href={`/work/${item.slug}`}>{th ? "ดู Case Study →" : "View Case Study →"}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <span className="eyebrow">{th ? "ทำไมต้อง NXENABLE" : "WHY NXENABLE"}</span>
          <h2>{th ? "Technology Partner ที่เติบโตไปกับคุณ" : "A long-term technology partner."}</h2>
          <p className="lead-sm">{th ? "เราเชื่อมความเชี่ยวชาญด้านเทคนิคเข้ากับความเข้าใจเป้าหมายทางธุรกิจ" : "We combine technical excellence with a deep understanding of business goals."}</p>
          <div className="why-grid">
            <div><ShieldCheck/><h3>{th ? "คิดจากธุรกิจเป็นหลัก" : "Business-first thinking"}</h3><p>{th ? "มุ่งผลลัพธ์จริง ไม่ใช่แค่เทคโนโลยี" : "We focus on real outcomes, not just technology."}</p></div>
            <div><TrendingUp/><h3>{th ? "Architecture ที่ขยายได้" : "Scalable architecture"}</h3><p>{th ? "สร้างเพื่อเติบโตไปกับธุรกิจ" : "Built to grow with your business."}</p></div>
            <div><UsersRound/><h3>{th ? "Milestone ที่ชัดเจน" : "Clear milestones"}</h3><p>{th ? "สื่อสารโปร่งใสในทุกขั้นตอน" : "Transparent communication at every stage."}</p></div>
            <div><Clock3/><h3>{th ? "ส่งมอบได้อย่างมั่นใจ" : "Reliable delivery"}</h3><p>{th ? "ตรงเวลา ตรง Scope และอยู่ข้างคุณ" : "On time. On scope. On your side."}</p></div>
            <div><HeartHandshake/><h3>{th ? "ดูแลต่อเนื่อง" : "Ongoing support"}</h3><p>{th ? "เราพร้อมดูแลสิ่งที่จะเกิดขึ้นต่อไป" : "We&apos;re here for what&apos;s next."}</p></div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
