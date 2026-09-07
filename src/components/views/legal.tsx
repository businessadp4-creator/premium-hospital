"use client";

import { siteConfig } from "@/lib/site-config";
import { usePageMeta } from "@/lib/router";
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
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: breadcrumbsLabel }]}
      />
      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="mb-8 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
              Last updated: {updated}
            </p>
            <div className="space-y-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:mt-3 [&_p]:text-[15px] [&_p]:leading-[1.8] [&_p]:text-foreground/80 [&_li]:mt-2 [&_li]:text-[15px] [&_li]:leading-[1.75] [&_li]:text-foreground/80 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
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
  usePageMeta({
    title: "Privacy Policy",
    description: `How ${siteConfig.name} collects, uses and protects your personal and health information submitted through this website.`,
  });

  return (
    <LegalShell
      title="Privacy Policy"
      description="Your privacy matters to us. This policy explains — in plain language — what information this website collects, why, and how it is protected."
      updated="September 2026"
      breadcrumbsLabel="Privacy Policy"
    >
      <div>
        <h2>1. Information we collect</h2>
        <p>
          When you use the appointment request or contact forms on this website, we collect the
          details you provide: your name, phone number, email address (optional), preferred
          department/doctor, preferred date and time, and any message you choose to include. We do
          not collect payment information through this website.
        </p>
        <p>
          Like most websites, our servers may also record standard technical information such as
          browser type, device type and pages visited, used solely to keep the site secure and
          improve its performance.
        </p>
      </div>
      <div>
        <h2>2. How we use your information</h2>
        <ul>
          <li>To contact you and confirm your appointment request by phone</li>
          <li>To respond to your enquiries sent through the contact form</li>
          <li>To coordinate your care with the relevant department or doctor</li>
          <li>To maintain required hospital records, in line with applicable Indian law</li>
        </ul>
        <p>
          We do not sell, rent or trade your personal information with any third party for
          marketing purposes.
        </p>
      </div>
      <div>
        <h2>3. Health information sensitivity</h2>
        <p>
          Health-related information is treated as sensitive personal data. Access within the
          hospital is restricted to staff involved in your care or appointment coordination, and
          all staff are bound by confidentiality obligations. Clinical records created during
          actual treatment are maintained under the hospital&apos;s medical records policy and
          applicable regulations.
        </p>
      </div>
      <div>
        <h2>4. Data security</h2>
        <p>
          Form submissions are transmitted over encrypted connections (HTTPS) and stored in
          access-controlled hospital systems. We apply reasonable technical and organisational
          safeguards appropriate to the sensitivity of the data. No method of transmission over
          the internet is absolutely secure; please avoid including highly sensitive clinical
          details in free-text message fields when a phone call would serve.
        </p>
      </div>
      <div>
        <h2>5. Cookies & analytics</h2>
        <p>
          This website uses only essential technical storage needed to function. If analytics tools
          (such as Google Analytics) are enabled in future, this policy will be updated to describe
          them, and a consent notice will be shown where required.
        </p>
      </div>
      <div>
        <h2>6. Your choices</h2>
        <p>
          You may ask us what contact information of yours we hold from website submissions, request
          corrections, or ask us to stop contacting you, by writing to{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline-offset-4 hover:underline">
            {siteConfig.email}
          </a>
          . Medical records requests are handled through the hospital&apos;s medical records desk as
          per policy.
        </p>
      </div>
      <div>
        <h2>7. Policy updates</h2>
        <p>
          This policy may be updated from time to time. The &quot;last updated&quot; date above
          shows the current version. Continued use of the website after changes constitutes
          acceptance of the updated policy.
        </p>
        <p className="text-xs italic text-muted-foreground">
          [PLACEHOLDER — have this policy reviewed against the Digital Personal Data Protection Act,
          2023 and applicable clinical establishment requirements before launch.]
        </p>
      </div>
    </LegalShell>
  );
}

/* ═════════════════ TERMS & CONDITIONS ═════════════════ */
export function TermsView() {
  usePageMeta({
    title: "Terms & Conditions",
    description: `Terms governing the use of the ${siteConfig.name} website, including appointment requests, content ownership and limitations of liability.`,
  });

  return (
    <LegalShell
      title="Terms & Conditions"
      description="These terms govern your use of this website. Please read them — they explain what this website is, and what it is not."
      updated="September 2026"
      breadcrumbsLabel="Terms & Conditions"
    >
      <div>
        <h2>1. About this website</h2>
        <p>
          This website is operated by {siteConfig.name} (&quot;the hospital&quot;, &quot;we&quot;).
          Its purpose is to provide information about our departments, doctors and services, and to
          allow you to request appointments or send enquiries.
        </p>
      </div>
      <div>
        <h2>2. Appointment requests</h2>
        <p>
          Submitting the appointment form creates a <strong>request</strong>, not a confirmed
          booking. An appointment exists only after our staff confirm the date and time with you by
          phone or in person. Requested slots are subject to consultant availability and OPD
          schedules, which may change without prior notice.
        </p>
      </div>
      <div>
        <h2>3. No doctor-patient relationship through the website</h2>
        <p>
          Content on this website — including health library articles — is general information for
          awareness only. It does not constitute medical advice and does not create a
          doctor-patient relationship. Always consult a qualified doctor about your specific
          condition before acting on any general information.
        </p>
      </div>
      <div>
        <h2>4. Acceptable use</h2>
        <ul>
          <li>Do not submit false, misleading or third-party personal information without consent</li>
          <li>Do not use the forms for spam, solicitation or unlawful purposes</li>
          <li>Do not attempt to interfere with the website&apos;s operation or security</li>
          <li>In a medical emergency, call our emergency line — do not rely on website forms</li>
        </ul>
      </div>
      <div>
        <h2>5. Intellectual property</h2>
        <p>
          The hospital&apos;s name, logo, website design and written content are the property of the
          hospital and may not be reproduced without written permission. Health library articles
          may be shared for personal, non-commercial awareness purposes with attribution.
        </p>
      </div>
      <div>
        <h2>6. Limitation of liability</h2>
        <p>
          While we keep the website accurate and current, we make no warranties about completeness
          or availability and are not liable for decisions made based on website content alone, or
          for temporary unavailability of online services.
        </p>
      </div>
      <div>
        <h2>7. Governing law</h2>
        <p>
          These terms are governed by the laws of India, and disputes arising from website use are
          subject to the jurisdiction of the courts of {siteConfig.address.city}, Karnataka.
        </p>
      </div>
    </LegalShell>
  );
}

/* ═════════════════ MEDICAL DISCLAIMER ═════════════════ */
export function DisclaimerView() {
  usePageMeta({
    title: "Medical Disclaimer",
    description: `Important medical disclaimer for the ${siteConfig.name} website — website content is general awareness information, not medical advice.`,
  });

  return (
    <LegalShell
      title="Medical Disclaimer"
      description="The information on this website can help you understand your health — but it can never replace a doctor who has examined you."
      updated="September 2026"
      breadcrumbsLabel="Medical Disclaimer"
    >
      <div>
        <h2>General information only</h2>
        <p>
          All content on this website — including articles in the Health Library, department
          descriptions and FAQ answers — is published for general awareness and education. It is
          not medical advice, diagnosis or a treatment plan, and it must not be used as a
          substitute for professional consultation with a qualified doctor.
        </p>
      </div>
      <div>
        <h2>Do not delay or self-treat</h2>
        <p>
          Never ignore professional medical advice, or delay seeking it, because of something you
          read on this website. Symptoms of the same illness can differ greatly between people;
          only an in-person examination and appropriate tests can establish what is actually wrong
          in your case. Self-treatment based on general articles can be dangerous.
        </p>
      </div>
      <div>
        <h2>Emergencies</h2>
        <p>
          If you are experiencing a medical emergency — such as chest pain, stroke signs (face
          drooping, arm weakness, speech difficulty), severe bleeding, breathing difficulty,
          unconsciousness or seizures — stop reading and call our emergency line{" "}
          <a href={`tel:${siteConfig.emergency.tel}`} className="font-semibold text-destructive">
            {siteConfig.emergency.display}
          </a>{" "}
          or the nearest emergency service immediately.
        </p>
      </div>
      <div>
        <h2>No outcome guarantees</h2>
        <p>
          Medicine is a practice, not a promise. Descriptions of treatments and services on this
          website do not guarantee any particular outcome. Every treatment carries benefits and
          risks, which your doctor will discuss with you individually before any procedure.
        </p>
      </div>
      <div>
        <h2>External links</h2>
        <p>
          Where this website links to external sites (such as maps or health resources), we do so
          for convenience only and take no responsibility for their content or accuracy.
        </p>
      </div>
    </LegalShell>
  );
}
