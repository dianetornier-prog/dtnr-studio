import SectionLayout from "../layout/section-layout";
import Image from "next/image";

export function About() {
  return (
    <SectionLayout
      id="a-propos"
      ariaLabelledby="a-propos-heading"
      className="flex scroll-mt-16 px-4"
    >
      <div
        className="
          flex w-full flex-col gap-10 py-20 md:gap-40
        "
      >
        <h2
          className="
            m-0 mx-auto p-0 text-center font-title text-[50px] leading-none
            font-light tracking-[-0.05em] text-foreground md:text-[100px]
            lg:text-[150px]
          "
        >
          Le studio
        </h2>
        <div
          className="
            relative md:min-h-[480px]
          "
        >
          <Image
            src="/assets/3.webp"
            alt=""
            width={1200}
            height={800}
            aria-hidden
            sizes="(max-width: 768px) 100vw, 60vw"
            className="
              pointer-events-none absolute inset-x-0 z-0 mx-auto h-auto
              max-h-[600px] w-full object-cover opacity-70 md:inset-x-auto
              md:top-[-120px] md:right-0 md:w-[60vw]
            "
          />

          <p
            className="
              relative z-10 mx-auto w-full max-w-[1200px] bg-background/50 p-4
              text-justify text-base md:text-2xl
            "
          >
            <strong>Imaginer. Visualiser. Resenter.</strong>
            <br /> <br /> Studio de décoration intérieure et de visualisation 3D
            basé à Senlis (60300), nous accompagnons particuliers et
            professionnels dans la transformation de leurs espaces où qu'ils
            soient. Grâce à nos services d'E-Design sur-mesure, plus besoin
            d'être sur place pour donner vie à votre projet.
            <br />
            <br /> Rendus photoréalistes, mise en scène soignée, regard
            d'architecte d'intérieur : nous donnons corps à une idée avant sa
            concrétisation. Chaque projet est pensé comme une histoire, la vôtre
            avec une exigence constante sur la précision et l'esthétique.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
