"use client";

import { cn } from "@/lib/utils";
import { CIcon } from "./icon";
import { Link } from "@/lib/router";
import { Reveal } from "./reveal";

/** Eyebrow label — small caps with gold tick */
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em]",
        light ? "text-gold-soft" : "text-primary"
      )}
    >
      <span className={cn("h-[2px] w-6 rounded-full", light ? "bg-gold" : "bg-gold")} aria-hidden />
      {children}
    </span>
  );
}

/** Editorial section heading block */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-3 font-display font-bold display-md",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-relaxed md:text-lg", light ? "text-teal-soft/90" : "text-muted-foreground")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Breadcrumb trail (with BreadcrumbList schema) */
export function Breadcrumbs({
  items,
  light = false,
}: {
  items: { label: string; href?: string }[];
  light?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
    })),
  };
  return (
    <nav aria-label="బ్రెడ్‌క్రంబ్" className={cn("text-sm", light ? "text-white/70" : "text-muted-foreground")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <CIcon name="chevron-right" className={cn("size-3.5", light ? "text-white/50" : "text-muted-foreground/60")} />}
            {item.href ? (
              <Link to={item.href} className="transition-colors hover:text-gold">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={cn("font-medium", light ? "text-white" : "text-foreground")}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Inner-page hero — deep teal band with breadcrumb + title */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-teal-deep text-white">
      <div className="absolute inset-0 bg-dots-light" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/50 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-140px] left-[-6%] h-[320px] w-[320px] rounded-full bg-gold/20 blur-[110px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 md:pb-16 md:pt-32 lg:px-8">
        <Breadcrumbs items={breadcrumbs} light />
        <div className="mt-6 max-w-3xl">
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">
              <span className="h-[2px] w-6 rounded-full bg-gold" aria-hidden />
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-base leading-relaxed text-teal-soft/95 md:text-lg">{description}</p>
          ) : null}
          {children ? <div className="mt-7">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

/** Consistent page container */
export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
