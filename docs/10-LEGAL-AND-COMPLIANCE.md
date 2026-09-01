# LEGAL & COMPLIANCE GUARDRAILS — LCB V1

## 1. Objet

Ce document ne constitue pas un avis juridique. Il définit les garde-fous éditoriaux, fonctionnels et techniques applicables au site LCB tant que certaines activités ou formulations n'ont pas été juridiquement confirmées.

## 2. Statut connu

**La Congolaise Business**  
Forme juridique : **Entreprise Individuelle**  
Positionnement déclaré : **Cabinet de gestion et d'accompagnement**

LCB est présentée sur le site comme accompagnateur et intermédiaire. La mise à disposition du financement relève d'un partenaire financeur non nommé publiquement.

## 3. Principe

Le site doit présenter uniquement les activités que LCB est effectivement autorisée à exercer et uniquement selon les formulations validées dans le SSOT.

## 4. Termes bloqués sans validation juridique

Ne pas publier automatiquement :

- Banque
- Bank
- Microfinance
- Établissement bancaire
- Établissement financier
- Établissement de crédit
- Compte courant
- Compte bancaire
- Dépôt bancaire
- Collecte de dépôts
- Livret bancaire
- Produit bancaire

Statut : `LEGAL_VALIDATION_REQUIRED`

## 5. Terminologie de substitution

Utiliser :

- cabinet de gestion et d'accompagnement ;
- solutions ;
- financement ;
- demande ;
- étude du besoin ;
- accompagnement ;
- conseiller LCB ;
- partenaire financeur ;
- mise à disposition du financement.

## 6. Promesses interdites

Ne jamais afficher :

- crédit garanti ;
- acceptation garantie ;
- financement garanti ;
- argent immédiat garanti ;
- prêt sans condition ;
- approbation automatique ;
- mise à disposition garantie le jour même.

Mention obligatoire :

> « Toute demande fait l'objet d'une étude. Le dépôt d'une demande ne garantit pas l'obtention d'un financement. »

La formulation « Les demandes reçues pendant nos horaires d'ouverture peuvent être prises en charge le jour même » décrit uniquement la prise en charge de la demande, pas son acceptation ni le décaissement.

## 7. Conditions financières

Ne pas publier sans validation spécifique :

- taux ;
- frais ;
- commissions ;
- échéances ;
- durée ;
- garanties ;
- pénalités ;
- critères d'éligibilité universels ;
- rendement ;
- mécanisme détaillé d'Épargne.

La formulation publique validée est :

> « Des solutions à partir de 27 000 FCFA, selon votre profil et l'étude de votre besoin. »

Elle ne doit pas être présentée comme une condition contractuelle universelle ni comme une garantie d'éligibilité.

## 8. Épargne

Le site peut utiliser la formulation :

> « Votre objectif, votre budget, votre rythme. »

La section peut indiquer que l'épargne est une décision personnelle organisée autour d'un objectif, d'un budget non chiffré et d'un rythme journalier, hebdomadaire ou adapté à l'organisation du client. Elle ne doit évoquer aucune étude ni approbation de dossier.

Les modalités sont communiquées par un conseiller. Aucun taux, rendement, montant chiffré, durée, garantie, condition de retrait ou mécanisme de conservation ne doit être publié tant qu'il n'est pas juridiquement et métier validé.

Le site ne doit pas présenter LCB comme une institution de dépôt.

## 9. Données personnelles

Le formulaire V1 collecte uniquement des données de contact et de préqualification validées :

- nom et prénom ;
- téléphone ;
- ville ;
- profil ;
- activité ;
- type de besoin ;
- montant indicatif ;
- message facultatif ;
- consentement.

## 10. Données sensibles interdites dans la V1

Ne pas collecter :

- pièce d'identité ;
- passeport ;
- compte bancaire ;
- relevé bancaire ;
- carte bancaire ;
- bulletin de salaire ;
- document administratif ;
- justificatif financier ;
- photo de document ;
- upload documentaire.

## 11. Consentement

Le formulaire doit comporter une case explicite de consentement permettant à LCB d'utiliser les informations transmises afin de recontacter l'utilisateur au sujet de sa demande.

La case ne doit jamais être précochée.

## 12. Conservation

La durée de conservation métier actuellement retenue est de **cinq ans**.

Cette durée est une décision de travail interne et **ne vaut pas validation juridique externe**. Elle doit être ajustée si une exigence légale, réglementaire ou métier différente est confirmée.

## 13. Confidentialité

La page `/confidentialite` doit préciser au minimum :

- données collectées ;
- finalité ;
- méthode de contact ;
- durée de conservation ;
- contact pour exercer les droits ;
- éléments restant à compléter le cas échéant.

## 14. Mentions légales

La page `/mentions-legales` doit contenir ou signaler comme à compléter :

- identité de l'entreprise ;
- responsable de publication ;
- adresse ;
- contacts ;
- RCCM ;
- NIU ;
- domaine ;
- email professionnel ;
- hébergeur ;
- informations légales disponibles.

Ne jamais inventer une valeur manquante.

## 15. Hébergeur

Le site est destiné à être hébergé sur **Vercel**.

Les informations légales exactes et définitives de l'hébergeur doivent être vérifiées au moment de la mise en production juridique finale.

## 16. Gate juridique

Avant acceptation finale de la V1 :

```text
LEGAL_NAME=CONFIRMED
BUSINESS_STATUS=CONFIRMED
CONTACTS=CONFIRMED
OFFERS=CONFIRMED
FINANCIAL_TERMS=CONFIRMED
PRIVACY_TEXT=CONFIRMED
LEGAL_NOTICE=CONFIRMED
```

Toute information non confirmée doit rester générique, être marquée à compléter ou être retirée.
