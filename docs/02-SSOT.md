# LCB — MASTER SSOT

## 1. Objet

Ce document constitue la source de vérité principale du projet LCB.

Toute information contradictoire présente dans des anciens flyers, supports WhatsApp, prototypes, anciennes communications ou dans le code doit être ignorée au profit de ce document.

## 2. Statuts documentaires

- `VALIDATED` : décision validée.
- `WORKING_DECISION` : décision de travail retenue en attente de confirmation définitive.
- `TBD` : information restant à déterminer.
- `BLOCKED` : ne doit pas être publiée ou implémentée avant clarification.

Toute modification d'une décision `VALIDATED` doit être explicitement décidée, reportée ici, propagée aux documents secondaires puis seulement implémentée dans le code.

## 3. Identité officielle

| Élément | Valeur | Statut |
|---|---|---|
| Nom | La Congolaise Business | VALIDATED |
| Sigle | LCB | VALIDATED |
| Forme juridique | Entreprise Individuelle | VALIDATED |
| Création | 2025 | VALIDATED |
| Positionnement | Cabinet de gestion et d'accompagnement | VALIDATED |
| Site | Site vitrine institutionnel et commercial | VALIDATED |

## 4. Positionnement

LCB ne doit pas être présentée comme une banque, un établissement bancaire, une microfinance, un établissement de dépôt ou un prêteur direct.

Positionnement canonique :

> **Cabinet de gestion et d'accompagnement**

LCB agit comme accompagnateur et intermédiaire. La mise à disposition du financement relève d'un partenaire financeur non nommé publiquement.

Statut : `VALIDATED`

## 5. Messages canoniques

- Origine : « LCB est née de la volonté de répondre aux difficultés d'accès au financement tout en accompagnant la structuration et le développement des petits commerces et activités économiques. »
- Mission : « Faciliter l'accès à des solutions de financement et accompagner les clients dans la structuration de leurs besoins. »
- Ambition : « Étendre progressivement l'accompagnement de LCB au-delà de Pointe-Noire et à travers le Congo. »
- Signature : « Un commerçant, une solution de financement. »
- Mention obligatoire : « Toute demande fait l'objet d'une étude. Le dépôt d'une demande ne garantit pas l'obtention d'un financement. »

Statut : `VALIDATED`

## 6. Cibles

Ordre canonique :

1. **Commerçants** ;
2. **Entrepreneurs / PME** ;
3. **Salariés**.

Statut : `VALIDATED`

## 7. Adresse et zone

Zone prioritaire : **Pointe-Noire, République du Congo**.

Adresse : **Pointe-Noire, Fond Tié-Tié, Ndaka Soussou, en face de la clinique Rocher d'Âge**.

Statut : `VALIDATED`

## 8. Horaires

**Du lundi au vendredi : 08h30 à 17h30**

Statut : `VALIDATED`

## 9. Téléphones et WhatsApp

- WhatsApp primaire : **+242 06 191 59 40** — `https://wa.me/242061915940`.
- Appels : **+242 05 083 62 40** — `tel:+242050836240`.

Statut : `VALIDATED`

## 10. Email

L'adresse Gmail personnelle présente sur certains anciens supports ne doit pas être utilisée comme adresse principale du site.

Créer une adresse professionnelle sur le domaine officiel.

Statut : `TBD`

## 11. Réseaux sociaux

Les réseaux sociaux doivent être créés / structurés. Ne pas afficher de lien tant que le compte correspondant n'existe pas.

Statut : `TBD`

## 12. Identité graphique

Couleurs officielles :

- Vert ;
- Jaune ;
- Rouge.

Le logo et les couleurs actuellement validés présents dans le dépôt sont conservés. Les valeurs HEX/RGB qui ne sont pas documentées ne doivent pas être inventées.

## 13. Hiérarchie des CTA

### CTA primaire

**Contacter LCB sur WhatsApp**

### CTA secondaire principal

**Appeler un conseiller**

Autres actions : remplir le formulaire et se rendre à l'agence.

## 14. Navigation V1

`NAVIGATION_MODEL=OFFER_AND_AUDIENCE`

### Solutions

- Financement : `/solutions#financement` ;
- Épargne : `/solutions#epargne` ;
- Conseil & accompagnement : `/solutions#accompagnement`.

### Pour qui ?

- Commerçants : `/commercants` ;
- Entrepreneurs & PME : `/entrepreneurs` ;
- Salariés : `/salaries`.

Épargne n'a pas de route autonome en V1.

Statut : `VALIDATED`

## 15. Offre publique V1

### Commerçants

Besoins pouvant être étudiés : stock, équipement, aménagement, trésorerie, opportunité commerciale, développement.

Une activité de trois mois peut être demandée selon la solution ; le premier contact ne demande pas de formalisation administrative.

### Entrepreneurs / PME

Besoins pouvant être étudiés : équipement, matériel, stock, fonds de roulement, exécution de commande ou de marché.

L'entreprise doit déjà être en activité ; l'étude tient compte de la situation, de l'activité et des caractéristiques de l'entreprise.

### Salariés

Besoins pouvant être étudiés : projet personnel, équipement ou activité complémentaire.

L'étude peut tenir compte de l'ancienneté, du contrat et du revenu, sans seuil public annoncé.

### Épargne

Formulation publique :

> « Votre objectif, votre budget, votre rythme. »

La section présente l'épargne comme une décision personnelle, sans étude de dossier. LCB peut aider le visiteur à organiser un objectif, un budget et un rythme journalier, hebdomadaire ou adapté à son organisation.

Les modalités sont communiquées par un conseiller. Aucun montant chiffré, taux, rendement, durée, garantie, condition de retrait ou mécanisme de conservation n'est publié.

Le CTA unique « En savoir plus » ouvre deux choix : parler à un conseiller sur WhatsApp ou prendre rendez-vous via le formulaire avec le besoin Épargne présélectionné.

### Conseil et accompagnement

> « Un conseiller à vos côtés pour mieux structurer votre besoin et préparer les prochaines étapes. »

## 16. Montants et rapidité

Formulation publique autorisée :

> « Des solutions à partir de 27 000 FCFA, selon votre profil et l'étude de votre besoin. »

Ne pas présenter ce montant comme une condition contractuelle universelle ou comme une garantie d'éligibilité.

Formulation autorisée sur la prise en charge :

> « Les demandes reçues pendant nos horaires d'ouverture peuvent être prises en charge le jour même. »

Cela ne constitue ni une promesse d'acceptation ni une promesse de mise à disposition le jour même.

## 17. Formulaire et données

Le formulaire V1 sert uniquement à la préqualification.

Champs obligatoires :

- nom et prénom ;
- téléphone ;
- ville ;
- profil ;
- activité ;
- besoin ;
- montant souhaité ;
- consentement.

Message : facultatif.

Besoins : Financement, Épargne, Accompagnement, Information, Autre.

Aucun document ni donnée sensible ne doit être demandé.

Rétention métier de travail : **cinq ans**. Cette durée ne vaut pas validation juridique externe et doit être revue si une exigence légale ou métier différente est confirmée.

## 18. Vocabulaire canonique

### Utiliser

- financement ;
- solution de financement ;
- accompagnement ;
- solution ;
- conseiller LCB ;
- partenaire financeur ;
- demande ;
- dossier ;
- étude du besoin ;
- mise à disposition du financement ;
- commerçant ;
- entrepreneur ;
- PME ;
- salarié.

### Éviter sans validation juridique

- banque ;
- LCB Bank ;
- microfinance ;
- établissement bancaire ;
- établissement financier ;
- établissement de crédit ;
- compte bancaire ;
- compte courant ;
- dépôt bancaire ;
- collecte de dépôts ;
- produit bancaire ;
- livret bancaire ;
- épargne sécurisée ;
- crédit garanti ;
- acceptation garantie ;
- financement garanti.

## 19. Déploiement

| Élément | Valeur | Statut |
|---|---|---|
| Framework | Next.js | VALIDATED |
| Langage | TypeScript | VALIDATED |
| Styles | Tailwind CSS | VALIDATED |
| Repository | GitHub | VALIDATED |
| Hosting | Vercel | VALIDATED |
| Database V1 | Aucune | VALIDATED |
| Auth V1 | Aucune | VALIDATED |
| CMS V1 | Aucun | VALIDATED |

Branches : `feature/* -> develop -> main`.

Production : `main`. Preview : `develop`, `feature/*`, PR.

## 20. Éléments externes non renseignés

Ne pas inventer :

- domaine ;
- email professionnel ;
- RCCM ;
- NIU ;
- responsable de publication ;
- coordonnées légales définitives d'hébergement ;
- toute autre donnée administrative non fournie.

Statut : `TBD`.
