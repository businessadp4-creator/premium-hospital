"use client";

import { siteConfig } from "@/lib/site-config";
import { fullAddress, whatsappUrl, whatsappUrlEn } from "@/lib/site-config";
import { Link } from "@/lib/router";
import { useLang } from "@/lib/i18n";
import { CIcon } from "./icon";
import { Logo } from "./header";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { te: "మా గురించి", en: "About Us", href: "/about" },
  { te: "వైద్యులు", en: "Doctors", href: "/doctors" },
  { te: "సేవలు", en: "Services", href: "/services" },
  { te: "సౌకర్యాలు", en: "Facilities", href: "/facilities" },
  { te: "హెల్త్ ప్యాకేజీలు", en: "Health Packages", href: "/health-packages" },
  { te: "ఆరోగ్య లైబ్రరీ", en: "Health Library", href: "/blog" },
];

const patientResources = [
  { te: "అపాయింట్‌మెంట్ బుక్ చేయండి", en: "Book an appointment", href: "/appointments" },
  { te: "రోగి సమాచారం", en: "Patient information", href: "/patient-information" },
  { te: "అత్యవసర సంరక్షణ", en: "Emergency care", href: "/emergency" },
  { te: "సంప్రదించండి & దారి", en: "Contact & directions", href: "/contact" },
];

const socials = [
  { name: "Facebook", href: siteConfig.social.facebook, icon: "users" },
  { name: "Instagram", href: siteConfig.social.instagram, icon: "sparkles" },
  { name: "YouTube", href: siteConfig.social.youtube, icon: "activity" },
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: "badge-check" },
];

export function Footer() {
  const { t, content, lang } = useLang();
  const waUrl = lang === "te" ? whatsappUrl : whatsappUrlEn;

  return (
    <footer className="mt-auto bg-teal-deep text-white">
      {/* Emergency strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10">
              <CIcon name="siren" className="size-5 text-gold" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">
                {t("వైద్య అత్యవసరమా? మేము సిద్ధం.", "Medical emergency? We are ready.")}
              </p>
              <p className="text-sm text-teal-soft">
                {t(
                  "తక్షణ సహాయం & అంబులెన్స్ కోసం మా అత్యవసర లైన్‌కు కాల్ చేయండి.",
                  "Call our emergency line for immediate help & ambulance support."
                )}
              </p>
            </div>
          </div>
          <a
            href={`tel:${siteConfig.emergency.tel}`}
            className="inline-flex items-center gap-2 rounded-full bg-destructive px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-destructive/90 hover:shadow-md"
          >
            <CIcon name="phone-call" className="size-4" />
            {siteConfig.emergency.display}
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-teal-soft">
            {t(
              `${siteConfig.cityTe}లోని మల్టీ-స్పెషాలిటీ ఆసుపత్రి — అనుభవజ్ఞులైన నిపుణులు, ఆధునిక పరీక్షలు, పేషెంట్-ఫస్ట్ సంరక్షణ ఒకే చోట. మా కేర్‌లో ఉన్న ప్రతి కుటుంబం సమాచారంతో, ధైర్యంతో, సేఫ్‌గా ఉండాలి.`,
              `A multi-speciality hospital in ${siteConfig.address.city} — experienced specialists, advanced diagnostics and patient-first care under one roof. Every family in our care deserves to feel informed, confident and safe.`
            )}
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid size-9 place-items-center rounded-full border border-white/15 text-teal-soft transition-all hover:border-gold hover:text-gold"
              >
                <CIcon name={s.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold tracking-wide text-white">{t("త్వరిత లింకులు", "Quick links")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-teal-soft transition-colors hover:text-gold">
                  {t(l.te, l.en)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold tracking-wide text-white">{t("స్పెషాలిటీలు", "Specialities")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {content.departments.slice(0, 8).map((d) => (
              <li key={d.slug}>
                <Link to={`/specialities/${d.slug}`} className="text-teal-soft transition-colors hover:text-gold">
                  {d.shortName ?? d.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/specialities" className="font-medium text-gold transition-colors hover:text-white">
                {t("అన్ని స్పెషాలిటీలు చూడండి →", "View all specialities →")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold tracking-wide text-white">{t("రోగుల కోసం", "For patients")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {patientResources.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-teal-soft transition-colors hover:text-gold">
                  {t(l.te, l.en)}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-sm font-semibold tracking-wide text-white">{t("చట్టపరమైనవి", "Legal")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/privacy-policy" className="text-teal-soft transition-colors hover:text-gold">{t("గోప్యతా విధానం", "Privacy policy")}</Link></li>
            <li><Link to="/terms" className="text-teal-soft transition-colors hover:text-gold">{t("నిబంధనలు & షరతులు", "Terms & conditions")}</Link></li>
            <li><Link to="/medical-disclaimer" className="text-teal-soft transition-colors hover:text-gold">{t("వైద్య నిరాకరణ", "Medical disclaimer")}</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold tracking-wide text-white">{t("సంప్రదింపు", "Contact")}</h3>
          <ul className="mt-4 space-y-3.5 text-sm text-teal-soft">
            <li className="flex gap-2.5">
              <CIcon name="map-pin" className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{fullAddress}</span>
            </li>
            <li className="flex gap-2.5">
              <CIcon name="phone" className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`tel:${siteConfig.phone.tel}`} className="transition-colors hover:text-gold">
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex gap-2.5">
              <CIcon name="siren" className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`tel:${siteConfig.emergency.tel}`} className="font-medium text-white transition-colors hover:text-gold">
                {t("అత్యవసరం", "Emergency")}: {siteConfig.emergency.display}
              </a>
            </li>
            <li className="flex gap-2.5">
              <CIcon name="mail" className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <CIcon name="whatsapp" className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                {t("వాట్సాప్ విచారణ", "WhatsApp enquiry")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-teal-soft sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}, {siteConfig.cityTe}. {t("అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.", "All rights reserved.")}
        </p>
        <div className="max-w-xl space-y-2">
          <p className="text-[11px] leading-relaxed text-teal-soft/70">
            {t(
              "ఈ వెబ్‌సైట్‌లోని సమాచారం సాధారణ అవగాహన కోసం మాత్రమే — వృత్తిపరమైన వైద్య సలహా, రోగనిర్ధారణ లేదా చికిత్సకు ప్రత్యామ్నాయం కాదు. అత్యవసర పరిస్థితిలో మా అత్యవసర లైన్‌ను లేదా సమీప అత్యవసర సేవలను సంప్రదించండి.",
              "Information on this website is for general awareness only — it is not a substitute for professional medical advice, diagnosis or treatment. In an emergency, call our emergency line or your nearest emergency services."
            )}
          </p>
          <p className="text-[11px] text-teal-soft/60">
            {t("వెబ్ డిజైన్ & డిజిటల్ మార్కెటింగ్:", "Web design & digital marketing:")}{' '}
            <a href="https://bizmeals.in" target="_blank" rel="noopener noreferrer" className="font-medium text-gold/90 transition-colors hover:text-gold">
              BizMeals.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
