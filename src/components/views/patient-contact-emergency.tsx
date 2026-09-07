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
    title: "రోగి సమాచారం — చేరిక, ఇన్సూరెన్స్, సందర్శన సమయాలు & సాధారణ ప్రశ్నలు",
    description: `${siteConfig.name} సందర్శించే ముందు రోగులకు అవసరమైనవన్నీ: చేరిక ప్రక్రియ, పత్రాల చెక్‌లిస్ట్, ఇన్సూరెన్స్ & TPA సహకారం, సందర్శన సమయాలు, రోగి హక్కులు మరియు సాధారణ ప్రశ్నల సమాధానాలు.`,
  });

  return (
    <>
      <PageHero
        eyebrow="రోగి సమాచారం"
        title="మీరు రాకముందే అవసరమైనవన్నీ — ఒకే చోట"
        description="చేరిక, పత్రాలు, ఇన్సూరెన్స్, సందర్శన సమయాలు మరియు రోగి హక్కులు — సరళంగా వివరించాము, తద్వారా మొదటి అడుగు నుంచే మీ సందర్శన సాఫీగా సాగుతుంది."
        breadcrumbs={[{ label: "హోమ్", href: "/" }, { label: "రోగి సమాచారం" }]}
      />

      {/* Admission journey */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="చేరికలు"
            title="చేరిక ఎలా జరుగుతుంది"
            description="మీ వైద్యుడి సలహా నుంచి సౌకర్యవంతమైన డిశ్చార్జ్ వరకు — ఐదు దశలు."
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
              <h2 className="mt-5 font-display text-2xl font-bold">ఏం తీసుకురావాలి</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                చేరికలు మరియు కన్సల్టేషన్లను వేగవంతం చేసే చిన్న చెక్‌లిస్ట్:
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
                <h2 className="mt-5 font-display text-2xl font-bold">సందర్శన సమయాలు</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="rounded-xl bg-cream/70 px-4 py-3">
                    <span className="font-semibold text-foreground">సాధారణ వార్డులు: </span>
                    <span className="text-muted-foreground">{visitingInfo.general}</span>
                  </li>
                  <li className="rounded-xl bg-cream/70 px-4 py-3">
                    <span className="font-semibold text-foreground">ICU: </span>
                    <span className="text-muted-foreground">{visitingInfo.icu}</span>
                  </li>
                  <li className="rounded-xl bg-cream/70 px-4 py-3">
                    <span className="font-semibold text-foreground">పరిచారకులు: </span>
                    <span className="text-muted-foreground">{visitingInfo.attendants}</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-gold/40 bg-gold-soft p-8">
                <h2 className="font-display text-xl font-bold text-accent-foreground">ఇన్సూరెన్స్ & బిల్లింగ్</h2>
                <p className="mt-3 text-sm leading-relaxed text-accent-foreground/85">
                  ప్రణాళికాబద్ధ మరియు అత్యవసర చేరికల కోసం ప్రధాన హెల్త్ ఇన్సూరర్లు మరియు TPAలకు మేము మద్దతు
                  ఇస్తాము. క్యాష్‌లెస్ చికిత్స కోసం, ప్రీ-ఆథరైజేషన్ మొదలవ్వడానికి ప్రణాళికాబద్ధ చేరికకు కనీసం 48 గంటల
                  ముందు అడ్మిషన్ డెస్క్‌లో మీ పాలసీ వివరాలు ఇవ్వండి. చికిత్సకు ముందు బిల్లింగ్ డెస్క్ ఎప్పుడూ వివరణాత్మక
                  అంచనా ఇస్తుంది, డిశ్చార్జ్ సమయంలో వివరణాత్మక బిల్లు ఇస్తుంది.
                </p>
                <p className="mt-3 text-xs italic text-accent-foreground/70">
                  [PLACEHOLDER — ప్రస్తుత ఇన్సూరర్/TPA ప్యానెల్‌ను ధృవీకరించి జాబితాను ఇక్కడ చూపించండి.]
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
                రోగిగా మీ హక్కులు
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
                మేము మిమ్మల్ని అడిగేది
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
    title: `అపాయింట్‌మెంట్ బుక్ చేయండి — ${siteConfig.cityTe}`,
    description: `${siteConfig.name}, ${siteConfig.cityTe}లో అపాయింట్‌మెంట్ అభ్యర్థించండి. శాఖ మరియు వైద్యుడిని ఎంచుకోండి, తేదీ మరియు సమయం పేర్చండి — మా సంరక్షణ బృందం ఫోన్ ద్వారా మీ స్లాట్‌ను ధృవీకరిస్తుంది. ఫోన్ లేదా వాట్సాప్ ద్వారా కూడా బుక్ చేయవచ్చు.`,
  });

  return (
    <>
      <PageHero
        eyebrow="అపాయింట్‌మెంట్ బుక్ చేయండి"
        title="మీ నిపుణుడిని ఎంచుకోండి. మిగతాది మేము చూస్తాము."
        description="క్రింది ఫారం సమర్పించండి — ఖచ్చితమైన స్లాట్‌ను ధృవీకరించడానికి మా సంరక్షణ బృందం మిమ్మల్ని కాల్ చేస్తుంది. ఇప్పుడే మాట్లాడాలంటే? రిసెప్షన్‌కు కాల్ చేయండి లేదా వాట్సాప్‌లో మెసేజ్ చేయండి."
        breadcrumbs={[{ label: "హోమ్", href: "/" }, { label: "అపాయింట్‌మెంట్లు" }]}
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
              <h2 className="font-display text-lg font-semibold">బుక్ చేసే ఇతర మార్గాలు</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href={`tel:${siteConfig.phone.tel}`} className="flex items-center gap-3.5 rounded-xl bg-cream/70 p-4 transition-all hover:bg-secondary/60">
                    <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                      <CIcon name="phone" className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">రిసెప్షన్‌కు కాల్</span>
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
                      <span className="block text-sm font-semibold">వాట్సాప్</span>
                      <span className="block text-[13px] text-muted-foreground">మీకు అనుకూలమైన తేదీ & శాఖను పంపండి</span>
                    </span>
                  </a>
                </li>
                <li>
                  <Link to="/emergency" className="flex items-center gap-3.5 rounded-xl bg-destructive/5 p-4 transition-all hover:bg-destructive/10">
                    <span className="grid size-10 place-items-center rounded-xl bg-destructive/10 text-destructive">
                      <CIcon name="siren" className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-destructive">అత్యవసరమా?</span>
                      <span className="block text-[13px] text-muted-foreground">ఈ ఫారం వాడకండి — {siteConfig.emergency.display}కి కాల్ చేయండి</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold">తెలుసుకోవాల్సినవి</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "గత ప్రిస్క్రిప్షన్లు, రిపోర్ట్లు మరియు ఫోటో ఐడీ తీసుకురండి",
                  "రిజిస్ట్రేషన్ పూర్తి చేసుకోవడానికి 15 నిమిషాల ముందు చేరుకోండి",
                  "ప్రస్తుతం వాడుతున్న అన్ని మందుల గురించి వైద్యుడికి చెప్పండి",
                  "OPD షెడ్యూల్ ప్రకారం సమయాలు ఉంటాయి — డైరెక్ట్‌గా వచ్చిన వారిని బుక్ చేసిన స్లాట్ల మధ్య చూస్తాము",
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
    title: `సంప్రదించండి & దారి — ${siteConfig.name}, ${siteConfig.cityTe}`,
    description: `${siteConfig.name}ను సంప్రదించండి: చిరునామా ${fullAddress}, ఫోన్ ${siteConfig.phone.display}, అత్యవసర లైన్, ఇమెయిల్ మరియు గూగుల్ మ్యాప్స్ దారి. సందేశం పంపండి — ఒక పని దినంలో స్పందిస్తాము.`,
  });

  return (
    <>
      <PageHero
        eyebrow="మమ్మల్ని సంప్రదించండి"
        title="మేము వింటున్నాము"
        description="అపాయింట్‌మెంట్లు, రిపోర్ట్లు, బిల్లింగ్ లేదా ఏదైనా ఇతర ప్రశ్నలు — మీకు నచ్చిన విధంగా మమ్మల్ని సంప్రదించండి. వైద్య అత్యవసర పరిస్థితులలో ఎప్పుడూ అత్యవసర లైన్‌కు డైరెక్ట్‌గా కాల్ చేయండి."
        breadcrumbs={[{ label: "హోమ్", href: "/" }, { label: "సంప్రదింపు" }]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {[
              { icon: "map-pin", title: "మా వద్దకు రండి", lines: [siteConfig.name, fullAddress] },
              { icon: "phone", title: "రిసెప్షన్", lines: [siteConfig.phone.display, siteConfig.hours.opd], href: `tel:${siteConfig.phone.tel}` },
              { icon: "siren", title: "అత్యవసరం & అంబులెన్స్", lines: [siteConfig.emergency.display, "ముందుగా కాల్ చేయండి — మీరు రావడానికి సిద్ధమవుతాము"], href: `tel:${siteConfig.emergency.tel}` },
              { icon: "mail", title: "ఇమెయిల్", lines: [siteConfig.email, "ఒక పని దినంలో స్పందిస్తాము"], href: `mailto:${siteConfig.email}` },
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
                    <CIcon name="navigation" className="size-4" /> దారి చూపించు
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
              <h2 className="font-display text-2xl font-bold">మాకు సందేశం పంపండి</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                తక్షణ అవసరం లేని ప్రశ్నల కోసం. సాధారణంగా ఒక పని దినంలో స్పందిస్తాము.
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
    title: `అత్యవసర సంరక్షణ — ${siteConfig.emergency.display}కి కాల్ చేయండి`,
    description: `${siteConfig.name}, ${siteConfig.cityTe}లో అత్యవసర విభాగం. అంబులెన్స్ సహకారం కోసం ${siteConfig.emergency.display}కి కాల్ చేయండి. తక్షణ సంరక్షణ అవసరమైన హెచ్చరిక లక్షణాలు — ఛాతీ నొప్పి, స్ట్రోక్ (FAST), తీవ్ర రక్తస్రావం, ఊపిరి ఆడకపోవడం మరియు మరిన్ని.`,
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
              <li><Link to="/" className="transition-colors hover:text-gold">హోమ్</Link></li>
              <li aria-hidden><CIcon name="chevron-right" className="size-3.5 text-white/50" /></li>
              <li aria-current="page" className="font-medium text-white">అత్యవసర సంరక్షణ</li>
            </ol>
          </nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-destructive px-4 py-1.5 text-[13px] font-semibold uppercase tracking-wider">
                <span className="size-2 animate-pulse rounded-full bg-white" aria-hidden />
                అత్యవసరం
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
                అత్యవసర పరిస్థితిలో — నిమిషాలే ఫలితాలను నిర్ణయిస్తాయి.
              </h1>
              <p className="mt-4 max-w-lg leading-relaxed text-teal-soft">
                ముందుగా కాల్ చేయండి — మీరు రావడం వరకు మా అత్యవసర బృందం ఏర్పాట్లు మొదలుపెడుతుంది.
                మీరే వాహనం నడపకండి. వేగంగా అందగలిగితే — గత వైద్య రిపోర్ట్లు మరియు ప్రస్తుత మందుల
                జాబితా తీసుకురండి.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${siteConfig.emergency.tel}`}>
                  <Button className="h-14 w-full rounded-2xl bg-destructive px-8 text-lg font-bold shadow-md hover:bg-destructive/90 sm:w-auto">
                    <CIcon name="phone-call" className="size-5" />
                    కాల్ {siteConfig.emergency.display}
                  </Button>
                </a>
                <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-14 w-full rounded-2xl border-white/30 bg-white/5 px-8 font-semibold text-white hover:bg-white/15 hover:text-white sm:w-auto">
                    <CIcon name="navigation" className="size-5" />
                    దారి చూపించు
                  </Button>
                </a>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-teal-soft/80">
                [PLACEHOLDER — ఆసుపత్రి అత్యవసర డ్యూటీ రోస్టర్ మరియు అంబులెన్స్ అందుబాటును ధృవీకరించిన తర్వాతే 24×7 అత్యవసర లైన్‌ను ప్రచురించండి.]
              </p>
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl shadow-card-hover">
                <Image
                  src="/images/emergency.jpg"
                  alt="అంబులెన్స్ బేతో అత్యవసర విభాగ ప్రవేశం"
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
            eyebrow="లక్షణాలు తెలుసుకోండి"
            title="వీటిలో ఏదైనా కనిపిస్తే వెంటనే అత్యవసర విభాగానికి రండి"
            description="ఈ జాబితా అత్యంత సాధారణమైన, సమయం కీలకమైన అత్యవసర పరిస్థితులను కవర్ చేస్తుంది. అనుమానం ఉంటే మమ్మల్ని కాల్ చేయండి — లక్షణాలను వివరించడానికి ఒక నిమిషమే పడుతుంది; దానితో విషాదాన్ని నివారించవచ్చు."
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
                ఇప్పుడే ఇవి చేయండి
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
                ఈ తప్పులు చేయకండి
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
