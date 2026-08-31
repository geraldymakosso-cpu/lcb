import { PageHero } from "@/components/PageHero";
import { company } from "@/content/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("À propos de LCB", "Découvrez La Congolaise Business, cabinet de gestion et d'accompagnement créé en 2025 à Pointe-Noire.", "/a-propos");

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="À propos de LCB" title="Une relation simple, locale et professionnelle." description={company.institutional} imageSrc="/images/equipe-conseilleres-bureau.png" imageAlt="Conseiller travaillant sur un projet professionnel" />
      <section className="section"><div className="container about-story"><div><p className="eyebrow">Depuis 2025</p><h2>Un cabinet de gestion et d'accompagnement.</h2></div><div className="rich-copy"><p>{company.origin}</p><p><strong>Notre mission :</strong> {company.mission}</p><p><strong>Notre ambition :</strong> {company.ambition}</p></div></div></section>
      <section className="section section-soft"><div className="container values-grid">{[["Proximité terrain", "Une présence locale et des canaux de contact simples à Pointe-Noire."],["Rapidité", "Les demandes reçues pendant nos horaires d'ouverture peuvent être prises en charge le jour même."],["Accompagnement humain", "Un conseiller prend le temps de structurer le besoin et d'expliquer la suite."],["Simplicité", "Un parcours clair, sans promesse d'acceptation automatique."]].map(([title, body]) => <article key={title}><h2>{title}</h2><p>{body}</p></article>)}</div></section>
    </>
  );
}
