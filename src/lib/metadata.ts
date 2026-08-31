import type { Metadata } from "next";
import { company } from "@/content/company";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: company.name, locale: "fr_CG", type: "website" },
    twitter: { card: "summary", title, description },
  };
}
