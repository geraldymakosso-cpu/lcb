import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/ui/Icons";
import { entrepreneurNeeds } from "@/content/services";

export const metadata: Metadata = {
  title: "Accompagnement entrepreneurs et PME",
  description: "LCB accompagne les entrepreneurs et PME à Pointe-Noire pour structurer, développer et financer leurs projets professionnels.",
  alternates: { canonical: "/entrepreneurs" },
};

export default function EntrepreneursPage() {
  return (
    <>
      <PageHero eyebrow="Entrepreneurs / PME" title="Donnez à votre projet les moyens d'avancer." description="LCB vous aide à clarifier votre besoin professionnel et à préparer un parcours d'étude adapté à votre activité." secondaryHref="/contact?profil=entrepreneur" imageSrc="/images/ChatGPT Image 27 août 2026, 19_37_18 (3).png" imageAlt="Équipe d’entrepreneurs travaillant dans un atelier textile" />
      <section className="section"><div className="container two-column-content"><div><p className="eyebrow">Développement</p><h2>Structurer avant d'accélérer.</h2><p>Un projet plus clair facilite les décisions. Notre accompagnement vise à transformer un besoin diffus en demande compréhensible et exploitable.</p></div><ul className="feature-list">{entrepreneurNeeds.map((need) => <li key={need}><Icon name="check" size={19} /><span>{need}</span></li>)}</ul></div></section>
      <section className="section section-soft"><div className="container three-principles"><article><span>01</span><h2>Clarifier</h2><p>Comprendre le projet, son contexte et l'objectif recherché.</p></article><article><span>02</span><h2>Structurer</h2><p>Préparer les éléments utiles à l'étude du besoin.</p></article><article><span>03</span><h2>Accompagner</h2><p>Rester disponible pour expliquer les étapes et la suite.</p></article></div><div className="container centered-action"><Link className="button button-primary" href="/contact?profil=entrepreneur">Faire une demande</Link></div></section>
    </>
  );
}
