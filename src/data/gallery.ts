import type { GalleryImage, Locale } from "../types";
import { clientPhotos } from "./photos";

export function getGalleryImages(locale: Locale): GalleryImage[] {
  return clientPhotos.map((photo) => ({
    id: photo.id,
    src: photo.src,
    alt: photo.alt[locale],
    category: photo.category,
  }));
}
