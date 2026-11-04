import { useEffect } from 'react';
export type RemoteAction = 'up' | 'down' | 'left' | 'right' | 'ok' | 'back' | 'play';
const keyMap: Record<number, RemoteAction> = { 38: 'up', 40: 'down', 37: 'left', 39: 'right', 13: 'ok', 10009: 'back', 8: 'back', 27: 'back', 415: 'play', 19: 'play', 179: 'play' };
export function useRemote(handler: (action: RemoteAction) => void) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const action = keyMap[event.keyCode] || ({ ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', Enter: 'ok', Escape: 'back', Backspace: 'back', ' ': 'play' } as Record<string, RemoteAction>)[event.key];
      if (!action) return;
      event.preventDefault(); event.stopPropagation(); handler(action);
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [handler]);
}
