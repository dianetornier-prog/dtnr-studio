import type { SiteConfig } from "@/lib/types";

/**
 * Centralised site configuration reused across metadata, manifest and sitemap.
 * Override the URL through the `NEXT_PUBLIC_SITE_URL` environment variable.
 */
export const siteConfig: SiteConfig = {
  name: "DTNR Studio",
  title: "Architecte d'intérieur en ligne & rendu 3D | DTNR Studio",
  description:
    "Studio d'E-Design et de visualisation 3D à Senlis. Rendus photoréalistes, architecture d'intérieur et décoration, partout en France.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dtnr-studio.com",
  locale: "fr_FR",
  twitter: "@dtnr_studio",
};
