"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "th";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("nxenable-lang") as Lang | null;
    const initial = saved === "th" || saved === "en" ? saved : "en";
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("nxenable-lang", next);
    document.documentElement.lang = next;
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function T({
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
