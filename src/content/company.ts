export const company = {
  name: "La Congolaise Business",
  acronym: "LCB",
  descriptor: "Cabinet de gestion et d'accompagnement",
  legalForm: "Entreprise Individuelle",
  createdYear: 2025,
  tagline: "Un commerçant, une solution de financement.",
  institutional:
    "LCB est un cabinet local de gestion et d'accompagnement qui facilite l'accès à des solutions de financement et accompagne les clients dans la structuration de leurs besoins.",
  origin:
    "LCB est née de la volonté de répondre aux difficultés d'accès au financement tout en accompagnant la structuration et le développement des petits commerces et activités économiques.",
  mission:
    "Faciliter l'accès à des solutions de financement et accompagner les clients dans la structuration de leurs besoins.",
  ambition:
    "Étendre progressivement l'accompagnement de LCB au-delà de Pointe-Noire et à travers le Congo.",
  fundingNotice:
    "Toute demande fait l'objet d'une étude. Le dépôt d'une demande ne garantit pas l'obtention d'un financement.",
  minimumAmount: "27 000 FCFA",
  address:
    "Pointe-Noire, Fond Tié-Tié, Ndaka Soussou, en face de la clinique Rocher d'Âge",
  hours: "Du lundi au vendredi : 08h30 à 17h30",
  whatsapp: "+242 06 191 59 40",
  phone: "+242 05 083 62 40",
  phoneHref: "tel:+242050836240",
} as const;

export const profiles = [
  {
    title: "Commerçants",
    description:
      "Pour renouveler un stock, saisir une opportunité ou faire avancer une activité de proximité.",
    href: "/commercants",
    eyebrow: "Cœur de cible",
  },
  {
    title: "Entrepreneurs / PME",
    description:
      "Pour structurer un besoin professionnel, développer une activité ou préparer un projet.",
    href: "/entrepreneurs",
    eyebrow: "Développement",
  },
  {
    title: "Salariés",
    description:
      "Pour présenter un besoin ou un projet personnel et échanger avec un conseiller de La Congolaise Business.",
    href: "/salaries",
    eyebrow: "Étude au cas par cas",
  },
] as const;

export const processSteps = [
  "Prise de contact",
  "Préqualification",
  "Constitution du dossier",
  "Étude",
  "Décision du partenaire financeur",
  "Mise à disposition",
  "Accompagnement / suivi",
] as const;
