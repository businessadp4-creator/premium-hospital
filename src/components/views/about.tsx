"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { CIcon } from "@/components/site/icon";
import { Link } from "@/lib/router";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { departments } from "@/lib/content";

export function AboutView() {
  const values = [
    { icon: "hand-heart", title: "Compassion first", text: "Illness is stressful. We treat people, not just reports — with kindness, patience and respect in every interaction." },
    { icon: "badge-check", title: "Clinical integrity", text: "Evidence-based medicine, honest conversations about options and costs, and no unnecessary tests or procedures. Ever." },
    { icon: "users", title: "Teamwork", text: "Doctors, nurses, technicians and pharmacists work as one coordinated team around every patient's file." },
    { icon: "shield-check", title: "Safety & hygiene", text: "Strict infection-control protocols, sterile workflows and continuous staff training — safety is a habit here, not a slogan." },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A neighbourhood hospital with specialist-grade capabilities"
        description="Durga Multi Specialty Hospital exists to make expert, ethical healthcare accessible to every family in Bangalore — under one roof, with one coordinated team."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Story */}
      <section className="bg-white py-16 md:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/team.jpg"
                alt="Our medical team walking through the hospital corridor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built around a simple belief: patients deserve unhurried, honest care"
            />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                In a city of world-class hospitals and 4-minute consultations, we chose a different
                path. Durga Multi Specialty Hospital was set up to bring specialist-level medicine
                closer to families in Bangalore — with the technology and clinical depth of a large
                institution, and the warmth and attention of a family clinic.
              </p>
              <p>
                Our name reflects our promise. Everything we do — from the way consultations are
                scheduled to how reports are explained — is designed to leave patients feeling
                informed, respected and cared for. We measure success not only in outcomes, but in
                how confidently families understand their own health after every visit.
              </p>
              <p>
                Today, twelve clinical departments work together under one roof, supported by
                in-house diagnostics, modern operation theatres and a pharmacy. When your case needs
                more than one speciality, your doctors coordinate — you should never have to
                coordinate your own care.
              </p>
              <p className="text-xs italic text-muted-foreground/80">
                [Note: institutional history, founding year and milestones to be added with
                verified details from hospital administration.]
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-card md:p-10">
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                <CIcon name="heart-pulse" className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To deliver ethical, evidence-based and affordable multi-specialty healthcare to the
                families of Bangalore — combining senior clinical expertise with modern diagnostics
                and a patient experience built on clarity, dignity and warmth.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-card md:p-10">
              <span className="grid size-12 place-items-center rounded-2xl bg-gold-soft text-gold">
                <CIcon name="navigation" className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">Our Vision</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To be the hospital our neighbourhood recommends without hesitation — known for
                clinical outcomes, honest advice, and care that treats every patient like family.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What We Stand For"
            title="Four values, practised daily"
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <RevealItem key={v.title} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-cream/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="grid size-11 place-items-center rounded-xl bg-white text-primary shadow-card">
                    <CIcon name={v.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-[17px] font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Capabilities + CTA */}
      <section className="bg-cream pb-20 md:pb-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-teal-deep p-8 text-white md:p-12">
              <div className="absolute inset-0 bg-dots-light" aria-hidden />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h2 className="font-display text-2xl font-bold md:text-3xl">
                    Twelve departments. One accountable team.
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-teal-soft">
                    Cardiology to paediatrics, general medicine to advanced imaging — explore the
                    specialities available under one roof.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {departments.map((d) => (
                      <Link
                        key={d.slug}
                        to={`/specialities/${d.slug}`}
                        className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-teal-soft transition-all hover:border-gold hover:text-gold"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link to="/doctors">
                      <Button className="h-11 rounded-full bg-gold px-6 font-semibold text-white hover:bg-gold/90">
                        Meet Our Doctors
                      </Button>
                    </Link>
                    <Link to="/appointments">
                      <Button variant="outline" className="h-11 rounded-full border-white/30 bg-white/5 px-6 font-semibold text-white hover:bg-white/15 hover:text-white">
                        Book an Appointment
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative hidden aspect-square overflow-hidden rounded-2xl lg:block">
                  <Image
                    src="/images/reception.jpg"
                    alt="Calm, modern reception and waiting lounge"
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
