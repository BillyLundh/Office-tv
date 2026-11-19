export function Demo({ playing, toggle }: { playing: boolean; toggle: ()=>void }) {
 return <main className={'demo-page '+(playing?'demo-playing':'')}>
  <div className="demo-presentation scene-two"><div className="presentation-shade"/><div className="presentation-top"><span>QUALIPRO · WORKPLACE FILM</span><span>{playing?'NOW PLAYING':'PRESENTATION MODE'}</span></div><div className="presentation-copy"><div className="overline">A BETTER WAY TO WORK</div><h1>Make room<br/>for <em>great work.</em></h1><p>Thoughtful spaces. Shared ideas. A stronger sense of what’s possible together.</p><span className="presentation-runtime">INTRODUCTION FILM <b>·</b> 02:34</span></div><div className="presentation-controls"><button className="play-button" aria-label={playing?'Pause presentation':'Play presentation'} onClick={toggle}>{playing?'Ⅱ':'▶'}</button><div className="video-track"><span className={playing?'progress moving':''}/></div><span>{playing?'PLAYING':'PAUSED'}</span></div></div>
  <div className="demo-caption"><span>QUALIPRO · MALMÖ</span><span>PRESS OK OR PLAY / PAUSE</span></div>
 </main>;
}
