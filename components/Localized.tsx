"use client";

import { useLanguage } from "./LanguageContext";

export default function Localized({
  en,
  th,
  as: Tag = "span",
  className
}: {
  en: string;
  th: string;
  as?: React.ElementType;
  className?: string;
}) {
  const { lang } = useLanguage();
  return <Tag className={className}>{lang === "th" ? th : en}</Tag>;
}
