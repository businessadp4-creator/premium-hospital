"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CIcon } from "../icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[+]?[0-9\s-]{8,15}$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(120).optional().or(z.literal("")),
  subject: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please tell us a little more (10+ characters)").max(1500),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        return;
      }
      setDone(true);
      toast.success("Message sent — we will get back to you soon");
    } catch {
      toast.error("Network error — please try again or call our reception.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-primary/20 bg-secondary/60 p-8 text-center md:p-10">
        <span className="grid size-16 place-items-center rounded-full bg-primary text-white">
          <CIcon name="check-circle" className="size-8" strokeWidth={2} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold">Message received</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. Our team typically responds within one working day. For
          urgent medical needs, please call the hospital directly.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => {
            setDone(false);
            form.reset();
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ct-name">Your Name <span className="text-destructive">*</span></Label>
          <Input id="ct-name" placeholder="Full name" autoComplete="name" className="h-12 rounded-xl" {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ct-phone">Phone <span className="text-destructive">*</span></Label>
          <Input id="ct-phone" type="tel" inputMode="tel" placeholder="+91 98XXX XXXXX" autoComplete="tel" className="h-12 rounded-xl" {...form.register("phone")} />
          {form.formState.errors.phone && (
            <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ct-email">Email <span className="text-muted-foreground">(optional)</span></Label>
          <Input id="ct-email" type="email" placeholder="you@example.com" autoComplete="email" className="h-12 rounded-xl" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ct-subject">Subject <span className="text-muted-foreground">(optional)</span></Label>
          <Input id="ct-subject" placeholder="What is this about?" className="h-12 rounded-xl" {...form.register("subject")} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="ct-msg">Message <span className="text-destructive">*</span></Label>
        <Textarea id="ct-msg" rows={5} placeholder="How can we help you?" className="resize-none rounded-xl" {...form.register("message")} />
        {form.formState.errors.message && (
          <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>
      <Button type="submit" disabled={submitting} className="h-12 w-full rounded-full text-[15px] font-semibold md:w-auto md:px-10">
        {submitting ? (
          <>
            <CIcon name="loader" className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <CIcon name="mail" className="size-4" /> Send Message
          </>
        )}
      </Button>
    </form>
  );
}
