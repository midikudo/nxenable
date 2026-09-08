"use client";

import { useLanguage } from "./LanguageContext";

export default function Localized({
  en,
  th,
  as: Tag = "span",
  className
}: {
  en: React.ReactNode;
  th: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}) {
  const { lang } = useLanguage();
  return <Tag className={className}>{lang === "th" ? th : en}</Tag>;
}
