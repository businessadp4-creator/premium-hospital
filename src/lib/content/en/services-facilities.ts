import type { ServiceGroup, Facility, HealthPackage, Testimonial } from "../types";

/**
 * English mirror pack — slugs, order, counts, image paths and rating values
 * match src/lib/content/services-facilities.ts exactly.
 */

/** Structured medical services — grouped exactly as required by the brief. */
export const serviceGroups: ServiceGroup[] = [
  {
    category: "clinical",
    title: "Clinical Services",
    description:
      "Everyday consultations and continuing care across all our specialities, with unhurried appointments and clear treatment plans.",
    icon: "stethoscope",
    items: [
      { name: "Outpatient (OPD) consultations", description: "Specialist consultations across 12+ departments, with scheduled appointment slots that reduce waiting time." },
      { name: "Follow-up & chronic disease clinics", description: "Structured reviews for long-term conditions such as diabetes, blood pressure, thyroid and asthma, with medication reviews." },
      { name: "Inpatient (ward) care", description: "Comfortable admission for problems that need monitoring, treatment or surgery, with consultant rounds every day." },
      { name: "Day-care procedures", description: "Selected procedures and infusion treatments finished the same day, so you can go home and recover the same day." },
    ],
  },
  {
    category: "diagnostic",
    title: "Diagnostic Services",
    description:
      "Lab and imaging under the same roof: your doctor gets answers faster, and treatment starts sooner.",
    icon: "microscope",
    items: [
      { name: "Clinical laboratory", description: "A fully automated pathology lab for blood, urine and special tests, with same-day reports for most common tests." },
      { name: "Digital X-ray", description: "Instant digital X-ray with low radiation; images are available to your doctor immediately." },
      { name: "Ultrasound & Doppler", description: "Abdominal, pregnancy, pelvic and vascular ultrasound, with experienced sonologists." },
      { name: "CT scan", description: "A modern CT scanner for stroke, trauma, abdominal and cancer imaging, with fast reporting." },
      { name: "Cardiac testing", description: "ECG, 2D echo, TMT (treadmill stress test) and Holter monitoring, interpreted by cardiologists." },
      { name: "Lung function testing", description: "Spirometry and respiratory assessment for the diagnosis and follow-up of asthma and COPD." },
    ],
  },
  {
    category: "emergency",
    title: "Emergency Services",
    description:
      "When minutes matter, our emergency department is ready, with a trained team, resuscitation facilities and ambulance support. [verify 24×7 status before launch]",
    icon: "siren",
    items: [
      { name: "Emergency department", description: "Emergency care with triage based on severity, a dedicated resuscitation room and nursing staff trained in emergency care." },
      { name: "Ambulance service", description: "An ambulance with basic life support (BLS) equipment for safe, monitored transfers to and from the hospital." },
      { name: "Intensive care (ICU)", description: "An intensive care unit with multi-para monitors, ventilator facility and 1:1 nursing, for critically ill patients." },
      { name: "Emergency imaging & lab", description: "Priority round-the-clock access to X-ray, CT, ultrasound and emergency lab tests." },
    ],
  },
  {
    category: "surgical",
    title: "Surgical Services",
    description:
      "Modern operation theatres and experienced surgical teams, with a preference for minimally invasive methods where they benefit the patient.",
    icon: "scissors",
    items: [
      { name: "Modular operation theatres", description: "Laminar-flow modular OTs designed for infection control, supporting general and speciality surgery." },
      { name: "Laparoscopic (keyhole) surgery", description: "Gallbladder, hernia, appendix and gynaecological procedures through keyhole cuts, for a faster recovery." },
      { name: "Day-care surgery", description: "Selected surgeries with same-day discharge, including structured follow-up." },
      { name: "Anaesthesia & pre-surgical assessment", description: "Fitness assessment before anaesthesia, modern monitoring in the theatre and careful pain management after surgery." },
    ],
  },
  {
    category: "preventive",
    title: "Preventive Health Services",
    description:
      "Our aim is to keep you from needing the hospital at all. Screening, vaccinations and early checks catch problems at the stage when treatment is easiest.",
    icon: "shield-check",
    items: [
      { name: "Master health check-ups", description: "Health packages combining blood tests, imaging, cardiac tests and a physician review." },
      { name: "Adult vaccinations", description: "Seasonal flu, typhoid, hepatitis, HPV, tetanus and travel vaccines, with a reminder service." },
      { name: "Cancer screening", description: "Screening for oral, breast and cervical cancer, including Pap smears and guided breast examination." },
      { name: "Lifestyle counselling", description: "Advice from our doctors and dietitians on diet, exercise, sleep and stress management, shaped to fit your daily routine." },
    ],
  },
  {
    category: "specialised",
    title: "Specialised Programmes",
    description:
      "Our specialists, technology and rehabilitation skills brought together in programmes designed for specific health needs.",
    icon: "sparkles",
    items: [
      { name: "Diabetes care programme", description: "Diabetes assessment in one place: blood sugar tests, eye/foot/kidney checks and a diet plan." },
      { name: "Cardiac rehabilitation", description: "For patients recovering after a heart problem: supervised, step-by-step exercise and a lifestyle programme." },
      { name: "Women's health programme", description: "Hormone health, PCOS, menopause and bone health, through every stage of a woman's life." },
      { name: "Physiotherapy & rehabilitation", description: "Recovery after surgery, joint and spine rehabilitation, and pain-relieving physiotherapy." },
    ],
  },
];

/** Hospital infrastructure showcase — editorial facility gallery. */
export const facilities: Facility[] = [
  {
    slug: "reception-waiting",
    name: "Reception & Waiting Halls",
    description:
      "Bright, calm reception and family waiting areas that take the stress out of a hospital visit, with clear signage and a dedicated help desk.",
    image: "/images/reception.jpg",
  },
  {
    slug: "patient-rooms",
    name: "Patient Rooms",
    description:
      "Airy general wards and private rooms with comfortable beds, seating for attendants and monitoring facilities at every bedside, because rest is part of the treatment too.",
    image: "/images/room.jpg",
  },
  {
    slug: "icu",
    name: "Intensive Care Unit (ICU)",
    description:
      "An ICU equipped with multi-para monitors, ventilators and infusion systems, staffed by trained critical-care nurses with continuous doctor supervision. [verify facilities before launch]",
    image: "/images/icu.jpg",
  },
  {
    slug: "operation-theatres",
    name: "Operation Theatres",
    description:
      "Modern operation theatres with laminar airflow, advanced anaesthesia workstations and surgical lighting, suited to both keyhole and open procedures.",
    image: "/images/ot.jpg",
  },
  {
    slug: "laboratory",
    name: "Clinical Laboratory",
    description:
      "A fully automated pathology lab for routine and special tests under strict quality control, with same-day reporting for most tests.",
    image: "/images/lab.jpg",
  },
  {
    slug: "imaging",
    name: "Imaging & Radiology",
    description:
      "Digital X-ray, ultrasound, Doppler and CT imaging with fast, detailed reporting. The hospital's diagnostic backbone.",
    image: "/images/imaging.jpg",
  },
  {
    slug: "pharmacy",
    name: "24-Hour Pharmacy",
    description:
      "Genuine, properly stored medicines at fair prices, with pharmacist advice on every prescription. [verify hours before launch]",
    image: "/images/pharmacy.jpg",
  },
  {
    slug: "emergency-department",
    name: "Emergency Department",
    description:
      "A dedicated emergency entrance with triage, a resuscitation room and an ambulance bay, ready round the clock. [verify 24×7 status before launch]",
    image: "/images/emergency.jpg",
  },
];

/**
 * ============================================================================
 * ⚠️ HEALTH PACKAGES — structure only ⚠️
 * Pricing is intentionally NOT displayed (no invented prices). The included
 * items are typical for such packages in Bangalore and must be finalised by
 * the hospital before launch.
 * ============================================================================
 */
export const healthPackages: HealthPackage[] = [
  {
    slug: "master-health-check",
    name: "Master Health Check",
    description:
      "Our foundation annual check: the key tests most adults need, done in a single morning with a physician review.",
    includes: [
      "Complete blood count (CBC) & blood sugar (fasting/PP)",
      "Lipid profile & liver/kidney function",
      "Thyroid test (TSH)",
      "Urine test & ECG",
      "Chest X-ray & abdominal ultrasound",
      "Physician consultation & report review",
    ],
    recommendedFor: "All adults aged 25+, as an annual baseline check",
    isPopular: true,
  },
  {
    slug: "executive-health-check",
    name: "Executive Health Check",
    description:
      "A deeper check for busy schedules: everything in the master panel, plus a cardiac stress test (TMT) and vitamin testing.",
    includes: [
      "All tests in the Master Health Check",
      "TMT (cardiac stress test)",
      "Vitamin D & B12 levels",
      "HbA1c (average sugar control over the past 3 months)",
      "Eye & ENT checks",
      "A detailed physician counselling session",
    ],
    recommendedFor: "Professionals aged 30+ in desk-based jobs",
  },
  {
    slug: "womens-wellness-check",
    name: "Women's Wellness Check",
    description:
      "Preventive care designed for women's health: hormones, bones and cancer screening, in a private, comfortable setting.",
    includes: [
      "Complete blood count & blood sugar",
      "Thyroid profile & iron studies",
      "Pap smear & breast examination",
      "Bone health assessment",
      "Pelvic ultrasound",
      "Gynaecologist consultation",
    ],
    recommendedFor: "Women aged 25+; recommended once every year",
  },
  {
    slug: "senior-citizen-check",
    name: "Senior Citizen Health Check",
    description:
      "A respectful, unhurried check for older adults, covering the heart, bones, sugar, kidneys and memory.",
    includes: [
      "Cardiac tests: ECG, echo & TMT as advised",
      "Blood sugar (fasting/PP) & HbA1c",
      "Kidney & liver function",
      "Bone density test",
      "Eye & hearing tests",
      "Physician review and a summary for the family",
    ],
    recommendedFor: "Adults aged 60+",
  },
  {
    slug: "diabetes-heart-screen",
    name: "Diabetes & Heart Screen",
    description:
      "A focused panel for people with diabetes or a family history of heart disease, assessing sugar control and heart risk together.",
    includes: [
      "HbA1c & fasting glucose",
      "Lipid profile",
      "ECG & 2D echocardiogram",
      "Kidney function & urine microalbumin",
      "Retinal (eye) examination",
      "Cardiologist & physician review",
    ],
    recommendedFor: "People with diabetes and those with a family history of heart disease",
  },
];

/**
 * ============================================================================
 * ⚠️ SAMPLE TESTIMONIALS — [PLACEHOLDER] DATA ⚠️
 * ----------------------------------------------------------------------------
 * Do NOT launch with these. Replace with authentic, written-consent
 * testimonials collected by the hospital. First names only are shown.
 * ============================================================================
 */
export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    patientName: "Lakshmi",
    treatment: "Maternity & newborn care",
    rating: 5,
    quote:
      "During my pregnancy the doctors explained everything patiently. Every visit was unhurried, and the delivery care team truly looked after our family as if we were their own.",
  },
  {
    id: "t-2",
    patientName: "Mohan",
    treatment: "Cardiology consultation",
    rating: 5,
    quote:
      "My tests were done that same morning, and the cardiologist explained every report while showing me the screen. For the first time I understood what my heart problem is and what needs to be done about it.",
  },
  {
    id: "t-3",
    patientName: "Fatima Begum",
    treatment: "Orthopaedics & physiotherapy",
    rating: 4,
    quote:
      "My knee pain had reached the point where I could not even walk to the market. The team tried physiotherapy before mentioning surgery, and within six weeks I was walking comfortably.",
  },
];
