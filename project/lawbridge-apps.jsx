// LawBridge — aplicaciones de marca (datos de contacto: placeholders)
const lbContact = {
  name: 'Alejandra Ríos',
  role: 'Abogada · Fundadora',
  phone: '+1 (809) 555-0000',
  email: 'a.rios@lawbridge.legal',
  web: 'www.lawbridge.legal',
  address: 'Av. Winston Churchill 00, Torre Empresarial, Piantini · Santo Domingo, R.D.',
};

const lbSans = "'Source Sans 3', sans-serif";
const lbMont = "'Montserrat', sans-serif";

// ——— Tarjeta de visita · anverso (85.5 × 54 mm → 342 × 216 px) ———
function CardFront() {
  return (
    <div style={{ width: 342, height: 216, background: LB.deep, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <LogoStacked scale={0.92} line={LB.white} accent={LB.teal} text={LB.white}></LogoStacked>
      <div style={{ position: 'absolute', left: 24, right: 24, bottom: 22, display: 'flex', justifyContent: 'center' }}>
        <span style={{ fontFamily: lbSans, fontSize: 9, letterSpacing: '0.1em', color: LB.gray }}>CONNECTING PEOPLE · RESOLVING MATTERS · BUILDING TRUST</span>
      </div>
    </div>
  );
}

// ——— Tarjeta de visita · reverso ———
function CardBack() {
  return (
    <div style={{ width: 342, height: 216, background: '#FFFFFF', position: 'relative', padding: '26px 28px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontFamily: lbMont, fontWeight: 600, fontSize: 16, color: LB.deep, letterSpacing: '0.02em' }}>{lbContact.name}</span>
        <span style={{ fontFamily: lbMont, fontWeight: 500, fontSize: 10, color: LB.teal, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{lbContact.role}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <span style={{ fontFamily: lbSans, fontSize: 11.5, color: LB.mid }}>{lbContact.phone}</span>
        <span style={{ fontFamily: lbSans, fontSize: 11.5, color: LB.mid }}>{lbContact.email}</span>
        <span style={{ fontFamily: lbSans, fontSize: 11.5, color: LB.mid }}>{lbContact.web}</span>
        <span style={{ fontFamily: lbSans, fontSize: 11.5, color: LB.gray }}>{lbContact.address}</span>
      </div>
      <div style={{ position: 'absolute', top: 26, right: 28 }}>
        <BridgeIcon height={26} line={LB.deep} accent={LB.teal} sw={2}></BridgeIcon>
      </div>
      <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 4, background: LB.deep }}></div>
    </div>
  );
}

// ——— Membrete A4 (escala 0.62 → 368 × 521 px) ———
function Letterhead() {
  return (
    <div style={{ width: 368, height: 521, background: '#FFFFFF', position: 'relative', padding: '30px 34px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <LogoHorizontal scale={0.62}></LogoHorizontal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-end' }}>
          <span style={{ fontFamily: lbSans, fontSize: 7.5, color: LB.gray }}>{lbContact.web}</span>
          <span style={{ fontFamily: lbSans, fontSize: 7.5, color: LB.gray }}>{lbContact.email}</span>
        </div>
      </div>
      <div style={{ height: 1, background: LB.ice, margin: '18px 0 22px' }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
        <span style={{ fontFamily: lbSans, fontSize: 8.5, color: LB.gray }}>Santo Domingo, 9 de junio de 2026</span>
        <span style={{ fontFamily: lbMont, fontWeight: 600, fontSize: 10.5, color: LB.deep, marginTop: 8 }}>Asunto: propuesta de servicios</span>
        {[100, 96, 92, 88, 94, 60].map((w, i) => (
          <div key={i} style={{ height: 5, width: w + '%', background: LB.ice, borderRadius: 2, marginTop: i === 0 ? 6 : 0 }}></div>
        ))}
        <div style={{ height: 14 }}></div>
        {[98, 90, 95, 45].map((w, i) => (
          <div key={i} style={{ height: 5, width: w + '%', background: LB.ice, borderRadius: 2 }}></div>
        ))}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <span style={{ fontFamily: lbMont, fontWeight: 600, fontSize: 9.5, color: LB.deep }}>{lbContact.name}</span>
          <span style={{ fontFamily: lbSans, fontSize: 8, color: LB.gray }}>{lbContact.role}</span>
        </div>
      </div>
      <div style={{ marginTop: 22, paddingTop: 12, borderTop: `1px solid ${LB.ice}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: lbSans, fontSize: 7, color: LB.gray, letterSpacing: '0.06em' }}>{lbContact.address} · {lbContact.phone}</span>
        <svg width="34" height="13" viewBox="0 0 44 14" fill="none">
          <path d="M2 13 Q22 -4 42 13" stroke={LB.teal} strokeWidth="2" strokeLinecap="round" fill="none"></path>
        </svg>
      </div>
    </div>
  );
}

// ——— Firma de correo ———
function EmailSignature() {
  return (
    <div style={{ width: 460, background: '#FFFFFF', padding: '22px 24px', boxSizing: 'border-box' }}>
      <div style={{ fontFamily: lbSans, fontSize: 13, color: LB.mid, marginBottom: 16 }}>Un cordial saludo,</div>
      <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
        <MonogramLB size={72} radius={12}></MonogramLB>
        <div style={{ width: 1, alignSelf: 'stretch', background: LB.ice }}></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <span style={{ fontFamily: lbMont, fontWeight: 600, fontSize: 15, color: LB.deep }}>{lbContact.name}</span>
          <span style={{ fontFamily: lbMont, fontWeight: 500, fontSize: 9.5, color: LB.teal, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{lbContact.role} · Lawbridge</span>
          <div style={{ display: 'flex', gap: 10, marginTop: 6, fontFamily: lbSans, fontSize: 11.5, color: LB.gray }}>
            <span>{lbContact.phone}</span>
            <span style={{ color: LB.ice }}>|</span>
            <span style={{ color: LB.teal }}>{lbContact.web}</span>
          </div>
          <span style={{ fontFamily: lbSans, fontSize: 11.5, color: LB.gray }}>{lbContact.address}</span>
        </div>
      </div>
      <div style={{ marginTop: 16, paddingTop: 10, borderTop: `1px solid ${LB.ice}`, fontFamily: lbSans, fontSize: 8.5, color: LB.gray, fontStyle: 'italic' }}>
        Connecting people. Resolving matters. Building trust.
      </div>
    </div>
  );
}

// ——— Banner redes (1500 × 500 → 660 × 220) ———
function SocialBanner() {
  return (
    <div style={{ width: 660, height: 220, background: LB.deep, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* arco de fondo, gran escala */}
      <svg width="660" height="220" viewBox="0 0 660 220" fill="none" style={{ position: 'absolute', inset: 0, opacity: 0.16 }}>
        <path d="M-40 230 Q330 -90 700 230" stroke={LB.gray} strokeWidth="1.5" fill="none"></path>
        <path d="M-40 260 Q330 -60 700 260" stroke={LB.gray} strokeWidth="1.5" fill="none"></path>
      </svg>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <LogoHorizontal scale={1.1} line={LB.white} accent={LB.teal} text={LB.white}></LogoHorizontal>
        <span style={{ fontFamily: lbSans, fontSize: 13, letterSpacing: '0.12em', color: LB.gray }}>CONNECTING PEOPLE · RESOLVING MATTERS · BUILDING TRUST</span>
      </div>
    </div>
  );
}

// ——— Foto de perfil (avatar circular) ———
function SocialAvatar({ size = 160 }) {
  return <MonogramLB size={size} radius={size / 2}></MonogramLB>;
}

Object.assign(window, { lbContact, CardFront, CardBack, Letterhead, EmailSignature, SocialBanner, SocialAvatar });
