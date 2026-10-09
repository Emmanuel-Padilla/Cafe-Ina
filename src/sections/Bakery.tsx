import { ArrowUpRight } from "lucide-react";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { BakeryIcon } from "../components/BakeryIcon";
import { BakerySelection } from "../components/BakerySelection";
import { useLanguage } from "../context/LanguageContext";
import { bakery } from "../data/bakery";

export function Bakery() {
  const { t } = useLanguage();

  return (
    <section id="panaderia" aria-labelledby="bakery-preview-title" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <div className="grid overflow-hidden rounded-[2rem] border border-border bg-surface shadow-soft md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col items-start justify-center p-7 sm:p-10 lg:p-12">
            <BakeryIcon className="h-12 w-20 text-[#c45728] dark:text-[#f2a477]" />
            <h2 id="bakery-preview-title" className="mt-4 font-display text-3xl text-text sm:text-4xl">{t.nav.bakery}</h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">{bakery.name} {bakery.descriptor}</p>
            <p className="mt-5 max-w-lg leading-relaxed text-text-muted">{t.bakery.intro}</p>
            <ButtonLink href={bakery.websiteUrl ?? bakery.pageUrl} className="mt-7">
              {t.bakeryPage.pageCta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <img src={bakery.photos.croissants} alt={t.bakery.photoAlt} width={1320} height={1753} loading="lazy" decoding="async" className="h-64 w-full object-cover md:h-full md:max-h-[30rem]" />
        </div>
        <BakerySelection />
      </Container>
    </section>
  );
}
