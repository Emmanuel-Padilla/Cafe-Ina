import { ArrowUpRight } from "lucide-react";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { LazyImage } from "../components/LazyImage";
import { useLanguage } from "../context/LanguageContext";
import { clientPhoto } from "../data/photos";
import { site } from "../data/site";

export function Events() {
  const { t } = useLanguage();

  return (
    <section id="eventos" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid overflow-hidden rounded-[2rem] bg-moss text-ivory lg:grid-cols-2">
          <LazyImage src={clientPhoto("equipo-en-stand-cafe-ina")} alt={t.events.photoAlt} wrapperClassName="min-h-72 lg:min-h-[34rem]" className="min-h-72" />
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-beige">{t.events.eyebrow}</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">{t.events.title}</h2>
            <p className="mt-6 leading-relaxed text-ivory/85">{t.events.body}</p>
            <div className="mt-8 border-t border-ivory/20 pt-7">
              <h3 className="font-display text-2xl">{t.events.packagesTitle}</h3>
              <p className="mt-3 leading-relaxed text-ivory/85">{t.events.packagesBody}</p>
              <ButtonLink href={site.social.instagram} target="_blank" rel="noreferrer noopener" className="mt-6 !bg-ivory !text-moss hover:!bg-beige">
                {t.events.cta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
