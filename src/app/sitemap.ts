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
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/specialities`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/doctors`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/facilities`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/health-packages`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/patient-information`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/appointments`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/emergency`, lastModified: now, changeFrequency: "yearly", priority: 0.85 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/medical-disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

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
