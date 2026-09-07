import { SiteApp } from "@/components/site/site-app";
import { siteConfig } from "@/lib/site-config";

/**
 * Durga Multi Specialty Hospital — entry route.
 * The production sandbox exposes a single route; all 18 site views are
 * delivered through the hash router inside SiteApp (see src/lib/router.tsx).
 */
export default function Page() {
  return <SiteApp />;
}

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.cityTe} మల్టీ స్పెషాలిటీ హాస్పిటల్`,
};
