"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { CIcon } from "@/components/site/icon";
import { Link } from "@/lib/router";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export function AboutView() {
  const { t, content } = useLang();
  const values = [
    { icon: "hand-heart", title: t("కరుణ మొదలు", "Compassion first"), text: t("అనారోగ్యం తోడు ఒత్తిడిని తెస్తుంది. రిపోర్టులను కాదు, మనుషులను చికిత్స చేస్తాము — ప్రతి మాటలో దయ, ఓపిక, గౌరవం.", "Illness brings stress with it. We treat people, not just reports — with kindness, patience and respect in every conversation.") },
    { icon: "badge-check", title: t("క్లినికల్ నిజాయితీ", "Clinical honesty"), text: t("ఎవిడెన్స్ ఆధారిత వైద్యం; ఎంపికలు, ఖర్చుల గురించి నిజాయితీగా మాట్లాడతాము — అనవసర పరీక్షలు, ప్రొసీజర్‌లు ఎప్పటికీ చేయం.", "Evidence-based medicine, and honest conversations about your options and costs — no unnecessary tests or procedures, ever.") },
    { icon: "users", title: t("బృంద సమన్వయం", "One coordinated team"), text: t("వైద్యులు, నర్సులు, టెక్నీషియన్లు, ఫార్మసిస్టులు — ప్రతి రోగి ఫైల్ చుట్టూ ఒకే టీమ్‌గా కలిసి పని చేస్తారు.", "Doctors, nurses, technicians and pharmacists — working as one team around every patient file.") },
    { icon: "shield-check", title: t("భద్రత & పరిశుభ్రత", "Safety & hygiene"), text: t("కఠినమైన ఇన్ఫెక్షన్ కంట్రోల్ విధానాలు, స్టెరైల్ వర్క్‌ఫ్లోలు, సిబ్బందికి నిరంతర శిక్షణ — భద్రత ఇక్కడ నినాది కాదు, అలవాటు.", "Strict infection-control protocols, sterile workflows and continuous staff training — safety here is a habit, not a slogan.") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("మా గురించి", "About Us")}
        title={t("పరిసర ఆసుపత్రి — స్పెషాలిస్ట్-స్థాయి సామర్థ్యాలతో", "A neighbourhood hospital with specialist-level capabilities")}
        description={t(
          "దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్ — బెంగళూరు కుటుంబాలకు నిజాయితీగా, నిపుణుల వైద్య సేవలు అందుబాటులో ఉండాలని ఏర్పడింది — ఒకే పైకప్పు కింద, ఒకే టీమ్‌తో.",
          "Durga Multi Specialty Hospital exists to bring honest, specialist care within reach of every family in Bangalore — under one roof, with one coordinated team."
        )}
        breadcrumbs={[{ label: t("హోమ్", "Home"), href: "/" }, { label: t("మా గురించి", "About Us") }]}
      />

      {/* Story */}
      <section className="bg-white py-16 md:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/team.jpg"
                alt={t("మా వైద్య బృందం ఆసుపత్రి కారిడార్‌లో నడుస్తున్న దృశ్యం", "Our medical team walking through a hospital corridor")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={t("మా కథ", "Our Story")}
              title={t("ఒకే ఒక్క నమ్మకంతో మొదలైంది: రోగులకు తొందరపడని, నిజాయితీ సంరక్షణ దొరకాలి", "Built on a simple belief: patients deserve unhurried, honest care")}
            />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                {t(
                  "ప్రపంచ-స్థాయి ఆసుపత్రులు, నాలుగు నిమిషాల కన్సల్టేషన్లు నిండిన ఈ నగరంలో — మేము వేరే దారి ఎంచుకున్నాము. దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్ — స్పెషాలిస్ట్-స్థాయి వైద్యాన్ని బెంగళూరు కుటుంబాలకు దగ్గరగా తీసుకురావడానికి ఏర్పడింది — పెద్ద సంస్థ టెక్నాలజీ, క్లినికల్ లోతుతో; కుటుంబ క్లినిక్ వెచ్చదనం, శ్రద్ధతో.",
                  "In a city full of world-class hospitals and four-minute consultations, we chose a different path. Durga Multi Specialty Hospital was set up to bring specialist-level care closer to Bangalore families — with the technology and clinical depth of a large institution, and the warmth and attention of a family clinic."
                )}
              </p>
              <p>
                {t(
                  "మా పేరు మా వాగ్దానాన్ని చెబుతుంది. అపాయింట్‌మెంట్ల షెడ్యూలింగ్ నుంచి రిపోర్ట్ల వివరణ వరకు — రోగికి సమాచారం, గౌరవం, సంరక్షణ అనిపించేలా మేము చేసే ప్రతిదీ రూపొందించాము. విజయాన్ని ఫలితాలతో మాత్రమే కొలవం — ప్రతి సందర్శన తర్వాత కుటుంబాలు తమ ఆరోగ్యం గురించి ఎంత కాన్ఫిడెంట్‌గా అర్థం చేసుకున్నారో కూడా.",
                  "Our name reflects our promise. From scheduling appointments to explaining reports — everything we do is designed to leave patients informed, respected and cared for. We measure success not just in outcomes, but in how confidently families understand their health after every visit."
                )}
              </p>
              <p>
                {t(
                  "ఈ రోజు, పన్నెండు క్లినికల్ శాఖలు ఒకే పైకప్పు కింద కలిసి పని చేస్తాయి — అదే భవనంలో పరీక్షలు, ఆధునిక ఆపరేషన్ థియేటర్లు, ఫార్మసీ మద్దతుతో. మీ కేసుకు ఒకటి కంటే ఎక్కువ స్పెషాలిటీలు కావాలంటే — మీ వైద్యులే సమన్వయం చేస్తారు; మీరు మీరే అంతా చేసుకోవాల్సిన పని లేదు.",
                  "Today, twelve clinical departments work together under one roof — supported by tests in the same building, modern operation theatres and a pharmacy. If your case needs more than one speciality — your doctors coordinate it for you; you don't have to run between departments yourself."
                )}
              </p>
              <p className="text-xs italic text-muted-foreground/80">
                {t(
                  "[గమనిక: సంస్థ చరిత్ర, స్థాపన సంవత్సరం మరియు మైలురాళ్లను ఆసుపత్రి పరిపాలన ధృవీకరించిన వివరాలతో జోడించాలి.]",
                  "[Note: Add the institution's history, founding year and milestones once verified by the hospital administration.]"
                )}
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
              <h2 className="mt-5 font-display text-2xl font-bold">{t("మా ధ్యేయం", "Our Mission")}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {t(
                  "బెంగళూరు కుటుంబాలకు నీతిబద్ధమైన, ఎవిడెన్స్ ఆధారిత, అందుబాటులో ఉండే మల్టీ-స్పెషాలిటీ వైద్య సేవలు అందించడం — సీనియర్ క్లినికల్ నైపుణ్యాన్ని ఆధునిక పరీక్షలతో కలిపి; స్పష్టత, గౌరవం, వెచ్చదనంతో కూడిన రోగి అనుభవంతో.",
                  "To provide ethical, evidence-based and affordable multi-speciality care to Bangalore families — combining senior clinical expertise with modern diagnostics, and a patient experience built on clarity, respect and warmth."
                )}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-card md:p-10">
              <span className="grid size-12 place-items-center rounded-2xl bg-gold-soft text-gold">
                <CIcon name="navigation" className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">{t("మా దృష్టి", "Our Vision")}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {t(
                  "మా పరిసరాల వాళ్లు సంకోచం లేకుండా సిఫారసు చేసే ఆసుపత్రిగా నిలవడం — క్లినికల్ ఫలితాలకు, నిజాయితీ సలహాకు, ప్రతి రోగిని తమ వాళ్లలా చూసే సంరక్షణకు పేరు రావడం.",
                  "To be the hospital our neighbours recommend without hesitation — known for clinical outcomes, honest advice and care that treats every patient as their own."
                )}
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
            eyebrow={t("మా విలువలు", "Our Values")}
            title={t("ప్రతిరోజూ పాటించే నాలుగు విలువలు", "Four values we practise every day")}
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
                    {t("పన్నెండు శాఖలు. ఒక బాధ్యతాయుత టీమ్.", "Twelve departments. One accountable team.")}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-teal-soft">
                    {t(
                      "కార్డియాలజీ నుంచి శిశువైద్యం వరకు, జనరల్ మెడిసిన్ నుంచి ఆధునిక ఇమేజింగ్ వరకు — ఒకే పైకప్పు కింద అందుబాటులో ఉన్న స్పెషాలిటీలను చూడండి.",
                      "From cardiology to paediatrics, general medicine to advanced imaging — explore the specialities available under one roof."
                    )}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {content.departments.map((d) => (
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
                        {t("మా వైద్యులను కలవండి", "Meet our doctors")}
                      </Button>
                    </Link>
                    <Link to="/appointments">
                      <Button variant="outline" className="h-11 rounded-full border-white/30 bg-white/5 px-6 font-semibold text-white hover:bg-white/15 hover:text-white">
                        {t("అపాయింట్‌మెంట్ బుక్ చేయండి", "Book an appointment")}
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative hidden aspect-square overflow-hidden rounded-2xl lg:block">
                  <Image
                    src="/images/reception.jpg"
                    alt={t("ప్రశాంతమైన, ఆధునిక రిసెప్షన్ మరియు వెయిటింగ్ లాంజ్", "Calm, modern reception and waiting lounge")}
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
