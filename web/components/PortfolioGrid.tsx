"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import type { PortfolioProject } from "@/lib/types";

import p14 from "@/public/assets/14.webp";
import p15 from "@/public/assets/15.webp";
import p16 from "@/public/assets/16.webp";
import p17 from "@/public/assets/17.webp";
import p18 from "@/public/assets/18.webp";
import p19 from "@/public/assets/19.webp";
import p20 from "@/public/assets/20.webp";
import p21 from "@/public/assets/21.webp";
import p22 from "@/public/assets/22.webp";

const projects: readonly PortfolioProject[] = [
  {
    image: p14,
    alt: "Cuisine ouverte en noyer avec îlot-bar en pierre claire et tabourets en cuir cognac",
  },
  {
    image: p15,
    alt: "Salon aménagé par DTNR Studio",
  },
  {
    image: p16,
    alt: "Cuisine en longueur avec verrière d’atelier, crédence rose et îlot bordeaux",
  },
  {
    image: p17,
    alt: "Salle à manger ouverte sur un escalier, avec porte coulissante en bois cintrée",
  },
  {
    image: p18,
    alt: "Chambre parisienne aux moulures beiges, lit capitonné et lustre en verre soufflé",
  },
  {
    image: p19,
    alt: "Cuisine encastrée blanche sur un mur terracotta, avec étagère d’angle en chêne",
  },
  {
    image: p20,
    alt: "Salle de bains en mosaïque brune avec baignoire îlot et double vasque en pierre",
  },
  {
    image: p21,
    alt: "Coin repas avec banquette sur mesure, store en bois et table ronde blanche",
  },
  {
    image: p22,
    alt: "Séjour lumineux avec table en verre, chaises design et suspensions en rotin",
  },
];

export function PortfolioGrid() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openProject = (index: number) => {
    setActiveIndex(index);
    dialogRef.current?.showModal();
  };

  const closeProject = () => {
    dialogRef.current?.close();
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <ul className="grid grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <li key={project.image.src}>
            <button
              type="button"
              onClick={() => openProject(index)}
              className="
                relative aspect-square w-full cursor-pointer overflow-hidden
                focus-accessible transition-transform duration-300 hover:z-20
                hover:scale-105
              "
              aria-label={`Agrandir l’image : ${project.alt}`}
            >
              <Image
                placeholder="blur"
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 33vw, 220px"
                className="object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[75%]
          -translate-x-1/2 -translate-y-1/2 rounded-lg bg-heading/30
        "
      />

      <dialog
        ref={dialogRef}
        aria-label="Aperçu de la réalisation"
        onClose={() => setActiveIndex(null)}
        className="
          fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent
          p-0 backdrop:bg-transparent
        "
      >
        {activeIndex !== null ? (
          <div
            className="
              relative flex h-full w-full items-center justify-center p-4
            "
          >
            <button
              type="button"
              onClick={closeProject}
              aria-label="Fermer l’aperçu (touche Échap)"
              className="absolute inset-0 cursor-pointer focus-accessible"
            />

            <figure
              className="
                pointer-events-none relative aspect-video w-[90vw] max-w-4xl
                border-5 border-heading bg-background md:border-10 lg:mt-20
              "
            >
              <Image
                placeholder="blur"
                src={projects[activeIndex].image}
                alt={projects[activeIndex].alt}
                fill
                sizes="(max-width: 1024px) 90vw, 900px"
                className="rounded-lg object-fill"
              />
              <figcaption className="sr-only">
                Réalisation {activeIndex + 1} sur {projects.length}
              </figcaption>
            </figure>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
