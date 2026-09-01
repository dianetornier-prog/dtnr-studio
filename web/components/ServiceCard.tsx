import Image from "next/image";
import type { Service } from "@/lib/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className="
        group flex w-full flex-col overflow-hidden transition-[flex-grow]
        duration-300 lg:h-[80vh] lg:flex-1 lg:hover:flex-[1.8]
      "
    >
      <div
        className="
          relative aspect-square w-full lg:h-full lg:flex-1
        "
      >
        <Image
          src={service.image}
          alt={service.label}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="
            object-cover transition-[filter] duration-300 lg:grayscale
            lg:group-hover:grayscale-0
          "
        />
      </div>
      <div
        className="
          flex h-[170px] w-full flex-col justify-between bg-heading p-2
          lg:h-[35vh]
        "
      >
        <h3
          className="
            text-[16px] whitespace-pre-line text-primary-foreground
            md:text-[20px] lg:text-[24px]
          "
        >
          {service.label}
        </h3>
        <p
          className="
            font-ibm-plex-mono text-[40px] leading-none text-primary-foreground
            lg:text-[80px]
          "
        >
          {service.idx}.
        </p>
      </div>
    </div>
  );
}
