"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { Link, useRouter } from "@/lib/router";
import { CIcon } from "./icon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { departments } from "@/lib/content";

/** Brand logo mark */
export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={cn(
          "relative grid place-items-center rounded-xl bg-gradient-to-br from-primary to-teal-deep font-display font-bold text-white shadow-sm transition-all",
          compact ? "size-9 text-lg" : "size-10 text-xl"
        )}
        aria-hidden
      >
        D
        <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-gold text-[10px] font-bold leading-none text-white">
          +
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold tracking-tight transition-all",
            compact ? "text-[17px]" : "text-lg",
            light ? "text-white" : "text-foreground"
          )}
        >
          Durga
        </span>
        <span
          className={cn(
            "mt-1 text-[9.5px] font-semibold uppercase tracking-[0.18em]",
            light ? "text-teal-soft" : "text-muted-foreground"
          )}
        >
          Multi Specialty Hospital
        </span>
      </span>
    </span>
  );
}

const isActive = (path: string, href: string) => {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
};

export function Header() {
  const { path } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Note: menu links call setOpen(false) via Link onClick.

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ── Utility bar (hides on scroll) ─────────────────────────── */}
      <div
        className={cn(
          "hidden overflow-hidden bg-teal-deep text-white transition-all duration-300 lg:block",
          scrolled ? "max-h-0" : "max-h-12"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[13px] lg:px-8">
          <div className="flex items-center gap-6 text-teal-soft">
            <span className="inline-flex items-center gap-1.5">
              <CIcon name="map-pin" className="size-3.5 text-gold" />
              {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CIcon name="clock" className="size-3.5 text-gold" />
              Mon–Sat: 8 AM – 8 PM
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 text-teal-soft transition-colors hover:text-white"
            >
              <CIcon name="mail" className="size-3.5 text-gold" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-gold"
            >
              <CIcon name="phone" className="size-3.5 text-gold" />
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navigation bar ───────────────────────────────────── */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-border/80 bg-white/90 shadow-card backdrop-blur-lg"
            : "border-transparent bg-white/75 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            ariaLabel={`${siteConfig.name} — home`}
            className={cn("shrink-0 py-3 transition-all", scrolled ? "scale-[0.97]" : "")}
          >
            <Logo compact={scrolled} />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
            {siteConfig.nav.map((item) => {
              const active = isActive(path, item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-[14.5px] font-medium transition-colors",
                    active ? "text-primary" : "text-foreground/75 hover:bg-secondary hover:text-primary"
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold" aria-hidden />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 py-3">
            {/* Call */}
            <a href={`tel:${siteConfig.phone.tel}`} className="hidden sm:block">
              <Button
                variant="outline"
                className={cn(
                  "rounded-full border-primary/25 text-primary transition-all hover:bg-secondary hover:text-secondary-foreground",
                  scrolled ? "h-9 px-4" : "h-10 px-5"
                )}
              >
                <CIcon name="phone-call" className="size-4" />
                Call Now
              </Button>
            </a>
            {/* Book */}
            <Link to="/appointments" className="hidden sm:block">
              <Button
                className={cn(
                  "rounded-full bg-primary shadow-sm transition-all hover:bg-teal-deep hover:shadow-md",
                  scrolled ? "h-9 px-4" : "h-10 px-5"
                )}
              >
                <CIcon name="calendar-check" className="size-4" />
                Book an Appointment
              </Button>
            </Link>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-10 rounded-full border-border xl:hidden"
                  aria-label="Open navigation menu"
                >
                  <CIcon name="menu" className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-full max-w-sm flex-col gap-0 overflow-y-auto p-0 sm:max-w-sm">
                <SheetHeader className="border-b px-5 py-4 text-left">
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile" className="flex flex-col gap-1 px-3 py-4">
                  {siteConfig.nav.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                        isActive(path, item.href)
                          ? "bg-secondary text-primary"
                          : "text-foreground/80 hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto space-y-3 border-t bg-muted/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Popular specialities
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {departments.slice(0, 6).map((d) => (
                      <Link
                        key={d.slug}
                        to={`/specialities/${d.slug}`}
                        onClick={() => setOpen(false)}
                        className="rounded-full border bg-white px-3 py-1.5 text-xs font-medium text-foreground/75 transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        {d.shortName ?? d.name}
                      </Link>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <a href={`tel:${siteConfig.phone.tel}`}>
                      <Button variant="outline" className="h-11 w-full rounded-xl">
                        <CIcon name="phone-call" className="size-4" /> Call
                      </Button>
                    </a>
                    <Link to="/appointments" onClick={() => setOpen(false)}>
                      <Button className="h-11 w-full rounded-xl">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
