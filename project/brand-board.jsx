// LawBridge — Brand board (lienzo)
const bbMont = "'Montserrat', sans-serif";
const bbSans = "'Source Sans 3', sans-serif";

function BBFrame({ bg = '#FFFFFF', pad = 40, children, style = {} }) {
  return (
    <div style={{ width: '100%', height: '100%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: pad, boxSizing: 'border-box', ...style }}>
      {children}
    </div>
  );
}

// ——— Swatch de color ———
function Swatch({ hex, name, usage, w = 132, h = 170, dark = true }) {
  return (
    <div style={{ width: w, display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 10, overflow: 'hidden', border: '1px solid #E2E8ED' }}>
      <div style={{ height: h, background: hex }}></div>
      <div style={{ padding: '12px 14px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ fontFamily: bbMont, fontWeight: 600, fontSize: 12, color: LB.deep }}>{name}</span>
        <span style={{ fontFamily: "'SF Mono', 'Menlo', monospace", fontSize: 11, color: LB.gray }}>{hex}</span>
        <span style={{ fontFamily: bbSans, fontSize: 11, color: LB.gray, lineHeight: 1.35 }}>{usage}</span>
      </div>
    </div>
  );
}

function TypeRow({ label, family, weight, sample, size, ls = 'normal', tt = 'none' }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: 28, alignItems: 'baseline', padding: '20px 0', borderBottom: `1px solid ${LB.ice}` }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ fontFamily: bbMont, fontWeight: 500, fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: LB.teal }}>{label}</span>
        <span style={{ fontFamily: bbSans, fontSize: 12, color: LB.gray }}>{family} · {weight}</span>
      </div>
      <span style={{ fontFamily: `'${family}', sans-serif`, fontWeight: weight === 'SemiBold' ? 600 : weight === 'Medium' ? 500 : 400, fontSize: size, color: LB.deep, letterSpacing: ls, textTransform: tt, lineHeight: 1.35 }}>{sample}</span>
    </div>
  );
}

function BrandBoard() {
  return (
    <DesignCanvas>

      {/* ——— 1 · LOGO PRINCIPAL ——— */}
      <DCSection id="logo" title="01 · Logo principal" subtitle="Ícono de puente de arco + wordmark Montserrat SemiBold · tracking 0.22em">
        <DCArtboard id="logo-primary" label="Logo principal · sobre blanco hielo" width={680} height={340}>
          <BBFrame bg={LB.ice}>
            <LogoHorizontal scale={1.6} tagline={true}></LogoHorizontal>
          </BBFrame>
        </DCArtboard>
        <DCPostIt>Concepto: el arco en teal es el «puente» — conexión y resolución. El tablero y los tirantes en azul pizarra aportan la sobriedad legal. Línea fina = elegancia y precisión.</DCPostIt>
      </DCSection>

      {/* ——— 2 · VERSIONES DEL LOGO ——— */}
      <DCSection id="lockups" title="02 · Versiones del logo" subtitle="Horizontal · apilada · monograma para avatar y favicon">
        <DCArtboard id="lockup-h" label="Horizontal — uso preferente" width={460} height={250}>
          <BBFrame>
            <LogoHorizontal scale={1.05}></LogoHorizontal>
          </BBFrame>
        </DCArtboard>
        <DCArtboard id="lockup-v" label="Apilada — espacios cuadrados" width={300} height={250}>
          <BBFrame>
            <LogoStacked scale={1}></LogoStacked>
          </BBFrame>
        </DCArtboard>
        <DCArtboard id="monogram" label="Monograma LB — avatar / favicon" width={380} height={250}>
          <BBFrame>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 26 }}>
              <MonogramLB size={110} radius={22}></MonogramLB>
              <MonogramLB size={56} radius={12}></MonogramLB>
              <MonogramLB size={28} radius={6}></MonogramLB>
              <MonogramLB size={16} radius={4}></MonogramLB>
            </div>
          </BBFrame>
        </DCArtboard>
      </DCSection>

      {/* ——— 3 · VERSIONES DE COLOR ——— */}
      <DCSection id="color-versions" title="03 · Versiones de color" subtitle="Color · negativo · monocromo">
        <DCArtboard id="ver-color" label="Color" width={400} height={230}>
          <BBFrame>
            <LogoStacked scale={0.95}></LogoStacked>
          </BBFrame>
        </DCArtboard>
        <DCArtboard id="ver-neg" label="Negativo — blanco sobre #223E5B" width={400} height={230}>
          <BBFrame bg={LB.deep}>
            <LogoStacked scale={0.95} line={LB.white} accent={LB.teal} text={LB.white}></LogoStacked>
          </BBFrame>
        </DCArtboard>
        <DCArtboard id="ver-mono" label="Monocromo — una tinta" width={400} height={230}>
          <BBFrame>
            <LogoStacked scale={0.95} line={LB.deep} accent={LB.deep} text={LB.deep}></LogoStacked>
          </BBFrame>
        </DCArtboard>
        <DCArtboard id="ver-mono-w" label="Monocromo invertido" width={400} height={230}>
          <BBFrame bg={LB.deep}>
            <LogoStacked scale={0.95} line={LB.white} accent={LB.white} text={LB.white}></LogoStacked>
          </BBFrame>
        </DCArtboard>
      </DCSection>

      {/* ——— 4 · PALETA ——— */}
      <DCSection id="palette" title="04 · Paleta de color" subtitle="Azules pizarra sobrios + teal como único acento">
        <DCArtboard id="swatches" label="Colores de marca" width={780} height={330}>
          <BBFrame pad={32}>
            <div style={{ display: 'flex', gap: 14 }}>
              <Swatch hex="#223E5B" name="Azul pizarra profundo" usage="Principal · texto y fondos"></Swatch>
              <Swatch hex="#3D5F7A" name="Azul pizarra medio" usage="Secundario · apoyos"></Swatch>
              <Swatch hex="#6D8496" name="Azul grisáceo" usage="Neutro · texto auxiliar"></Swatch>
              <Swatch hex="#0D9488" name="Teal" usage="Acento · arco, enlaces, CTA"></Swatch>
              <Swatch hex="#E6EEF1" name="Blanco hielo" usage="Fondo · superficies"></Swatch>
            </div>
          </BBFrame>
        </DCArtboard>
        <DCArtboard id="proportion" label="Proporción de uso" width={340} height={330}>
          <BBFrame pad={32}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
              {[
                ['#E6EEF1', '60% · fondos', LB.mid],
                ['#223E5B', '25% · texto y bloques', '#FFFFFF'],
                ['#3D5F7A', '8% · apoyos', '#FFFFFF'],
                ['#6D8496', '4% · auxiliar', '#FFFFFF'],
                ['#0D9488', '3% · acento', '#FFFFFF'],
              ].map(([c, t, tc], i) => (
                <div key={i} style={{ background: c, color: tc, borderRadius: 8, padding: '0 16px', height: [96, 56, 34, 26, 22][i], display: 'flex', alignItems: 'center', fontFamily: bbSans, fontSize: 12, border: i === 0 ? '1px solid #DCE5EA' : 'none', boxSizing: 'border-box' }}>{t}</div>
              ))}
            </div>
          </BBFrame>
        </DCArtboard>
      </DCSection>

      {/* ——— 5 · TIPOGRAFÍA ——— */}
      <DCSection id="type" title="05 · Tipografía" subtitle="Montserrat para voz de marca · Source Sans 3 para lectura">
        <DCArtboard id="type-spec" label="Sistema tipográfico" width={780} height={420}>
          <BBFrame pad={44} style={{ alignItems: 'stretch' }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <TypeRow label="Titulares" family="Montserrat" weight="SemiBold" sample="Asesoría que tiende puentes" size={30}></TypeRow>
              <TypeRow label="Subtítulos" family="Montserrat" weight="Medium" sample="Derecho civil y mercantil" size={20}></TypeRow>
              <TypeRow label="Cuerpo de texto" family="Source Sans 3" weight="Regular" sample="Cada asunto recibe atención directa y personal, sin intermediarios. Comunicación clara desde la primera consulta hasta la resolución." size={15}></TypeRow>
              <TypeRow label="Etiquetas" family="Montserrat" weight="Medium" sample="Wordmark · Tracking amplio" size={12} ls="0.18em" tt="uppercase"></TypeRow>
            </div>
          </BBFrame>
        </DCArtboard>
      </DCSection>

      {/* ——— 6 · PAPELERÍA ——— */}
      <DCSection id="stationery" title="06 · Papelería" subtitle="Tarjeta de visita 85.5 × 54 mm · membrete A4 — datos de contacto: placeholder">
        <DCArtboard id="card-front" label="Tarjeta · anverso" width={342} height={216}>
          <CardFront></CardFront>
        </DCArtboard>
        <DCArtboard id="card-back" label="Tarjeta · reverso" width={342} height={216}>
          <CardBack></CardBack>
        </DCArtboard>
        <DCArtboard id="letterhead" label="Membrete A4" width={368} height={521}>
          <Letterhead></Letterhead>
        </DCArtboard>
      </DCSection>

      {/* ——— 7 · DIGITAL ——— */}
      <DCSection id="digital" title="07 · Digital" subtitle="Firma de correo · banner y avatar para redes sociales">
        <DCArtboard id="email-sig" label="Firma de correo" width={460} height={236}>
          <EmailSignature></EmailSignature>
        </DCArtboard>
        <DCArtboard id="avatar" label="Foto de perfil · 400 × 400" width={236} height={236}>
          <BBFrame bg={LB.ice}>
            <SocialAvatar size={150}></SocialAvatar>
          </BBFrame>
        </DCArtboard>
        <DCArtboard id="banner" label="Banner · 1500 × 500" width={660} height={220}>
          <SocialBanner></SocialBanner>
        </DCArtboard>
      </DCSection>

    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BrandBoard></BrandBoard>);
