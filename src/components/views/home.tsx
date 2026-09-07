"use client";

import { usePageMeta } from "@/lib/router";
import { siteConfig } from "@/lib/site-config";
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
  usePageMeta({
    title: `${siteConfig.name} | Multi-Speciality Hospital in ${siteConfig.city}`,
    description: siteConfig.description,
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
