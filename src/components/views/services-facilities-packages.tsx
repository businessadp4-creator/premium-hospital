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
    title: `వైద్య సేవలు — పరీక్షలు, శస్త్రచికిత్స, అత్యవసరం & నివారణ సంరక్షణ`,
    description: `${siteConfig.name}, ${siteConfig.cityTe}లో క్లినికల్, డయాగ్నస్టిక్, అత్యవసర, శస్త్రచికిత్సా మరియు నివారణ ఆరోగ్య సేవలు — ల్యాబ్, ఇమేజింగ్, ఆపరేషన్ థియేటర్లు, ICU, ఫార్మసీ మరియు ఆరోగ్య పరీక్షలు ఒకే పైకప్పు కింద.`,
  });

  return (
    <>
      <PageHero
        eyebrow="మా సేవలు"
        title="మీ చుట్టూ రూపొందించిన వైద్య సేవలు"
        description="మీ మొదటి కన్సల్టేషన్ నుంచి పరీక్షలు, చికిత్స, శస్త్రచికిత్స మరియు కోలుకోవడం వరకు — క్రింది ప్రతి సేవా మా స్వంత బృందంతో అదే భవనంలో అందిస్తాము; మీ సంరక్షణలో భాగాన్ని యాదృచ్ఛికంగా బయటకు ఇవ్వము."
        breadcrumbs={[{ label: "హోమ్", href: "/" }, { label: "సేవలు" }]}
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
                        సేవ బుక్ చేయండి
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
            { title: "మా సౌకర్యాలు చూడండి", text: "ఆపరేషన్ థియేటర్లు, ICU, ల్యాబ్ మరియు గదులు", href: "/facilities", icon: "building" },
            { title: "ఆరోగ్య ప్యాకేజీలు", text: "ప్రతి వయసు కోసం నివారణ పరీక్షలు", href: "/health-packages", icon: "clipboard" },
            { title: "అత్యవసర సంరక్షణ", text: "తీవ్ర పరిస్థితిలో ఏం చేయాలి", href: "/emergency", icon: "siren" },
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
    title: `సౌకర్యాలు & మౌలిక సదుపాయాలు — ICU, ఆపరేషన్ థియేటర్లు, ల్యాబ్, ఫార్మసీ`,
    description: `${siteConfig.name} మౌలిక సదుపాయాలు: సౌకర్యవంతమైన రోగి గదులు, ICU, మాడ్యులర్ ఆపరేషన్ థియేటర్లు, క్లినికల్ ల్యాబొరేటరీ, ఇమేజింగ్ కేంద్రం, 24 గంటల ఫార్మసీ మరియు అత్యవసర విభాగం — ${siteConfig.cityTe}లో.`,
  });

  const amenities = [
    { icon: "car", title: "అదే ప్రాంగణంలో పార్కింగ్", text: "రెండు & నాలుగు చక్రాల ప్రత్యేక పార్కింగ్ — లాబీకి మెట్లు లేకుండా చేరుకునే సౌలభ్యం." },
    { icon: "pill", title: "ఇన్-హౌస్ ఫార్మసీ", text: "ప్రిస్క్రిప్షన్లు అదే చోట పూర్తి — వెళ్లే ముందు ఫార్మసిస్ట్ సలహాతో." },
    { icon: "users", title: "పరిచారకుల సౌకర్యం", text: "వెయిటింగ్ లాంజ్‌లు, తాగునీరు, విశ్రాంతి గదులు మరియు ప్రతి వార్డులో పరిచారకుల కూర్చోవడానికి సీట్లు." },
    { icon: "heart", title: "చక్రాల కుర్చీ అందుబాటు", text: "రాంప్‌లు, లిఫ్ట్‌లు మరియు పెద్దలు, వికలాంగుల కోసం సహాయక సేవలు." },
  ];

  return (
    <>
      <PageHero
        eyebrow="మా మౌలిక సదుపాయాలు"
        title="కోలుకోవడం కోసం రూపొందించిన సౌకర్యాలు"
        description="ఆసుపత్రి సందర్శన/చేరిక ఇప్పటికే ఒత్తిడిని తెస్తుంది — మా స్థలాలు ఆ ఒత్తిడిని తగ్గించేలా రూపొందించాము. మీరు లేదా మీ కుటుంబం సంరక్షణ పొందే చోట్లను చూడండి."
        breadcrumbs={[{ label: "హోమ్", href: "/" }, { label: "సౌకర్యాలు" }]}
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
              ప్రాతినిధ్య ఫోటోగ్రఫీ. ప్రారంభానికి ముందు అసలు ఆసుపత్రి ప్రాంగణ ఫోటోలతో వీటిని భర్తీ చేయాలి. [PLACEHOLDER]
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Amenities */}
      <section className="bg-cream py-16 md:py-20">
        <Container>
          <SectionHeading align="center" eyebrow="రోగి సౌకర్యాలు" title="సందర్శనలను సులభతరం చేసే ఆలోచనాత్మక అంశాలు" />
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
    title: `${siteConfig.cityTe}లో ఆరోగ్య పరీక్షల ప్యాకేజీలు — మాస్టర్, ఎగ్జిక్యూటివ్, మహిళల, సీనియర్ సిటిజన్`,
    description: `${siteConfig.name}, ${siteConfig.cityTe}లో నివారణ ఆరోగ్య పరీక్షల ప్యాకేజీలు: మాస్టర్ హెల్త్ చెక్, ఎగ్జిక్యూటివ్ చెక్, మహిళల వెల్నెస్, సీనియర్ సిటిజన్ మరియు షుగర్ & గుండె పరీక్ష. ధర విచారణపై.`,
  });

  return (
    <>
      <PageHero
        eyebrow="నివారణ సంరక్షణ"
        title="ముందస్తు సమాధానాల కోసం రూపొందించిన ఆరోగ్య ప్యాకేజీలు"
        description="తీవ్రమైన జబ్బులు అరుపులు మొదలుపెట్టే ముందే గుసగుసలా మొదలవుతాయి. మా పరీక్షల ప్యాకేజీలు ఆ గుసగుసలను ముందుగా వినేలా రూపొందించాము — అదే రోజు పరీక్షలు, వైద్యుడి సమీక్ష మరియు స్పష్టమైన తదుపరి చర్యలతో."
        breadcrumbs={[{ label: "హోమ్", href: "/" }, { label: "ఆరోగ్య ప్యాకేజీలు" }]}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-teal-soft">
          <span className="inline-flex items-center gap-2">
            <CIcon name="clock" className="size-4 text-gold" /> చాలా పరీక్షలు ఒకే ఉదయంలో పూర్తి
          </span>
          <span className="inline-flex items-center gap-2">
            <CIcon name="user" className="size-4 text-gold" /> ప్రతి రిపోర్ట్ వైద్యుడు వివరిస్తారు
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
                <span className="font-semibold text-foreground">ధర విధానం ఎలా:</span> ప్యాకేజీ ధరలు రిసెప్షన్ వద్ద మరియు వాట్సాప్‌లో
                పారదర్శకంగా తెలియజేస్తాము — ప్రస్తుత ల్యాబ్ షెడ్యూల్ మరియు వైద్యుడు సూచించిన అదనపు పరీక్షలను బట్టి మారవచ్చు. మీకు
                అవసరం లేని పరీక్షలు మేము చేర్చము.{" "}
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
                  ఈ రోజు ప్యాకేజీ ధర అడగండి →
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
                alt="దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్ క్లినికల్ ల్యాబొరేటరీ"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="రాక ముందు"
              title="మీ ఆరోగ్య పరీక్షకు సిద్ధం కావడం"
            />
            <ul className="mt-5 space-y-3.5">
              {[
                "ఉదయం రక్త పరీక్షల ముందు 10–12 గంటలు నోరు ముట్టకుండా ఉండండి — నీరు తాగవచ్చు",
                "పోల్చడానికి గత రిపోర్ట్లు మరియు ప్రిస్క్రిప్షన్లు తీసుకురండి",
                "టీఎంటీ/వ్యాయామ పరీక్షలు చేర్చి ఉంటే సౌకర్యవంతమైన బట్టలు ధరించండి",
                "షుగర్ ఉన్నవారు: ఫాస్టింగ్ నమూనాలు తీసే వరకు ఉదయం షుగర్ గుళిక వాడకండి — మీతో తీసుకురండి",
                "పూర్తి పరీక్ష మరియు వైద్యుడి సమీక్ష కోసం దాదాపు 2–3 గంటలు కేటాయించండి",
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
