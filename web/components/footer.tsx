import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-foreground/20">
      <div className="container mx-auto flex flex-col items-center  px-4 py-6">
        <p className="text-center text-sm text-gray-500">
          DTNR Studio &copy; {new Date().getFullYear()} Tous droits réservés.
        </p>
        <nav aria-label="Informations légales">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            <li>
              <Link
                href="/mentions-legales"
                className="
                  rounded-sm text-sm text-gray-500 focus-accessible
                  transition-colors hover:text-heading
                "
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="
                  rounded-sm text-sm font-light text-gray-500 focus-accessible
                  transition-colors hover:text-heading
                "
              >
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
