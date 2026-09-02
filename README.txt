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

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 seguía usando la plantilla prohibida "no funciona" ("Tu ordenador
  no funciona. Aquí lo revisamos con calma."), a pesar de que el
  README anterior decía que ya cumplía la regla. Reescrito, sin forzar
  marca (taller multimarca): "Repara tu ordenador con diagnóstico
  gratis en Madrid." (8 palabras).
- BUG REAL — el botón CTA de teléfono no tenía icono, a diferencia del
  de WhatsApp. Añadido (verificado con cuidado el cierre de las
  etiquetas </a>: 29 aperturas / 29 cierres).
- BUG REAL — la casilla de política de privacidad existía pero el
  texto no enlazaba a ningún sitio. Añadido el enlace estándar de la
  familia a https://kelatos.com/privacy-policy/, resaltado en azul.
- Añadida franja de aviso de servicio técnico independiente debajo del
  menú (no existía). Verificado antes que .header no usa
  display:flex directamente.
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- Verificado sin bugs: no existe ninguna etiqueta rotada tipo
  hero-chip (.hero-shape-a/.hero-shape-b son formas decorativas sin
  texto); el ticker ".hero::after" ya se reducía en tablet y se
  ocultaba en móvil correctamente; Cal.com ya estaba presente;
  schema.org ya usaba correctamente el único teléfono de este repo.
- NO SE HA TOCADO — el formulario usa un envío HTML tradicional
  (action="/api/contacto" con recarga de página) en vez del patrón
  fetch/AJAX con estado en línea que usa el resto de la familia. Es un
  patrón distinto pero funcionalmente coherente (api/contacto.js
  responde con una página HTML que muestra un alert() y redirige de
  vuelta a "#contacto"), así que no se ha considerado un bug y no se
  ha modificado sin que el cliente lo pida.

Variables SMTP en Vercel (ya configuradas, sin cambios):
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente — repo 39/48):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- BUG REAL — soporte@kelatos.com aparecía como texto visible en el
  pie de página. Quitado; el correo solo se usa en backend (SMTP).
- BUG REAL — el mensaje prellenado de WhatsApp decía "¡Hola Kelatos!".
  Corregido a "¡Hola PCMadrid!".
- BUG REAL — el menú móvil (#mobileMenu, estilo atributo hidden) no
  tenía ningún listener que lo cerrara al pulsar un enlace. Añadido el
  script estándar de la familia.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- BUG REAL — el H1 usaba clamp(46px,5.6vw,74px) (mínimo de 46px en
  pantallas intermedias) y la regla de móvil (@media max-width:560px)
  fijaba 46px. Corregidos ambos a 48px.
- BUG REAL — botones del hero (.btn) con border-radius de 15px y sin
  estado hover. Aumentado a border-radius:999px; añadido
  filter:brightness(.88) en wa/collect (colores sólidos) y relleno
  sólido con var(--blue) + texto blanco en el botón de teléfono
  (estilo contorno) al pasar el ratón.
- Verificado: este repo no usa el patrón de franja de insignias bajo
  el H1 (familia Dyson); no aplica la reubicación.

REVISIÓN ADICIONAL (nueva regla de menú móvil, a petición del cliente):
- BUG REAL — la franja de aviso de independencia estaba dentro de
  <header>. Movida fuera de <header>, como hermana justo después de
  él y antes del hero: sigue siendo la misma franja amarilla de ancho
  completo.
- Verificado: el header (.header{position:sticky;top:0}) ya se
  mantenía fijo/pegado arriba al hacer scroll; no requería cambios.
- Verificado de nuevo: el checklist de 7 puntos ya estaba aplicado de
  una pasada anterior; no requería cambios.

REVISIÓN ADICIONAL (a petición del cliente — "el menú se ve mal en escritorio"):
- BUG REAL — el menú de escritorio (.links) tenía 7 enlaces + la
  píldora "Llamar ahora", sin white-space:nowrap, así que en anchos
  de escritorio intermedios (portátiles ~1024-1280px) el texto de los
  enlaces (especialmente "Opiniones y vídeos") se partía en dos
  líneas, descuadrando la barra de navegación. Mismo patrón ya
  corregido en Tech4You/RecoverLab/CecoRepair. Añadido
  white-space:nowrap a .links a y reducidos gap (22px→16px) y
  font-size (14px→13.5px). Además, al ser 7 elementos (más que en los
  otros repos), se ha subido también el punto de cambio a menú móvil
  de 920px a 1080px, para cubrir con margen los anchos de portátil
  habituales sin arriesgarse a que siga apretado.
