"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { serviceGroups, facilities, healthPackages } from "@/lib/content";
import { CIcon } from "@/components/site/icon";
import { Link, usePageMeta } from "@/lib/router";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { FacilityCard, PackageCard } from "@/components/site/cards";
import { CtaBand } from "@/components/site/cta-band";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ═════════════════ SERVICES ═════════════════ */
export function ServicesView() {
  usePageMeta({
    title: `Medical Services — Diagnostics, Surgery, Emergency & Preventive Care`,
    description: `Clinical, diagnostic, emergency, surgical and preventive healthcare services at ${siteConfig.name}, ${siteConfig.city} — laboratory, imaging, operation theatres, ICU, pharmacy and health check-ups under one roof.`,
  });

  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Medical services, organised around you"
        description="From your first consultation to diagnostics, treatment, surgery and recovery — every service below is delivered in-house by our own team, so nothing about your care is outsourced to chance."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <Tabs defaultValue={serviceGroups[0].category} className="w-full">
            <Reveal>
              <TabsList className="scroll-slim mx-auto flex h-auto w-full justify-start gap-1 overflow-x-auto rounded-2xl border border-border bg-white p-1.5 sm:w-fit">
                {serviceGroups.map((g) => (
                  <TabsTrigger
                    key={g.category}
                    value={g.category}
                    className="shrink-0 gap-2 rounded-xl px-4 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    <CIcon name={g.icon} className="size-4" />
                    <span className="hidden sm:inline">{g.title}</span>
                    <span className="sm:hidden">{g.title.split(" ")[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Reveal>

            {serviceGroups.map((g) => (
              <TabsContent key={g.category} value={g.category} className="mt-10">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <span className="grid size-14 place-items-center rounded-2xl bg-primary text-white shadow-card">
                      <CIcon name={g.icon} className="size-7" />
                    </span>
                    <h2 className="mt-5 font-display display-md font-bold">{g.title}</h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{g.description}</p>
                    <Link to="/appointments">
                      <Button className="mt-6 h-11 rounded-full px-6 font-semibold">
                        Book a Service
                        <CIcon name="arrow-right" className="size-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {g.items.map((item, i) => (
                      <Reveal key={item.name} delay={Math.min(i * 0.05, 0.25)} className="h-full">
                        <div className="h-full rounded-2xl border border-border bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25">
                          <h3 className="font-display text-[15.5px] font-semibold text-foreground">{item.name}</h3>
                          <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{item.description}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Container>
      </section>

      {/* Cross-links */}
      <section className="bg-white pb-16 md:pb-20">
        <Container className="grid gap-5 md:grid-cols-3">
          {[
            { title: "See our facilities", text: "Operation theatres, ICU, lab and rooms", href: "/facilities", icon: "building" },
            { title: "Health packages", text: "Preventive check-ups for every age", href: "/health-packages", icon: "clipboard" },
            { title: "Emergency care", text: "What to do in an urgent situation", href: "/emergency", icon: "siren" },
          ].map((c, i) => (
            <Reveal key={c.href} delay={i * 0.07}>
              <Link
                to={c.href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-cream/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary">
                  <CIcon name={c.icon} className="size-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-[15px] font-semibold text-foreground">{c.title}</span>
                  <span className="block text-[13px] text-muted-foreground">{c.text}</span>
                </span>
                <CIcon name="arrow-right" className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════════════ FACILITIES ═════════════════ */
export function FacilitiesView() {
  usePageMeta({
    title: `Facilities & Infrastructure — ICU, Operation Theatres, Lab, Pharmacy`,
    description: `Tour ${siteConfig.name}'s infrastructure: comfortable patient rooms, ICU, modular operation theatres, clinical laboratory, imaging centre, 24-hour pharmacy and emergency department in ${siteConfig.city}.`,
  });

  const amenities = [
    { icon: "car", title: "On-site Parking", text: "Dedicated two & four-wheeler parking with step-free access to the lobby." },
    { icon: "pill", title: "In-house Pharmacy", text: "Prescriptions filled on-site with pharmacist counselling before you leave." },
    { icon: "users", title: "Attendant Comfort", text: "Waiting lounges, drinking water, restrooms and attendant seating in every ward." },
    { icon: "heart", title: "Wheelchair Access", text: "Ramps, lifts and assistance for elderly and differently-abled patients." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Infrastructure"
        title="Facilities designed for healing"
        description="A hospital stay is stressful enough — our spaces are built to lower that stress. Take a look at where you or your family would be cared for."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Facilities" }]}
      />

      {/* Editorial gallery */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {facilities.map((f, i) => (
              <Reveal key={f.slug} delay={Math.min(i * 0.05, 0.3)} className={cn2(i)}>
                <FacilityCard facility={f} priority={i < 2} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="text-center text-xs text-muted-foreground">
              Representative photography. Facility photographs of the actual hospital premises will replace
              these before launch. [PLACEHOLDER]
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Amenities */}
      <section className="bg-cream py-16 md:py-20">
        <Container>
          <SectionHeading align="center" eyebrow="Patient Amenities" title="Thoughtful touches that make visits easier" />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((a) => (
              <RevealItem key={a.title} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-white p-6 text-center shadow-card">
                  <span className="mx-auto grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                    <CIcon name={a.icon} className="size-6" />
                  </span>
                  <h3 className="mt-4 font-display text-[16px] font-semibold">{a.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

function cn2(i: number) {
  // Feature the first facility full-width on desktop for editorial rhythm
  return i === 0 ? "md:col-span-2" : "";
}

/* ═════════════════ HEALTH PACKAGES ═════════════════ */
export function PackagesView() {
  usePageMeta({
    title: `Health Check-up Packages in ${siteConfig.city} — Master, Executive, Women's, Senior Citizen`,
    description: `Preventive health check-up packages at ${siteConfig.name}, ${siteConfig.city}: master health check, executive check, women's wellness, senior citizen and diabetes & heart screening. Pricing on request.`,
  });

  return (
    <>
      <PageHero
        eyebrow="Preventive Care"
        title="Health packages built for early answers"
        description="Most serious illnesses whisper before they shout. Our check-up packages are designed to listen early — with same-day tests, a physician review and clear next steps."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Health Packages" }]}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-teal-soft">
          <span className="inline-flex items-center gap-2">
            <CIcon name="clock" className="size-4 text-gold" /> Most tests finish in one morning
          </span>
          <span className="inline-flex items-center gap-2">
            <CIcon name="user" className="size-4 text-gold" /> Doctor explains every report
          </span>
        </div>
      </PageHero>

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {healthPackages.map((pkg) => (
              <RevealItem key={pkg.slug} className="h-full">
                <PackageCard pkg={pkg} />
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="mt-10">
            <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-card">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">How pricing works:</span> package
                pricing is shared transparently at reception and on WhatsApp — it varies with
                current lab schedules and any doctor-advised additions. We never add tests you
                don&apos;t need.{" "}
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
                  Ask for today&apos;s package price →
                </a>
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Preparation guidance */}
      <section className="bg-white pb-16 md:pb-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/lab.jpg"
                alt="Clinical laboratory at Durga Multi Specialty Hospital"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Before You Come"
              title="Preparing for your health check"
            />
            <ul className="mt-5 space-y-3.5">
              {[
                "Fast for 10–12 hours before morning blood tests — water is fine",
                "Carry previous reports and prescriptions for comparison",
                "Wear comfortable clothing if TMT/exercise testing is included",
                "Diabetics: do NOT take your morning anti-diabetic tablet until after fasting samples are collected — carry it with you",
                "Plan for about 2–3 hours for the full check and physician review",
              ].map((tip) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <CIcon name="check-circle" className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
