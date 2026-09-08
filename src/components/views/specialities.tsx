"use client";

import { siteConfig } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";
import { CIcon } from "@/components/site/icon";
import { Link } from "@/lib/router";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { SpecialityCard, DoctorCard } from "@/components/site/cards";
import { FaqSection } from "@/components/home/sections-c";
import { CtaBand } from "@/components/site/cta-band";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/router";

/* ═════════════════ SPECIALITIES LIST ═════════════════ */
export function SpecialitiesView() {
  const { t, content } = useLang();
  usePageMeta({
    title: t(
      `స్పెషాలిటీలు — ${siteConfig.cityTe}లో మల్టీ-స్పెషాలిటీ శాఖలు`,
      `Specialities — multi-speciality departments in ${siteConfig.address.city}`
    ),
    description: t(
      `${siteConfig.name}, ${siteConfig.cityTe}లో 12కి పైగా స్పెషాలిటీలు: కార్డియాలజీ, ఆర్తోపెడిక్స్, న్యూరాలజీ, ప్రసూతి & గైనకాలజీ, పీడియాట్రిక్స్, జనరల్ మెడిసిన్, ఈఎన్‌టీ, డెర్మటాలజీ, యూరాలజీ, పల్మనాలజీ, రేడియాలజీ.`,
      `${siteConfig.name}, ${siteConfig.address.city} — 12+ specialities: cardiology, orthopaedics, neurology, obstetrics & gynaecology, paediatrics, general medicine, ENT, dermatology, urology, pulmonology and radiology.`
    ),
  });

  return (
    <>
      <PageHero
        eyebrow={t("సంరక్షణ కేంద్రాలు", "Centres of care")}
        title={t("స్పెషాలిటీలు & శాఖలు", "Specialities & departments")}
        description={t(
          "పన్నెండు క్లినికల్ శాఖలు — ప్రతి దానికి సీనియర్ కన్సల్టెంట్ లీడర్‌షిప్, అదే బిల్డింగ్‌లో టెస్ట్స్ సపోర్ట్ — మీ ఆన్సర్స్ మరియు ట్రీట్‌మెంట్ ఒకే చోట.",
          "Twelve coordinated clinical departments — each led by senior consultants with diagnostics in the same building — so your answers and treatment stay in one place."
        )}
        breadcrumbs={[{ label: t("హోమ్", "Home"), href: "/" }, { label: t("స్పెషాలిటీలు", "Specialities") }]}
      />
      <section className="bg-cream py-16 md:py-20">
        <Container>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.departments.map((dept, i) => (
              <SpecialityCard key={dept.slug} dept={dept} index={i} />
            ))}
          </RevealGroup>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════════════ SPECIALITY DETAIL ═════════════════ */
export function SpecialityDetailView({ slug }: { slug: string }) {
  const { t, content } = useLang();
  const dept = content.getDepartment(slug);
  usePageMeta({
    title: dept
      ? t(
          `${dept.name} — ${siteConfig.cityTe} | ${dept.tagline}`,
          `${dept.name} in ${siteConfig.address.city} | ${dept.tagline}`
        )
      : t("స్పెషాలిటీ కనబడలేదు", "Speciality not found"),
    description: dept?.cardDescription,
  });

  if (!dept) return <NotFoundInline label={t("స్పెషాలిటీ", "speciality")} />;

  const deptDoctors = content.getDoctorsByDepartment(dept.slug);
  const faqs = content.getDepartmentFaqs(dept);

  return (
    <>
      {/* Department hero */}
      <section className="relative overflow-hidden bg-teal-deep pb-16 pt-[104px] text-white md:pb-20 md:pt-[132px]">
        <div className="absolute inset-0 bg-dots-light" aria-hidden />
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/60 blur-[120px]" aria-hidden />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link to="/" className="transition-colors hover:text-gold">{t("హోమ్", "Home")}</Link></li>
              <li aria-hidden><CIcon name="chevron-right" className="size-3.5 text-white/50" /></li>
              <li><Link to="/specialities" className="transition-colors hover:text-gold">{t("స్పెషాలిటీలు", "Specialities")}</Link></li>
              <li aria-hidden><CIcon name="chevron-right" className="size-3.5 text-white/50" /></li>
              <li aria-current="page" className="font-medium text-white">{dept.name}</li>
            </ol>
          </nav>
          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">
                <span className="grid size-9 place-items-center rounded-lg bg-gold/15">
                  <CIcon name={dept.icon} className="size-5" />
                </span>
                {t("శాఖ", "Department")}
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">{dept.name}</h1>
              <p className="mt-3 font-display text-lg text-gold-soft">{dept.tagline}</p>
              <p className="mt-4 leading-relaxed text-teal-soft">{dept.cardDescription}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <Link to={`/appointments?department=${dept.slug}`}>
                <Button className="h-12 w-full rounded-full bg-gold px-7 font-semibold text-white hover:bg-gold/90 md:w-auto">
                  <CIcon name="calendar-check" className="size-4" />
                  {t(
                    `${dept.shortName ?? dept.name} అపాయింట్‌మెంట్ బుక్ చేయండి`,
                    `Book a ${dept.shortName ?? dept.name} appointment`
                  )}
                </Button>
              </Link>
              <a href={`tel:${siteConfig.phone.tel}`}>
                <Button variant="outline" className="h-12 w-full rounded-full border-white/30 bg-white/5 px-7 font-semibold text-white hover:bg-white/15 hover:text-white md:w-auto">
                  <CIcon name="phone-call" className="size-4" />
                  {siteConfig.phone.display}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview + highlights */}
      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading
              eyebrow={t("అవలోకనం", "Overview")}
              title={t(`${dept.name}లో మా కేర్ అప్రోచ్`, `Our approach to ${dept.name} care`)}
            />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              {dept.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Conditions */}
            <Reveal className="mt-10">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t("మేము చికిత్స చేసే సమస్యలు", "Conditions we treat")}
              </h3>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {dept.conditions.map((c) => (
                  <li key={c} className="flex gap-2.5 text-sm text-foreground/85">
                    <CIcon name="check-circle" className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Treatments */}
            <Reveal className="mt-10">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t("సేవలు & చికిత్సలు", "Services & treatments")}
              </h3>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {dept.treatments.map((tr) => (
                  <li key={tr} className="flex gap-2.5 text-sm text-foreground/85">
                    <CIcon name="circle-check" className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2} />
                    {tr}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="rounded-2xl border border-border bg-cream/70 p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold">
                  {t(
                    `${dept.shortName ?? dept.name} కోసం రోగులు మాకు ఎందుకు వస్తారు`,
                    `Why patients choose ${dept.shortName ?? dept.name}`
                  )}
                </h3>
                <ul className="mt-4 space-y-3.5">
                  {dept.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                        <CIcon name="check" className="size-3" strokeWidth={3} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-gold/40 bg-gold-soft p-6">
                <h3 className="font-display text-lg font-semibold text-accent-foreground">
                  {t("ఈ శాఖ అవసరమా అని కన్ఫ్యూజ్‌డ్‌గా ఉన్నారా?", "Not sure this is the right department?")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-accent-foreground/80">
                  {t(
                    "జనరల్ మెడిసిన్ కన్సల్టేషన్‌తో స్టార్ట్ చేయండి — మా డాక్టర్స్ చూసి, అనవసర టెస్ట్స్ లేకుండా సరైన నిపుణుడి దగ్గరకు దారి చూపుతారు.",
                    "Start with a general medicine consultation — our doctors will assess you and guide you to the right specialist, without unnecessary tests."
                  )}
                </p>
                <Link to="/appointments?department=general-medicine">
                  <Button className="mt-4 h-10 w-full rounded-full">
                    {t("జనరల్ మెడిసిన్ కన్సల్టేషన్", "General medicine consultation")}
                  </Button>
                </Link>
              </div>
            </Reveal>
          </aside>
        </Container>
      </section>

      {/* Doctors */}
      {deptDoctors.length > 0 && (
        <section className="bg-cream py-16 md:py-20">
          <Container>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <SectionHeading
                eyebrow={t("కన్సల్టెంట్‌లు", "Consultants")}
                title={t(`${dept.name} డాక్టర్స్`, `${dept.name} doctors`)}
              />
              <Link to="/doctors" className="shrink-0">
                <Button variant="outline" className="h-10 rounded-full border-primary/25 font-semibold text-primary hover:bg-secondary">
                  {t("అన్ని వైద్యులు", "All doctors")}
                </Button>
              </Link>
            </div>
            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {deptDoctors.map((doctor) => (
                <RevealItem key={doctor.slug} className="h-full">
                  <DoctorCard doctor={doctor} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <FaqSection items={faqs} />
      <CtaBand />
    </>
  );
}

export function NotFoundInline({ label }: { label: string }) {
  const { t } = useLang();
  usePageMeta({
    title: t("పేజీ కనబడలేదు", "Page not found"),
    description: t(
      `మీరు వెతుకుతున్న పేజీ కనబడలేదు. ${siteConfig.name}, ${siteConfig.cityTe}లో స్పెషాలిటీలు, వైద్యులు మరియు సేవలను చూడండి.`,
      `The page you're looking for wasn't found. Explore specialities, doctors and services at ${siteConfig.name}, ${siteConfig.address.city}.`
    ),
  });
  return (
    <section className="bg-cream pb-24 pt-[140px]">
      <Container className="max-w-xl text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-secondary text-primary">
          <CIcon name="file-text" className="size-7" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-bold">
          {t(`ఆ ${label} మాకు కనబడలేదు`, `That ${label} could not be found`)}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {t(
            "మీరు వెతుకుతున్న పేజీ మారి ఉండవచ్చు. మా స్పెషాలిటీలు, డాక్టర్స్ చూడండి లేదా రిసెప్షన్‌కు కాల్ చేయండి — మేము దారి చూపుతాము.",
            "The page may have moved. Browse our specialities and doctors, or call reception — we'll point you the right way."
          )}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/specialities">
            <Button className="h-11 rounded-full px-6">{t("స్పెషాలిటీలు చూడండి", "View specialities")}</Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="h-11 rounded-full px-6">{t("హోమ్‌కు వెళ్లండి", "Go home")}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
