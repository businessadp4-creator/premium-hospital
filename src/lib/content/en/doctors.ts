import type { Doctor } from "../types";

/**
 * ============================================================================
 * ⚠️ SAMPLE DOCTOR DIRECTORY — [PLACEHOLDER] DATA ⚠️
 * ----------------------------------------------------------------------------
 * Every doctor below is a SAMPLE profile created to demonstrate the design.
 * Names, qualifications, experience figures and timings are NOT real and MUST
 * be replaced with the hospital's actual doctors before launch.
 * The `photo` field is intentionally empty: an elegant monogram avatar renders
 * until real, consented doctor photographs are added.
 * English mirror pack — slugs and order match src/lib/content/doctors.ts.
 * ============================================================================
 */

export const doctors: Doctor[] = [
  {
    slug: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    qualifications: "MBBS, MD (General Medicine), DM (Cardiology)",
    departmentSlug: "cardiology",
    designation: "Senior Consultant, Cardiology",
    experienceYears: 16,
    languages: ["English", "Hindi", "Telugu", "Kannada"],
    bio: [
      "Dr. Ananya Sharma leads the cardiology team, with a focus on preventive heart care and the long-term management of heart disease. Patients remember her unhurried consultations and the way she explains every test result clearly.",
      "Her clinical scope covers coronary artery disease, heart failure, blood pressure and cardiac rehabilitation, with a special interest in helping people with diabetes and young professionals bring down their lifetime heart risk.",
    ],
    expertise: [
      "Preventive cardiology",
      "Echocardiography and stress testing",
      "Heart failure management",
      "Blood pressure and cholesterol clinics",
      "Cardiac rehabilitation",
    ],
    timings: [
      { days: "Monday – Friday", hours: "9:00 AM – 1:00 PM" },
      { days: "Saturday", hours: "9:00 AM – 12:00 PM" },
    ],
    consultationNote:
      "Sees both walk-in and booked patients. Bringing previous reports is helpful.",
  },
  {
    slug: "dr-ramesh-iyer",
    name: "Dr. Ramesh Iyer",
    qualifications: "MBBS, MS (Orthopaedics)",
    departmentSlug: "orthopaedics",
    designation: "Consultant, Orthopaedic Surgery",
    experienceYears: 14,
    languages: ["English", "Hindi", "Telugu", "Tamil", "Kannada"],
    bio: [
      "Dr. Ramesh Iyer treats the full range of bone and joint problems, with special skill in knee arthritis, sports injuries and arthroscopic (keyhole) surgery.",
      "He strongly believes that non-surgical options such as physiotherapy, lifestyle changes and medicines should be fully tried before surgery is recommended. He explains every option while showing you the X-ray, so patients can decide with confidence.",
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
      { days: "Mon, Wed & Fri", hours: "5:00 PM – 7:00 PM" },
    ],
  },
  {
    slug: "dr-priya-nair",
    name: "Dr. Priya Nair",
    qualifications: "MBBS, MS (Obstetrics & Gynaecology)",
    departmentSlug: "obstetrics-gynaecology",
    designation: "Senior Consultant, Obstetrics & Gynaecology",
    experienceYears: 18,
    languages: ["English", "Hindi", "Telugu", "Malayalam", "Kannada"],
    bio: [
      "Dr. Priya Nair has devoted her entire career to women's health: she has guided thousands of mothers through safe pregnancies, and stands by women with privacy and warmth in every gynaecological problem.",
      "Her special interests include high-risk pregnancy care, PCOS, minimal-access (laparoscopic) gynaecological surgery and adolescent health education.",
    ],
    expertise: [
      "High-risk pregnancy care",
      "Laparoscopic gynaecological surgery",
      "PCOS and hormone health",
      "Infertility assessment",
      "Well-women preventive care",
    ],
    timings: [
      { days: "Monday – Saturday", hours: "9:30 AM – 1:30 PM" },
      { days: "Tue & Thu", hours: "4:00 PM – 6:00 PM" },
    ],
    consultationNote:
      "Antenatal (pregnancy) registrations are available on all consultation days.",
  },
  {
    slug: "dr-arjun-mehta",
    name: "Dr. Arjun Mehta",
    qualifications: "MBBS, MD (Medicine), DM (Neurology)",
    departmentSlug: "neurology",
    designation: "Consultant, Neurology",
    experienceYears: 12,
    languages: ["English", "Hindi", "Telugu", "Gujarati", "Kannada"],
    bio: [
      "Dr. Arjun Mehta diagnoses and manages problems of the brain, spine and nervous system, including stroke, epilepsy, migraine and nerve pain.",
      "Patients appreciate his methodical approach: a careful history, only the tests that are truly needed, and an honest discussion of what the diagnosis means for daily life, work and family.",
    ],
    expertise: [
      "Stroke assessment and prevention",
      "Epilepsy management",
      "Headache and migraine clinics",
      "Nerve conduction studies (NCS)",
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
    designation: "Consultant, Paediatrics",
    experienceYears: 11,
    languages: ["English", "Hindi", "Telugu", "Kannada"],
    bio: [
      "Dr. Kavitha Reddy brings a gentle, parent-friendly approach to the care of newborns and children. She runs the hospital's vaccination and well-baby clinics and advises families on growth, nutrition and development.",
      "She has special experience with childhood asthma, allergies and repeated infections, and patiently trains parents on home care so children recover comfortably.",
    ],
    expertise: [
      "Newborn care",
      "Childhood vaccinations",
      "Growth and development monitoring",
      "Childhood asthma and allergies",
      "Paediatric nutrition counselling",
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
    designation: "Consultant, Internal Medicine",
    experienceYears: 15,
    languages: ["English", "Hindi", "Telugu", "Kannada", "Bengali"],
    bio: [
      "Dr. Sanjay Gupta is the steady clock of our general medicine OPD. He manages fevers, diabetes, thyroid and blood pressure problems not with a one-time prescription but with structured follow-up.",
      "He coordinates closely with every speciality in the hospital, so patients reach the right specialist at the right time and nothing slips through the cracks along the way.",
    ],
    expertise: [
      "Diabetes management",
      "Blood pressure and lifestyle diseases",
      "Thyroid problems",
      "Fevers and infectious diseases",
      "Preventive health checks",
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
    designation: "Consultant, Dermatology",
    experienceYears: 10,
    languages: ["English", "Hindi", "Telugu", "Malayalam", "Tamil"],
    bio: [
      "Dr. Meera Joseph's belief is that good dermatology is honest dermatology. She treats acne, hair loss, pigmentation, eczema and psoriasis with evidence-based plans and realistic timelines, avoiding unnecessary procedures.",
      "She has a special interest in patch testing for skin allergies and in designing simple, sustainable skin care routines suited to Indian skin types.",
    ],
    expertise: [
      "Acne and scar management",
      "Hair and scalp problems",
      "Patch testing for allergies",
      "Pigmentation treatment",
      "Paediatric skin conditions",
    ],
    timings: [
      { days: "Tuesday – Saturday", hours: "10:00 AM – 1:00 PM" },
      { days: "Wed & Fri", hours: "4:00 PM – 6:00 PM" },
    ],
  },
  {
    slug: "dr-vikram-desai",
    name: "Dr. Vikram Desai",
    qualifications: "MBBS, MS (General Surgery), FMAS",
    departmentSlug: "general-surgery",
    designation: "Senior Consultant, General & Laparoscopic Surgery",
    experienceYears: 20,
    languages: ["English", "Hindi", "Telugu", "Marathi", "Kannada"],
    bio: [
      "Dr. Vikram Desai handles a wide range of surgery, including gallbladder, hernia and piles procedures, with a special focus on day-care surgery and a quick, comfortable recovery.",
      "In a practice spanning more than two decades, his name has come to stand for one thing: thorough counselling before surgery. Before any patient enters the operation theatre, he explains the plan, the alternatives and the risks in plain language.",
    ],
    expertise: [
      "Laparoscopic gallbladder surgery",
      "Hernia repair",
      "Ano-rectal (piles) surgery",
      "Emergency surgery",
      "Breast lump assessment",
    ],
    timings: [
      { days: "Monday – Saturday", hours: "9:00 AM – 11:00 AM" },
      { days: "Tue, Thu & Sat", hours: "4:00 PM – 5:30 PM" },
    ],
  },
];
