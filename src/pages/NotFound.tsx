import { useLanguage } from "../context/LanguageContext";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";

export function NotFound() {
  const { locale } = useLanguage();

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-7xl italic text-primary">404</span>
      <h1 className="mt-4 font-display text-2xl font-medium text-text">
        {locale === "es" ? "Página no encontrada" : "Page not found"}
      </h1>
      <p className="mt-2 max-w-md text-sm text-text-muted">
        {locale === "es"
          ? "El enlace que buscas no existe o fue movido."
          : "The link you're looking for doesn't exist or was moved."}
      </p>
      <ButtonLink href="/" variant="primary" className="mt-8">
        {locale === "es" ? "Volver al inicio" : "Back to home"}
      </ButtonLink>
    </Container>
  );
}
