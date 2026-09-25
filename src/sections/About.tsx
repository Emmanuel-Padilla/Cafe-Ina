import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { BrickBlock } from "../components/BrickBlock";
import { LazyImage } from "../components/LazyImage";
import { clientPhoto } from "../data/photos";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label },
    { value: t.about.stat2Value, label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
  ];

  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28"

    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="relative pb-6 sm:pb-10 lg:col-span-5">
            <BrickBlock
              variant="photo"
              direction="left"
              className="aspect-[4/5] w-full sm:aspect-[5/6]"
            >
              <LazyImage
                src={clientPhoto("interior-mesa-junto-ventana")}
                alt={t.about.photoAlt}
                wrapperClassName="h-full"
              />
            </BrickBlock>
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 4 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="absolute bottom-0 right-0 hidden w-36 rotate-4 overflow-hidden rounded-[1.4rem] border-4 border-surface shadow-strong sm:block lg:w-44"
            >
              <LazyImage
                src={clientPhoto("fachada-diurna")}
                alt={t.about.detailAlt}
                wrapperClassName="aspect-[4/5]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
            />

            <motion.blockquote
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 border-l-2 border-accent pl-5 font-display text-2xl italic leading-snug text-text"
            >
              “{t.about.quote}”
            </motion.blockquote>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
              <p>{t.about.body3}</p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <BrickBlock
                  key={stat.label}
                  variant={i === 1 ? "olive" : "beige"}
                  direction="up"
                  delay={i * 0.08}
                  className="flex flex-col items-center justify-center px-3 py-5 text-center"
                >
                  <span className="font-display text-xl font-medium">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs text-current/70">
                    {stat.label}
                  </span>
                </BrickBlock>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
