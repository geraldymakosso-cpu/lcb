import { company } from "@/content/company";

const defaultWhatsAppNumber = "242061915940";
const defaultWhatsAppMessage =
  "Bonjour LCB, je souhaite avoir des informations sur vos solutions.";

export function getWhatsAppHref(message = defaultWhatsAppMessage) {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || defaultWhatsAppNumber;
  const number = raw.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getDirectionsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`;
}
