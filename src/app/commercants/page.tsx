import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/ui/Icons";
import { merchantNeeds } from "@/content/services";

export const metadata: Metadata = {
  title: "Solutions pour commerçants à Pointe-Noire",
  description: "LCB accompagne les commerçants des marchés de Pointe-Noire pour leurs besoins de stock, trésorerie et développement d'activité.",
  alternates: { canonical: "/commercants" },
};

export default function MerchantsPage() {
  return (
    <>
      <PageHero eyebrow="Commerçants des marchés" title="Faites avancer votre activité." description="Votre commerce a ses propres rythmes et contraintes. LCB étudie votre besoin avec une approche proche du terrain." secondaryHref="/contact?profil=commercant" imageSrc="/images/ChatGPT Image 27 août 2026, 19_37_17 (2).png" imageAlt="Commerçante souriante dans un marché" />
      <section className="section">
        <div className="container two-column-content">
          <div><p className="eyebrow">Besoins fréquents</p><h2>Un besoin concret mérite une réponse claire.</h2><p>Nous ne partons pas d'un produit standard. Nous commençons par comprendre ce que vous cherchez à faire dans votre activité.</p></div>
          <ul className="feature-list">{merchantNeeds.map((need) => <li key={need}><Icon name="check" size={19} /><span>{need}</span></li>)}</ul>
        </div>
      </section>
      <section className="section section-soft"><div className="container story-panel"><div className="story-number">01</div><div><p className="eyebrow">Proximité</p><h2>Le commerce de proximité n'est pas un marché secondaire pour LCB.</h2><p>Les commerçants sont la priorité n°1 du projet LCB. Le site, le discours et le parcours de contact sont conçus pour être simples à utiliser depuis un téléphone, même pendant une journée de travail chargée.</p><Link className="button button-primary" href="/contact?profil=commercant">Présenter mon besoin</Link></div></div></section>
    </>
  );
}
