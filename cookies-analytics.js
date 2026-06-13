/* ============================================================
   Aviso de cookies + Google Analytics 4 con consentimiento
   ------------------------------------------------------------
   CONFIGURACIÓN: pega tu ID de medición de GA4 (formato G-XXXXXXXXXX)
   que obtienes en https://analytics.google.com. Mientras sea el
   placeholder, NO se carga ninguna analítica.

   Cumplimiento Ley 172-13: la analítica solo se activa si el usuario
   pulsa "Aceptar". Si rechaza (o no decide), no se carga gtag ni se
   instalan cookies de Google. La decisión se guarda en localStorage.
   ============================================================ */
(function () {
  var GA_ID = 'G-XXXXXXXXXX';                 // ← reemplazar por tu ID real de GA4
  var KEY = 'lb-cookie-consent';              // 'accepted' | 'rejected'

  // Ruta a la política de privacidad según la profundidad de la página
  // (raíz vs. subcarpetas blog/ herramientas/ areas/ legal/).
  var p = location.pathname;
  var inSub = /\/(blog|herramientas|areas|legal)\//.test(p);
  var privacyHref = (inSub ? '../' : '') + 'legal/privacidad.html';

  function loadGA() {
    if (!GA_ID || GA_ID.indexOf('G-X') === 0) return;   // sin ID configurado
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function injectStyles() {
    var css =
      '.lb-cookie{position:fixed;left:16px;right:16px;bottom:16px;z-index:200;max-width:520px;' +
      'margin:0 auto;background:#15293E;color:#E6EEF1;border-radius:14px;padding:20px 22px;' +
      'box-shadow:0 12px 40px rgba(8,20,34,.45);font-family:"Source Sans 3",system-ui,sans-serif;' +
      'transform:translateY(140%);transition:transform .35s ease}' +
      '.lb-cookie.show{transform:none}' +
      '.lb-cookie p{margin:0 0 14px;font-size:14px;line-height:1.55;color:#D6E1E8}' +
      '.lb-cookie a{color:#2DD4BF;text-decoration:underline}' +
      '.lb-cookie-row{display:flex;gap:10px;flex-wrap:wrap}' +
      '.lb-cookie button{flex:1;min-width:120px;font-family:"Montserrat",system-ui,sans-serif;' +
      'font-weight:600;font-size:13px;letter-spacing:.03em;border:none;border-radius:8px;' +
      'padding:11px 18px;cursor:pointer}' +
      '.lb-ck-accept{background:#0D9488;color:#fff}' +
      '.lb-ck-accept:hover{background:#0fa799}' +
      '.lb-ck-reject{background:transparent;color:#AEC3D2;border:1.5px solid rgba(174,195,210,.4)!important}' +
      '.lb-ck-reject:hover{color:#fff;border-color:#fff!important}' +
      '.lb-cookie button:focus-visible{outline:3px solid #5EEAD4;outline-offset:2px}';
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
  }

  function showBanner() {
    injectStyles();
    var bar = document.createElement('div');
    bar.className = 'lb-cookie';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Aviso de cookies');
    bar.innerHTML =
      '<p>Usamos cookies de analítica (Google Analytics) para entender cómo se usa el sitio y mejorarlo. ' +
      'Puedes aceptarlas o rechazarlas. Más información en nuestra ' +
      '<a href="' + privacyHref + '">Política de Privacidad</a>.</p>' +
      '<div class="lb-cookie-row">' +
      '<button class="lb-ck-accept" type="button">Aceptar</button>' +
      '<button class="lb-ck-reject" type="button">Rechazar</button>' +
      '</div>';
    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add('show'); });

    bar.querySelector('.lb-ck-accept').addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'accepted'); } catch (e) {}
      bar.remove();
      loadGA();
    });
    bar.querySelector('.lb-ck-reject').addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'rejected'); } catch (e) {}
      bar.remove();
    });
  }

  var decision = null;
  try { decision = localStorage.getItem(KEY); } catch (e) {}

  if (decision === 'accepted') {
    loadGA();
  } else if (decision !== 'rejected') {
    if (document.body) showBanner();
    else document.addEventListener('DOMContentLoaded', showBanner);
  }
})();
