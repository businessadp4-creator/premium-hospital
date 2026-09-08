"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";
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
  const { t, content } = useLang();
  usePageMeta({
    title: t(
      "వైద్య సేవలు — పరీక్షలు, సర్జరీ, అత్యవసరం & నివారణ సంరక్షణ",
      "Medical services — diagnostics, surgery, emergency & preventive care"
    ),
    description: t(
      `${siteConfig.name}, ${siteConfig.cityTe}లో క్లినికల్, డయాగ్నస్టిక్, అత్యవసర, శస్త్రచికిత్సా మరియు నివారణ సేవలు — ల్యాబ్, ఇమేజింగ్, ఆపరేషన్ థియేటర్లు, ICU, ఫార్మసీ మరియు హెల్త్ చెకప్‌లు ఒకే పైకప్పు కింద.`,
      `Clinical, diagnostic, emergency, surgical and preventive services at ${siteConfig.name}, ${siteConfig.address.city} — lab, imaging, operation theatres, ICU, pharmacy and health checks under one roof.`
    ),
  });

  return (
    <>
      <PageHero
        eyebrow={t("మా సేవలు", "Our services")}
        title={t("మీ చుట్టూ రూపొందించిన వైద్య సేవలు", "Medical care built around you")}
        description={t(
          "మొదటి కన్సల్టేషన్ నుంచి టెస్ట్స్, ట్రీట్‌మెంట్, సర్జరీ మరియు రికవరీ వరకు — కింది ప్రతి సర్వీస్ మా సొంత టీమ్‌తో అదే బిల్డింగ్‌లో; మీ కేర్ మేము అవుట్‌సోర్స్ చేయము.",
          "From your first consultation to tests, treatment, surgery and recovery — each service below is delivered by our own team in the same building; we do not outsource your care."
        )}
        breadcrumbs={[{ label: t("హోమ్", "Home"), href: "/" }, { label: t("సేవలు", "Services") }]}
      />

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <Tabs defaultValue={content.serviceGroups[0].category} className="w-full">
            <Reveal>
              <TabsList className="scroll-slim mx-auto flex h-auto w-full justify-start gap-1 overflow-x-auto rounded-2xl border border-border bg-white p-1.5 sm:w-fit">
                {content.serviceGroups.map((g) => (
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

            {content.serviceGroups.map((g) => (
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
                        {t("సర్వీస్ బుక్ చేయండి", "Book this service")}
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
            { title: t("మా సౌకర్యాలు చూడండి", "Explore our facilities"), text: t("ఆపరేషన్ థియేటర్లు, ICU, ల్యాబ్ మరియు గదులు", "Operation theatres, ICU, lab and rooms"), href: "/facilities", icon: "building" },
            { title: t("హెల్త్ ప్యాకేజీలు", "Health packages"), text: t("ప్రతి వయసు కోసం నివారణ చెకప్‌లు", "Preventive check-ups for every age"), href: "/health-packages", icon: "clipboard" },
            { title: t("అత్యవసర సంరక్షణ", "Emergency care"), text: t("తీవ్ర పరిస్థితిలో ఏం చేయాలి", "What to do in a critical situation"), href: "/emergency", icon: "siren" },
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
  const { t, content } = useLang();
  usePageMeta({
    title: t(
      "సౌకర్యాలు — ICU, ఆపరేషన్ థియేటర్లు, ల్యాబ్, ఫార్మసీ",
      "Facilities — ICU, operation theatres, lab, pharmacy"
    ),
    description: t(
      `${siteConfig.name} సౌకర్యాలు: కంఫర్టబుల్ రోగి గదులు, ICU, మాడ్యులర్ ఆపరేషన్ థియేటర్లు, క్లినికల్ ల్యాబ్, ఇమేజింగ్, 24 గంటల ఫార్మసీ మరియు అత్యవసర విభాగం — ${siteConfig.cityTe}లో.`,
      `${siteConfig.name} facilities: comfortable patient rooms, ICU, modular operation theatres, clinical laboratory, imaging centre, 24-hour pharmacy and emergency department — in ${siteConfig.address.city}.`
    ),
  });

  const amenities = [
    { icon: "car", title: t("అదే ప్రాంగణంలో పార్కింగ్", "On-campus parking"), text: t("టూ & ఫోర్ వీలర్లకు ప్రత్యేక పార్కింగ్ — లాబీకి మెట్లు లేకుండా చేరుకోవచ్చు.", "Dedicated two & four-wheeler parking — step-free access to the lobby.") },
    { icon: "pill", title: t("ఇన్-హౌస్ ఫార్మసీ", "In-house pharmacy"), text: t("ప్రిస్క్రిప్షన్లు అదే చోట పూర్తి — వెళ్లే ముందు ఫార్మసిస్ట్ సలహా.", "Fill prescriptions on-site, with pharmacist guidance before you leave.") },
    { icon: "users", title: t("పరిచారకుల సౌకర్యం", "Attendant comfort"), text: t("వెయిటింగ్ లాంజ్‌లు, తాగునీరు మరియు ప్రతి వార్డులో అటెండెంట్ సీట్లు.", "Waiting lounges, drinking water and attendant seating in every ward.") },
    { icon: "heart", title: t("వీల్‌చైర్ అందుబాటు", "Wheelchair access"), text: t("రాంప్‌లు, లిఫ్ట్‌లు మరియు పెద్దలు, వికలాంగుల కోసం సపోర్ట్.", "Ramps, lifts and assistance for seniors and visitors with disabilities.") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("మా మౌలిక సదుపాయాలు", "Our infrastructure")}
        title={t("రికవరీ కోసం రూపొందించిన స్పేస్‌లు", "Spaces designed for recovery")}
        description={t(
          "ఆసుపత్రి విజిట్/చేరిక ఇప్పటికే ఒత్తిడిని తెస్తుంది — మా స్పేస్‌లు ఆ ఒత్తిడి తగ్గించేలా డిజైన్ చేసాము. మీరు లేదా మీ కుటుంబం కేర్ తీసుకునే చోట్లను చూడండి.",
          "A hospital visit or admission is stressful enough — our spaces are designed to lower that stress. See where you or your family will receive care."
        )}
        breadcrumbs={[{ label: t("హోమ్", "Home"), href: "/" }, { label: t("సౌకర్యాలు", "Facilities") }]}
      />

      {/* Editorial gallery */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {content.facilities.map((f, i) => (
              <Reveal key={f.slug} delay={Math.min(i * 0.05, 0.3)} className={cn2(i)}>
                <FacilityCard facility={f} priority={i < 2} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="text-center text-xs text-muted-foreground">
              {t(
                "ప్రాతినిధ్య ఫోటోగ్రఫీ. ప్రారంభానికి ముందు అసలు ఆసుపత్రి ఫోటోలతో భర్తీ చేయాలి. [PLACEHOLDER]",
                "Representative photography. Must be replaced with real hospital photographs before launch. [PLACEHOLDER]"
              )}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Amenities */}
      <section className="bg-cream py-16 md:py-20">
        <Container>
          <SectionHeading align="center" eyebrow={t("రోగి సౌకర్యాలు", "Patient amenities")} title={t("విజిట్‌ని సులభతరం చేసే ఆలోచనాత్మక అంశాలు", "Thoughtful touches that make visits easier")} />
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
  const { t, content } = useLang();
  usePageMeta({
    title: t(
      `${siteConfig.cityTe}లో హెల్త్ చెకప్ ప్యాకేజీలు — మాస్టర్, ఎగ్జిక్యూటివ్, మహిళల, సీనియర్ సిటిజన్`,
      `Health check-up packages in ${siteConfig.address.city} — master, executive, women's, senior citizen`
    ),
    description: t(
      `${siteConfig.name}, ${siteConfig.cityTe}లో నివారణ హెల్త్ చెకప్ ప్యాకేజీలు: మాస్టర్ హెల్త్ చెక్, ఎగ్జిక్యూటివ్ చెక్, మహిళల వెల్నెస్, సీనియర్ సిటిజన్ మరియు షుగర్ & హార్ట్ స్క్రీనింగ్. ధర విచారణపై.`,
      `Preventive health check-up packages at ${siteConfig.name}, ${siteConfig.address.city}: master health check, executive check, women's wellness, senior citizen and sugar & heart screening. Price on request.`
    ),
  });

  return (
    <>
      <PageHero
        eyebrow={t("నివారణ సంరక్షణ", "Preventive care")}
        title={t("ముందస్తు ఆన్సర్స్ కోసం హెల్త్ ప్యాకేజీలు", "Health packages for early answers")}
        description={t(
          "పెద్ద జబ్బులు పెద్దవి కాకముందే చిన్న సిగ్నల్స్‌గా మొదలవుతాయి. మా చెకప్ ప్యాకేజీలు ఆ సిగ్నల్స్ ముందుగా పట్టుకోవడానికి — అదే రోజు టెస్ట్స్, డాక్టర్ రివ్యూ మరియు క్లియర్ నెక్స్ట్ స్టెప్స్‌తో.",
          "Serious illnesses start as quiet signals. Our check-up packages are built to catch those signals early — same-day tests, a doctor review and clear next steps."
        )}
        breadcrumbs={[{ label: t("హోమ్", "Home"), href: "/" }, { label: t("హెల్త్ ప్యాకేజీలు", "Health packages") }]}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-teal-soft">
          <span className="inline-flex items-center gap-2">
            <CIcon name="clock" className="size-4 text-gold" /> {t("చాలా టెస్ట్స్ ఒకే ఉదయంలో పూర్తి", "Most tests done in one morning")}
          </span>
          <span className="inline-flex items-center gap-2">
            <CIcon name="user" className="size-4 text-gold" /> {t("ప్రతి రిపోర్ట్ డాక్టర్ వివరిస్తారు", "Every report explained by a doctor")}
          </span>
        </div>
      </PageHero>

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.healthPackages.map((pkg) => (
              <RevealItem key={pkg.slug} className="h-full">
                <PackageCard pkg={pkg} />
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="mt-10">
            <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-card">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">{t("ధర విధానం ఎలా:", "How pricing works:")} </span>
                {t(
                  "ప్యాకేజీ ధరలు రిసెప్షన్ వద్ద మరియు వాట్సాప్‌లో పారదర్శకంగా చెబుతాము — ల్యాబ్ షెడ్యూల్ మరియు డాక్టర్ సూచించిన అదనపు టెస్ట్స్ బట్టి మారవచ్చు. మీకు అవసరం లేని టెస్ట్స్ మేము చేర్చము. ",
                  "Package prices are shared transparently at reception and on WhatsApp — they may vary with the lab schedule and any doctor-advised add-on tests. We never add tests you don't need. "
                )}
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
                  {t("ఈ రోజే ప్యాకేజీ ధర అడగండి →", "Ask for package pricing today →")}
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
                alt={t(
                  "దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్ క్లినికల్ ల్యాబొరేటరీ",
                  "Durga Multi Specialty Hospital clinical laboratory"
                )}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={t("రాక ముందు", "Before you come")}
              title={t("మీ హెల్త్ చెకప్‌కు సిద్ధం కావడం", "Preparing for your health check")}
            />
            <ul className="mt-5 space-y-3.5">
              {[
                t("ఉదయం రక్త టెస్ట్స్ ముందు 10–12 గంటలు ఫుడ్ లేకుండా ఉండండి — నీరు తాగవచ్చు", "Fast for 10–12 hours before morning blood tests — water is fine"),
                t("పోల్చడానికి గత రిపోర్ట్స్ మరియు ప్రిస్క్రిప్షన్లు తీసుకురండి", "Bring previous reports and prescriptions for comparison"),
                t("TMT/ఎక్సర్సైజ్ టెస్ట్స్ ఉంటే కంఫర్టబుల్ బట్టలు ధరించండి", "Wear comfortable clothing if TMT/exercise tests are included"),
                t("షుగర్ ఉన్నవారు: ఫాస్టింగ్ సాంపిల్ తీసే వరకు ఉదయం షుగర్ టాబ్లెట్ స్కిప్ చేసి, మీతో తీసుకురండి", "If you take diabetes medication: skip your morning tablet until the fasting sample is taken, and bring it with you"),
                t("పూర్తి చెకప్ మరియు డాక్టర్ రివ్యూ కోసం దాదాపు 2–3 గంటలు ప్లాన్ చేయండి", "Plan around 2–3 hours for the full check-up and doctor review"),
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
