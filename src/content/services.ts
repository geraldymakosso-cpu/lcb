export const services = [
  {
    id: "commercants",
    title: "Solutions commerçants",
    description:
      "La Congolaise Business étudie les besoins liés au stock, à la trésorerie et au développement de votre activité commerciale.",
    href: "/commercants",
    icon: "shop",
    iconSrc: "/icons/icone-main-piece.png",
  },
  {
    id: "entrepreneurs",
    title: "Entrepreneurs / PME",
    description:
      "Un accompagnement pour clarifier votre besoin, structurer votre projet et étudier une solution adaptée.",
    href: "/entrepreneurs",
    icon: "briefcase",
    iconSrc: "/icons/icone-graphique-croissance.png",
  },
  {
    id: "salaries",
    title: "Solutions salariés",
    description:
      "Présentez votre projet ou besoin à un conseiller de La Congolaise Business pour une étude au cas par cas.",
    href: "/contact?profil=salarie",
    icon: "user",
    iconSrc: "/icons/icone-echange-personnes.png",
  },
  {
    id: "accompagnement",
    title: "Conseil & accompagnement",
    description:
      "Un conseiller à vos côtés pour mieux formuler votre besoin et préparer les prochaines étapes.",
    href: "/contact?besoin=accompagnement",
    icon: "compass",
    iconSrc: "/icons/icone-poignee-main.png",
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
