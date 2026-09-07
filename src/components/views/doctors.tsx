"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { departments, doctors, getDoctor, getDoctorsByDepartment } from "@/lib/content";
import { CIcon } from "@/components/site/icon";
import { Link, usePageMeta } from "@/lib/router";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { DoctorCard, DoctorAvatar } from "@/components/site/cards";
import { CtaBand } from "@/components/site/cta-band";
import { NotFoundInline } from "./specialities";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ═════════════════ DOCTORS DIRECTORY ═════════════════ */
export function DoctorsView({ presetDept }: { presetDept?: string }) {
  const [activeDept, setActiveDept] = useState<string>(presetDept ?? "all");

  usePageMeta({
    title: `${siteConfig.cityTe} వైద్యులు — సరైన నిపుణుడిని కనుగొనండి`,
    description: `${siteConfig.name}, ${siteConfig.cityTe}లోని కన్సల్టెంట్ ప్రొఫైల్స్: అర్హతలు, స్పెషాలిటీలు, అనుభవం మరియు కన్సల్టేషన్ సమయాలు. ఆన్‌లైన్‌లో, ఫోన్ లేదా వాట్సాప్ ద్వారా అపాయింట్‌మెంట్ బుక్ చేయండి.`,
  });

  const visible = activeDept === "all" ? doctors : getDoctorsByDepartment(activeDept);

  return (
    <>
      <PageHero
        eyebrow="మా వైద్యులు"
        title="మీకు సరిపోయే సరైన వైద్యుడిని కనుగొనండి"
        description="ప్రతి కన్సల్టెంట్ ప్రొఫైల్‌లో అర్హతలు, ప్రత్యేక ఆసక్తులు, మాట్లాడే భాషలు మరియు కన్సల్టేషన్ సమయాలు ఉంటాయి — ధైర్యంగా ఎంచుకోవడానికి."
        breadcrumbs={[{ label: "హోమ్", href: "/" }, { label: "వైద్యులు" }]}
      >
        <div className="flex flex-wrap gap-2">
          <a href={`tel:${siteConfig.phone.tel}`}>
            <Button variant="outline" className="h-11 rounded-full border-white/30 bg-white/5 px-5 font-semibold text-white hover:bg-white/15 hover:text-white">
              <CIcon name="phone-call" className="size-4" />
              ఎంచుకోవడంలో సహాయానికి కాల్
            </Button>
          </a>
          <Link to="/appointments">
            <Button className="h-11 rounded-full bg-gold px-5 font-semibold text-white hover:bg-gold/90">
              <CIcon name="calendar-check" className="size-4" />
              అపాయింట్‌మెంట్ బుక్ చేయండి
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="bg-cream py-14 md:py-16">
        <Container>
          {/* Department filter */}
          <Reveal>
            <div
              role="tablist"
              aria-label="శాఖ ప్రకారం వైద్యులను ఫిల్టర్ చేయండి"
              className="scroll-slim -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
            >
              <button
                role="tab"
                aria-selected={activeDept === "all"}
                onClick={() => setActiveDept("all")}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  activeDept === "all"
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-border bg-white text-foreground/75 hover:border-primary/30 hover:text-primary"
                )}
              >
                అన్ని శాఖలు
              </button>
              {departments.map((d) => (
                <button
                  key={d.slug}
                  role="tab"
                  aria-selected={activeDept === d.slug}
                  onClick={() => setActiveDept(d.slug)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    activeDept === d.slug
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-border bg-white text-foreground/75 hover:border-primary/30 hover:text-primary"
                  )}
                >
                  {d.shortName ?? d.name}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Listing */}
          {visible.length > 0 ? (
            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visible.map((doctor) => (
                <RevealItem key={doctor.slug} className="h-full">
                  <DoctorCard doctor={doctor} />
                </RevealItem>
              ))}
            </RevealGroup>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-white p-10 text-center">
              <CIcon name="user-search" className="mx-auto size-8 text-muted-foreground" />
              <p className="mt-3 font-medium">ఈ శాఖ కోసం ఇంకా కన్సల్టెంట్ ప్రొఫైల్స్ ప్రచురించబడలేదు.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                మా OPD ప్రతిరోజూ నడుస్తుంది — {siteConfig.phone.display}కి కాల్ చేయండి; రిసెప్షన్ డ్యూటీ కన్సల్టెంట్‌ను కలిపిస్తుంది.
              </p>
            </div>
          )}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════════════ DOCTOR PROFILE ═════════════════ */
export function DoctorProfileView({ slug }: { slug: string }) {
  const doctor = getDoctor(slug);
  const dept = doctor ? departments.find((d) => d.slug === doctor.departmentSlug) : undefined;

  usePageMeta({
    title: doctor ? `${doctor.name} — ${doctor.designation}` : "వైద్యుడు కనబడలేదు",
    description: doctor
      ? `${doctor.name}, ${doctor.qualifications}. ${doctor.designation} — ${siteConfig.name}, ${siteConfig.cityTe}. ${doctor.experienceYears}+ ఏళ్ల అనుభవం. అపాయింట్‌మెంట్ బుక్ చేయండి.`
      : undefined,
  });

  if (!doctor) return <NotFoundInline label="వైద్యుడి ప్రొఫైల్" />;

  return (
    <>
      {/* Profile hero */}
      <section className="relative overflow-hidden bg-teal-deep pb-16 pt-[104px] text-white md:pb-20 md:pt-[132px]">
        <div className="absolute inset-0 bg-dots-light" aria-hidden />
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/60 blur-[120px]" aria-hidden />
        <Container className="relative">
          <nav aria-label="బ్రెడ్‌క్రంబ్" className="text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link to="/" className="transition-colors hover:text-gold">హోమ్</Link></li>
              <li aria-hidden><CIcon name="chevron-right" className="size-3.5 text-white/50" /></li>
              <li><Link to="/doctors" className="transition-colors hover:text-gold">వైద్యులు</Link></li>
              <li aria-hidden><CIcon name="chevron-right" className="size-3.5 text-white/50" /></li>
              <li aria-current="page" className="font-medium text-white">{doctor.name}</li>
            </ol>
          </nav>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start">
            {doctor.photo ? (
              <div className="relative size-40 shrink-0 overflow-hidden rounded-3xl md:size-48">
                <img src={doctor.photo} alt={`${doctor.name} — ${doctor.designation}`} className="size-full object-cover" />
              </div>
            ) : (
              <DoctorAvatar
                name={doctor.name}
                className="size-40 shrink-0 rounded-3xl md:size-48"
                textClassName="text-6xl"
              />
            )}
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl font-bold md:text-4xl">{doctor.name}</h1>
              <p className="mt-2 text-lg font-medium text-gold-soft">{doctor.qualifications}</p>
              <p className="mt-1 text-[15px] text-teal-soft">{doctor.designation}</p>
              {dept && (
                <Link
                  to={`/specialities/${dept.slug}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-teal-soft transition-all hover:border-gold hover:text-gold"
                >
                  <CIcon name={dept.icon} className="size-4" />
                  {dept.name} శాఖ
                </Link>
              )}
              <div className="mt-5 flex flex-wrap gap-2 text-[13px]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
                  <CIcon name="award" className="size-3.5 text-gold" />
                  {doctor.experienceYears}+ ఏళ్ల అనుభవం
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
                  <CIcon name="languages" className="size-3.5 text-gold" />
                  {doctor.languages.join(", ")}
                </span>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 md:ml-auto md:w-56">
              <Link to={`/appointments?doctor=${doctor.slug}`}>
                <Button className="h-12 w-full rounded-full bg-gold font-semibold text-white hover:bg-gold/90">
                  <CIcon name="calendar-check" className="size-4" />
                  అపాయింట్‌మెంట్ బుక్ చేయండి
                </Button>
              </Link>
              <a href={`tel:${siteConfig.phone.tel}`}>
                <Button variant="outline" className="h-12 w-full rounded-full border-white/30 bg-white/5 font-semibold text-white hover:bg-white/15 hover:text-white">
                  <CIcon name="phone-call" className="size-4" />
                  రిసెప్షన్‌కు కాల్
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Bio + details */}
      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading eyebrow="ప్రొఫైల్" title={`${doctor.name} గురించి`} />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              {doctor.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <Reveal className="mt-10">
              <h3 className="font-display text-xl font-semibold">నైపుణ్య రంగాలు</h3>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {doctor.expertise.map((e) => (
                  <li key={e} className="flex gap-2.5 text-sm text-foreground/85">
                    <CIcon name="check-circle" className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="font-display text-xl font-semibold">అర్హతలు</h3>
              <p className="mt-3 flex items-start gap-2.5 text-sm text-foreground/85">
                <CIcon name="graduation-cap" className="mt-0.5 size-4 shrink-0 text-gold" />
                {doctor.qualifications}
              </p>
            </Reveal>
          </div>

          {/* Consultation sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="rounded-2xl border border-border bg-cream/70 p-6 shadow-card">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold">
                  <CIcon name="calendar-clock" className="size-5 text-primary" />
                  కన్సల్టేషన్ సమయాలు
                </h3>
                <ul className="mt-4 space-y-3">
                  {doctor.timings.map((slot) => (
                    <li key={slot.days} className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-sm shadow-card">
                      <span className="font-medium text-foreground/85">{slot.days}</span>
                      <span className="font-semibold text-primary">{slot.hours}</span>
                    </li>
                  ))}
                </ul>
                {doctor.consultationNote && (
                  <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">{doctor.consultationNote}</p>
                )}
                <Link to={`/appointments?doctor=${doctor.slug}`} className="mt-5 block">
                  <Button className="h-11 w-full rounded-full font-semibold">స్లాట్ అభ్యర్థించండి</Button>
                </Link>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  పబ్లిక్ సెలవుల్లో సమయాలు మారవచ్చు — దయచేసి రిసెప్షన్ వద్ద ధృవీకరించండి.
                </p>
              </div>
            </Reveal>
          </aside>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
