import type { ServiceGroup, Facility, HealthPackage, Testimonial } from "./types";

/** Structured medical services — grouped exactly as required by the brief. */
export const serviceGroups: ServiceGroup[] = [
  {
    category: "clinical",
    title: "Clinical Services",
    description:
      "Everyday consultations and continuing care across all our specialities, built around unhurried appointments and clear treatment plans.",
    icon: "stethoscope",
    items: [
      { name: "Outpatient (OPD) Consultations", description: "Specialist and super-specialist consultations across 12+ departments with scheduled appointment slots to reduce waiting." },
      { name: "Follow-up & Chronic Care Clinics", description: "Structured reviews for diabetes, blood pressure, thyroid, asthma and other long-term conditions, with medication fine-tuning." },
      { name: "Inpatient Care", description: "Comfortable admission for conditions needing observation, treatment or surgery — with daily consultant rounds." },
      { name: "Day-Care Procedures", description: "Selected procedures and infusions completed within the day so patients recover at home the same evening." },
    ],
  },
  {
    category: "diagnostic",
    title: "Diagnostic Services",
    description:
      "In-house laboratory and imaging under one roof, so your doctor gets answers quickly and treatment begins sooner.",
    icon: "microscope",
    items: [
      { name: "Clinical Laboratory", description: "Fully automated pathology lab for blood, urine and specialised tests with same-day reporting for most routine panels." },
      { name: "Digital X-Ray", description: "Instant digital radiography with lower radiation dose and immediate image availability for your doctor." },
      { name: "Ultrasound & Doppler", description: "Abdominal, obstetric, pelvic and vascular ultrasound performed by experienced sonologists." },
      { name: "CT Imaging", description: "Modern CT scanner supporting stroke, trauma, abdominal and oncology imaging with fast reporting." },
      { name: "Cardiac Diagnostics", description: "ECG, 2D echocardiography, TMT (stress test) and Holter monitoring interpreted by cardiologists." },
      { name: "Lung Function Testing", description: "Spirometry and respiratory assessment for asthma and COPD diagnosis and follow-up." },
    ],
  },
  {
    category: "emergency",
    title: "Emergency Services",
    description:
      "When minutes matter, our emergency department is ready — with a trained team, resuscitation facilities and ambulance support. [Verify 24/7 status before launch]",
    icon: "siren",
    items: [
      { name: "Emergency Department", description: "Triage-based emergency care with dedicated resuscitation bay and emergency-trained nursing staff." },
      { name: "Ambulance Service", description: "Ambulance with basic life support equipment for safe, monitored transport to and from the hospital." },
      { name: "Critical Care (ICU)", description: "Intensive care unit with multipara monitors, ventilator support and 1:1 nursing for critically ill patients." },
      { name: "Emergency Imaging & Lab", description: "Round-the-clock priority access to X-ray, CT, ultrasound and emergency laboratory panels." },
    ],
  },
  {
    category: "surgical",
    title: "Surgical Services",
    description:
      "Modern operation theatres and experienced surgical teams, with minimally invasive techniques preferred wherever they benefit the patient.",
    icon: "scissors",
    items: [
      { name: "Modular Operation Theatres", description: "Laminar-flow modular OTs designed for infection control, supporting general and specialty surgery." },
      { name: "Laparoscopic (Keyhole) Surgery", description: "Gallbladder, hernia, appendix and gynaecological procedures through keyhole incisions for faster recovery." },
      { name: "Day-Care Surgery", description: "Selected surgical procedures performed with discharge the same day, supported by structured follow-up." },
      { name: "Anaesthesia & Pre-op Assessment", description: "Pre-anaesthetic fitness evaluation, modern monitoring in theatre and careful post-operative pain management." },
    ],
  },
  {
    category: "preventive",
    title: "Preventive Healthcare",
    description:
      "We would rather help you stay out of hospital. Preventive checks, vaccinations and screening catch problems early — when they are simplest to treat.",
    icon: "shield-check",
    items: [
      { name: "Master Health Check-ups", description: "Curated health packages covering blood panels, imaging, cardiac screening and physician review." },
      { name: "Adult Vaccination", description: "Seasonal flu, typhoid, hepatitis, HPV, tetanus and travel vaccinations with reminder service." },
      { name: "Cancer Screening", description: "Oral, breast and cervical screening services including Pap smear and guided breast examination." },
      { name: "Lifestyle Counselling", description: "Diet, exercise, sleep and stress guidance from our physicians and dietitians, tailored to your routine." },
    ],
  },
  {
    category: "specialised",
    title: "Specialised Treatments",
    description:
      "Focused programmes that combine our specialists, technology and rehabilitation expertise for specific health needs.",
    icon: "sparkles",
    items: [
      { name: "Diabetes Care Programme", description: "One-stop diabetes evaluation: blood sugar panels, eye/foot/kidney screening and diet planning." },
      { name: "Cardiac Rehabilitation", description: "Monitored, graduated exercise and lifestyle programme for patients recovering after a cardiac event." },
      { name: "Women's Wellness Programme", description: "Hormonal health, PCOS, menopause and bone-health care through every stage of a woman's life." },
      { name: "Physiotherapy & Rehabilitation", description: "Post-surgical recovery, joint and spine rehabilitation, and pain-relief physiotherapy." },
    ],
  },
];

/** Hospital infrastructure showcase — editorial facility gallery. */
export const facilities: Facility[] = [
  {
    slug: "reception-waiting",
    name: "Reception & Waiting Lounges",
    description:
      "Bright, calm reception and family waiting areas designed to reduce the stress of a hospital visit, with clear wayfinding and a dedicated help desk.",
    image: "/images/reception.jpg",
  },
  {
    slug: "patient-rooms",
    name: "Patient Rooms",
    description:
      "Well-ventilated general wards and private rooms with comfortable beds, attendant seating and individual monitoring points — because rest is part of treatment.",
    image: "/images/room.jpg",
  },
  {
    slug: "icu",
    name: "Intensive Care Unit (ICU)",
    description:
      "Equipped with multipara monitors, ventilators and infusion systems, staffed by trained critical-care nurses with continuous physician cover. [Verify configuration]",
    image: "/images/icu.jpg",
  },
  {
    slug: "operation-theatres",
    name: "Operation Theatres",
    description:
      "Modern operation theatres with laminar airflow, advanced anaesthesia workstations and surgical lighting, supporting keyhole and open procedures.",
    image: "/images/ot.jpg",
  },
  {
    slug: "laboratory",
    name: "Clinical Laboratory",
    description:
      "Fully automated pathology laboratory processing routine and specialised tests with stringent quality control and same-day reporting for most panels.",
    image: "/images/lab.jpg",
  },
  {
    slug: "imaging",
    name: "Imaging & Radiology",
    description:
      "Digital X-ray, ultrasound, Doppler and CT imaging with prompt, detailed reporting — the diagnostic backbone of the hospital.",
    image: "/images/imaging.jpg",
  },
  {
    slug: "pharmacy",
    name: "24-Hour Pharmacy",
    description:
      "Genuine, correctly stored medicines at fair prices, with pharmacist counselling on every prescription. [Verify hours]",
    image: "/images/pharmacy.jpg",
  },
  {
    slug: "emergency-department",
    name: "Emergency Department",
    description:
      "A dedicated emergency entrance with triage, resuscitation bay and ambulance bay, kept ready around the clock. [Verify 24/7 status]",
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
      "Our foundational annual check-up covering the essential screens most adults need, reviewed by a physician in a single morning.",
    includes: [
      "Complete blood count & blood sugar (F/PP)",
      "Lipid profile & liver/kidney function",
      "Thyroid profile (TSH)",
      "Urine routine & ECG",
      "Chest X-ray & ultrasound abdomen",
      "Physician consultation & report review",
    ],
    recommendedFor: "Adults 25+ as an annual baseline check",
    isPopular: true,
  },
  {
    slug: "executive-health-check",
    name: "Executive Health Check",
    description:
      "A deeper screen for demanding schedules — adds cardiac stress testing and vitamin profiling to the master panel.",
    includes: [
      "All Master Health Check inclusions",
      "TMT (cardiac stress test)",
      "Vitamin D & B12 levels",
      "HbA1c (3-month sugar control)",
      "Eye & ENT screening",
      "Detailed physician counselling session",
    ],
    recommendedFor: "Working professionals 30+ with sedentary routines",
  },
  {
    slug: "womens-wellness-check",
    name: "Women's Wellness Check",
    description:
      "Preventive care designed around women's health — hormonal, bone and cancer screening in a private, comfortable setting.",
    includes: [
      "Complete blood count & blood sugar",
      "Thyroid profile & iron studies",
      "Pap smear & breast examination",
      "Bone health assessment",
      "Ultrasound pelvis",
      "Gynaecologist consultation",
    ],
    recommendedFor: "Women 25+; recommended annually",
  },
  {
    slug: "senior-citizen-check",
    name: "Senior Citizen Health Check",
    description:
      "A respectful, unhurried check-up for elders covering heart, bones, sugars, kidneys and memory review.",
    includes: [
      "Cardiac screen: ECG, ECHO & TMT as advised",
      "Blood sugar (F/PP) & HbA1c",
      "Kidney & liver function",
      "Bone density screening",
      "Vision & hearing check",
      "Physician review with family summary",
    ],
    recommendedFor: "Adults 60+",
  },
  {
    slug: "diabetes-heart-screen",
    name: "Diabetes & Heart Screen",
    description:
      "A focused panel for anyone with diabetes or family history of heart disease, assessing sugar control and cardiac risk together.",
    includes: [
      "HbA1c & fasting glucose",
      "Lipid profile",
      "ECG & 2D Echocardiogram",
      "Kidney function & urine microalbumin",
      "Fundus (eye) screening",
      "Cardiologist & physician review",
    ],
    recommendedFor: "Diabetics and those with family history of heart disease",
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
    patientName: "Lakshmi R.",
    treatment: "Mother & child care",
    rating: 5,
    quote:
      "The doctors explained everything so patiently during my pregnancy. Every visit felt unhurried, and the delivery care team treated our family with real warmth.",
  },
  {
    id: "t-2",
    patientName: "Mohan K.",
    treatment: "Cardiology consultation",
    rating: 5,
    quote:
      "My tests were done the same morning and the cardiologist walked me through each report on screen. I finally understood my own heart condition and what to do about it.",
  },
  {
    id: "t-3",
    patientName: "Fatima S.",
    treatment: "Orthopaedics & physiotherapy",
    rating: 4,
    quote:
      "My knee pain had stopped me from walking to the market. The team tried physiotherapy before even mentioning surgery — six weeks later I am walking comfortably again.",
  },
];
