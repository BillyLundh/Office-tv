import { photos } from '../utils/data';
export function Gallery({ index, setIndex, full }: { index: number; setIndex: (i:number)=>void; full: boolean }) {
 const selected=photos[index];
 return <main className={'gallery-page '+(full?'is-fullscreen':'')}>
  <div className="gallery-head"><div><div className="overline">THE QUALIPRO JOURNAL <span className="tiny-line"/> MALMÖ</div><h1>Life, <em>together.</em></h1></div><span className="gallery-counter">{String(index+1).padStart(2,'0')} <i>/ {String(photos.length).padStart(2,'0')}</i></span></div>
  <div className={'gallery-feature '+selected.art} key={selected.art}><div className="gallery-shade"/><div className="image-caption"><span>FIELD NOTES · {selected.detail}</span><h2>{selected.title}</h2></div><div className="gallery-arrows"><button aria-label="Previous photo" onClick={()=>setIndex((index+photos.length-1)%photos.length)}>‹</button><button aria-label="Next photo" onClick={()=>setIndex((index+1)%photos.length)}>›</button></div></div>
  {!full&&<div className="thumb-row">{photos.map((photo,i)=><button key={photo.title} onClick={()=>setIndex(i)} className={'thumb '+(i===index?'thumb-active':'')}><span className={'thumb-art '+photo.art}/><span>{photo.title}</span><small>0{i+1}</small></button>)}</div>}
  <div className="gallery-instructions">← PREVIOUS <span>OK · FULL SCREEN</span> NEXT →</div>
 </main>;
}
