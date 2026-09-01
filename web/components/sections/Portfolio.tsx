"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import kitchen from "@/public/assets/8.webp";
import livingRoom from "@/public/assets/9.webp";
import house from "@/public/assets/10.webp";
import entryway from "@/public/assets/11.webp";
import diningRoom from "@/public/assets/12.webp";

import SectionLayout from "../layout/section-layout";
import { CustomButton } from "../ui/CustomButton";

const tileSizes = "(max-width: 768px) 50vw, 40vw";

export function Portfolio() {
  const router = useRouter();

  return (
    <SectionLayout
      id="portfolio"
      ariaLabelledby="portfolio-heading"
      className="
        flex max-w-none! scroll-mt-10 flex-col px-0 py-6 md:px-5 xl:py-10
      "
    >
      <div className="flex w-full flex-col items-center gap-6">
        <div
          className="
            relative aspect-2/1 w-[90vw] xl:w-full
            xl:max-w-[min(98vw,2400px,165vh)]
          "
        >
          <Image
            src={kitchen}
            alt=""
            aria-hidden
            sizes={tileSizes}
            className="absolute top-[10%] left-[0%] z-0 h-auto w-[55%]"
          />

          <Image
            src={house}
            alt=""
            aria-hidden
            sizes={tileSizes}
            className="absolute top-[0%] left-[48%] z-2 h-auto w-[45%]"
          />

          <Image
            src={livingRoom}
            alt=""
            aria-hidden
            sizes={tileSizes}
            className="
              box-shadow-lg absolute top-[58%] left-[14%] z-1 h-auto w-[36%]
            "
          />

          <Image
            src={entryway}
            alt=""
            aria-hidden
            sizes={tileSizes}
            className="
              box-shadow-lg absolute top-[52%] left-[33%] z-2 h-auto w-[32%]
            "
          />

          <Image
            src={diningRoom}
            alt=""
            aria-hidden
            sizes={tileSizes}
            className="
              box-shadow-lg absolute top-[45%] left-[52%] z-1 h-auto w-[48%]
            "
          />

          <div
            className="
              box-shadow-lg pointer-events-none absolute inset-0 z-20 flex
              items-center justify-center
            "
          >
            <h2
              id="portfolio-heading"
              className="
                box-shadow-lg bg-heading px-15 pt-2 pb-0 font-title text-[30px]
                leading-none font-light text-primary-foreground md:text-[80px]
              "
            >
              PORTFOLIO
            </h2>
          </div>
        </div>

        <CustomButton
          outline
          className="
            mx-auto -mt-6.25 md:-mt-8
          "
          onClick={() => router.push("/portfolio-detail")}
        >
          VOIR NOS PROJETS
        </CustomButton>
      </div>
    </SectionLayout>
  );
}
