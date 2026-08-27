import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/ui/Icons";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Découvrez les solutions de La Congolaise Business pour commerçants, entrepreneurs / PME, salariés et les services d'accompagnement à Pointe-Noire.",
  alternates: { canonical: "/solutions" },
};

const visualLevers = [
  ["Financement", "/icons/icone-service-financement.png"],
  ["Conseil", "/icons/icone-service-conseil.png"],
  ["Gestion", "/icons/icone-service-gestion.png"],
  ["Formation", "/icons/icone-service-formation.png"],
  ["Suivi", "/icons/icone-service-suivi.png"],
  ["Accompagnement", "/icons/icone-service-accompagnement.png"],
] as const;

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solutions La Congolaise Business" title="Partir du besoin, construire la bonne suite." description="La Congolaise Business accompagne différents profils avec une même méthode : écouter, qualifier, étudier et suivre." imageSrc="/images/portrait-salarie-bureau.png" imageAlt="Professionnel préparant son activité au bureau" />
      <section className="section solution-levers-section">
        <div className="container">
          <div className="section-heading centered-heading"><p className="eyebrow">Nos leviers</p><h2>Un accompagnement qui combine plusieurs expertises.</h2><p>Les besoins diffèrent selon les activités. Nous mobilisons les leviers utiles au bon moment, sans imposer un parcours standard.</p></div>
          <div className="visual-levers-grid">{visualLevers.map(([label, src]) => <div className="visual-lever" key={label}><Image src={src} alt="" width={78} height={78} /><strong>{label}</strong></div>)}</div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container service-grid service-grid-large">
          {services.map((service) => (
            <article className="service-card" key={service.id} id={service.id}>
              <span className="service-icon"><Icon name={service.icon} size={26} /></span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link href={service.href}>Voir cette solution <Icon name="arrow" size={18} /></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="content-note"><div className="container"><strong>À savoir</strong><p>La Congolaise Business n'affiche volontairement aucun taux, condition automatique ni promesse d'acceptation sur ce site. Toute demande fait l'objet d'une étude.</p></div></section>
    </>
  );
}
