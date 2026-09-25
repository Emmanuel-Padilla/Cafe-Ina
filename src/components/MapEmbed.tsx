import { ExternalLink } from "lucide-react";
import { site } from "../data/site";

export function MapEmbed({ title }: { title: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface-muted sm:aspect-[16/10] lg:aspect-square">
      <iframe
        title={title}
        src={site.mapsEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full grayscale-[15%] contrast-[1.02]"
      />
      <a
        href={site.mapsUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-surface/95 px-4 py-2 text-xs font-medium text-text shadow-md backdrop-blur-sm transition-transform hover:-translate-y-0.5"
      >
        Café/ina
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}
