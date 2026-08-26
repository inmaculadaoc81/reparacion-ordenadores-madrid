REPARACION-ORDENADORES-MADRID — SERVICIO TÉCNICO MULTIMARCA (MADRID)

Repositorio procesado por primera vez en esta sesión (no tenía README).

Dominio:
https://reparacion-ordenadores-madrid.es/
(coherente en canonical, og:url y JSON-LD; sin colisión con ningún
otro dominio revisado en esta sesión)

Teléfono: +34 914 46 85 03, consistente en la caja de información,
botones y footer (un único número, sin discrepancias); no se ha
tocado.

Sitio one-page desde su origen: no hay eliminaciones de /servicios/ ni
/modelos/ en el historial, así que NO se ha añadido middleware.mjs, no
aplica.

REVISIÓN (todo lo aplicado en esta primera pasada):
- BUG REAL — sin menú móvil: .links se ocultaba a partir de 920px
  (display:none) sin ningún botón ni menú alternativo, así que la
  navegación desaparecía por completo en móvil. Añadido botón
  .menu-btn + desplegable #mobileMenu con todos los enlaces.
- Google Analytics: no existía. Añadido G-HR5XY2GRD5.
- Meta tags og:* y robots: no existían. Añadidos.
- Schema.org: no existía. Añadido LocalBusiness (nombre, url,
  teléfono, descripción, dirección, areaServed Madrid, sameAs con
  Google Maps y YouTube).
- Sección SEO: no existía. Añadida sección "Guía" (id="guia", enlazada
  en el menú de escritorio y móvil) con contenido propio sobre averías
  habituales y cómo se plantea el diagnóstico.
- Banner de cookies: no existía. Añadido (Aceptar / Rechazar /
  Política de privacidad → https://kelatos.com/privacy-policy/), con
  diseño apilado a ancho completo en móvil.
- Borde blanco del botón del chat: faltaba. Añadido. (El chat se
  posiciona por debajo del botón de WhatsApp flotante en vez de por
  encima, orden inverso al resto de la familia, pero no hay
  solapamiento real entre ambos — no se ha reordenado.)
- .call-top: ya mostraba solo "Llamar ahora" (sin bug de texto largo);
  añadido white-space:nowrap como salvaguarda estándar.
- H1 de portada reescrito, corto, directo y totalmente afirmativo (sin
  interrogación ni condicionales), sin forzar ninguna marca ya que es
  un taller multimarca — antes tenía 18 palabras: "Tu ordenador no
  funciona. Aquí lo revisamos con calma." Tamaño del H1 aumentado:
  clamp(34-54px) → clamp(46-74px) en escritorio, 34px → 46px en móvil.
- package.json: solo tenía name/private/dependencies. Añadidos
  version y engines (22.x) para igualar al resto de la familia.
- api/contacto.js ya usaba SMTP + nodemailer (CommonJS, coherente con
  el package.json sin "type":"module"); no requería conversión.

Variables SMTP en Vercel (ya configuradas, sin cambios):
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com
