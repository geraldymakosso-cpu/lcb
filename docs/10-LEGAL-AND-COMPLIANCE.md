# LEGAL & COMPLIANCE GUARDRAILS — LCB

# 1. Objet

Ce document ne constitue pas un avis juridique.

Il définit les garde-fous éditoriaux et techniques applicables au site tant que certaines activités ou formulations n'ont pas été juridiquement confirmées.

---

# 2. Statut connu

**La Congolaise Business**

Forme juridique :

**Entreprise Individuelle**

Positionnement déclaré :

**Cabinet de gestion et d'accompagnement**

---

# 3. Principe

Le site doit présenter uniquement les activités que LCB est effectivement autorisée à exercer.

---

# 4. Termes bloqués sans validation

Ne pas publier automatiquement :

- Banque
- Bank
- Microfinance
- Établissement bancaire
- Établissement de crédit
- Compte courant
- Compte bancaire
- Dépôt bancaire
- Collecte de dépôts
- Livret bancaire
- Produit bancaire

Statut :

```text
LEGAL_VALIDATION_REQUIRED
5. Terminologie de substitution
Utiliser :
- cabinet de gestion et d'accompagnement ;
- solutions ;
- financement ;
- demande ;
- étude du besoin ;
- accompagnement ;
- conseiller LCB ;
- mise à disposition du financement.
6. Promesses interdites
Ne jamais afficher :
- crédit garanti ;
- acceptation garantie ;
- financement garanti ;
- argent immédiat garanti ;
- prêt sans condition ;
- approbation automatique.
7. Conditions financières
Les éléments suivants doivent être confirmés avant publication :
- montant minimum ;
- montant maximum ;
- frais ;
- taux ;
- échéances ;
- durée ;
- garanties ;
- pénalités ;
- critères d'éligibilité.
8. Montant 27 000 — 500 000 FCFA
Ce montant provient des supports historiques.
Statut :
WORKING_DECISION
Ne pas le considérer comme une condition contractuelle tant que le responsable LCB ne l'a pas confirmé.
9. Données personnelles
Le formulaire V1 collecte uniquement des données de contact et de préqualification.
Autorisé :
- nom ;
- prénom ;
- téléphone ;
- ville ;
- activité ;
- type de besoin ;
- montant indicatif ;
- message.
10. Données sensibles
Ne pas collecter dans V1 :
- pièce d'identité ;
- compte bancaire ;
- relevé bancaire ;
- carte bancaire ;
- salaire détaillé ;
- document administratif ;
- justificatif financier ;
- photo de document.
11. Consentement
Le formulaire doit comporter une case explicite du type :
J'accepte que LCB utilise les informations transmises afin de me recontacter au sujet de ma demande.

La case ne doit pas être pré-cochée.
12. Confidentialité
Créer une page :
/confidentialite
Elle doit préciser au minimum :
- données collectées ;
- finalité ;
- méthode de contact ;
- durée de conservation à définir ;
- contact pour exercer les droits.
13. Mentions légales
Créer :
/mentions-legales
Informations à compléter :
- identité de l'entreprise ;
- responsable ;
- adresse ;
- contacts ;
- informations légales disponibles ;
- hébergeur ;
- responsable de publication.
14. Hébergeur
Le site est destiné à être hébergé sur :
Vercel
Les informations légales exactes de l'hébergeur devront être vérifiées au moment de la mise en production.
15. Gate juridique
Avant production finale :
LEGAL_NAME=CONFIRMED
BUSINESS_STATUS=CONFIRMED
CONTACTS=CONFIRMED
OFFERS=CONFIRMED
FINANCIAL_TERMS=CONFIRMED
PRIVACY_TEXT=CONFIRMED
LEGAL_NOTICE=CONFIRMED
Toute information non confirmée doit rester générique ou être retirée.