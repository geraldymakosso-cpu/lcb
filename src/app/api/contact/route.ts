import { NextRequest, NextResponse } from "next/server";

const LIMIT_WINDOW_MS = 10 * 60 * 1000;
const LIMIT_MAX = 5;
const requestBuckets = new Map<string, number[]>();

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'\"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  }[char] || char));
}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestBuckets.get(ip) || []).filter((time) => now - time < LIMIT_WINDOW_MS);
  if (recent.length >= LIMIT_MAX) return true;
  recent.push(now);
  requestBuckets.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ message: "Trop de tentatives. Merci de réessayer dans quelques minutes ou de nous contacter sur WhatsApp." }, { status: 429 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Requête invalide." }, { status: 400 });
  }

  if (text(payload.website, 200)) {
    return NextResponse.json({ message: "Votre demande a bien été reçue." });
  }

  const data = {
    name: text(payload.name, 100),
    phone: text(payload.phone, 24),
    city: text(payload.city, 80),
    profile: text(payload.profile, 40),
    activity: text(payload.activity, 120),
    need: text(payload.need, 40),
    amount: text(payload.amount, 40),
    message: text(payload.message, 1200),
    consent: text(payload.consent, 10),
  };

  const allowedProfiles = new Set(["commercant", "entrepreneur", "salarie", "autre"]);
  const allowedNeeds = new Set(["financement", "accompagnement", "information", "autre"]);
  const phoneDigits = data.phone.replace(/\D/g, "");

  if (
    data.name.length < 2 ||
    phoneDigits.length < 7 ||
    !data.city ||
    !allowedProfiles.has(data.profile) ||
    !allowedNeeds.has(data.need) ||
    data.consent !== "yes"
  ) {
    return NextResponse.json({ message: "Merci de vérifier les champs obligatoires du formulaire." }, { status: 400 });
  }

  const apiKey = process.env.EMAIL_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { message: "Le formulaire est prêt mais l'envoi email n'est pas encore configuré. Contactez LCB sur WhatsApp au +242 06 191 59 40." },
      { status: 503 },
    );
  }

  const rows = [
    ["Nom", data.name],
    ["Téléphone", data.phone],
    ["Ville", data.city],
    ["Profil", data.profile],
    ["Activité", data.activity || "Non précisée"],
    ["Besoin", data.need],
    ["Montant souhaité", data.amount || "Non précisé"],
    ["Message", data.message || "Aucun"],
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Nouvelle demande LCB — ${data.name}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto"><h1 style="color:#1C6C3A">Nouvelle demande LCB</h1>${rows.map(([label, value]) => `<p><strong>${escapeHtml(label)} :</strong><br>${escapeHtml(value)}</p>`).join("")}<hr><p style="font-size:12px;color:#666">Demande transmise depuis le site LCB.</p></div>`,
    }),
  });

  if (!response.ok) {
    console.error("LCB contact email provider error", response.status, await response.text());
    return NextResponse.json({ message: "L'envoi n'a pas abouti. Merci de nous contacter directement sur WhatsApp." }, { status: 502 });
  }

  return NextResponse.json({ message: "Votre demande a bien été transmise." });
}
