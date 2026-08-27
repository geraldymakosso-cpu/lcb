export const company = {
  name: "La Congolaise Business",
  shortName: "LCB",
  descriptor: "Cabinet de gestion et d'accompagnement",
  legalForm: "Entreprise Individuelle",
  tagline: "Un commerçant, une solution de financement.",
  institutional:
    "LCB accompagne les commerçants, entrepreneurs et porteurs de projets avec des solutions de gestion, d'accompagnement et de financement adaptées à leurs besoins.",
  address:
    "Pointe-Noire, Fond Tié-Tié, Ndaka Soussou, en face de la clinique Rocher d'Âge",
  hours: "Du lundi au vendredi : 08h30 à 17h30",
  phonePrimary: "+242 06 191 59 40",
  phoneSecondary: "+242 05 083 62 40",
  phonePrimaryHref: "tel:+242061915940",
  phoneSecondaryHref: "tel:+242050836240",
} as const;

export const profiles = [
  {
    title: "Commerçants des marchés",
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
      "Pour présenter un besoin ou un projet personnel et échanger avec un conseiller LCB.",
    href: "/solutions#salaries",
    eyebrow: "Étude au cas par cas",
  },
] as const;

export const processSteps = [
  "Prise de contact",
  "Préqualification",
  "Constitution du dossier",
  "Étude",
  "Validation",
  "Mise à disposition",
  "Accompagnement / suivi",
] as const;
