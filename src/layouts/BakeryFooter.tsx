import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "../components/Container";
import { BakeryIcon } from "../components/BakeryIcon";
import { useLanguage } from "../context/LanguageContext";
import { bakery } from "../data/bakery";

export function BakeryFooter() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#39251c] py-12 text-[#fff8ec]">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href={bakery.pageUrl} className="inline-flex items-center gap-4"><BakeryIcon className="h-11 w-16" /><span className="font-display text-3xl">Backhaus <span className="block font-sans text-[0.65rem] uppercase tracking-[0.3em]">bakehouse</span></span></a>
            <p className="mt-4 text-sm text-[#fff8ec]/70">{t.bakeryPage.footerConnection}</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a href="/" className="inline-flex items-center gap-2 py-3 hover:underline"><ArrowLeft className="h-4 w-4" aria-hidden="true" />{t.bakeryPage.backToCafe}</a>
            <a href={bakery.facebookUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 py-3 hover:underline">Facebook<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-[#fff8ec]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {t.bakeryPage.footerRights}</p>
          <p>{t.footer.madeBy} <a href="https://udigitalbusiness.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#fff8ec] underline-offset-4 hover:underline focus-visible:underline">Udigital Business</a></p>
        </div>
      </Container>
    </footer>
  );
}
