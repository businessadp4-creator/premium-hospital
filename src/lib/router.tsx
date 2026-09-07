"use client";

/**
 * Lightweight hash-based router.
 * The production sandbox exposes a single Next.js route, so the site's 18
 * views are delivered through clean hash URLs (/#/about, /#/doctors/dr-x…)
 * with per-view titles, meta descriptions and scroll management.
 * In a standard deployment these map 1:1 to App Router paths.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";

type RouterState = {
  path: string;
  query: URLSearchParams;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterState | null>(null);

function parseHash(): { path: string; query: URLSearchParams } {
  const raw = typeof window === "undefined" ? "/" : window.location.hash.replace(/^#/, "");
  const cleaned = raw === "" ? "/" : raw.startsWith("/") ? raw : `/${raw}`;
  const [path, qs] = cleaned.split("?");
  return { path: path || "/", query: new URLSearchParams(qs || "") };
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  // Scroll management: top of page, or to a section when ?s=<id> is present
  useEffect(() => {
    const section = route.query.get("s");
    if (section) {
      // wait a frame for the view to render
      requestAnimationFrame(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0 });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [route]);

  const navigate = useCallback((to: string) => {
    const target = to.startsWith("/") ? to : `/${to}`;
    if (`#${target}` === window.location.hash) {
      // same route: re-run scroll effect manually
      const section = parseHash().query.get("s");
      if (section) {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    window.location.hash = target;
  }, []);

  const value = useMemo(
    () => ({ path: route.path, query: route.query, navigate }),
    [route.path, route.query, navigate]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterState {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used within RouterProvider");
  return ctx;
}

/** Internal anchor that renders real <a href="#/..."> markup for a11y + SEO */
export function Link({
  to,
  className,
  children,
  onClick,
  ariaLabel,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const { navigate } = useRouter();
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
    navigate(to);
  };
  return (
    <a href={`#${to}`} onClick={handle} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

/** Per-view document title + meta description (client-rendered SPA) */
export function usePageMeta({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);
}
