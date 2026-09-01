"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { CustomButton } from "@/components/ui/CustomButton";
import SectionLayout from "../layout/section-layout";

const DESIGN_WIDTH = 1780;
const H1_HEIGHT = 600;
const LEFT_BOTTOM_OFFSET = 280;
const RIGHT_BOTTOM_OFFSET = 310;
const BOTTOM_PADDING = 48;

const contentDesignHeight = H1_HEIGHT + RIGHT_BOTTOM_OFFSET + BOTTOM_PADDING;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateScale = () => {
      setScale(node.offsetWidth / DESIGN_WIDTH);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionLayout
      id="accueil"
      ariaLabelledby="accueil-heading"
      className="
        scroll-mt-18 overflow-x-clip pt-18 md:pt-5
      "
    >
      <div
        ref={containerRef}
        className="relative w-full "
        style={{ height: contentDesignHeight * scale }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left overflow-visible"
          style={{
            width: DESIGN_WIDTH,
            transform: `scale(${scale})`,
          }}
        >
          <div className="relative w-full">
            <h1
              id="accueil-heading"
              className="
                mt-5 w-full font-title text-[600px] leading-none
                tracking-[0.02em] text-heading
              "
            >
              DTNR
            </h1>

            <div
              className="
                absolute right-[40%] flex w-[550px] flex-col items-start gap-4
              "
              style={{ bottom: -LEFT_BOTTOM_OFFSET }}
            >
              <Image
                className="w-full rounded-lg object-contain"
                src="/assets/1.webp"
                alt=""
                width={550}
                height={550}
                sizes="550px"
                aria-hidden
              />
              <CustomButton className="translate-y-6" scrollToId="contact">
                Nous contacter
              </CustomButton>
            </div>

            <div
              className="absolute right-[12%] flex w-[600px] flex-col"
              style={{ bottom: -RIGHT_BOTTOM_OFFSET }}
            >
              <div className="flex flex-col items-end gap-2 py-4 leading-none">
                <span className="text-[50px] font-medium text-heading">
                  Studio
                </span>
                <span className="text-[25px] font-light italic">
                  Création 3D
                </span>
                <span className="text-[25px] font-light italic">
                  Architecture d&apos;intérieur - Décoration
                </span>
              </div>

              <div className="relative aspect-video w-full">
                <Image
                  src="/assets/2.webp"
                  alt="Intérieur minimaliste, aperçu des réalisations DTNR Studio"
                  fill
                  sizes="600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
