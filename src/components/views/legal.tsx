"use client";

import { siteConfig } from "@/lib/site-config";
import { usePageMeta } from "@/lib/router";
import { useLang } from "@/lib/i18n";
import { PageHero, Container } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CtaBand } from "@/components/site/cta-band";

/* Shared legal page shell */
function LegalShell({
  title,
  description,
  updated,
  breadcrumbsLabel,
  children,
}: {
  title: string;
  description: string;
  updated: string;
  breadcrumbsLabel: string;
  children: React.ReactNode;
}) {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("చట్టపరమైనవి", "Legal")}
        title={title}
        description={description}
        breadcrumbs={[{ label: t("హోమ్", "Home"), href: "/" }, { label: breadcrumbsLabel }]}
      />
      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="mb-8 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {t("చివరిగా నవీకరించినది: ", "Last updated: ")}{updated}
            </p>
            <div className="space-y-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:mt-3 [&_p]:text-[15px] [&_p]:leading-[1.85] [&_p]:text-foreground/80 [&_li]:mt-2 [&_li]:text-[15px] [&_li]:leading-[1.8] [&_li]:text-foreground/80 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
              {children}
            </div>
          </Reveal>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════════════ PRIVACY POLICY ═════════════════ */
export function PrivacyView() {
  const { t } = useLang();
  usePageMeta({
    title: t("గోప్యతా విధానం", "Privacy Policy"),
    description: t(
      `${siteConfig.name} ఈ వెబ్‌సైట్ ద్వారా మీరు అందించే వ్యక్తిగత మరియు ఆరోగ్య సమాచారాన్ని ఎలా సేకరిస్తుంది, వాడుతుంది, రక్షిస్తుందో వివరిస్తుంది.`,
      `How ${siteConfig.name} collects, uses and protects the personal and health information you provide through this website.`
    ),
  });

  return (
    <LegalShell
      title={t("గోప్యతా విధానం", "Privacy Policy")}
      description={t(
        "మీ గోప్యత మాకు ముఖ్యం. ఈ విధానం — సరళ భాషలో — ఈ వెబ్‌సైట్ ఏ సమాచారం సేకరిస్తుందో, ఎందుకు, ఎలా రక్షిస్తుందో వివరిస్తుంది.",
        "Your privacy matters to us. This policy — in plain language — explains what information this website collects, why, and how it is protected."
      )}
      updated={t("సెప్టెంబర్ 2026", "September 2026")}
      breadcrumbsLabel={t("గోప్యతా విధానం", "Privacy Policy")}
    >
      <div>
        <h2>{t("1. మేము సేకరించే సమాచారం", "1. Information we collect")}</h2>
        <p>
          {t(
            "ఈ వెబ్‌సైట్‌లోని అపాయింట్‌మెంట్ రిక్వెస్ట్ లేదా కాంటాక్ట్ ఫారమ్‌లను వాడినప్పుడు, మీరు ఇచ్చే వివరాలను మేము సేకరిస్తాము: మీ పేరు, ఫోన్ నంబర్, ఇమెయిల్ (ఐచ్ఛికం), ఇష్టపడిన శాఖ/వైద్యుడు, ఇష్టపడిన తేదీ మరియు సమయం, మరియు మీరు చేర్చాలనుకున్న ఏ సందేశం అయినా. ఈ వెబ్‌సైట్ ద్వారా మేము చెల్లింపు సమాచారం సేకరించము.",
            "When you use the appointment request or contact forms on this website, we collect the details you provide: your name, phone number, email address (optional), preferred department/doctor, preferred date and time, and any message you add. We do not collect payment information through this website."
          )}
        </p>
        <p>
          {t(
            "చాలా వెబ్‌సైట్‌ల మాదిరిగానే, సైట్ భద్రత కోసం మరియు పనితీరు మెరుగుదల కోసం మాత్రమే — బ్రౌజర్ రకం, పరికర రకం మరియు సందర్శించిన పేజీల వంటి ప్రామాణిక సాంకేతిక సమాచారాన్ని మా సర్వర్లు నమోదు చేయవచ్చు.",
            "Like most websites, our servers may log standard technical information — such as browser type, device type and pages visited — only for site security and performance improvement."
          )}
        </p>
      </div>
      <div>
        <h2>{t("2. మీ సమాచారాన్ని మేము ఎలా వాడతాము", "2. How we use your information")}</h2>
        <ul>
          <li>{t("మిమ్మల్ని సంప్రదించి, మీ అపాయింట్‌మెంట్ రిక్వెస్ట్‌ను ఫోన్ ద్వారా కన్ఫర్మ్ చేయడానికి", "To contact you and confirm your appointment request over the phone")}</li>
          <li>{t("కాంటాక్ట్ ఫారం ద్వారా పంపిన మీ ప్రశ్నలకు స్పందించడానికి", "To respond to the enquiries you send through the contact form")}</li>
          <li>{t("సంబంధిత శాఖ లేదా వైద్యుడితో మీ సంరక్షణను కోఆర్డినేట్ చేయడానికి", "To coordinate your care with the relevant department or doctor")}</li>
          <li>{t("అమలులో ఉన్న భారతీయ చట్టాల ప్రకారం అవసరమైన ఆసుపత్రి రికార్డులను నిర్వహించడానికి", "To keep the hospital records required under applicable Indian law")}</li>
        </ul>
        <p>
          {t(
            "మార్కెటింగ్ కోసం మీ వ్యక్తిగత సమాచారాన్ని ఏ మూడో పక్షానికీ అమ్మము, అద్దెకు ఇవ్వము లేదా ట్రేడ్ చేయము.",
            "We never sell, rent or trade your personal information to any third party for marketing purposes."
          )}
        </p>
      </div>
      <div>
        <h2>{t("3. ఆరోగ్య సమాచార సున్నిహతత", "3. Health information is sensitive")}</h2>
        <p>
          {t(
            "ఆరోగ్య-సంబంధిత సమాచారాన్ని సున్నిహతమైన వ్యక్తిగత డేటాగా పరిగణిస్తాము. ఆసుపత్రిలో దీనికి ప్రవేశం — మీ సంరక్షణ లేదా అపాయింట్‌మెంట్ సమన్వయంలో పాల్గొనే సిబ్బందికి మాత్రమే పరిమితం; అందరు సిబ్బంది గోప్యతా బాధ్యతలతో బద్ధులు. వాస్తవ చికిత్సలో రూపొందిన క్లినికల్ రికార్డులు ఆసుపత్రి వైద్య రికార్డుల విధానం మరియు అమలులో ఉన్న నిబంధనల ప్రకారం నిర్వహించబడతాయి.",
            "We treat health-related information as sensitive personal data. Within the hospital, access is limited to the staff involved in your care or appointment coordination; all staff are bound by confidentiality duties. Clinical records created during actual treatment are maintained under the hospital's medical records policy and applicable regulations."
          )}
        </p>
      </div>
      <div>
        <h2>{t("4. డేటా భద్రత", "4. Data security")}</h2>
        <p>
          {t(
            "ఫారం సబ్మిట్‌లు గూఢీకృత కనెక్షన్ల (HTTPS) ద్వారా వెళ్తాయి మరియు ప్రవేశ-నియంత్రిత ఆసుపత్రి వ్యవస్థల్లో నిల్వ ఉంటాయి. డేటా సున్నిహతతకు తగినట్లుగా సహేతుకమైన సాంకేతిక మరియు సంస్థాగత భద్రతా చర్యలు పాటిస్తాము. ఇంటర్నెట్ ద్వారా సమాచార ప్రసారం ఏ పద్ధతీ పూర్తిగా సురక్షితం కాదు; ఫోన్ కాల్‌తో పని జరిగినప్పుడు — అత్యంత సున్నిహతమైన క్లినికల్ వివరాలను ఫ్రీ-టెక్స్ట్ మెసేజ్ ఫీల్డ్‌లలో రాయకుండా ఉండమని వినయపూర్వకంగా కోరుతాము.",
            "Form submissions travel over encrypted connections (HTTPS) and are stored in access-controlled hospital systems. We follow reasonable technical and organisational safeguards appropriate to the sensitivity of the data. No method of transmission over the internet is completely secure; where a phone call can do the job, we politely ask you to avoid writing highly sensitive clinical details in free-text message fields."
          )}
        </p>
      </div>
      <div>
        <h2>{t("5. కుకీలు & విశ్లేషణలు", "5. Cookies & analytics")}</h2>
        <p>
          {t(
            "ఈ వెబ్‌సైట్ పనిచేయడానికి కావాల్సిన సాంకేతిక నిల్వను మాత్రమే వాడుతుంది. భవిష్యత్తులో అనాలిటిక్స్ టూల్స్ (గూగుల్ అనాలిటిక్స్ వంటివి) మొదలుపెడితే, ఆ విషయం ఈ విధానంలో చేర్చుతాము; అవసరమైన చోట అంగీకార నోటీసు చూపిస్తాము.",
            "This website uses only the technical storage it needs to function. If analytics tools (such as Google Analytics) are enabled in future, we will update this policy to describe them and show a consent notice where required."
          )}
        </p>
      </div>
      <div>
        <h2>{t("6. మీ ఎంపికలు", "6. Your choices")}</h2>
        <p>
          {t(
            "వెబ్‌సైట్ సబ్మిట్‌ల నుంచి మేము నిల్వ చేసిన మీ సంప్రదింపు సమాచారం ఏమిటో అడగవచ్చు, సరిదిద్దమని కోరవచ్చు, లేదా మిమ్మల్ని సంప్రదించడం ఆపమని కోరవచ్చు — ",
            "You can ask what contact information we have stored from website submissions, ask us to correct it, or ask us to stop contacting you — write to "
          )}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline-offset-4 hover:underline">
            {siteConfig.email}
          </a>{" "}
          {t(
            "కు రాయడం ద్వారా. వైద్య రికార్డుల రిక్వెస్ట్‌లు విధానం ప్రకారం ఆసుపత్రి మెడికల్ రికార్డ్స్ డెస్క్ ద్వారా జరుగుతాయి.",
            ". Medical record requests are handled through the hospital's medical records desk, as per policy."
          )}
        </p>
      </div>
      <div>
        <h2>{t("7. విధాన నవీకరణలు", "7. Policy updates")}</h2>
        <p>
          {t(
            "ఈ విధానాన్ని అప్పుడప్పుడు అప్‌డేట్ చేయవచ్చు. పైన ఉన్న \"చివరిగా నవీకరించినది\" తేదీ ఇప్పటి రూపాన్ని చూపిస్తుంది. మార్పుల తర్వాత కూడా వెబ్‌సైట్ వాడుతూ ఉండటం — అప్‌డేట్ చేసిన విధానాన్ని అంగీకరించడమే.",
            "We may update this policy from time to time. The \"Last updated\" date above shows the current version. Continuing to use the website after changes means you accept the updated policy."
          )}
        </p>
        <p className="text-xs italic text-muted-foreground">
          {t(
            "[PLACEHOLDER — ప్రారంభానికి ముందు ఈ విధానాన్ని డిజిటల్ పర్సనల్ డేటా ప్రొటెక్షన్ యాక్ట్, 2023 మరియు అమలులో ఉన్న క్లినికల్ ఎస్టాబ్లిష్‌మెంట్ నిబంధనల దృష్టితో సమీక్షించించండి.]",
            "[PLACEHOLDER — have this policy reviewed against the Digital Personal Data Protection Act, 2023 and applicable clinical establishment regulations before launch.]"
          )}
        </p>
      </div>
    </LegalShell>
  );
}

/* ═════════════════ TERMS & CONDITIONS ═════════════════ */
export function TermsView() {
  const { t } = useLang();
  usePageMeta({
    title: t("నిబంధనలు & షరతులు", "Terms & Conditions"),
    description: t(
      `${siteConfig.name} వెబ్‌సైట్ వాడకాన్ని నియంత్రించే నిబంధనలు — అపాయింట్‌మెంట్ రిక్వెస్ట్‌లు, కంటెంట్ యాజమాన్యం మరియు బాధ్యత పరిమితులు సహా.`,
      `The terms governing use of the ${siteConfig.name} website — including appointment requests, content ownership and limitations of liability.`
    ),
  });

  return (
    <LegalShell
      title={t("నిబంధనలు & షరతులు", "Terms & Conditions")}
      description={t(
        "ఈ నిబంధనలు ఈ వెబ్‌సైట్ వాడకాన్ని నియంత్రిస్తాయి. దయచేసి వీటిని చదవండి — ఈ వెబ్‌సైట్ ఏమిటో, ఏమి కాదో వీటిలో వివరించాము.",
        "These terms govern the use of this website. Please read them — they explain what this website is and what it is not."
      )}
      updated={t("సెప్టెంబర్ 2026", "September 2026")}
      breadcrumbsLabel={t("నిబంధనలు & షరతులు", "Terms & Conditions")}
    >
      <div>
        <h2>{t("1. ఈ వెబ్‌సైట్ గురించి", "1. About this website")}</h2>
        <p>
          {t("ఈ వెబ్‌సైట్ ", "This website is operated by ")}
          {siteConfig.name}{" "}
          {t(
            "(\"ఆసుపత్రి\", \"మేము\") నిర్వహణలో ఉంటుంది. దీని ఉద్దేశం — మా శాఖలు, వైద్యులు మరియు సేవల గురించి సమాచారం ఇవ్వడం, మరియు అపాయింట్‌మెంట్లు రిక్వెస్ట్ చేయడానికి లేదా ప్రశ్నలు పంపడానికి వీలు కల్పించడం.",
            "(\"the hospital\", \"we\"). Its purpose is to share information about our departments, doctors and services, and to let you request appointments or send enquiries."
          )}
        </p>
      </div>
      <div>
        <h2>{t("2. అపాయింట్‌మెంట్ రిక్వెస్ట్‌లు", "2. Appointment requests")}</h2>
        <p>
          {t("అపాయింట్‌మెంట్ ఫారం సబ్మిట్ చేయడం ", "Submitting the appointment form creates a ")}
          <strong>{t("రిక్వెస్ట్", "request")}</strong>
          {t(
            "ను సృష్టిస్తుంది — కన్ఫర్మ్ చేసిన బుకింగ్ కాదు. మా సిబ్బంది మీతో ఫోన్ ద్వారా లేదా వ్యక్తిగతంగా తేదీ మరియు సమయం కన్ఫర్మ్ చేసిన తర్వాతే అపాయింట్‌మెంట్ ఉంటుంది. రిక్వెస్ట్ చేసిన స్లాట్లు కన్సల్టెంట్ అందుబాటు మరియు OPD షెడ్యూల్లకు లోబడి ఉంటాయి — ముందస్తు నోటీస్ లేకుండా మారవచ్చు.",
            " — not a confirmed booking. An appointment exists only after our staff confirm the date and time with you by phone or in person. Requested slots are subject to consultant availability and OPD schedules — they may change without prior notice."
          )}
        </p>
      </div>
      <div>
        <h2>3. వెబ్‌సైట్ ద్వారా వైద్యుడు-రోగి సంబంధం ఏర్పడదు</h2>
        <p>
          ఈ వెబ్‌సైట్‌లోని కంటెంట్ — ఆరోగ్య గ్రంథాలయ కథనాలతో సహా — అవగాహన కోసమే ఉండే సాధారణ సమాచారం.
          అది వైద్య సలహా కాదు మరియు వైద్యుడు-రోగి సంబంధాన్ని ఏర్పరచదు. ఏదైనా సాధారణ సమాచారం ఆధారంగా
          చర్య తీసుకునే ముందు — మీ నిర్దిష్ట పరిస్థితి గురించి ఎప్పుడూ అర్హత కలిగిన వైద్యుడిని
          సంప్రదించండి.
        </p>
      </div>
      <div>
        <h2>4. అంగీకార వినియోగం</h2>
        <ul>
          <li>సత్యం కాని, తప్పుడు లేదా మూడో వ్యక్తి వ్యక్తిగత సమాచారాన్ని అంగీకారం లేకుండా సమర్పించకండి</li>
          <li>ఫారమ్‌లను స్పామ్, విచ్ఛిన్నం లేదా చట్టవిరుద్ధ ప్రయోజనాల కోసం వాడకండి</li>
          <li>వెబ్‌సైట్ పనితీరు లేదా భద్రతకు అంతరాయం కలిగించడానికి ప్రయత్నించకండి</li>
          <li>వైద్య అత్యవసర పరిస్థితిలో మా అత్యవసర లైన్‌కు కాల్ చేయండి — వెబ్‌సైట్ ఫారమ్‌లపై ఆధారపడకండి</li>
        </ul>
      </div>
      <div>
        <h2>5. మేధో సంపత్తి</h2>
        <p>
          ఆసుపత్రి పేరు, లోగో, వెబ్‌సైట్ రూపకల్పన మరియు రాతపూర్వక కంటెంట్ — ఆసుపత్రి స్వత్తు; రాతపూర్వక
          అనుమతి లేకుండా పునరుత్పత్తి చేయరాదు. ఆరోగ్య గ్రంథాలయ కథనాలను ఆపాదింపుతో — వ్యక్తిగత,
          వాణిజ్యేతర అవగాహన ప్రయోజనాల కోసం పంచవచ్చు.
        </p>
      </div>
      <div>
        <h2>6. బాధ్యత పరిమితి</h2>
        <p>
          వెబ్‌సైట్‌ను ఖచ్చితంగా, తాజాగా ఉంచేలా చూసుకుంటాము; అయినా పూర్తితనం లేదా అందుబాటుపై వారంటీలు
          ఇవ్వము మరియు — వెబ్‌సైట్ కంటెంట్ మాత్రమే ఆధారంగా చేసుకున్న నిర్ణయాలకు లేదా ఆన్‌లైన్ సేవల
          తాత్కాలిక అందుబాటు లేకపోవడానికి — బాధ్యత వహించము.
        </p>
      </div>
      <div>
        <h2>7. పాలక చట్టం</h2>
        <p>
          ఈ నిబంధనలు భారత చట్టాలకు లోబడి ఉంటాయి; వెబ్‌సైట్ వినియోగం నుంచి పుట్టే వివాదాలకు{" "}
          {siteConfig.address.city}, కర్ణాటక కోర్టుల అధికార పరిధి వర్తిస్తుంది.
        </p>
      </div>
    </LegalShell>
  );
}

/* ═════════════════ MEDICAL DISCLAIMER ═════════════════ */
export function DisclaimerView() {
  usePageMeta({
    title: "వైద్య నిరాకరణ",
    description: `${siteConfig.name} వెబ్‌సైట్ కోసం ముఖ్యమైన వైద్య నిరాకరణ — వెబ్‌సైట్ కంటెంట్ సాధారణ అవగాహన సమాచారం మాత్రమే; వైద్య సలహా కాదు.`,
  });

  return (
    <LegalShell
      title="వైద్య నిరాకరణ"
      description="ఈ వెబ్‌సైట్‌లోని సమాచారం మీ ఆరోగ్యాన్ని అర్థం చేసుకోవడంలో సహాయపడుతుంది — కానీ మిమ్మల్ని పరిశీలించిన వైద్యుడి స్థానాన్ని ఎప్పటికీ తీసుకోదు."
      updated="సెప్టెంబర్ 2026"
      breadcrumbsLabel="వైద్య నిరాకరణ"
    >
      <div>
        <h2>సాధారణ సమాచారం మాత్రమే</h2>
        <p>
          ఈ వెబ్‌సైట్‌లోని అన్ని కంటెంట్ — ఆరోగ్య గ్రంథాలయ కథనాలు, శాఖల వివరణలు మరియు సాధారణ ప్రశ్నల
          సమాధానాలతో సహా — సాధారణ అవగాహన మరియు విద్య కోసం ప్రచురించబడింది. అది వైద్య సలహా, రోగనిర్ధారణ
          లేదా చికిత్సా ప్రణాళిక కాదు; అర్హత కలిగిన వైద్యుడితో వృత్తిపరమైన కన్సల్టేషన్‌కు ప్రత్యామ్నాయంగా
          వాడరాదు.
        </p>
      </div>
      <div>
        <h2>ఆలస్యం చేయకండి; స్వయం-చికిత్స చేయకండి</h2>
        <p>
          ఈ వెబ్‌సైట్‌లో చదివిన దాని కారణంగా — వృత్తిపరమైన వైద్య సలహాను ఎప్పటికీ విస్మరించకండి లేదా
          ఆలస్యం చేయకండి. ఒకే జబ్బు లక్షణాలు వ్యక్తుల మధ్య బాగా భిన్నంగా ఉండవచ్చు; మీ కేసులో నిజంగా
          ఏం జరుగుతోందో — వ్యక్తిగత పరీక్ష మరియు తగిన పరీక్షలే నిర్ధారించగలవు. సాధారణ కథనాల ఆధారంగా
          స్వయం-చికిత్స ప్రమాదకరం.
        </p>
      </div>
      <div>
        <h2>అత్యవసర పరిస్థితులు</h2>
        <p>
          మీకు వైద్య అత్యవసర పరిస్థితి ఉంటే — ఛాతీ నొప్పి, స్ట్రోక్ లక్షణాలు (ముఖం వంగిపోవడం, చేతి
          బలహీనత, మాట స్పష్టంగా రాకపోవడం), తీవ్ర రక్తస్రావం, ఊపిరి ఆడకపోవడం, స్పృహ లేకపోవడం లేదా
          పిచ్చెట్లు — చదవడం ఆపి, మా అత్యవసర లైన్{" "}
          <a href={`tel:${siteConfig.emergency.tel}`} className="font-semibold text-destructive">
            {siteConfig.emergency.display}
          </a>{" "}
          లేదా సమీప అత్యవసర సేవలను వెంటనే సంప్రదించండి.
        </p>
      </div>
      <div>
        <h2>ఫలితాల హామీ లేదు</h2>
        <p>
          వైద్యం ఒక అభ్యాసం — వాగ్దానం కాదు. ఈ వెబ్‌సైట్‌లోని చికిత్సలు మరియు సేవల వివరణలు ఏ
          నిర్దిష్ట ఫలితానికీ హామీ ఇవ్వవు. ప్రతి చికిత్సకు ప్రయోజనాలు మరియు ప్రమాదాలు ఉంటాయి — ఏ విధానానికైనా
          ముందు మీ వైద్యుడు వ్యక్తిగతంగా మీతో చర్చిస్తారు.
        </p>
      </div>
      <div>
        <h2>బాహ్య లింకులు</h2>
        <p>
          ఈ వెబ్‌సైట్ బాహ్య సైట్‌లకు (మ్యాప్స్ లేదా ఆరోగ్య వనరుల వంటివి) లింక్ చేసినప్పుడు — అది
          సౌలభ్యం కోసం మాత్రమే; వాటి కంటెంట్ లేదా ఖచ్చితత్వానికి మేము బాధ్యత వహించము.
        </p>
      </div>
    </LegalShell>
  );
}
