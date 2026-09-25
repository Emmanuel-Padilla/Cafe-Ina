import { motion } from "framer-motion";
import { Camera, Expand } from "lucide-react";
import type { GalleryImage } from "../types";
import { LazyImage } from "./LazyImage";

const spanClasses: Record<NonNullable<GalleryImage["span"]>, string> = {
  normal: "",
  wide: "sm:col-span-2",
  tall: "row-span-2",
  large: "sm:col-span-2 row-span-2",
};

export function GalleryTile({
  image,
  index,
  provisionalLabel,
  viewLabel,
  onSelect,
}: {
  image: GalleryImage;
  index: number;
  provisionalLabel: string;
  viewLabel: string;
  onSelect: () => void;
}) {
  const spanClass = spanClasses[image.span ?? "normal"];

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      disabled={image.provisional}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      aria-label={image.provisional ? undefined : `${viewLabel}: ${image.alt}`}
      className={`group relative overflow-hidden rounded-2xl bg-surface-muted text-left ${spanClass} ${
        image.provisional ? "cursor-default" : "cursor-zoom-in"
      }`}
    >
      {image.provisional ? (
        <div className="pattern-mosaic flex h-full min-h-[160px] w-full flex-col items-center justify-center gap-2 bg-coffee/90 text-ivory">
          <Camera className="h-6 w-6 opacity-70" aria-hidden="true" />
          <span className="text-xs font-medium opacity-80">
            {provisionalLabel}
          </span>
        </div>
      ) : (
        <>
          <LazyImage
            src={image.src}
            alt={image.alt}
            wrapperClassName="h-full min-h-[160px]"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
            <Expand className="h-6 w-6 text-ivory" aria-hidden="true" />
          </div>
        </>
      )}
    </motion.button>
  );
}
