import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez La Congolaise Business, cabinet de gestion et d'accompagnement basé à Pointe-Noire.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  ["Proche", "Une présence locale et des canaux de contact simples."],
  ["Pragmatique", "Des échanges centrés sur votre activité et votre besoin réel."],
  ["Lisible", "Un parcours expliqué étape par étape."],
  ["Responsable", "Aucune promesse d'acceptation automatique ou garantie."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="À propos de La Congolaise Business" title="Une relation simple, locale et professionnelle." description={company.institutional} imageSrc="/images/equipe-conseilleres-bureau.png" imageAlt="Deux conseillères travaillant ensemble au bureau" />
      <section className="section"><div className="container about-story"><div><p className="eyebrow">Notre positionnement</p><h2>Un cabinet de gestion et d'accompagnement.</h2></div><div className="rich-copy"><p>La Congolaise Business est une Entreprise Individuelle basée à Pointe-Noire. Son ambition est de rendre l'accompagnement plus accessible aux commerçants, entrepreneurs et porteurs de projets.</p><p>Le point de départ reste le même : comprendre la situation, étudier le besoin et expliquer les prochaines étapes sans surpromesse.</p></div></div></section>
      <section className="section section-soft about-values-section"><div className="container values-grid">{values.map(([title, body]) => <article key={title} className="value-card"><h2>{title}</h2><p>{body}</p></article>)}</div></section>
    </>
  );
}
