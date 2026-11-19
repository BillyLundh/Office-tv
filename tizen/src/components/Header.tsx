type Theme='light'|'dark';
export function Header({ subtitle, now, theme, onToggleTheme }: { subtitle?: string; now: Date; theme: Theme; onToggleTheme: () => void }) {
  return <header className="topbar">
    <div className="brand" aria-label="QualiPro Office">
      <img className="brand-logo" src={theme==='light'?'/brand/logo-text-black.svg':'/brand/logo-text-white.svg'} alt="QualiPro" />
      <span className="brand-divider" aria-hidden="true"/><span className="brand-office">OFFICE</span>
    </div>
    <div className="top-context">{subtitle || 'MALMÖ · SWEDEN'}</div>
    <div className="top-right"><span className="status"><i className="live-dot"/> CONNECTED</span><span className="top-divider"/><span className="clock" aria-label="Local time">{now.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}</span><button className="theme-toggle" onClick={onToggleTheme} aria-label={'Switch to '+(theme==='dark'?'light':'dark')+' theme'} title={'Switch to '+(theme==='dark'?'light':'dark')+' theme'}><span aria-hidden="true">{theme==='dark'?'☼':'◐'}</span><small>{theme==='dark'?'LIGHT':'DARK'}</small></button></div>
  </header>;
}
