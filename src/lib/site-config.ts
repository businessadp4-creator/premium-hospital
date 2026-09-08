/**
 * ============================================================================
 * DURGA MULTI SPECIALTY HOSPITAL — CENTRAL SITE CONFIGURATION (TELUGU)
 * ============================================================================
 * ⚠️  PLACEHOLDER POLICY ⚠️
 * Every field marked with `// [PLACEHOLDER]` contains SAMPLE data in a
 * realistic format so the site renders gracefully during review.
 * Replace ALL of them with the hospital's verified details before launch.
 * Search for the marker "[PLACEHOLDER]" to find every item at once.
 * ============================================================================
 */

export const siteConfig = {
  name: "Durga Multi Specialty Hospital",
  nameTe: "దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్",
  shortName: "Durga Hospital",
  legalName: "Durga Multi Specialty Hospital",

  city: "Bangalore",
  cityTe: "బెంగళూరు",
  state: "Karnataka",
  stateTe: "కర్ణాటక",

  tagline: "అద్భుతమైన వైద్య సేవలు. మానవీయమైన సంరక్షణ.",
  taglineEn: "Expert medical care. Human touch.",
  description:
    "బెంగళూరులోని దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్ — 12కి పైగా స్పెషాలిటీలలో అనుభవజ్ఞులైన వైద్య నిపుణుల సేవలు: గుండె జబ్బులు, ఎముకల వ్యాధులు, నరాల వ్యాధులు, మాతృ శిశు సంరక్షణ మరియు మరిన్ని. అదే భవనంలో ఆధునిక పరీక్షలు, ఆధునిక ఆపరేషన్ థియేటర్లు మరియు రోగి-కేంద్రీకృత సంరక్షణ బృందం.",
  descriptionEn:
    "Durga Multi Specialty Hospital, Bangalore — experienced specialists across 12+ specialities: heart care, orthopaedics, neurology, mother & child care and more. Advanced diagnostics, modern operation theatres and a patient-first care team, all under one roof.",

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
    opd: "సోమవారం – శనివారం: ఉదయం 8:00 – సాయంత్రం 8:00",
    opdSunday: "ఆదివారం: ఉదయం 9:00 – మధ్యాహ్నం 2:00 (అపాయింట్‌మెంట్ ద్వారా మాత్రమే)",
    emergency: "అత్యవసర వైద్యం & ఫార్మసీ: 24 గంటలూ తెరిచి ఉంటాయి [ప్రారంభానికి ముందు ధృవీకరించండి]",
  },

  /** English mirrors of the localised config strings (EN language mode). */
  hoursEn: {
    opd: "Monday – Saturday: 8:00 AM – 8:00 PM",
    opdSunday: "Sunday: 9:00 AM – 2:00 PM (by appointment only)",
    emergency: "Emergency care & pharmacy: open 24 hours [verify before launch]",
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

  /** Navigation model — labels per language */
  nav: [
    { href: "/", te: "హోమ్", en: "Home" },
    { href: "/about", te: "మా గురించి", en: "About Us" },
    { href: "/specialities", te: "స్పెషాలిటీలు", en: "Specialities" },
    { href: "/doctors", te: "వైద్యులు", en: "Doctors" },
    { href: "/services", te: "సేవలు", en: "Services" },
    { href: "/facilities", te: "సౌకర్యాలు", en: "Facilities" },
    { href: "/health-packages", te: "ప్యాకేజీలు", en: "Health Packages" },
    { href: "/patient-information", te: "రోగి సమాచారం", en: "Patient Info" },
    { href: "/contact", te: "సంప్రదించండి", en: "Contact" },
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
  `నమస్కారం, దుర్గా మల్టీ స్పెషాలిటీ హాస్పిటల్‌లో అపాయింట్‌మెంట్ గురించి విచారించాలనుకుంటున్నాను.`
)}`;

export const whatsappUrlEn = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  `Hello, I would like to enquire about an appointment at Durga Multi Specialty Hospital.`
)}`;
