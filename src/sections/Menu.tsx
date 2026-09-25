import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Leaf, Snowflake, Croissant, Sandwich } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { IconBlock } from "../components/IconBlock";
import { ButtonLink } from "../components/Button";
import { LazyImage } from "../components/LazyImage";
import { menuCategories } from "../data/menu";
import { clientPhoto } from "../data/photos";
import { site } from "../data/site";
import type { MenuTag } from "../types";

const categoryIcons = {
  coffee: Coffee,
  matcha: Leaf,
  cold: Snowflake,
  bakery: Croissant,
  savory: Sandwich,
} as const;

const categoryVariants = ["olive", "coffee", "moss", "beige"] as const;

const tagLabelKeys = {
  hot: "hot",
  cold: "cold",
  vegan: "vegan",
  signature: "signature",
  "pet-friendly": "petFriendly",
} as const;

export function Menu() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string>("all");

  const categoryPhotos: Record<string, string> = { coffee: clientPhoto("extraccion-espresso"), matcha: clientPhoto("matcha-en-cuenco"), cold: clientPhoto("brindis-bebidas-frias"), bakery: clientPhoto("bandeja-pan-dulce-surtido") };

  const visible =
    active === "all"
      ? menuCategories
      : menuCategories.filter((c) => c.id === active);

  return (
    <section id="menu" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t.menu.eyebrow}
            title={t.menu.title}
            subtitle={t.menu.subtitle}
          />
          <ButtonLink href="/menu" variant="secondary" className="shrink-0">
            {t.menu.previewCta}
          </ButtonLink>
        </div>

        <div
          role="tablist"
          aria-label={t.menu.title}
          className="mt-8 flex flex-wrap gap-2"
        >
          <button
            role="tab"
            aria-selected={active === "all"}
            onClick={() => setActive("all")}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              active === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-surface-muted text-text hover:bg-surface-muted/70"
            }`}
          >
            {t.nav.menu}
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-muted text-text hover:bg-surface-muted/70"
              }`}
            >
              {t.menu.categories[cat.labelKey as keyof typeof t.menu.categories]}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((cat, i) => {
            const Icon = categoryIcons[cat.id as keyof typeof categoryIcons];
            const item = cat.items[0];
            return (
              <motion.article
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface ${
                  i === 0 ? "sm:col-span-2 sm:row-span-1" : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {categoryPhotos[cat.id] ? (
                    <LazyImage
                      src={categoryPhotos[cat.id]}
                      alt={
                        t.menu.categories[cat.labelKey as keyof typeof t.menu.categories]
                      }
                      wrapperClassName="h-full"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <IconBlock
                      icon={Icon}
                      variant={categoryVariants[i % categoryVariants.length]}
                    />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,17,17,0.1))]" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-medium text-text">
                      {
                        t.menu.categories[
                          cat.labelKey as keyof typeof t.menu.categories
                        ]
                      }
                    </h3>
                    <span className="whitespace-nowrap rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-text-muted">
                      {cat.items.length}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {t.menu.categoryDescriptions[cat.labelKey as keyof typeof t.menu.categoryDescriptions]}
                  </p>
                  {item?.tags && item.tags.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-2 pt-2">
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
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-surface-muted p-6 sm:flex-row sm:items-center">
          <p className="text-sm text-text-muted">{t.menu.pendingNote}</p>
          <ButtonLink
            href={site.menuUrl}
            target="_blank"
            rel="noreferrer noopener"
            variant="secondary"
            className="shrink-0"
          >
            {t.menu.ctaFull}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
