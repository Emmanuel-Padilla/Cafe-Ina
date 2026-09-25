import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
} from "../components/icons/SocialIcons";
import { useLanguage } from "../context/LanguageContext";
import { site } from "../data/site";
import { bakery } from "../data/bakery";
import logo from "../assets/images/logo-original.png";
import footerDecor from "../assets/images/der1.png";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t.footer.links.home, href: "/#inicio" },
    { label: t.footer.links.specialties, href: "/#especialidades" },
    { label: t.footer.links.packages, href: "/#paquetes" },
    { label: t.events.eyebrow, href: "/#eventos" },
    { label: t.promotions.eyebrow, href: "/#promociones" },
    { label: t.footer.links.menu, href: "/menu" },
    { label: t.footer.links.about, href: "/#nosotros" },
    { label: t.nav.bakery, href: bakery.websiteUrl ?? bakery.pageUrl },
    { label: t.footer.links.reserve, href: "/#contacto" },
  ];

  const socialLinks = [
    {
      href: site.social.instagram,
      label: "Instagram Café/ina",
      Icon: InstagramIcon,
    },
    {
      href: site.social.facebook,
      label: "Facebook Café/ina",
      Icon: FacebookIcon,
    },
    {
      href: site.social.instagram,
      label: "TikTok Café/ina",
      Icon: TiktokIcon,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#2f2f31] text-white">
      <img
        src={footerDecor}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 z-0 w-[17rem] max-w-none opacity-100 drop-shadow-[0_24px_38px_rgba(0,0,0,0.28)] sm:w-[20rem] lg:w-[25rem] xl:w-[29rem]"
      />

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 py-12 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-4">
              <img
                src={logo}
                alt="Café/ina"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20 sm:h-14 sm:w-14"
                width={56}
                height={56}
              />
              <span className="font-display text-[2.2rem] leading-none text-[#b5c88b] sm:text-[2.5rem]">
                Café/ina
              </span>
            </a>
            <p className="mt-5 max-w-md text-[0.98rem] leading-[1.7] text-white/68 sm:mt-6 sm:text-[1rem]">
              {t.footer.tagline}
            </p>

            <div className="mt-6 flex items-center gap-3 sm:mt-7 sm:gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-white/12 bg-white/[0.07] text-white/[0.88] transition-colors hover:bg-white/[0.12] sm:h-12 sm:w-12 sm:rounded-[1.1rem]"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-[1.55rem] uppercase tracking-[0.08em] text-[#b5c88b] sm:text-[1.7rem]">
              {t.footer.quickMenuTitle}
            </h3>
            <ul className="mt-5 space-y-3 text-[0.98rem] text-white/68 sm:mt-6 sm:space-y-4 sm:text-[1rem]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[1.55rem] uppercase tracking-[0.08em] text-[#b5c88b] sm:text-[1.7rem]">
              {t.footer.hoursTitle}
            </h3>
            <div className="mt-5 space-y-4 text-[0.98rem] text-white/68 sm:mt-6 sm:text-[1rem]">
              <div>
                <p>{t.footer.hours.weekdaysLabel}</p>
                <p className="mt-2 text-white/[0.52]">{t.footer.hours.weekdaysValue}</p>
              </div>
              <div>
                <p>{t.footer.hours.saturdayLabel}</p>
                <p className="mt-2 text-white/[0.52]">{t.footer.hours.saturdayValue}</p>
              </div>
              <div>
                <p>{t.footer.hours.sundayLabel}</p>
                <p className="mt-2 text-white/[0.52]">{t.footer.hours.sundayValue}</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-[0.92rem] text-white/[0.42] sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-7 sm:text-[0.98rem]">
          <p>
            © {year} Café/ina. {t.footer.rights}
          </p>
          <p>
            {t.footer.madeBy} <a href="https://udigitalbusiness.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#b5c88b] underline-offset-4 hover:underline focus-visible:underline">Udigital Business</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
