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
  useSyncExternalStore,
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

/**
 * Hydration-safe route state via useSyncExternalStore.
 *
 * During hydration React reads getServerSnapshot (always "/"), so the first
 * client render matches the server HTML EXACTLY no matter what hash the page
 * was opened with. Immediately after hydration it switches to the real hash —
 * fixing the Radix useId/aria-controls hydration mismatches that occurred
 * when loading a hash URL (e.g. /#/appointments) directly.
 *
 * getSnapshot caches by hash string: it must return a stable object identity
 * between hash changes or React would re-render forever.
 */
const SERVER_ROUTE = { path: "/", query: new URLSearchParams() };

let cachedHash: string | null = null;
let cachedRoute = SERVER_ROUTE;

function getClientRoute() {
  const hash = window.location.hash;
  if (cachedHash !== hash) {
    const { path, query } = parseHash();
    cachedHash = hash;
    cachedRoute = { path, query };
  }
  return cachedRoute;
}

function getServerRoute() {
  return SERVER_ROUTE;
}

function subscribeHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  return () => window.removeEventListener("hashchange", onStoreChange);
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const route = useSyncExternalStore(subscribeHash, getClientRoute, getServerRoute);

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
