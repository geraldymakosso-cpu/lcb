import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/ui/Icons";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Découvrez les solutions LCB pour commerçants, entrepreneurs / PME, salariés et les services d'accompagnement à Pointe-Noire.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solutions LCB" title="Partir du besoin, construire la bonne suite." description="LCB accompagne différents profils avec une même méthode : écouter, qualifier, étudier et suivre." />
      <section className="section">
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
      <section className="content-note"><div className="container"><strong>À savoir</strong><p>LCB n'affiche volontairement aucun taux, condition automatique ni promesse d'acceptation sur ce site. Toute demande fait l'objet d'une étude.</p></div></section>
    </>
  );
}
