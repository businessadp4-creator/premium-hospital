import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/site-config";

const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Multi-Speciality Hospital in ${siteConfig.city}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Durga Multi Specialty Hospital",
    "multi speciality hospital in Bangalore",
    "hospital near me Bangalore",
    "book appointment hospital Bangalore",
    "cardiology hospital Bangalore",
    "orthopaedic doctor Bangalore",
    "emergency hospital Bangalore",
    "health checkup Bangalore",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | Multi-Speciality Hospital in ${siteConfig.city}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1344,
        height: 768,
        alt: `${siteConfig.name} — doctor consulting a patient`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Multi-Speciality Hospital in ${siteConfig.city}`,
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
    <html lang="en-IN" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased bg-background text-foreground font-sans`}
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
