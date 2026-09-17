import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/layout/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site DTNR Studio.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialité",
    description: "Politique de confidentialité du site DTNR Studio.",
    url: "/politique-de-confidentialite",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      headingId="politique-confidentialite-heading"
      updatedAt="16/09/2026"
    >
      <p>
        DTNR STUDIO s’engage à ce que la collecte et le traitement de vos
        données soient conformes au Règlement Général sur la Protection des
        Données (RGPD).
      </p>

      <LegalSection title="Collecte de données">
        <p>
          Les données personnelles collectées via le formulaire de contact sont
          :
        </p>
        <ul className="list-disc pl-5">
          <li>Nom</li>
          <li>Téléphone</li>
          <li>Adresse e-mail</li>
          <li>Code postal</li>
          <li>Ville</li>
          <li>Message</li>
        </ul>
        <p>
          Le site utilise uniquement des cookies techniques nécessaires à son
          fonctionnement.
        </p>
      </LegalSection>

      <LegalSection title="Finalités du traitement">
        <p>Les données collectées sont utilisées pour :</p>
        <ul className="list-disc pl-5">
          <li>Répondre aux demandes de contact et de devis</li>
          <li>Assurer le suivi des projets clients</li>
        </ul>
      </LegalSection>

      <LegalSection title="Base légale">
        <p>
          Le traitement des données repose sur le consentement de l’utilisateur
          (formulaire de contact).
        </p>
      </LegalSection>

      <LegalSection title="Destinataires des données">
        <p>
          Les données collectées sont destinées uniquement à DTNR STUDIO et ne
          sont ni vendues, ni louées, ni cédées à des tiers, sauf obligation
          légale.
        </p>
        <p>
          Elles sont transmises à Vercel Inc. (hébergement) et EmailJS (envoi
          des messages du formulaire), dans la stricte mesure nécessaire au
          fonctionnement du site. Ces prestataires sont situés aux États-Unis.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Les données sont conservées pendant une durée de 3 ans à compter du
          dernier contact, sauf obligation légale contraire.
        </p>
      </LegalSection>

      <LegalSection title="Sécurité des données">
        <p>
          DTNR STUDIO met en œuvre les mesures techniques et organisationnelles
          nécessaires pour assurer la sécurité et la confidentialité des données
          personnelles, et empêcher qu’elles soient déformées, endommagées ou
          communiquées à des tiers non autorisés.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de
          rectification, de suppression, d’opposition, de limitation et de
          portabilité de vos données personnelles. Pour exercer ces droits, vous
          pouvez nous contacter par e-mail à :{" "}
          <a
            href="mailto:contact@dtnr-studio.com"
            className="rounded-sm underline focus-accessible"
          >
            contact@dtnr-studio.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
