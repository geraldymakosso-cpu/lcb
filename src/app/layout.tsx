import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActions } from "@/components/layout/MobileActions";
import { company } from "@/content/company";
import { getSiteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
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
    telephone: "+242061915940",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fond Tié-Tié, Ndaka Soussou, en face de la clinique Rocher d'Âge",
      addressLocality: "Pointe-Noire",
      addressCountry: "CG",
    },
    openingHours: "Mo-Fr 08:30-17:30",
  };

  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileActions />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
