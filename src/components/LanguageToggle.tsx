import { useLanguage } from "../context/LanguageContext";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={`${
        locale === "es" ? "Switch to English" : "Cambiar a español"
      }`}
      className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-current/10 ${className}`}
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
