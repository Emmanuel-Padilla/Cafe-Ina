import { motion } from "framer-motion";
import { useState } from "react";
import type { GalleryImage } from "../../types";
import { Button } from "../Button";
import { SectionHeading } from "../SectionHeading";

interface ShuffleGalleryProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  hint: string;
  images: GalleryImage[];
  viewLabel: string;
  moreLabel: string;
  onSelect: (image: GalleryImage) => void;
}

const GRID_SIZE = 8;

export function ShuffleGallery({
  eyebrow,
  title,
  subtitle,
  hint,
  images,
  viewLabel,
  moreLabel,
  onSelect,
}: ShuffleGalleryProps) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(images.length / GRID_SIZE);
  const visible = images.slice(page * GRID_SIZE, (page + 1) * GRID_SIZE);

  if (images.length === 0) return null;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mt-8 rounded-[1.75rem] border border-border/70 bg-surface/80 p-5 shadow-soft backdrop-blur-sm sm:p-6">
          <p className="text-sm leading-relaxed text-text-muted sm:text-base">{hint}</p>

          <Button
            type="button"
            className="mt-5"
            onClick={() => onSelect(visible[0] ?? images[0]!)}
          >
            {viewLabel}
          </Button>
          {pageCount > 1 && (
            <div className="mt-4 flex items-center gap-4">
              <Button type="button" variant="secondary" onClick={() => setPage((current) => (current + 1) % pageCount)}>
                {moreLabel}
              </Button>
              <span aria-live="polite" className="text-sm text-text-muted">{page + 1} / {pageCount}</span>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        className="rounded-[2rem] border border-border/70 bg-surface/70 p-3 shadow-soft sm:p-4"
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {visible.map((photo) => (
            <motion.button
              key={photo.id}
              type="button"
              layout
              transition={{ duration: 1.2, type: "spring" }}
              aria-label={photo.alt}
              onClick={() => onSelect(photo)}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-[1rem] bg-neutral-200 text-left shadow-[0_10px_24px_rgba(49,45,41,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:rounded-[1.15rem]"
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/5 to-white/10 transition-opacity duration-300 group-hover:opacity-80" />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
