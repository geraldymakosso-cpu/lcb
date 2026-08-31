import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/ui/Icons";
import { company } from "@/content/company";
import { getDirectionsHref, getWhatsAppHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact et agence LCB à Pointe-Noire", "Contactez LCB sur WhatsApp, appelez un conseiller ou utilisez le formulaire de préqualification à Pointe-Noire.", "/contact");

type ContactPageProps = { searchParams: Promise<{ profil?: string; besoin?: string }> };

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  return (
    <>
      <PageHero eyebrow="Contact" title="Expliquez-nous votre besoin." description="WhatsApp est le canal le plus rapide. Vous pouvez aussi appeler, vous rendre à l'agence ou transmettre une demande." imageSrc="/images/entretien-client-bureau.png" imageAlt="Conseillère présentant un projet à une équipe" />
      <section className="section"><div className="container contact-page-grid"><div className="contact-info-panel"><p className="eyebrow">Contact direct</p><h2>Choisissez le canal qui vous convient.</h2><div className="contact-option"><Icon name="message" size={22} /><div><small>WhatsApp</small><a href={getWhatsAppHref()} target="_blank" rel="noreferrer">{company.whatsapp}</a><p>Canal prioritaire pour une première prise de contact.</p></div></div><div className="contact-option"><Icon name="phone" size={22} /><div><small>Appeler un conseiller</small><a href={company.phoneHref}>{company.phone}</a></div></div><div className="contact-option"><Icon name="pin" size={22} /><div><small>Agence</small><strong>{company.address}</strong><a href={getDirectionsHref()} target="_blank" rel="noreferrer">Voir l'itinéraire</a></div></div><div className="contact-option"><Icon name="clock" size={22} /><div><small>Horaires</small><strong>{company.hours}</strong></div></div></div><div className="form-panel"><p className="eyebrow">Faire une demande</p><h2>Préqualification</h2><p>Quelques informations suffisent pour démarrer. Aucun document n'est demandé sur le site.</p><ContactForm profile={params.profil} need={params.besoin} /></div></div></section>
    </>
  );
}
