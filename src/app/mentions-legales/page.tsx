import type { Metadata } from "next";
import { company } from "@/content/company";

export const metadata: Metadata = { title: "Mentions légales", alternates: { canonical: "/mentions-legales" } };

export default function LegalPage() {
  return <section className="legal-page"><div className="container legal-content"><p className="eyebrow">Informations légales</p><h1>Mentions légales</h1><h2>Éditeur du site</h2><p><strong>{company.name}</strong><br />Forme juridique : {company.legalForm}<br />Positionnement : {company.descriptor}<br />Adresse : {company.address}.<br />Téléphones : {company.phonePrimary} / {company.phoneSecondary}.</p><h2>Adresse électronique</h2><p>L'adresse email professionnelle du domaine LCB reste à finaliser avant la mise en production définitive. Aucun ancien compte personnel n'est publié comme contact institutionnel.</p><h2>Hébergement</h2><p>Le site est prévu pour être hébergé sur Vercel. Les informations définitives liées au domaine et à l'hébergement seront complétées lors de la mise en production.</p><h2>Information commerciale</h2><p>Les contenus du site présentent des solutions d'accompagnement et de financement. Ils ne constituent ni une acceptation automatique, ni une garantie de financement. Toute demande fait l'objet d'une étude.</p><div className="legal-warning"><strong>Statut V1</strong><p>Les mentions réglementaires spécifiques restant à confirmer doivent faire l'objet d'une validation avant publication finale sur le domaine de production.</p></div></div></section>;
}
