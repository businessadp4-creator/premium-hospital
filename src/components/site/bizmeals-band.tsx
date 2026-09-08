"use client";

import { useLang } from "@/lib/i18n";
import { CIcon } from "./icon";

/**
 * BizMeals.in partner band — slim, premium pre-footer credit + ad.
 * BizMeals is the digital marketing & web design partner behind this site
 * (facts from bizmeals.in: end-to-end digital marketing, web design, SEO,
 * lead generation; Bangalore-based growth execution partner).
 */
export function BizMealsBand() {
  const { t } = useLang();

  return (
    <aside
      aria-label={t(
        "BizMeals.in — డిజిటల్ మార్కెటింగ్ & వెబ్ డిజైన్ పార్ట్‌నర్",
        "BizMeals.in — digital marketing & web design partner"
      )}
      className="relative overflow-hidden border-t border-gold/30 bg-teal-deep text-white"
    >
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-gold/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-5 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-start gap-4">
          <span
            aria-hidden
            className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/10 font-display text-xl font-extrabold text-gold shadow-inner"
          >
            B
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-soft">
              {t("ఈ వెబ్‌సైట్ రూపొందించి, మార్కెట్ చేసింది", "This website is designed & marketed by")}
            </p>
            <p className="mt-1 font-display text-xl font-bold leading-tight tracking-tight">
              BizMeals<span className="text-gold">.in</span>
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-white/75">
              {t(
                "ఎండ్-టు-ఎండ్ డిజిటల్ మార్కెటింగ్ • వెబ్ డిజైనింగ్ • SEO • లీడ్ జనరేషన్",
                "End-to-end digital marketing • Web designing • SEO • Lead generation"
              )}
            </p>
          </div>
        </div>

        <a
          href="https://bizmeals.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-amber-700 hover:shadow-md"
        >
          {t("మీ బిజినెస్‌ని ఆన్‌లైన్‌లో పెంచుకోండి", "Grow your business online")}
          <CIcon name="arrow-up-right" className="size-4" />
        </a>
      </div>
    </aside>
  );
}
