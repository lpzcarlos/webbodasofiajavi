Crea una invitación digital de boda de una sola página (single-page) con scroll suave entre secciones. Estilo visual: acuarela romántica editorial. El diseño debe sentirse como una ilustración pintada a mano, cálido y elegante.

---

## IDENTIDAD VISUAL

**Paleta de colores:**
- Fondo base: #F5EFE0 (crema marfil) — debe tener una textura CSS que simule papel acuarela pintado: usa gradientes radiales y lineales sutiles superpuestos en capas con opacidades bajas (~0.3–0.5) en tonos #E8D5B0, #D4B896 y #C9A96E para crear la ilusión de pigmento acuarela absorbido en papel. No uses imágenes de textura externas.
- Acento principal: #C4845A (terracota)
- Acento dorado: #C9A96E
- Texto principal: #4A3828
- Texto secundario: #8A7B6E
- Detalle azul cielo: #B8CDD8

**Tipografía:**
- Títulos: fuente serif elegante (usa Google Fonts: "Cormorant Garamond" weight 300–400, tamaño generoso)
- Subtítulos y etiquetas: "Cormorant Garamond" italic
- Cuerpo y datos: "Lato" o "Raleway" weight 300, tamaño pequeño, mucho tracking
- Nombres de los novios: tratamiento especial, muy grande, letra fina, con ligaduras si es posible

**Estilo de componentes:**
- Sin bordes duros. Separadores entre secciones mediante formas SVG orgánicas tipo "mancha de acuarela" o "ola suave" en tonos de la paleta
- Botones: pill shape, fondo #C4845A o #C9A96E, texto blanco crema, sin sombras duras
- Formularios: campos con borde inferior solo (estilo línea), fondo transparente
- Cards: sin box-shadow estándar. Usar sombra muy difusa cálida (0 8px 40px rgba(196,132,90,0.12))

---

## SECCIONES

### 1. HERO
- Imagen de fondo: la foto de la pareja en la Torre Eiffel (imagen proporcionada, estilo acuarela)
- La imagen debe ocupar el 100vh, con overlay muy sutil crema (#F5EFE0 al 20%) para no tapar la foto
- Sobre la imagen, centrado verticalmente: una frase poética pequeña en italic como "Una historia de amor que comienza aquí"
- Los nombres "Sofía & Javier" en tipografía serif gigante (display), elegante
- Debajo: la fecha "3 · Octubre · 2026" con tracking amplio en mayúsculas pequeñas
- Sin botón CTA, dejar que el scroll invite a continuar. Añadir un pequeño chevron animado abajo

### 2. CUENTA ATRÁS
- Sección de altura media, fondo con la textura acuarela base
- Título pequeño en italic: "Faltan..."
- Contador en tiempo real (JavaScript) mostrando: Días · Horas · Minutos · Segundos
- Números grandes en #C4845A, etiquetas pequeñas en #8A7B6E debajo de cada número
- Separados por un punto · decorativo dorado

### 3. CEREMONIA
- Título de sección: "La Ceremonia"
- Imagen: la ilustración acuarela de la iglesia (imagen proporcionada)
- La imagen debe tener bordes difuminados hacia el fondo, efecto vignette suave
- Nombre del lugar: "Iglesia de San Nicolás" en serif grande
- Dirección debajo en texto pequeño: Plaza de San Nicolás, Guadalajara
- Hora: "12:00 h" con tratamiento tipográfico destacado en #C4845A
- Botón pill: "Cómo llegar →" que abra Google Maps en nueva pestaña
  Link: https://maps.google.com/?q=Iglesia+San+Nicolas+Guadalajara

### 4. BANQUETE
- Título de sección: "La Celebración"
- Imagen placeholder rectangular con aspect ratio 16:9 con texto centrado "[ Imagen La Quinta del Jarama ]" — dejar preparado para sustituir
- Nombre del lugar: "La Quinta del Jarama" en serif grande
- Dirección: Sigüenza, Guadalajara
- Hora: "15:00 h"
- Botón pill: "Cómo llegar →"
  Link: https://maps.google.com/?q=La+Quinta+del+Jarama+Sigüenza

### 5. ITINERARIO
- Título: "El Gran Día"
- Línea de tiempo vertical centrada, estilo timeline elegante
- Línea vertical en #C9A96E (dorado), puntos circulares rellenos en #C4845A
- Cada evento:
  · 12:00 h — Ceremonia
  · 13:00 h — Aperitivo
  · 15:00 h — Banquete
  · 19:00 h — ¡Empieza la fiesta!
  · 00:00 h — Hasta pronto
- Hora en #C4845A bold, descripción en #4A3828 regular
- Animación: cada punto aparece con fade-in al hacer scroll (Intersection Observer)

### 6. CONFIRMACIÓN DE ASISTENCIA
- Título: "¿Vendrás?"
- Subtítulo italic pequeño: "Confírmanos tu asistencia antes del 1 de septiembre de 2026"
- Formulario con los siguientes campos (estilo línea, sin bordes completos):
  1. Nombre del invitado — desplegable <select> con lista de nombres (dejar 10 opciones de ejemplo: "Invitado 1", "Invitado 2"... hasta "Invitado 10", indicar en comentario del código que aquí se deben añadir los nombres reales)
  2. ¿Vienes acompañado/a? — radio buttons: "Sí" / "No"
  3. Nombre del acompañante — campo de texto, visible solo si responde "Sí" (mostrar/ocultar con JS)
  4. ¿Necesitas autobús? — radio buttons: "Sí" / "No"
  5. Alergias o intolerancias — textarea pequeño, placeholder: "Escríbenos si tienes alguna alergia o intolerancia alimentaria"
  6. Mensaje para los novios — textarea, placeholder: "Si quieres dejarnos unas palabras..."
- Botón de envío: "Confirmar asistencia" en pill #C4845A
- Nota: el formulario debe tener action vacío por ahora con un alert() de confirmación al enviar. Indicar en comentario que se debe conectar a backend/Formspree/n8n

### 7. LISTA DE BODAS
- Título: "Con todo nuestro cariño"
- Párrafo romántico centrado, máximo 3 líneas, en italic: "El mejor regalo es vuestra presencia. Si aun así queréis contribuir a nuestra nueva vida juntos, aquí os dejamos nuestros datos:"
- Número de cuenta en formato visual destacado: "ES12 3456 7890 1234 5678 9012" (dato de ejemplo, indicar en comentario que sustituir)
- Nombre del titular: "Sofía García y Javier Martínez" (ejemplo)
- Pequeño icono o emoji de sobre/corazón decorativo

### 8. MÚSICA — LISTA DE SPOTIFY
- Título: "Ponle música a nuestra historia"
- Párrafo: "Ayúdanos a crear la banda sonora perfecta. Añade tus canciones favoritas a nuestra lista de Spotify y las pondremos en la fiesta."
- Botón grande pill con icono de Spotify (SVG inline del logo de Spotify en blanco): "Añadir canciones a la lista →"
  Link: https://open.spotify.com/playlist/XXXXXXXX (placeholder, indicar en comentario que sustituir con el link real)
- Color del botón: #1DB954 (verde Spotify) para mantener identidad de marca

---

## FOOTER
- Fondo oscuro suave: #4A3828
- Texto centrado en crema: "Sofía & Javier · 03.10.2026"
- Frase pequeña italic: "Gracias por ser parte de nuestra historia"
- Sin links ni redes sociales

---

## REQUISITOS TÉCNICOS
- React + Next.js (TailwindCSS). 
- Responsive mobile-first. En móvil: tipografías escalan, timeline se adapta, formulario es cómodo de rellenar con pulgar
- El contador de cuenta atrás debe funcionar con JavaScript puro calculando la diferencia con la fecha 2026-10-03T12:00:00
- Smooth scroll entre secciones con scroll-behavior: smooth
- Todas las secciones con padding generoso (min 80px vertical en desktop, 48px en móvil)
- Las imágenes de iglesia y pareja deben referenciarse como: ./iglesia.png y ./pareja.png
- El código debe estar bien comentado indicando dónde personalizar: nombres de invitados, número de cuenta, link de Spotify, links de Google Maps, imágenes