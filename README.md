# Café/ina — sitio web

Sitio para Café/ina (Ajijic, Jalisco). React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + React Router.

## Desarrollo

Requiere Node 22+ (el repo se probó con `nvm use v22.22.2`; Node 20 con npm 6 preinstalado en este equipo da problemas).

```bash
pnpm install
pnpm dev       # servidor de desarrollo
pnpm build     # build de producción (tsc -b && vite build)
pnpm preview   # previsualizar el build
```

## Estructura

```
src/
  components/   # UI reutilizable (Button, BrickBlock, GalleryTile, ContactForm...)
  sections/     # Secciones del home (Hero, Menu, About, Gallery, Location...)
  layouts/      # Navbar, Footer, RootLayout
  pages/        # Home, NotFound (React Router)
  context/      # LanguageContext (es/en), ThemeContext (claro/oscuro)
  translations/ # es.ts / en.ts — todos los textos centralizados aquí
  data/         # site.ts (dirección, redes, mapa), menu.ts, gallery.ts, nav.ts
  assets/images/  # logo + fotografías reales de fachada (recortadas)
```

## Actualización del cliente — septiembre de 2026

Fuente: `Cafeina_Informacion_Pendiente_Web_Simplificado.pdf`, respuestas de la columna “Respuesta / archivo” y comentario final.

- Horario: martes a sábado, 7:00–21:00; domingo, 8:00–17:00; lunes cerrado. Reflejado en contacto, ubicación, footer, días de servicio y datos estructurados.
- Historia: casa familiar de varias generaciones, calidez y “una casa antigua con un corazón nuevo”.
- Menú: descripción del cliente, categoría de sándwiches y salados, y enlace a su carta vigente en Canva (`src/data/site.ts`). El enlace redirige al editor y bloqueó la lectura automatizada; los detalles completos de la carta siguen pendientes de una exportación legible.
- Promociones: “Cumpleañeros no pagan” y latte caliente o frío + grill cheese por $150. El PDF no especifica condiciones de cumpleaños; el sitio invita a consultarlas en barra.
- Eventos: sección de barra de café con fotografía real y consulta de paquetes por Instagram. El PDF no incluye contenido, capacidad ni precios de esos paquetes; no se equiparan con los paquetes existentes del local.
- Se conservan el hero y los llamados a la acción aprobados, así como los precios existentes marcados como correctos.
- Contenido actualizado en español e inglés.

## Fotografías del cliente

Las 35 fotografías originales se conservan en `public/comparido-cliente/`. El catálogo y sus descripciones en ambos idiomas están en `src/data/photos.ts`.

La cabecera del menú, historia, categorías de menú, especialidades y eventos usan una selección de estas fotos. El inicio conserva su imagen original de marca. La galería permite recorrer las 35 imágenes por páginas y ampliarlas. Las fotos fuera de portada se cargan bajo demanda. Los productos sin una fotografía identificable usan un bloque gráfico, sin atribuirles una foto de otro producto.

## Nuestra panadería — Backhaus bakehouse

La página completa está en `/panaderia`, enlazada desde el navbar mediante el icono de croissant sin fondo y el texto “Nuestra panadería”. El inicio conserva una presentación breve y la portada original de Café/ina.

- Página: `src/pages/BakeryPage.tsx`. Incluye presentación, productos, oficio, galería ampliable de nueve imágenes, video de inauguración, ubicación y contacto.
- Datos: `src/data/bakery.ts`. `websiteUrl` permite cambiar los accesos a un dominio independiente en el futuro. El enlace de Facebook se conserva como red social.
- Presentación en el inicio: `src/sections/Bakery.tsx`. Pie propio: `src/layouts/BakeryFooter.tsx`.
- Icono transparente: `public/images/panaderia/backhaus-icono.png`; el componente `BakeryIcon` adapta su color al contexto. El logo original permanece intacto.
- Fotos propias del perfil y fotogramas del video público: `public/images/panaderia/`.
- La paleta de Backhaus se limita a `.bakery-theme`; Café/ina conserva sus colores. Textos, metadatos, mapa, navegación y galería funcionan en español e inglés.
- [Fuentes, activos y prompts del logo](docs/backhaus-fuentes.md).

## Información y conexiones pendientes

Los campos de teléfono/WhatsApp, correo, enlace exacto de Google Maps, mensaje de WhatsApp y canales de reservaciones/pedidos/delivery/eventos están vacíos en el PDF. `src/data/site.ts` conserva teléfono, WhatsApp y correo en `null`, y el mapa sigue usando la dirección existente.

- Falta la exportación del menú de Canva para contrastar todos los productos y precios.
- Faltan detalles de paquetes para eventos y condiciones específicas de promociones.
- El formulario de reservaciones preexistente no tiene integración de envío. Esta actualización no conecta ni confirma reservas.

## Publicar en Hostinger

El sitio se publica en la raíz del dominio (`public_html`). Ejecuta `pnpm build` y sube **todo el contenido de `dist/`**, incluido el archivo oculto `.htaccess`, directamente a `public_html/`. No subas la carpeta `dist` como subcarpeta.

`public/.htaccess` se copia automáticamente al build y dirige `/menu` y `/panaderia` a `index.html`; React Router muestra la página correspondiente. Las páginas están en el JavaScript compilado, por lo que no necesitan un archivo HTML independiente por ruta.

Las imágenes de Backhaus están en `images/panaderia/`. Antes estaban en una carpeta `panaderia/` que coincidía con la dirección de la página: si el servidor intenta abrir esa carpeta sin un índice, puede responder 403. La regla explícita de la página se aplica antes de comprobar directorios existentes, también si queda esa carpeta de una publicación anterior.

Para actualizar la publicación existente:

1. Guarda una copia del `.htaccess` del servidor fuera de `public_html`. Si contiene reglas propias de HTTPS, dominio o seguridad, consérvalas e integra el bloque de navegación del nuevo archivo antes del antiguo fallback de React.
2. Sube el contenido del nuevo `dist/`, incluida la carpeta `images/`, y actualiza `.htaccess` con las reglas suministradas. Conserva los archivos ajenos a esta aplicación.
3. Abre `/panaderia` directamente y recarga la página; revisa también `/menu`, el logo y la galería. Si sigue apareciendo la versión anterior, limpia la caché de Hostinger/CDN y del navegador.

La carpeta antigua `panaderia/` puede retirarse después de verificar la publicación; deja de utilizarse en el nuevo build.

## Dominio

El dominio oficial es `https://cafe-ina.com.mx/`, configurado en `src/data/site.ts`, `index.html`, `public/robots.txt` y `public/sitemap.xml`. Los enlaces canonical, Open Graph, Twitter Cards y datos estructurados usan este dominio.

El sitemap incluye las tres páginas públicas: `/`, `/menu` y `/panaderia`. Se copia al build como `dist/sitemap.xml` y se anuncia en `robots.txt`. No declara rutas alternativas por idioma porque español e inglés se muestran en la misma URL mediante el selector de idioma. Al publicar, comprueba que `https://cafe-ina.com.mx/sitemap.xml` sirva el XML.

## Mapa

El embed de Google Maps en Ubicación (`src/data/site.ts` → `mapsEmbedSrc`) usa una búsqueda por texto de la dirección, no coordenadas GPS (no se tenía una lat/lng confirmada). Si tienes el enlace "compartir ubicación" exacto de Google Maps, reemplázalo ahí para mayor precisión.
