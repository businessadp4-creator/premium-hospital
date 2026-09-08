import type { FAQ } from "../types";

/**
 * Patient information content (English mirror pack) — same names, shapes and
 * array lengths as src/lib/content/patient-info.ts. Operational details marked
 * [PLACEHOLDER] must be confirmed by hospital administration.
 */

export const admissionSteps = [
  {
    title: "Consultation & advice",
    description:
      "Your doctor examines you and, if admission is needed, recommends it, clearly explaining why, for how long and what will happen.",
  },
  {
    title: "Admission desk",
    description:
      "Take the doctor's advice note to the admission desk. We explain the room categories and estimated costs, and complete your registration.",
  },
  {
    title: "Settled into your room & care begins",
    description:
      "You are escorted to your room, nursing staff complete the first assessment, and your treatment team starts the plan.",
  },
  {
    title: "Daily rounds & updates",
    description:
      "Your consultant examines you every day; the team keeps your family informed about progress and any changes.",
  },
  {
    title: "Discharge & summary",
    description:
      "At discharge you leave with a written summary, prescriptions, a follow-up date and clear home care instructions.",
  },
];

export const admissionChecklist = [
  "Photo identity (Aadhaar / driving licence / passport) and one photocopy",
  "The doctor's admission advice note",
  "Insurance card / TPA / ECHS / CGHS documents, if you have them",
  "Previous prescriptions, reports and scan films/CDs",
  "A list of the medicines you currently take, with doses",
  "Personal items: comfortable clothes, slippers, spectacles, hearing aids, chargers",
  "One attendant's ID and phone number, for our records",
  "The advance payment set by the billing desk (UPI, cards and cash are accepted)",
];

export const visitingInfo = {
  /** [PLACEHOLDER] — confirm exact hours with hospital administration */
  general: "Every day: 10:00 AM – 12:30 PM and 5:00 PM – 7:00 PM [verify before launch]",
  icu: "ICU viewing windows have separate timings; our ICU team briefs one family attendant every day [verify before launch]",
  attendants: "In most room categories, one attendant may stay overnight",
};

export const patientRights: string[] = [
  "To receive care respectfully and without discrimination, whatever your age, gender, religion or background",
  "To know your diagnosis, the planned treatment, the alternatives and their estimated costs, in a language you understand",
  "To give consent for any procedure, with a clear explanation of its risks, or to refuse it",
  "To have privacy during examination, treatment and discussions about your medical details",
  "To see your medical records and receive copies of your reports and discharge summary",
  "To know the estimated cost of the treatment suggested and to receive a detailed bill",
  "To voice a complaint or an opinion without fear and receive a response",
];

export const patientResponsibilities: string[] = [
  "Tell us your full medical history, allergies and all the medicines you currently take",
  "Follow the treatment plan you have agreed to; if you cannot follow it, tell your doctor honestly",
  "Keep your scheduled appointments; if you need to change one, let us know in advance",
  "Treat hospital staff and other patients with respect; follow the no-smoking and no-alcohol rules",
  "Pay your bills according to the hospital's billing policy",
];

export const patientFaqs: FAQ[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can request one through the form on this website, call the reception number, or send us a message on WhatsApp. Our team will confirm your slot over the phone. Same-day OPD slots are available for most departments; bringing previous reports helps the doctor act faster.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring photo ID, previous prescriptions, lab reports, scan films/CDs and a list of the medicines you currently take. If you have insurance, bring the card or policy details. Arriving 15 minutes early makes registration easy.",
  },
  {
    question: "Is health insurance and cashless treatment available?",
    answer:
      "We work with major insurers and TPAs for planned admissions and emergency care. [PLACEHOLDER — confirm the current insurer/TPA panel with the billing desk and add it here.] For cashless planned admissions, give your policy details at the admission desk at least 48 hours before admission, so pre-authorisation can begin.",
  },
  {
    question: "Can I choose my preferred doctor?",
    answer:
      "Yes. Our appointment system lets you request a specific consultant and a time that suits you. If that doctor is unavailable, we will offer the earliest available slot in the same department, or the doctor's next slot, whichever you prefer.",
  },
  {
    question: "How long do lab reports take?",
    answer:
      "Most routine blood test reports come the same day. Special tests, cultures and histopathology can take longer; the lab counter will give you the exact time when samples are collected. Digital reports can be collected at the lab counter or sent to you [verify the report delivery method].",
  },
  {
    question: "Is an ambulance available?",
    answer:
      "Yes, an ambulance can be arranged for transfers to and from the hospital. [PLACEHOLDER — confirm availability hours and coverage with administration.] Call the hospital's emergency number to request one.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "Cash, UPI and debit/credit cards are accepted at our billing counters. For insurance claims, our billing desk will guide you on the documents your insurer or TPA needs.",
  },
  {
    question: "Who do I contact about a problem or a suggestion?",
    answer:
      "We take patient feedback seriously. You can tell the front office, call the hospital during working hours, or write through the contact form on this website. Every complaint is noted and reviewed by hospital administration. [PLACEHOLDER — add the grievance officer's name/extension if one is designated.]",
  },
];

/** Emergency page content — standard, conservative first-response guidance. */
export const emergencySymptoms = [
  { title: "Chest pain or pressure", detail: "Especially if it spreads to the arm, jaw or back, or comes with sweating and breathlessness." },
  { title: "Stroke symptoms — remember FAST", detail: "Face drooping, Arm weakness, Speech difficulty: it is Time to call immediately." },
  { title: "Severe breathlessness", detail: "Struggling for air, bluish lips, or being unable to finish a full sentence." },
  { title: "Loss of consciousness", detail: "Collapsing without any cause, a seizure following an injury, or someone who cannot be woken." },
  { title: "Seizures (fits)", detail: "A first-ever fit, one lasting more than five minutes, or fits occurring one after another." },
  { title: "Bleeding that will not stop", detail: "Bleeding that continues despite firm, constant pressure applied for 10 minutes." },
  { title: "Serious injuries", detail: "Road accidents, falls from a height, deep wounds, or a suspected broken bone." },
  { title: "Poisoning or an overdose", detail: "Swallowing chemicals, a snake or scorpion sting, or taking too much medicine. Bring the packet or container if possible." },
  { title: "Severe abdominal pain", detail: "Especially with vomiting, a rigid abdomen or fainting." },
  { title: "High fever with danger signs", detail: "Fever with fainting, a stiff neck, bleeding, reduced urination or breathlessness." },
];

export const emergencyDos = [
  "Call the emergency number first; our team starts arrangements while you are on your way",
  "Keep the patient calm, still and warm; give nothing to eat or drink",
  "If you can get them quickly, bring ID, previous medical reports and a list of current medicines",
  "Note the time the symptoms started; in stroke and heart care this is crucial information",
  "In poisoning or a sting, bring the packet, the strip or a photo of the substance",
];

export const emergencyDonts = [
  "If you are the patient, do not drive yourself to the hospital",
  "Give no water, food or medicines to an unconscious patient, or to someone having a fit",
  "If there is chest pain, stroke symptoms or heavy bleeding, do not wait and hope it will settle",
  "Do not move a person with a suspected spine injury unless they are in immediate danger",
  "Never force fingers or any object into the mouth of a person having a fit",
];
