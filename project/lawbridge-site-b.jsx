// LawBridge web — Método, Despacho, Colaboración, FAQ
const LW_STEPS = [
  { n: '01', title: 'Diagnóstico', text: 'Una primera conversación de 30 minutos, sin compromiso, para entender su empresa y el asunto. Salimos de ella con un mapa claro de qué hay que hacer.' },
  { n: '02', title: 'Propuesta cerrada', text: 'Alcance, plazos y honorarios fijados por escrito antes de empezar. Sin tarifas por hora abiertas ni partidas imprevistas.' },
  { n: '03', title: 'Ejecución', text: 'Trabajo directo con quien le atiende — sin intermediarios. Documentos en lenguaje claro y avances comunicados cada semana.' },
  { n: '04', title: 'Seguimiento', text: 'Cerrado el asunto, queda el puente: calendario de obligaciones, recordatorios de plazos y disponibilidad para la siguiente duda.' },
];

function ProcessSection({ accent }) {
  const [step, setStep] = React.useState(0);
  const ref = useReveal();
  return (
    <section id="metodo" style={{ background: LB.ice, padding: '110px 0' }}>
      <div className="lw-container" ref={ref}>
        <span className="lw-kicker" style={{ color: accent }}>Método</span>
        <h2 className="lw-h2">Cuatro pasos, ninguna sorpresa</h2>
        <div className="lw-steps">
          <div className="lw-steps-rail" role="tablist" aria-label="Pasos del método">
            {LW_STEPS.map((s, i) => (
              <button key={s.n} role="tab" aria-selected={step === i} className={'lw-step-tab' + (step === i ? ' on' : '')} onClick={() => setStep(i)}>
                <span className="lw-step-n" style={step === i ? { background: accent, borderColor: accent, color: '#fff' } : {}}>{s.n}</span>
                <span className="lw-step-t">{s.title}</span>
              </button>
            ))}
            <div className="lw-steps-line" aria-hidden="true"></div>
          </div>
          <div className="lw-step-body" key={step}>
            <h3 style={{ fontFamily: swMont, fontWeight: 600, fontSize: 22, color: LB.deep, margin: '0 0 12px' }}>{LW_STEPS[step].title}</h3>
            <p style={{ fontFamily: swSans, fontSize: 16.5, lineHeight: 1.65, color: LB.mid, margin: 0, maxWidth: 620 }}>{LW_STEPS[step].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ accent }) {
  const ref = useReveal();
  return (
    <section id="despacho" style={{ background: '#FFFFFF', padding: '110px 0' }}>
      <div className="lw-container lw-about" ref={ref}>
        <div className="lw-about-photo">
          <image-slot id="abogada-retrato" shape="rounded" radius="16" placeholder="Arrastre aquí su retrato profesional" style={{ width: '100%', height: 460, display: 'block' }}></image-slot>
          <div className="lw-about-card">
            <span style={{ fontFamily: swMont, fontWeight: 600, fontSize: 15, color: LB.deep }}>Alejandra Ríos</span>
            <span style={{ fontFamily: swMont, fontWeight: 500, fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent }}>Abogada · Fundadora</span>
          </div>
        </div>
        <div>
          <span className="lw-kicker" style={{ color: accent }}>La firma</span>
          <h2 className="lw-h2" style={{ marginBottom: 22 }}>Una sola interlocutora, criterio de firma grande</h2>
          <p className="lw-body">Lawbridge es una firma boutique unipersonal: cada asunto lo lleva, de principio a fin, la misma persona que usted conoce. Esa cercanía no resta rigor — lo concentra.</p>
          <p className="lw-body">Trabajamos como el departamento jurídico externo de empresas que aún no necesitan uno propio: societario, contratos, cumplimiento y trámites, resueltos con la previsibilidad que exige un negocio.</p>
          <ul className="lw-about-points">
            {[
              'Trato directo: responde siempre la misma abogada',
              'Honorarios cerrados por escrito, antes de empezar',
              'Lenguaje claro: documentos que su equipo entiende',
              'Red de especialistas para lo que exceda nuestro ámbito',
            ].map((p, i) => (
              <li key={i}>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 7 }}>
                  <path d="M1 9 Q8 -3 15 9" stroke={accent} strokeWidth="1.8" strokeLinecap="round" fill="none"></path>
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const LW_MODELS = [
  { title: 'Asunto puntual', tag: 'Proyecto cerrado', text: 'Un contrato, una licencia, una constitución. Alcance y precio fijo pactados por adelantado; entrega en fecha.', items: ['Presupuesto cerrado por escrito', 'Plazo de entrega comprometido', 'Una ronda de revisión incluida'] },
  { title: 'Iguala mensual', tag: 'El más elegido', featured: true, text: 'Asesoría continua para el día a día: consultas, revisión de contratos y avisos de plazos por una cuota mensual fija.', items: ['Consultas ilimitadas por correo', 'Revisión mensual de contratos', 'Calendario de obligaciones y plazos', 'Prioridad de agenda'] },
  { title: 'Secretaría externa', tag: 'Externalización', text: 'Nos ocupamos de la vida societaria y administrativa completa: juntas, libros, registros y cumplimiento periódico.', items: ['Secretaría societaria integral', 'Cumplimiento y protección de datos al día', 'Interlocución con las instituciones públicas'] },
];

function ModelsSection({ accent }) {
  const ref = useReveal();
  return (
    <section id="colaboracion" style={{ background: LB.deep, padding: '110px 0' }}>
      <div className="lw-container" ref={ref}>
        <span className="lw-kicker" style={{ color: accent }}>Colaboración</span>
        <h2 className="lw-h2" style={{ color: '#FFFFFF' }}>Tres maneras de trabajar juntos</h2>
        <p className="lw-lead" style={{ color: '#AEC3D2' }}>Honorarios siempre cerrados por adelantado. Solicite una propuesta y la recibirá en 48 horas.</p>
        <div className="lw-models">
          {LW_MODELS.map((m, i) => (
            <div key={i} className={'lw-model' + (m.featured ? ' feat' : '')} style={m.featured ? { borderColor: accent } : {}}>
              <span className="lw-model-tag" style={{ color: m.featured ? accent : LB.gray }}>{m.tag}</span>
              <h3 style={{ fontFamily: swMont, fontWeight: 600, fontSize: 21, color: '#fff', margin: '8px 0 10px' }}>{m.title}</h3>
              <p style={{ fontFamily: swSans, fontSize: 14.5, lineHeight: 1.55, color: '#AEC3D2', margin: '0 0 18px' }}>{m.text}</p>
              <ul className="lw-model-items">
                {m.items.map((it, j) => (
                  <li key={j}>
                    <span className="lw-dot" style={{ background: accent }}></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <button className={'lw-btn ' + (m.featured ? 'lw-btn-primary' : 'lw-btn-ghost inv')} style={m.featured ? { background: accent, marginTop: 'auto' } : { marginTop: 'auto' }} onClick={() => lwScrollTo('contacto')}>Pedir propuesta</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const LW_FAQ = [
  { q: '¿Llevan pleitos o juicios?', a: 'No. Lawbridge trabaja exclusivamente en el plano preventivo y extrajudicial. Si un asunto debe terminar en los tribunales, lo referimos a litigantes de confianza con los que colaboramos habitualmente — y seguimos a su lado coordinando la estrategia.' },
  { q: '¿Cómo se calculan los honorarios?', a: 'Siempre con presupuesto cerrado y por escrito antes de empezar. En los asuntos puntuales, un precio fijo por el proyecto; en la iguala, una cuota mensual pactada. No facturamos por horas abiertas.' },
  { q: '¿Trabajan con empresas fuera de Santo Domingo?', a: 'Sí. La mayor parte del trabajo se realiza de forma remota, con videollamadas y firma electrónica. Las gestiones presenciales ante registros e instituciones públicas se realizan mediante poder de representación.' },
  { q: '¿Qué incluye la primera consulta?', a: 'Treinta minutos de conversación sin compromiso ni costo: entendemos el asunto, le decimos con franqueza si podemos ayudar y, si es el caso, le enviamos una propuesta cerrada en 48 horas.' },
  { q: '¿Pueden actuar como nuestro departamento jurídico?', a: 'Es exactamente el modelo de la iguala mensual y la secretaría externa: asumimos de forma estable el trabajo jurídico-administrativo de la empresa, con un costo previsible y una única interlocutora.' },
];

function FaqSection({ accent }) {
  const [open, setOpen] = React.useState(0);
  const ref = useReveal();
  return (
    <section id="faq" style={{ background: '#FFFFFF', padding: '110px 0' }}>
      <div className="lw-container" style={{ maxWidth: 860 }} ref={ref}>
        <span className="lw-kicker" style={{ color: accent }}>Preguntas frecuentes</span>
        <h2 className="lw-h2">Lo que suelen preguntarnos primero</h2>
        <div className="lw-faq">
          {LW_FAQ.map((f, i) => (
            <div key={i} className={'lw-faq-item' + (open === i ? ' open' : '')}>
              <button className="lw-faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" aria-hidden="true" className="lw-faq-chev">
                  <path d="M1 10 Q9 -4 17 10" stroke={open === i ? accent : LB.gray} strokeWidth="1.8" strokeLinecap="round" fill="none"></path>
                </svg>
              </button>
              <div className="lw-faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProcessSection, AboutSection, ModelsSection, FaqSection, LW_STEPS, LW_MODELS, LW_FAQ });
