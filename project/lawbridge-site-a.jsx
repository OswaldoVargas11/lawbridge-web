// LawBridge web — Nav, Hero, Servicios
const swMont = "'Montserrat', sans-serif";
const swSans = "'Source Sans 3', sans-serif";

function lwScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: 'smooth' });
}

// Hook: reveal on scroll
function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('lw-reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ——— Navegación ———
function SiteNav({ active, accent }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['servicios', 'Servicios'], ['metodo', 'Método'], ['despacho', 'La firma'],
    ['colaboracion', 'Colaboración'], ['faq', 'FAQ'],
  ];
  return (
    <header className={'lw-nav' + (scrolled ? ' scrolled' : '')}>
      <div className="lw-container lw-nav-inner">
        <a href="#inicio" aria-label="Lawbridge — inicio" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <BridgeIcon height={26} line={LB.deep} accent={accent} sw={2.4}></BridgeIcon>
          <span style={{ fontFamily: swMont, fontWeight: 600, fontSize: 15, letterSpacing: '0.2em', color: LB.deep }}>LAWBRIDGE</span>
        </a>
        <nav className="lw-nav-links" aria-label="Secciones">
          {links.map(([id, label]) => (
            <a key={id} href={'#' + id} className={active === id ? 'on' : ''} style={active === id ? { color: accent } : {}}
              onClick={(e) => { e.preventDefault(); lwScrollTo(id); }}>{label}</a>
          ))}
        </nav>
        <button className="lw-btn lw-btn-primary" style={{ background: accent }} onClick={() => lwScrollTo('contacto')}>Agendar consulta</button>
      </div>
    </header>
  );
}

// ——— Hero ———
function Hero({ accent, dark }) {
  const bg = dark ? LB.deep : LB.ice;
  const fg = dark ? '#FFFFFF' : LB.deep;
  const sub = dark ? '#AEC3D2' : LB.mid;
  return (
    <section id="inicio" style={{ background: bg, position: 'relative', overflow: 'hidden' }}>
      {/* arcos de fondo, trazo animado */}
      <svg className="lw-hero-arcs" viewBox="0 0 1440 560" fill="none" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <path pathLength="1" className="lw-arc a1" d="M-80 600 Q720 80 1520 600" stroke={accent} strokeWidth="2" fill="none" opacity="0.55"></path>
        <path pathLength="1" className="lw-arc a2" d="M-80 660 Q720 160 1520 660" stroke={dark ? LB.gray : LB.gray} strokeWidth="1.4" fill="none" opacity="0.4"></path>
        <path pathLength="1" className="lw-arc a3" d="M-80 720 Q720 240 1520 720" stroke={dark ? LB.mid : LB.gray} strokeWidth="1" fill="none" opacity="0.3"></path>
      </svg>
      <div className="lw-container" style={{ position: 'relative', padding: '170px 32px 150px' }}>
        <div style={{ maxWidth: 760 }}>
          <span style={{ fontFamily: swMont, fontWeight: 500, fontSize: 13, letterSpacing: '0.22em', color: accent, textTransform: 'uppercase' }}>Firma boutique · Asesoría corporativa</span>
          <h1 style={{ fontFamily: swMont, fontWeight: 600, fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.14, color: fg, margin: '22px 0 24px', letterSpacing: '-0.01em', textWrap: 'balance' }}>
            El puente entre su empresa y la tranquilidad jurídica
          </h1>
          <p style={{ fontFamily: swSans, fontSize: 19, lineHeight: 1.6, color: sub, margin: '0 0 38px', maxWidth: 560, textWrap: 'pretty' }}>
            Asesoría legal y administrativa integral para empresas: societario, contratos, compliance y trámites — con trato directo y honorarios cerrados. Sin litigios, sin sorpresas.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="lw-btn lw-btn-primary lg" style={{ background: accent }} onClick={() => lwScrollTo('contacto')}>Agendar una consulta</button>
            <button className={'lw-btn lw-btn-ghost lg' + (dark ? ' inv' : '')} onClick={() => lwScrollTo('servicios')}>Ver servicios</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ——— Servicios ———
const LW_SERVICES = [
  {
    id: 'societario', title: 'Vida societaria', icon: 'M8 26 L8 12 M16 26 L16 8 M24 26 L24 12 M4 26 L28 26',
    short: 'Constitución, asambleas, actas y secretaría corporativa al día.',
    bullets: ['Constitución de sociedades (SRL, SAS, EIRL)', 'Convocatorias y actas de asambleas y consejos', 'Libros corporativos y Registro Mercantil al día', 'Modificaciones estatutarias y poderes'],
  },
  {
    id: 'contratos', title: 'Contratación mercantil', icon: 'M6 6 H22 L26 10 V26 H6 Z M11 14 H21 M11 18 H21 M11 22 H17',
    short: 'Contratos claros que protegen su negocio antes de firmar.',
    bullets: ['Redacción y revisión de contratos mercantiles', 'Acuerdos de confidencialidad (NDA)', 'Condiciones generales de contratación', 'Acuerdos de distribución, agencia y servicios'],
  },
  {
    id: 'compliance', title: 'Compliance y datos', icon: 'M16 4 L27 9 V16 C27 23 22 27 16 29 C10 27 5 23 5 16 V9 Z M11 16 L15 20 L21 12',
    short: 'Protección de datos, prevención de lavado y políticas internas.',
    bullets: ['Cumplimiento de la Ley 172-13 de protección de datos', 'Prevención de lavado de activos (Ley 155-17)', 'Políticas internas y códigos de ética', 'Capacitación de equipos en cumplimiento'],
  },
  {
    id: 'tramites', title: 'Trámites y licencias', icon: 'M6 27 V8 C6 6 7 5 9 5 H23 C25 5 26 6 26 8 V27 M6 27 H26 M11 11 H21 M11 16 H21 M11 21 H16',
    short: 'Permisos, registros y expedientes ante las instituciones públicas.',
    bullets: ['Permisos y licencias municipales y sectoriales', 'Registro Mercantil, ONAPI y Pro Consumidor', 'RNC y gestiones ante la DGII', 'Reconsideraciones y recursos administrativos'],
  },
  {
    id: 'laboral', title: 'Asesoría laboral corporativa', icon: 'M16 14 A5 5 0 1 0 16 4 A5 5 0 0 0 16 14 Z M5 28 C5 21 10 18 16 18 C22 18 27 21 27 28',
    short: 'La cara administrativa del empleo, ordenada y prevista.',
    bullets: ['Contratos conforme al Código de Trabajo', 'Reglamentos internos y teletrabajo', 'Registro de contratos ante el Ministerio de Trabajo (SIRLA)', 'Acompañamiento en inspecciones laborales'],
  },
  {
    id: 'extrajudicial', title: 'Resolución extrajudicial', icon: 'M5 24 Q16 10 27 24 M5 24 H27',
    short: 'Negociación y acuerdo antes de que el conflicto escale.',
    bullets: ['Negociación directa con la otra parte', 'Mediación y acuerdos transaccionales', 'Puestas en mora e intimaciones de pago', 'Derivación a litigantes de confianza si es inevitable'],
  },
];

function ServiceCard({ s, selected, onSelect, accent }) {
  return (
    <button className={'lw-svc-card' + (selected ? ' sel' : '')} style={selected ? { borderColor: accent } : {}} onClick={() => onSelect(s.id)} aria-expanded={selected}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d={s.icon} stroke={selected ? accent : LB.mid} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
      </svg>
      <span style={{ fontFamily: swMont, fontWeight: 600, fontSize: 16.5, color: LB.deep }}>{s.title}</span>
      <span style={{ fontFamily: swSans, fontSize: 14.5, lineHeight: 1.5, color: LB.gray }}>{s.short}</span>
      <span className="lw-svc-more" style={{ color: accent }}>{selected ? 'Seleccionado' : 'Ver detalle →'}</span>
    </button>
  );
}

function ServicesSection({ accent }) {
  const [sel, setSel] = React.useState('societario');
  const ref = useReveal();
  const s = LW_SERVICES.find((x) => x.id === sel);
  return (
    <section id="servicios" style={{ background: '#FFFFFF', padding: '110px 0' }}>
      <div className="lw-container" ref={ref}>
        <span className="lw-kicker" style={{ color: accent }}>Servicios</span>
        <h2 className="lw-h2">Todo lo administrativo y legal de su empresa, en una sola mesa</h2>
        <p className="lw-lead">Acompañamiento continuo en las tareas jurídicas del día a día. No llevamos litigios: si un asunto debe ir a juicio, lo derivamos a litigantes de confianza y seguimos a su lado coordinando.</p>
        <div className="lw-svc-grid">
          {LW_SERVICES.map((x) => (
            <ServiceCard key={x.id} s={x} selected={sel === x.id} onSelect={setSel} accent={accent}></ServiceCard>
          ))}
        </div>
        <div className="lw-svc-detail" key={sel}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 220 }}>
            <span style={{ fontFamily: swMont, fontWeight: 600, fontSize: 19, color: LB.deep }}>{s.title}</span>
            <span style={{ fontFamily: swSans, fontSize: 14.5, color: LB.gray }}>Qué incluye</span>
          </div>
          <ul className="lw-svc-bullets">
            {s.bullets.map((b, i) => (
              <li key={i}>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 7 }}>
                  <path d="M1 8 Q7 -2 13 8" stroke={accent} strokeWidth="1.6" strokeLinecap="round" fill="none"></path>
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { swMont, swSans, lwScrollTo, useReveal, SiteNav, Hero, ServicesSection, LW_SERVICES });
