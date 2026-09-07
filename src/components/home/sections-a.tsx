"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { departments } from "@/lib/content";
import { CIcon } from "@/components/site/icon";
import { Link } from "@/lib/router";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading, Container, Eyebrow } from "@/components/site/primitives";
import { SpecialityCard } from "@/components/site/cards";
import { Button } from "@/components/ui/button";

/* ═══════════════════════ HERO ═══════════════════════ */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream pt-[104px] md:pt-[132px]">
      <div className="absolute inset-0 bg-dots opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-secondary blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-gold-soft blur-[90px]"
        aria-hidden
      />
      <Container className="relative grid items-center gap-12 pb-16 pt-10 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-14">
        {/* Copy */}
        <div>
          <Reveal>
            <Eyebrow>Multi Specialty Hospital · Bangalore</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display display-xl font-bold text-foreground">
              Advanced Healthcare.{" "}
              <span className="relative inline-block text-primary">
                Compassionate Care.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-gold"
                  viewBox="0 0 220 10"
                  fill="none"
                  aria-hidden
                  preserveAspectRatio="none"
                >
                  <path d="M2 8C60 2 160 2 218 7" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Expert medical care delivered by experienced specialists using modern technology —
              with your health, comfort and dignity at the centre of everything we do.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/appointments">
                <Button className="h-13 w-full rounded-full px-8 py-3.5 text-[15px] font-semibold shadow-md transition-all hover:shadow-lg sm:w-auto">
                  <CIcon name="calendar-check" className="size-4.5" />
                  Book an Appointment
                </Button>
              </Link>
              <Link to="/specialities">
                <Button
                  variant="outline"
                  className="h-13 w-full rounded-full border-primary/25 px-8 py-3.5 text-[15px] font-semibold text-primary transition-all hover:bg-secondary sm:w-auto"
                >
                  Explore Our Specialities
                  <CIcon name="arrow-right" className="size-4.5" />
                </Button>
              </Link>
            </div>
          </Reveal>
          {/* Trust indicators */}
          <Reveal delay={0.32}>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border/70 pt-7 sm:grid-cols-4">
              {[
                { icon: "stethoscope", label: "Experienced Specialists" },
                { icon: "microscope", label: "Advanced Facilities" },
                { icon: "hand-heart", label: "Patient-Centred Care" },
                { icon: "siren", label: "Emergency Support" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <CIcon name={item.icon} className="size-4.5" />
                  </span>
                  <span className="text-[13px] font-medium leading-tight text-foreground/80">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.15} className="relative">
          <div className="relative">
            <div className="relative aspect-[4/3.2] overflow-hidden rounded-[2rem] shadow-card-hover">
              <Image
                src="/images/hero.jpg"
                alt="Doctor warmly consulting an elderly patient at Durga Multi Specialty Hospital"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating care card */}
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-white/95 p-4 shadow-card backdrop-blur sm:-left-8">
              <span className="grid size-11 place-items-center rounded-xl bg-primary text-white">
                <CIcon name="heart-pulse" className="size-5" />
              </span>
              <div>
                <p className="text-[13px] font-semibold text-foreground">12+ clinical specialities</p>
                <p className="text-xs text-muted-foreground">under one roof</p>
              </div>
            </div>
            <div className="absolute -top-4 right-4 hidden items-center gap-2.5 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:flex">
              <CIcon name="circle-check" className="size-5 text-primary" strokeWidth={2} />
              <p className="text-[13px] font-medium text-foreground">In-house diagnostics &amp; pharmacy</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════ TRUST / CREDIBILITY BAR ═══════════════════════ */
export function TrustBar() {
  const items = [
    { icon: "hospital", value: "12+", label: "Clinical Specialities", note: "coordinated under one roof" },
    { icon: "stethoscope", value: "Senior", label: "Consultant-Led Care", note: "experienced specialists in every department" },
    { icon: "microscope", value: "In-House", label: "Diagnostics & Lab", note: "same-day reports for most tests" },
    { icon: "hand-heart", value: "24×7", label: "Emergency & Pharmacy", note: "ready when minutes matter" },
  ];
  return (
    <section className="border-y border-border/70 bg-white">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.07}>
            <div className="flex items-start gap-3.5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <CIcon name={item.icon} className="size-5" />
              </span>
              <div>
                <p className="font-display text-xl font-bold leading-none text-foreground">
                  {item.value}{" "}
                  <span className="text-sm font-semibold text-primary">{item.label}</span>
                </p>
                <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">{item.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

/* ═══════════════════════ SPECIALITIES PREVIEW ═══════════════════════ */
export function SpecialitiesPreview() {
  return (
    <section id="specialities" className="scroll-mt-24 bg-cream py-20 md:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Centres of Care"
            title="Specialities that cover your whole family"
            description="From everyday fevers to complex cardiac care — twelve coordinated departments, one responsible team, so your care never falls through the cracks."
          />
          <Reveal delay={0.1}>
            <Link to="/specialities">
              <Button variant="outline" className="h-11 shrink-0 rounded-full border-primary/25 px-6 font-semibold text-primary hover:bg-secondary">
                View All Specialities
                <CIcon name="arrow-right" className="size-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departments.slice(0, 8).map((dept, i) => (
            <SpecialityCard key={dept.slug} dept={dept} index={i} />
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Looking for a different speciality?{" "}
            <Link to="/specialities" className="font-semibold text-primary underline-offset-4 hover:underline">
              See all 12 departments
            </Link>{" "}
            or{" "}
            <Link to="/appointments" className="font-semibold text-primary underline-offset-4 hover:underline">
              ask our team
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════ WHY CHOOSE US ═══════════════════════ */
export function WhyChooseUs() {
  const reasons = [
    {
      icon: "stethoscope",
      title: "Experienced Specialists",
      text: "Consultant-led departments where senior doctors personally lead your diagnosis, treatment and follow-up — you are never handed off and forgotten.",
    },
    {
      icon: "microscope",
      title: "Advanced Diagnostic Technology",
      text: "Digital X-ray, ultrasound, CT, ECHO and a fully automated laboratory under one roof — so answers arrive quickly and treatment starts sooner.",
    },
    {
      icon: "heart-handshake",
      title: "Comprehensive, Coordinated Care",
      text: "When your case needs more than one speciality, your doctors talk to each other. One plan, one file, zero running around for you.",
    },
    {
      icon: "building",
      title: "Modern Infrastructure",
      text: "Modular operation theatres, comfortable patient rooms and a calm, healing environment designed around safety and dignity.",
    },
    {
      icon: "siren",
      title: "Emergency Support",
      text: "A dedicated emergency department with ambulance support and priority diagnostics, so urgent care starts the moment you arrive.",
    },
    {
      icon: "hand-heart",
      title: "Patient-Centred Approach",
      text: "Unhurried consultations, transparent cost conversations and plain-language explanations — informed patients heal better.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-teal-deep py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-dots-light" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/60 blur-[130px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-[110px]" aria-hidden />
      <Container className="relative">
        <SectionHeading
          light
          align="center"
          eyebrow="Why Durga Hospital"
          title="The difference is in how we care, not just what we treat"
          description="Six commitments that shape every consultation, every admission and every follow-up at our hospital."
        />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <RevealItem key={r.title} className="h-full">
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.09]">
                <span className="grid size-12 place-items-center rounded-xl bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <CIcon name={r.icon} className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{r.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-teal-soft">{r.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
