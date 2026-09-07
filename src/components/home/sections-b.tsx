"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { doctors } from "@/lib/content";
import { CIcon } from "@/components/site/icon";
import { Link } from "@/lib/router";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading, Container } from "@/components/site/primitives";
import { DoctorCard } from "@/components/site/cards";
import { AppointmentForm } from "@/components/site/forms/appointment-form";
import { Button } from "@/components/ui/button";

/* ═══════════════════════ DOCTORS PREVIEW ═══════════════════════ */
export function DoctorsPreview() {
  return (
    <section id="doctors" className="scroll-mt-24 bg-white py-20 md:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Doctors"
            title="Meet the specialists behind your care"
            description="Senior consultants who take the time to listen, explain and plan your treatment with you — never at you."
          />
          <Reveal delay={0.1}>
            <Link to="/doctors">
              <Button variant="outline" className="h-11 shrink-0 rounded-full border-primary/25 px-6 font-semibold text-primary hover:bg-secondary">
                View All Doctors
                <CIcon name="arrow-right" className="size-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.slice(0, 4).map((doctor, i) => (
            <Reveal key={doctor.slug} delay={Math.min(i * 0.06, 0.3)} className="h-full">
              <DoctorCard doctor={doctor} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════ PATIENT JOURNEY ═══════════════════════ */
export function PatientJourney() {
  const steps = [
    { icon: "user-search", title: "Choose a Speciality", text: "Browse 12+ departments or call our help desk — we will point you to the right one." },
    { icon: "stethoscope", title: "Select a Doctor", text: "Review consultant profiles, qualifications and timings to find your fit." },
    { icon: "calendar-check", title: "Book an Appointment", text: "Online, by phone or on WhatsApp — your slot is confirmed by our care team." },
    { icon: "map-pin", title: "Visit the Hospital", text: "Carry your reports and ID. Our front desk guides you to the right consultation room." },
    { icon: "hand-heart", title: "Receive Care", text: "Unhurried consultation, in-house diagnostics and a clear, written treatment plan." },
    { icon: "book-open", title: "Follow Up", text: "Structured reviews and digital reports keep your recovery on track, long after day one." },
  ];
  return (
    <section className="bg-cream py-20 md:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Your First Visit, Simplified"
          title="The patient journey in six simple steps"
          description="New to our hospital? Here is exactly what to expect — no confusion, no running around."
        />
        <div className="relative mt-16">
          <div className="absolute left-1/2 top-6 hidden h-0.5 w-[82%] -translate-x-1/2 rounded-full bg-gradient-to-r from-secondary via-primary/40 to-secondary lg:block" aria-hidden />
          <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {steps.map((step, i) => (
              <RevealItem key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <span className="relative z-10 grid size-12 place-items-center rounded-full border-4 border-cream bg-primary font-display text-base font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                  <span className="mt-4 grid size-11 place-items-center rounded-xl bg-white text-primary shadow-card">
                    <CIcon name={step.icon} className="size-5" />
                  </span>
                  <h3 className="mt-3 font-display text-[15px] font-semibold leading-snug text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════ APPOINTMENT SECTION ═══════════════════════ */
export function AppointmentSection() {
  return (
    <section id="appointment" className="scroll-mt-24 bg-white py-20 md:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="h-[2px] w-6 rounded-full bg-gold" aria-hidden />
            Book an Appointment
          </span>
          <h2 className="mt-3 font-display display-md font-bold text-foreground">
            Request your visit in under two minutes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Fill in the form and our care team will call you back to confirm the exact date and time.
            Prefer talking? We are one call or WhatsApp message away.
          </p>

          <div className="mt-8 space-y-3.5">
            {[
              { icon: "phone", title: "Call Reception", sub: siteConfig.phone.display, href: `tel:${siteConfig.phone.tel}` },
              { icon: "whatsapp", title: "WhatsApp Us", sub: "Quick enquiries & slot requests", href: `https://wa.me/${siteConfig.whatsapp}`, external: true },
              { icon: "clock", title: "OPD Hours", sub: siteConfig.hours.opd, href: undefined },
            ].map((row) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <CIcon name={row.icon} className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{row.title}</span>
                    <span className="block text-[13px] text-muted-foreground">{row.sub}</span>
                  </span>
                </>
              );
              return row.href ? (
                <a
                  key={row.title}
                  href={row.href}
                  {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-cream/60 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card"
                >
                  {inner}
                </a>
              ) : (
                <div key={row.title} className="flex items-center gap-4 rounded-2xl border border-border bg-cream/60 p-4">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="relative mt-8 hidden aspect-[16/8] overflow-hidden rounded-2xl shadow-card lg:block">
            <Image
              src="/images/consult.jpg"
              alt="Care team member reassuring an elderly patient"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <AppointmentForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════ EMERGENCY STRIP (compact) ═══════════════════════ */
export function EmergencyStrip() {
  return (
    <section className="relative overflow-hidden bg-destructive py-10 text-white">
      <div className="absolute inset-0 bg-dots-light opacity-40" aria-hidden />
      <Container className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 animate-pulse place-items-center rounded-2xl bg-white/15">
            <CIcon name="siren" className="size-6" />
          </span>
          <div>
            <h2 className="font-display text-xl font-bold md:text-2xl">Need urgent medical assistance?</h2>
            <p className="mt-1 text-sm text-white/85">
              Our emergency team responds around the clock. Call now — do not drive yourself.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <a href={`tel:${siteConfig.emergency.tel}`}>
            <Button className="h-12 rounded-full bg-white px-7 font-semibold text-destructive shadow-sm hover:bg-white/90">
              <CIcon name="phone-call" className="size-4" />
              {siteConfig.emergency.display}
            </Button>
          </a>
          <Link to="/emergency">
            <Button
              variant="outline"
              className="h-12 rounded-full border-white/40 bg-transparent px-6 font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              Emergency Info
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
