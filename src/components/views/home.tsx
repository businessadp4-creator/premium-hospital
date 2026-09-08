"use client";

import { usePageMeta } from "@/lib/router";
import { siteConfig } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";
import {
  HeroSection,
  TrustBar,
  SpecialitiesPreview,
  WhyChooseUs,
} from "@/components/home/sections-a";
import {
  DoctorsPreview,
  PatientJourney,
  AppointmentSection,
  EmergencyStrip,
} from "@/components/home/sections-b";
import {
  TestimonialsSection,
  PackagesPreview,
  HealthLibraryPreview,
  LocationSection,
} from "@/components/home/sections-c";

export function HomeView() {
  const { t } = useLang();
  usePageMeta({
    title: t(
      `${siteConfig.name} | ${siteConfig.cityTe} మల్టీ స్పెషాలిటీ హాస్పిటల్`,
      `${siteConfig.name} | Multi Specialty Hospital in ${siteConfig.city}`
    ),
    description: t(siteConfig.description, siteConfig.descriptionEn),
  });

  return (
    <>
      <HeroSection />
      <TrustBar />
      <SpecialitiesPreview />
      <WhyChooseUs />
      <DoctorsPreview />
      <PatientJourney />
      <AppointmentSection />
      <EmergencyStrip />
      <TestimonialsSection />
      <PackagesPreview />
      <HealthLibraryPreview />
      <LocationSection />
    </>
  );
}
