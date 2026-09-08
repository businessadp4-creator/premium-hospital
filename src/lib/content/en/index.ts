import type { Department, FAQ, SiteContent } from "../types";
import { departmentsA, departmentsB } from "./departments";
import { doctors } from "./doctors";
import { serviceGroups, facilities, healthPackages, testimonials } from "./services-facilities";
import {
  admissionSteps,
  admissionChecklist,
  visitingInfo,
  patientRights,
  patientResponsibilities,
  patientFaqs,
  emergencySymptoms,
  emergencyDos,
  emergencyDonts,
} from "./patient-info";
import { allBlogPosts } from "./blog";

/* ── English content pack ────────────────────────────────────────────────
 * Mirrors `contentTe` (src/lib/content/index.ts): same slugs, same order,
 * same structure. Localised for an English-reading audience.
 * ──────────────────────────────────────────────────────────────────────── */

const departments: Department[] = [...departmentsA, ...departmentsB];

export function getDepartment(slug: string) {
  return departments.find((d) => d.slug === slug);
}

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}

export function getDoctorsByDepartment(deptSlug: string) {
  return doctors.filter((d) => d.departmentSlug === deptSlug);
}

export function getPost(slug: string) {
  return allBlogPosts.find((p) => p.slug === slug);
}

export const blogCategories: string[] = Array.from(
  new Set(allBlogPosts.map((p) => p.category))
);

/** Department-level FAQs (used on speciality detail pages + FAQ schema). */
export function getDepartmentFaqs(dept: Department): FAQ[] {
  return [
    {
      question: `When should you see a ${dept.name} specialist?`,
      answer: `If symptoms related to ${dept.name} are new, are getting worse, or are affecting your daily life, it is worth having one consultation. Bring previous reports and a list of the medicines you currently take. ${dept.highlights[0]}.`,
    },
    {
      question: "Should I take an appointment, or can I just walk in?",
      answer:
        "Both are available. Walk-in patients are seen in order alongside booked slots, so waiting time is usually shorter if you book ahead. You can request an appointment on this website, by phone or on WhatsApp.",
    },
    {
      question: "What should I bring to a first consultation in this department?",
      answer:
        "Please bring photo ID, previous prescriptions and reports (including scan films or CDs, if you have them), and a list of the medicines you currently take, with doses.",
    },
  ];
}

export const contentEn: SiteContent = {
  departments,
  doctors,
  serviceGroups,
  facilities,
  healthPackages,
  testimonials,
  admissionSteps,
  admissionChecklist,
  visitingInfo,
  patientRights,
  patientResponsibilities,
  patientFaqs,
  emergencySymptoms,
  emergencyDos,
  emergencyDonts,
  blogPosts: allBlogPosts,
  blogCategories,
  getDepartment,
  getDoctor,
  getDoctorsByDepartment,
  getPost,
  getDepartmentFaqs,
};
