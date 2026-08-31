import Link from "next/link";
import Image from "next/image";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/ui/Icons";
import { company, processSteps, profiles } from "@/content/company";
import { faqs } from "@/content/faq";
import { merchantNeeds, services } from "@/content/services";
import { getDirectionsHref, getWhatsAppHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "LCB Pointe-Noire | Accompagnement des commerçants",
  "La Congolaise Business accompagne les commerçants, entrepreneurs et salariés à Pointe-Noire avec des solutions étudiées selon leurs besoins.",
  "/",
);

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{company.descriptor}</p>
            <h1>Un commerçant,<br /><span>une solution de financement.</span></h1>
            <p className="lead">La Congolaise Business vous aide à clarifier votre besoin et vous accompagne vers une solution adaptée à votre activité ou votre projet.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={getWhatsAppHref()} target="_blank" rel="noreferrer">
                <Icon name="message" size={20} /> Contacter LCB sur WhatsApp
              </a>
              <Link className="button button-secondary" href="/solutions">
                Découvrir nos solutions <Icon name="arrow" size={18} />
              </Link>
            </div>
            <div className="hero-trust-row">
              <span><Icon name="pin" size={18} /> Pointe-Noire</span>
              <span><Icon name="clock" size={18} /> Lun–Ven · 08h30–17h30</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section section-soft" id="solutions">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Nos solutions</p>
            <h2>Un besoin clair. Un parcours simple.</h2>
            <p>Pas de promesse automatique : chaque demande est étudiée et accompagnée par un conseiller de La Congolaise Business.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.id} id={service.id}>
                <span className="service-icon">
                  <Image src={service.iconSrc} alt="" width={48} height={48} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.href}>Découvrir <Icon name="arrow" size={17} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="merchant-focus">
        <div className="container merchant-grid">
          <div className="merchant-art" aria-hidden="true">
            <div className="merchant-photo"><Image src="/images/commercante-marche-legumes.png" alt="Commerçante présentant ses produits au marché" fill sizes="(max-width: 820px) 90vw, 420px" /></div>
            <div className="merchant-rings" />
            <div className="merchant-stall">
              <span className="stall-top" />
              <span className="stall-table" />
              <i className="crate crate-a" /><i className="crate crate-b" /><i className="crate crate-c" />
            </div>
            <span className="merchant-badge">La Congolaise Business · au plus près du commerce</span>
          </div>
          <div className="merchant-copy">
            <p className="eyebrow light">Commerçants des marchés</p>
            <h2>Votre commerce bouge vite. Votre accompagnement doit suivre.</h2>
            <p>Besoin de renouveler votre stock ou de renforcer votre activité ? La Congolaise Business étudie votre situation et vous aide à avancer avec un parcours lisible.</p>
            <ul className="check-list">
              {merchantNeeds.map((need) => <li key={need}><Icon name="check" size={18} /> {need}</li>)}
            </ul>
            <Link className="button button-light" href="/commercants">Voir les solutions commerçants <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section profiles-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Pour qui ?</p><h2>Des solutions pensées pour la réalité du terrain.</h2></div>
            <p>Nous commençons par comprendre votre activité et votre besoin avant de parler de solution.</p>
          </div>
          <div className="profile-grid">
            {profiles.map((profile, index) => (
              <Link className="profile-card" href={profile.href} key={profile.title}>
                <span className="card-index">0{index + 1}</span>
                <small>{profile.eyebrow}</small>
                <h3>{profile.title}</h3>
                <p>{profile.description}</p>
                <span className="card-link">En savoir plus <Icon name="arrow" size={18} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="process-header">
            <p className="eyebrow">Comment ça marche ?</p>
            <h2>Sept étapes, sans jargon inutile.</h2>
            <p className="lead">De la première prise de contact jusqu&apos;au suivi, vous savez où vous en êtes.</p>
          </div>
          <div className="process-accordion">
            {[
              { label: processSteps[0], detail: "Un message WhatsApp ou un appel suffit. Vous décrivez votre besoin en quelques mots, sans dossier à préparer à l'avance." },
              { label: processSteps[1], detail: "Un conseiller évalue rapidement si votre profil et votre besoin permettent d'aller plus loin dans la démarche." },
              { label: processSteps[2], detail: "Vous rassemblez les pièces adaptées à votre situation. Votre conseiller vous indique précisément ce dont il a besoin." },
              { label: processSteps[3], detail: "Votre dossier est étudié en tenant compte de votre activité réelle, de votre contexte et de votre besoin déclaré." },
              { label: processSteps[4], detail: "Votre dossier est transmis au partenaire financeur, qui prend sa décision selon son étude." },
              { label: processSteps[5], detail: "Si le partenaire financeur donne une suite favorable, le financement est mis à disposition selon les modalités applicables." },
              { label: processSteps[6], detail: "Un conseiller reste disponible après la mise en place pour répondre à vos questions et suivre votre projet." },
            ].map(({ label, detail }, i) => (
              <details key={label} className="process-item" {...(i === 0 ? { open: true } : {})}>
                <summary className="process-summary">
                  <span className="process-step-num">0{i + 1}</span>
                  <span className="process-step-label">{label}</span>
                  <span className="process-step-toggle" aria-hidden="true" />
                </summary>
                <div className="process-detail-wrap">
                  <p>{detail}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container why-grid">
          <div className="why-intro">
            <p className="eyebrow">Pourquoi La Congolaise Business ?</p>
            <h2>Une approche proche, simple et concrète.</h2>
            <p>La Congolaise Business n'essaie pas de vous faire rentrer dans un discours complexe. Nous partons de votre besoin réel.</p>
          </div>
          <div className="why-list">
            {[
              ["01", "Proximité", "Une présence locale à Pointe-Noire et une compréhension des réalités du commerce."],
              ["02", "Rapidité", "Les demandes reçues pendant les horaires d'ouverture peuvent être prises en charge le jour même."],
              ["03", "Simplicité", "Des étapes expliquées clairement et plusieurs moyens de contact immédiats."],
              ["04", "Accompagnement", "Un suivi qui ne s'arrête pas à la première prise de contact."],
            ].map(([n, title, body]) => (
              <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{body}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-teaser">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">La Congolaise Business</p>
            <h2>Un cabinet de gestion et d'accompagnement tourné vers l'action.</h2>
          </div>
          <div>
            <p>{company.institutional}</p>
            <Link className="text-link" href="/a-propos">Découvrir La Congolaise Business <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section contact-band">
        <div className="container contact-band-grid">
          <div>
            <p className="eyebrow">Agence La Congolaise Business</p>
            <h2>Parlons de votre besoin.</h2>
            <p>WhatsApp reste le moyen le plus rapide. Vous pouvez aussi appeler un conseiller ou venir à l'agence.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={getWhatsAppHref()} target="_blank" rel="noreferrer"><Icon name="message" size={19} /> WhatsApp</a>
              <Link className="button button-secondary" href="/contact">Faire une demande</Link>
            </div>
          </div>
          <div className="contact-card">
            <div><Icon name="phone" size={20} /><span><small>Appeler un conseiller</small><a href={company.phoneHref}>{company.phone}</a></span></div>
            <div><Icon name="pin" size={20} /><span><small>Adresse</small><strong>{company.address}</strong><a href={getDirectionsHref()} target="_blank" rel="noreferrer">Voir l'itinéraire</a></span></div>
            <div><Icon name="clock" size={20} /><span><small>Horaires</small><strong>{company.hours}</strong></span></div>
          </div>
        </div>
      </section>

      <section className="section home-faq">
        <div className="container faq-home-grid">
          <div className="section-heading"><p className="eyebrow">Questions fréquentes</p><h2>Les réponses utiles avant de nous contacter.</h2><Link className="text-link" href="/faq">Voir toute la FAQ <Icon name="arrow" size={18} /></Link></div>
          <div className="faq-list">
            {faqs.slice(0, 4).map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div><p className="eyebrow light">Un premier échange suffit</p><h2>Expliquez-nous votre besoin. Nous vous indiquons la suite.</h2></div>
            <a className="button button-light" href={getWhatsAppHref()} target="_blank" rel="noreferrer"><Icon name="message" size={19} /> Contacter LCB sur WhatsApp</a>
        </div>
      </section>
    </>
  );
}
