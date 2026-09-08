"use client";

import { siteConfig } from "@/lib/site-config";
import { Link } from "@/lib/router";
import { useLang } from "@/lib/i18n";
import { CIcon } from "./icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Reusable conversion band — variant A: booking; variant B: emergency */
export function CtaBand({
  variant = "book",
  className,
}: {
  variant?: "book" | "emergency";
  className?: string;
}) {
  const { t } = useLang();

  if (variant === "emergency") {
    return (
      <section className={cn("px-4 py-14 sm:px-6 lg:px-8", className)}>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-teal-deep shadow-card">
          <div className="absolute inset-0 bg-dots-light" aria-hidden />
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-destructive/25 blur-[100px]" aria-hidden />
          <div className="relative flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                {t("తక్షణ వైద్య సహాయం కావాలా?", "Need urgent medical help?")}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-teal-soft">
                {t(
                  "మా అత్యవసర టీమ్‌ని డైరెక్ట్‌గా కాల్ చేయండి — తొందరుగా గుర్తిస్తే ప్రాణాలు కాపాడవచ్చు. ఛాతీ నొప్పి, స్ట్రోక్ లక్షణాలు లేదా ఎక్కువ రక్తస్రావం ఉంటే వెంటనే కాల్ చేయండి.",
                  "Call our emergency team directly — early recognition saves lives. For chest pain, stroke symptoms or heavy bleeding, call immediately."
                )}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a href={`tel:${siteConfig.emergency.tel}`}>
                <Button className="h-12 w-full rounded-full bg-destructive px-7 text-[15px] font-semibold shadow-sm hover:bg-destructive/90 sm:w-auto">
                  <CIcon name="phone-call" className="size-4" />
                  {t("అత్యవసర కాల్", "Emergency call")}
                </Button>
              </a>
              <Link to="/emergency">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-full border-white/30 bg-white/5 px-7 text-[15px] font-semibold text-white hover:bg-white/15 hover:text-white sm:w-auto"
                >
                  <CIcon name="navigation" className="size-4" />
                  {t("అత్యవసర సమాచారం", "Emergency info")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("px-4 py-14 sm:px-6 lg:px-8", className)}>
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-teal-deep shadow-card">
        <div className="absolute inset-0 bg-dots-light" aria-hidden />
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gold/15 blur-[100px]" aria-hidden />
        <div className="relative flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              {t(
                "మీ ఆరోగ్యం మీ టైం వెచ్చించడానికి వర్తిస్తుంది.",
                "Your health deserves an unhurried consultation."
              )}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-teal-soft">
              {t(
                "మా నిపుణులతో అపాయింట్‌మెంట్ బుక్ చేయండి — ఆన్‌లైన్, ఫోన్ లేదా వాట్సాప్‌లో. మీకు అనువైన తొలి స్లాట్ మేము చూస్తాము.",
                "Book with our specialists — online, by phone or on WhatsApp. We'll find the earliest slot that works for you."
              )}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link to="/appointments">
              <Button className="h-12 w-full rounded-full bg-gold px-7 text-[15px] font-semibold text-white shadow-sm hover:bg-gold/90 sm:w-auto">
                <CIcon name="calendar-check" className="size-4" />
                {t("అపాయింట్‌మెంట్ బుక్ చేయండి", "Book an appointment")}
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone.tel}`}>
              <Button
                variant="outline"
                className="h-12 w-full rounded-full border-white/30 bg-white/5 px-7 text-[15px] font-semibold text-white hover:bg-white/15 hover:text-white sm:w-auto"
              >
                <CIcon name="phone-call" className="size-4" />
                {siteConfig.phone.display}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
