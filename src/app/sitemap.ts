import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const routes = ["", "/solutions", "/commercants", "/entrepreneurs", "/salaries", "/a-propos", "/faq", "/contact", "/mentions-legales", "/confidentialite"];
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7 }));
}
