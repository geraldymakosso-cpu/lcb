# PROJECT CHARTER — LCB V1

## 1. Identité

**Nom :** La Congolaise Business  
**Sigle :** LCB  
**Forme juridique :** Entreprise Individuelle  
**Création :** 2025  
**Positionnement :** Cabinet de gestion et d'accompagnement  
**Type de produit numérique :** Site vitrine institutionnel et commercial  
**Version :** V1

## 2. Vision

Créer une présence numérique professionnelle permettant à LCB de présenter clairement ses activités, de devenir facilement accessible à ses publics prioritaires et de convertir les visiteurs en prospects qualifiés.

Le site doit refléter la proximité de LCB avec les commerçants et petites activités économiques, sans présenter LCB comme une banque, une microfinance ou un prêteur direct.

## 3. Objectifs principaux

Le site doit permettre à un visiteur de :

1. comprendre ce qu'est LCB ;
2. découvrir les trois familles publiques de solutions : Financement, Épargne, Conseil & accompagnement ;
3. identifier rapidement si LCB peut répondre à son besoin selon son profil ;
4. contacter LCB sur WhatsApp ;
5. appeler un conseiller ;
6. connaître l'emplacement de l'agence ;
7. soumettre une demande via un formulaire de préqualification.

## 4. Cibles

Ordre canonique :

1. **Commerçants** ;
2. **Entrepreneurs / PME** ;
3. **Salariés**.

## 5. Positionnement commercial

### Positionnement général

> LCB accompagne les commerçants, entrepreneurs, PME et salariés avec des solutions de gestion, d'accompagnement et de financement adaptées à leurs besoins.

### Signature

> Un commerçant, une solution de financement.

### Garde-fou obligatoire

> Toute demande fait l'objet d'une étude. Le dépôt d'une demande ne garantit pas l'obtention d'un financement.

LCB agit comme cabinet d'accompagnement et d'intermédiation. La mise à disposition du financement relève d'un partenaire financeur non nommé publiquement.

## 6. Périmètre V1

### Inclus

- site responsive et mobile-first ;
- accueil ;
- Solutions ;
- Commerçants ;
- Entrepreneurs / PME ;
- Salariés ;
- À propos ;
- FAQ ;
- Contact ;
- WhatsApp ;
- téléphone ;
- formulaire de préqualification ;
- localisation agence ;
- SEO ;
- pages légales ;
- sitemap ;
- analytics simple ;
- déploiement Vercel.

### Hors périmètre

- espace client ;
- authentification ;
- CRM complet ;
- gestion des prêts ;
- scoring ;
- gestion des remboursements ;
- paiement en ligne ;
- base de données métier ;
- collecte de pièces d'identité ;
- upload documentaire ;
- gestion opérationnelle des partenaires.

## 7. Navigation

`NAVIGATION_MODEL=OFFER_AND_AUDIENCE`

- **Solutions** : Financement, Épargne, Conseil & accompagnement ;
- **Pour qui ?** : Commerçants, Entrepreneurs & PME, Salariés.

Épargne reste une section de `/solutions` et n'a pas de route autonome dans la V1.

## 8. Hébergement et architecture

**Plateforme cible :** Vercel.

Architecture privilégiée :

- Next.js ;
- React ;
- TypeScript ;
- Tailwind CSS ;
- GitHub ;
- Vercel ;
- aucune base de données métier en V1 ;
- aucune authentification en V1.

## 9. Principe de conception

La V1 doit rester simple, rapide, professionnelle, mobile-first, maintenable et peu coûteuse à exploiter. Elle ne doit pas être sur-architecturée.

## 10. Critère de succès

Une visite doit permettre de comprendre l'offre, de joindre LCB à Pointe-Noire et de transmettre une préqualification sans données sensibles. La mise en production finale reste conditionnée aux éléments externes non encore renseignés dans le SSOT et aux gates QA/légaux.