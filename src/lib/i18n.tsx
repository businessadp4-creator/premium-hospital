"use client";

/**
 * ============================================================================
 * LIGHTWEIGHT BILINGUAL RUNTIME (తెలుగు ⇄ English)
 * ============================================================================
 * - `lang` defaults to "te" on BOTH server and client first render, so the
 *   hydration pass always matches (same principle as the hash router).
 * - The saved preference is restored from localStorage after mount.
 * - `t(te, en)` picks the string for the active language — used for inline
 *   UI copy. Long-form content comes from `content` (SiteContent packs).
 * ============================================================================
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { contentTe, type SiteContent } from "@/lib/content";
import { contentEn } from "@/lib/content/en";

export type Lang = "te" | "en";

const STORAGE_KEY = "dmh-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** Pick the string for the active language (inline UI copy helper). */
  t: (te: string, en: string) => string;
  /** Active long-form content pack (departments, doctors, blog…). */
  content: SiteContent;
  /** Locale for toLocaleDateString — te-IN | en-IN. */
  dateLocale: string;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  // Hydration-safe default: identical on the server and the first client render.
  const [lang, setLangState] = useState<Lang>("te");

  // Restore the visitor's saved choice after hydration.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time post-hydration restore; must NOT read localStorage during the hydration render (that would re-create the SSR/CSR mismatch)
      if (saved === "te" || saved === "en") setLangState(saved);
    } catch {
      /* private mode — ignore */
    }
  }, []);

  // Keep <html lang> in sync (a11y + SEO) and persist the choice.
  useEffect(() => {
    document.documentElement.lang = lang === "te" ? "te-IN" : "en-IN";
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(() => setLangState((prev) => (prev === "te" ? "en" : "te")), []);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: (te, en) => (lang === "te" ? te : en),
      content: lang === "te" ? contentTe : contentEn,
      dateLocale: lang === "te" ? "te-IN" : "en-IN",
    }),
    [lang, setLang, toggleLang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LangProvider>");
  return ctx;
}
