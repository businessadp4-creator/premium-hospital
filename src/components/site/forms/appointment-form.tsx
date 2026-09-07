"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { departments, doctors, healthPackages } from "@/lib/content";
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

const appointmentSchema = z.object({
  patientName: z.string().trim().min(2, "దయచేసి రోగి పూర్తి పేరు నమోదు చేయండి").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{8,15}$/, "దయచేసి సరైన ఫోన్ నంబర్ నమోదు చేయండి"),
  email: z.string().trim().email("దయచేసి సరైన ఇమెయిల్ నమోదు చేయండి").max(120).optional().or(z.literal("")),
  departmentSlug: z.string().min(1, "దయచేసి శాఖను ఎంచుకోండి"),
  doctorSlug: z.string().optional(),
  preferredDate: z
    .string()
    .min(1, "దయచేసి మీకు అనుకూలమైన తేదీని ఎంచుకోండి")
    .refine((v) => {
      const d = new Date(`${v}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !Number.isNaN(d.getTime()) && d >= today;
    }, "ఈ రోజు లేదా భవిష్యత్తు తేదీని ఎంచుకోండి"),
  preferredTime: z.string().min(1, "దయచేసి అనుకూల సమయాన్ని ఎంచుకోండి"),
  message: z.string().trim().max(600, "సందేశం చాలా పొడవుగా ఉంది").optional().or(z.literal("")),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const timeSlots = [
  "ఉదయం (9:00 – 12:00)",
  "మధ్యాహ్నం (12:00 – 3:00)",
  "సాయంత్రం (3:00 – 6:00)",
  "రాత్రి (6:00 – 8:00)",
];

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
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ name: string; ref: string } | null>(null);

  const presetDoctor = doctors.find((d) => d.slug === presetDoctorSlug);
  const presetPackage = healthPackages.find((p) => p.slug === presetPackageSlug);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      patientName: "",
      phone: "",
      email: "",
      departmentSlug: presetDoctor?.departmentSlug ?? presetDepartmentSlug ?? "",
      doctorSlug: presetDoctorSlug ?? "any",
      preferredDate: "",
      preferredTime: "",
      message: presetPackage ? `ఆరోగ్య ప్యాకేజీ విచారణ: ${presetPackage.name}` : "",
    },
  });

  const deptValue = form.watch("departmentSlug");
  const filteredDoctors = useMemo(
    () => doctors.filter((d) => d.departmentSlug === deptValue),
    [deptValue]
  );

  // Reset doctor choice when the department changes
  useEffect(() => {
    const current = form.getValues("doctorSlug");
    const currentDoc = doctors.find((d) => d.slug === current);
    if (currentDoc && currentDoc.departmentSlug !== deptValue) {
      form.setValue("doctorSlug", "any");
    }
  }, [deptValue, form]);

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
        toast.error(data.error || "ఏదో తప్పు జరిగింది. దయచేసి మాకు కాల్ చేయండి.");
        return;
      }
      setDone({ name: values.patientName.split(" ")[0], ref: data.reference ?? "—" });
      toast.success("అపాయింట్‌మెంట్ అభ్యర్థన అందింది");
    } catch {
      toast.error("నెట్‌వర్క్ సమస్య — దయచేసి మళ్లీ ప్రయత్నించండి లేదా మా రిసెప్షన్‌కు కాల్ చేయండి.");
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
          ధన్యవాదాలు, {done.name}. మీ అభ్యర్థన అందింది.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          మీ రిఫరెన్స్ నంబర్ <span className="font-semibold text-foreground">{done.ref}</span>.
          మీ ఖచ్చితమైన అపాయింట్‌మెంట్ స్లాట్‌ను ధృవీకరించడానికి మా సంరక్షణ బృందం త్వరలో మిమ్మల్ని కాల్ చేస్తుంది.
          గమనిక: ఇది ఒక అభ్యర్థన మాత్రమే — మా బృందం మీతో మాట్లాడిన తర్వాతే అపాయింట్‌మెంట్ ధృవీకరించబడుతుంది.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => {
            setDone(null);
            form.reset();
          }}
        >
          మరో అపాయింట్‌మెంట్ బుక్ చేయండి
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
          విచారణ: <span className="font-semibold">{presetPackage.name}</span>
        </div>
      )}
      <div className={cn("grid gap-5", !compact && "md:grid-cols-2")}>
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="apt-name">రోగి పేరు <span className="text-destructive">*</span></Label>
          <Input
            id="apt-name"
            placeholder="పూర్తి పేరు"
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
          <Label htmlFor="apt-phone">ఫోన్ నంబర్ <span className="text-destructive">*</span></Label>
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
        <Label htmlFor="apt-email">ఇమెయిల్ <span className="text-muted-foreground">(ఐచ్ఛికం)</span></Label>
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
          <Label htmlFor="apt-dept">శాఖ <span className="text-destructive">*</span></Label>
          <Select
            value={deptValue}
            onValueChange={(v) => form.setValue("departmentSlug", v, { shouldValidate: true })}
          >
            <SelectTrigger id="apt-dept" className="h-12 w-full rounded-xl" aria-invalid={!!form.formState.errors.departmentSlug}>
              <SelectValue placeholder="శాఖను ఎంచుకోండి" />
            </SelectTrigger>
            <SelectContent className="max-h-72 rounded-xl">
              {departments.map((d) => (
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
          <Label htmlFor="apt-doctor">ఇష్టపడిన వైద్యుడు <span className="text-muted-foreground">(ఐచ్ఛికం)</span></Label>
          <Select
            value={form.watch("doctorSlug") || "any"}
            onValueChange={(v) => form.setValue("doctorSlug", v)}
            key={deptValue}
          >
            <SelectTrigger id="apt-doctor" className="h-12 w-full rounded-xl">
              <SelectValue placeholder="ఎటువంటి ఇష్టం లేదు" />
            </SelectTrigger>
            <SelectContent className="max-h-72 rounded-xl">
              <SelectItem value="any">ఎటువంటి ఇష్టం లేదు</SelectItem>
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
          <Label htmlFor="apt-date">అనుకూల తేదీ <span className="text-destructive">*</span></Label>
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
          <Label htmlFor="apt-time">అనుకూల సమయం <span className="text-destructive">*</span></Label>
          <Select value={form.watch("preferredTime")} onValueChange={(v) => form.setValue("preferredTime", v, { shouldValidate: true })}>
            <SelectTrigger id="apt-time" className="h-12 w-full rounded-xl" aria-invalid={!!form.formState.errors.preferredTime}>
              <SelectValue placeholder="సమయ విండో ఎంచుకోండి" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {timeSlots.map((slot) => (
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
        <Label htmlFor="apt-msg">సందేశం <span className="text-muted-foreground">(ఐచ్ఛికం)</span></Label>
        <Textarea
          id="apt-msg"
          rows={compact ? 2 : 3}
          placeholder="మీ సమస్యను సంక్షిప్తంగా వివరించండి (ఐచ్ఛికం)"
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
            అభ్యర్థన పంపుతోంది…
          </>
        ) : (
          <>
            <CIcon name="calendar-check" className="size-4" />
            అపాయింట్‌మెంట్ అభ్యర్థించండి
          </>
        )}
      </Button>
      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        సమర్పించడం ద్వారా, మీ అపాయింట్‌మెంట్ గురించి మిమ్మల్ని సంప్రదించడానికి అంగీకరిస్తున్నారు. ఈ ఫారం
        ఒక అభ్యర్థనను పంపుతుంది — మా బృందం ఫోన్ ద్వారా మీ స్లాట్‌ను ధృవీకరిస్తుంది.
      </p>
    </form>
  );
}
