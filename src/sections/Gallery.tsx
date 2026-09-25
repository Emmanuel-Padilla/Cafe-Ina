import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Container } from "../components/Container";
import { Lightbox } from "../components/Lightbox";
import { ShuffleGallery } from "../components/ui/shuffle-gallery";
import { getGalleryImages } from "../data/gallery";
import type { GalleryImage } from "../types";

export function Gallery() {
  const { t, locale } = useLanguage();
  const galleryImages = useMemo(() => getGalleryImages(locale), [locale]);
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section id="galeria" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <ShuffleGallery
          images={galleryImages}
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
          hint={t.gallery.shuffleHint}
          viewLabel={t.gallery.viewImage}
          moreLabel={t.gallery.morePhotos}
          onSelect={setSelected}
        />
      </Container>

      <Lightbox image={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
