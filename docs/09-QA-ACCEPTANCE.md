# QA & ACCEPTANCE — LCB

# 1. Validation technique

Doivent être verts :

```text
TYPECHECK=PASS
LINT=PASS
BUILD=PASS
2. Responsive
Tester :
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1366px
- 1920px
Aucun :
- overflow horizontal ;
- texte coupé ;
- bouton inaccessible ;
- image déformée.
3. Navigation
Tous les liens doivent fonctionner.
Tester :
- header ;
- menu mobile ;
- CTA ;
- footer ;
- liens légaux.
4. WhatsApp
Vérifier :
- numéro correct ;
- ouverture application / web ;
- message pré-rempli ;
- aucune URL cassée.
5. Téléphone
Vérifier :
+242 06 191 59 40
+242 05 083 62 40
6. Adresse
Doit afficher exactement :
Pointe-Noire, Fond Tié-Tié, Ndaka Soussou, en face de la clinique Rocher d'Âge.

7. Horaires
Doit afficher :
Du lundi au vendredi, de 08h30 à 17h30.

8. Formulaire
Tester :
- formulaire valide ;
- champ manquant ;
- mauvais téléphone ;
- message trop long ;
- spam ;
- succès ;
- erreur serveur ;
- email reçu.
9. Sécurité
Vérifier :
- aucun secret client ;
- aucun .env commité ;
- aucune API key visible ;
- validation serveur ;
- pas de donnée sensible collectée.
10. SEO
Vérifier :
- title ;
- description ;
- canonical ;
- Open Graph ;
- sitemap ;
- robots ;
- favicon.
11. Accessibilité
Tester :
- clavier ;
- focus ;
- contrastes ;
- alt ;
- labels ;
- erreurs ;
- titres H1/H2 cohérents.
12. Performance
Objectif Lighthouse :
PERFORMANCE>=90
ACCESSIBILITY>=90
BEST_PRACTICES>=90
SEO>=90
Une dérogation doit être documentée.
13. Console
Production :
CONSOLE_ERRORS=0
14. Network
Aucun :
- 404 ;
- 500 ;
- asset cassé ;
- requête inutile répétée.
15. Contenu
Vérifier qu'aucun ancien terme problématique n'est exposé :
- LCB Bank ;
- banque ;
- compte courant ;
- dépôt bancaire ;
- crédit garanti.
Sauf validation documentaire ultérieure.
16. Definition of Done
FUNCTIONAL=PASS
RESPONSIVE=PASS
CONTENT=PASS
SEO=PASS
ACCESSIBILITY=PASS
SECURITY=PASS
FORM=PASS
WHATSAPP=PASS
PHONE=PASS
BUILD=PASS
VERCEL=PASS
Seulement après ces validations :
LCB_V1=ACCEPTED