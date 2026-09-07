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
  patientName: z.string().trim().min(2, "Please enter the patient's full name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{8,15}$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(120).optional().or(z.literal("")),
  departmentSlug: z.string().min(1, "Please choose a department"),
  doctorSlug: z.string().optional(),
  preferredDate: z
    .string()
    .min(1, "Please choose a preferred date")
    .refine((v) => {
      const d = new Date(`${v}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !Number.isNaN(d.getTime()) && d >= today;
    }, "Please choose today or a future date"),
  preferredTime: z.string().min(1, "Please choose a preferred time"),
  message: z.string().trim().max(600, "Message is too long").optional().or(z.literal("")),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const timeSlots = [
  "Morning (9:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 3:00 PM)",
  "Evening (3:00 PM – 6:00 PM)",
  "Night (6:00 PM – 8:00 PM)",
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
      message: presetPackage ? `Health package enquiry: ${presetPackage.name}` : "",
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
        toast.error(data.error || "Something went wrong. Please call us instead.");
        return;
      }
      setDone({ name: values.patientName.split(" ")[0], ref: data.reference ?? "—" });
      toast.success("Appointment request received");
    } catch {
      toast.error("Network error — please try again or call our reception.");
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
          Thank you, {done.name}. Request received.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your reference number is <span className="font-semibold text-foreground">{done.ref}</span>.
          Our care team will call you shortly to confirm your exact appointment slot. Please note this
          is a request — your appointment is confirmed only once our team speaks with you.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => {
            setDone(null);
            form.reset();
          }}
        >
          Book another appointment
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
          Enquiry for <span className="font-semibold">{presetPackage.name}</span>
        </div>
      )}
      <div className={cn("grid gap-5", !compact && "md:grid-cols-2")}>
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="apt-name">Patient Name <span className="text-destructive">*</span></Label>
          <Input
            id="apt-name"
            placeholder="Full name"
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
          <Label htmlFor="apt-phone">Phone Number <span className="text-destructive">*</span></Label>
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
        <Label htmlFor="apt-email">Email <span className="text-muted-foreground">(optional)</span></Label>
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
          <Label htmlFor="apt-dept">Department <span className="text-destructive">*</span></Label>
          <Select
            value={deptValue}
            onValueChange={(v) => form.setValue("departmentSlug", v, { shouldValidate: true })}
          >
            <SelectTrigger id="apt-dept" className="h-12 w-full rounded-xl" aria-invalid={!!form.formState.errors.departmentSlug}>
              <SelectValue placeholder="Select a department" />
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
          <Label htmlFor="apt-doctor">Preferred Doctor <span className="text-muted-foreground">(optional)</span></Label>
          <Select
            value={form.watch("doctorSlug") || "any"}
            onValueChange={(v) => form.setValue("doctorSlug", v)}
            key={deptValue}
          >
            <SelectTrigger id="apt-doctor" className="h-12 w-full rounded-xl">
              <SelectValue placeholder="No preference" />
            </SelectTrigger>
            <SelectContent className="max-h-72 rounded-xl">
              <SelectItem value="any">No preference</SelectItem>
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
          <Label htmlFor="apt-date">Preferred Date <span className="text-destructive">*</span></Label>
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
          <Label htmlFor="apt-time">Preferred Time <span className="text-destructive">*</span></Label>
          <Select value={form.watch("preferredTime")} onValueChange={(v) => form.setValue("preferredTime", v, { shouldValidate: true })}>
            <SelectTrigger id="apt-time" className="h-12 w-full rounded-xl" aria-invalid={!!form.formState.errors.preferredTime}>
              <SelectValue placeholder="Select a time window" />
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
        <Label htmlFor="apt-msg">Message <span className="text-muted-foreground">(optional)</span></Label>
        <Textarea
          id="apt-msg"
          rows={compact ? 2 : 3}
          placeholder="Briefly describe your concern (optional)"
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
            Sending request…
          </>
        ) : (
          <>
            <CIcon name="calendar-check" className="size-4" />
            Request Appointment
          </>
        )}
      </Button>
      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        By submitting, you agree to be contacted about your appointment. This form sends a
        request — our team confirms your slot by phone.
      </p>
    </form>
  );
}
