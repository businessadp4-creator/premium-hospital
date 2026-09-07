import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { departments, doctors } from "@/lib/content";
import { rateLimit, clientKey } from "@/lib/rate-limit";

const schema = z.object({
  patientName: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^[+]?[0-9\s-]{8,15}$/),
  email: z.string().trim().email().max(120).optional().or(z.literal("")),
  departmentSlug: z.string().trim().min(1),
  doctorSlug: z.string().trim().min(1).nullable().optional(),
  preferredDate: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/),
  preferredTime: z.string().trim().min(3).max(60),
  message: z.string().trim().max(600).optional().or(z.literal("")),
  packageSlug: z.string().trim().max(60).nullable().optional(),
});

function makeReference() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `DMH-${stamp}${rand}`;
}

export async function POST(req: Request) {
  // Rate limit: 5 requests / 10 min / IP
  const rl = rateLimit(clientKey(req, "appt"), { limit: 5 });
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: "చాలా ఎక్కువ అభ్యర్థనలు. దయచేసి సహాయం కోసం మా రిసెప్షన్‌కు కాల్ చేయండి." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "సరైన అభ్యర్థన కాదు" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "దయచేసి ఫారం ఫీల్డ్‌లను తనిఖీ చేసి మళ్లీ ప్రయత్నించండి." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Validate department + doctor relationships against the content registry
  const dept = departments.find((d) => d.slug === data.departmentSlug);
  if (!dept) {
    return NextResponse.json({ ok: false, error: "గుర్తుపెట్టని శాఖ." }, { status: 400 });
  }
  if (data.doctorSlug) {
    const doc = doctors.find((d) => d.slug === data.doctorSlug);
    if (!doc) {
      return NextResponse.json({ ok: false, error: "గుర్తుపెట్టని వైద్యుడు." }, { status: 400 });
    }
  }

  // Reject past dates server-side as well
  const requested = new Date(`${data.preferredDate}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (Number.isNaN(requested.getTime()) || requested < today) {
    return NextResponse.json({ ok: false, error: "అనుకూల తేదీ ఈ రోజు లేదా తర్వాత ఉండాలి." }, { status: 400 });
  }

  try {
    const created = await db.appointmentRequest.create({
      data: {
        patientName: data.patientName,
        phone: data.phone,
        email: data.email || null,
        departmentSlug: data.departmentSlug,
        doctorSlug: data.doctorSlug || null,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        message:
          [
            data.message || null,
            data.packageSlug ? `[Package enquiry: ${data.packageSlug}]` : null,
          ]
            .filter(Boolean)
            .join(" · ") || null,
      },
    });

    return NextResponse.json({ ok: true, reference: makeReference(), id: created.id });
  } catch (e) {
    console.error("appointment create failed", e);
    return NextResponse.json(
      { ok: false, error: "మీ అభ్యర్థనను ఇప్పుడు సేవ్ చేయలేకపోతున్నాము. దయచేసి ఆసుపత్రికి కాల్ చేయండి." },
      { status: 500 }
    );
  }
}
