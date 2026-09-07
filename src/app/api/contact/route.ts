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
      { ok: false, error: "Too many messages. Please call the hospital if urgent." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check your details and try again." },
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
      { ok: false, error: "We could not save your message right now. Please call the hospital." },
      { status: 500 }
    );
  }
}
