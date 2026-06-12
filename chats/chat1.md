# Lawbridge Brand Identity

_Started 2026-06-09 19:31 UTC_

---

## User

Crea la identidad de marca completa para un despacho de abogados boutique unipersonal llamado Lawbridge. Preséntalo como un brand board / guía de marca en el lienzo.

Concepto: un puente = conexión, confianza y resolución. Tono: premium, sobrio, moderno y minimalista, con mucho espacio en blanco.

Logo: ícono de un puente de arco estilizado (líneas finas y elegantes) combinado con el wordmark “LAWBRIDGE”. El wordmark debe ir en Montserrat SemiBold, en mayúsculas y con buen tracking (espaciado entre letras).

Tipografía:

• Titulares: Montserrat SemiBold
• Subtítulos: Montserrat Medium
• Cuerpo de texto: Source Sans 3

Paleta de color (hex exactos):

• Azul pizarra profundo #223E5B (color principal)
• Azul pizarra medio #3D5F7A (secundario)
• Azul grisáceo #6D8496 (neutro)
• Teal #0D9488 (color de acento)
• Blanco hielo #E6EEF1 (fondo)

Tagline: “Connecting people. Resolving matters. Building trust.”

Entregables que quiero ver:

1. Logo principal (ícono de puente + wordmark)
2. Versión horizontal y versión apilada (vertical)
3. Solo el ícono / monograma “LB” para avatar y favicon
4. Versiones en color, en negativo (logo blanco sobre fondo azul #223E5B) y en monocromo
5. Tarjeta de visita (anverso y reverso)
6. Membrete / papel de carta
7. Firma de correo electrónico
8. Banner y foto de perfil para redes sociales

## Assistant

_[tool: copy_starter_component]_

_[tool: update_todos]_

_[tool: write_file]_

Continúo con el brand board. Primero, los componentes del logo:

_[tool: write_file]_

Ahora las aplicaciones de marca (tarjeta, membrete, firma, redes):

_[tool: write_file]_

Ahora el board completo con todas las secciones:

_[tool: write_file]_

_[tool: done]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

Listo — el brand board de **Lawbridge** está en el lienzo, con las 7 secciones:

1. **Logo principal** — arco en teal (el «puente») + tablero y tirantes en azul pizarra, con el wordmark LAWBRIDGE en Montserrat SemiBold y tracking amplio
2. **Versiones** — horizontal, apilada y monograma LB en 4 escalas (avatar → favicon 16px)
3. **Color / negativo / monocromo** — incluye el negativo blanco sobre #223E5B
4. **Paleta** — los 5 hex exactos con proporción de uso recomendada (60/25/8/4/3)
5. **Tipografía** — Montserrat SemiBold / Medium + Source Sans 3
6. **Papelería** — tarjeta (anverso azul / reverso blanco) y membrete A4
7. **Digital** — firma de correo, avatar circular y banner 1500×500

**Caveats:** los datos de contacto (nombre «Alejandra Ríos», teléfono, dirección) son placeholders — pásame los reales y los sustituyo.

**Posibles siguientes pasos:** exportar el logo como SVG/PNG finales, variaciones del ícono del puente (otro estilo de arco, con/sin tirantes), o una landing page con esta identidad.

## User

Save as standalone HTML: Lawbridge Brand Board.html

## Assistant

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: present_fs_item_for_download]_

Listo — ahí tienes el archivo autocontenido (~1.8 MB): funciona completamente offline, con las fuentes Montserrat y Source Sans 3 incluidas. Ábrelo en cualquier navegador sin conexión.

## User

puedes generarme la pagina web completamente interactiva? mis objetivo sera tener clientes corp y ayudar con todo tipo de tarea administrativa a excepcion de litigios. Hazme la pagina web completa y genera las imagenes que creas necesario

## Assistant

_[tool: list_files]_

_[tool: tool_search_tool_bm25]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

_[tool: tool_search_tool_bm25]_

_[tool: write_file]_

Ahora construyo la web. Primero las secciones principales:

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Ahora el HTML principal con todos los estilos:

_[tool: done]_

_[tool: fork_verifier_agent]_

_[tool: snip]_

Lista la web completa de **Lawbridge** (`Lawbridge Web.html`), totalmente interactiva y con la identidad del brand board:

**Secciones**
1. **Hero** — titular «El puente entre su empresa y la tranquilidad jurídica», con arcos del puente dibujándose al cargar
2. **Servicios** — 6 áreas (societario, contratos, compliance/RGPD, trámites y licencias, laboral corporativo, resolución extrajudicial); haz clic en cada tarjeta para ver el detalle. Deja claro que **no lleváis litigios** y que derivás a litigantes de confianza
3. **Método** — stepper interactivo de 4 pasos con honorarios cerrados
4. **El despacho** — bio + hueco donde puedes **arrastrar tu retrato profesional**
5. **Colaboración** — 3 modelos: asunto puntual, iguala mensual y secretaría externa (sin precios inventados)
6. **FAQ** — acordeón con las dudas típicas de un cliente corporativo
7. **Contacto** — formulario con validación y estado de confirmación

**Interactividad:** navegación fija con scroll-spy, animaciones al hacer scroll, hovers, acordeones y formulario funcional. En **Tweaks** puedes cambiar el color de acento y poner el hero en oscuro.

**Sobre las imágenes:** no puedo generar fotografías; en su lugar usé el arte de línea de la marca y un hueco para tu retrato (solo arrástralo encima). Caveats: nombre, teléfono y dirección siguen siendo placeholders — pásame los reales y los cambio.

## User

Export this design as an editable PPTX: Lawbridge Web.html

## Assistant

_[tool: show_to_user]_

La web es una página de scroll continuo, así que exportaré cada sección como una diapositiva. Lanzo la exportación con fuentes web-safe (Arial):

_[tool: gen_pptx]_

Listo — se ha descargado **lawbridge-web.pptx** con 7 diapositivas editables, una por sección de la web (hero, servicios, método, despacho, colaboración, FAQ y contacto), con texto y formas nativas de PowerPoint y las fuentes sustituidas por Arial.

Un apunte: al ser una página de scroll continuo y no un deck, cada sección tiene proporciones distintas a las de una diapositiva 16:9, así que algunos contenidos llegan escalados para encajar. Si vas a usarlo como presentación de verdad, puedo crear un **deck nativo de Lawbridge** (1920×1080, con la identidad de marca y layouts pensados para diapositiva) — sería un resultado mucho más limpio. ¿Te lo preparo?

## User

la empresa estara basada en republica dominicana por lo que en realidad hay algunas cosas que modificar. ademas de cambiar a que este en español latino y no en castellano.

## Assistant

_[tool: str_replace_edit]_

Buen punto — adapto la web a República Dominicana (marco legal: Ley 479-08 societaria, Ley 172-13 de datos, DGII, ONAPI, Registro Mercantil, Código de Trabajo) y el copy a español latino:

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Ahora los datos de contacto, footer y la papelería del brand board:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Adaptado a República Dominicana y a español latino. Lo que cambié:

**Marco legal y trámites (RD)**
- Societario: SRL, SAS y EIRL, asambleas (no «juntas»), libros corporativos y **Registro Mercantil**
- Compliance: **Ley 172-13** de protección de datos y **Ley 155-17** de prevención de lavado de activos (sustituyen al RGPD europeo)
- Trámites: permisos municipales, **ONAPI, Pro Consumidor, RNC y DGII**
- Laboral: Código de Trabajo y registro ante el **Ministerio de Trabajo (SIRLA)**
- Extrajudicial: «puestas en mora e intimaciones de pago» (en lugar de burofax, que no existe en RD)

**Lenguaje**
- Fuera el «vosotros»: «¿Llevan…?», «¿Trabajan…?», «¿Pueden…?»
- «despacho» → «firma», «coste» → «costo», «interlocutora» (firma unipersonal liderada por abogada)

**Datos**
- Dirección: Av. Winston Churchill, Piantini, Santo Domingo (placeholder)
- Teléfono: +1 (809) 555-0000 (placeholder) · Horario L–V 8:30–17:30
- Footer: «Firma de abogados · Santo Domingo, R.D.»
- También actualicé la papelería del brand board (tarjeta y membrete)

**Caveat:** verifica con la normativa local los nombres exactos de las leyes citadas antes de publicar. ¿Quieres que añada algo típico del mercado dominicano, como botón de WhatsApp para contacto directo?

## User

Save as standalone HTML: Lawbridge Web.html

## Assistant

_[tool: super_inline_html]_

El archivo ya incluye la miniatura del bundler y no hay recursos referenciados solo en código, así que puedo empaquetar directamente:

_[tool: show_html]_

_[tool: present_fs_item_for_download]_

Listo — archivo autocontenido (~1.8 MB) con la versión dominicana de la web: funciona offline en cualquier navegador, con fuentes e interactividad incluidas. Nota: el retrato que arrastres en la sección «La firma» solo persiste dentro de este proyecto; si quieres que viaje incrustado en el archivo, súbeme la foto y la integro antes de re-exportar.

## User

esta version no se puede abrir desde el movil. Quiero que se pueda abrir de cualquier dispositivo. Por favor hazlo de esa manera

## Assistant

_[tool: write_file]_

Tienes razón — esa versión dependía de un compilador en el navegador que muchos móviles bloquean. Voy a reconstruirla como HTML estático puro (sin React ni compilación), que abre en cualquier dispositivo, manteniendo toda la interactividad con JS ligero:

_[tool: super_inline_html]_

