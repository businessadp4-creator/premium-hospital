import type { Department } from "./types";

/**
 * Department directory — 12 core specialities.
 * Clinical descriptions are standard, conservative healthcare copy for a
 * multi-specialty hospital. Review with the hospital's medical team and
 * adjust to match the departments actually offered. No outcomes, cure
 * claims or rankings are made anywhere.
 */

export const departmentsA: Department[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "heart-pulse",
    tagline: "Complete heart care under one roof",
    cardDescription:
      "From preventive heart check-ups to advanced cardiac diagnostics and rehabilitation, our cardiology team cares for your heart at every stage of life.",
    overview: [
      "Heart disease often develops silently, which is why early detection and consistent follow-up matter. Our Department of Cardiology brings together experienced cardiologists, modern diagnostic technology and structured prevention programmes to help patients understand and manage their heart health with confidence.",
      "We take a continuum-of-care approach: accurate diagnosis, evidence-based treatment, lifestyle guidance and long-term follow-up are coordinated within one department, so patients and families always know the next step in their care plan.",
    ],
    conditions: [
      "Coronary artery disease",
      "Hypertension (high blood pressure)",
      "Heart failure",
      "Arrhythmias (rhythm disturbances)",
      "High cholesterol and lipid disorders",
      "Valvular heart disease",
      "Post-heart-attack care and cardiac rehabilitation",
    ],
    treatments: [
      "ECG, Echocardiography & TMT (stress testing)",
      "Holter and ambulatory BP monitoring",
      "Preventive cardiac screening packages",
      "Medical management of heart failure",
      "Lipid and hypertension clinics",
      "Cardiac rehabilitation and lifestyle programmes",
      "Cardiology referrals for interventional procedures",
    ],
    highlights: [
      "In-house ECG, 2D Echo and TMT for same-visit answers",
      "Structured prevention clinics for BP, cholesterol and diabetes-related risk",
      "Coordinated cardiac rehabilitation with diet and physiotherapy",
    ],
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    icon: "bone",
    tagline: "Moving you back to life",
    cardDescription:
      "Expert care for bones, joints, sports injuries and spine problems — from accurate diagnosis to surgery when needed and physiotherapy for recovery.",
    overview: [
      "Bone and joint problems can affect anyone — from young athletes with sports injuries to grandparents with arthritis. Our orthopaedic team focuses on relieving pain, restoring movement and helping patients return to the activities they love, using the least invasive effective treatment first.",
      "Consultations are supported by digital X-ray and advanced imaging, and surgical care is performed in modern operation theatres with dedicated post-operative physiotherapy to speed up safe recovery.",
    ],
    conditions: [
      "Knee and hip arthritis",
      "Back pain and spinal disorders",
      "Sports injuries and ligament tears",
      "Fractures and trauma care",
      "Shoulder, elbow and wrist disorders",
      "Cervical and lumbar disc problems",
      "Osteoporosis and bone health",
    ],
    treatments: [
      "Digital X-ray and advanced musculoskeletal imaging",
      "Physiotherapy and rehabilitation services",
      "Arthroscopic (keyhole) procedures for joint injuries",
      "Joint preservation and replacement surgery referrals",
      "Fracture and plaster care",
      "Spine pain evaluation and conservative management",
      "Osteoporosis screening and treatment",
    ],
    highlights: [
      "Conservative-first approach — surgery only when truly indicated",
      "Dedicated physiotherapy partnership for post-injury recovery",
      "Digital imaging reports typically available the same day",
    ],
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "brain",
    tagline: "Care for the brain, spine and nerves",
    cardDescription:
      "Compassionate, evidence-based diagnosis and long-term management of stroke, epilepsy, headaches, neuropathy and other neurological conditions.",
    overview: [
      "Neurological conditions often need careful listening, precise diagnosis and patient long-term follow-up. Our neurology team combines detailed clinical assessment with modern imaging and neurophysiology to identify the cause of symptoms and build a realistic management plan around each patient's life.",
      "We work closely with our radiology, physiotherapy and general medicine teams so that stroke recovery, seizure control, headache management and nerve care are all handled with one coordinated plan.",
    ],
    conditions: [
      "Stroke and post-stroke care",
      "Epilepsy and seizures",
      "Migraine and chronic headaches",
      "Vertigo and balance disorders",
      "Neuropathy and nerve pain",
      "Parkinson's disease and movement disorders",
      "Memory concerns and dementia evaluation",
    ],
    treatments: [
      "Neurological consultation and detailed assessment",
      "EEG (electroencephalogram)",
      "Nerve conduction studies (NCS) and EMG",
      "Brain and spine MRI/CT through our imaging centre",
      "Stroke risk evaluation and prevention clinics",
      "Medication management with structured reviews",
      "Neuro-rehabilitation coordination",
    ],
    highlights: [
      "Rapid imaging pathways for acute neurological symptoms",
      "Long-term epilepsy and Parkinson's follow-up clinics",
      "Family-inclusive counselling for chronic conditions",
    ],
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    icon: "stethoscope",
    tagline: "Your first point of care",
    cardDescription:
      "Experienced internal medicine physicians for fever, infections, diabetes, thyroid, lifestyle diseases and everyday health concerns of the whole family.",
    overview: [
      "General physicians are often the first doctors patients meet — and the ones who know their history best. Our internal medicine team diagnoses and manages a wide spectrum of adult health problems, coordinates specialist referrals when needed, and provides continuity through every stage of treatment.",
      "We place strong emphasis on lifestyle disease management: diabetes, blood pressure, thyroid disorders, obesity and cholesterol need regular monitoring, patient education and medication fine-tuning, all of which we provide through structured follow-up clinics.",
    ],
    conditions: [
      "Fever and infections (including dengue, typhoid, viral syndromes)",
      "Diabetes mellitus",
      "Hypertension",
      "Thyroid disorders",
      "Anaemia and nutritional deficiencies",
      "Respiratory infections and asthma follow-up",
      "Preventive health reviews",
    ],
    treatments: [
      "Comprehensive OPD consultations",
      "Diabetes and hypertension follow-up clinics",
      "Thyroid and metabolic profiling",
      "Infectious disease management and monitoring",
      "Preventive master health check-ups",
      "Vaccination services for adults",
      "Coordinated specialist referrals",
    ],
    highlights: [
      "Same-day lab results for most routine tests",
      "Structured chronic-disease follow-up with reminders",
      "One doctor who knows your whole health story",
    ],
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    icon: "scissors",
    tagline: "Precise surgery, careful recovery",
    cardDescription:
      "Modern surgical care for hernia, gallbladder, appendix, piles and other abdominal conditions — with minimally invasive techniques wherever suitable.",
    overview: [
      "Surgery is a big decision, and patients deserve clear information. Our general surgery team evaluates every case thoroughly, explains all available options — including minimally invasive alternatives — and involves patients and families in planning treatment and recovery.",
      "Procedures are performed in modern operation theatres by experienced surgical and anaesthesia teams. Where suitable, laparoscopic (keyhole) techniques are preferred for smaller incisions, less discomfort and faster return home.",
    ],
    conditions: [
      "Hernias (inguinal, umbilical, incisional)",
      "Gallstones and biliary disease",
      "Appendicitis",
      "Piles, fissure and fistula",
      "Breast lumps and surgical breast conditions",
      "Skin and soft-tissue swellings",
      "Diabetic foot and wound care",
    ],
    treatments: [
      "Laparoscopic gallbladder and hernia surgery",
      "Day-care surgical procedures",
      "Ano-rectal (piles/fissure/fistula) treatment",
      "Breast lump evaluation and excision",
      "Emergency surgical care",
      "Pre-operative assessment and anaesthesia review",
      "Post-operative wound care and follow-up",
    ],
    highlights: [
      "Keyhole-first philosophy for suitable cases",
      "Transparent discussion of surgical risks and alternatives",
      "Structured follow-up until full recovery",
    ],
  },
  {
    slug: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    shortName: "OBG",
    icon: "heart-handshake",
    tagline: "Care for every stage of a woman's life",
    cardDescription:
      "Pregnancy care, safe deliveries, women's wellness, fertility guidance and advanced gynaecological treatment from a compassionate women's health team.",
    overview: [
      "Women's health needs change through every stage of life — adolescence, pregnancy, motherhood and menopause. Our obstetrics and gynaecology team accompanies women through all of them with respectful, unhurried consultations and evidence-based care.",
      "Antenatal care focuses on safe, well-monitored pregnancies with clear guidance at every visit, while our gynaecology services address menstrual health, PCOS, fertility concerns, menopause and preventive screening in a private, comfortable setting.",
    ],
    conditions: [
      "Antenatal care and high-risk pregnancy",
      "Menstrual disorders and PCOS",
      "Infertility evaluation and guidance",
      "Menopause and hormone health",
      "Fibroids, ovarian cysts and endometriosis",
      "Urinary and pelvic floor problems",
      "Cervical and breast cancer screening",
    ],
    treatments: [
      "Antenatal check-ups and scan coordination",
      "Normal delivery and caesarean care",
      "Well-woman health checks",
      "Pap smear and HPV vaccination",
      "PCOS and hormonal clinics",
      "Laparoscopic gynaecological surgery",
      "Menopause management",
    ],
    highlights: [
      "Unhurried, private consultations with women's health specialists",
      "Structured antenatal programme with diet and birth planning",
      "Preventive screening built into every well-woman visit",
    ],
  },
];
