import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/app.css';
// Samsung TV remote keys: register the keys required by the prototype when available.
const tizen = (window as unknown as { tizen?: { tvinputdevice?: { registerKey?: (key:string)=>void } } }).tizen;
['MediaPlay','MediaPause','MediaPlayPause','Return','Back'].forEach(key=>{try{tizen?.tvinputdevice?.registerKey?.(key);}catch(_error){/* Key registration varies by Tizen version. */}});
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
