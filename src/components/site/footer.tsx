"use client";

import { siteConfig } from "@/lib/site-config";
import { fullAddress, whatsappUrl } from "@/lib/site-config";
import { Link } from "@/lib/router";
import { CIcon } from "./icon";
import { Logo } from "./header";
import { departments } from "@/lib/content";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Health Packages", href: "/health-packages" },
  { label: "Health Library", href: "/blog" },
];

const patientResources = [
  { label: "Book an Appointment", href: "/appointments" },
  { label: "Patient Information", href: "/patient-information" },
  { label: "Emergency Care", href: "/emergency" },
  { label: "Contact & Directions", href: "/contact" },
];

const socials = [
  { name: "Facebook", href: siteConfig.social.facebook, icon: "users" },
  { name: "Instagram", href: siteConfig.social.instagram, icon: "sparkles" },
  { name: "YouTube", href: siteConfig.social.youtube, icon: "activity" },
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: "badge-check" },
];

export function Footer() {
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
              <p className="font-display text-lg font-semibold">Medical emergency? We are here.</p>
              <p className="text-sm text-teal-soft">
                Call our emergency line for immediate assistance and ambulance support.
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
            A multi-specialty hospital in {siteConfig.address.city} combining experienced specialists,
            modern diagnostics and a patient-first approach — so every family in our care feels
            informed, supported and safe.
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
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-teal-soft transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Specialities</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {departments.slice(0, 8).map((d) => (
              <li key={d.slug}>
                <Link to={`/specialities/${d.slug}`} className="text-teal-soft transition-colors hover:text-gold">
                  {d.shortName ?? d.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/specialities" className="font-medium text-gold transition-colors hover:text-white">
                View all specialities →
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Patients</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {patientResources.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-teal-soft transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/privacy-policy" className="text-teal-soft transition-colors hover:text-gold">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-teal-soft transition-colors hover:text-gold">Terms &amp; Conditions</Link></li>
            <li><Link to="/medical-disclaimer" className="text-teal-soft transition-colors hover:text-gold">Medical Disclaimer</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
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
                Emergency: {siteConfig.emergency.display}
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
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                WhatsApp enquiry
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-teal-soft sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}, {siteConfig.address.city}. All rights reserved.
        </p>
        <p className="max-w-xl text-[11px] leading-relaxed text-teal-soft/70">
          The information on this website is for general awareness only and is not a substitute for
          professional medical advice, diagnosis or treatment. In an emergency, call our emergency
          line or the nearest emergency service.
        </p>
      </div>
    </footer>
  );
}
