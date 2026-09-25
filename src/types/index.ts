export type Locale = "es" | "en";

export type Theme = "light" | "dark";

export interface NavItem {
  key: string;
  href: string;
}

export interface MenuCategory {
  id: string;
  labelKey: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  nameKey: string;
  descriptionKey?: string;
  price?: string;
  image?: string;
  tags?: MenuTag[];
  confirmed: boolean;
}

export type MenuTag = "hot" | "cold" | "vegan" | "signature" | "pet-friendly";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  captionKey?: string;
  category: "fachada" | "interior" | "bebidas" | "repostería" | "detalles";
  span?: "tall" | "wide" | "large" | "normal";
  provisional?: boolean;
}

export interface FeaturedProduct {
  id: string;
  nameKey: string;
  descriptionKey: string;
  image: string;
  category: string;
}

export interface SocialLink {
  id: "instagram" | "facebook";
  url: string;
  labelKey: string;
}
