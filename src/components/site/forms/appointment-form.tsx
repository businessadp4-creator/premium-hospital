"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useLang } from "@/lib/i18n";
import { CIcon } from "../icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

/** Validation messages follow the active language. */
function makeAppointmentSchema(isTe: boolean) {
  const m = isTe
    ? {
        name: "దయచేసి రోగి పూర్తి పేరు టైప్ చేయండి",
        phone: "దయచేసి సరైన ఫోన్ నంబర్ టైప్ చేయండి",
        email: "దయచేసి సరైన ఇమెయిల్ టైప్ చేయండి",
        dept: "దయచేసి శాఖ ఎంచుకోండి",
        date: "దయచేసి తేదీ ఎంచుకోండి",
        datePast: "ఈ రోజు లేదా ముందరి తేదీ ఎంచుకోండి",
        time: "దయచేసి టైం ఎంచుకోండి",
        msgLong: "సందేశం చాలా పొడవుగా ఉంది",
      }
    : {
        name: "Please enter the patient's full name",
        phone: "Please enter a valid phone number",
        email: "Please enter a valid email address",
        dept: "Please choose a department",
        date: "Please choose a date",
        datePast: "Please pick today or a future date",
        time: "Please choose a time slot",
        msgLong: "Message is too long",
      };
  return z.object({
    patientName: z.string().trim().min(2, m.name).max(80),
    phone: z
      .string()
      .trim()
      .regex(/^[+]?[0-9\s-]{8,15}$/, m.phone),
    email: z.string().trim().email(m.email).max(120).optional().or(z.literal("")),
    departmentSlug: z.string().min(1, m.dept),
    doctorSlug: z.string().optional(),
    preferredDate: z
      .string()
      .min(1, m.date)
      .refine((v) => {
        const d = new Date(`${v}T00:00:00`);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return !Number.isNaN(d.getTime()) && d >= today;
      }, m.datePast),
    preferredTime: z.string().min(1, m.time),
    message: z.string().trim().max(600, m.msgLong).optional().or(z.literal("")),
  });
}

type AppointmentFormValues = z.infer<ReturnType<typeof makeAppointmentSchema>>;

function timeSlots(isTe: boolean) {
  return isTe
    ? [
        "ఉదయం (9:00 – 12:00)",
        "మధ్యాహ్నం (12:00 – 3:00)",
        "సాయంత్రం (3:00 – 6:00)",
        "రాత్రి (6:00 – 8:00)",
      ]
    : [
        "Morning (9:00 – 12:00)",
        "Midday (12:00 – 3:00)",
        "Evening (3:00 – 6:00)",
        "Night (6:00 – 8:00)",
      ];
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function AppointmentForm({
  presetDoctorSlug,
  presetDepartmentSlug,
  presetPackageSlug,
  compact = false,
}: {
  presetDoctorSlug?: string;
  presetDepartmentSlug?: string;
  presetPackageSlug?: string;
  compact?: boolean;
}) {
  const { t, content, lang } = useLang();
  const isTe = lang === "te";
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ name: string; ref: string } | null>(null);

  const presetDoctor = content.doctors.find((d) => d.slug === presetDoctorSlug);
  const presetPackage = content.healthPackages.find((p) => p.slug === presetPackageSlug);

  // Ref keeps the resolver valid even if the language changes after mount.
  const schema = useMemo(() => makeAppointmentSchema(isTe), [isTe]);
  const schemaRef = useRef(schema);
  schemaRef.current = schema;

  const form = useForm<AppointmentFormValues>({
    resolver: (values, ctx, options) => zodResolver(schemaRef.current)(values, ctx, options),
    defaultValues: {
      patientName: "",
      phone: "",
      email: "",
      departmentSlug: presetDoctor?.departmentSlug ?? presetDepartmentSlug ?? "",
      doctorSlug: presetDoctorSlug ?? "any",
      preferredDate: "",
      preferredTime: "",
      message: presetPackage
        ? isTe
          ? `హెల్త్ ప్యాకేజీ విచారణ: ${presetPackage.name}`
          : `Health package enquiry: ${presetPackage.name}`
        : "",
    },
  });

  const deptValue = form.watch("departmentSlug");
  const filteredDoctors = useMemo(
    () => content.doctors.filter((d) => d.departmentSlug === deptValue),
    [content.doctors, deptValue]
  );

  // Reset doctor choice when the department changes
  useEffect(() => {
    const current = form.getValues("doctorSlug");
    const currentDoc = content.doctors.find((d) => d.slug === current);
    if (currentDoc && currentDoc.departmentSlug !== deptValue) {
      form.setValue("doctorSlug", "any");
    }
  }, [deptValue, form, content.doctors]);

  const onSubmit = async (values: AppointmentFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          doctorSlug: values.doctorSlug === "any" ? null : values.doctorSlug,
          packageSlug: presetPackageSlug ?? null,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; reference?: string; error?: string };
      if (!res.ok || !data.ok) {
        toast.error(data.error || t("ఏదో తప్పు జరిగింది. దయచేసి మాకు కాల్ చేయండి.", "Something went wrong. Please call us."));
        return;
      }
      setDone({ name: values.patientName.split(" ")[0], ref: data.reference ?? "—" });
      toast.success(t("అపాయింట్‌మెంట్ రిక్వెస్ట్ అందింది", "Appointment request received"));
    } catch {
      toast.error(t("నెట్‌వర్క్ సమస్య — మళ్లీ ప్రయత్నించండి లేదా మా రిసెప్షన్‌కు కాల్ చేయండి.", "Network problem — please try again or call our reception."));
    } finally {
      setSubmitting(false);
    }
  };

  /* ── Success state ─────────────────────────────────────────────── */
  if (done) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-primary/20 bg-secondary/60 p-8 text-center md:p-10">
        <span className="grid size-16 place-items-center rounded-full bg-primary text-white">
          <CIcon name="check-circle" className="size-8" strokeWidth={2} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
          {t(
            `ధన్యవాదాలు, ${done.name} గారు! మీ రిక్వెస్ట్ అందింది.`,
            `Thank you, ${done.name}! Your request has been received.`
          )}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {isTe ? (
            <>
              మీ రిఫరెన్స్ నంబర్ <span className="font-semibold text-foreground">{done.ref}</span>. మీ
              స్లాట్ కన్ఫర్మ్ చేయడానికి మా టీమ్ త్వరలో కాల్ చేస్తుంది. గమనిక: ఇది రిక్వెస్ట్ మాత్రమే — మా
              టీమ్ మీతో మాట్లాడిన తర్వాతే అపాయింట్‌మెంట్ కన్ఫర్మ్ అవుతుంది.
            </>
          ) : (
            <>
              Your reference number is <span className="font-semibold text-foreground">{done.ref}</span>. Our
              care team will call you shortly to confirm your slot. Note: this is a request only — the
              appointment is confirmed once our team speaks with you.
            </>
          )}
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => {
            setDone(null);
            form.reset();
          }}
        >
          {t("మరో అపాయింట్‌మెంట్ బుక్ చేయండి", "Book another appointment")}
        </Button>
      </div>
    );
  }

  /* ── Form ──────────────────────────────────────────────────────── */
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-5">
      {presetPackage && (
        <div className="flex items-center gap-2.5 rounded-xl border border-gold/40 bg-gold-soft px-4 py-3 text-sm text-accent-foreground">
          <CIcon name="clipboard" className="size-4 shrink-0 text-gold" />
          {t("విచారణ", "Enquiry")}: <span className="font-semibold">{presetPackage.name}</span>
        </div>
      )}
      <div className={cn("grid gap-5", !compact && "md:grid-cols-2")}>
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="apt-name">{t("రోగి పేరు", "Patient name")} <span className="text-destructive">*</span></Label>
          <Input
            id="apt-name"
            placeholder={t("పూర్తి పేరు", "Full name")}
            autoComplete="name"
            className="h-12 rounded-xl"
            aria-invalid={!!form.formState.errors.patientName}
            {...form.register("patientName")}
          />
          {form.formState.errors.patientName && (
            <p className="text-xs text-destructive">{form.formState.errors.patientName.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="apt-phone">{t("ఫోన్ నంబర్", "Phone number")} <span className="text-destructive">*</span></Label>
          <Input
            id="apt-phone"
            type="tel"
            inputMode="tel"
            placeholder="+91 98XXX XXXXX"
            autoComplete="tel"
            className="h-12 rounded-xl"
            aria-invalid={!!form.formState.errors.phone}
            {...form.register("phone")}
          />
          {form.formState.errors.phone && (
            <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="apt-email">{t("ఇమెయిల్", "Email")} <span className="text-muted-foreground">({t("ఐచ్ఛికం", "optional")})</span></Label>
        <Input
          id="apt-email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          className="h-12 rounded-xl"
          aria-invalid={!!form.formState.errors.email}
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div className={cn("grid gap-5", !compact && "md:grid-cols-2")}>
        {/* Department */}
        <div className="space-y-2">
          <Label htmlFor="apt-dept">{t("శాఖ", "Department")} <span className="text-destructive">*</span></Label>
          <Select
            value={deptValue}
            onValueChange={(v) => form.setValue("departmentSlug", v, { shouldValidate: true })}
          >
            <SelectTrigger id="apt-dept" className="h-12 w-full rounded-xl" aria-invalid={!!form.formState.errors.departmentSlug}>
              <SelectValue placeholder={t("శాఖ ఎంచుకోండి", "Choose a department")} />
            </SelectTrigger>
            <SelectContent className="max-h-72 rounded-xl">
              {content.departments.map((d) => (
                <SelectItem key={d.slug} value={d.slug}>
                  {d.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.departmentSlug && (
            <p className="text-xs text-destructive">{form.formState.errors.departmentSlug.message}</p>
          )}
        </div>

        {/* Doctor */}
        <div className="space-y-2">
          <Label htmlFor="apt-doctor">{t("ఇష్టమైన డాక్టర్", "Preferred doctor")} <span className="text-muted-foreground">({t("ఐచ్ఛికం", "optional")})</span></Label>
          <Select
            value={form.watch("doctorSlug") || "any"}
            onValueChange={(v) => form.setValue("doctorSlug", v)}
            key={deptValue}
          >
            <SelectTrigger id="apt-doctor" className="h-12 w-full rounded-xl">
              <SelectValue placeholder={t("ఎటువంటి ఇష్టం లేదు", "No preference")} />
            </SelectTrigger>
            <SelectContent className="max-h-72 rounded-xl">
              <SelectItem value="any">{t("ఎటువంటి ఇష్టం లేదు", "No preference")}</SelectItem>
              {filteredDoctors.map((d) => (
                <SelectItem key={d.slug} value={d.slug}>
                  {d.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className={cn("grid gap-5", !compact && "md:grid-cols-2")}>
        {/* Date */}
        <div className="space-y-2">
          <Label htmlFor="apt-date">{t("అనుకూల తేదీ", "Preferred date")} <span className="text-destructive">*</span></Label>
          <Input
            id="apt-date"
            type="date"
            min={todayISO()}
            className="h-12 rounded-xl"
            aria-invalid={!!form.formState.errors.preferredDate}
            {...form.register("preferredDate")}
          />
          {form.formState.errors.preferredDate && (
            <p className="text-xs text-destructive">{form.formState.errors.preferredDate.message}</p>
          )}
        </div>

        {/* Time */}
        <div className="space-y-2">
          <Label htmlFor="apt-time">{t("అనుకూల సమయం", "Preferred time")} <span className="text-destructive">*</span></Label>
          <Select value={form.watch("preferredTime")} onValueChange={(v) => form.setValue("preferredTime", v, { shouldValidate: true })}>
            <SelectTrigger id="apt-time" className="h-12 w-full rounded-xl" aria-invalid={!!form.formState.errors.preferredTime}>
              <SelectValue placeholder={t("టైం స్లాట్ ఎంచుకోండి", "Choose a time slot")} />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {timeSlots(isTe).map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.preferredTime && (
            <p className="text-xs text-destructive">{form.formState.errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="apt-msg">{t("సందేశం", "Message")} <span className="text-muted-foreground">({t("ఐచ్ఛికం", "optional")})</span></Label>
        <Textarea
          id="apt-msg"
          rows={compact ? 2 : 3}
          placeholder={t("మీ సమస్య గురించి సంక్షిప్తంగా రాయండి", "Briefly describe your problem")}
          className="resize-none rounded-xl"
          {...form.register("message")}
        />
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="h-12 w-full rounded-full text-[15px] font-semibold shadow-sm transition-all hover:shadow-md"
      >
        {submitting ? (
          <>
            <CIcon name="loader" className="size-4 animate-spin" />
            {t("పంపుతోంది…", "Sending…")}
          </>
        ) : (
          <>
            <CIcon name="calendar-check" className="size-4" />
            {t("అపాయింట్‌మెంట్ రిక్వెస్ట్ చేయండి", "Request appointment")}
          </>
        )}
      </Button>
      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        {t(
          "సబ్మిట్ చేస్తే, అపాయింట్‌మెంట్ గురించి మిమ్మల్ని సంప్రదించడానికి అంగీకరిస్తున్నారు అవుతుంది. ఈ ఫారం ఒక రిక్వెస్ట్‌ని పంపుతుంది — మా టీమ్ ఫోన్‌లో మీ స్లాట్ కన్ఫర్మ్ చేస్తుంది.",
          "By submitting, you agree to be contacted about your appointment. This form sends a request only — our team confirms your slot by phone."
        )}
      </p>
    </form>
  );
}
