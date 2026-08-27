import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Icon } from "@/components/ui/Icons";
import { navigation } from "@/content/navigation";
import { getWhatsAppHref } from "@/lib/contact";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" aria-label="Accueil LCB">
          <BrandMark />
        </Link>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="button button-primary header-whatsapp"
          href={getWhatsAppHref()}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="message" size={18} />
          WhatsApp
        </a>

        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu-panel">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
              Contacter sur WhatsApp
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
