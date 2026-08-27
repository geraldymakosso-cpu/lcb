import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions fréquentes sur LCB, les demandes, les solutions étudiées, l'agence et les moyens de contact.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Les réponses avant votre premier échange." description="Retrouvez les informations essentielles sur les demandes, les étapes et la manière de contacter LCB." />
      <section className="section"><div className="container faq-page-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
    </>
  );
}
