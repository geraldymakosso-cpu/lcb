import { PageHero } from "@/components/PageHero";
import { faqs } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Questions fréquentes", "Les réponses sur les solutions, l'Épargne, les demandes et le contact avec LCB à Pointe-Noire.", "/faq");

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Les réponses avant votre premier échange." description="Retrouvez les informations essentielles sur les demandes, les étapes et la manière de contacter LCB." imageSrc="/images/conseillere-suivi-dossier.png" imageAlt="Conseillère accueillant un client pour un échange" />
      <section className="section"><div className="container faq-page-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
    </>
  );
}
