import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BakeryFooter } from "./BakeryFooter";

export function RootLayout({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-text">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-primary-foreground"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {pathname === "/panaderia" ? <BakeryFooter /> : <Footer />}
    </div>
  );
}
