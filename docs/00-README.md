# LCB — Documentation projet

## Projet

**LCB — La Congolaise Business**

Site vitrine institutionnel et commercial destiné à présenter LCB, ses solutions d'accompagnement et de financement, et à convertir les visiteurs en prospects.

---

## Source de vérité

Le dossier `/docs` constitue la documentation canonique du projet.

Toute implémentation fonctionnelle, éditoriale, UX/UI ou technique doit respecter ces documents.

En cas de contradiction :

1. `02-SSOT.md`
2. décision explicite du responsable projet ;
3. documentation spécialisée ;
4. code existant.

Le code ne doit jamais devenir une source de vérité supérieure au SSOT.

---

## Documents

| Document | Objet |
|---|---|
| `01-PROJECT-CHARTER.md` | Vision, objectifs, périmètre |
| `02-SSOT.md` | Décisions canoniques du projet |
| `03-FUNCTIONAL-SPEC.md` | Fonctionnalités et parcours |
| `04-CONTENT-AND-BRAND.md` | Marque, vocabulaire et contenus |
| `05-UX-UI-SPEC.md` | Direction UX/UI |
| `06-TECHNICAL-ARCHITECTURE.md` | Architecture technique |
| `07-SEO-AND-CONTENT-STRATEGY.md` | SEO et stratégie éditoriale |
| `08-IMPLEMENTATION-ROADMAP.md` | Waves d'implémentation |
| `09-QA-ACCEPTANCE.md` | QA, tests et Definition of Done |
| `10-LEGAL-AND-COMPLIANCE.md` | Garde-fous réglementaires et données |

---

## Statuts documentaires

Les informations utilisent les statuts suivants :

- `VALIDATED` : décision validée.
- `WORKING_DECISION` : décision de travail retenue en attendant confirmation définitive.
- `TBD` : information restant à déterminer.
- `BLOCKED` : ne doit pas être implémentée/publiée avant clarification.

---

## Règle générale

> NO DOCUMENTATION = NO FUNCTIONAL IMPLEMENTATION.

Aucune offre, condition financière, promesse commerciale ou fonctionnalité importante ne doit être inventée directement dans le code.