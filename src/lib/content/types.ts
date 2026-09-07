/** Shared content types — mirror the Prisma models so a future CMS/DB
 *  migration is a straight seed. All clinical copy below is illustrative
 *  marketing copy for a multi-specialty hospital and should be reviewed by
 *  the hospital's medical team before launch. */

export type Department = {
  slug: string;
  name: string;
  shortName?: string;
  icon: string; // lucide icon key, mapped in components/site/icon.tsx
  tagline: string;
  cardDescription: string;
  overview: string[]; // paragraphs
  conditions: string[];
  treatments: string[];
  highlights: string[]; // 3 short differentiators for the detail page
};

export type Doctor = {
  slug: string;
  name: string;
  qualifications: string;
  departmentSlug: string;
  designation: string;
  /** [PLACEHOLDER] sample experience figure — replace with verified data */
  experienceYears: number;
  languages: string[];
  bio: string[];
  expertise: string[];
  timings: { days: string; hours: string }[];
  consultationNote?: string;
  photo?: string; // drop real photography here when available; monogram avatar renders otherwise
};

export type ServiceGroup = {
  category: string;
  title: string;
  description: string;
  icon: string;
  items: { name: string; description: string }[];
};

export type Facility = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type HealthPackage = {
  slug: string;
  name: string;
  description: string;
  includes: string[];
  recommendedFor: string;
  isPopular?: boolean;
  /** [PLACEHOLDER] pricing intentionally omitted — display "Price on request" */
  price?: never;
};

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: { intro?: string; items: string[] };
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  authorSlug: string; // references Doctor.slug
  authorName: string;
  publishedAt: string; // ISO date
  readMinutes: number;
  sections: BlogSection[];
  disclaimer?: string;
};

export type Testimonial = {
  id: string;
  patientName: string; // first name + initial, shared with consent
  treatment?: string;
  rating: number;
  quote: string;
};

export type FAQ = { question: string; answer: string };
