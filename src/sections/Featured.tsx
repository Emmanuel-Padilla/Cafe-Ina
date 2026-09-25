import { motion } from "framer-motion";
import {
  CircleDashed,
  Coffee,
  Croissant,
  Layers3,
  Leaf,
  Send,
} from "lucide-react";
import { Container } from "../components/Container";
import { useLanguage } from "../context/LanguageContext";
import izqDecor from "../assets/images/izq1.png";
import { LazyImage } from "../components/LazyImage";
import { clientPhoto } from "../data/photos";

const icons = [Coffee, Leaf, CircleDashed, Layers3, Send, Croissant];
const photos = [
  clientPhoto("extraccion-espresso"),
  clientPhoto("matcha-en-cuenco"),
  null,
  clientPhoto("pan-dulce-con-crema-y-frutas"),
  clientPhoto("bandeja-pan-dulce-surtido"),
  null,
];

export function Featured() {
  const { t } = useLanguage();

  const items = [
    t.featured.items.specialtyCoffee,
    t.featured.items.matchaTea,
    t.featured.items.artisanBagels,
    t.featured.items.homemadeDesserts,
    t.featured.items.freshBakery,
    t.featured.items.gourmetBrunch,
  ];

  return (
    <section
      id="especialidades"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,150,96,0.08),transparent_35%)]"
        aria-hidden="true"
      />
      <img
        src={izqDecor}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-8 z-0 w-[16rem] max-w-none opacity-100 drop-shadow-[0_24px_36px_rgba(120,79,38,0.18)] sm:top-10 sm:w-[20rem] lg:top-12 lg:w-[25rem] xl:w-[29rem]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-[2.2rem] leading-[0.98] text-text sm:text-[3.1rem] lg:text-[4rem]">
            {t.featured.title}
            <span className="ml-3 italic text-text">
              {t.featured.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[0.98rem] leading-[1.7] text-text-muted sm:mt-5 sm:text-[1rem]">
            {t.featured.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="rounded-[1.7rem] border border-border/70 bg-surface/88 p-5 text-text shadow-soft backdrop-blur-sm sm:rounded-[1.9rem] sm:p-7 dark:bg-surface/92"
              >
                {photos[index] ? (
                  <div className="aspect-[4/3] overflow-hidden rounded-[1.3rem]">
                    <LazyImage src={photos[index]!} alt={item.title} />
                  </div>
                ) : <div className="flex aspect-[4/3] items-center justify-center rounded-[1.3rem] bg-primary text-primary-foreground">
                  <Icon className="h-16 w-16" strokeWidth={1.25} aria-hidden="true" />
                </div>}

                <h3 className="mt-7 font-display text-[1.6rem] leading-none text-text sm:mt-8 sm:text-[1.9rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-[0.98rem] leading-[1.68] text-text-muted sm:text-[1rem]">
                  {item.description}
                </p>

                <div className="mt-6">
                  <span className="inline-flex rounded-full bg-surface-muted px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary sm:px-5 sm:text-sm">
                    {item.badge}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
