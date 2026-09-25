import { InstagramIcon, FacebookIcon } from "../components/icons/SocialIcons";
import { useLanguage } from "../context/LanguageContext";
import { Container } from "../components/Container";
import { BrickBlock } from "../components/BrickBlock";
import { ButtonLink } from "../components/Button";
import { site } from "../data/site";

export function Social() {
  const { t } = useLanguage();

  return (
    <section id="redes" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <BrickBlock
          variant="moss"
          direction="up"
          className="flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/85">
            {t.social.eyebrow}
          </span>
          <h2 className="max-w-2xl text-balance font-display text-3xl font-medium leading-tight sm:text-4xl">
            {t.social.title}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-ivory/80 sm:text-base">
            {t.social.subtitle}
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              variant="secondary"
              className="!border-ivory/40 !text-ivory hover:!border-ivory/70"
            >
              <InstagramIcon className="h-4 w-4" aria-hidden="true" />
              {t.social.instagramCta}
              <span className="text-ivory/80">{t.social.handleInstagram}</span>
            </ButtonLink>
            <ButtonLink
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              variant="ghost"
              className="!text-ivory"
            >
              <FacebookIcon className="h-4 w-4" aria-hidden="true" />
              {t.social.facebookCta}
            </ButtonLink>
          </div>
        </BrickBlock>
      </Container>
    </section>
  );
}
