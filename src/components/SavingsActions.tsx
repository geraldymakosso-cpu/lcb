"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/ui/Icons";
import { getWhatsAppHref } from "@/lib/contact";

const savingsWhatsAppMessage =
  "Bonjour LCB, je souhaite avoir plus d’informations sur votre solution d’épargne.";

export function SavingsActions() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        menuRef.current?.removeAttribute("open");
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        menuRef.current?.removeAttribute("open");
        menuRef.current?.querySelector("summary")?.focus();
      }
    };

    document.addEventListener("click", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => menuRef.current?.removeAttribute("open");

  return (
    <details className="savings-actions" ref={menuRef}>
      <summary className="button button-primary">
        En savoir plus <Icon name="arrow" size={18} />
      </summary>
      <div className="savings-actions-menu">
        <a
          href={getWhatsAppHref(savingsWhatsAppMessage)}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <Icon name="message" size={20} />
          <span>
            <strong>Parler à un conseiller</strong>
            <small>Échanger directement sur WhatsApp</small>
          </span>
        </a>
        <Link href="/contact?besoin=epargne" onClick={closeMenu}>
          <Icon name="clock" size={20} />
          <span>
            <strong>Prendre rendez-vous</strong>
            <small>Transmettre vos coordonnées à LCB</small>
          </span>
        </Link>
      </div>
    </details>
  );
}
