"use client";

import { RouterProvider, useRouter } from "@/lib/router";
import { Header } from "./header";
import { Footer } from "./footer";
import { MobileBottomBar } from "./mobile-bottom-bar";
import { HomeView } from "@/components/views/home";
import { AboutView } from "@/components/views/about";
import {
  SpecialitiesView,
  SpecialityDetailView,
  NotFoundInline,
} from "@/components/views/specialities";
import { DoctorsView, DoctorProfileView } from "@/components/views/doctors";
import { ServicesView, FacilitiesView, PackagesView } from "@/components/views/services-facilities-packages";
import {
  PatientInfoView,
  AppointmentsView,
  ContactView,
  EmergencyView,
} from "@/components/views/patient-contact-emergency";
import { BlogListView, BlogDetailView } from "@/components/views/blog";
import { PrivacyView, TermsView, DisclaimerView } from "@/components/views/legal";

function ViewRouter() {
  const { path, query } = useRouter();
  const seg = path.split("/").filter(Boolean).map(decodeURIComponent);

  let view: React.ReactNode;

  if (path === "/") {
    view = <HomeView />;
  } else if (path === "/about") {
    view = <AboutView />;
  } else if (seg[0] === "specialities" && seg.length === 1) {
    view = <SpecialitiesView />;
  } else if (seg[0] === "specialities" && seg.length === 2) {
    view = <SpecialityDetailView slug={seg[1]} />;
  } else if (seg[0] === "doctors" && seg.length === 1) {
    view = <DoctorsView presetDept={query.get("department") ?? undefined} />;
  } else if (seg[0] === "doctors" && seg.length === 2) {
    view = <DoctorProfileView slug={seg[1]} />;
  } else if (path === "/services") {
    view = <ServicesView />;
  } else if (path === "/facilities") {
    view = <FacilitiesView />;
  } else if (path === "/health-packages") {
    view = <PackagesView />;
  } else if (path === "/patient-information") {
    view = <PatientInfoView />;
  } else if (path === "/appointments") {
    view = (
      <AppointmentsView
        presetDoctorSlug={query.get("doctor") ?? undefined}
        presetDepartmentSlug={query.get("department") ?? undefined}
        presetPackageSlug={query.get("package") ?? undefined}
      />
    );
  } else if (seg[0] === "blog" && seg.length === 1) {
    view = <BlogListView />;
  } else if (seg[0] === "blog" && seg.length === 2) {
    view = <BlogDetailView slug={seg[1]} />;
  } else if (path === "/contact") {
    view = <ContactView />;
  } else if (path === "/emergency") {
    view = <EmergencyView />;
  } else if (path === "/privacy-policy") {
    view = <PrivacyView />;
  } else if (path === "/terms") {
    view = <TermsView />;
  } else if (path === "/medical-disclaimer") {
    view = <DisclaimerView />;
  } else {
    view = <NotFoundInline label="పేజీ" />;
  }

  return (
    <div key={path} className="animate-in fade-in slide-in-from-bottom-1.5 duration-300">
      {view}
    </div>
  );
}

export function SiteApp() {
  return (
    <RouterProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <ViewRouter />
        </main>
        <Footer />
        {/* Spacer so the fixed mobile CTA bar never covers footer content */}
        <div className="h-14 bg-teal-deep md:hidden" aria-hidden />
      </div>
      <MobileBottomBar />
    </RouterProvider>
  );
}
