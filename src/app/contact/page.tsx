import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/ui/Icons";
import { company } from "@/content/company";
import { getDirectionsHref, getWhatsAppHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact La Congolaise Business à Pointe-Noire",
  description: "Contactez La Congolaise Business sur WhatsApp, par téléphone ou via le formulaire. Agence à Fond Tié-Tié, Ndaka Soussou, Pointe-Noire.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Expliquez-nous votre besoin." description="WhatsApp est le canal le plus rapide. Vous pouvez aussi appeler, vous rendre à l'agence ou transmettre une demande." imageSrc="/images/ville-pointe-noire.png" imageAlt="Vue de Pointe-Noire" />
      <section className="section"><div className="container contact-page-grid"><div className="contact-info-panel"><div className="contact-heading-icon"><Image src="/icons/icone-contact.png" alt="" width={64} height={64} /></div><p className="eyebrow">Contact direct</p><h2>Choisissez le canal qui vous convient.</h2><div className="contact-option"><Icon name="message" size={22} /><div><small>WhatsApp</small><a href={getWhatsAppHref()} target="_blank" rel="noreferrer">{company.phonePrimary}</a><p>Message conseillé pour une première prise de contact.</p></div></div><div className="contact-option"><Icon name="phone" size={22} /><div><small>Téléphone</small><a href={company.phonePrimaryHref}>{company.phonePrimary}</a><a href={company.phoneSecondaryHref}>{company.phoneSecondary}</a></div></div><div className="contact-option"><Icon name="pin" size={22} /><div><small>Agence</small><strong>{company.address}</strong><a href={getDirectionsHref()} target="_blank" rel="noreferrer">Voir l'itinéraire</a></div></div><div className="contact-option"><Icon name="clock" size={22} /><div><small>Horaires</small><strong>{company.hours}</strong></div></div></div><div className="form-panel"><p className="eyebrow">Faire une demande</p><h2>Préqualification</h2><p>Quelques informations suffisent pour démarrer. Aucun document n'est demandé sur le site.</p><ContactForm /></div></div></section>
    </>
  );
}
