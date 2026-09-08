"use client";

import Image from "next/image";
import { siteConfig, fullAddress, mapEmbedUrl, mapsDirectionsUrl, whatsappUrl } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";
import { CIcon } from "@/components/site/icon";
import { Link } from "@/lib/router";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading, Container, Eyebrow } from "@/components/site/primitives";
import { PackageCard, TestimonialCard, BlogCard } from "@/components/site/cards";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */
export function TestimonialsSection() {
  const { t, content } = useLang();
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t("రోగుల గొంతులు", "In our patients' words")}
          title={t("కుటుంబాలు గుర్తుంచుకునే సంరక్షణ", "Care families remember")}
          description={t("మా ఆసుపత్రిలో తమ అనుభవం గురించి రోగులు పంచుకున్న మాటలు.", "What patients have shared about their experience with us.")}
        />
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {content.testimonials.map((t) => (
            <RevealItem key={t.id} className="h-full">
              <TestimonialCard tm={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

/* ═══════════════════════ HEALTH PACKAGES PREVIEW ═══════════════════════ */
export function PackagesPreview() {
  const { t, content } = useLang();
  return (
    <section id="packages" className="scroll-mt-24 bg-cream py-20 md:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={t("నివారణ సంరక్షణ", "Preventive care")}
            title={t("జీవితంలోని ప్రతి దశకు ఆరోగ్య ప్యాకేజీలు", "Health packages for every stage of life")}
            description={t(
              "సమస్యలను ముందే పట్టే స్ట్రక్చర్డ్ పరీక్షలు — ధర రిక్వెస్ట్‌పై పారదర్శకంగా, ఫలితాలను వైద్యుడే వివరిస్తారు.",
              "Structured checks that catch problems early — transparent pricing on request, with a doctor explaining your results."
            )}
          />
          <Reveal delay={0.1}>
            <Link to="/health-packages">
              <Button variant="outline" className="h-11 shrink-0 rounded-full border-primary/25 px-6 font-semibold text-primary hover:bg-secondary">
                {t("అన్ని ప్యాకేజీలు చూడండి", "View all packages")}
                <CIcon name="arrow-right" className="size-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.healthPackages.slice(0, 3).map((pkg) => (
            <RevealItem key={pkg.slug} className="h-full">
              <PackageCard pkg={pkg} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

/* ═══════════════════════ HEALTH EDUCATION PREVIEW ═══════════════════════ */
export function HealthLibraryPreview() {
  const { t, content } = useLang();
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={t("ఆరోగ్య లైబ్రరీ", "Health library")}
            title={t("రోజువారీ ఆరోగ్యం కోసం వైద్యుల మార్గదర్శకం", "Doctor-written guidance for everyday health")}
            description={t(
              "మా నిపుణుల ప్రాక్టికల్, నిజాయితీ కథనాలు — నివారణ, హెచ్చరిక లక్షణాలు, కుటుంబ ఆరోగ్యం సరళంగా వివరించినవే.",
              "Practical, honest articles from our specialists — prevention, warning signs and family health, explained simply."
            )}
          />
          <Reveal delay={0.1}>
            <Link to="/blog">
              <Button variant="outline" className="h-11 shrink-0 rounded-full border-primary/25 px-6 font-semibold text-primary hover:bg-secondary">
                {t("అన్ని కథనాలు చూడండి", "View all articles")}
                <CIcon name="arrow-right" className="size-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.blogPosts.slice(0, 3).map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════ LOCATION / CONTACT PREVIEW ═══════════════════════ */
export function LocationSection() {
  const { t } = useLang();
  return (
    <section id="location" className="scroll-mt-24 bg-cream py-20 md:py-24">
      <Container className="grid items-stretch gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow={t("మా వద్దకు రండి", "Visit us")}
            title={t("మన్నించి చేరడం సులభం. పార్కింగ్ కూడా.", "Easy to reach. Easy parking too.")}
            description={t(
              "ప్రధాన రోడ్డుపై స్థలం — ప్రత్యేక పార్కింగ్, వీల్‌చైర్ యాక్సెస్, ప్రతి అడుగులో దారి చూపే ఫ్రంట్ డెస్క్‌తో.",
              "Located on the main road — with dedicated parking, wheelchair access and a front desk to guide you at every step."
            )}
          />
          <div className="mt-8 space-y-4">
            {[
              { icon: "map-pin", title: t("చిరునామా", "Address"), text: fullAddress },
              { icon: "phone", title: t("రిసెప్షన్", "Reception"), text: siteConfig.phone.display, href: `tel:${siteConfig.phone.tel}` },
              { icon: "siren", title: t("అత్యవసరం", "Emergency"), text: siteConfig.emergency.display, href: `tel:${siteConfig.emergency.tel}` },
              { icon: "clock", title: t("OPD సమయాలు", "OPD timings"), text: `${siteConfig.hours.opd} · ${siteConfig.hours.opdSunday}` },
            ].map((row, i) => (
              <Reveal key={row.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-card">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <CIcon name={row.icon} className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{row.title}</p>
                    {row.href ? (
                      <a href={row.href} className="mt-0.5 block text-[15px] font-medium text-foreground transition-colors hover:text-primary">
                        {row.text}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-[15px] font-medium leading-snug text-foreground">{row.text}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <Button className="h-11 rounded-full px-6 font-semibold">
                  <CIcon name="navigation" className="size-4" />
                  {t("దారి చూపించు", "Get directions")}
                </Button>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-11 rounded-full border-primary/25 px-6 font-semibold text-primary hover:bg-secondary">
                  <CIcon name="whatsapp" className="size-4" />
                  {t("వాట్సాప్ చేయండి", "WhatsApp us")}
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="min-h-[380px]">
          <div className="h-full overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title={`Map — ${siteConfig.name}`}
              src={mapEmbedUrl}
              className="h-full min-h-[380px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════ FAQ (shared, used on patient-info too) ═══════════════════════ */
export function FaqSection({ items }: { items: { question: string; answer: string }[] }) {
  const { t } = useLang();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <section className="bg-white py-20 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow={t("సాధారణ ప్రశ్నలు", "Common questions")}
          title={t("మీరు అడగక ముందే సమాధానాలు", "Answers before you even ask")}
        />
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border bg-cream/50 px-5 shadow-none data-[state=open]:border-primary/25 data-[state=open]:bg-secondary/40"
              >
                <AccordionTrigger className="py-4 text-left font-display text-[15.5px] font-semibold hover:no-underline">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
