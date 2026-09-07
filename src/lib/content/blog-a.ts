import type { BlogPost } from "./types";

/**
 * Health education library — medically conservative, awareness-oriented
 * articles. Written to standard public-health guidance. Each article carries
 * a disclaimer. Author profiles are sample doctors — see doctors.ts.
 */

export const blogPostsA: BlogPost[] = [
  {
    slug: "heart-attack-warning-signs",
    title: "Heart Attack Warning Signs You Should Never Ignore",
    category: "Heart Care",
    excerpt:
      "Chest discomfort, unusual sweating, pain that travels to the arm or jaw — recognising a heart attack early can save a life. Here is what to watch for and what to do in the first critical minutes.",
    coverImage: "/images/heart.jpg",
    authorSlug: "dr-ananya-sharma",
    authorName: "Dr. Ananya Sharma",
    publishedAt: "2026-08-18",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Every year, many heart attack deaths in India occur not because treatment was impossible, but because help was reached too late. The first hour — sometimes called the golden hour — is when the heart muscle can still be saved. Knowing the warning signs and acting immediately is the single most powerful protection you have.",
          "A heart attack happens when blood flow to part of the heart muscle is suddenly blocked. The longer the blockage remains, the more damage occurs. That is why doctors repeat one message constantly: when in doubt, get checked. It is always better to reach a hospital with a false alarm than to sit at home with a real one.",
        ],
      },
      {
        heading: "The classic warning signs",
        list: {
          items: [
            "Chest discomfort — pressure, tightness, heaviness or squeezing, often in the centre or left side, lasting more than a few minutes",
            "Pain spreading to the left arm, right arm, shoulder, back, neck or jaw",
            "Breaking into a cold sweat without physical exertion",
            "Breathlessness, sometimes with or without chest discomfort",
            "Nausea, vomiting or sudden indigestion-like discomfort",
            "Unusual, overwhelming fatigue in the hours or days before",
            "Dizziness or light-headedness",
          ],
        },
      },
      {
        heading: "Heart attacks can look different in women and diabetics",
        paragraphs: [
          "Women and people with diabetes frequently experience less dramatic symptoms — breathlessness, extreme tiredness, jaw or back pain, or simple nausea — rather than the clutch-the-chest pain of films and television. Because the signs are subtle, they are more often dismissed. If something feels seriously wrong with your body, trust that instinct and seek care.",
        ],
      },
      {
        heading: "What to do in the first minutes",
        list: {
          intro:
            "If you or someone near you has symptoms lasting more than a few minutes:",
          items: [
            "Call the hospital emergency number or an ambulance immediately — do not drive yourself",
            "Sit the person down, loosen tight clothing and keep them calm and still",
            "Do not let the person walk or exert themselves",
            "If a doctor has previously prescribed medication for such episodes, use it as directed",
            "Note the time symptoms started — this information helps the treating team",
          ],
        },
      },
      {
        heading: "Reduce your risk before it happens",
        paragraphs: [
          "Most heart attacks are built over years from silent risk factors — high blood pressure, cholesterol, diabetes, smoking, stress and inactivity. An annual preventive heart check-up, especially after the age of 35 or with a family history, can identify these risks while they are still easy to correct.",
          "Our cardiology team offers preventive screening, echocardiography and stress testing under one roof. If anything in this article feels familiar to you, do not wait — book a consultation and let us assess your heart properly.",
        ],
      },
    ],
    disclaimer:
      "This article is for general health awareness and does not replace personal medical advice. If you are experiencing symptoms now, contact emergency services immediately.",
  },
  {
    slug: "diabetes-small-daily-habits",
    title: "Managing Diabetes: Small Daily Habits That Make a Real Difference",
    category: "Diabetes Care",
    excerpt:
      "Diabetes control is not one big decision — it is dozens of small daily ones. A physician's practical guide to food, movement, monitoring and medication habits that genuinely lower blood sugar.",
    coverImage: "/images/nutrition.jpg",
    authorSlug: "dr-sanjay-gupta",
    authorName: "Dr. Sanjay Gupta",
    publishedAt: "2026-07-30",
    readMinutes: 6,
    sections: [
      {
        paragraphs: [
          "When patients are newly diagnosed with diabetes, they often expect a dramatic life overhaul. In practice, successful diabetes control is built from small, repeatable habits — the plate you fill at lunch, the ten-minute walk after dinner, the tablets taken at the same time every day. Small habits are easier to keep, and consistency is what lowers HbA1c.",
          "Diabetes is a long-term relationship with your own body. The goal is not perfection for a week, but steadiness for years — protecting your eyes, kidneys, nerves, heart and feet from silent damage while living a full, normal life.",
        ],
      },
      {
        heading: "Eat for steady sugar, not for restriction",
        list: {
          items: [
            "Fill half your plate with vegetables at lunch and dinner; split the rest between protein (dal, curd, eggs, paneer, fish) and whole grains",
            "Prefer whole millets, brown rice or chapati made from whole wheat over polished white rice at every meal",
            "Eat fruit whole — never as juice; the fibre of a whole apple or guava slows sugar absorption",
            "Keep dinner early and light; late heavy dinners drive morning sugars up",
            "Watch liquid sugar completely: soft drinks, packaged juices and sweetened chai are the fastest sugar spikes of all",
          ],
        },
      },
      {
        heading: "Movement is medicine — literally",
        paragraphs: [
          "Muscles use sugar for fuel, and a brisk 30-minute walk most days of the week measurably improves insulin sensitivity. You do not need a gym: a morning walk, taking stairs, household work and an after-dinner family stroll all count. If you have been inactive for years or have joint or heart problems, ask your doctor before starting, then build up gradually.",
          "For many patients, the single most effective habit is the post-meal walk. Ten to fifteen minutes after lunch or dinner helps clear the sugar spike while it is happening — a small effort with a disproportionate reward.",
        ],
      },
      {
        heading: "Monitor, medicate, review",
        paragraphs: [
          "Take your medicines exactly as prescribed — never adjust or stop them because a few readings looked good. Home glucose monitoring, where advised, turns vague feelings into useful data. And keep your quarterly review: HbA1c testing every three to six months tells us whether your overall control is truly on track, not just the reading on one morning.",
          "Annual screening matters just as much: eyes (fundus exam), kidneys (microalbumin), feet (nerve and circulation check) and lipid profile. Diabetes damage is easiest to prevent — and hardest to reverse — which is why we screen for it before it has symptoms.",
        ],
      },
      {
        heading: "When to see your doctor promptly",
        list: {
          items: [
            "Repeated readings consistently above your target range",
            "Unexplained weight loss, excessive thirst or frequent urination",
            "Any foot wound, blister or ulcer that is not healing",
            "Frequent low-sugar episodes (shakiness, sweating, confusion)",
            "Blurring of vision or numbness in the feet",
          ],
        },
      },
    ],
    disclaimer:
      "This article is for general health awareness and does not replace personal medical advice. Consult your physician before making changes to diet, exercise or medication.",
  },
  {
    slug: "blood-pressure-basics",
    title: "Blood Pressure Basics: Why the Silent Condition Needs Your Attention",
    category: "Heart Care",
    excerpt:
      "High blood pressure rarely causes symptoms until it has already damaged the heart, brain or kidneys. Understanding your numbers — and keeping them in range — is one of the simplest gifts you can give your future self.",
    coverImage: "/images/checkup.jpg",
    authorSlug: "dr-ananya-sharma",
    authorName: "Dr. Ananya Sharma",
    publishedAt: "2026-07-14",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "High blood pressure (hypertension) is called the silent killer for a precise reason: it produces almost no symptoms while it quietly stiffens arteries, thickens the heart and strains the kidneys and brain. Many patients discover it only at a routine check-up — or unfortunately, during an emergency.",
          "The encouraging truth is that blood pressure is one of the most manageable health conditions we treat. With periodic monitoring, sensible lifestyle habits and, when needed, one small daily tablet, most people keep it fully in range and live completely normal lives.",
        ],
      },
      {
        heading: "Understanding your numbers",
        list: {
          items: [
            "Normal: below 120/80 mmHg — keep up your healthy habits",
            "Elevated: 120–139 / 80–89 — lifestyle focus now, review with a doctor",
            "High (hypertension): 140/90 or above on repeated measurements — medical assessment needed",
            "Crisis level: 180/120 or above, especially with chest pain, severe headache, breathlessness or vision change — seek emergency care immediately",
          ],
        },
      },
      {
        heading: "Home measurement, done right",
        paragraphs: [
          "A single high reading in a clinic — white-coat effect, traffic stress, a hurried morning — does not define your blood pressure. What matters is the pattern. If your doctor has advised home monitoring, use a validated upper-arm cuff, rest quietly for five minutes first, keep your back supported and feet flat, and take readings at consistent times (morning and evening). Bring a written log of every reading to your appointment; that log shapes treatment far better than memory.",
        ],
      },
      {
        heading: "Habits that lower blood pressure",
        list: {
          items: [
            "Reduce salt: pickles, papads, packaged snacks and restaurant food carry most of our hidden salt — taste first, then add",
            "Walk briskly for 30 minutes on most days; even broken-up bouts of 10 minutes count",
            "Manage weight gradually — even a 4–5 kg reduction measurably lowers pressure",
            "Limit alcohol and stop smoking entirely — both injure blood vessels",
            "Sleep 7 hours; untreated snoring with daytime sleepiness deserves a sleep-apnoea check",
            "Practise slow breathing or meditation — chronic stress hormones keep pressure elevated",
          ],
        },
      },
      {
        paragraphs: [
          "If you have been prescribed BP medication, take it daily even when readings are normal — the tablet is working precisely because the number is controlled. Stopping medication on your own is the most common reason patients return with complications that could have been prevented.",
          "A basic hypertension evaluation — examination, ECG, kidney and lipid panel — takes one morning at our hospital. If you have not had your pressure checked in the past year, consider this article your reminder.",
        ],
      },
    ],
    disclaimer:
      "This article is for general health awareness and does not replace personal medical advice. Never start, stop or change BP medication without consulting your doctor.",
  },
  {
    slug: "monsoon-fever-prevention-family-guide",
    title: "Monsoon in Bangalore: A Family Guide to Fever Prevention",
    category: "Family Health",
    excerpt:
      "Dengue, typhoid, viral fevers and leptospirosis rise with the rains. Simple home and surroundings habits protect your family far better than worry — here is your practical monsoon checklist.",
    coverImage: "/images/hygiene.jpg",
    authorSlug: "dr-kavitha-reddy",
    authorName: "Dr. Kavitha Reddy",
    publishedAt: "2026-06-22",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "The first heavy rains bring relief from summer heat — and a predictable rise in fevers across Bangalore. Mosquito-borne dengue, waterborne typhoid and hepatitis A, and a parade of viral fevers all peak in the monsoon months. The good news: nearly all of them are preventable with habits that take minutes, not money.",
        ],
      },
      {
        heading: "Win the fight against mosquitoes at home",
        list: {
          items: [
            "Empty and scrub water storage containers, coolers and flower-pot trays once a week — dengue mosquitoes breed in clean, standing water",
            "Cover all water storage tanks and drums securely",
            "Dress children in full-sleeve light clothing at dawn and dusk, when Aedes mosquitoes bite most",
            "Use mosquito nets for infants and the elderly even during the day",
            "Do not allow water to collect in tyres, broken pots or construction debris near your home",
          ],
        },
      },
      {
        heading: "Safe food and water, every meal",
        list: {
          items: [
            "Drink only boiled, filtered or sealed water — especially children and elders",
            "Wash all raw produce thoroughly; prefer cooked vegetables during peak monsoon weeks",
            "Avoid street-cut fruits, chutneys and pre-cut salads — the monsoon contamination risk is real",
            "Reheat stored food properly before eating",
            "Wash hands with soap before every meal and after using the washroom — the humblest and most effective prevention we have",
          ],
        },
      },
      {
        heading: "When fever means 'see a doctor now'",
        paragraphs: [
          "Most monsoon fevers are viral and settle in three to five days with rest, fluids and paracetamol as advised. But some patterns need professional assessment without delay: fever lasting beyond three days, severe body ache with headache behind the eyes (possible dengue), fever with abdominal pain or persistent vomiting, decreased urine output, bleeding gums or skin spots, breathlessness, or any fever in an infant under three months, an elderly person, or someone with diabetes or kidney disease.",
          "One important caution: never give aspirin or combination painkillers during a dengue-suspected fever — they can increase bleeding risk. Paracetamol, dosed correctly, is the safer choice while you reach a doctor.",
        ],
      },
      {
        heading: "Testing early saves trouble",
        paragraphs: [
          "A simple fever panel — CBC with platelet count, dengue NS1, and where suggested by your doctor, typhoid and urine tests — usually gives clear answers within hours at our laboratory. Early identification of dengue or typhoid changes management completely, from watchful hydration at home to timely hospital care.",
          "If your family has a fever that is not settling, walk in or book a consultation. We would much rather reassure you early than treat late.",
        ],
      },
    ],
    disclaimer:
      "This article is for general health awareness and does not replace personal medical advice. Consult a doctor for any fever that is severe, persistent or accompanied by warning symptoms.",
  },
];
