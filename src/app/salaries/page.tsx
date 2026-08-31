import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/ui/Icons";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Solutions salariés à Pointe-Noire", "LCB accompagne les salariés de Pointe-Noire pour étudier un projet personnel, un équipement ou une activité complémentaire.", "/salaries");

export default function SalariesPage() {
  return <><PageHero eyebrow="Salariés" title="Préparez votre projet avec méthode." description="LCB vous accompagne pour clarifier votre besoin et étudier les prochaines étapes selon votre situation." secondaryHref="/contact?profil=salarie" imageSrc="/images/salarie-costume-ordinateur.png" imageAlt="Salarié travaillant sur son ordinateur" /><section className="section"><div className="container two-column-content"><div><p className="eyebrow">Vos projets</p><h2>Un échange pour mieux orienter votre besoin.</h2><p>Vous pouvez présenter un projet personnel, un besoin d&apos;équipement ou une activité complémentaire à un conseiller LCB.</p></div><ul className="feature-list">{["Projet personnel", "Équipement", "Activité complémentaire"].map((item) => <li key={item}><Icon name="check" size={19} /><span>{item}</span></li>)}</ul></div></section><section className="section section-soft"><div className="container story-panel"><div className="story-number">01</div><div><p className="eyebrow">Étude adaptée</p><h2>Votre situation est prise en compte.</h2><p>L&apos;étude peut notamment tenir compte de l&apos;ancienneté dans l&apos;emploi, du type de contrat et du niveau de revenu. Aucun seuil n&apos;est annoncé sur le site.</p><Link className="button button-primary" href="/contact?profil=salarie">Présenter mon besoin</Link></div></div></section></>;
}
