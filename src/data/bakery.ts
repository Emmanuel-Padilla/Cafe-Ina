// Backhaus owns its content and assets independently of Café/ina.
// Set websiteUrl when its standalone website is available; the section CTA
// will link there, while /panaderia is the current complete bakery page.
export const bakery = {
  name: "Backhaus",
  descriptor: "bakehouse",
  logo: "/images/panaderia/logo-panaderia-hd.png",
  icon: "/images/panaderia/backhaus-icono.png",
  pageUrl: "/panaderia",
  websiteUrl: null as string | null,
  facebookUrl: "https://www.facebook.com/profile.php?id=61593121845814",
  videoUrl: "https://www.facebook.com/reel/2858833707835013/",
  email: "Backaus.bakehouse@gmail.com",
  address: "Encarnación Rosas #1A, Ajijic, Jalisco",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Backhaus+bakehouse+Encarnaci%C3%B3n+Rosas+1A+Ajijic+Jalisco",
  mapsEmbedSrc: "https://www.google.com/maps?q=Backhaus+bakehouse+Encarnaci%C3%B3n+Rosas+1A+Ajijic+Jalisco&output=embed",
  photos: {
    croissants: "/images/panaderia/backhaus-croissants.jpg",
    preparation: "/images/panaderia/backhaus-pan-en-preparacion.jpg",
    finishing: "/images/panaderia/backhaus-acabado-pan-dulce.jpg",
    glazing: "/images/panaderia/backhaus-glaseado-croissants.jpg",
    facade: "/images/panaderia/backhaus-fachada-inauguracion.jpg",
    display: "/images/panaderia/backhaus-vitrina.jpg",
    fruit: "/images/panaderia/backhaus-pan-con-fruta.jpg",
    trays: "/images/panaderia/backhaus-charolas-surtidas.jpg",
    rolls: "/images/panaderia/backhaus-roles.jpg",
  },
} as const;

export const bakeryGallery = Object.entries(bakery.photos).map(([id, src]) => ({ id, src }));
