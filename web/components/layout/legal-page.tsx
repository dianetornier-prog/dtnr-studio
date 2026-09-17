import PageLayout from "@/components/layout/page-layout";

type LegalPageProps = {
  title: string;
  headingId: string;
  updatedAt: string;
  children: React.ReactNode;
};

export function LegalPage({
  title,
  headingId,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <PageLayout
      ariaLabelledby={headingId}
      backHref="/#accueil"
      backLabel="Retour à l’accueil"
      className="
        mx-auto flex min-h-dvh w-full max-w-[900px] flex-col gap-10 p-5 pb-16
      "
    >
      <header className="flex flex-col items-center gap-3">
        <h1
          id={headingId}
          className="
            text-center font-title text-3xl font-light text-heading md:text-5xl
            lg:text-7xl
          "
        >
          {title}
        </h1>
        <p className="text-sm text-foreground">
          Dernière mise à jour le {updatedAt}
        </p>
      </header>

      <article className="flex flex-col gap-10 text-left">{children}</article>
    </PageLayout>
  );
}

type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2
        className="
          font-title text-2xl font-light text-heading md:text-3xl
        "
      >
        {title}
      </h2>
      <div
        className="
          flex flex-col text-base leading-relaxed md:text-lg
        "
      >
        {children}
      </div>
    </section>
  );
}
