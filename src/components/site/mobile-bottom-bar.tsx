"use client";

import { siteConfig } from "@/lib/site-config";
import { Link } from "@/lib/router";
import { useLang } from "@/lib/i18n";
import { CIcon } from "./icon";
import { cn } from "@/lib/utils";

/**
 * Mobile sticky bottom conversion bar — Call | WhatsApp | Book Appointment.
 * Hidden on ≥md where header CTAs take over. Respects iOS safe areas.
 */
export function MobileBottomBar() {
  const { t, lang } = useLang();
  return (
    <nav
      aria-label={t("త్వరిత చర్యలు", "Quick actions")}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-white/95 backdrop-blur-lg md:hidden",
        "pb-[env(safe-area-inset-bottom)]"
      )}
    >
      <a
        href={`tel:${siteConfig.phone.tel}`}
        className="flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-foreground/80 transition-colors active:bg-muted"
      >
        <CIcon name="phone" className="size-5 text-primary" />
        {t("కాల్", "Call")}
      </a>
      <a
        href={whatsappSafe(lang === "te")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-foreground/80 transition-colors active:bg-muted"
      >
        <CIcon name="whatsapp" className="size-5 text-[#25a05a]" />
        WhatsApp
      </a>
      <Link
        to="/appointments"
        className="flex h-14 flex-col items-center justify-center gap-0.5 bg-primary text-[11px] font-semibold text-white transition-colors active:bg-teal-deep"
      >
        <CIcon name="calendar-check" className="size-5" />
        {t("బుక్", "Book")}
      </Link>
    </nav>
  );
}

function whatsappSafe(isTe: boolean) {
  const text = isTe
    ? "నమస్కారం, దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్‌లో అపాయింట్‌మెంట్ గురించి విచారించాలనుకుంటున్నాను."
    : "Hello, I would like to enquire about an appointment at Durga Multi Specialty Hospital.";
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
