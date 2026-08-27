import Link from "next/link";
import Image from "next/image";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/ui/Icons";
import { company, processSteps, profiles } from "@/content/company";
import { faqs } from "@/content/faq";
import { merchantNeeds, services } from "@/content/services";
import { getDirectionsHref, getWhatsAppHref } from "@/lib/contact";

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
                <Icon name="message" size={20} /> Contacter La Congolaise Business sur WhatsApp
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

      <section className="section image-mosaic-section">
        <div className="container image-mosaic-heading"><div><p className="eyebrow">Des réalités, des parcours</p><h2>Une équipe proche des personnes qui font avancer le Congo.</h2></div><p>Du marché à l’atelier, du premier échange au suivi, chaque image raconte un contexte d’accompagnement.</p></div>
        <div className="container image-mosaic">
          <figure className="mosaic-feature"><Image src="/images/ChatGPT Image 27 août 2026, 19_37_17 (2).png" alt="Commerçante dans son étal au marché" fill sizes="(max-width: 820px) 100vw, 50vw" /><figcaption><span>Commerçants</span><strong>Faire grandir une activité ancrée dans le quotidien.</strong></figcaption></figure>
          <figure className="mosaic-tile mosaic-tile-a"><Image src="/images/ChatGPT Image 27 août 2026, 19_37_18 (4).png" alt="Conseillère échangeant avec un client" fill sizes="(max-width: 820px) 50vw, 25vw" /><figcaption>Écouter avant d’orienter</figcaption></figure>
          <figure className="mosaic-tile mosaic-tile-b"><Image src="/images/ChatGPT Image 27 août 2026, 19_13_04 (4).png" alt="Entrepreneur travaillant dans son atelier textile" fill sizes="(max-width: 820px) 50vw, 25vw" /><figcaption>Construire avec méthode</figcaption></figure>
          <figure className="mosaic-tile mosaic-tile-c"><Image src="/images/ChatGPT Image 27 août 2026, 19_37_18 (3).png" alt="Équipe réunie dans un atelier textile" fill sizes="(max-width: 820px) 50vw, 25vw" /><figcaption>Avancer ensemble</figcaption></figure>
          <figure className="mosaic-tile mosaic-tile-d"><Image src="/images/ChatGPT Image 27 août 2026, 19_37_19 (5).png" alt="Conseiller travaillant sur un projet professionnel" fill sizes="(max-width: 820px) 50vw, 25vw" /><figcaption>Clarifier le besoin</figcaption></figure>
        </div>
        <div className="container image-reel" aria-label="Moments d’accompagnement"><div className="image-reel-track">
          <figure><Image src="/images/ChatGPT Image 27 août 2026, 19_17_32 (3).png" alt="Équipe réunie autour d’un projet" fill sizes="220px" /><figcaption>Partager une vision</figcaption></figure>
          <figure><Image src="/images/ChatGPT Image 27 août 2026, 19_17_33 (4).png" alt="Conseillère présentant un dossier" fill sizes="220px" /><figcaption>Décider avec clarté</figcaption></figure>
          <figure><Image src="/images/ChatGPT Image 27 août 2026, 19_17_36 (6).png" alt="Conseillère accompagnant une équipe" fill sizes="220px" /><figcaption>Passer à l’action</figcaption></figure>
          <span className="sr-only">Les images suivantes défilent automatiquement.</span>
          <figure aria-hidden="true"><Image src="/images/ChatGPT Image 27 août 2026, 19_17_32 (3).png" alt="" fill sizes="220px" /><figcaption>Partager une vision</figcaption></figure>
          <figure aria-hidden="true"><Image src="/images/ChatGPT Image 27 août 2026, 19_17_33 (4).png" alt="" fill sizes="220px" /><figcaption>Décider avec clarté</figcaption></figure>
          <figure aria-hidden="true"><Image src="/images/ChatGPT Image 27 août 2026, 19_17_36 (6).png" alt="" fill sizes="220px" /><figcaption>Passer à l’action</figcaption></figure>
        </div></div>
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
                <span className="service-icon"><Icon name={service.icon} size={25} /></span>
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
            <div className="merchant-photo"><Image src="/images/ChatGPT Image 27 août 2026, 19_13_04 (5).png" alt="Équipe en activité dans une boutique textile" fill sizes="(max-width: 820px) 90vw, 420px" /></div>
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

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Comment ça marche ?</p>
            <h2>Sept étapes, sans jargon inutile.</h2>
            <p>De la première prise de contact jusqu'au suivi, vous savez où vous en êtes.</p>
          </div>
          <ol className="process-grid">
            {processSteps.map((step, index) => (
              <li key={step} className={index === 3 ? "process-active" : ""}>
                <span className="process-node"><span className="process-node-core">{index + 1}</span><i /></span>
                <strong>{step}</strong>
                {index < processSteps.length - 1 && <span className="process-connector" aria-hidden="true" />}
              </li>
            ))}
          </ol>
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
              ["02", "Écoute", "Un conseiller prend le temps de qualifier le besoin avant de proposer une suite."],
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
            <p>WhatsApp reste le moyen le plus rapide. Vous pouvez aussi appeler ou venir à l'agence.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={getWhatsAppHref()} target="_blank" rel="noreferrer"><Icon name="message" size={19} /> WhatsApp</a>
              <Link className="button button-secondary" href="/contact">Faire une demande</Link>
            </div>
          </div>
          <div className="contact-card">
            <div><Icon name="phone" size={20} /><span><small>Téléphones</small><a href={company.phonePrimaryHref}>{company.phonePrimary}</a><a href={company.phoneSecondaryHref}>{company.phoneSecondary}</a></span></div>
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
            <a className="button button-light" href={getWhatsAppHref()} target="_blank" rel="noreferrer"><Icon name="message" size={19} /> Contacter La Congolaise Business sur WhatsApp</a>
        </div>
      </section>
    </>
  );
}
