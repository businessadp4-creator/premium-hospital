"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";
import { CIcon } from "@/components/site/icon";
import { Link, usePageMeta } from "@/lib/router";
import { PageHero, Container, SectionHeading } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { BlogCard, DoctorAvatar } from "@/components/site/cards";
import { CtaBand } from "@/components/site/cta-band";
import { NotFoundInline } from "./specialities";
import { Button } from "@/components/ui/button";

/* ═════════════════ BLOG LIST ═════════════════ */
export function BlogListView() {
  const { t, content, dateLocale } = useLang();
  usePageMeta({
    title: t(
      "ఆరోగ్య లైబ్రరీ — డాక్టర్ల హెల్త్ ఆర్టికల్స్",
      "Health Library — doctor-written articles"
    ),
    description: t(
      `${siteConfig.name}, ${siteConfig.cityTe} డాక్టర్లు రాసిన ఆరోగ్య టిప్స్, వ్యాధి అవగాహన మరియు ప్రివెన్షన్ ఆర్టికల్స్ — గుండె హెల్త్, షుగర్, జ్వరాలు, పిల్లల న్యూట్రిషన్ మరియు హెల్దీ ఏజింగ్‌పై సింపుల్ గైడ్స్.`,
      `Practical health tips, disease awareness and prevention articles written by the doctors of ${siteConfig.name}, ${siteConfig.address.city} — heart health, diabetes, fevers, child nutrition and healthy ageing.`
    ),
  });

  const featured = content.blogPosts[0];

  return (
    <>
      <PageHero
        eyebrow={t("ఆరోగ్య లైబ్రరీ", "Health Library")}
        title={t("రోజువారీ హెల్త్ కోసం డాక్టర్ల గైడెన్స్", "Doctor guidance for everyday health")}
        description={t(
          "ఫైర్ చేసే హెడ్‌లైన్స్ కాదు, మ్యాజిక్ క్యూర్ ప్రామిస్‌లు కాదు — మా OPDలో మీరు కలిసే డాక్టర్లే రాసే సింపుల్, నిజాయితీ హెల్త్ ఎడ్యుకేషన్.",
          "No scare headlines, no miracle-cure promises — just practical, honest health education from the doctors you meet in our OPD."
        )}
        breadcrumbs={[{ label: t("హోమ్", "Home"), href: "/" }, { label: t("ఆరోగ్య లైబ్రరీ", "Health Library") }]}
      />

      {/* Featured article */}
      <section className="bg-cream py-14 md:py-16">
        <Container>
          <Reveal>
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-all hover:shadow-card-hover lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[340px]">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-primary">
                    {featured.category}
                  </span>
                  <span className="text-muted-foreground">
                    {new Date(featured.publishedAt).toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 line-clamp-3 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-3">
                  <DoctorAvatar name={featured.authorName} className="size-10 rounded-full" textClassName="text-sm" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">{featured.authorName}</p>
                    <p className="text-xs text-muted-foreground">
                      {featured.readMinutes} {t("నిమిషాల పఠనం", "min read")}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* All articles */}
      <section className="bg-white pb-20">
        <Container>
          <SectionHeading
            className="pt-14"
            eyebrow={t("అన్ని ఆర్టికల్స్", "All articles")}
            title={t("మీకు కావాల్సిన టాపిక్ ఎంచుకోండి", "Browse the topics you care about")}
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {content.blogCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border bg-cream/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i % 3} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════════════ BLOG DETAIL ═════════════════ */
export function BlogDetailView({ slug }: { slug: string }) {
  const { t, content, dateLocale } = useLang();
  const post = content.getPost(slug);
  const author = post ? content.getDoctor(post.authorSlug) : undefined;

  usePageMeta({
    title: post ? post.title : t("ఆర్టికల్ కనబడలేదు", "Article not found"),
    description: post?.excerpt,
  });

  if (!post) return <NotFoundInline label={t("ఆర్టికల్", "article")} />;

  const related = content.blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.coverImage}`,
    author: { "@type": "Person", name: post.authorName },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: post.publishedAt,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Article hero */}
      <section className="relative overflow-hidden bg-teal-deep pb-44 pt-[104px] text-white md:pt-[132px]">
        <div className="absolute inset-0 bg-dots-light" aria-hidden />
        <Container className="relative max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link to="/" className="transition-colors hover:text-gold">{t("హోమ్", "Home")}</Link></li>
              <li aria-hidden><CIcon name="chevron-right" className="size-3.5 text-white/50" /></li>
              <li><Link to="/blog" className="transition-colors hover:text-gold">{t("ఆరోగ్య లైబ్రరీ", "Health Library")}</Link></li>
              <li aria-hidden><CIcon name="chevron-right" className="size-3.5 text-white/50" /></li>
              <li aria-current="page" className="font-medium text-white">{post.category}</li>
            </ol>
          </nav>
          <h1 className="mt-6 font-display text-3xl font-bold leading-[1.15] md:text-[2.75rem]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-teal-soft">
            <span className="inline-flex items-center gap-2.5">
              <DoctorAvatar name={post.authorName} className="size-9 rounded-full" textClassName="text-xs" />
              <span>
                <span className="block font-semibold text-white">{post.authorName}</span>
                <span className="block text-xs text-teal-soft">{author?.designation ?? t("కన్సల్టెంట్", "Consultant")}</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CIcon name="calendar-check" className="size-4 text-gold" />
              {new Date(post.publishedAt).toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CIcon name="clock" className="size-4 text-gold" />
              {post.readMinutes} {t("నిమిషాల పఠనం", "min read")}
            </span>
          </div>
        </Container>
      </section>

      {/* Cover image overlapping */}
      <div className="relative z-10 mx-auto -mt-36 max-w-4xl px-4 sm:px-6">
        <div className="relative aspect-[16/8] overflow-hidden rounded-3xl shadow-card-hover">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <article className="bg-white py-12 md:py-16">
        <Container className="max-w-3xl">
          <p className="border-l-4 border-gold bg-cream/70 py-4 pl-5 text-[17px] font-medium leading-relaxed text-foreground/90">
            {post.excerpt}
          </p>
          <div className="mt-8 space-y-7">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display text-[22px] font-bold text-foreground">{section.heading}</h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="mt-4 text-[15.5px] leading-[1.85] text-foreground/80">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-2.5">
                    {section.list.intro && (
                      <p className="text-[15px] font-medium text-foreground/85">{section.list.intro}</p>
                    )}
                    {section.list.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-foreground/80">
                        <CIcon name="check-circle" className="mt-1 size-4 shrink-0 text-primary" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {post.disclaimer && (
            <div className="mt-10 rounded-2xl border border-border bg-cream/60 p-5">
              <p className="flex gap-2.5 text-[13px] leading-relaxed text-muted-foreground">
                <CIcon name="file-text" className="mt-0.5 size-4 shrink-0 text-gold" />
                {post.disclaimer}
              </p>
            </div>
          )}

          {/* Author card */}
          {author && (
            <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-border bg-cream/50 p-6 sm:flex-row sm:items-center md:p-8">
              <DoctorAvatar name={author.name} className="size-20 rounded-2xl" textClassName="text-2xl" />
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground">{t("రచయిత", "Author")}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{author.name}</h3>
                <p className="text-sm text-muted-foreground">{author.designation} · {author.qualifications}</p>
              </div>
              <div className="flex gap-2">
                <Link to={`/doctors/${author.slug}`}>
                  <Button variant="outline" className="h-10 rounded-full">{t("ప్రొఫైల్", "Profile")}</Button>
                </Link>
                <Link to={`/appointments?doctor=${author.slug}`}>
                  <Button className="h-10 rounded-full">{t("బుక్", "Book")}</Button>
                </Link>
              </div>
            </div>
          )}
        </Container>
      </article>

      {/* Related */}
      <section className="bg-cream py-16">
        <Container>
          <SectionHeading eyebrow={t("చదువుతూ ఉండండి", "Keep reading")} title={t("సంబంధిత హెల్త్ ఆర్టికల్స్", "Related health articles")} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
