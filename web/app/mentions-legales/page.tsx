import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/layout/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site DTNR Studio.",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales",
    description: "Mentions légales du site DTNR Studio.",
    url: "/mentions-legales",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      headingId="mentions-legales-heading"
      updatedAt="16/09/2026"
    >
      <LegalSection title="Édition du site">
        <p>Le site DTNR STUDIO est édité par :</p>
        <ul className="flex flex-col gap-1">
          <li>Diane Tornier / Raison sociale : DTNR STUDIO</li>
          <li>Statut juridique : Entreprise individuelle</li>
          <li>SIRET : 10974089400018</li>
          <li>Adresse du siège : 18 avenue de Beauval - 60300 Senlis</li>
          <li>
            Téléphone :{" "}
            <a
              href="tel:+33612044110"
              className="rounded-sm underline focus-accessible"
            >
              06.12.04.41.10
            </a>
          </li>
          <li>
            E-mail :{" "}
            <a
              href="mailto:contact@dtnr-studio.com"
              className="rounded-sm underline focus-accessible"
            >
              contact@dtnr-studio.com
            </a>
          </li>
          <li>Directeur de la publication : Diane Tornier</li>
        </ul>
      </LegalSection>

      <LegalSection title="Hébergement du site">
        <p>Le site est hébergé par :</p>
        <ul className="flex flex-col gap-1">
          <li>Nom de l’hébergeur : Vercel Inc.</li>
          <li>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
          <li>
            Site web :{" "}
            <a
              href="https://vercel.com"
              rel="noreferrer"
              target="_blank"
              className="rounded-sm underline focus-accessible"
            >
              https://vercel.com
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L’ensemble des contenus présents sur ce site (textes, images, visuels
          3D, rendus photoréalistes, logos, charte graphique, etc.) est la
          propriété exclusive de DTNR STUDIO, sauf mention contraire.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication ou
          adaptation de tout ou partie des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite sans autorisation écrite
          préalable de DTNR STUDIO.
        </p>
        <p>
          Toute exploitation non autorisée du site ou de l’un de ses éléments
          sera considérée comme constitutive d’une contrefaçon et poursuivie
          conformément aux dispositions des articles L.335-2 et suivants du Code
          de Propriété Intellectuelle.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          L’activité de Diane Tornier se limite à la conception et au conseil en
          architecture d’intérieur. Elle n’inclut pas la maîtrise d’œuvre ni la
          direction de travaux. Pour tout projet de rénovation, il appartient au
          client de vérifier que les entreprises intervenantes disposent de
          leurs propres assurances décennales à jour.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
