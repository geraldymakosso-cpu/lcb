import Link from "next/link";
import { Icon } from "@/components/ui/Icons";
import { getWhatsAppHref } from "@/lib/contact";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  secondaryHref = "/contact",
  secondaryLabel = "Faire une demande",
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={getWhatsAppHref()} target="_blank" rel="noreferrer">
            <Icon name="message" size={19} /> Contacter sur WhatsApp
          </a>
          <Link className="button button-secondary" href={secondaryHref}>
            {secondaryLabel} <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
