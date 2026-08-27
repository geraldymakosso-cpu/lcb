import { Icon } from "@/components/ui/Icons";
import { company } from "@/content/company";
import { getWhatsAppHref } from "@/lib/contact";

export function MobileActions() {
  return (
    <div className="mobile-actions" aria-label="Actions rapides">
      <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
        <Icon name="message" size={20} />
        WhatsApp
      </a>
      <a href={company.phonePrimaryHref}>
        <Icon name="phone" size={20} />
        Appeler
      </a>
    </div>
  );
}
