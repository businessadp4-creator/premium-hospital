export * from "./types";
export * from "./departments-a";
export * from "./departments-b";
export * from "./doctors";
export * from "./services-facilities";
export * from "./blog-a";
export * from "./blog-b";
export * from "./patient-info";

import { departmentsA } from "./departments-a";
import { departmentsB } from "./departments-b";
import type { Department, FAQ } from "./types";

export const departments: Department[] = [...departmentsA, ...departmentsB];

export function getDepartment(slug: string) {
  return departments.find((d) => d.slug === slug);
}

/** Department-level FAQs (used on speciality detail pages + FAQ schema). */
export function getDepartmentFaqs(dept: Department): FAQ[] {
  return [
    {
      question: `${dept.name} నిపుణుడిని ఎప్పుడు కలవాలి?`,
      answer: `${dept.name} సంబంధిత లక్షణాలు కొత్తగా మొదలైనా, పెరిగిపోతున్నా లేదా మీ రోజువారీ జీవితాన్ని ప్రభావితం చేస్తున్నా — ఒకసారి కన్సల్టేషన్ చేయించుకోవడం మంచిది. గత రిపోర్ట్లు మరియు ప్రస్తుతం వాడుతున్న మందుల జాబితా తీసుకురండి. ${dept.highlights[0]}.`,
    },
    {
      question: "అపాయింట్‌మెంట్ తీసుకోవాలా, లేదా డైరెక్ట్‌గా వచ్చినా చూస్తారా?",
      answer:
        "రెండూ అందుబాటులో ఉంటాయి. డైరెక్ట్‌గా వచ్చిన వారిని బుక్ చేసిన స్లాట్లతో పాటు క్రమంలో చూస్తాము — కాబట్టి ముందుగా బుక్ చేసుకుంటే వేచి ఉండే సమయం సాధారణంగా తక్కువ. ఈ వెబ్‌సైట్‌లో, ఫోన్ ద్వారా లేదా వాట్సాప్‌లో అపాయింట్‌మెంట్ అభ్యర్థించవచ్చు.",
    },
    {
      question: "ఈ శాఖలో మొదటి కన్సల్టేషన్‌కు ఏం తీసుకురావాలి?",
      answer:
        "ఫోటో ఐడీ, గత ప్రిస్క్రిప్షన్లు మరియు రిపోర్ట్లు (స్కాన్ ఫిల్మ్‌లు లేదా సీడీలు ఉంటే వాటితో సహా), మరియు ప్రస్తుతం వాడుతున్న మందుల జాబితా — డోసులతో సహా — తీసుకురండి.",
    },
  ];
}
