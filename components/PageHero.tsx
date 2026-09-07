"use client";

import { useLanguage } from "./LanguageContext";

export default function PageHero({
  eyebrow,
  title,
  description,
  eyebrowTh,
  titleTh,
  descriptionTh
}: {
  eyebrow: string;
  title: string;
  description: string;
  eyebrowTh?: string;
  titleTh?: string;
  descriptionTh?: string;
}) {
  const { lang } = useLanguage();
  const th = lang === "th";

  return (
    <section className="page-hero">
      <div className="shell">
        <span className="eyebrow">{th && eyebrowTh ? eyebrowTh : eyebrow}</span>
        <h1>{th && titleTh ? titleTh : title}</h1>
        <p className="lead">{th && descriptionTh ? descriptionTh : description}</p>
      </div>
    </section>
  );
}
