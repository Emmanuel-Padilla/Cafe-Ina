import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  Star,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ButtonLink } from "./Button";
import logoOriginal from "../assets/images/logo-original.png";
import heroFondo from "../assets/images/hero-fondo.png";
import { clientPhoto } from "../data/photos";

export function SignatureHero({
  id,
  primaryHref,
  secondaryHref,
  imageVariant = "photos",
}: {
  id?: string;
  primaryHref: string;
  secondaryHref: string;
  imageVariant?: "brand" | "photos";
}) {
  const { t } = useLanguage();

  return (
    <section
      id={id}
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(137,153,102,0.1),transparent_18%),radial-gradient(circle_at_84%_18%,rgba(137,153,102,0.08),transparent_18%),radial-gradient(circle_at_14%_84%,rgba(137,153,102,0.08),transparent_20%),radial-gradient(circle_at_88%_72%,rgba(137,153,102,0.08),transparent_16%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 top-28 h-60 w-60 rounded-full bg-primary/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1700px] px-6 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pr-6"
          >
            <div className="inline-flex rounded-full border border-[#c8c6af] bg-[#ece9df] px-5 py-3 text-xs font-semibold tracking-[0.06em] text-[#7c8d5e] shadow-[0_12px_30px_rgba(137,153,102,0.08)] sm:px-7 sm:text-sm">
              <span className="mr-4 text-lg leading-none">•</span>
              {t.menu.heroBadge}
            </div>

            <h1 className="mt-8 max-w-4xl font-display text-[2.85rem] leading-[0.94] text-[#2f2f31] dark:text-white sm:text-[4.3rem] lg:text-[5rem]">
              {t.menu.heroTitle}
              <span className="mt-4 block text-[#7f9660] italic">
                {t.menu.heroTitleAccent}
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-[1.7] text-[#666564] dark:text-gray-300 sm:text-[1rem] lg:max-w-xl lg:text-[1.02rem]">
              {t.menu.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink
                href={primaryHref}
                variant="primary"
                className="min-w-[12.5rem] !rounded-[1.75rem] !bg-[#7f9660] !px-8 !py-4 !text-base !font-semibold !shadow-[0_18px_40px_rgba(127,150,96,0.28)] hover:!bg-[#738954]"
              >
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
                {t.menu.heroPrimaryCta}
              </ButtonLink>
              <ButtonLink
                href={secondaryHref}
                variant="secondary"
                className="min-w-[12rem] !rounded-[1.75rem] !border-[#7f9660] !px-8 !py-4 !text-base !font-semibold !text-[#7f9660] hover:!bg-[#eff1e6]"
              >
                <BookOpen className="h-5 w-5" aria-hidden="true" />
                {t.menu.heroSecondaryCta}
              </ButtonLink>
            </div>

            <div className="mt-11 grid max-w-3xl grid-cols-3 gap-5 border-t border-[#ddd7c9] pt-9">
              <div>
                <p className="font-display text-[1.7rem] font-semibold text-[#7f9660] sm:text-[2.4rem]">
                  {t.menu.heroStats.happy.value}
                </p>
                <p className="mt-3 text-sm text-[#666564] sm:text-base">
                  {t.menu.heroStats.happy.label}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 font-display text-[1.7rem] font-semibold text-[#7f9660] sm:text-[2.4rem]">
                  {t.menu.heroStats.rating.value}
                  <Star className="h-6 w-6 fill-current" aria-hidden="true" />
                </p>
                <p className="mt-3 text-sm text-[#666564] sm:text-base">
                  {t.menu.heroStats.rating.label}
                </p>
              </div>
              <div>
                <p className="font-display text-[1.7rem] font-semibold text-[#7f9660] sm:text-[2.4rem]">
                  {t.menu.heroStats.specialty.value}
                </p>
                <p className="mt-3 text-sm text-[#666564] sm:text-base">
                  {t.menu.heroStats.specialty.label}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex min-h-[28rem] items-center justify-center py-6 lg:min-h-[41rem]"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,150,96,0.12),transparent_42%)]"
              aria-hidden="true"
            />

            {imageVariant === "brand" ? (
            <div className="relative flex h-[20rem] w-[20rem] items-center justify-center sm:h-[25rem] sm:w-[25rem] lg:h-[36rem] lg:w-[36rem]">
              <img
                src={heroFondo}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-auto w-[16rem] max-w-none object-contain drop-shadow-[0_26px_40px_rgba(120,79,38,0.22)] sm:w-[20rem] lg:w-[29rem] xl:w-[32rem]"
              />
              <div className="absolute inset-[31%] overflow-hidden  shadow-[0_18px_45px_rgba(103,110,76,0.14)]">
                <img
                  src={logoOriginal}
                  alt="Café/ina"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            ) : (
            <div className="relative w-full max-w-[36rem] pb-12 pr-10 sm:pr-16">
              <img
                src={clientPhoto("cafe-y-pan-dulce-en-barra")}
                alt={t.menu.heroPhotoAlt}
                fetchPriority="high"
                width={960}
                height={1280}
                className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-strong"
              />
              <img
                src={clientPhoto("brindis-bebidas-frias")}
                alt={t.menu.heroDetailAlt}
                width={480}
                height={640}
                className="absolute bottom-0 right-0 aspect-[3/4] w-[42%] rotate-6 rounded-[1.75rem] border-[6px] border-bg object-cover shadow-strong"
              />
              <img src={logoOriginal} alt="Café/ina" width={88} height={88} className="absolute -left-3 top-6 h-20 w-20 -rotate-6 rounded-full border-4 border-bg object-cover shadow-soft sm:h-24 sm:w-24" />
            </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
