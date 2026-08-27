import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      <PageHero eyebrow="Solutions LCB" title="Partir du besoin, construire la bonne suite." description="LCB accompagne différents profils avec une même méthode : écouter, qualifier, étudier et suivre." imageSrc="/images/conseillere-dossier-bureau-plan-large.png" imageAlt="Conseillère présentant un projet à une équipe" />
      <section className="section">
        <div className="container service-grid service-grid-large">
          {services.map((service) => (
            <article className="service-card" key={service.id} id={service.id}>
              <span className="service-icon">
                <Image src={service.iconSrc} alt="" width={52} height={52} />
              </span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link href={service.href}>Voir cette solution <Icon name="arrow" size={18} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Leviers d&apos;action</p>
            <h2>Cinq axes pour avancer.</h2>
          </div>
          <div className="visual-levers-grid">
            {[
              { src: "/icons/icone-main-piece.png", label: "Financement" },
              { src: "/icons/icone-graphique-croissance.png", label: "Croissance" },
              { src: "/icons/icone-echange-personnes.png", label: "Accompagnement" },
              { src: "/icons/icone-poignee-main.png", label: "Partenariat" },
              { src: "/icons/icone-chapeau-diplome.png", label: "Formation" },
            ].map(({ src, label }) => (
              <div className="visual-lever" key={label}>
                <Image src={src} alt="" width={70} height={70} />
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-note"><div className="container"><strong>À savoir</strong><p>LCB n&apos;affiche volontairement aucun taux, condition automatique ni promesse d&apos;acceptation sur ce site. Toute demande fait l&apos;objet d&apos;une étude.</p></div></section>
    </>
  );
}
