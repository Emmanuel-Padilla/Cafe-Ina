import type { NavItem } from "../types";
import { bakery } from "./bakery";

export const navItems: NavItem[] = [
  { key: "home", href: "#inicio" },
  { key: "menu", href: "/menu" },
  { key: "about", href: "#nosotros" },
  { key: "gallery", href: "#galeria" },
  { key: "location", href: "#ubicacion" },
  { key: "social", href: "#redes" },
  { key: "contact", href: "#contacto" },
  { key: "bakery", href: bakery.websiteUrl ?? bakery.pageUrl },
];
