import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { BrickBlock } from "../components/BrickBlock";
import { MapEmbed } from "../components/MapEmbed";
import { ButtonLink } from "../components/Button";
import { site } from "../data/site";

export function Location() {
  const { t } = useLanguage();

  return (
    <section id="ubicacion" className="overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t.location.eyebrow}
          title={t.location.title}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <MapEmbed title={`${t.location.title} — Café/ina`} />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <BrickBlock
              variant="ivory"
              direction="right"
              className="flex flex-col gap-2 border border-border px-6 py-6 sm:col-span-2"
            >
              <div className="flex items-center gap-2 text-accent">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                  {t.location.addressLabel}
                </span>
              </div>
              <p className="text-base font-medium text-text">
                {t.location.address}
              </p>
            </BrickBlock>

            <BrickBlock
              variant="beige"
              direction="right"
              delay={0.05}
              className="flex flex-col gap-2 px-6 py-6 sm:col-span-2"
            >
              <div className="flex items-center gap-2 text-coffee">
                <Clock className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                  {t.location.hoursLabel}
                </span>
              </div>
              <p className="text-sm font-medium text-ink">
                {t.location.hoursDays}
              </p>
              <p className="text-sm text-ink/80">{t.location.hoursValue}</p>
              <p className="text-xs text-ink/60">{t.location.hoursClosed}</p>
            </BrickBlock>

            {site.phone && <BrickBlock
              variant="moss"
              direction="right"
              delay={0.1}
              className="flex flex-col gap-2 px-6 py-6"
            >
              <div className="flex items-center gap-2 text-ivory/85">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                  {t.location.phoneLabel}
                </span>
              </div>
              <p className="text-sm font-medium text-ivory">
                <a href={`tel:${site.phone}`}>{site.phone}</a>
              </p>
            </BrickBlock>}

            <ButtonLink
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              variant="primary"
              className="justify-self-start sm:col-span-2"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              {t.location.ctaDirections}
            </ButtonLink>

            <p className="text-xs text-text-muted sm:col-span-2">
              {t.location.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
