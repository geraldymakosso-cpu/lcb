# LCB — La Congolaise Business

## Projet

Site vitrine officiel de La Congolaise Business.

## Stack

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- ESLint
- Vercel

## Package manager

npm

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

## Typecheck

```bash
npx tsc --noEmit
```

## Lint

```bash
npm run lint
```

## Build

```bash
npm run build
```

## Branches

- `develop` — intégration / développement quotidien
- `main` — production stable

Ne jamais développer directement sur `main`.

## Déploiement

Vercel. Le déploiement est automatique :

- `main` → Production
- `develop` + Pull Requests → Preview

## Documentation

Voir `/docs`
