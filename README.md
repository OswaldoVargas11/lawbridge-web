# Lawbridge — Sitio web

Landing page de una sola página para **Lawbridge Abogados** (Santo Domingo, R.D.).
Sitio **100% estático** (HTML/CSS/JS), sin servidor ni build. Se puede publicar tal cual
en GitHub Pages, Netlify, Vercel o cualquier hosting estático.

## Estructura

```
index.html            ← la página (todo el HTML, CSS y JS van aquí)
favicon.svg           ← ícono "LB"
og-image.png          ← imagen para compartir en redes (Open Graph)
image-slot.js         ← componente para arrastrar la foto en "Sobre mí"
legal/
  privacidad.html     ← Política de Privacidad (Ley 172-13)
  terminos.html       ← Términos de Uso
```

> Las carpetas `project/` y `chats/` son material original del diseño. No se usan en el
> sitio publicado; puedes borrarlas cuando quieras.

---

## 1. Configuración (2 líneas)

Abre `index.html`, busca el bloque **CONFIGURACIÓN** dentro del `<script>` (cerca del final)
y edita solo estas dos líneas:

```js
var WEB3FORMS_KEY = 'TU-ACCESS-KEY-DE-WEB3FORMS';
var CALENDLY_URL  = 'https://calendly.com/TU-USUARIO/consulta';
```

### Formulario de contacto — Web3Forms (gratis, sin servidor)
1. Entra en **https://web3forms.com**, escribe tu correo y pulsa *Create Access Key*.
2. Te llega una **Access Key** por email. Pégala en `WEB3FORMS_KEY`.
3. Listo: los mensajes del formulario llegarán a ese correo.
   - Mientras no pongas la clave, el formulario muestra el mensaje de éxito pero **no envía** nada (modo vista previa).

### Agenda de citas — Calendly
1. Crea tu cuenta gratuita en **https://calendly.com** y un tipo de evento (p. ej. "Consulta 30 min").
2. Copia el enlace público (p. ej. `https://calendly.com/mariel-castillo/consulta`) y pégalo en `CALENDLY_URL`.
3. El calendario aparece automáticamente en la sección **Agenda**. Mientras no lo cambies, se ve un marcador.

---

## 2. Datos que debes reemplazar (placeholders)

Son datos de ejemplo. Búscalos y reemplázalos en `index.html` (y en las páginas de `legal/`):

- **Nombre:** Lcda. Mariel Castillo
- **Exequátur / Matrícula CARD:** N.º 2015-0842 / N.º 38452
- **Teléfono:** +1 (809) 555-0123 → aparece en `tel:+18095550123`
- **WhatsApp:** +1 (829) 555-0123 → aparece en los enlaces `https://wa.me/18295550123`
- **Email:** hola@lawbridge.do
- **Dirección:** Av. Winston Churchill 1099, Torre Acrópolis, Piso 10, Piantini, Santo Domingo
- **Foto:** en la sección "Sobre mí" puedes arrastrar una imagen, o reemplazar `<image-slot>` por `<img src="foto.jpg" alt="...">`
- **Datos del schema (SEO):** el bloque `application/ld+json` en `<head>` repite teléfono, dirección y coordenadas — actualízalo también.

---

## 3. Publicar en GitHub Pages (para pruebas)

1. Crea un repositorio en GitHub (público) y sube estos archivos:
   ```bash
   git init
   git add .
   git commit -m "Sitio Lawbridge"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages**.
3. En *Build and deployment → Source* elige **Deploy from a branch**.
4. Branch: **main**, carpeta **/ (root)** → **Save**.
5. Espera 1–2 minutos. Tu sitio quedará en:
   `https://TU-USUARIO.github.io/TU-REPO/`

> El `index.html` en la raíz hace que GitHub Pages muestre la página automáticamente.

---

## 4. Dominio propio (cuando pases a producción)

- **Con GitHub Pages:** en *Settings → Pages → Custom domain* pon tu dominio (p. ej. `lawbridge.do`),
  y en tu proveedor de dominio crea los registros DNS que GitHub indica (un `CNAME` o registros `A`).
  Activa **Enforce HTTPS**.
- **Alternativa más sencilla para formularios/funciones futuras:** Netlify o Vercel
  (arrastras la carpeta o conectas el repo y listo, con HTTPS automático).
- Cuando tengas el dominio final, actualiza en `index.html` la metaetiqueta
  `og:image` a una **URL absoluta** (p. ej. `https://lawbridge.do/og-image.png`)
  para que la vista previa al compartir funcione.

---

## Notas técnicas

- **Accesibilidad:** navegable con teclado, respeta `prefers-reduced-motion` (si está activo, el puente
  se muestra ya construido sin animación), buen contraste.
- **Sin cookies** de analítica ni publicidad. Los únicos terceros son Google Maps, Calendly,
  Web3Forms y WhatsApp (descritos en la Política de Privacidad).
- **Anti-spam:** el formulario incluye un *honeypot* invisible además del consentimiento obligatorio (Ley 172-13).
