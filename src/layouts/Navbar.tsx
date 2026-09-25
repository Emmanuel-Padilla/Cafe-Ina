import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { navItems } from "../data/nav";
import { Container } from "../components/Container";
import { ThemeToggle } from "../components/ThemeToggle";
import { LanguageToggle } from "../components/LanguageToggle";
import { ButtonLink } from "../components/Button";
import { BakeryIcon } from "../components/BakeryIcon";
import logo from "../assets/images/logo-original.png";

export function Navbar() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isFirstRender = useRef(true);

  const sectionHref = (href: string) => href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
  const logoHref = pathname === "/" ? "#inicio" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (open) {
      closeButtonRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-2 backdrop-blur-md transition-all duration-300 ${
            scrolled
              ? "border-transparent bg-nav-scrolled shadow-lg"
              : "border-border bg-nav shadow-sm"
          }`}
          style={{
            color: scrolled ? "var(--nav-text-scrolled)" : "var(--nav-text)",
          }}
        >
          <a
            href={logoHref}
            className="flex shrink-0 items-center gap-2 rounded-full py-1 pl-1 pr-3"
          >
            <img
              src={logo}
              alt="Café/ina"
              className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
              width={44}
              height={44}
            />
            <span className="font-display text-lg italic tracking-tight">
              Café/ina
            </span>
          </a>

          <nav
            aria-label="Principal"
            className="hidden items-center xl:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={sectionHref(item.href)}
                aria-current={pathname === item.href ? "page" : undefined}
                className="flex items-center gap-2 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium transition-colors hover:bg-current/10"
              >
                {item.key === "bakery" && <BakeryIcon className="h-[1em] w-[1.5em]" />}
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <ThemeToggle />
            <LanguageToggle />
            {pathname !== "/menu" && (
              <ButtonLink
                href="/menu"
                variant="primary"
                className="ml-1 !hidden !px-5 !py-2.5 sm:!inline-flex"
              >
                {t.hero.ctaPrimary}
              </ButtonLink>
            )}
            <button
              type="button"
              ref={menuButtonRef}
              onClick={() => setOpen(true)}
              aria-label={t.buttons.openMenu}
              aria-expanded={open}
              className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-current/10 xl:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-moss text-ivory xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={t.a11y.mobileMenuLabel}
          >
            <Container className="flex h-full flex-col py-6">
              <div className="flex shrink-0 items-center justify-between">
                <a
                  href={logoHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <img
                    src={logo}
                    alt="Café/ina"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="font-display text-lg italic">
                    Café/ina
                  </span>
                </a>
                <button
                  type="button"
                  ref={closeButtonRef}
                  onClick={() => setOpen(false)}
                  aria-label={t.buttons.closeMenu}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <nav
                aria-label="Móvil"
                className="mt-6 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto"
              >
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.key}
                    href={sectionHref(item.href)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="flex shrink-0 items-center gap-3 border-b border-white/10 py-3 font-display text-2xl italic sm:py-4 sm:text-3xl"
                  >
                    {item.key === "bakery" && <BakeryIcon className="h-[1em] w-[1.5em]" />}
                    {t.nav[item.key as keyof typeof t.nav]}
                  </motion.a>
                ))}
              </nav>

              {pathname !== "/menu" && (
                <ButtonLink
                  href="/menu"
                  onClick={() => setOpen(false)}
                  variant="primary"
                  className="mt-6 w-full shrink-0 bg-ivory !text-moss"
                >
                  {t.hero.ctaPrimary}
                </ButtonLink>
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
