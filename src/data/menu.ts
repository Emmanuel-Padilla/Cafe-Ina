import type { MenuCategory } from "../types";

import { clientPhoto } from "./photos";
import orangeEspresso from "../assets/images/Orange-Espresso-Tonic-006.jpg";
import icedLatte from "../assets/images/Latte frío.jpg";

export const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    labelKey: "coffee",
    items: [
      {
        id: "orange-espresso-tonic",
        nameKey: "orange-espresso-tonic",
        descriptionKey: "orange-espresso-tonic",
        image: orangeEspresso,
        confirmed: true,
        tags: ["cold", "signature"],
      },
      {
        id: "specialty-brew",
        nameKey: "specialty-brew",
        descriptionKey: "specialty-brew",
        image: clientPhoto("cafe-latte-art"),
        confirmed: true,
        tags: ["hot", "signature"],
      },
      {
        id: "iced-latte",
        nameKey: "iced-latte",
        descriptionKey: "iced-latte",
        image: icedLatte,
        confirmed: true,
        tags: ["cold"],
      },
    ],
  },
  {
    id: "matcha",
    labelKey: "matcha",
    items: [
      {
        id: "ceremonial-matcha",
        nameKey: "ceremonial-matcha",
        descriptionKey: "ceremonial-matcha",
        image: clientPhoto("matcha-en-cuenco"),
        confirmed: true,
        tags: ["hot", "cold", "signature"],
      },
      {
        id: "coconut-water-matcha",
        nameKey: "coconut-water-matcha",
        descriptionKey: "coconut-water-matcha",
        confirmed: true,
        tags: ["cold", "signature"],
      },
      {
        id: "coco-pistache",
        nameKey: "coco-pistache",
        descriptionKey: "coco-pistache",
        confirmed: true,
        tags: ["cold", "signature"],
      },
    ],
  },
  {
    id: "cold",
    labelKey: "cold",
    items: [
      {
        id: "strawberry-refresher",
        nameKey: "strawberry-refresher",
        descriptionKey: "strawberry-refresher",
        image: clientPhoto("bebida-roja-con-hielo"),
        confirmed: true,
        tags: ["cold", "signature"],
      },
      {
        id: "seasonal-coolers",
        nameKey: "seasonal-coolers",
        descriptionKey: "seasonal-coolers",
        image: clientPhoto("bebidas-de-colores-en-escalones"),
        confirmed: true,
        tags: ["cold", "vegan"],
      },
      {
        id: "smoothies-frappes",
        nameKey: "smoothies-frappes",
        descriptionKey: "smoothies-frappes",
        confirmed: true,
        tags: ["cold", "vegan"],
      },
    ],
  },
  {
    id: "bakery",
    labelKey: "bakery",
    items: [
      {
        id: "croissant-del-dia",
        nameKey: "croissant-del-dia",
        descriptionKey: "croissant-del-dia",
        image: clientPhoto("croissant-corte-interior"),
        confirmed: true,
        tags: ["signature"],
      },
      {
        id: "baguette-del-dia",
        nameKey: "baguette-del-dia",
        descriptionKey: "baguette-del-dia",
        confirmed: true,
        tags: ["signature"],
      },
      {
        id: "panecillos-frescos",
        nameKey: "panecillos-frescos",
        descriptionKey: "panecillos-frescos",
        image: clientPhoto("bandeja-pan-dulce-surtido"),
        confirmed: true,
        tags: ["signature"],
      },
    ],
  },
  {
    id: "savory",
    labelKey: "savory",
    items: [
      { id: "sandwiches", nameKey: "sandwiches", descriptionKey: "sandwiches", confirmed: true },
      { id: "grill-cheese", nameKey: "grill-cheese", descriptionKey: "grill-cheese", confirmed: true },
    ],
  },
];
