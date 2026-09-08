"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";
import { CIcon } from "@/components/site/icon";
import { Link } from "@/lib/router";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading, Container, Eyebrow } from "@/components/site/primitives";
import { SpecialityCard } from "@/components/site/cards";
import { Button } from "@/components/ui/button";

/* ═══════════════════════ HERO ═══════════════════════ */
export function HeroSection() {
  const { t } = useLang();
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
            <Eyebrow>{t("మల్టీ స్పెషాలిటీ హాస్పిటల్ · బెంగళూరు", "Multi Specialty Hospital · Bangalore")}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display display-xl font-bold text-foreground">
              {t("అద్భుతమైన వైద్య సేవలు.", "Excellent medical care.")}{" "}
              <span className="relative inline-block text-primary">
                {t("మానవీయమైన సంరక్షణ.", "Care with a human touch.")}
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
              {t(
                "అనుభవజ్ఞులైన నిపుణులు, ఆధునిక టెక్నాలజీతో అందించే స్పెషాలిస్ట్ వైద్య సేవలు — మీ ఆరోగ్యం, సౌకర్యం, గౌరవం మా ప్రతి నిర్ణయానికి కేంద్రం.",
                "Specialist care from experienced doctors, backed by modern technology — your health, comfort and dignity sit at the centre of everything we do."
              )}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/appointments">
                <Button className="h-13 w-full rounded-full px-8 py-3.5 text-[15px] font-semibold shadow-md transition-all hover:shadow-lg sm:w-auto">
                  <CIcon name="calendar-check" className="size-4.5" />
                  {t("అపాయింట్‌మెంట్ బుక్ చేయండి", "Book an appointment")}
                </Button>
              </Link>
              <Link to="/specialities">
                <Button
                  variant="outline"
                  className="h-13 w-full rounded-full border-primary/25 px-8 py-3.5 text-[15px] font-semibold text-primary transition-all hover:bg-secondary sm:w-auto"
                >
                  {t("మా స్పెషాలిటీలను చూడండి", "Explore our specialities")}
                  <CIcon name="arrow-right" className="size-4.5" />
                </Button>
              </Link>
            </div>
          </Reveal>
          {/* Trust indicators */}
          <Reveal delay={0.32}>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border/70 pt-7 sm:grid-cols-4">
              {[
                { icon: "stethoscope", label: t("అనుభవజ్ఞులైన నిపుణులు", "Experienced specialists") },
                { icon: "microscope", label: t("ఆధునిక సౌకర్యాలు", "Modern facilities") },
                { icon: "hand-heart", label: t("పేషెంట్-ఫస్ట్ సంరక్షణ", "Patient-first care") },
                { icon: "siren", label: t("అత్యవసర సపోర్ట్", "Emergency support") },
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
                alt={t("దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్‌లో వైద్యుడు వృద్ధ రోగిని సంప్రదించుకుంటున్న దృశ్యం", "Doctor consulting an elderly patient at Durga Multi Specialty Hospital")}
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
                <p className="text-[13px] font-semibold text-foreground">{t("12కి పైగా క్లినికల్ స్పెషాలిటీలు", "12+ clinical specialities")}</p>
                <p className="text-xs text-muted-foreground">{t("ఒకే పైకప్పు కింద", "Under one roof")}</p>
              </div>
            </div>
            <div className="absolute -top-4 right-4 hidden items-center gap-2.5 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:flex">
              <CIcon name="circle-check" className="size-5 text-primary" strokeWidth={2} />
              <p className="text-[13px] font-medium text-foreground">{t("అదే భవనంలో పరీక్షలు & ఫార్మసీ", "Tests & pharmacy in the same building")}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════ TRUST / CREDIBILITY BAR ═══════════════════════ */
export function TrustBar() {
  const { t } = useLang();
  const items = [
    { icon: "hospital", value: "12+", label: t("క్లినికల్ స్పెషాలిటీలు", "Clinical specialities"), note: t("ఒకే పైకప్పు కింద సమన్వయం", "Coordinated under one roof") },
    { icon: "stethoscope", value: t("సీనియర్", "Senior"), label: t("కన్సల్టెంట్ నాయకత్వ సంరక్షణ", "Consultant-led care"), note: t("ప్రతి శాఖలో అనుభవజ్ఞులైన నిపుణులు", "Experienced specialists in every department") },
    { icon: "microscope", value: t("ఇన్-హౌస్", "In-house"), label: t("పరీక్షలు & ల్యాబ్", "Tests & lab"), note: t("చాలా పరీక్షలకు అదే రోజు రిపోర్ట్లు", "Same-day reports for most tests") },
    { icon: "hand-heart", value: "24×7", label: t("అత్యవసరం & ఫార్మసీ", "Emergency & pharmacy"), note: t("నిమిషాలు ముఖ్యమైన సమయంలో సిద్ధం", "Ready when every minute counts") },
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
  const { t, content } = useLang();
  return (
    <section id="specialities" className="scroll-mt-24 bg-cream py-20 md:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={t("సంరక్షణ కేంద్రాలు", "Centres of care")}
            title={t("మీ కుటుంబం మొత్తానికి సరిపోయే స్పెషాలిటీలు", "Specialities for your whole family")}
            description={t(
              "రోజువారీ జ్వరాల నుంచి తీవ్రమైన గుండె సంరక్షణ వరకు — పన్నెండు సమన్వయ శాఖలు, ఒక బాధ్యతాయుత టీమ్ — మీ సంరక్షణ ఎక్కడా తడారిపోదు.",
              "From everyday fevers to advanced heart care — twelve coordinated departments, one accountable team — so your care never falls through the cracks."
            )}
          />
          <Reveal delay={0.1}>
            <Link to="/specialities">
              <Button variant="outline" className="h-11 shrink-0 rounded-full border-primary/25 px-6 font-semibold text-primary hover:bg-secondary">
                {t("అన్ని స్పెషాలిటీలు చూడండి", "View all specialities")}
                <CIcon name="arrow-right" className="size-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.departments.slice(0, 8).map((dept, i) => (
            <SpecialityCard key={dept.slug} dept={dept} index={i} />
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            {t("వేరే స్పెషాలిటీ కావాలా?", "Need a different speciality?")}{" "}
            <Link to="/specialities" className="font-semibold text-primary underline-offset-4 hover:underline">
              {t("12 శాఖలను చూడండి", "See all 12 departments")}
            </Link>{" "}
            {t("లేదా", "or")}{" "}
            <Link to="/appointments" className="font-semibold text-primary underline-offset-4 hover:underline">
              {t("మా బృందాన్ని అడగండి", "ask our team")}
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
  const { t } = useLang();
  const reasons = [
    {
      icon: "stethoscope",
      title: t("అనుభవజ్ఞులైన నిపుణులు", "Experienced specialists"),
      text: t("కన్సల్టెంట్ నాయకత్వంలోని శాఖలు — మీ డయాగ్నోసిస్, చికిత్స, ఫాలో-అప్ అన్నీ సీనియర్ వైద్యులే వ్యక్తిగతంగా చూస్తారు; మిమ్మల్ని మరెవరికీ వదిలి పంపరు.", "Consultant-led departments — a senior doctor personally oversees your diagnosis, treatment and follow-up; you're never handed off to strangers."),
    },
    {
      icon: "microscope",
      title: t("ఆధునిక పరీక్షల సదుపాయం", "Modern diagnostics"),
      text: t("డిజిటల్ ఎక్స్-రే, అల్ట్రాసౌండ్, సీటీ, ఎకో, పూర్తి ఆటోమేటెడ్ ల్యాబ్ — అన్నీ ఒకే భవనంలో. రిపోర్ట్లు వేగంగా, చికిత్స త్వరగా.", "Digital X-ray, ultrasound, CT, echo and a fully automated lab — all in one building. Answers come faster, so treatment starts sooner."),
    },
    {
      icon: "heart-handshake",
      title: t("పూర్తి, సమన్వయ సంరక్షణ", "Complete, coordinated care"),
      text: t("మీ కేసుకు ఒకటి కంటే ఎక్కువ స్పెషాలిటీలు కావాలంటే — మీ వైద్యులు ఒకరితో ఒకరు మాట్లాడుకుంటారు. ఒకే ప్లాన్, ఒకే ఫైల్; మీరు మధ్యలో పరుగులు పెట్టాల్సిన పని లేదు.", "If your case needs more than one speciality — your doctors talk to each other. One plan, one file; you never have to run between departments."),
    },
    {
      icon: "building",
      title: t("ఆధునిక మౌలిక సదుపాయాలు", "Modern infrastructure"),
      text: t("మాడ్యులర్ ఆపరేషన్ థియేటర్లు, సౌకర్యవంతమైన రోగి గదులు, భద్రత-గౌరవాల చుట్టూ రూపొందించిన ప్రశాంతమైన వాతావరణం.", "Modular operation theatres, comfortable patient rooms, and a calm environment built around safety and respect."),
    },
    {
      icon: "siren",
      title: t("అత్యవసర సపోర్ట్", "Emergency support"),
      text: t("ప్రత్యేక అత్యవసర విభాగం — అంబులెన్స్ సపోర్ట్, ప్రాధాన్య పరీక్షలతో; మీరు చేరగానే సంరక్షణ మొదలవుతుంది.", "A dedicated emergency department — with ambulance support and priority testing; care begins the moment you arrive."),
    },
    {
      icon: "hand-heart",
      title: t("పేషెంట్-ఫస్ట్ విధానం", "Patient-first approach"),
      text: t("తొందరపడని కన్సల్టేషన్లు, ఖర్చుల గురించి ఓపెన్ చర్చ, సరళమైన భాషలో వివరణలు — సమాచారం ఉన్న రోగి వేగంగా కోలుకుంటారు.", "Unhurried consultations, open conversations about costs and explanations in simple language — informed patients recover faster."),
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
          eyebrow={t("దుర్గా ఆసుపత్రి ఎందుకు", "Why Durga Hospital")}
          title={t("తేడా ఏమి చికిత్స చేస్తామో కాదు — ఎలా చూసుకుంటామో", "The difference isn't just what we treat — it's how we care")}
          description={t("మా ఆసుపత్రిలో ప్రతి కన్సల్టేషన్, ప్రతి చేరిక, ప్రతి ఫాలో-అప్‌ను రూపొందించే ఆరు వాగ్దానాలు.", "Six promises that shape every consultation, admission and follow-up at our hospital.")}
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
