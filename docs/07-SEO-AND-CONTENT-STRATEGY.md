# SEO and Content Strategy - LCB V1

## Cibles SEO
LCB Pointe-Noire, La Congolaise Business, accompagnement commerçants Pointe-Noire, financement commerçant Pointe-Noire, solutions commerçants Pointe-Noire, accompagnement entrepreneurs Pointe-Noire, PME Pointe-Noire, épargne LCB. « Épargne Pointe-Noire » est seulement descriptif et sans promesse.

## Localisation
Utiliser naturellement Pointe-Noire, Fond Tié-Tié et Ndaka Soussou. Ne pas inventer de marchés, de zones ou de coordonnées géographiques.

## Implémentation
Chaque route publique possède un titre, une description, une canonical et des métadonnées Open Graph/Twitter via `src/lib/metadata.ts`. Le layout définit la base, les données structurées `ProfessionalService`, robots et le sitemap. La route `/salaries` est indexée ; Épargne est une ancre descriptive de `/solutions`.

Le domaine public final étant absent du corpus, `NEXT_PUBLIC_SITE_URL` doit être renseigné en production avant indexation définitive. Ne pas créer de profil Google Business, réseaux sociaux ou analytics dans le code sans données et validation.
