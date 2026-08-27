export const services = [
  {
    id: "commercants",
    title: "Solutions commerçants",
    description:
      "LCB étudie les besoins liés au stock, à la trésorerie et au développement de votre activité commerciale.",
    href: "/commercants",
    icon: "shop",
  },
  {
    id: "entrepreneurs",
    title: "Entrepreneurs / PME",
    description:
      "Un accompagnement pour clarifier votre besoin, structurer votre projet et étudier une solution adaptée.",
    href: "/entrepreneurs",
    icon: "briefcase",
  },
  {
    id: "salaries",
    title: "Solutions salariés",
    description:
      "Présentez votre projet ou besoin à un conseiller LCB pour une étude au cas par cas.",
    href: "/contact?profil=salarie",
    icon: "user",
  },
  {
    id: "accompagnement",
    title: "Conseil & accompagnement",
    description:
      "Un conseiller à vos côtés pour mieux formuler votre besoin et préparer les prochaines étapes.",
    href: "/contact?besoin=accompagnement",
    icon: "compass",
  },
] as const;

export const merchantNeeds = [
  "Renouveler un stock",
  "Renforcer la trésorerie d'activité",
  "Saisir une opportunité commerciale",
  "Développer un point de vente",
] as const;

export const entrepreneurNeeds = [
  "Développer une activité",
  "Financer un équipement professionnel",
  "Préparer un besoin d'exploitation",
  "Structurer un projet",
] as const;
