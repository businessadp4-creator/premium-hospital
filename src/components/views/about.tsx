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
    { icon: "hand-heart", title: "కరుణ మొదలు", text: "అనారోగ్యం ఒత్తిడిని తెస్తుంది. రిపోర్టులు కాదు — మనుషులను చికిత్స చేస్తాము — ప్రతి సంభాషణలో దయ, ఓపిక మరియు గౌరవంతో." },
    { icon: "badge-check", title: "క్లినికల్ నిజాయితీ", text: "ఆధారాల ఆధారిత వైద్యం, ఎంపికలు మరియు ఖర్చుల గురించి నిజాయితీ చర్చ, మరియు అనవసర పరీక్షలు లేదా విధానాలు — ఎప్పటికీ." },
    { icon: "users", title: "బృంద సమన్వయం", text: "వైద్యులు, నర్సులు, టెక్నీషియన్లు మరియు ఫార్మసిస్టులు — ప్రతి రోగి ఫైల్ చుట్టూ ఒకే సమన్వయ బృందంగా పనిచేస్తారు." },
    { icon: "shield-check", title: "భద్రత & పరిశుభ్రత", text: "కఠినమైన ఇన్ఫెక్షన్-నియంత్రణ విధానాలు, స్టెరైల్ వర్క్‌ఫ్లోలు మరియు నిరంతర సిబ్బంది శిక్షణ — భద్రత ఇక్కడ నినాది కాదు, అలవాటు." },
  ];

  return (
    <>
      <PageHero
        eyebrow="మా గురించి"
        title="పరిసర ఆసుపత్రి — స్పెషాలిస్ట్-స్థాయి సామర్థ్యాలతో"
        description="దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్ — బెంగళూరులోని ప్రతి కుటుంబానికి నిజాయితీ, నిపుణుల వైద్య సేవలను అందుబాటులోకి తీసుకురావడం కోసం ఉంది — ఒకే పైకప్పు కింద, ఒకే సమన్వయ బృందంతో."
        breadcrumbs={[{ label: "హోమ్", href: "/" }, { label: "మా గురించి" }]}
      />

      {/* Story */}
      <section className="bg-white py-16 md:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/team.jpg"
                alt="మా వైద్య బృందం ఆసుపత్రి కారిడార్‌లో నడుస్తున్న దృశ్యం"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="మా కథ"
              title="సరళమైన నమ్మకంతో నిర్మించబడింది: రోగులకు తొందరపడని, నిజాయితీ సంరక్షణ రావాలి"
            />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                ప్రపంచ-స్థాయి ఆసుపత్రులు మరియు నాలుగు నిమిషాల కన్సల్టేషన్లు నిండిన ఈ నగరంలో — మేము వేరే దారిని ఎంచుకున్నాము. దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్ — స్పెషాలిస్ట్-స్థాయి వైద్యాన్ని బెంగళూరు కుటుంబాలకు దగ్గరగా తీసుకురావడానికి ఏర్పాటయింది — పెద్ద సంస్థ సాంకేతికత మరియు క్లినికల్ లోతుతో, కుటుంబ క్లినిక్ వెచ్చదనం మరియు శ్రద్ధతో.
              </p>
              <p>
                మా పేరు మా వాగ్దానాన్ని ప్రతిబింబిస్తుంది. కన్సల్టేషన్ల షెడ్యూలింగ్ నుంచి రిపోర్ట్ల వివరణ వరకు — మేము చేసే ప్రతిదీ రోగులకు సమాచారం, గౌరవం మరియు సంరక్షణ అనుభవం కలిగించేలా రూపొందించాము. విజయాన్ని ఫలితాలతో మాత్రమే కొలత చేయము — ప్రతి సందర్శన తర్వాత కుటుంబాలు తమ ఆరోగ్యం గురించి ఎంత ధైర్యంగా అర్థం చేసుకున్నారో కూడా.
              </p>
              <p>
                ఈ రోజు, పన్నెండు క్లినికల్ శాఖలు ఒకే పైకప్పు కింద కలిసి పనిచేస్తాయి — అదే భవనంలోని పరీక్షలు, ఆధునిక ఆపరేషన్ థియేటర్లు మరియు ఫార్మసీ మద్దతుతో. మీ కేసుకు ఒకటి కంటే ఎక్కువ స్పెషాలిటీలు అవసరమైతే — మీ వైద్యులే సమన్వయం చేస్తారు; మీరు మీ సంరక్షణను మీరే సమన్వయం చేసుకోవాల్సిన అవసరం లేదు.
              </p>
              <p className="text-xs italic text-muted-foreground/80">
                [గమనిక: సంస్థ చరిత్ర, స్థాపన సంవత్సరం మరియు మైలురాళ్లను ఆసుపత్రి పరిపాలన ధృవీకరించిన వివరాలతో జోడించాలి.]
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
              <h2 className="mt-5 font-display text-2xl font-bold">మా ధ్యేయం</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                బెంగళూరు కుటుంబాలకు నీతిబద్ధమైన, ఆధారాల ఆధారిత మరియు అందుబాటులో ఉండే మల్టీ-స్పెషాలిటీ
                ఆరోగ్య సేవలను అందించడం — సీనియర్ క్లినికల్ నైపుణ్యాన్ని ఆధునిక పరీక్షలతో కలిపి,
                స్పష్టత, గౌరవం మరియు వెచ్చదనంపై ఆధారపడిన రోగి అనుభవంతో.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-card md:p-10">
              <span className="grid size-12 place-items-center rounded-2xl bg-gold-soft text-gold">
                <CIcon name="navigation" className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">మా దృష్టి</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                మా పరిసరాల వారు సంకోచం లేకుండా సిఫారసు చేసే ఆసుపత్రిగా నిలవడం — క్లినికల్
                ఫలితాలకు, నిజాయితీ సలహాకు మరియు ప్రతి రోగిని తమ వాళ్లలా చూసే సంరక్షణకు పేరుగాంచడం.
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
            eyebrow="మా విలువలు"
            title="ప్రతిరోజూ పాటించే నాలుగు విలువలు"
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
                    పన్నెండు శాఖలు. ఒక బాధ్యతాయుత బృందం.
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-teal-soft">
                    కార్డియాలజీ నుంచి శిశువైద్యం వరకు, జనరల్ మెడిసిన్ నుంచి ఆధునిక ఇమేజింగ్ వరకు —
                    ఒకే పైకప్పు కింద అందుబాటులో ఉన్న స్పెషాలిటీలను చూడండి.
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
                        మా వైద్యులను కలవండి
                      </Button>
                    </Link>
                    <Link to="/appointments">
                      <Button variant="outline" className="h-11 rounded-full border-white/30 bg-white/5 px-6 font-semibold text-white hover:bg-white/15 hover:text-white">
                        అపాయింట్‌మెంట్ బుక్ చేయండి
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative hidden aspect-square overflow-hidden rounded-2xl lg:block">
                  <Image
                    src="/images/reception.jpg"
                    alt="ప్రశాంతమైన, ఆధునిక రిసెప్షన్ మరియు వెయిటింగ్ లాంజ్"
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
