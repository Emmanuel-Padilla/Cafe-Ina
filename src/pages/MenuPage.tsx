import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Croissant,
  Leaf,
  PawPrint,
  Snowflake,
  Sparkles,
  Sandwich,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { ButtonLink } from "../components/Button";
import { LazyImage } from "../components/LazyImage";
import { SignatureHero } from "../components/SignatureHero";
import { IconBlock } from "../components/IconBlock";
import { site } from "../data/site";
import { Promotions } from "../sections/Promotions";
import { menuCategories } from "../data/menu";
import type { MenuTag } from "../types";

const categoryIcons = {
  coffee: Coffee,
  matcha: Leaf,
  cold: Snowflake,
  bakery: Croissant,
  savory: Sandwich,
} as const;

const tagLabelKeys = {
  hot: "hot",
  cold: "cold",
  vegan: "vegan",
  signature: "signature",
  "pet-friendly": "petFriendly",
} as const;

const cardReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function MenuPage() {
  const { t } = useLanguage();

  return (
    <div className="pb-20">
      <SignatureHero primaryHref="/#contacto" secondaryHref="#menu-coffee" />

      <section className="relative mt-4 sm:mt-8">
        <Container>
          <motion.div
            {...cardReveal}
            transition={{ duration: 0.55 }}
            className="grid gap-4 rounded-[2rem] border border-border/60 bg-surface/78 p-5 shadow-soft backdrop-blur-sm sm:grid-cols-3 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <div className="inline-flex rounded-full bg-primary/10 p-2 text-primary">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                {t.menu.pendingNote}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="inline-flex rounded-full bg-accent/10 p-2 text-accent">
                <Coffee className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                {t.menu.categoryDescriptions.coffee}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="inline-flex rounded-full bg-primary/10 p-2 text-primary">
                <PawPrint className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                {t.featured.items.petCup.description}
              </p>
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={site.menuUrl} target="_blank" rel="noreferrer noopener">{t.menu.ctaFull}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></ButtonLink>
            <p className="max-w-xl text-sm text-text-muted">{t.menu.pageSubtitle}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#menu-${category.id}`}
                className="rounded-full border border-border/70 bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary/30 hover:bg-surface-muted"
              >
                {t.menu.categories[category.labelKey as keyof typeof t.menu.categories]}
              </a>
            ))}
          </div>

          <div className="mt-14 space-y-16 sm:space-y-20">
            {menuCategories.map((category, categoryIndex) => {
              const Icon =
                categoryIcons[category.id as keyof typeof categoryIcons];

              return (
                <section id={`menu-${category.id}`} key={category.id}>
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <SectionHeading
                      eyebrow={t.menu.eyebrow}
                      title={t.menu.categories[
                        category.labelKey as keyof typeof t.menu.categories
                      ]}
                      subtitle={
                        t.menu.categoryDescriptions[
                          category.labelKey as keyof typeof t.menu.categoryDescriptions
                        ]
                      }
                    />
                    <div className="inline-flex items-center gap-2 rounded-full bg-surface-muted px-4 py-2 text-sm font-medium text-text-muted">
                      <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      {category.items.length}
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {category.items.map((item, itemIndex) => (
                      <motion.article
                        key={item.id}
                        {...cardReveal}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.04 + itemIndex * 0.05,
                        }}
                        className="group overflow-hidden rounded-[2rem] border border-border/60 bg-surface shadow-soft"
                      >
                        <div className="aspect-[4/5] overflow-hidden">
                          {item.image ? <LazyImage
                            src={item.image}
                            alt={
                              t.menu.itemNames[
                                item.nameKey as keyof typeof t.menu.itemNames
                              ]
                            }
                            wrapperClassName="aspect-[4/5]"
                            className="transition-transform duration-700 group-hover:scale-105"
                          /> : <IconBlock icon={Icon} variant="olive" />}
                        </div>

                        <div className="p-6">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-display text-2xl leading-tight text-text">
                              {
                                t.menu.itemNames[
                                  item.nameKey as keyof typeof t.menu.itemNames
                                ]
                              }
                            </h3>
                            <span className="rounded-full bg-surface-muted px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
                              Café/ina
                            </span>
                          </div>

                          <p className="mt-3 text-sm leading-relaxed text-text-muted">
                            {
                              t.menu.itemDescriptions[
                                item.descriptionKey as keyof typeof t.menu.itemDescriptions
                              ]
                            }
                          </p>

                          {item.tags && item.tags.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2">
                              {item.tags.map((tag: MenuTag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                                >
                                  {t.menu.tags[tagLabelKeys[tag]]}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <motion.div
            {...cardReveal}
            transition={{ duration: 0.55 }}
            className="noise-overlay mt-16 overflow-hidden rounded-[2rem] bg-moss p-6 text-ivory shadow-strong sm:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-beige">
                  Café/ina
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                  {t.menu.pageCtaTitle}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ivory/80 sm:text-base">
                  {t.menu.pageCtaBody}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href="/#ubicacion"
                  variant="primary"
                  className="!bg-ivory !text-moss hover:!bg-cream"
                >
                  {t.menu.pageCtaPrimary}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  href={categoryAnchor(menuCategories[0].id)}
                  variant="secondary"
                  className="!border-white/25 !text-ivory hover:!border-white/50"
                >
                  {t.nav.menu}
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
      <Promotions />
    </div>
  );
}

function categoryAnchor(categoryId: string) {
  return `#menu-${categoryId}`;
}
