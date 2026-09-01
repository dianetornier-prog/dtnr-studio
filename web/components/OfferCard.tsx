import Link from "next/link";

import type { PricingOffer } from "@/lib/types";

type OfferCardProps = {
  offer: PricingOffer;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <li className="flex flex-col gap-3 border-2 border-heading p-4">
      <p className="text-xl font-medium whitespace-pre-line text-foreground">
        <strong className="block font-bold">{offer.name}</strong>
        {offer.price}
      </p>
      <p className="text-base text-foreground">{offer.description}</p>
      <Link
        href="/#contact"
        className="
          block rounded-sm pt-2 text-center text-lg font-medium text-foreground
          transition-colors focus-accessible hover:text-heading
        "
      >
        choisir
        <span className="sr-only"> la formule {offer.name}</span>
      </Link>
    </li>
  );
}
