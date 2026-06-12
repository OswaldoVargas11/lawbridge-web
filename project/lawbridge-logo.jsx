// LawBridge — componentes de identidad (ícono, wordmark, lockups, monograma)
const LB = {
  deep: '#223E5B',
  mid: '#3D5F7A',
  gray: '#6D8496',
  teal: '#0D9488',
  ice: '#E6EEF1',
  white: '#FFFFFF',
};

// Ícono: puente de arco — tablero + arco + 5 tirantes (líneas finas)
function BridgeIcon({ height = 36, line = LB.deep, accent = LB.teal, sw = 2 }) {
  const w = (72 / 36) * height;
  return (
    <svg width={w} height={height} viewBox="0 0 72 36" fill="none" aria-label="Ícono LawBridge">
      {/* tablero */}
      <line x1="4" y1="28" x2="68" y2="28" stroke={line} strokeWidth={sw} strokeLinecap="round"></line>
      {/* arco */}
      <path d="M8 28 Q36 2 64 28" stroke={accent} strokeWidth={sw} strokeLinecap="round" fill="none"></path>
      {/* tirantes */}
      <line x1="22" y1="18.3" x2="22" y2="28" stroke={line} strokeWidth={sw * 0.7} strokeLinecap="round"></line>
      <line x1="29" y1="15.8" x2="29" y2="28" stroke={line} strokeWidth={sw * 0.7} strokeLinecap="round"></line>
      <line x1="36" y1="15" x2="36" y2="28" stroke={line} strokeWidth={sw * 0.7} strokeLinecap="round"></line>
      <line x1="43" y1="15.8" x2="43" y2="28" stroke={line} strokeWidth={sw * 0.7} strokeLinecap="round"></line>
      <line x1="50" y1="18.3" x2="50" y2="28" stroke={line} strokeWidth={sw * 0.7} strokeLinecap="round"></line>
    </svg>
  );
}

function Wordmark({ size = 24, color = LB.deep, tracking = '0.22em' }) {
  return (
    <span style={{
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: size,
      letterSpacing: tracking,
      color: color,
      textTransform: 'uppercase',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      marginRight: `calc(-1 * ${tracking})`,
    }}>Lawbridge</span>
  );
}

function Tagline({ size = 11, color = LB.gray }) {
  return (
    <span style={{
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 400,
      fontSize: size,
      letterSpacing: '0.08em',
      color: color,
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
    }}>Connecting people. Resolving matters. Building trust.</span>
  );
}

// Lockup horizontal: ícono a la izquierda, wordmark a la derecha
function LogoHorizontal({ scale = 1, line = LB.deep, accent = LB.teal, text = LB.deep, tagline = false, taglineColor = LB.gray }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 * scale }}>
      <BridgeIcon height={40 * scale} line={line} accent={accent} sw={2}></BridgeIcon>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 * scale, alignItems: 'flex-start' }}>
        <Wordmark size={26 * scale} color={text}></Wordmark>
        {tagline ? <Tagline size={10.5 * scale} color={taglineColor}></Tagline> : null}
      </div>
    </div>
  );
}

// Lockup apilado: ícono arriba, wordmark debajo, centrado
function LogoStacked({ scale = 1, line = LB.deep, accent = LB.teal, text = LB.deep, tagline = false, taglineColor = LB.gray }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 * scale }}>
      <BridgeIcon height={44 * scale} line={line} accent={accent} sw={2}></BridgeIcon>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 * scale, alignItems: 'center' }}>
        <Wordmark size={22 * scale} color={text}></Wordmark>
        {tagline ? <Tagline size={10 * scale} color={taglineColor}></Tagline> : null}
      </div>
    </div>
  );
}

// Monograma LB: arco fino sobre las iniciales
function MonogramLB({ size = 96, bg = LB.deep, line = LB.white, accent = LB.teal, radius = 20, border = 'none' }) {
  const s = size / 96;
  return (
    <div style={{
      width: size, height: size, borderRadius: radius,
      background: bg, border: border,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 7 * s, flexShrink: 0,
    }}>
      <svg width={44 * s} height={14 * s} viewBox="0 0 44 14" fill="none">
        <path d="M2 13 Q22 -4 42 13" stroke={accent} strokeWidth="2" strokeLinecap="round" fill="none"></path>
      </svg>
      <span style={{
        fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
        fontSize: 32 * s, letterSpacing: '0.08em', color: line,
        lineHeight: 1, marginRight: '-0.08em',
      }}>LB</span>
    </div>
  );
}

Object.assign(window, { LB, BridgeIcon, Wordmark, Tagline, LogoHorizontal, LogoStacked, MonogramLB });
