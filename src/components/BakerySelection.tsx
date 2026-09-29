import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { bakeryAssortment, bakerySelection, moreBakeryPastries } from "../data/bakerySelection";
import type { GalleryImage } from "../types";
import { Lightbox } from "./Lightbox";

export function BakerySelection() {
  const { locale, t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const photos = bakerySelection.map((photo) => ({
    ...photo,
    src: `/images/panaderia/${photo.id}.jpg`,
    alt: photo.name[locale],
    category: "repostería" as const,
  }));
  const assortment: GalleryImage = {
    id: "seleccion-pan-dulce",
    src: bakeryAssortment.src,
    alt: `${t.bakeryPage.assortmentTitle}: ${bakeryAssortment.names[locale].join(", ")}`,
    category: "repostería",
  };
  const selected = [...photos, assortment].find((photo) => photo.id === selectedId) ?? null;

  return (
    <div className="mt-12">
      <h3 className="font-display text-3xl text-text sm:text-4xl">{t.bakeryPage.selectionTitle}</h3>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <figure key={photo.id} className="overflow-hidden rounded-[1.75rem] border border-border bg-surface">
            <button type="button" onClick={() => setSelectedId(photo.id)} aria-label={`${t.gallery.viewImage}: ${photo.alt}`} className="group block aspect-[4/5] w-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary">
              <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </button>
            <figcaption className="p-5">
              <h4 className="font-display text-2xl leading-snug text-text">{photo.alt}</h4>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{photo.description[locale]}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="font-display text-3xl text-text">{t.bakeryPage.morePastriesTitle}</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreBakeryPastries.map((pastry) => (
            <article key={pastry.name.es} className="rounded-[1.75rem] border border-border bg-surface p-6">
              <h4 className="font-display text-2xl leading-snug text-text">{pastry.name[locale]}</h4>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{pastry.description[locale]}</p>
            </article>
          ))}
        </div>
      </div>
      <figure className="mt-6 grid overflow-hidden rounded-[1.75rem] border border-border bg-surface md:grid-cols-2">
        <button type="button" onClick={() => setSelectedId(assortment.id)} aria-label={`${t.gallery.viewImage}: ${assortment.alt}`} className="cursor-zoom-in bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary">
          <img src={bakeryAssortment.src} alt={assortment.alt} width={bakeryAssortment.width} height={bakeryAssortment.height} loading="lazy" decoding="async" className="max-h-[42rem] w-full object-contain" />
        </button>
        <figcaption className="flex flex-col justify-center p-6 sm:p-9">
          <h4 className="font-display text-3xl text-text">{t.bakeryPage.assortmentTitle}</h4>
          <ul className="mt-5 grid gap-3 text-text-muted">
            {bakeryAssortment.names[locale].map((name) => <li key={name}>{name}</li>)}
          </ul>
        </figcaption>
      </figure>
      <Lightbox image={selected} onClose={() => setSelectedId(null)} closeLabel={t.bakeryPage.closePhoto} />
    </div>
  );
}
