"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { Icon } from "@/components/ui/Icons";
import { audienceNavigation, navigation, solutionNavigation } from "@/content/navigation";
import { getWhatsAppHref } from "@/lib/contact";

function NavigationGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
  onNavigate?: () => void;
}) {
  const groupRef = useRef<HTMLDetailsElement>(null);

  const handleNavigate = () => {
    groupRef.current?.removeAttribute("open");
    onNavigate?.();
  };

  return (
    <details className="nav-group" ref={groupRef}>
      <summary>{label}</summary>
      <div className="nav-dropdown">
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={handleNavigate}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    mobileMenu.current?.removeAttribute("open");
  };

  useEffect(() => {
    mobileMenu.current?.removeAttribute("open");
  }, [pathname]);

  return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand-link" aria-label="Accueil, La Congolaise Business"><BrandMark /></Link><nav className="desktop-nav" aria-label="Navigation principale"><Link href="/">Accueil</Link><NavigationGroup label="Solutions" items={solutionNavigation} /><NavigationGroup label="Pour qui ?" items={audienceNavigation} />{navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><a className="button button-primary header-whatsapp" href={getWhatsAppHref()} target="_blank" rel="noreferrer"><Icon name="message" size={18} />WhatsApp</a><details className="mobile-menu" ref={mobileMenu}><summary aria-label="Ouvrir le menu"><span /><span /><span /></summary><div className="mobile-menu-panel"><Link href="/" onClick={closeMobileMenu}>Accueil</Link><NavigationGroup label="Solutions" items={solutionNavigation} onNavigate={closeMobileMenu} /><NavigationGroup label="Pour qui ?" items={audienceNavigation} onNavigate={closeMobileMenu} />{navigation.slice(1).map((item) => <Link key={item.href} href={item.href} onClick={closeMobileMenu}>{item.label}</Link>)}</div></details></div></header>;
}
