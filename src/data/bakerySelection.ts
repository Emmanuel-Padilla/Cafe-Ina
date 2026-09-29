export const bakeryPastries = {
  chocolatin: {
    name: { es: "Chocolatín", en: "Chocolatín" },
    description: {
      es: "Masa laminada con mantequilla, con una corteza de cocoa y relleno de chocolate amargo.",
      en: "Butter-laminated pastry with a cocoa crust and a dark chocolate filling.",
    },
  },
  nutella: {
    name: { es: "Croissant de nutella", en: "Nutella croissant" },
    description: {
      es: "Relleno de crema de avellana Nutella, decorado con nuez y más chocolate por encima.",
      en: "Filled with Nutella hazelnut spread and topped with walnuts and extra chocolate.",
    },
  },
  natural: {
    name: { es: "Croissant natural", en: "Plain croissant" },
    description: {
      es: "Masa laminada con mantequilla: la forma más pura del croissant.",
      en: "Butter-laminated dough: the croissant in its purest form.",
    },
  },
  berries: {
    name: { es: "Danés de frutos rojos", en: "Mixed berry Danish" },
    description: {
      es: "Masa laminada con crema pastelera y frutos rojos por encima.",
      en: "Laminated pastry with pastry cream and mixed berries on top.",
    },
  },
  pistachio: {
    name: { es: "Flor de croissant con pistache", en: "Pistachio croissant flower" },
    description: {
      es: "Masa laminada con mantequilla en forma de flor, rellena de crema pastelera con pistache.",
      en: "Flower-shaped butter-laminated pastry filled with pistachio pastry cream.",
    },
  },
  lotus: {
    name: { es: "Rol de lotus", en: "Lotus roll" },
    description: {
      es: "Rol de canela glaseado y cubierto de galleta Lotus.",
      en: "A glazed cinnamon roll topped with Lotus cookies.",
    },
  },
  apple: {
    name: { es: "Danés de manzana", en: "Apple Danish" },
    description: {
      es: "Masa laminada con mermelada de manzana hecha en casa, canela y azúcar morena.",
      en: "Laminated pastry with homemade apple jam, cinnamon, and brown sugar.",
    },
  },
  suisse: {
    name: { es: "Suisse", en: "Suisse" },
    description: {
      es: "Pan elaborado con la técnica de laminado cross, relleno de plátano, chocolate y crema pastelera.",
      en: "Pastry made using cross lamination, filled with banana, chocolate, and pastry cream.",
    },
  },
  cruffin: {
    name: { es: "Cruffin de Tiramisú", en: "Tiramisu cruffin" },
    description: {
      es: "Masa de croissant horneada en molde de muffin, crujiente y rellena de queso crema con nuestra mermelada de fresa hecha en casa.",
      en: "Crisp croissant dough baked in a muffin tin, filled with cream cheese and our homemade strawberry jam.",
    },
  },
  cinnamon: {
    name: { es: "Rol de canela", en: "Cinnamon roll" },
    description: {
      es: "Rol de canela con glaseado, cubierto con almendra o nuez.",
      en: "A glazed cinnamon roll topped with almonds or walnuts.",
    },
  },
} as const;

export const bakerySelection = [
  { id: "chocolatin", ...bakeryPastries.chocolatin, width: 1090, height: 1463 },
  { id: "croissant-de-nutella", ...bakeryPastries.nutella, width: 1272, height: 1600 },
  { id: "croissant-natural", ...bakeryPastries.natural, width: 970, height: 1600 },
  { id: "danes-de-frutos-rojos", ...bakeryPastries.berries, width: 1320, height: 1509 },
  { id: "flor-de-croissant-con-pistache", ...bakeryPastries.pistachio, width: 1200, height: 1600 },
  {
    id: "croissant-natural-y-danes-de-frutos-rojos",
    name: { es: "Croissant natural y danés de frutos rojos", en: "Plain croissant and mixed berry Danish" },
    description: {
      es: "Croissant de masa laminada con mantequilla y danés con crema pastelera y frutos rojos.",
      en: "Butter-laminated croissant and a Danish with pastry cream and mixed berries.",
    },
    width: 1196,
    height: 1600,
  },
] as const;

export const moreBakeryPastries = [
  bakeryPastries.lotus,
  bakeryPastries.apple,
  bakeryPastries.suisse,
  bakeryPastries.cruffin,
  bakeryPastries.cinnamon,
] as const;

export const bakeryAssortment = {
  src: "/images/panaderia/seleccion-pan-dulce.jpg",
  width: 1248,
  height: 1600,
  names: {
    es: ["Chocolatín", "Cruffin de Tiramisú", "Rol de canela", "Danés de fresa", "Croissant de almendra", "Danés de manzana", "Croissant de nutella", "Suisse", "Danés de frutos rojos"],
    en: ["Chocolatín", "Tiramisu cruffin", "Cinnamon roll", "Strawberry Danish", "Almond croissant", "Apple Danish", "Nutella croissant", "Suisse", "Mixed berry Danish"],
  },
} as const;
