import { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Demo } from './pages/Demo';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';
import { Whiteboard } from './pages/Whiteboard';
import { useClock } from './hooks/useClock';
import { useRemote, type RemoteAction } from './hooks/useRemote';
import { sections } from './utils/data';
import './styles/app.css';
type Page='home'|'dashboard'|'gallery'|'demo'|'whiteboard';
export default function App(){
 const [page,setPage]=useState<Page>('home'); const [selected,setSelected]=useState(0); const [image,setImage]=useState(0); const [playing,setPlaying]=useState(false); const [galleryFull,setGalleryFull]=useState(false); const now=useClock();
 const back=useCallback(()=>{if(page==='gallery'&&galleryFull){setGalleryFull(false);return;}if(page!=='home'){setPage('home');setPlaying(false);}},[page,galleryFull]);
 const key=useCallback((action:RemoteAction)=>{
  if(page==='home'){
   if(action==='left'||action==='up')setSelected(value=>(value+sections.length-1)%sections.length);
   if(action==='right'||action==='down')setSelected(value=>(value+1)%sections.length);
   if(action==='ok'){setPage(sections[selected].id as Page);setGalleryFull(false);}
   if(action==='back')back(); return;
  }
  if(action==='back'){back();return;}
  if(page==='gallery'){
   if(action==='left')setImage(value=>(value+3)%4);
   if(action==='right')setImage(value=>(value+1)%4);
   if(action==='ok')setGalleryFull(value=>!value); return;
  }
  if(page==='demo'&&(action==='play'||action==='ok'))setPlaying(value=>!value);
  if(page==='whiteboard'){
   const controls=Array.from(document.querySelectorAll<HTMLButtonElement>('.board-control'));
   if(action==='ok'){(document.activeElement as HTMLElement|null)?.click();return;}
   if(action==='left'||action==='right'||action==='up'||action==='down'){
    const current=controls.indexOf(document.activeElement as HTMLButtonElement);
    const delta=action==='left'||action==='up'?-1:1;
    controls[(current+delta+controls.length)%controls.length]?.focus();
   }
  }
 },[back,page,selected]);
 useRemote(key);
 const subtitle=page==='home'?'MALMÖ · SWEDEN':sections.find(section=>section.id===page)?.name.toUpperCase();
 return <div className={'app-shell '+(page==='whiteboard'?'board-shell ':'')+(galleryFull?'gallery-full':'')}><Header subtitle={subtitle} now={now}/>{page==='home'?<Home now={now} selected={selected} onSelect={setSelected} onOpen={setPage}/>:page==='dashboard'?<Dashboard date={now}/>:page==='gallery'?<Gallery index={image} setIndex={setImage} full={galleryFull}/>:page==='demo'?<Demo playing={playing} toggle={()=>setPlaying(value=>!value)}/>:<Whiteboard/>}<button className="back-hint" onClick={back}><kbd>↶</kbd> BACK <span>RETURN TO HOME</span></button></div>;
}
