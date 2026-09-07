import type { Doctor } from "./types";

/**
 * ============================================================================
 * ⚠️ SAMPLE DOCTOR DIRECTORY — [PLACEHOLDER] DATA ⚠️
 * ----------------------------------------------------------------------------
 * Every doctor below is a SAMPLE profile created to demonstrate the design.
 * Names, qualifications, experience figures and timings are NOT real and MUST
 * be replaced with the hospital's actual doctors before launch.
 * The `photo` field is intentionally empty: an elegant monogram avatar renders
 * until real, consented doctor photographs are added.
 * ============================================================================
 */

export const doctors: Doctor[] = [
  {
    slug: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    qualifications: "MBBS, MD (General Medicine), DM (Cardiology)",
    departmentSlug: "cardiology",
    designation: "Senior Consultant — Cardiology",
    experienceYears: 16,
    languages: ["English", "Hindi", "Kannada"],
    bio: [
      "Dr. Ananya Sharma leads the cardiology team with a focus on preventive heart care and the long-term management of heart disease. She is known among patients for unhurried consultations and clear explanations of every test result.",
      "Her practice spans coronary artery disease, heart failure, hypertension and cardiac rehabilitation, with a particular interest in helping diabetics and young professionals reduce their lifetime cardiovascular risk.",
    ],
    expertise: [
      "Preventive cardiology",
      "Echocardiography and stress testing",
      "Heart failure management",
      "Hypertension and lipid clinics",
      "Cardiac rehabilitation",
    ],
    timings: [
      { days: "Monday – Friday", hours: "9:00 AM – 1:00 PM" },
      { days: "Saturday", hours: "9:00 AM – 12:00 PM" },
    ],
    consultationNote: "Walk-in and by appointment. Prior reports are welcome.",
  },
  {
    slug: "dr-ramesh-iyer",
    name: "Dr. Ramesh Iyer",
    qualifications: "MBBS, MS (Orthopaedics)",
    departmentSlug: "orthopaedics",
    designation: "Consultant — Orthopaedic Surgery",
    experienceYears: 14,
    languages: ["English", "Hindi", "Tamil", "Kannada"],
    bio: [
      "Dr. Ramesh Iyer treats the full range of bone and joint problems, with special expertise in knee arthritis, sports injuries and arthroscopic (keyhole) surgery.",
      "He strongly believes in exhausting conservative options — physiotherapy, lifestyle modification and medication — before recommending surgery, and explains every option with X-rays in hand so patients can decide with confidence.",
    ],
    expertise: [
      "Knee and hip arthritis",
      "Arthroscopic sports-injury surgery",
      "Fracture care",
      "Ligament reconstruction",
      "Osteoporosis management",
    ],
    timings: [
      { days: "Monday – Saturday", hours: "10:00 AM – 2:00 PM" },
      { days: "Monday, Wednesday, Friday", hours: "5:00 PM – 7:00 PM" },
    ],
  },
  {
    slug: "dr-priya-nair",
    name: "Dr. Priya Nair",
    qualifications: "MBBS, MS (Obstetrics & Gynaecology)",
    departmentSlug: "obstetrics-gynaecology",
    designation: "Senior Consultant — Obstetrics & Gynaecology",
    experienceYears: 18,
    languages: ["English", "Hindi", "Malayalam", "Kannada"],
    bio: [
      "Dr. Priya Nair has dedicated her career to women's health, guiding thousands of mothers through safe pregnancies and supporting women through every gynaecological concern with discretion and warmth.",
      "Her special interests include high-risk pregnancy care, PCOS, minimal-access (laparoscopic) gynaecological surgery and adolescent health education.",
    ],
    expertise: [
      "High-risk pregnancy",
      "Laparoscopic gynaecological surgery",
      "PCOS and hormonal health",
      "Infertility evaluation",
      "Well-woman preventive care",
    ],
    timings: [
      { days: "Monday – Saturday", hours: "9:30 AM – 1:30 PM" },
      { days: "Tuesday, Thursday", hours: "4:00 PM – 6:00 PM" },
    ],
    consultationNote: "Antenatal registrations accepted on all consultation days.",
  },
  {
    slug: "dr-arjun-mehta",
    name: "Dr. Arjun Mehta",
    qualifications: "MBBS, MD (Medicine), DM (Neurology)",
    departmentSlug: "neurology",
    designation: "Consultant — Neurology",
    experienceYears: 12,
    languages: ["English", "Hindi", "Gujarati", "Kannada"],
    bio: [
      "Dr. Arjun Mehta diagnoses and manages conditions of the brain, spine and nervous system, including stroke, epilepsy, migraine and neuropathy.",
      "Patients value his methodical approach — careful history-taking, focused testing and honest discussion of what a diagnosis means for daily life, work and family.",
    ],
    expertise: [
      "Stroke evaluation and prevention",
      "Epilepsy management",
      "Headache and migraine clinics",
      "Nerve conduction studies",
      "Movement disorder care",
    ],
    timings: [
      { days: "Monday – Friday", hours: "10:00 AM – 1:00 PM" },
      { days: "Saturday", hours: "10:00 AM – 12:30 PM" },
    ],
  },
  {
    slug: "dr-kavitha-reddy",
    name: "Dr. Kavitha Reddy",
    qualifications: "MBBS, MD (Paediatrics)",
    departmentSlug: "paediatrics",
    designation: "Consultant — Paediatrics",
    experienceYears: 11,
    languages: ["English", "Hindi", "Telugu", "Kannada"],
    bio: [
      "Dr. Kavitha Reddy cares for newborns, infants and children with a gentle, parent-friendly approach. She runs the hospital's vaccination and well-baby clinics and provides guidance on growth, nutrition and development.",
      "She is particularly experienced in childhood asthma, allergies and recurrent infections, and takes time to coach parents on home care so children recover comfortably.",
    ],
    expertise: [
      "Newborn care",
      "Childhood vaccination",
      "Growth and development monitoring",
      "Paediatric asthma and allergy",
      "Child nutrition counselling",
    ],
    timings: [
      { days: "Monday – Saturday", hours: "9:00 AM – 12:30 PM" },
      { days: "Monday – Friday", hours: "4:30 PM – 6:30 PM" },
    ],
  },
  {
    slug: "dr-sanjay-gupta",
    name: "Dr. Sanjay Gupta",
    qualifications: "MBBS, MD (General Medicine)",
    departmentSlug: "general-medicine",
    designation: "Consultant — Internal Medicine",
    experienceYears: 15,
    languages: ["English", "Hindi", "Kannada", "Bengali"],
    bio: [
      "Dr. Sanjay Gupta is the anchor of our general medicine OPD, managing fever syndromes, diabetes, thyroid disease and hypertension with a strong emphasis on structured follow-up rather than one-off prescriptions.",
      "He coordinates closely with every specialty in the hospital, ensuring patients reach the right specialist at the right time — and never feel lost in the process.",
    ],
    expertise: [
      "Diabetes management",
      "Hypertension and lifestyle disease",
      "Thyroid disorders",
      "Fever and infectious disease",
      "Preventive health check-ups",
    ],
    timings: [
      { days: "Monday – Saturday", hours: "8:00 AM – 12:00 PM" },
      { days: "Monday – Friday", hours: "3:00 PM – 6:00 PM" },
    ],
  },
  {
    slug: "dr-meera-joseph",
    name: "Dr. Meera Joseph",
    qualifications: "MBBS, MD (Dermatology, Venereology & Leprosy)",
    departmentSlug: "dermatology",
    designation: "Consultant — Dermatology",
    experienceYears: 10,
    languages: ["English", "Hindi", "Malayalam", "Tamil"],
    bio: [
      "Dr. Meera Joseph believes good dermatology is honest dermatology. She treats acne, hair fall, pigmentation, eczema and psoriasis with evidence-based plans and realistic timelines, avoiding unnecessary procedures.",
      "She has a special interest in patch testing for skin allergies and in building simple, sustainable skincare routines for Indian skin types.",
    ],
    expertise: [
      "Acne and scar management",
      "Hair and scalp disorders",
      "Patch testing for allergies",
      "Pigmentation treatment",
      "Paediatric dermatology",
    ],
    timings: [
      { days: "Tuesday – Saturday", hours: "10:00 AM – 1:00 PM" },
      { days: "Wednesday, Friday", hours: "4:00 PM – 6:00 PM" },
    ],
  },
  {
    slug: "dr-vikram-desai",
    name: "Dr. Vikram Desai",
    qualifications: "MBBS, MS (General Surgery), FMAS",
    departmentSlug: "general-surgery",
    designation: "Senior Consultant — General & Laparoscopic Surgery",
    experienceYears: 20,
    languages: ["English", "Hindi", "Marathi", "Kannada"],
    bio: [
      "Dr. Vikram Desai performs a wide range of general and laparoscopic surgeries, including gallbladder, hernia and ano-rectal procedures, with a strong focus on day-care surgery and quick, comfortable recovery.",
      "In over two decades of practice he has been known for thorough pre-operative counselling — every patient hears the plan, the alternatives and the risks in plain language before entering the operating theatre.",
    ],
    expertise: [
      "Laparoscopic gallbladder surgery",
      "Hernia repair",
      "Ano-rectal surgery",
      "Emergency surgery",
      "Breast lump evaluation",
    ],
    timings: [
      { days: "Monday – Saturday", hours: "9:00 AM – 11:00 AM" },
      { days: "Tuesday, Thursday, Saturday", hours: "4:00 PM – 5:30 PM" },
    ],
  },
];

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}

export function getDoctorsByDepartment(deptSlug: string) {
  return doctors.filter((d) => d.departmentSlug === deptSlug);
}
