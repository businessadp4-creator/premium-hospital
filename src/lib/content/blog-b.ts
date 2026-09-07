import type { BlogPost } from "./types";
import { blogPostsA } from "./blog-a";

export const blogPostsB: BlogPost[] = [
  {
    slug: "protecting-knees-as-you-age",
    title: "Protecting Your Knees as You Age: An Orthopaedic Surgeon's Guide",
    category: "Bone & Joint Health",
    excerpt:
      "Knee pain is common after 50 — but it is not something to simply accept. From stair technique to squatting habits, weight and footwear, here is how to keep your knees moving for decades.",
    coverImage: "/images/bones.jpg",
    authorSlug: "dr-ramesh-iyer",
    authorName: "Dr. Ramesh Iyer",
    publishedAt: "2026-08-05",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "The knee is the hardest-working joint in the body — every step loads it with several times your body weight, and a lifetime of stairs, squats and traffic jams adds up. By the age of sixty, most people have some degree of knee wear-and-tear visible on an X-ray. Yet plenty of them walk pain-free. The difference between painful and pain-free knees usually lies in habits, not luck.",
          "Arthritis pain is not a signal to stop moving. In fact, carefully chosen movement is the single best-proven treatment for early knee arthritis — stronger thigh muscles act as natural shock absorbers and take load off the joint.",
        ],
      },
      {
        heading: "Everyday habits your knees will thank you for",
        list: {
          items: [
            "Manage your weight — every extra kilo adds roughly four kilos of load on the knees with each step",
            "Switch repeated deep squats and full cross-legged sitting for chair sitting with feet flat, or use a high firm cushion",
            "Take the stairs down slowly or use the rail — descending loads the knee more than climbing",
            "Choose cushioned, well-fitting footwear; replace worn-out walking shoes every 500–700 km",
            "Warm up for five minutes before exercise and walking; cold muscles strain joints",
            "Build thigh strength — straight-leg raises, wall-supported partial squats and gentle cycling are knee-friendly",
            "Swim or cycle rather than run if your knees already ache — same fitness, a fraction of the impact",
          ],
        },
      },
      {
        heading: "When knee pain needs a doctor, not just home care",
        list: {
          items: [
            "Pain that wakes you at night or disturbs sleep",
            "Swelling, warmth or redness around the joint",
            "The knee locking, catching or giving way",
            "Pain persisting beyond two to three weeks despite rest",
            "Difficulty performing your daily activities — stairs, squatting to the toilet, market walks",
          ],
        },
      },
      {
        paragraphs: [
          "At the hospital we assess knees with clinical examination and digital X-ray, then build a staged plan: physiotherapy and muscle strengthening first, medication for flare-ups when needed, injections for selected patients, and surgical options — including joint replacement — reserved for when conservative care is genuinely exhausted.",
          "Most patients who reach us with 'bone-on-bone' fears leave with a structured exercise plan and considerably less pain. The earlier you come, the more we can do without surgery.",
        ],
      },
    ],
    disclaimer:
      "This article is for general health awareness and does not replace personal medical advice. Consult an orthopaedic specialist for persistent joint pain.",
  },
  {
    slug: "first-prenatal-visit-guide",
    title: "Your First Prenatal Visit: What to Expect and How to Prepare",
    category: "Mother & Child",
    excerpt:
      "A positive pregnancy test brings joy — and a dozen questions. Here is exactly what happens at the first antenatal appointment, which scans to expect, and what to ask your doctor.",
    coverImage: "/images/momcare.jpg",
    authorSlug: "dr-priya-nair",
    authorName: "Dr. Priya Nair",
    publishedAt: "2026-09-01",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Congratulations — and welcome to one of the most closely supported journeys in medicine. The first antenatal visit usually happens between weeks 6 and 10 of pregnancy, and its purpose is simple: confirm the pregnancy's location and health, establish a baseline of your own health, and build the plan that will carry you safely to delivery.",
          "Come prepared with the date of your last menstrual period, details of previous pregnancies, any regular medicines or supplements, and your family's medical history. If you have prior scan reports or blood reports, bring those too.",
        ],
      },
      {
        heading: "What happens at the first visit",
        list: {
          items: [
            "A detailed conversation about your health, cycles, previous pregnancies and any medical conditions",
            "Physical examination including weight and blood pressure — your baseline for all future visits",
            "Confirmation of pregnancy location and viability, usually by ultrasound",
            "Baseline blood tests: blood group, haemoglobin, thyroid, sugars, HIV/hepatitis screening and more",
            "Prescription of folic acid (and other supplements as needed)",
            "Time for your questions — write them down and ask every one",
          ],
        },
      },
      {
        heading: "The scans and visits ahead",
        paragraphs: [
          "Standard antenatal care is well-organised: a dating scan in the first trimester, the important anomaly scan around weeks 18–22, and a growth scan in the third trimester. Between them, monthly visits early on become fortnightly and then weekly near your due date. Each visit tracks your blood pressure, weight, the baby's growth and your questions.",
          "Do not be overwhelmed by the schedule — that is what your care team is for. Our antenatal programme gives every mother a written visit calendar, diet guidance and a direct point of contact for worries between appointments.",
        ],
      },
      {
        heading: "Ask us anything — but start with these",
        list: {
          items: [
            "Which medicines and supplements should I take, and which should I stop?",
            "What foods should I avoid during pregnancy?",
            "How much weight gain is healthy for me?",
            "What symptoms should make me call the hospital immediately?",
            "What are my options and plan for delivery?",
          ],
        },
      },
      {
        heading: "Warning signs — call us without waiting",
        list: {
          items: [
            "Bleeding or fluid leakage from the vagina",
            "Severe abdominal pain",
            "Severe headache with blurred vision or swelling of face and hands",
            "Vomiting so persistent that you cannot keep fluids down",
            "The baby moving noticeably less than usual (once movements are established)",
          ],
        },
      },
    ],
    disclaimer:
      "This article is for general health awareness and does not replace personal medical advice. For your individual pregnancy, follow your obstetrician's guidance.",
  },
  {
    slug: "child-nutrition-myths",
    title: "Child Nutrition Myths Every Parent Should Stop Believing",
    category: "Child Health",
    excerpt:
      "Ghee for brain power, milk at every meal, force-feeding the last bite — paediatric diet advice is full of inherited myths. A paediatrician separates tradition from evidence.",
    coverImage: "/images/child.jpg",
    authorSlug: "dr-kavitha-reddy",
    authorName: "Dr. Kavitha Reddy",
    publishedAt: "2026-08-25",
    readMinutes: 6,
    sections: [
      {
        paragraphs: [
          "Few topics generate more family debate than what a child should eat. Much of the advice handed down across generations is sound — home cooking, fresh food, regular meal times. But several stubborn myths cause real problems: force-feeding, unbalanced diets and unnecessary supplements. Here are the ones I correct most often in clinic.",
        ],
      },
      {
        heading: "Myth 1: 'A fat child is a healthy child'",
        paragraphs: [
          "Chubby cheeks are adorable, but childhood obesity is one of the fastest-growing health problems in urban India, setting children up for diabetes and fatty liver in their twenties. Growth should be tracked on standard growth charts — steady progression along their own curve matters far more than comparing your child with the neighbour's. If weight is jumping across percentiles, that deserves a conversation, not celebration.",
        ],
      },
      {
        heading: "Myth 2: 'Force one more bite — the child has eaten nothing'",
        paragraphs: [
          "Children are remarkably good at self-regulating intake across a day, even when single meals look tiny to anxious adults. Force-feeding teaches children to ignore their own hunger cues and turns meals into battlegrounds. The parent decides what, when and where food is served; the child decides how much. A child who is growing well, active and playful is almost never 'eating too little'.",
        ],
      },
      {
        heading: "Myth 3: 'Milk should be the main food even for school-age children'",
        paragraphs: [
          "Milk is a good food — but it is not a complete one, and more than about 400–500 ml a day actually works against good nutrition by crowding out iron-rich foods and causing constipation. A balanced plate for a school-going child includes dal, vegetables, whole grains, fruit, eggs or other protein, with milk as one part of the day, not the whole of it.",
        ],
      },
      {
        heading: "Myth 4: 'Packaged health drinks make children grow taller'",
        paragraphs: [
          "Most commercial 'growth' drinks are largely sugar with added vitamins that a balanced diet already provides. No powder makes a child taller — genetics and overall nutrition do that. The money is far better spent on eggs, fruits, dal, nuts and vegetables. If you are worried about growth, bring the child in; we measure accurately against standards and investigate only when the numbers genuinely say so.",
        ],
      },
      {
        heading: "What actually works",
        list: {
          items: [
            "Regular family meal times, with everyone eating the same balanced food",
            "At least one serving each of vegetable and fruit at lunch and dinner",
            "Protein at every meal — dal, egg, curd, paneer, fish or chicken",
            "Water as the default drink; sugary drinks as rare exceptions",
            "Deworming and micronutrient supplementation as per your paediatrician's advice",
            "Annual growth review with your paediatrician",
          ],
        },
      },
    ],
    disclaimer:
      "This article is for general health awareness and does not replace personal medical advice. For concerns about your child's growth or eating, consult a paediatrician.",
  },
  {
    slug: "active-ageing-fitness-guide-seniors",
    title: "Active Ageing: A Practical Fitness Guide for Senior Citizens",
    category: "Healthy Ageing",
    excerpt:
      "After 60, the fitness goal shifts from performance to independence — being able to walk to the market, climb the bus step and live without fear of falling. Here is a safe, realistic way to stay strong.",
    coverImage: "/images/seniors.jpg",
    authorSlug: "dr-sanjay-gupta",
    authorName: "Dr. Sanjay Gupta",
    publishedAt: "2026-06-05",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "The most important fitness question after sixty is not 'How fast can I walk?' but 'Can I live independently and safely?' Muscle strength, balance and stamina are what keep you shopping, cooking, travelling and playing with grandchildren — and all three are trainable at any age. Every decade of activity pays you back in independence.",
        ],
      },
      {
        heading: "The weekly formula after 60",
        list: {
          items: [
            "150 minutes a week of gentle aerobic activity — brisk walking, cycling or swimming, broken into 10-minute bouts if needed",
            "Strength work twice a week — sit-to-stand from a chair, wall push-ups, light resistance bands",
            "Balance practice daily — standing on one foot near a support, heel-to-toe walking",
            "Flexibility — five minutes of gentle stretching after walks, when muscles are warm",
          ],
        },
      },
      {
        heading: "Start safe, stay safe",
        list: {
          items: [
            "Get a medical review first if you have heart disease, uncontrolled BP, joint problems or have been inactive for years",
            "Start with half the target and build over six to eight weeks",
            "The talk test: you should be able to talk (but not sing) while exercising — that is the right intensity",
            "Stop and rest for any chest pain, severe breathlessness, dizziness or joint pain",
            "Wear proper footwear and walk in daylight or well-lit areas — falls are the great enemy of independence",
            "Get your vision, hearing, BP, sugars and bone health checked annually",
          ],
        },
      },
      {
        heading: "Falls are preventable — treat them seriously",
        paragraphs: [
          "One in three seniors falls each year, and fractures from falls change lives. Alongside balance exercises, make the home fall-proof: clear loose wires and rugs, ensure bathroom grab bars and non-slip mats, keep night lamps within reach, and get cataracts checked. If you have fallen once, tell your doctor — we assess walking stability, bone density and medications (some BP and sleep medicines increase fall risk) and build a prevention plan.",
        ],
      },
      {
        paragraphs: [
          "Ageing is not a diagnosis. In our senior citizen clinics, the most rewarding patients are not the youngest but the most consistent — the 70-year-old who walks every evening and does her chair exercises, usually outpacing patients twenty years younger. Start where you are, with what you have. If you would like a structured, safe start, book our senior health check and we will build your programme together.",
        ],
      },
    ],
    disclaimer:
      "This article is for general health awareness and does not replace personal medical advice. Consult a physician before beginning any new exercise programme.",
  },
];

export const allBlogPosts = [...blogPostsA, ...blogPostsB].sort(
  (a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)
);

export function getPost(slug: string) {
  return allBlogPosts.find((p) => p.slug === slug);
}

export const blogCategories = Array.from(new Set(allBlogPosts.map((p) => p.category)));
