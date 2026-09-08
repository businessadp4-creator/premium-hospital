import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/site-config";

const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display-latin",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body-latin",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/** Premium Telugu typeface — pairs with the Latin display/body fonts. */
const teluguFont = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.cityTe} మల్టీ స్పెషాలిటీ హాస్పిటల్`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Durga Multi Specialty Hospital",
    "బెంగళూరు ఆసుపత్రి",
    "బెంగళూరులో మల్టీ స్పెషాలిటీ హాస్పిటల్",
    "హాస్పిటల్ నియర్ మీ బెంగళూరు",
    "అపాయింట్‌మెంట్ బుక్ చేయండి బెంగళూరు",
    "గుండె జబ్బుల ఆసుపత్రి బెంగళూరు",
    "ఎముకల వైద్యుడు బెంగళూరు",
    "అత్యవసర ఆసుపత్రి బెంగళూరు",
    "హెల్త్ చెకప్ బెంగళూరు",
    "multi speciality hospital in Bangalore",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.cityTe} మల్టీ స్పెషాలిటీ హాస్పిటల్`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "te_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1344,
        height: 768,
        alt: `${siteConfig.name} — వైద్యుడు రోగిని సంప్రదించుకుంటున్న దృశ్యం`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.cityTe} మల్టీ స్పెషాలిటీ హాస్పిటల్`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#0e6259",
  width: "device-width",
  initialScale: 1,
};

/** Hospital / MedicalOrganization structured data (site-wide) */
const hospitalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: siteConfig.name,
  alternateName: siteConfig.nameTe,
  url: siteConfig.url,
  telephone: siteConfig.phone.display,
  email: siteConfig.email,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.pincode,
    addressCountry: "IN",
  },
  medicalSpecialty: [
    "Cardiovascular",
    "Musculoskeletal",
    "Neurologic",
    "PrimaryCare",
    "Gynecologic",
    "Pediatric",
    "Dermatology",
    "Urologic",
    "Pulmonary",
    "Otolaryngologic",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Outpatient Consultations" },
    { "@type": "MedicalProcedure", name: "Diagnostic Laboratory and Imaging" },
    { "@type": "MedicalProcedure", name: "Emergency Care" },
    { "@type": "MedicalProcedure", name: "Laparoscopic Surgery" },
    { "@type": "MedicalProcedure", name: "Preventive Health Check-ups" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="te-IN" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${teluguFont.variable} antialiased bg-background text-foreground font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
        />
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
