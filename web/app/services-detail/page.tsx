import type { Metadata } from "next";

import { OfferCard } from "@/components/OfferCard";
import { OffersTable } from "@/components/OffersTable";
import PageLayout from "@/components/layout/page-layout";
import { pricingOffers } from "@/lib/pricing-offers";
import { siteConfig } from "@/lib/site";

const pageDescription =
  "Découvrez les formules et tarifs DTNR Studio : Express, Essentiel, Expertise et Sur mesure.";

export const metadata: Metadata = {
  title: "Nos services et tarifs",
  description: pageDescription,
  alternates: {
    canonical: "/services-detail",
  },
  openGraph: {
    title: "Nos services et tarifs",
    description: pageDescription,
    url: "/services-detail",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function ServicesDetailPage() {
  return (
    <PageLayout
      ariaLabelledby="services-detail-heading"
      backHref="/#services"
      backLabel="Retour aux services"
      className="
        mx-auto flex min-h-dvh w-full max-w-[1650px] flex-col gap-7 px-5
      "
    >
      <header>
        <h1
          id="services-detail-heading"
          className="
            mx-auto text-center font-title text-3xl font-light md:text-5xl
            lg:text-7xl
          "
        >
          Nos services
        </h1>
      </header>

      <section
        aria-labelledby="tarifs-list-heading"
        className="flex flex-col gap-5"
      >
        <h2 id="tarifs-list-heading" className="sr-only">
          Formules et tarifs DTNR Studio
        </h2>

        <ul
          className="
            flex flex-col gap-4 md:hidden
          "
        >
          {pricingOffers.map((offer) => (
            <OfferCard key={offer.name} offer={offer} />
          ))}
        </ul>

        <div
          className="
            hidden overflow-x-auto md:block
          "
        >
          <OffersTable offers={pricingOffers} />
        </div>
        <h2
          className="
            mx-auto mt-15 mb-15 w-full text-center font-title text-3xl
            font-light text-heading md:text-5xl lg:text-7xl
          "
        >
          Notre méthode
        </h2>

        <div
          className="
            mb-10 grid w-full grid-cols-1 gap-5 md:grid-cols-3
          "
        >
          <div className="col-span-1">
            <p className="text-xl font-medium">
              <span className="font-title text-2xl font-bold text-heading">
                01. ÉTUDE{" "}
              </span>
              Analyse du projet en étudiant ses contraintes, atouts en précisant
              votre direction artistiques et votre vision esthétique.
            </p>
          </div>
          <div
            className="
              col-span-1 md:mt-10
            "
          >
            <p className="text-xl font-medium">
              <span className="font-title text-2xl font-bold text-heading">
                02. CONCEPTION{" "}
              </span>
              Réalisation et validation de vos plans 2D et des modélisations 3D
              photoréalistes.
            </p>
          </div>
          <div
            className="
              col-span-1 md:mt-20
            "
          >
            <p className="text-xl font-medium">
              <span className="font-title text-2xl font-bold text-heading">
                03. RENDU{" "}
              </span>
              Livraison de vos projets complets comprenant plans 2D, shopping
              list et rendus 3D photoréalistes.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
