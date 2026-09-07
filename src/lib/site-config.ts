/**
 * ============================================================================
 * DURGA MULTI SPECIALTY HOSPITAL — CENTRAL SITE CONFIGURATION
 * ============================================================================
 * ⚠️  PLACEHOLDER POLICY ⚠️
 * Every field marked with `// [PLACEHOLDER]` contains SAMPLE data in a
 * realistic format so the site renders gracefully during review.
 * Replace ALL of them with the hospital's verified details before launch.
 * Search for the marker "[PLACEHOLDER]" to find every item at once.
 * No statistics, claims, doctors, or testimonials elsewhere in the codebase
 * are presented as verified facts.
 * ============================================================================
 */

export const siteConfig = {
  name: "Durga Multi Specialty Hospital",
  shortName: "Durga Hospital",
  legalName: "Durga Multi Specialty Hospital",

  city: "Bangalore",
  state: "Karnataka",

  tagline: "Advanced Healthcare. Compassionate Care.",
  description:
    "Durga Multi Specialty Hospital in Bangalore offers expert care across 12+ specialities — cardiology, orthopaedics, neurology, mother & child care and more — supported by in-house diagnostics, modern operation theatres and a patient-first care team.",

  /**
   * [PLACEHOLDER] Official website domain — used for canonical URLs, sitemap
   * and Open Graph metadata. Replace with the real domain.
   */
  url: "https://www.durgahospital-bangalore.com",

  /**
   * [PLACEHOLDER] Reception / appointments phone number.
   * Format: display (human readable) + tel (for tel: links, digits only).
   */
  phone: {
    display: "+91 80 4712 3400",
    tel: "+918047123400",
  },

  /**
   * [PLACEHOLDER] Emergency & ambulance number.
   * ⚠️ Only advertise 24/7 availability after verifying the hospital's
   * actual emergency rota.
   */
  emergency: {
    display: "+91 80 4712 3450",
    tel: "+918047123450",
  },

  /** [PLACEHOLDER] WhatsApp business number (country code + number, digits only). */
  whatsapp: "918047123400",

  /** [PLACEHOLDER] Official enquiry email. */
  email: "care@durgahospital-bangalore.com",

  /**
   * [PLACEHOLDER] Full postal address.
   * Used across footer, contact page, maps embed, schema.org markup.
   */
  address: {
    line1: "No. 42, 100 Feet Road",
    line2: "Indiranagar",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560038",
  },

  /**
   * [PLACEHOLDER] Opening hours. Verify with hospital administration.
   */
  hours: {
    opd: "Monday – Saturday: 8:00 AM – 8:00 PM",
    opdSunday: "Sunday: 9:00 AM – 2:00 PM (consultation by appointment)",
    emergency: "Emergency & Pharmacy: Open 24 hours [verify before launch]",
  },

  /**
   * [PLACEHOLDER] Social media profiles — remove entries that do not exist.
   */
  social: {
    facebook: "https://facebook.com/durgahospitalblr",
    instagram: "https://instagram.com/durgahospitalblr",
    youtube: "https://youtube.com/@durgahospitalblr",
    linkedin: "https://linkedin.com/company/durgahospitalblr",
  },

  /** [PLACEHOLDER] Founding year / history claims — verify before publishing. */
  establishedYear: null as number | null,

  /** Navigation model */
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Specialities", href: "/specialities" },
    { label: "Doctors", href: "/doctors" },
    { label: "Services", href: "/services" },
    { label: "Facilities", href: "/facilities" },
    { label: "Health Packages", href: "/health-packages" },
    { label: "Patient Information", href: "/patient-information" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Convenience helpers derived from the config */
export const fullAddress = `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.pincode}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${siteConfig.name}, ${fullAddress}`
)}&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${siteConfig.name}, ${fullAddress}`
)}`;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  `Hello, I would like to enquire about an appointment at ${siteConfig.name}.`
)}`;
