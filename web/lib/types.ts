import type { StaticImageData } from "next/image";

export type SectionId = "a-propos" | "services" | "portfolio" | "contact";

export type Section = {
  readonly id: SectionId;
  readonly label: string;
  readonly href?: string;
};

export type PricingOffer = {
  readonly name: string;
  readonly price: string;
  readonly description: string;
};

export type Service = {
  readonly id: string;
  readonly image: string;
  readonly label: string;
  readonly idx: string;
};

export type PortfolioProject = {
  readonly image: StaticImageData;
  readonly alt: string;
};

export type SiteConfig = {
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly locale: string;
  readonly twitter: string;
};
