import Link from "next/link";

import type { PricingOffer } from "@/lib/types";

const cellClassName = "border-2 border-heading p-3 text-center font-medium";

type OffersTableProps = {
  offers: readonly PricingOffer[];
};

export function OffersTable({ offers }: OffersTableProps) {
  return (
    <table
      className="
        w-full border-collapse text-xl md:text-2xl
      "
    >
      <caption className="sr-only">
        Tableau comparatif des formules et tarifs DTNR Studio
      </caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Formule</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => (
          <tr key={offer.name}>
            <th
              scope="row"
              className={`
                ${cellClassName}
                w-[25%] pl-10 text-left whitespace-pre-line lg:pl-20
              `}
            >
              <strong className="block font-bold">{offer.name}</strong>
              {offer.price}
            </th>
            <td className={cellClassName}>{offer.description}</td>
            <td className={cellClassName}>
              <Link
                href="/#contact"
                className="
                  inline-block cursor-pointer border border-heading bg-heading
                  text-center font-title text-[16px] font-light tracking-wider
                  text-primary-foreground focus-accessible transition-opacity
                  hover:opacity-90 md:px-4 md:py-3 md:text-base lg:text-3xl
                "
              >
                Choisir
                <span className="sr-only"> la formule {offer.name}</span>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
