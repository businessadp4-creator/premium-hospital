import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { rateLimit, clientKey } from "@/lib/rate-limit";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^[+]?[0-9\s-]{8,15}$/),
  email: z.string().trim().email().max(120).optional().or(z.literal("")),
  subject: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(1500),
});

export async function POST(req: Request) {
  const rl = rateLimit(clientKey(req, "contact"), { limit: 5 });
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: "చాలా ఎక్కువ సందేశాలు. తక్షణ అవసరమైతే దయచేసి ఆసుపత్రికి కాల్ చేయండి." },
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
      { ok: false, error: "దయచేసి మీ వివరాలను తనిఖీ చేసి మళ్లీ ప్రయత్నించండి." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  try {
    await db.contactRequest.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        subject: data.subject || null,
        message: data.message,
      },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("contact create failed", e);
    return NextResponse.json(
      { ok: false, error: "మీ సందేశాన్ని ఇప్పుడు సేవ్ చేయలేకపోతున్నాము. దయచేసి ఆసుపత్రికి కాల్ చేయండి." },
      { status: 500 }
    );
  }
}
