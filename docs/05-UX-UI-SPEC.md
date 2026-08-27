# UX/UI SPECIFICATION — LCB

# 1. Principe

Le site doit être :

**mobile-first**

et optimisé pour une consultation rapide depuis un smartphone.

---

# 2. Objectif UX principal

En moins de 10 secondes, l'utilisateur doit pouvoir :

1. identifier LCB ;
2. comprendre l'activité ;
3. savoir que LCB accompagne des commerçants ;
4. trouver WhatsApp ;
5. appeler.

---

# 3. Hiérarchie

Ordre recommandé sur l'accueil :

1. Header
2. Hero
3. Profils accompagnés
4. Solutions
5. Focus commerçants
6. Comment ça marche
7. Pourquoi LCB
8. À propos
9. Contact / agence
10. FAQ
11. CTA final
12. Footer

---

# 4. Navigation mobile

Header compact.

Contenu :

- logo ;
- bouton WhatsApp ;
- menu.

Le bouton WhatsApp ne doit pas être caché derrière plusieurs interactions.

---

# 5. Grille

Desktop :

- largeur maximum : environ 1200–1280 px ;
- contenu centré ;
- sections aérées.

Mobile :

- marges latérales cohérentes ;
- pas de débordement horizontal ;
- cartes en une colonne.

---

# 6. Typographie

Utiliser une famille moderne, lisible et adaptée au web.

Critères :

- excellente lisibilité ;
- support français ;
- poids 400/500/600/700 ;
- optimisation Next.js.

Ne pas multiplier les polices.

Maximum :

**1 famille principale**

éventuellement une seconde uniquement pour un besoin graphique démontré.

---

# 7. Couleurs

Palette officielle :

- vert ;
- jaune ;
- rouge.

Les valeurs précises seront définies pendant la phase design.

Règle :

> Les trois couleurs ne doivent jamais être utilisées avec la même intensité sur toute l'interface.

---

# 8. Boutons

## Primary

Vert.

Texte :

**Contacter sur WhatsApp**

## Secondary

Contour / neutre.

Exemples :

- Appeler
- En savoir plus
- Voir nos solutions

---

# 9. Cards

Utiliser des cartes pour :

- profils ;
- solutions ;
- avantages ;
- étapes.

Style :

- bordure légère ;
- peu ou pas d'ombre ;
- radius modéré ;
- icônes simples.

---

# 10. Photographies

Hero :

- une photographie forte ;
- sujet humain ;
- environnement local ;
- éviter les compositions avec texte intégré.

---

# 11. Animations

Autorisé :

- apparition légère ;
- hover subtil ;
- transitions courtes.

Interdit :

- parallaxe lourde ;
- vidéo automatique ;
- animation décorative permanente ;
- 3D ;
- effets WebGL inutiles.

---

# 12. Responsive breakpoints à tester

Minimum :

- 360 px
- 390 px
- 430 px
- 768 px
- 1024 px
- 1366 px
- 1920 px

---

# 13. Accessibilité

Minimum :

- contraste WCAG acceptable ;
- labels des champs ;
- focus visible ;
- navigation clavier ;
- alt text ;
- boutons ≥ zone tactile confortable ;
- erreurs formulaire compréhensibles.

---

# 14. Contact sticky

Sur mobile, envisager une barre d'action discrète :

- WhatsApp
- Appeler

Ne pas occuper excessivement l'écran.

---

# 15. États UI

Prévoir :

- loading formulaire ;
- succès ;
- erreur ;
- champ invalide ;
- lien indisponible ;
- état réseau faible.

---

# 16. Priorités

### P0

- navigation ;
- WhatsApp ;
- téléphone ;
- contenu lisible ;
- formulaire ;
- responsive.

### P1

- animations ;
- micro-interactions ;
- réseaux sociaux ;
- enrichissement graphique.

La décoration ne doit jamais retarder les P0.