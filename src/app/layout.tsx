import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import "./brand-enhancements.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActions } from "@/components/layout/MobileActions";
import { NavCurtain } from "@/components/layout/NavCurtain";
import { company } from "@/content/company";
import { getSiteUrl } from "@/lib/site";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", weight: ["400", "500", "600", "700", "800", "900"], style: ["normal", "italic"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C6C3A",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "La Congolaise Business | Gestion et accompagnement à Pointe-Noire",
    template: "%s | La Congolaise Business",
  },
  description:
    "La Congolaise Business accompagne les commerçants, entrepreneurs et PME à Pointe-Noire avec des solutions adaptées à leurs besoins.",
  applicationName: "La Congolaise Business",
  icons: { icon: "/logos/lcb-mark.png", apple: "/logos/lcb-mark.png" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_CG",
    url: "/",
    siteName: "La Congolaise Business",
    title: "La Congolaise Business",
    description: company.institutional,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    url: siteUrl,
    telephone: "+242050836240",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fond Tié-Tié, Ndaka Soussou, en face de la clinique Rocher d'Âge",
      addressLocality: "Pointe-Noire",
      addressCountry: "CG",
    },
    openingHours: "Mo-Fr 08:30-17:30",
  };

  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`} data-scroll-behavior="smooth">
      <body>
        <NavCurtain />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileActions />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
