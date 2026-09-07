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
            <Eyebrow>మల్టీ స్పెషాలిటీ హాస్పిటల్ · బెంగళూరు</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display display-xl font-bold text-foreground">
              అద్భుతమైన వైద్య సేవలు.{" "}
              <span className="relative inline-block text-primary">
                మానవీయమైన సంరక్షణ.
                <svg
                  className="absolute -bottom-3 left-0 w-full text-gold"
                  viewBox="0 0 220 10"
                  fill="none"
                  aria-hidden
                  preserveAspectRatio="none"
                >
                  <path d="M2 8C60 2 160 2 218 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              అనుభవజ్ఞులైన నిపుణులు ఆధునిక సాంకేతికతతో అందించే నిపుణుల వైద్య సేవలు — మీ ఆరోగ్యం,
              సౌకర్యం మరియు గౌరవం మా ప్రతి కార్యాచరణకు కేంద్రం.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/appointments">
                <Button className="h-13 w-full rounded-full px-8 py-3.5 text-[15px] font-semibold shadow-md transition-all hover:shadow-lg sm:w-auto">
                  <CIcon name="calendar-check" className="size-4.5" />
                  అపాయింట్‌మెంట్ బుక్ చేయండి
                </Button>
              </Link>
              <Link to="/specialities">
                <Button
                  variant="outline"
                  className="h-13 w-full rounded-full border-primary/25 px-8 py-3.5 text-[15px] font-semibold text-primary transition-all hover:bg-secondary sm:w-auto"
                >
                  మా స్పెషాలిటీలను చూడండి
                  <CIcon name="arrow-right" className="size-4.5" />
                </Button>
              </Link>
            </div>
          </Reveal>
          {/* Trust indicators */}
          <Reveal delay={0.32}>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border/70 pt-7 sm:grid-cols-4">
              {[
                { icon: "stethoscope", label: "అనుభవజ్ఞులైన నిపుణులు" },
                { icon: "microscope", label: "ఆధునిక సౌకర్యాలు" },
                { icon: "hand-heart", label: "రోగి-కేంద్రీకృత సంరక్షణ" },
                { icon: "siren", label: "అత్యవసర సహకారం" },
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
                alt="దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్‌లో వైద్యుడు వృద్ధ రోగిని సంప్రదించుకుంటున్న దృశ్యం"
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
                <p className="text-[13px] font-semibold text-foreground">12కి పైగా క్లినికల్ స్పెషాలిటీలు</p>
                <p className="text-xs text-muted-foreground">ఒకే పైకప్పు కింద</p>
              </div>
            </div>
            <div className="absolute -top-4 right-4 hidden items-center gap-2.5 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:flex">
              <CIcon name="circle-check" className="size-5 text-primary" strokeWidth={2} />
              <p className="text-[13px] font-medium text-foreground">అదే భవనంలో పరీక్షలు & ఫార్మసీ</p>
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
    { icon: "hospital", value: "12+", label: "క్లినికల్ స్పెషాలిటీలు", note: "ఒకే పైకప్పు కింద సమన్వయం" },
    { icon: "stethoscope", value: "సీనియర్", label: "కన్సల్టెంట్ నాయకత్వ సంరక్షణ", note: "ప్రతి శాఖలో అనుభవజ్ఞులైన నిపుణులు" },
    { icon: "microscope", value: "ఇన్-హౌస్", label: "పరీక్షలు & ల్యాబ్", note: "చాలా పరీక్షలకు అదే రోజు రిపోర్ట్లు" },
    { icon: "hand-heart", value: "24×7", label: "అత్యవసరం & ఫార్మసీ", note: "నిమిషాలు ముఖ్యమైన సమయంలో సిద్ధం" },
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
            eyebrow="సంరక్షణ కేంద్రాలు"
            title="మీ కుటుంబం మొత్తానికి సరిపోయే స్పెషాలిటీలు"
            description="రోజువారీ జ్వరాల నుంచి తీవ్రమైన గుండె సంరక్షణ వరకు — పన్నెండు సమన్వయ శాఖలు, ఒక బాధ్యతాయుత బృందం — మీ సంరక్షణ ఎక్కడా తడారిపోదు."
          />
          <Reveal delay={0.1}>
            <Link to="/specialities">
              <Button variant="outline" className="h-11 shrink-0 rounded-full border-primary/25 px-6 font-semibold text-primary hover:bg-secondary">
                అన్ని స్పెషాలిటీలు చూడండి
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
            వేరే స్పెషాలిటీ కావాలా?{" "}
            <Link to="/specialities" className="font-semibold text-primary underline-offset-4 hover:underline">
              12 శాఖలను చూడండి
            </Link>{" "}
            లేదా{" "}
            <Link to="/appointments" className="font-semibold text-primary underline-offset-4 hover:underline">
              మా బృందాన్ని అడగండి
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
      title: "అనుభవజ్ఞులైన నిపుణులు",
      text: "కన్సల్టెంట్ నాయకత్వంలోని శాఖలు — మీ రోగనిర్ధారణ, చికిత్స మరియు ఫాలో-అప్‌ను సీనియర్ వైద్యులే వ్యక్తిగతంగా నడిపిస్తారు; మిమ్మల్ని మరెవరికీ వదలి భ్రమించలేరు.",
    },
    {
      icon: "microscope",
      title: "ఆధునిక పరీక్షా సాంకేతికత",
      text: "డిజిటల్ ఎక్స్-రే, అల్ట్రాసౌండ్, సీటీ, ఎకో మరియు పూర్తి ఆటోమేటెడ్ ల్యాబ్ ఒకే భవనంలో — సమాధానాలు వేగంగా, చికిత్స త్వరగా.",
    },
    {
      icon: "heart-handshake",
      title: "పూర్తి, సమన్వయ సంరక్షణ",
      text: "మీ కేసుకు ఒకటి కంటే ఎక్కువ స్పెషాలిటీలు అవసరమైతే — మీ వైద్యులు ఒకరితో ఒకరు మాట్లాడుకుంటారు. ఒకే ప్రణాళిక, ఒకే ఫైల్; మీరు పరుగులు పెట్టాల్సిన అవసరం లేదు.",
    },
    {
      icon: "building",
      title: "ఆధునిక మౌలిక సదుపాయాలు",
      text: "మాడ్యులర్ ఆపరేషన్ థియేటర్లు, సౌకర్యవంతమైన రోగి గదులు మరియు భద్రత, గౌరవం చుట్టూ రూపొందించిన ప్రశాంతమైన సానుకూల వాతావరణం.",
    },
    {
      icon: "siren",
      title: "అత్యవసర సహకారం",
      text: "ప్రత్యేక అత్యవసర విభాగం — అంబులెన్స్ సహకారం మరియు ప్రాధాన్య పరీక్షలతో; మీరు చేరే క్షణమే అత్యవసర సంరక్షణ మొదలవుతుంది.",
    },
    {
      icon: "hand-heart",
      title: "రోగి-కేంద్రీకృత విధానం",
      text: "తొందరపడని కన్సల్టేషన్లు, పారదర్శక ఖర్చుల చర్చ మరియు సరళ భాషలో వివరణలు — సమాచారం కలిగిన రోగులు వేగంగా కోలుకుంటారు.",
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
          eyebrow="దుర్గా ఆసుపత్రి ఎందుకు"
          title="తేడా ఏమి చికిత్స చేస్తామో కాదు — ఎలా చూసుకుంటామో"
          description="మా ఆసుపత్రిలో ప్రతి కన్సల్టేషన్, ప్రతి చేరిక, ప్రతి ఫాలో-అప్‌ను రూపొందించే ఆరు వాగ్దానాలు."
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
