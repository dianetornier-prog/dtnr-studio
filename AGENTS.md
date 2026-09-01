# Instructions pour l'agent

## Règles strictes

### Terminal — interdiction par défaut
- NE JAMAIS exécuter de commande terminal sans **autorisation explicite** de l'utilisateur, demandée **au préalable** et **pour chaque commande**.
- Ne jamais lancer, redémarrer ou tuer le serveur de dev (`pnpm dev`, `pnpm start`, `kill`, `curl` de vérification, etc.). Le serveur de développement est **géré exclusivement par l'utilisateur**.
- Ne pas lancer de commande « juste pour vérifier », surtout pour des changements mineurs (taille de texte, couleur, classe Tailwind…).
- Si une vérification nécessite vraiment le terminal : **demander d'abord**, expliquer pourquoi, et attendre le feu vert.

## Notes projet

- Application Next.js (App Router) dans le dossier `web/`. Gestionnaire de paquets : **pnpm**.
- Tailwind CSS v4 : les design tokens (couleurs, polices, etc.) sont définis dans `web/app/globals.css`, dans le bloc `@theme`.
- Ajouter ou renommer un token dans `@theme` peut nécessiter un redémarrage du serveur dev + un hard refresh navigateur (`Cmd + Shift + R`). Ces actions sont à faire **par l'utilisateur**.
- Toujours soigner le SEO (HTML sémantique, hiérarchie des titres) et l'accessibilité (aria, focus visible, contrastes) à chaque ajout.
