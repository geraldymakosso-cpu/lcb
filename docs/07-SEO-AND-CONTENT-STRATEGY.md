# SEO & CONTENT STRATEGY — LCB

# 1. Objectif

Positionner LCB comme un acteur local d'accompagnement des commerçants et entrepreneurs à Pointe-Noire.

---

# 2. Zone géographique

Priorité :

**Pointe-Noire, République du Congo**

---

# 3. Requêtes potentielles

À travailler avec prudence selon validation juridique :

- LCB Pointe-Noire
- La Congolaise Business
- financement commerçant Pointe-Noire
- financement commerçant Congo
- accompagnement commerçants Pointe-Noire
- financement entrepreneur Pointe-Noire
- accompagnement PME Congo
- cabinet de gestion Pointe-Noire
- solutions pour commerçants Pointe-Noire

---

# 4. Intentions

## Navigation

Utilisateur recherche directement :

- LCB ;
- La Congolaise Business.

## Commercial

Utilisateur recherche une solution :

- financer stock ;
- financement commerçant ;
- accompagnement PME.

## Local

Utilisateur recherche :

- adresse LCB ;
- cabinet gestion Pointe-Noire ;
- financement commerçant Fond Tié-Tié.

---

# 5. Titles proposés

## Accueil

**LCB — Accompagnement et financement des commerçants à Pointe-Noire**

## Commerçants

**Solutions pour commerçants à Pointe-Noire | LCB**

## Entrepreneurs

**Accompagnement entrepreneurs et PME | LCB**

## Contact

**Contact et agence LCB à Pointe-Noire**

---

# 6. Meta descriptions

Ne pas dépasser une longueur excessive.

Exemple accueil :

> La Congolaise Business accompagne les commerçants, entrepreneurs et PME à Pointe-Noire avec des solutions adaptées à leurs besoins.

---

# 7. Contenu local

Inclure naturellement :

- Pointe-Noire ;
- Fond Tié-Tié ;
- Ndaka Soussou ;
- commerçants ;
- entrepreneurs.

Éviter le keyword stuffing.

---

# 8. Google Business

À prévoir hors code :

- création ou optimisation Google Business Profile ;
- adresse ;
- horaires ;
- téléphone ;
- photos ;
- lien vers le site.

---

# 9. Réseaux sociaux

À créer progressivement :

1. Facebook
2. TikTok
3. LinkedIn si pertinent
4. WhatsApp Business

Les mêmes éléments d'identité doivent être utilisés sur toutes les plateformes.

---

# 10. Contenus futurs

Après V1 :

- conseils pour commerçants ;
- gestion de stock ;
- organisation financière ;
- préparation d'un dossier ;
- témoignages réels ;
- actualités LCB.

Ne pas créer un blog dans V1 sans besoin réel.
docs/08-IMPLEMENTATION-ROADMAP.md
# IMPLEMENTATION ROADMAP — LCB

# WAVE 0 — Bootstrap

Objectif :

obtenir un environnement propre.

Critères :

- Next.js ;
- TypeScript ;
- Tailwind ;
- Git ;
- GitHub ;
- Vercel ;
- develop ;
- main ;
- build vert.

Statut attendu avant développement :

```text
BOOTSTRAP=PASS
WAVE 1 — Documentation & SSOT
Actions :
- intégrer /docs ;
- vérifier les contradictions ;
- figer les décisions ;
- charger les assets ;
- inventorier les éléments manquants.
Gate :
SSOT_LOADED=PASS
WAVE 2 — Design System
Créer :
- palette ;
- typographie ;
- spacing ;
- boutons ;
- cartes ;
- inputs ;
- header ;
- footer ;
- containers ;
- états interaction.
Le logo doit rester facilement remplaçable tant qu'il n'est pas validé.
Gate :
DESIGN_SYSTEM=PASS
WAVE 3 — Homepage
Implémenter :
- Header ;
- Hero ;
- cibles ;
- solutions ;
- focus commerçants ;
- processus ;
- avantages ;
- contact ;
- FAQ ;
- CTA final ;
- Footer.
Gate :
HOME_RESPONSIVE=PASS
WAVE 4 — Pages secondaires
Créer :
- Solutions
- Commerçants
- Entrepreneurs
- À propos
- FAQ
- Contact
Gate :
PAGES=PASS
WAVE 5 — Conversion
Implémenter :
- WhatsApp ;
- appel ;
- formulaire ;
- email ;
- confirmation.
Gate :
LEAD_FLOW=PASS
WAVE 6 — SEO / Legal
Implémenter :
- metadata ;
- sitemap ;
- robots ;
- Open Graph ;
- mentions légales ;
- confidentialité ;
- consentement formulaire.
Gate :
SEO_LEGAL=PASS
WAVE 7 — QA
Valider :
- mobile ;
- tablet ;
- desktop ;
- navigation ;
- formulaire ;
- WhatsApp ;
- téléphone ;
- accessibilité ;
- Lighthouse ;
- absence d'erreurs console.
Gate :
QA=PASS
WAVE 8 — Production
Actions :
- domaine ;
- DNS ;
- mail ;
- Vercel env ;
- production ;
- smoke tests ;
- analytics.
Gate :
PRODUCTION=PASS
Règle
Aucune Wave ne peut être certifiée sans preuve d'exécution.