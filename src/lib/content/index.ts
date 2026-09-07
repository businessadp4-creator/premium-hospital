export * from "./types";
export * from "./departments-a";
export * from "./departments-b";
export * from "./doctors";
export * from "./services-facilities";
export * from "./blog-a";
export * from "./blog-b";
export * from "./patient-info";

import { departmentsA } from "./departments-a";
import { departmentsB } from "./departments-b";
import type { Department, FAQ } from "./types";

export const departments: Department[] = [...departmentsA, ...departmentsB];

export function getDepartment(slug: string) {
  return departments.find((d) => d.slug === slug);
}

/** Department-level FAQs (used on speciality detail pages + FAQ schema). */
export function getDepartmentFaqs(dept: Department): FAQ[] {
  return [
    {
      question: `When should I see a ${dept.name.replace(" & ", " and ")} specialist?`,
      answer: `If you have symptoms related to ${dept.name.toLowerCase()} that are new, worsening, or affecting your daily life, it is worth a consultation. Bring any previous reports and a list of current medicines. ${dept.highlights[0]}.`,
    },
    {
      question: "Do I need an appointment, or can I walk in?",
      answer:
        "Both work. Walk-ins are seen in order alongside booked slots, so booking ahead usually means shorter waits. You can request an appointment on this website, by phone, or on WhatsApp.",
    },
    {
      question: "What should I bring to my first consultation in this department?",
      answer:
        "Please carry a photo ID, previous prescriptions and reports (including scan films or CDs if any), and a list of the medicines you currently take with their doses.",
    },
  ];
}
