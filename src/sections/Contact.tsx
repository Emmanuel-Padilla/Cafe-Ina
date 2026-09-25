import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";
import { Container } from "../components/Container";
import { useLanguage } from "../context/LanguageContext";
import { site } from "../data/site";

const infoIcons = [Clock3, MapPin, Phone];

export function Contact() {
  const { t } = useLanguage();

  const infoCards = [
    {
      title: t.contact.cards.hours.title,
      lines: t.contact.cards.hours.lines,
    },
    {
      title: t.contact.cards.location.title,
      lines: t.contact.cards.location.lines,
    },
    {
      title: t.contact.cards.phone.title,
      lines: t.contact.cards.phone.lines,
    },
  ];

  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-8 lg:gap-10 xl:grid-cols-[0.9fr_1.15fr] xl:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex rounded-full bg-[#a8bb7f] px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_35px_rgba(127,150,96,0.2)] sm:px-7 sm:text-sm">
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-6 font-display text-[2.3rem] leading-[0.98] dark:text-white text-[#2f2f31] sm:mt-7 sm:text-[3.2rem]">
              {t.contact.title}
              <span className="ml-3 italic">{t.contact.titleAccent}</span>
            </h2>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-[1.72] text-[#666564] dark:text-gray-300 sm:mt-5 sm:text-[1rem]">
              {t.contact.subtitle}
            </p>

            <div className="mt-8 space-y-4 sm:mt-9 sm:space-y-5">
              {infoCards.map((card, index) => {
                const Icon = infoIcons[index];

                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-[1.7rem] border border-white/75 bg-[rgba(246,243,235,0.88)] p-5 shadow-[0_18px_48px_rgba(214,204,177,0.22)] sm:rounded-[1.9rem] sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex rounded-[1rem] bg-[#ebe6d8] p-3.5 text-[#819761] sm:rounded-[1.1rem]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-[1.45rem] uppercase leading-none text-[#819761] sm:text-[1.6rem]">
                          {card.title}
                        </h3>
                        <div className="mt-2.5 space-y-1 text-[0.98rem] leading-[1.55] text-[#666564] sm:text-[1rem]">
                          {card.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[1.8rem] border border-white/75 bg-[rgba(246,243,235,0.9)] p-5 shadow-[0_20px_56px_rgba(214,204,177,0.28)] sm:rounded-[2rem] sm:p-7 lg:p-8"
          >
            <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-3">
                  <span className="text-base font-semibold text-[#2f2f31] sm:text-[1.02rem]">
                    {t.contact.form.nameLabel}
                  </span>
                  <input
                    type="text"
                    placeholder={t.contact.form.namePlaceholder}
                    className="h-[3.75rem] rounded-[1rem] border border-[#e4ddcf] bg-white px-4 py-3 text-base text-[#2f2f31] outline-none transition-colors placeholder:text-[#8a8884] focus:border-[#95a978] sm:h-[4rem] sm:px-5"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="text-base font-semibold text-[#2f2f31] sm:text-[1.02rem]">
                    {t.contact.form.phoneLabel}
                  </span>
                  <input
                    type="tel"
                    placeholder={t.contact.form.phonePlaceholder}
                    className="h-[3.75rem] rounded-[1rem] border border-[#e4ddcf] bg-white px-4 py-3 text-base text-[#2f2f31] outline-none transition-colors placeholder:text-[#8a8884] focus:border-[#95a978] sm:h-[4rem] sm:px-5"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="text-base font-semibold text-[#2f2f31] sm:text-[1.02rem]">
                    {t.contact.form.emailLabel}
                  </span>
                  <input
                    type="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    className="h-[3.75rem] rounded-[1rem] border border-[#e4ddcf] bg-white px-4 py-3 text-base text-[#2f2f31] outline-none transition-colors placeholder:text-[#8a8884] focus:border-[#95a978] sm:h-[4rem] sm:px-5"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="text-base font-semibold text-[#2f2f31] sm:text-[1.02rem]">
                    {t.contact.form.peopleLabel}
                  </span>
                  <select className="h-[3.75rem] rounded-[1rem] border border-[#e4ddcf] bg-white px-4 py-3 text-base text-[#2f2f31] outline-none transition-colors focus:border-[#95a978] sm:h-[4rem] sm:px-5">
                    {t.contact.form.peopleOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-3">
                  <span className="text-base font-semibold text-[#2f2f31] sm:text-[1.02rem]">
                    {t.contact.form.dateLabel}
                  </span>
                  <div className="relative">
                    <input
                      type="date"
                      className="h-[3.75rem] w-full rounded-[1rem] border border-[#e4ddcf] bg-white px-4 py-3 pr-12 text-base text-[#2f2f31] outline-none transition-colors focus:border-[#95a978] sm:h-[4rem] sm:px-5 sm:pr-14"
                    />
                    <CalendarDays
                      className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#2f2f31] sm:right-5 sm:h-6 sm:w-6"
                      aria-hidden="true"
                    />
                  </div>
                </label>

                <label className="grid gap-3">
                  <span className="text-base font-semibold text-[#2f2f31] sm:text-[1.02rem]">
                    {t.contact.form.timeLabel}
                  </span>
                  <select className="h-[3.75rem] rounded-[1rem] border border-[#e4ddcf] bg-white px-4 py-3 text-base text-[#2f2f31] outline-none transition-colors focus:border-[#95a978] sm:h-[4rem] sm:px-5">
                    {t.contact.form.timeOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-3">
                <span className="text-base font-semibold text-[#2f2f31] sm:text-[1.02rem]">
                  {t.contact.form.notesLabel}
                </span>
                <textarea
                  rows={4}
                  placeholder={t.contact.form.notesPlaceholder}
                  className="rounded-[1rem] border border-[#e4ddcf] bg-white px-4 py-3 text-base text-[#2f2f31] outline-none transition-colors placeholder:text-[#8a8884] focus:border-[#95a978] sm:px-5"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#819761] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_38px_rgba(127,150,96,0.26)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#748957] sm:text-lg"
              >
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                {t.contact.form.submit}
              </button>
            </form>

            <p className="mt-5 text-sm text-[#8a8884]">
              {t.contact.form.helperPrefix}{" "}
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-[#819761] underline decoration-[#c5cfb2] underline-offset-4"
              >
                {t.contact.form.helperLink}
              </a>
              .
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
