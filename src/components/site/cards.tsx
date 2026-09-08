"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { CIcon } from "./icon";
import { Link } from "@/lib/router";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Department, Doctor, Facility, HealthPackage, BlogPost, Testimonial } from "@/lib/content";

/* ── Speciality card ──────────────────────────────────────────────────── */
export function SpecialityCard({ dept, index = 0 }: { dept: Department; index?: number }) {
  const { t } = useLang();
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} className="h-full">
      <Link
        to={`/specialities/${dept.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card-hover"
      >
        <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <CIcon name={dept.icon} className="size-6" />
        </span>
        <h3 className="mt-5 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {dept.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {dept.cardDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {t("శాఖ వివరాలు చూడండి", "View department")}
          <CIcon name="arrow-right" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}

/* ── Doctor monogram avatar (renders until real photos are provided) ──── */
export function DoctorAvatar({
  name,
  className,
  textClassName,
}: {
  name: string;
  className?: string;
  textClassName?: string;
}) {
  const initials = name
    .replace(/^(డా\.|Dr\.?)\s*/u, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span
      aria-hidden
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-teal-soft to-gold-soft",
        className
      )}
    >
      <CIcon name="user" className="absolute -bottom-3 size-2/3 text-primary/15" strokeWidth={1.2} />
      <span className={cn("relative font-display font-bold text-primary", textClassName ?? "text-3xl")}>
        {initials}
      </span>
    </span>
  );
}

/* ── Doctor card ──────────────────────────────────────────────────────── */
export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const { t } = useLang();
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {doctor.photo ? (
        <div className="relative aspect-[4/3.4] w-full overflow-hidden">
          <Image
            src={doctor.photo}
            alt={`${doctor.name} — ${doctor.designation}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <DoctorAvatar
          name={doctor.name}
          className="aspect-[4/2.6] w-full rounded-b-none rounded-t-2xl"
          textClassName="text-5xl"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-foreground">{doctor.name}</h3>
        <p className="mt-1 text-[13px] font-medium text-primary">{doctor.qualifications}</p>
        <p className="mt-2.5 text-sm text-muted-foreground">{doctor.designation}</p>
        <div className="mt-4 flex flex-wrap gap-1.5 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1">
            <CIcon name="award" className="size-3.5 text-gold" />
            {doctor.experienceYears}+ {t("ఏళ్ల అనుభవం", "yrs experience")}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1">
            <CIcon name="languages" className="size-3.5 text-gold" />
            {doctor.languages.length} {t("భాషలు", "languages")}
          </span>
        </div>
        <div className="mt-5 flex gap-2 pt-1">
          <Link to={`/doctors/${doctor.slug}`} className="flex-1">
            <Button variant="outline" className="h-10 w-full rounded-full text-[13px]">
              {t("ప్రొఫైల్", "Profile")}
            </Button>
          </Link>
          <Link to={`/appointments?doctor=${doctor.slug}`} className="flex-1">
            <Button className="h-10 w-full rounded-full text-[13px]">{t("బుక్", "Book")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Facility card (editorial gallery) ────────────────────────────────── */
export function FacilityCard({ facility, priority = false }: { facility: Facility; priority?: boolean }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl shadow-card">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={facility.image}
          alt={`${facility.name} at Durga Multi Specialty Hospital`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/90 via-teal-deep/25 to-transparent" aria-hidden />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="font-display text-lg font-semibold text-white md:text-xl">{facility.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/80">{facility.description}</p>
      </figcaption>
    </figure>
  );
}

/* ── Health package card ──────────────────────────────────────────────── */
export function PackageCard({ pkg }: { pkg: HealthPackage }) {
  const { t } = useLang();
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        pkg.isPopular ? "border-gold/50 ring-1 ring-gold/25" : "border-border"
      )}
    >
      {pkg.isPopular && (
        <Badge className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-white hover:bg-gold">
          {t("అత్యధికంగా ఎంచుకున్నది", "Most chosen")}
        </Badge>
      )}
      <h3 className="font-display text-xl font-semibold text-foreground">{pkg.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>
      <ul className="mt-5 flex-1 space-y-2.5">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-foreground/85">
            <CIcon name="check-circle" className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-dashed border-border pt-4">
        <p className="text-xs text-muted-foreground">{t("ఎవరికి సిఫారసు", "Recommended for")}</p>
        <p className="mt-0.5 text-sm font-medium text-foreground/85">{pkg.recommendedFor}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-display text-lg font-semibold text-primary">{t("ధర విచారణపై", "Price on request")}</span>
          <Link to={`/appointments?package=${pkg.slug}`}>
            <Button className="h-10 rounded-full">{t("ఇప్పుడే విచారించండి", "Enquire now")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonial card ─────────────────────────────────────────────────── */
export function TestimonialCard({ tm }: { tm: Testimonial }) {
  const { t } = useLang();
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
      <CIcon name="quote" className="size-7 text-gold" />
      <div className="mt-3 flex gap-0.5" aria-label={t(`5 కి ${tm.rating} నక్షత్రాలు`, `${tm.rating} out of 5 stars`)}>
        {Array.from({ length: 5 }).map((_, i) => (
          <CIcon
            key={i}
            name="star"
            className={cn("size-4", i < tm.rating ? "fill-gold text-gold" : "text-border")}
          />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground/85">
        “{tm.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="grid size-10 place-items-center rounded-full bg-secondary font-display text-sm font-bold text-primary">
          {tm.patientName[0]}
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">{tm.patientName}</p>
          {tm.treatment && <p className="text-xs text-muted-foreground">{tm.treatment}</p>}
        </div>
      </figcaption>
    </figure>
  );
}

/* ── Blog card ────────────────────────────────────────────────────────── */
export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const { t, dateLocale } = useLang();
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        <Link to={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <Badge className="absolute left-4 top-4 rounded-full bg-white/90 text-[11px] font-semibold text-teal-deep backdrop-blur hover:bg-white/90">
            {post.category}
          </Badge>
        </Link>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{new Date(post.publishedAt).toLocaleDateString(dateLocale, { day: "numeric", month: "short", year: "numeric" })}</span>
            <span aria-hidden>•</span>
            <span>{post.readMinutes} {t("నిమిషాల పఠనం", "min read")}</span>
          </div>
          <h3 className="mt-2.5 font-display text-[17px] font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-foreground/75">
              <CIcon name="user" className="size-3.5 text-primary" />
              {post.authorName}
            </span>
            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-gold"
            >
              {t("చదవండి", "Read")}
              <CIcon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
