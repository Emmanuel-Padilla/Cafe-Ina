import { motion } from "framer-motion";
import { Clock3, Coffee, Monitor } from "lucide-react";
import { Container } from "../components/Container";
import { useLanguage } from "../context/LanguageContext";
import derDecor from "../assets/images/der.png";

const icons = [Clock3, Coffee, Monitor];

export function Experience() {
  const { t } = useLanguage();

  const plans = [
    t.experience.packages.breakfast,
    t.experience.packages.brunch,
    t.experience.packages.meeting,
  ];

  return (
    <section
      id="paquetes"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,150,96,0.08),transparent_32%)]"
        aria-hidden="true"
      />
      <img
        src={derDecor}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 z-0 w-[18rem] max-w-none opacity-100 drop-shadow-[0_28px_42px_rgba(120,79,38,0.2)] sm:w-[22rem] lg:bottom-2 lg:w-[28rem] xl:w-[32rem]"
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="inline-flex rounded-full bg-primary px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_18px_35px_rgba(127,150,96,0.2)] sm:px-7 sm:text-sm">
            {t.experience.eyebrow}
          </span>
          <h2 className="mt-6 font-display text-[2.25rem] leading-[0.98] text-text sm:mt-7 sm:text-[3.2rem] lg:text-[4rem]">
            {t.experience.title}
            <span className="ml-3 italic">{t.experience.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-3xl text-[0.98rem] leading-[1.7] text-text-muted sm:mt-5 sm:text-[1rem]">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 xl:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = icons[index];
            const isPopular = plan.highlighted;

            return (
              <motion.article
                key={plan.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className={`rounded-[1.7rem] border p-5 shadow-[0_18px_48px_rgba(214,204,177,0.24)] sm:rounded-[1.9rem] sm:p-7 ${
                  isPopular
                    ? "border-primary/70 bg-primary text-primary-foreground"
                    : "border-border/70 bg-surface/88 text-text dark:bg-surface/92"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`inline-flex rounded-[1.4rem] p-5 ${
                      isPopular
                        ? "bg-white/[0.18]"
                        : "bg-surface-muted text-primary"
                    } sm:rounded-[1.5rem] sm:p-4`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                  </div>

                  {plan.badge ? (
                    <span
                      className={`rounded-full px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] sm:px-4 sm:py-2 sm:text-sm ${
                        isPopular
                          ? "bg-primary-foreground/18 text-primary-foreground"
                          : "bg-surface-muted text-primary"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-7 font-display text-[1.7rem] leading-none sm:mt-8 sm:text-[1.9rem]">
                  {plan.title}
                </h3>
                <p
                  className={`mt-3.5 text-[0.98rem] leading-[1.65] sm:text-[1rem] ${
                    isPopular ? "text-primary-foreground/92" : "text-text-muted"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-6 flex items-end gap-2.5 sm:mt-7 sm:gap-3">
                  <span
                    className={`font-display text-[4rem] leading-none ${
                      isPopular
                        ? "text-primary-foreground text-[2.9rem] sm:text-[3.3rem]"
                        : "text-primary text-[2.9rem] sm:text-[3.3rem]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`pb-1.5 text-[0.98rem] sm:text-[1rem] ${
                      isPopular ? "text-primary-foreground/78" : "text-primary/80"
                    }`}
                  >
                    {plan.priceSuffix}
                  </span>
                </div>

                <div
                  className={`mt-6 border-t pt-6 sm:mt-7 sm:pt-7 ${
                    isPopular ? "border-primary-foreground/18" : "border-border"
                  }`}
                >
                  <ul className="space-y-3.5 sm:space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-[0.98rem] leading-[1.55] sm:text-[1rem] ${
                          isPopular ? "text-primary-foreground/92" : "text-text-muted"
                        }`}
                      >
                        <span
                          className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
                            isPopular ? "bg-primary-foreground/65" : "bg-primary/55"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={plan.href}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full border px-6 py-4 text-center text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5 sm:mt-9 sm:text-lg ${
                    isPopular
                      ? "border-primary-foreground bg-primary-foreground text-primary"
                      : "border-primary text-primary hover:bg-surface-muted/65"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
