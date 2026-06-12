// LawBridge web — Contacto, Footer, App
function ContactSection({ accent }) {
  const ref = useReveal();
  const [form, setForm] = React.useState({ nombre: '', empresa: '', email: '', mensaje: '' });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => { setForm({ ...form, [k]: e.target.value }); if (errors[k]) setErrors({ ...errors, [k]: null }); };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.nombre.trim()) errs.nombre = 'Indique su nombre';
    if (!form.empresa.trim()) errs.empresa = 'Indique su empresa';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Revise el correo electrónico';
    if (form.mensaje.trim().length < 10) errs.mensaje = 'Cuéntenos brevemente el asunto (mín. 10 caracteres)';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  return (
    <section id="contacto" style={{ background: LB.ice, padding: '110px 0' }}>
      <div className="lw-container lw-contact" ref={ref}>
        <div>
          <span className="lw-kicker" style={{ color: accent }}>Contacto</span>
          <h2 className="lw-h2" style={{ marginBottom: 18 }}>Hablemos de su empresa</h2>
          <p className="lw-body" style={{ maxWidth: 380 }}>Primera consulta de 30 minutos, sin costo ni compromiso. Respondemos en menos de un día laborable.</p>
          <div className="lw-contact-data">
            <div><span className="lw-cd-label">Correo</span><span className="lw-cd-value">a.rios@lawbridge.legal</span></div>
            <div><span className="lw-cd-label">Teléfono</span><span className="lw-cd-value">+1 (809) 555-0000</span></div>
            <div><span className="lw-cd-label">Oficina</span><span className="lw-cd-value">Av. Winston Churchill 00, Torre Empresarial, Piantini · Santo Domingo</span></div>
            <div><span className="lw-cd-label">Horario</span><span className="lw-cd-value">L–V · 8:30 a 17:30</span></div>
          </div>
        </div>
        <div className="lw-form-card">
          {sent ? (
            <div className="lw-form-ok">
              <svg width="56" height="34" viewBox="0 0 56 34" fill="none" aria-hidden="true">
                <path d="M4 32 Q28 -8 52 32" stroke={accent} strokeWidth="2.5" strokeLinecap="round" fill="none"></path>
                <line x1="4" y1="32" x2="52" y2="32" stroke={LB.deep} strokeWidth="2.5" strokeLinecap="round"></line>
              </svg>
              <h3 style={{ fontFamily: swMont, fontWeight: 600, fontSize: 21, color: LB.deep, margin: '18px 0 8px' }}>Mensaje recibido</h3>
              <p style={{ fontFamily: swSans, fontSize: 15.5, color: LB.mid, lineHeight: 1.6, margin: 0 }}>Gracias, {form.nombre.split(' ')[0]}. Le escribiremos a <strong>{form.email}</strong> en menos de un día laborable para agendar la consulta.</p>
              <button className="lw-btn lw-btn-ghost" style={{ marginTop: 22 }} onClick={() => { setSent(false); setForm({ nombre: '', empresa: '', email: '', mensaje: '' }); }}>Enviar otro mensaje</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="lw-form-row2">
                <label className="lw-field">
                  <span>Nombre</span>
                  <input type="text" value={form.nombre} onChange={set('nombre')} placeholder="Su nombre" className={errors.nombre ? 'err' : ''}></input>
                  {errors.nombre ? <em>{errors.nombre}</em> : null}
                </label>
                <label className="lw-field">
                  <span>Empresa</span>
                  <input type="text" value={form.empresa} onChange={set('empresa')} placeholder="Nombre de la empresa" className={errors.empresa ? 'err' : ''}></input>
                  {errors.empresa ? <em>{errors.empresa}</em> : null}
                </label>
              </div>
              <label className="lw-field">
                <span>Correo electrónico</span>
                <input type="email" value={form.email} onChange={set('email')} placeholder="nombre@empresa.com" className={errors.email ? 'err' : ''}></input>
                {errors.email ? <em>{errors.email}</em> : null}
              </label>
              <label className="lw-field">
                <span>¿En qué podemos ayudar?</span>
                <textarea rows="4" value={form.mensaje} onChange={set('mensaje')} placeholder="Cuéntenos brevemente el asunto…" className={errors.mensaje ? 'err' : ''}></textarea>
                {errors.mensaje ? <em>{errors.mensaje}</em> : null}
              </label>
              <button type="submit" className="lw-btn lw-btn-primary lg" style={{ background: accent, width: '100%' }}>Solicitar consulta gratuita</button>
              <p style={{ fontFamily: swSans, fontSize: 12, color: LB.gray, margin: '12px 0 0', textAlign: 'center' }}>Sus datos solo se usan para responder a esta consulta.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ accent }) {
  return (
    <footer style={{ background: LB.deep, padding: '64px 0 40px' }}>
      <div className="lw-container">
        <div className="lw-footer-top">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <LogoHorizontal scale={0.78} line="#FFFFFF" accent={accent} text="#FFFFFF"></LogoHorizontal>
            <span style={{ fontFamily: swSans, fontSize: 13, letterSpacing: '0.06em', color: LB.gray }}>Connecting people. Resolving matters. Building trust.</span>
          </div>
          <nav className="lw-footer-links" aria-label="Mapa del sitio">
            {[['servicios', 'Servicios'], ['metodo', 'Método'], ['despacho', 'La firma'], ['colaboracion', 'Colaboración'], ['faq', 'FAQ'], ['contacto', 'Contacto']].map(([id, label]) => (
              <a key={id} href={'#' + id} onClick={(e) => { e.preventDefault(); lwScrollTo(id); }}>{label}</a>
            ))}
          </nav>
        </div>
        <div className="lw-footer-bottom">
          <span>© 2026 Lawbridge · Firma de abogados · Santo Domingo, R.D.</span>
          <span>Aviso legal · Privacidad</span>
        </div>
      </div>
    </footer>
  );
}

// ——— App ———
const LW_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#0D9488",
  "heroDark": false
}/*EDITMODE-END*/;

function LawbridgeSite() {
  const [t, setTweak] = useTweaks(LW_TWEAK_DEFAULTS);
  const [active, setActive] = React.useState('');
  React.useEffect(() => {
    const ids = ['servicios', 'metodo', 'despacho', 'colaboracion', 'faq', 'contacto'];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <SiteNav active={active} accent={t.accent}></SiteNav>
      <main>
        <Hero accent={t.accent} dark={t.heroDark}></Hero>
        <ServicesSection accent={t.accent}></ServicesSection>
        <ProcessSection accent={t.accent}></ProcessSection>
        <AboutSection accent={t.accent}></AboutSection>
        <ModelsSection accent={t.accent}></ModelsSection>
        <FaqSection accent={t.accent}></FaqSection>
        <ContactSection accent={t.accent}></ContactSection>
      </main>
      <SiteFooter accent={t.accent}></SiteFooter>
      <TweaksPanel>
        <TweakSection label="Marca"></TweakSection>
        <TweakColor label="Color de acento" value={t.accent} options={['#0D9488', '#3D5F7A', '#B07A3F']} onChange={(v) => setTweak('accent', v)}></TweakColor>
        <TweakSection label="Hero"></TweakSection>
        <TweakRadio label="Fondo del hero" value={t.heroDark ? 'oscuro' : 'claro'} options={['claro', 'oscuro']} onChange={(v) => setTweak('heroDark', v === 'oscuro')}></TweakRadio>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LawbridgeSite></LawbridgeSite>);
