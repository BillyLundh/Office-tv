export const sections = [
  { id: 'dashboard', name: 'Dashboard', description: 'Today across the office', icon: 'dashboard', className: 'tile-dashboard' },
  { id: 'gallery', name: 'Events & Gallery', description: 'People, places, moments', icon: 'gallery', className: 'tile-gallery' },
  { id: 'demo', name: 'Demo Mode', description: 'The Qualipro experience', icon: 'play', className: 'tile-demo' },
  { id: 'whiteboard', name: 'Whiteboard', description: 'Make an idea visible', icon: 'board', className: 'tile-whiteboard' }
] as const;

export type Meeting = { time: string; title: string; place: string; presenter: string; status: 'now' | 'next' | 'later' };
function formatTime(date: Date) {
  return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}
export function getMeetings(now: Date): Meeting[] {
  const base = new Date(now);
  base.setSeconds(0, 0);
  const activeStart = new Date(base.getTime() - 12 * 60000);
  const nextStart = new Date(base.getTime() + 28 * 60000);
  const laterStart = new Date(base.getTime() + 125 * 60000);
  return [
    { time: formatTime(activeStart), title: 'Product & design stand-up', place: 'Studio 02', presenter: 'Product team', status: 'now' },
    { time: formatTime(nextStart), title: 'Malmö office update', place: 'Boardroom', presenter: 'Elin Andersson · Operations', status: 'next' },
    { time: formatTime(laterStart), title: 'Customer story: Fjord Labs', place: 'Meeting room 1', presenter: 'Growth & partnerships', status: 'later' }
  ];
}

export const photos = [
  { title: 'An evening by the water', detail: 'Summer gathering · 18 June 2025', art: 'scene-one' },
  { title: 'A place to think', detail: 'Malmö office · 02 September 2025', art: 'scene-two' },
  { title: 'Work, together', detail: 'Design week · 14 October 2025', art: 'scene-three' },
  { title: 'Room for what’s next', detail: 'Malmö office · 30 October 2025', art: 'scene-four' }
];
