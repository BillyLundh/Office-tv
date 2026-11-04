export function Header({ subtitle, now }: { subtitle?: string; now: Date }) {
  return <header className="topbar">
    <div className="brand"><span className="brand-mark">Q</span><span>QUALIPRO <i>OFFICE</i></span></div>
    <div className="top-context">{subtitle || 'MALMÖ · SWEDEN'}</div>
    <div className="top-right"><span className="status"><i className="live-dot"/> CONNECTED</span><span className="top-divider"/><span className="clock">{now.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}</span></div>
  </header>;
}
