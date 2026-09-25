import { CakeSlice, Coffee } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { ButtonLink } from "../components/Button";
import { useLanguage } from "../context/LanguageContext";

export function Promotions() {
  const { t } = useLanguage();

  return (
    <section id="promociones" className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={t.promotions.eyebrow} title={t.promotions.title} />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-[2rem] bg-moss p-7 text-ivory sm:p-9">
            <CakeSlice className="h-8 w-8 text-beige" aria-hidden="true" />
            <h3 className="mt-5 font-display text-3xl">{t.promotions.birthdayTitle}</h3>
            <p className="mt-4 max-w-lg leading-relaxed text-ivory/80">{t.promotions.birthdayBody}</p>
          </article>
          <article className="rounded-[2rem] border border-border bg-surface p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <Coffee className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="font-display text-4xl text-primary">{t.promotions.comboPrice}</span>
            </div>
            <h3 className="mt-5 font-display text-3xl text-text">{t.promotions.comboTitle}</h3>
            <p className="mt-4 leading-relaxed text-text-muted">{t.promotions.comboBody}</p>
            <ButtonLink href="/menu#menu-savory" variant="secondary" className="mt-6">{t.promotions.cta}</ButtonLink>
          </article>
        </div>
      </Container>
    </section>
  );
}
