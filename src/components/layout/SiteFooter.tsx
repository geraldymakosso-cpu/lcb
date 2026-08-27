import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Icon } from "@/components/ui/Icons";
import { company } from "@/content/company";
import { navigation } from "@/content/navigation";
import { getDirectionsHref, getWhatsAppHref } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandMark inverse />
          <p>{company.descriptor}</p>
          <a className="footer-cta" href={getWhatsAppHref()} target="_blank" rel="noreferrer">
            <Icon name="message" size={18} /> Contacter LCB
          </a>
        </div>

        <div>
          <h2>Navigation</h2>
          <div className="footer-links">
            {navigation.slice(1).map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h2>Nous joindre</h2>
          <div className="footer-links">
            <a href={company.phonePrimaryHref}>{company.phonePrimary}</a>
            <a href={company.phoneSecondaryHref}>{company.phoneSecondary}</a>
            <a href={getDirectionsHref()} target="_blank" rel="noreferrer">Voir l'itinéraire</a>
          </div>
        </div>

        <div>
          <h2>Agence</h2>
          <p>{company.address}.</p>
          <p>{company.hours}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} LCB — La Congolaise Business</span>
        <span className="footer-legal">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </span>
      </div>
    </footer>
  );
}
