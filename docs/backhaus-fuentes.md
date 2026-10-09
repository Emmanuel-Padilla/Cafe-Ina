# Backhaus bakehouse — integración en Café/ina

Revisión: 24 de septiembre de 2026.

## Fuentes públicas

- [Perfil indicado por el cliente](https://www.facebook.com/profile.php?id=61593121845814).
- [Fotografía de portada: croissants](https://www.facebook.com/photo/?fbid=122104682757437394).
- Fotograma de vista previa del video de inauguración, publicado el 24 de agosto, visible en el mismo perfil. Se utiliza como fotografía de las bandejas en preparación, sin anunciar una nueva inauguración.

El navegador pudo leer la información pública sin iniciar sesión. La búsqueda web no indexaba correctamente el perfil; se contrastó el contenido renderizado de Facebook con sus metadatos públicos.

Datos incorporados: nombre Backhaus bakehouse; panadería artesanal; horneado fresco diario; uso de mantequilla; dirección Encarnación Rosas #1A, Ajijic; correo `Backaus.bakehouse@gmail.com` (se conserva la escritura exacta publicada, sin añadir la h de la marca). La relación “nuestra panadería” procede del encargo del cliente.

No se publican horarios concretos, precios, teléfono ni canales de pedidos porque no se verificaron. El enlace de Maps busca la dirección confirmada; no se presenta como una ficha verificada. La dirección pertenece a Backhaus y no sustituye la de Café/ina.

## Archivos

- `public/images/panaderia/backhaus-croissants.jpg`: imagen pública de portada, 1320 × 1753.
- `public/images/panaderia/backhaus-pan-en-preparacion.jpg`: miniatura pública del video, 540 × 960.
- `public/logo-panaderia.png`: original del cliente, 624 × 400, conservado.
- `public/images/panaderia/logo-panaderia-hd.png`: versión restaurada con imagegen integrado, 1567 × 1004. Es una restauración generativa del diseño proporcionado, no un archivo vectorial.

Las fotos se guardan localmente para evitar depender de URLs temporales de Facebook. No se retocaron ni se generaron fotos de producto.

## Página completa y conexión con Café/ina

`/panaderia` es una página real dentro del sitio, en `src/pages/BakeryPage.tsx`. Tiene datos, traducciones, galería y pie propios. La vista de inicio se reduce a una presentación con enlace, conservando la portada original de Café/ina.

El navbar muestra el icono del croissant al lado de “Nuestra panadería”, al final de los enlaces, con el mismo tamaño de texto y espaciado que los demás elementos. El icono escala con la tipografía. Tanto el navbar como el pie y la presentación del inicio apuntan a `/panaderia`. Al definir `bakery.websiteUrl`, estos accesos pueden llevar al futuro dominio independiente.

La paleta de Backhaus está limitada a `.bakery-theme`. El título, descripción, canonical y datos estructurados de la nueva ruta corresponden a la panadería; no se le atribuyen los horarios ni la dirección de Café/ina. Los metadatos usan el dominio oficial `https://cafe-ina.com.mx/` y la ruta `/panaderia` está incluida en el sitemap.

## Más imágenes y video

Fuente adicional: [reel público de inauguración](https://www.facebook.com/reel/2858833707835013/), enlazado desde el perfil oficial. Se descargó su pista visual pública y se extrajeron fotogramas con FFmpeg, sin alterar su contenido. Se conserva su resolución real, 540 × 960; no se presentan como fotografías de mayor resolución.

- `backhaus-acabado-pan-dulce.jpg`: segundo 1.
- `backhaus-glaseado-croissants.jpg`: segundo 3.
- `backhaus-fachada-inauguracion.jpg`: segundo 7.
- `backhaus-vitrina.jpg`: segundo 10.8.
- `backhaus-pan-con-fruta.jpg`: segundo 13.2.
- `backhaus-charolas-surtidas.jpg`: segundo 14.8.
- `backhaus-roles.jpg`: segundo 17.

La galería reúne estas siete imágenes, la portada y la miniatura de preparación originales. La inauguración se presenta como un evento pasado, no como una promoción vigente. Los nombres de producto son categorías descriptivas de piezas visibles, sin precios ni recetas no confirmadas. Las pestañas públicas de fotos e información no ofrecieron horarios concretos ni una carta; el sitio invita a consultar horarios y disponibilidad en Facebook.

## Mejora del logo

Herramienta: `image_gen.imagegen`, modo integrado (edición de la imagen local; sin CLI).

Prompt utilizado:

> Use case: precise-object-edit. Asset type: existing bakery logo quality restoration for a website. Input image is the edit target, NOT a style reference. Restore and upscale this exact existing 624x400 logo to high resolution (approximately 2496x1600 or highest compatible landscape resolution, same 1.56:1 composition). Preserve the exact original design: a single ivory hand-drawn croissant outline on a completely flat warm orange background, identical shape, stroke paths, orientation, proportions, margins and colors. Refine blurry/jagged edges into clean, smooth, crisp strokes while preserving the hand-drawn character. Do not redesign or invent details. No words, lettering, name, shadow, gradient, texture, frame, extra symbols or mockup. Keep the orange background opaque and uniform. The result is a faithful higher quality version of the supplied logo.

Se revisó el resultado visualmente antes de integrarlo. La resolución entregada por la herramienta es 1567 × 1004.

## Icono sin fondo para navegación

Archivo final: `public/images/panaderia/backhaus-icono.png`, 1566 × 1004, PNG con canal alfa. Generado con `image_gen.imagegen` integrado, a partir del logo mejorado, y revisado antes de incorporarlo. Se utiliza como máscara CSS para conservar el dibujo y adaptar su color al tema, sin el rectángulo naranja ni texto dentro de la imagen.

Prompt de extracción:

> Use case: background-extraction. Edit target: the provided Backhaus croissant logo. Remove ONLY the orange background and produce the exact existing ivory hand-drawn croissant icon on a genuinely transparent alpha background. Preserve the precise existing strokes, proportions, shape, orientation and ivory color. No text, wordmark, orange tile, outline around the whole icon, shadow, glow, border or additional marks. Tightly frame the existing complete croissant with a small uniform transparent margin, landscape aspect ratio. Crisp high resolution PNG with actual transparency. Intended use: a small navigation icon next to the separately rendered words 'Nuestra panadería'; DO NOT include any words in the image.

Prompt de limpieza:

> Clean up this transparent croissant icon. Keep ONLY the continuous smooth ivory line strokes that draw the croissant; remove ALL floating speckles, mottled residue, grain, stray dots and jagged pixel noise from the transparent spaces inside and outside the linework. Crisp clean vector-like antialiased edges. All spaces between the line strokes must be completely transparent, alpha=0. Strokes are solid uniform ivory. Preserve the croissant's exact proportions, orientation, hand-drawn curved paths and complete silhouette. No background, no text, no shadow, no additional contours. Output a real transparent PNG, suitable for use as a clean small navigation logo.
