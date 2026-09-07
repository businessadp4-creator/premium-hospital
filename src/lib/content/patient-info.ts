import type { FAQ } from "./types";

/** Patient information content — operational details marked [PLACEHOLDER]
 *  must be confirmed by hospital administration. */

export const admissionSteps = [
  {
    title: "Consultation & Advice",
    description:
      "Your doctor examines you and, if needed, recommends admission with a clear explanation of why, for how long, and what it will involve.",
  },
  {
    title: "Admission Desk",
    description:
      "Visit the admission desk with the doctor's advice note. Our team explains room categories and expected costs, and completes your registration.",
  },
  {
    title: "Room & Care Begins",
    description:
      "You are escorted to your room, where nursing staff complete the intake assessment and your treating team begins the care plan.",
  },
  {
    title: "Daily Rounds & Updates",
    description:
      "Your consultant reviews you daily, and the team keeps your family informed of progress and any changes to the plan.",
  },
  {
    title: "Discharge & Summary",
    description:
      "At discharge you receive a written summary, prescriptions, follow-up date and clear home-care instructions before you leave.",
  },
];

export const admissionChecklist = [
  "Photo ID (Aadhaar / driving licence / passport) and a photocopy",
  "Doctor's admission advice note",
  "Insurance card / TPA / ECHS / CGHS documents, if applicable",
  "Previous prescriptions, reports and scan films or CDs",
  "A list of medicines you currently take, including doses",
  "Personal items: comfortable clothing, slippers, spectacles, hearing aids, chargers",
  "One attendant's ID and contact number for our records",
  "Advance payment as advised by the billing desk (UPI, cards and cash accepted)",
];

export const visitingInfo = {
  /** [PLACEHOLDER] — confirm exact hours with hospital administration */
  general: "10:00 AM – 12:30 PM and 5:00 PM – 7:00 PM daily [confirm]",
  icu: "ICU viewing windows follow a separate schedule; our ICU team updates the family attendant each day [confirm]",
  attendants: "One attendant per patient may stay overnight in most room categories",
};

export const patientRights: string[] = [
  "Receive respectful, unbiased care regardless of age, gender, religion or background",
  "Be told your diagnosis, the planned treatment, its alternatives and their likely costs in language you understand",
  "Give — or refuse — consent before any procedure, with a clear explanation of risks",
  "Privacy during examination, treatment and discussion of your medical details",
  "Access your medical records and receive a copy of your reports and discharge summary",
  "Know the expected costs of proposed treatment and receive an itemised bill",
  "Raise a concern or complaint without fear, and receive a response",
];

export const patientResponsibilities: string[] = [
  "Share your full medical history, allergies and all medicines you currently take",
  "Follow the agreed treatment plan, or tell your doctor honestly if you cannot",
  "Keep your scheduled appointments, or inform us in advance to reschedule",
  "Respect hospital staff, other patients and our no-tobacco, no-alcohol policy",
  "Settle bills as per the hospital's billing cycle",
];

export const patientFaqs: FAQ[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can request an appointment through the form on this website, call our reception line, or message us on WhatsApp. Our team will confirm your slot by phone. Same-day OPD slots are available for most departments; carrying previous reports helps the doctor help you faster.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Bring a photo ID, any previous prescriptions, lab reports, scan films/CDs and the list of medicines you currently take. If you have insurance, carry the card or policy details. Arriving 15 minutes early helps us complete your registration smoothly.",
  },
  {
    question: "Do you accept health insurance and cashless treatment?",
    answer:
      "We work with major insurers and TPAs for planned admissions and emergency care. [PLACEHOLDER — confirm the current insurer/TPA panel with the billing desk and list it here.] For cashless planned admissions, share your policy details at the admission desk at least 48 hours before hospitalisation so pre-authorisation can be initiated.",
  },
  {
    question: "Can I choose which doctor I see?",
    answer:
      "Yes. Our appointment system lets you request a specific consultant and preferred time. If that doctor is unavailable, we will offer the earliest alternative within the same department — or the next available slot with your chosen doctor, whichever you prefer.",
  },
  {
    question: "How long do lab reports take?",
    answer:
      "Most routine blood tests are reported the same day. Specialised tests, cultures and histopathology can take longer; the lab counter will tell you the exact expected time when samples are collected. Digital reports can be collected at the lab counter or sent to you [confirm report-delivery method].",
  },
  {
    question: "Is an ambulance available?",
    answer:
      "Yes, an ambulance can be arranged for transfers to and from the hospital. [PLACEHOLDER — confirm availability hours and coverage area with administration.] Call the hospital's emergency number to request one.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, UPI, and debit/credit cards at our billing counters. For insurance claims, our billing desk will guide you through the documentation required by your insurer or TPA.",
  },
  {
    question: "Whom do I contact about a concern or feedback?",
    answer:
      "We take patient feedback seriously. You can share feedback at the front office, call the hospital during working hours, or write to us through the contact form on this website. Every complaint is acknowledged and reviewed by hospital management. [PLACEHOLDER — add the dedicated grievance officer's name/extension once assigned.]",
  },
];

/** Emergency page content — standard, conservative first-response guidance. */
export const emergencySymptoms = [
  { title: "Chest pain or pressure", detail: "Especially if it spreads to the arm, jaw or back, or comes with sweating and breathlessness." },
  { title: "Stroke signs (think FAST)", detail: "Face drooping, Arm weakness, Speech difficulty — Time to call immediately." },
  { title: "Severe breathing difficulty", detail: "Gasping, bluish lips, or breathlessness that prevents speaking full sentences." },
  { title: "Unconsciousness or unresponsiveness", detail: "Any unexplained collapse, fainting with injury, or a person who cannot be woken." },
  { title: "Seizures", detail: "A first-time fit, a fit lasting over five minutes, or repeated seizures." },
  { title: "Uncontrolled bleeding", detail: "Bleeding that does not stop with 10 minutes of firm continuous pressure." },
  { title: "Severe injuries", detail: "Road accidents, falls from height, deep wounds, suspected fractures with deformity." },
  { title: "Poisoning or overdose", detail: "Swallowed chemicals, snake or scorpion bites, or medication overdose — bring the container/packaging if possible." },
  { title: "Sudden severe abdominal pain", detail: "Especially with vomiting, rigidity or fainting." },
  { title: "High fever with danger signs", detail: "Fever with confusion, stiff neck, bleeding, reduced urine or breathlessness." },
];

export const emergencyDos = [
  "Call the emergency number first — the team prepares for your arrival while you travel",
  "Keep the patient calm, still and warm; do not give food or water",
  "Bring ID, previous medical reports and a list of current medicines if quickly available",
  "Note the time symptoms began — critical information for stroke and cardiac care",
  "For poisoning or bites, bring the container, strip or a photo of the substance",
];

export const emergencyDonts = [
  "Do not drive yourself to the hospital if you are the patient",
  "Do not give the patient water, food or any medicines during an unconscious or seizure episode",
  "Do not wait to 'see if it settles' when chest pain, stroke signs or heavy bleeding are present",
  "Do not move a person with a suspected spine injury unless they are in danger",
  "Do not force your finger or any object into the mouth of a person having a seizure",
];
