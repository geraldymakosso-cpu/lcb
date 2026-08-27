# TECHNICAL ARCHITECTURE — LCB V1

# 1. Stack

- Next.js
- App Router
- React
- TypeScript
- Tailwind CSS
- GitHub
- Vercel

---

# 2. Architecture

```text
Utilisateur
    │
    ▼
Domaine LCB
    │
    ▼
Vercel
    │
    ▼
Next.js
 ├── Pages
 ├── Components
 ├── Content
 └── API contact
        │
        ▼
Service email
        │
        ▼
Boîte LCB
3. Pas de base V1
DATABASE=NONE
Ne pas installer :
- Supabase ;
- Prisma ;
- Drizzle ;
- PostgreSQL ;
- Firebase ;
- MongoDB.
4. Pas d'authentification
AUTH=NONE
Aucun :
- login ;
- compte client ;
- rôle ;
- session ;
- OAuth.
5. Structure
src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── forms/
│   └── ui/
├── content/
├── lib/
├── styles/
└── types/

public/
├── images/
├── logos/
└── icons/

docs/
6. Contenu
Centraliser les données métier :
src/content/company.ts
src/content/contact.ts
src/content/services.ts
src/content/faq.ts
src/content/navigation.ts
Éviter les coordonnées codées en dur dans plusieurs composants.
7. Routes
/
 /solutions
 /commercants
 /entrepreneurs
 /a-propos
 /faq
 /contact
 /mentions-legales
 /confidentialite
8. Formulaire
Architecture :
Client
↓
React Form
↓
Server validation
↓
Next.js route handler / server action
↓
Email provider
Aucune persistance en base pour V1.
9. Validation
Utiliser une validation serveur.
Zod autorisé.
Valider :
- nom ;
- téléphone ;
- longueur ;
- type de demande ;
- message ;
- consentement.
10. Anti-spam
Prévoir :
- honeypot ;
- rate limiting raisonnable ;
- validation serveur.
Ajouter CAPTCHA uniquement si le spam devient réel.
11. Variables
.env.example
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
CONTACT_EMAIL=
EMAIL_API_KEY=
Aucun secret dans Git.
12. Git
Branches :
main
develop
feature/*
fix/*
Politique :
feature/* -> develop -> main
13. Vercel
Production :
main
Preview :
develop
feature/*
PR
14. Domaine
Le domaine sera connecté ultérieurement.
Configurer :
- domaine canonique ;
- www redirection ;
- HTTPS ;
- DNS.
15. Email professionnel
Indépendant de Vercel.
DNS attendu selon fournisseur :
- MX ;
- SPF ;
- DKIM ;
- DMARC.
16. Images
Utiliser :
- next/image ;
- WebP / AVIF ;
- dimensions explicites ;
- lazy-loading hors Hero.
17. SEO technique
Prévoir :
- metadata API ;
- sitemap ;
- robots.txt ;
- Open Graph ;
- canonical ;
- favicon ;
- structured data locale si pertinent.
18. Performance
Objectifs :
Mesure	Cible
Performance Lighthouse	≥ 90
Accessibility	≥ 90
Best Practices	≥ 90
SEO	≥ 90


19. Sécurité
Minimum :
- HTTPS ;
- headers ;
- validation serveur ;
- dépendances maintenues ;
- secrets uniquement côté serveur ;
- aucune donnée sensible collectée ;
- aucune clé privée dans frontend.
20. Règle d'architecture
Do not add infrastructure until a real requirement exists.

La simplicité est une exigence du projet.