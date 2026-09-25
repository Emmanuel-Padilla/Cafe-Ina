import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { bakery } from "../data/bakery";

export function useDocumentMeta() {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    const isBakery = pathname === bakery.pageUrl;
    const title = isBakery ? t.bakeryPage.metaTitle : pathname === "/menu" ? t.meta.menuTitle : t.meta.title;
    const description =
      isBakery ? t.bakeryPage.metaDescription : pathname === "/menu" ? t.meta.menuDescription : t.meta.description;

    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute("content", description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescription) ogDescription.setAttribute("content", description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    if (twitterDescription)
      twitterDescription.setAttribute("content", description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      const url = new URL(canonical.href);
      url.pathname = pathname;
      url.hash = "";
      url.search = "";
      canonical.href = url.href;
    }

    const schema = document.querySelector('script[type="application/ld+json"]');
    const originalSchema = schema?.textContent;
    const socialImages = [...document.querySelectorAll<HTMLMetaElement>('meta[property="og:image"], meta[name="twitter:image"]')];
    const originalSocialImages = socialImages.map((image) => image.content);
    if (isBakery) {
      const imageUrl = new URL(bakery.photos.croissants, canonical?.href ?? window.location.origin).href;
      socialImages.forEach((image) => { image.content = imageUrl; });
    }
    if (isBakery && schema) {
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Bakery",
        name: `${bakery.name} ${bakery.descriptor}`,
        url: canonical?.href,
        image: new URL(bakery.photos.croissants, canonical?.href ?? window.location.origin).href,
        email: bakery.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Encarnación Rosas #1A",
          addressLocality: "Ajijic",
          addressRegion: "Jalisco",
          postalCode: "45920",
          addressCountry: "MX",
        },
        sameAs: [bakery.facebookUrl],
      });
    }
    return () => {
      if (schema && originalSchema) schema.textContent = originalSchema;
      socialImages.forEach((image, index) => { image.content = originalSocialImages[index]; });
    };
  }, [pathname, t]);
}
