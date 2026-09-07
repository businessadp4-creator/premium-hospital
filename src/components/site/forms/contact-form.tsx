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
  name: z.string().trim().min(2, "దయచేసి మీ పేరు నమోదు చేయండి").max(80),
  phone: z.string().trim().regex(/^[+]?[0-9\s-]{8,15}$/, "దయచేసి సరైన ఫోన్ నంబర్ నమోదు చేయండి"),
  email: z.string().trim().email("దయచేసి సరైన ఇమెయిల్ నమోదు చేయండి").max(120).optional().or(z.literal("")),
  subject: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "దయచేసి కొంచెం ఎక్కువ వివరించండి (10+ అక్షరాలు)").max(1500),
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
        toast.error(data.error || "ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.");
        return;
      }
      setDone(true);
      toast.success("సందేశం పంపబడింది — మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము");
    } catch {
      toast.error("నెట్‌వర్క్ సమస్య — దయచేసి మళ్లీ ప్రయత్నించండి లేదా మా రిసెప్షన్‌కు కాల్ చేయండి.");
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
        <h3 className="mt-5 font-display text-2xl font-bold">సందేశం అందింది</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          సంప్రదించినందుకు ధన్యవాదాలు. మా బృందం సాధారణంగా ఒక పని దినంలో స్పందిస్తుంది. తక్షణ
          వైద్య అవసరాల కోసం దయచేసి ఆసుపత్రికి డైరెక్ట్‌గా కాల్ చేయండి.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => {
            setDone(false);
            form.reset();
          }}
        >
          మరో సందేశం పంపండి
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ct-name">మీ పేరు <span className="text-destructive">*</span></Label>
          <Input id="ct-name" placeholder="పూర్తి పేరు" autoComplete="name" className="h-12 rounded-xl" {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ct-phone">ఫోన్ <span className="text-destructive">*</span></Label>
          <Input id="ct-phone" type="tel" inputMode="tel" placeholder="+91 98XXX XXXXX" autoComplete="tel" className="h-12 rounded-xl" {...form.register("phone")} />
          {form.formState.errors.phone && (
            <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ct-email">ఇమెయిల్ <span className="text-muted-foreground">(ఐచ్ఛికం)</span></Label>
          <Input id="ct-email" type="email" placeholder="you@example.com" autoComplete="email" className="h-12 rounded-xl" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ct-subject">విషయం <span className="text-muted-foreground">(ఐచ్ఛికం)</span></Label>
          <Input id="ct-subject" placeholder="ఇది ఏ విషయం గురించిది?" className="h-12 rounded-xl" {...form.register("subject")} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="ct-msg">సందేశం <span className="text-destructive">*</span></Label>
        <Textarea id="ct-msg" rows={5} placeholder="మేము ఎలా సహాయపడగలము?" className="resize-none rounded-xl" {...form.register("message")} />
        {form.formState.errors.message && (
          <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>
      <Button type="submit" disabled={submitting} className="h-12 w-full rounded-full text-[15px] font-semibold md:w-auto md:px-10">
        {submitting ? (
          <>
            <CIcon name="loader" className="size-4 animate-spin" /> పంపుతోంది…
          </>
        ) : (
          <>
            <CIcon name="mail" className="size-4" /> సందేశం పంపండి
          </>
        )}
      </Button>
    </form>
  );
}
