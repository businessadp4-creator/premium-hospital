"use client";

import { siteConfig, fullAddress, mapEmbedUrl, mapsDirectionsUrl, whatsappUrl } from "@/lib/site-config";
import {
  admissionSteps,
  admissionChecklist,
  visitingInfo,
  patientRights,
  patientResponsibilities,
  patientFaqs,
  emergencySymptoms,
  emergencyDos,
  emergencyDonts,
} from "@/lib/content";
import { CIcon } from "@/components/site/icon";
import { Link, usePageMeta } from "@/lib/router";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { FaqSection } from "@/components/home/sections-c";
import { ContactForm } from "@/components/site/forms/contact-form";
import { CtaBand } from "@/components/site/cta-band";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ═════════════════ PATIENT INFORMATION ═════════════════ */
export function PatientInfoView() {
  usePageMeta({
    title: "Patient Information — Admissions, Insurance, Visiting Hours & FAQ",
    description: `Everything patients need before visiting ${siteConfig.name}: admission process, documents checklist, insurance & TPA support, visiting hours, patient rights and answers to common questions.`,
  });

  return (
    <>
      <PageHero
        eyebrow="Patient Information"
        title="Everything you need, before you arrive"
        description="Admissions, documents, insurance, visiting hours and patient rights — explained plainly, so your visit is smooth from the first step."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Patient Information" }]}
      />

      {/* Admission journey */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Admissions"
            title="How admission works"
            description="Five steps from your doctor's advice to a comfortable discharge."
          />
          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {admissionSteps.map((step, i) => (
              <RevealItem key={step.title} className="h-full">
                <div className="relative h-full rounded-2xl border border-border bg-cream/60 p-5">
                  <span className="absolute -top-3.5 left-5 grid size-7 place-items-center rounded-full bg-primary font-display text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-[15px] font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Checklist + visiting */}
      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-card">
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                <CIcon name="clipboard" className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">What to bring</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A short checklist that makes admissions and consultations faster:
              </p>
              <ul className="mt-5 space-y-3">
                {admissionChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <CIcon name="check-circle" className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
                <span className="grid size-12 place-items-center rounded-2xl bg-gold-soft text-gold">
                  <CIcon name="clock" className="size-6" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold">Visiting hours</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="rounded-xl bg-cream/70 px-4 py-3">
                    <span className="font-semibold text-foreground">General wards: </span>
                    <span className="text-muted-foreground">{visitingInfo.general}</span>
                  </li>
                  <li className="rounded-xl bg-cream/70 px-4 py-3">
                    <span className="font-semibold text-foreground">ICU: </span>
                    <span className="text-muted-foreground">{visitingInfo.icu}</span>
                  </li>
                  <li className="rounded-xl bg-cream/70 px-4 py-3">
                    <span className="font-semibold text-foreground">Attendants: </span>
                    <span className="text-muted-foreground">{visitingInfo.attendants}</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-gold/40 bg-gold-soft p-8">
                <h2 className="font-display text-xl font-bold text-accent-foreground">Insurance & billing</h2>
                <p className="mt-3 text-sm leading-relaxed text-accent-foreground/85">
                  We support major health insurers and TPAs for planned and emergency admissions.
                  For cashless treatment, share your policy details at the admission desk at least
                  48 hours before a planned hospitalisation so pre-authorisation can begin. The
                  billing desk will always give you an itemised estimate before treatment and a
                  detailed bill at discharge.
                </p>
                <p className="mt-3 text-xs italic text-accent-foreground/70">
                  [PLACEHOLDER — confirm current insurer/TPA panel and display the list here.]
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Rights & responsibilities */}
      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-cream/60 p-8">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
                <CIcon name="badge-check" className="size-6 text-primary" />
                Your rights as a patient
              </h2>
              <ul className="mt-5 space-y-3">
                {patientRights.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <CIcon name="circle-check" className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-cream/60 p-8">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
                <CIcon name="hand-heart" className="size-6 text-gold" />
                What we ask of you
              </h2>
              <ul className="mt-5 space-y-3">
                {patientResponsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <CIcon name="circle-check" className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <FaqSection items={patientFaqs} />
      <CtaBand />
    </>
  );
}

/* ═════════════════ APPOINTMENTS PAGE ═════════════════ */
export function AppointmentsView({
  presetDoctorSlug,
  presetDepartmentSlug,
  presetPackageSlug,
}: {
  presetDoctorSlug?: string;
  presetDepartmentSlug?: string;
  presetPackageSlug?: string;
}) {
  usePageMeta({
    title: `Book an Appointment — ${siteConfig.city}`,
    description: `Request an appointment at ${siteConfig.name}, ${siteConfig.city}. Choose your department and doctor, pick a date and time — our care team confirms your slot by phone. Also book by phone or WhatsApp.`,
  });

  return (
    <>
      <PageHero
        eyebrow="Book an Appointment"
        title="Choose your specialist. We'll do the rest."
        description="Submit the form below and our care team will call you to confirm the exact slot. Prefer to talk now? Call reception or message us on WhatsApp."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Appointments" }]}
      />

      <section className="bg-cream py-16 md:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-white p-6 shadow-card md:p-8">
              <AppointmentFormWrapper
                presetDoctorSlug={presetDoctorSlug}
                presetDepartmentSlug={presetDepartmentSlug}
                presetPackageSlug={presetPackageSlug}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold">Other ways to book</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href={`tel:${siteConfig.phone.tel}`} className="flex items-center gap-3.5 rounded-xl bg-cream/70 p-4 transition-all hover:bg-secondary/60">
                    <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                      <CIcon name="phone" className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">Call Reception</span>
                      <span className="block text-[13px] text-muted-foreground">{siteConfig.phone.display} · {siteConfig.hours.opd}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 rounded-xl bg-cream/70 p-4 transition-all hover:bg-secondary/60">
                    <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                      <CIcon name="whatsapp" className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">WhatsApp</span>
                      <span className="block text-[13px] text-muted-foreground">Send your preferred date & department</span>
                    </span>
                  </a>
                </li>
                <li>
                  <Link to="/emergency" className="flex items-center gap-3.5 rounded-xl bg-destructive/5 p-4 transition-all hover:bg-destructive/10">
                    <span className="grid size-10 place-items-center rounded-xl bg-destructive/10 text-destructive">
                      <CIcon name="siren" className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-destructive">Emergency?</span>
                      <span className="block text-[13px] text-muted-foreground">Do not use this form — call {siteConfig.emergency.display}</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold">Good to know</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "Carry previous prescriptions, reports and your photo ID",
                  "Arrive 15 minutes early to complete registration",
                  "Mention all current medicines to your doctor",
                  "Timings follow the OPD schedule — walk-ins are accommodated between booked slots",
                ].map((tip) => (
                  <li key={tip} className="flex gap-2.5">
                    <CIcon name="chevron-right" className="mt-0.5 size-4 shrink-0 text-gold" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

/* Wrapper keeps the form import lazy-free and simple */
import { AppointmentForm } from "@/components/site/forms/appointment-form";
function AppointmentFormWrapper(props: {
  presetDoctorSlug?: string;
  presetDepartmentSlug?: string;
  presetPackageSlug?: string;
}) {
  return (
    <AppointmentForm
      presetDoctorSlug={props.presetDoctorSlug}
      presetDepartmentSlug={props.presetDepartmentSlug}
      presetPackageSlug={props.presetPackageSlug}
    />
  );
}

/* ═════════════════ CONTACT PAGE ═════════════════ */
export function ContactView() {
  usePageMeta({
    title: `Contact & Directions — ${siteConfig.name}, ${siteConfig.city}`,
    description: `Contact ${siteConfig.name}: address ${fullAddress}, phone ${siteConfig.phone.display}, emergency line, email and Google Maps directions. Send us a message and we will respond within one working day.`,
  });

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're listening"
        description="Questions about appointments, reports, billing or anything else — reach us however you prefer. For medical emergencies, always call the emergency line directly."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {[
              { icon: "map-pin", title: "Visit Us", lines: [siteConfig.name, fullAddress] },
              { icon: "phone", title: "Reception", lines: [siteConfig.phone.display, siteConfig.hours.opd], href: `tel:${siteConfig.phone.tel}` },
              { icon: "siren", title: "Emergency & Ambulance", lines: [siteConfig.emergency.display, "Call first — we prepare for your arrival"], href: `tel:${siteConfig.emergency.tel}` },
              { icon: "mail", title: "Email", lines: [siteConfig.email, "We respond within one working day"], href: `mailto:${siteConfig.email}` },
            ].map((row, i) => (
              <Reveal key={row.title} delay={i * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-border bg-cream/60 p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <CIcon name={row.icon} className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{row.title}</p>
                    {row.href ? (
                      <a href={row.href} className="mt-1 block font-medium text-foreground transition-colors hover:text-primary">
                        {row.lines[0]}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-foreground">{row.lines[0]}</p>
                    )}
                    <p className="text-[13px] text-muted-foreground">{row.lines[1]}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="h-11 rounded-full px-6 font-semibold">
                    <CIcon name="navigation" className="size-4" /> Get Directions
                  </Button>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-11 rounded-full border-primary/25 px-6 font-semibold text-primary hover:bg-secondary">
                    <CIcon name="whatsapp" className="size-4" /> WhatsApp
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-cream/50 p-6 shadow-card md:p-8">
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                For non-urgent questions. We typically reply within one working day.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Map */}
      <section className="bg-cream pb-20">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title={`Map — ${siteConfig.name}`}
                src={mapEmbedUrl}
                className="h-[380px] w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

/* ═════════════════ EMERGENCY PAGE ═════════════════ */
export function EmergencyView() {
  usePageMeta({
    title: `Emergency Care — Call ${siteConfig.emergency.display}`,
    description: `Emergency department at ${siteConfig.name}, ${siteConfig.city}. Call ${siteConfig.emergency.display} for ambulance support. Know the warning signs that need immediate care — chest pain, stroke (FAST), severe bleeding, breathing difficulty and more.`,
  });

  return (
    <>
      {/* Emergency hero — deliberately high-contrast, calm, action-first */}
      <section className="relative overflow-hidden bg-teal-deep pb-16 pt-[104px] text-white md:pb-20 md:pt-[132px]">
        <div className="absolute inset-0 bg-dots-light" aria-hidden />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-destructive/30 blur-[130px]" aria-hidden />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link to="/" className="transition-colors hover:text-gold">Home</Link></li>
              <li aria-hidden><CIcon name="chevron-right" className="size-3.5 text-white/50" /></li>
              <li aria-current="page" className="font-medium text-white">Emergency Care</li>
            </ol>
          </nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-destructive px-4 py-1.5 text-[13px] font-semibold uppercase tracking-wider">
                <span className="size-2 animate-pulse rounded-full bg-white" aria-hidden />
                Emergency
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
                In an emergency, minutes decide outcomes.
              </h1>
              <p className="mt-4 max-w-lg leading-relaxed text-teal-soft">
                Call first — our emergency team starts preparing while you travel. Do not drive
                yourself. Bring previous medical reports and a list of current medicines if quickly
                available.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${siteConfig.emergency.tel}`}>
                  <Button className="h-14 w-full rounded-2xl bg-destructive px-8 text-lg font-bold shadow-md hover:bg-destructive/90 sm:w-auto">
                    <CIcon name="phone-call" className="size-5" />
                    Call {siteConfig.emergency.display}
                  </Button>
                </a>
                <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-14 w-full rounded-2xl border-white/30 bg-white/5 px-8 font-semibold text-white hover:bg-white/15 hover:text-white sm:w-auto">
                    <CIcon name="navigation" className="size-5" />
                    Get Directions
                  </Button>
                </a>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-teal-soft/80">
                [PLACEHOLDER — publish the 24×7 emergency line only after verifying the hospital&apos;s
                emergency rota and ambulance availability.]
              </p>
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl shadow-card-hover">
                <Image
                  src="/images/emergency.jpg"
                  alt="Emergency department entrance with ambulance bay"
                  width={768}
                  height={440}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Warning signs */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Know the Signs"
            title="Come to the emergency department immediately if you see"
            description="This list covers the most common time-critical emergencies. When in doubt, call us — describing symptoms takes one minute and can prevent a tragedy."
          />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emergencySymptoms.map((s) => (
              <RevealItem key={s.title} className="h-full">
                <div className="h-full rounded-2xl border border-destructive/20 bg-destructive/[0.04] p-5">
                  <h3 className="flex items-center gap-2.5 font-display text-[15.5px] font-semibold text-destructive">
                    <CIcon name="siren" className="size-4.5 shrink-0" />
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/80">{s.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Do / Don't */}
      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-primary/25 bg-white p-8 shadow-card">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-foreground">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <CIcon name="check" className="size-5" strokeWidth={2.5} />
                </span>
                Do this now
              </h2>
              <ul className="mt-6 space-y-3.5">
                {emergencyDos.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <CIcon name="check-circle" className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-destructive/25 bg-white p-8 shadow-card">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-foreground">
                <span className="grid size-10 place-items-center rounded-xl bg-destructive/10 text-destructive">
                  <CIcon name="x" className="size-5" strokeWidth={2.5} />
                </span>
                Avoid these mistakes
              </h2>
              <ul className="mt-6 space-y-3.5">
                {emergencyDonts.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <CIcon name="x" className="mt-0.5 size-4 shrink-0 text-destructive" strokeWidth={2.5} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand variant="book" />
    </>
  );
}

/* Image import needed in emergency view */
import Image from "next/image";

/* Small FAQ accordion reused from sections-c via patientFaqs below */
export function PatientFaqAccordion() {
  return (
    <Accordion type="single" collapsible>
      {patientFaqs.map((f, i) => (
        <AccordionItem key={i} value={`pf-${i}`}>
          <AccordionTrigger>{f.question}</AccordionTrigger>
          <AccordionContent>{f.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
