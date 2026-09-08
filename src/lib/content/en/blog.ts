import type { BlogPost } from "../types";

/**
 * Health education library — medically conservative, awareness-oriented
 * articles (English mirror pack). Slugs, order, dates, images, author slugs,
 * readMinutes and section structure match src/lib/content/blog-a.ts and
 * blog-b.ts exactly. Written to standard public-health guidance. Each article
 * carries a disclaimer. Author profiles are sample doctors — see doctors.ts.
 */

export const blogPostsA: BlogPost[] = [
  {
    slug: "heart-attack-warning-signs",
    title: "Heart attack warning signs: never ignore them",
    category: "Heart Health",
    excerpt:
      "Discomfort in the chest, unusual sweating, pain spreading to the arm or jaw: recognising a heart attack early can save a life. Here is what to watch for, and what to do in the first critical minutes.",
    coverImage: "/images/heart.jpg",
    authorSlug: "dr-ananya-sharma",
    authorName: "Dr. Ananya Sharma",
    publishedAt: "2026-08-18",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Most heart attack deaths in India each year happen not because treatment is impossible, but because help arrives late. The first hour, often called the 'golden hour', is when the heart muscle can still be saved. Knowing the warning signs and responding immediately is the most powerful protection you have.",
          "A heart attack happens when blood supply to the heart muscle is suddenly blocked. The longer the blockage lasts, the greater the damage. That is why doctors repeat the same message again and again: if in doubt, get checked. Arriving at the hospital with a false alarm is always better than sitting at home with a real danger.",
        ],
      },
      {
        heading: "Classic warning signs",
        list: {
          items: [
            "Chest discomfort: pressure, tightness, heaviness or a squeezing feeling, often in the centre or on the left side, lasting more than a few minutes",
            "Pain spreading to the left arm, right arm, shoulder, back, neck or jaw",
            "Cold sweat breaking out without any exertion",
            "Breathlessness, with or without chest discomfort",
            "Nausea, vomiting, or a feeling of sudden gastric trouble",
            "Unusual, restless tiredness in the hours or days before",
            "Dizziness or feeling faint",
          ],
        },
      },
      {
        heading: "Symptoms can look different in women and in people with diabetes",
        paragraphs: [
          "In women and in people with diabetes (high blood sugar), the picture is often less obvious than the crushing chest pain shown in films: breathlessness, extreme fatigue, jaw or back pain, or simple nausea are more common. Because the symptoms are not straightforward, they are easier to miss. If something in your body feels seriously wrong, trust that judgement and seek medical help.",
        ],
      },
      {
        heading: "What to do in the first minutes",
        list: {
          intro:
            "If you or someone near you has symptoms lasting more than a few minutes:",
          items: [
            "Call the hospital emergency number or an ambulance immediately; do not drive yourself",
            "Make the person sit down, loosen tight clothing, and keep them calm and still",
            "Do not let the person walk or exert themselves",
            "If a doctor has previously prescribed medicines for situations like this, use them as prescribed",
            "Note the time the symptoms started; the treatment team will find it useful",
          ],
        },
      },
      {
        heading: "Reduce the risk before it happens",
        paragraphs: [
          "Most heart attacks build over years of silent risk factors: blood pressure, cholesterol, diabetes, smoking, stress and lack of exercise. After the age of 35, or if there is a family history of heart disease, an annual preventive heart check finds these risks at the stage when they are still easy to correct.",
          "Our cardiology team offers preventive screening, echocardiography and stress testing in one place. If anything in this article feels familiar to you, do not wait. Book a consultation and get your heart examined properly.",
        ],
      },
    ],
    disclaimer:
      "This article is for general health awareness only and is not a substitute for personal medical advice. If you have symptoms now, contact emergency services immediately.",
  },
  {
    slug: "diabetes-small-daily-habits",
    title: "Managing diabetes (blood sugar): small daily habits that genuinely work",
    category: "Diabetes Care",
    excerpt:
      "Sugar control is not one big decision; it is dozens of small daily ones. A physician's practical guide to food, movement, monitoring and medication habits.",
    coverImage: "/images/nutrition.jpg",
    authorSlug: "dr-sanjay-gupta",
    authorName: "Dr. Sanjay Gupta",
    publishedAt: "2026-07-30",
    readMinutes: 6,
    sections: [
      {
        paragraphs: [
          "When diabetes is newly diagnosed, patients often expect their whole life to turn upside down. In reality, successful sugar control is built from small, repeated habits: filling up a little less on rice at meals, a ten-minute walk after eating, taking tablets at the same time every day. Small habits are easier to keep, and keeping them is what lowers HbA1c.",
          "Diabetes is a long-term relationship with your body. The goal is not one perfect week but years of stability: protecting the eyes, kidneys, nerves, heart and legs from silent damage while living a completely normal life.",
        ],
      },
      {
        heading: "Food: for stable sugar, not deprivation",
        list: {
          items: [
            "Fill half your plate with vegetables at lunch and dinner; share the rest between protein (dals, curd, eggs, paneer, fish) and whole grains",
            "At every meal prefer millets, hand-pounded rice or whole wheat rotis over polished white rice",
            "Eat fruit whole, never as juice; the fibre in a whole custard apple or guava slows sugar absorption",
            "Eat dinner early and light; a late, heavy meal raises the next morning's sugar",
            "Stay completely away from liquid sugar: cool drinks, packet juices and sweetened tea are the fastest things to raise sugar",
          ],
        },
      },
      {
        heading: "Movement is medicine, truly",
        paragraphs: [
          "Muscles use sugar as fuel. Thirty minutes of brisk walking on most days of the week genuinely improves insulin sensitivity. No gym is needed: a morning walk, climbing stairs, housework and a family walk after dinner all count. If you have been inactive for years, or have joint or heart problems, ask your doctor first and then increase gradually.",
          "For many patients, the single most effective habit is the post-meal walk. Ten to fifteen minutes of walking after a meal cuts the sugar spike at the very moment it is rising: a small effort with an outsized return.",
        ],
      },
      {
        heading: "Monitor, medicate, review",
        paragraphs: [
          "Take medicines exactly as prescribed; never change or stop them because a few readings looked good. Home glucose monitoring, where advised, turns vague feelings into useful numbers. And keep up the quarterly review: an HbA1c test every three to six months tells you whether overall control is truly on track, not just one morning's reading.",
          "Annual checks matter just as much: eyes (retinal examination), kidneys (microalbumin), feet (nerve and circulation testing) and a lipid profile. Preventing diabetes damage is easy; reversing it is not. That is why we test before symptoms appear.",
        ],
      },
      {
        heading: "When to see your doctor promptly",
        list: {
          items: [
            "Readings staying beyond your target range, one after another",
            "Unexplained weight loss, excessive thirst or frequent urination",
            "A foot wound, blister or sore that will not heal",
            "Frequent low-sugar episodes (trembling hands, sweating, faintness)",
            "Blurred vision or numbness in the feet",
          ],
        },
      },
    ],
    disclaimer:
      "This article is for general health awareness only and is not a substitute for personal medical advice. Consult your doctor before making changes to diet, exercise or medicines.",
  },
  {
    slug: "blood-pressure-basics",
    title: "Blood pressure basics: why the silent disease needs your attention",
    category: "Heart Health",
    excerpt:
      "High blood pressure shows almost no symptoms until it has damaged the heart, brain or kidneys. Understanding your numbers, and keeping them in range, is one of the simplest gifts you can give your future self.",
    coverImage: "/images/checkup.jpg",
    authorSlug: "dr-ananya-sharma",
    authorName: "Dr. Ananya Sharma",
    publishedAt: "2026-07-14",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Hypertension (high blood pressure) is called the 'silent killer' for a precise reason: it stiffens the arteries, thickens the heart and strains the kidneys and brain, all with almost no symptoms. Many patients are diagnosed in a routine check, and some, unfortunately, during an emergency.",
          "The encouraging truth: blood pressure is one of the most controllable conditions we treat. With regular monitoring, sensible lifestyle habits and, if needed, a single small daily tablet, most people keep it fully in range and live ordinary lives.",
        ],
      },
      {
        heading: "Understanding your numbers",
        list: {
          items: [
            "Normal: below 120/80 mmHg; keep up the good habits",
            "Elevated: 120–139 / 80–89; focus on lifestyle now and review with a doctor",
            "Hypertension: 140/90 or above on repeated measurements; needs medical assessment",
            "Danger zone: 180/120 or above, especially with chest pain, severe headache, breathlessness or changes in vision; seek emergency care immediately",
          ],
        },
      },
      {
        heading: "Measuring at home, the right way",
        paragraphs: [
          "One high reading at the clinic, caused by the 'white-coat' effect, traffic stress or a rushed morning, does not define your blood pressure. The pattern matters. If your doctor advises home monitoring: use a validated upper-arm cuff, rest quietly for five minutes first, sit with back support and feet flat, measure at the same times (morning and evening), and record every reading in writing to take to the appointment. That record, not memory, shapes treatment best.",
        ],
      },
      {
        heading: "Habits that lower blood pressure",
        list: {
          items: [
            "Cut the salt: pickles, papads, packaged snacks and restaurant food hide plenty of it. Taste first, then add",
            "Walk briskly for 30 minutes on most days; ten-minute chunks count too",
            "Bring your weight down gradually; even a 4–5 kg loss genuinely lowers blood pressure",
            "Limit alcohol and quit smoking completely; both injure the blood vessels",
            "Sleep seven hours; loud snoring with daytime sleepiness is a reason to check for sleep apnoea",
            "Slow breathing or meditation; chronic stress hormones keep blood pressure raised",
          ],
        },
      },
      {
        paragraphs: [
          "If blood pressure medicines have been prescribed, take them every day even when the readings look normal; it is the tablet that is working that keeps the number in range. Stopping medicines on your own is one of the most common reasons patients return with preventable problems.",
          "A basic blood pressure assessment (examination, ECG, kidney tests and a lipid panel) can be completed in a single morning at our hospital. Have you not had your blood pressure checked this year? Consider this article your reminder.",
        ],
      },
    ],
    disclaimer:
      "This article is for general health awareness only and is not a substitute for personal medical advice. Do not start, stop or change blood pressure medicines without consulting a doctor.",
  },
  {
    slug: "monsoon-fever-prevention-family-guide",
    title: "Protecting your family from monsoon fevers: a practical guide",
    category: "Family Health",
    excerpt:
      "Dengue, typhoid and viral fevers rise with the rains. Simple household habits, not worry, are what protect your family. Here is your practical monsoon checklist.",
    coverImage: "/images/hygiene.jpg",
    authorSlug: "dr-kavitha-reddy",
    authorName: "Dr. Kavitha Reddy",
    publishedAt: "2026-06-22",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "The first big rains bring relief from the summer heat, and at the same time bring a rise in fevers across Bengaluru. Mosquito-borne dengue, water-borne typhoid and hepatitis A, and wave after wave of viral fevers all peak in the monsoon months. The good news: almost all of them can be prevented with habits that cost minutes, not money.",
        ],
      },
      {
        heading: "Win the war on mosquitoes at home",
        list: {
          items: [
            "Empty and scrub water storage containers, coolers and plant pot trays once a week; dengue mosquitoes breed only in clean stored water",
            "Keep water tanks and drums tightly covered",
            "Dress children in long, light clothing at dawn and dusk, the hours Aedes mosquitoes bite most",
            "Use mosquito nets for infants and older adults during the day too",
            "Do not let water collect in tyres, broken pots or construction debris around the house",
          ],
        },
      },
      {
        heading: "Safe food and water at every meal",
        list: {
          items: [
            "Drink only boiled, filtered or sealed water, especially for children and older adults",
            "Wash all raw vegetables and fruit well; prefer cooked vegetables during the peak monsoon weeks",
            "Skip fruit cut on the street, chutneys and pre-cut salads; the risk of monsoon contamination is real",
            "Reheat stored food thoroughly before eating",
            "Wash hands with soap before every meal and after using the toilet: our most ordinary and most effective prevention",
          ],
        },
      },
      {
        heading: "When a fever means 'see a doctor now'",
        paragraphs: [
          "Most monsoon fevers are viral and settle in three to five days with rest, fluids and paracetamol as advised. But some patterns need prompt professional assessment: fever lasting beyond three days, severe body ache with pain behind the eyes (suspect dengue), fever with abdominal pain or persistent vomiting, reduced urination, bleeding gums or skin spots, breathlessness, or any fever in an infant under three months, in older adults, or in someone with diabetes or kidney disease.",
          "One important caution: never give aspirin or combination painkillers in a suspected dengue fever; they can raise the risk of bleeding. Paracetamol at the right dose is the safe choice until the doctor is reached.",
        ],
      },
      {
        heading: "Early testing saves trouble",
        paragraphs: [
          "A simple fever panel, CBC with platelet count, dengue NS1 and, on the doctor's advice, typhoid and urine tests, usually gives clear answers within hours in our lab. Identifying dengue or typhoid early changes management completely, from careful fluids at home to timely hospital care.",
          "If anyone in your family has a fever that will not settle, come and see us, whether you walk in or book a consultation. We would rather reassure you early than treat you late.",
        ],
      },
    ],
    disclaimer:
      "This article is for general health awareness only and is not a substitute for personal medical advice. Consult a doctor for fever that is severe, persistent or comes with danger signs.",
  },
];

export const blogPostsB: BlogPost[] = [
  {
    slug: "protecting-knees-as-you-age",
    title: "Protecting your knees as you age: an orthopaedic surgeon's guide",
    category: "Bone & Joint Health",
    excerpt:
      "Knee pain after 50 is common, but it is not something to endure silently. From how you climb stairs to weight and footwear, here is how to keep your knees moving for decades.",
    coverImage: "/images/bones.jpg",
    authorSlug: "dr-ramesh-iyer",
    authorName: "Dr. Ramesh Iyer",
    publishedAt: "2026-08-05",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "The knee is the hardest-working joint in the body: every step loads it with many times your body weight, and a lifetime of stairs, squatting and standing in traffic adds up. By the age of sixty, most people show some knee wear on an X-ray, yet many of them walk without pain. The difference between painful knees and painless knees lies not in luck but in habits.",
          "Arthritis pain is not a signal to stop moving. In fact, carefully chosen movement is the scientifically proven first treatment for arthritis: strong thigh muscles act as natural shock absorbers and take load off the joint.",
        ],
      },
      {
        heading: "Your knees will thank you for these daily habits",
        list: {
          items: [
            "Watch your weight: every extra kilo adds roughly four kilos of load on the knees with every step",
            "Replace deep squats and sitting cross-legged on the floor with sitting on a chair with legs stretched out, or use a high, firm stool",
            "Come down the stairs slowly or hold the handrail; descending loads the knee more than climbing",
            "Choose soft, well-fitting footwear; replace worn walking shoes every 500–700 km",
            "Warm up for five minutes before exercise or a walk; cold muscles strain the joints",
            "Build thigh strength: straight-leg raises, wall-supported half squats and light cycling are kind to the knees",
            "If your knees already hurt, prefer swimming or cycling to running; the same fitness at a quarter of the load",
          ],
        },
      },
      {
        heading: "When knee pain needs a doctor, not just home care",
        list: {
          items: [
            "Pain that wakes you at night",
            "Swelling, warmth or redness around the joint",
            "The knee locking, giving way or buckling while walking",
            "Pain persisting beyond two to three weeks despite rest",
            "Difficulty with daily activities: stairs, squatting in the toilet, walking to the market",
          ],
        },
      },
      {
        paragraphs: [
          "At our hospital we assess the knees with a clinical examination and digital X-ray and build a step-wise plan: physiotherapy and muscle strengthening first, medicines for flare-ups when needed, injections for selected patients, and surgical options (including joint replacement) only after non-surgical care has genuinely been completed.",
          "Many patients arrive frightened that 'bone is rubbing on bone'. With a structured exercise plan, most of them go home with much less pain. The earlier you come, the more can be done without surgery.",
        ],
      },
    ],
    disclaimer:
      "This article is for general health awareness only and is not a substitute for personal medical advice. Consult an orthopaedic specialist for persistent joint pain.",
  },
  {
    slug: "first-prenatal-visit-guide",
    title: "Your first antenatal (pregnancy) visit: what happens and how to prepare",
    category: "Maternal & Child Health",
    excerpt:
      "A positive test brings joy, along with dozens of questions. Here is exactly what happens at the first pregnancy appointment, which scans to expect and what to ask the doctor.",
    coverImage: "/images/momcare.jpg",
    authorSlug: "dr-priya-nair",
    authorName: "Dr. Priya Nair",
    publishedAt: "2026-09-01",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Congratulations, and welcome to one of the most closely supported journeys in medicine. The first antenatal visit usually happens between six and ten weeks of pregnancy. Its purpose is simple: to confirm that the pregnancy is in the right place and healthy, to set baseline levels for your own health, and to build the plan that will carry you safely to delivery.",
          "Come knowing the date of your last period, details of previous pregnancies, any regular medicines or supplements, and the family's medical history. If you have earlier scan reports or blood reports, bring those too.",
        ],
      },
      {
        heading: "What happens at the first visit",
        list: {
          items: [
            "A detailed discussion of your health, menstrual cycles, past pregnancies and any medical problems",
            "Physical examination, including weight and blood pressure; these become the baseline for all later visits",
            "Confirmation that the pregnancy is in the right place and viable, usually by ultrasound",
            "Baseline blood tests: blood group, haemoglobin, thyroid, sugar, HIV/hepatitis screening and more",
            "A prescription for folic acid (and other supplements if needed)",
            "Time for your questions: write them down and ask them one by one",
          ],
        },
      },
      {
        heading: "The scans and visits ahead",
        paragraphs: [
          "Standard antenatal care is well organised: a dating scan in the first trimester, the important anomaly scan around 18–22 weeks, and a growth scan in the third trimester. In between, visits start once a month, move to once a fortnight as the due date approaches, and then once a week. Every visit reviews blood pressure, weight, the baby's growth and your questions.",
          "Do not worry about the schedule; that is what your care team is for. Our pregnancy programme gives every mother a written calendar of visits, a diet guide and a direct point of contact for worries between appointments.",
        ],
      },
      {
        heading: "Ask anything, but start with these",
        list: {
          items: [
            "Which medicines and supplements should I take, and which should I stop?",
            "Which foods should I avoid during pregnancy?",
            "How much weight gain is healthy for me?",
            "Which symptoms mean I should call the hospital right away?",
            "What are my options and plan for delivery?",
          ],
        },
      },
      {
        heading: "Warning signs: call without waiting",
        list: {
          items: [
            "Bleeding or fluid leaking from the vagina",
            "Severe abdominal pain",
            "Blurred vision, or a severe headache with facial and hand swelling",
            "Persistent vomiting that stops you keeping fluids down",
            "A clear drop in the baby's movements compared with normal (after movements are established)",
          ],
        },
      },
    ],
    disclaimer:
      "This article is for general health awareness only and is not a substitute for personal medical advice. Follow your obstetrician's guidance for your individual pregnancy.",
  },
  {
    slug: "child-nutrition-myths",
    title: "Child nutrition myths every parent should stop believing",
    category: "Child Health",
    excerpt:
      "Ghee for the brain, milk at every meal, one last mouthful chased around the room: children's food advice is full of generational myths. I separate tradition from evidence.",
    coverImage: "/images/child.jpg",
    authorSlug: "dr-kavitha-reddy",
    authorName: "Dr. Kavitha Reddy",
    publishedAt: "2026-08-25",
    readMinutes: 6,
    sections: [
      {
        paragraphs: [
          "No topic is argued over in families as much as what children should eat. Much of the advice passed down the generations is right: home-cooked food, fresh ingredients and regular meal times. But a few stubborn myths cause real problems: force-feeding, unbalanced diets and unnecessary supplements. These are the myths I correct most often in the clinic.",
        ],
      },
      {
        heading: "Myth 1: 'A chubby child is a healthy child'",
        paragraphs: [
          "Round cheeks are endearing, but childhood obesity is one of the fastest-growing health problems in urban India, leading to diabetes and fatty liver in the twenties. Growth should be tracked on standard growth charts: steady progress along the child's own curve matters far more than comparison with the neighbour's child. If a child's weight keeps crossing percentiles, that calls for a conversation, not a celebration.",
        ],
      },
      {
        heading: "Myth 2: 'One more mouthful, the child has eaten nothing'",
        paragraphs: [
          "One skipped meal looks small to anxious adults, but children are remarkably skilled at regulating their food intake across the whole day. Force-feeding teaches children to ignore their own hunger cues and turns mealtimes into battlefields. What, when and where to eat is the parents' decision; how much is the child's. A child who is growing well, active and playful is almost never 'eating too little'.",
        ],
      },
      {
        heading: "Myth 3: 'Milk is the main food even for school-age children'",
        paragraphs: [
          "Milk is a good food, but not a complete one. Drinking more than about 400–500 ml a day works against good nutrition: iron-rich foods get pushed aside and constipation sets in. A school-age child's balanced plate should include dals, vegetables, whole grains, fruit and eggs or other protein; milk should be one part of the day, not the whole day.",
        ],
      },
      {
        heading: "Myth 4: 'Packaged health drinks make children taller'",
        paragraphs: [
          "Most commercial 'growth' drinks are mostly sugar, with vitamins added that a balanced diet already provides. No powder makes a child taller; genes and overall nutrition do that. That money is far better spent on eggs, fruit, dals, nuts and vegetables. If you are worried about growth, bring the child in: we measure accurately against standards and test only if the numbers genuinely point that way.",
        ],
      },
      {
        heading: "What actually works",
        list: {
          items: [
            "Regular meal times where the whole family eats the same balanced food",
            "A serving of vegetables and fruit at lunch and dinner",
            "Protein at every meal: dals, egg, curd, paneer, fish or chicken",
            "Soft fruit or home-made snacks between meals; packaged sweets limited to one a week",
            "Deworming and micronutrients as advised by your paediatrician",
            "An annual growth review with the paediatrician",
          ],
        },
      },
    ],
    disclaimer:
      "This article is for general health awareness only and is not a substitute for personal medical advice. Consult a paediatrician if you are worried about your child's growth or eating.",
  },
  {
    slug: "active-ageing-fitness-guide-seniors",
    title: "Active ageing: a practical fitness guide for senior citizens",
    category: "Healthy Ageing",
    excerpt:
      "After 60, the fitness goal shifts from performance to independence: walking to the market, boarding a bus, living without the fear of falling. Here is a safe, realistic way to stay strong.",
    coverImage: "/images/seniors.jpg",
    authorSlug: "dr-sanjay-gupta",
    authorName: "Dr. Sanjay Gupta",
    publishedAt: "2026-06-05",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "After sixty, the most important fitness question is not 'how fast can I walk?' but 'can I live independently and safely?'. Muscle strength, balance and stamina are what keep you shopping, cooking, travelling and playing with your grandchildren; and all three can be trained and improved at any age. Every decade spent active pays you back in independence.",
        ],
      },
      {
        heading: "The weekly formula after 60",
        list: {
          items: [
            "150 minutes a week of gentle aerobic activity: brisk walking, cycling or swimming; split into 10-minute chunks if needed",
            "Strength exercises twice a week: chair sit-to-stand, wall push-ups and light resistance bands",
            "Balance practice every day: standing on one leg near a support, walking heel to toe",
            "Flexibility: five minutes of gentle stretching after walks, when the muscles are warm",
          ],
        },
      },
      {
        heading: "Start safely, continue safely",
        list: {
          items: [
            "Get a medical review first if you have heart disease, uncontrolled blood pressure or joint problems, or have been inactive for years",
            "Start with half your target and increase gradually over six to eight weeks",
            "The talk test: you should be able to talk while exercising (no need to sing); that is the right intensity",
            "If chest pain, severe breathlessness, dizziness or joint pain appears, stop and rest",
            "Wear proper shoes and walk in daylight or well-lit areas; falling is the greatest enemy of independence",
            "Have eyes, hearing, blood pressure, sugar and bone health reviewed every year",
          ],
        },
      },
      {
        heading: "Falls can be prevented: take this seriously",
        paragraphs: [
          "One in three older adults falls each year, and the fractures that follow change lives. Along with balance exercises, make the home fall-proof: remove loose wires and wet floors, fit grab bars and non-slip mats in the bathroom, keep night lights within reach, and get cataracts treated. If you do fall, tell your doctor: we assess walking stability, bone density and medicines (some blood pressure and sleep medicines raise the risk of falls) and build a prevention plan.",
        ],
      },
      {
        paragraphs: [
          "Age is not a diagnosis. The patients who bring us the most joy in our senior citizen clinics are not the youngest but the most disciplined: that grandmother who walks every evening and does her chair exercises often outperforms patients twenty years younger. Start where you are, with what you have. For a structured, safe start, book our Senior Health Check and we will build the programme together.",
        ],
      },
    ],
    disclaimer:
      "This article is for general health awareness only and is not a substitute for personal medical advice. Consult a doctor before starting a new exercise programme.",
  },
];

export const allBlogPosts = [...blogPostsA, ...blogPostsB].sort(
  (a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)
);
