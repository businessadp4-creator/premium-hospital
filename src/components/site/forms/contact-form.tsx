"use client";

import { useMemo, useRef, useState } from "react";
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

/** Validation messages follow the active language. */
function makeContactSchema(isTe: boolean) {
  const m = isTe
    ? {
        name: "దయచేసి మీ పేరు టైప్ చేయండి",
        phone: "దయచేసి సరైన ఫోన్ నంబర్ టైప్ చేయండి",
        email: "దయచేసి సరైన ఇమెయిల్ టైప్ చేయండి",
        message: "దయచేసి కొంచెం ఎక్కువ రాయండి (10+ అక్షరాలు)",
      }
    : {
        name: "Please enter your name",
        phone: "Please enter a valid phone number",
        email: "Please enter a valid email address",
        message: "Please write a little more (10+ characters)",
      };
  return z.object({
    name: z.string().trim().min(2, m.name).max(80),
    phone: z.string().trim().regex(/^[+]?[0-9\s-]{8,15}$/, m.phone),
    email: z.string().trim().email(m.email).max(120).optional().or(z.literal("")),
    subject: z.string().trim().max(120).optional().or(z.literal("")),
    message: z.string().trim().min(10, m.message).max(1500),
  });
}

type ContactFormValues = z.infer<ReturnType<typeof makeContactSchema>>;

export function ContactForm() {
  const { t, lang } = useLang();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // Ref keeps the resolver valid even if the language changes after mount.
  const schema = useMemo(() => makeContactSchema(lang === "te"), [lang]);
  const schemaRef = useRef(schema);
  schemaRef.current = schema;

  const form = useForm<ContactFormValues>({
    resolver: (values, ctx, options) => zodResolver(schemaRef.current)(values, ctx, options),
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
        toast.error(data.error || t("ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.", "Something went wrong. Please try again."));
        return;
      }
      setDone(true);
      toast.success(t("సందేశం పంపబడింది — మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము", "Message sent — we'll get back to you soon"));
    } catch {
      toast.error(t("నెట్‌వర్క్ సమస్య — దయచేసి మళ్లీ ప్రయత్నించండి లేదా మా రిసెప్షన్‌కు కాల్ చేయండి.", "Network problem — please try again or call our reception."));
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
        <h3 className="mt-5 font-display text-2xl font-bold">{t("సందేశం అందింది", "Message received")}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {t(
            "సంప్రదించినందుకు ధన్యవాదాలు. మా టీమ్ సాధారణంగా ఒక వర్కింగ్ డేలో రెస్పాన్స్ ఇస్తుంది. తక్షణ వైద్య అవసరం ఉంటే దయచేసి ఆసుపత్రికి డైరెక్ట్‌గా కాల్ చేయండి.",
            "Thank you for reaching out. Our team usually responds within one working day. For urgent medical needs, please call the hospital directly."
          )}
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => {
            setDone(false);
            form.reset();
          }}
        >
          {t("మరో సందేశం పంపండి", "Send another message")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ct-name">{t("మీ పేరు", "Your name")} <span className="text-destructive">*</span></Label>
          <Input id="ct-name" placeholder={t("పూర్తి పేరు", "Full name")} autoComplete="name" className="h-12 rounded-xl" {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ct-phone">{t("ఫోన్", "Phone")} <span className="text-destructive">*</span></Label>
          <Input id="ct-phone" type="tel" inputMode="tel" placeholder="+91 98XXX XXXXX" autoComplete="tel" className="h-12 rounded-xl" {...form.register("phone")} />
          {form.formState.errors.phone && (
            <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ct-email">{t("ఇమెయిల్", "Email")} <span className="text-muted-foreground">({t("ఐచ్ఛికం", "optional")})</span></Label>
          <Input id="ct-email" type="email" placeholder="you@example.com" autoComplete="email" className="h-12 rounded-xl" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ct-subject">{t("విషయం", "Subject")} <span className="text-muted-foreground">({t("ఐచ్ఛికం", "optional")})</span></Label>
          <Input id="ct-subject" placeholder={t("ఇది ఏ విషయం గురించిది?", "What is this about?")} className="h-12 rounded-xl" {...form.register("subject")} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="ct-msg">{t("సందేశం", "Message")} <span className="text-destructive">*</span></Label>
        <Textarea id="ct-msg" rows={5} placeholder={t("మేము ఎలా హెల్ప్ చేయగలం?", "How can we help?")} className="resize-none rounded-xl" {...form.register("message")} />
        {form.formState.errors.message && (
          <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>
      <Button type="submit" disabled={submitting} className="h-12 w-full rounded-full text-[15px] font-semibold md:w-auto md:px-10">
        {submitting ? (
          <>
            <CIcon name="loader" className="size-4 animate-spin" /> {t("పంపుతోంది…", "Sending…")}
          </>
        ) : (
          <>
            <CIcon name="mail" className="size-4" /> {t("సందేశం పంపండి", "Send message")}
          </>
        )}
      </Button>
    </form>
  );
}
