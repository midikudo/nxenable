"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useLanguage } from "./LanguageContext";

const nav = [
  { en: "Solutions", th: "โซลูชัน", href: "/solutions" },
  { en: "Services", th: "บริการ", href: "/services" },
  { en: "Industries", th: "อุตสาหกรรม", href: "/industries" },
  { en: "Process", th: "ขั้นตอน", href: "/process" },
  { en: "Work", th: "ผลงาน", href: "/work" },
  { en: "About", th: "เกี่ยวกับเรา", href: "/about" }
] as const;

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "nav-link active" : "nav-link"}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {lang === "th" ? item.th : item.en}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" aria-label="Language selector">
            <button
              type="button"
              className={lang === "th" ? "active" : ""}
              onClick={() => setLang("th")}
              aria-pressed={lang === "th"}
            >
              ไทย
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <Link
            className={`btn btn-primary btn-sm header-contact${isActive("/contact") ? " active" : ""}`}
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            {lang === "th" ? "คุยโปรเจกต์กับเรา →" : "Book a Discovery Call →"}
          </Link>
        </div>
      </div>
    </header>
  );
}
