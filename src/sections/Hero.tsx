import { SignatureHero } from "../components/SignatureHero";

export function Hero() {
  return (
    <SignatureHero
      id="inicio"
      imageVariant="brand"
      primaryHref="#contacto"
      secondaryHref="/menu"
    />
  );
}
