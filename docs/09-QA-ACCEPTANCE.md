# QA and Acceptance - LCB V1

## Gates techniques
Exécuter `npm run typecheck`, `npm run lint` et `npm run build`. Le résultat réel est consigné dans le rapport de mise à jour.

## Parcours obligatoires
- La navigation desktop et mobile distingue Solutions (Financement, Épargne, Conseil & accompagnement) et Pour qui ? (Commerçants, Entrepreneurs & PME, Salariés).
- Toutes les routes publiques, header, menu mobile, footer, sitemap, robots et pages légales répondent sans lien cassé.
- WhatsApp utilise `https://wa.me/242061915940` avec le message général validé. L'appel utilise `tel:+242050836240`.
- Le formulaire valide les huit champs obligatoires côté navigateur et serveur, accepte le message facultatif, rejette le spam honeypot et ne collecte aucune donnée sensible.
- Les contenus Épargne peuvent présenter un objectif, un budget non chiffré et un rythme journalier, hebdomadaire ou personnalisé. Ils ne publient aucun taux, durée, montant chiffré, rendement, frais, retrait, garantie ou mécanisme de conservation.
- Le CTA Épargne « En savoir plus » ouvre un seul menu contextuel à deux choix. WhatsApp utilise un message dédié à l'Épargne ; « Prendre rendez-vous » ouvre le formulaire avec le besoin Épargne présélectionné. Le menu se ferme après chaque choix et lors d'un clic extérieur.
- Vérifier les largeurs 360, 390, 430, 768, 1024, 1366 et 1920 px, sans overflow, CTA inaccessible ni image déformée.
- Contrôler title, description, canonical, Open Graph, sitemap, robots, données structurées et favicon existant.

## Contrôle éditorial
Rechercher dans le rendu public les termes interdits définis par le SSOT. Toute occurrence doit être supprimée ou justifiée uniquement dans un contexte de conformité non public. Lighthouse cible : Performance, Accessibilité, Bonnes pratiques et SEO >= 90 ; une absence d'exécution doit être signalée, jamais déclarée réussie.
