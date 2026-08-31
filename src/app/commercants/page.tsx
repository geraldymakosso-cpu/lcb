import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/ui/Icons";
import { merchantNeeds } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Solutions commerçants à Pointe-Noire", "LCB accompagne les commerçants de Pointe-Noire pour les besoins de stock, équipement, trésorerie et développement d'activité.", "/commercants");

export default function MerchantsPage() {
  return (
    <>
      <PageHero eyebrow="Commerçants des marchés" title="Faites avancer votre activité." description="Votre commerce a ses propres rythmes et contraintes. LCB étudie votre besoin avec une approche proche du terrain." secondaryHref="/contact?profil=commercant" imageSrc="/images/commercante-marche-tenue-coloree.png" imageAlt="Commerçante souriante dans un marché" />
      <section className="section">
        <div className="container two-column-content">
          <div><p className="eyebrow">Besoins fréquents</p><h2>Un besoin concret mérite une réponse claire.</h2><p>Nous ne partons pas d'un produit standard. Nous commençons par comprendre ce que vous cherchez à faire dans votre activité.</p></div>
          <ul className="feature-list">{merchantNeeds.map((need) => <li key={need}><Icon name="check" size={19} /><span>{need}</span></li>)}</ul>
        </div>
      </section>
      <section className="section section-soft"><div className="container story-panel"><div className="story-number">01</div><div><p className="eyebrow">Proximité</p><h2>Le commerce de proximité est au cœur de LCB.</h2><p>Selon la solution étudiée, une activité exercée depuis au moins trois mois peut être demandée. Aucune formalisation administrative n&apos;est obligatoire pour prendre un premier contact ; les justificatifs sont ensuite déterminés selon votre situation.</p><Link className="button button-primary" href="/contact?profil=commercant">Présenter mon besoin</Link></div></div></section>
    </>
  );
}
