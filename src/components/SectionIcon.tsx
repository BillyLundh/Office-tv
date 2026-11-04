export function SectionIcon({ name }: { name: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
    {name === 'dashboard' && <><rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><path d="M14 17h6m-3-3v6"/></>}
    {name === 'gallery' && <><rect x="3" y="4" width="18" height="16" rx="1.5"/><circle cx="8.5" cy="9" r="1.5"/><path d="m4 17 5-4 3 2 4-5 4 4"/></>}
    {name === 'play' && <><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/></>}
    {name === 'board' && <><rect x="3" y="3" width="18" height="14" rx="1.5"/><path d="M8 21h8m-4-4v4m-4-9 3-3 2 2 3-4"/></>}
  </svg>;
}
