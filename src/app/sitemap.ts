import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { departments, doctors, allBlogPosts } from "@/lib/content";

/**
 * Sitemap covering all site views. In this sandbox the views live under the
 * single route via hash URLs; the paths below represent the production URL
 * structure for when the site is deployed with App Router paths.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticViews: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/specialities`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/doctors`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/facilities`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/health-packages`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/patient-information`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/appointments`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/emergency`, changeFrequency: "yearly", priority: 0.85 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/medical-disclaimer`, changeFrequency: "yearly", priority: 0.3 },
  ].map((entry) => ({ ...entry, lastModified: now }));

  const deptViews: MetadataRoute.Sitemap = departments.map((d) => ({
    url: `${base}/specialities/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const doctorViews: MetadataRoute.Sitemap = doctors.map((doc) => ({
    url: `${base}/doctors/${doc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogViews: MetadataRoute.Sitemap = allBlogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "yearly",
    priority: 0.55,
  }));

  return [...staticViews, ...deptViews, ...doctorViews, ...blogViews];
}
