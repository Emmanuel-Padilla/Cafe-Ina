import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Clock3, Mail, MapPin, Play } from "lucide-react";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { BakeryIcon } from "../components/BakeryIcon";
import { BakerySelection } from "../components/BakerySelection";
import { Lightbox } from "../components/Lightbox";
import { useLanguage } from "../context/LanguageContext";
import { bakery, bakeryGallery } from "../data/bakery";
import type { GalleryImage } from "../types";

const anchors = ["nuestro-pan", "el-oficio", "galeria-backhaus", "visita-backhaus"];
const productPhotos = [bakery.photos.croissants, bakery.photos.rolls, bakery.photos.fruit];

export function BakeryPage() {
  const { t } = useLanguage();
  const copy = t.bakeryPage;
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const gallery: GalleryImage[] = bakeryGallery.map((photo, index) => ({
    ...photo,
    alt: copy.galleryAlts[index],
    category: "repostería",
  }));

  return (
    <div className="bakery-theme bg-bg text-text">
      <section className="overflow-hidden pb-12 pt-28 sm:pt-32 lg:pb-16 lg:pt-36">
        <Container>
          <a href="/" className="mb-8 inline-flex items-center gap-2 py-2 text-sm text-text-muted transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />{copy.backToCafe}
          </a>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-4 text-primary">
                <BakeryIcon className="h-12 w-20" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">{t.nav.bakery}</span>
              </div>
              <h1 className="mt-7 font-display text-[3.8rem] leading-[0.95] tracking-tight sm:text-[5.5rem] lg:text-[6rem]">{bakery.name}</h1>
              <p className="mt-4 text-sm uppercase tracking-[0.45em] text-text-muted">{bakery.descriptor}</p>
              <p className="mt-8 max-w-md font-display text-3xl italic leading-snug text-primary sm:text-4xl">{copy.heroTagline}</p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-text-muted">{copy.heroBody}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#nuestro-pan">{copy.explore}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></ButtonLink>
                <ButtonLink href="#visita-backhaus" variant="secondary">{copy.visit}</ButtonLink>
              </div>
            </div>
            <div className="relative">
              <img src={bakery.photos.croissants} alt={t.bakery.photoAlt} width={1320} height={1753} fetchPriority="high" className="aspect-[4/5] max-h-[39rem] w-full rounded-t-[8rem] rounded-b-[2rem] object-cover shadow-strong sm:rounded-t-[12rem]" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl bg-[#fff8ec]/95 p-4 text-[#512e20] backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7">
                <span className="font-display text-lg italic">{t.bakery.photoCaption}</span>
                <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.13em]">Ajijic, Jal.</span>
              </div>
            </div>
          </div>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-y border-border py-5 text-xs font-semibold uppercase tracking-[0.14em] text-text-muted sm:gap-x-14">
            {t.bakery.labels.map((label) => <li key={label} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />{label}</li>)}
          </ul>
          <nav aria-label={copy.sectionNavLabel} className="mt-6 flex flex-wrap justify-center gap-2">
            {anchors.map((anchor, index) => <a key={anchor} href={`#${anchor}`} className="rounded-full px-4 py-3 text-sm text-text-muted transition-colors hover:bg-surface-muted hover:text-text">{copy.sectionLinks[index]}</a>)}
          </nav>
        </Container>
      </section>

      <section id="nuestro-pan" className="scroll-mt-28 py-14 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{copy.productsEyebrow}</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">{copy.productsTitle}</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-text-muted">{copy.productsBody}</p>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {copy.products.map((product, index) => (
              <article key={product.title} className="group overflow-hidden rounded-[1.75rem] border border-border bg-surface">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={productPhotos[index]} alt={product.title} width={540} height={960} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl">{product.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
          <BakerySelection />
        </Container>
      </section>

      <section id="el-oficio" className="scroll-mt-28 bg-surface-muted/35 py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="grid grid-cols-2 items-center gap-4">
              <img src={bakery.photos.glazing} alt={copy.galleryAlts[3]} width={540} height={960} loading="lazy" decoding="async" className="aspect-[3/5] w-full rounded-[1.5rem] object-cover" />
              <img src={bakery.photos.preparation} alt={copy.galleryAlts[1]} width={540} height={960} loading="lazy" decoding="async" className="mt-16 aspect-[3/5] w-full rounded-[1.5rem] object-cover" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{copy.storyEyebrow}</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{copy.storyTitle}</h2>
              <p className="mt-5 leading-relaxed text-text-muted">{copy.storyBody}</p>
              <ol className="mt-8 divide-y divide-border border-y border-border">
                {copy.values.map((value, index) => (
                  <li key={value.title} className="flex gap-5 py-5">
                    <span className="pt-1 font-display text-xl italic text-primary">0{index + 1}</span>
                    <div><h3 className="font-display text-2xl">{value.title}</h3><p className="mt-2 text-sm leading-relaxed text-text-muted">{value.body}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section id="galeria-backhaus" className="scroll-mt-28 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{copy.galleryEyebrow}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{copy.galleryTitle}</h2>
            <p className="mt-5 leading-relaxed text-text-muted">{copy.galleryBody}</p>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {gallery.map((photo, index) => (
              <button key={photo.id} type="button" aria-label={photo.alt} onClick={() => setSelected(photo)} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-muted text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:rounded-[1.75rem]">
                <img src={photo.src} alt={photo.alt} width={540} height={960} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 right-4 text-xs font-medium leading-relaxed text-white sm:bottom-6 sm:left-6 sm:right-6 sm:text-sm">{copy.galleryCaptions[index]}</span>
              </button>
            ))}
          </div>
          <div className="mt-10 grid overflow-hidden rounded-[2rem] bg-[#5a3022] text-[#fff8ec] md:grid-cols-[0.6fr_1fr]">
            <img src={bakery.photos.facade} alt={copy.galleryAlts[4]} width={540} height={960} loading="lazy" decoding="async" className="h-72 w-full object-cover object-center md:h-full md:max-h-96" />
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#edbd9d]">Backhaus · Ajijic</p>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl">{copy.openingTitle}</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-[#fff8ec]/80">{copy.openingBody}</p>
              <a href={bakery.videoUrl} target="_blank" rel="noreferrer noopener" className="mt-7 inline-flex min-h-11 items-center gap-3 self-start rounded-full border border-[#fff8ec]/40 px-5 py-3 text-sm transition-colors hover:bg-white/10">
                <Play className="h-4 w-4" aria-hidden="true" />{copy.openingCta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="visita-backhaus" className="scroll-mt-28 border-t border-border bg-surface py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{copy.visitEyebrow}</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{copy.visitTitle}</h2>
              <p className="mt-5 leading-relaxed text-text-muted">{copy.visitBody}</p>
              <div className="mt-8 space-y-5">
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{bakery.address}</span></p>
                <a href={`mailto:${bakery.email}`} className="flex items-start gap-3 text-sm underline underline-offset-4"><Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span className="break-all">{bakery.email}</span></a>
                <p className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"><Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{copy.hoursNote}</span></p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={bakery.mapsUrl} target="_blank" rel="noreferrer noopener">{t.bakery.directions}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></ButtonLink>
                <ButtonLink href={bakery.facebookUrl} target="_blank" rel="noreferrer noopener" variant="secondary">{copy.socialCta}</ButtonLink>
              </div>
            </div>
            <iframe src={bakery.mapsEmbedSrc} title={copy.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="min-h-[24rem] w-full rounded-[2rem] border border-border bg-surface-muted lg:h-full" />
          </div>
        </Container>
      </section>
      <Lightbox image={selected} onClose={() => setSelected(null)} closeLabel={copy.closePhoto} />
    </div>
  );
}
