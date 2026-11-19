import { SectionIcon } from '../components/SectionIcon';
import { getMeetings, sections } from '../utils/data';
type Page = 'dashboard' | 'gallery' | 'demo' | 'whiteboard';
export function Home({ now, selected, onSelect, onOpen }: { now: Date; selected: number; onSelect: (index: number) => void; onOpen: (page: Page) => void }) {
 const hour=now.getHours(); const greeting=hour<12?'Good morning,':hour<18?'Good afternoon,':'Good evening,';
 const meetings=getMeetings(now);
 return <main className="home">
  <section className="home-stage">
   <div className="home-left">
    <div className="home-intro"><div className="overline">{now.toLocaleDateString('en-GB',{weekday:'long',month:'long',day:'numeric'}).toUpperCase()} <span className="tiny-line"/> MALMÖ <span className="weather">18° · PARTLY SUNNY</span></div><h1>{greeting}<br/><em>Malmö.</em></h1><p>Your day, thoughtfully brought together.</p></div>
    <section className="schedule-panel home-schedule"><div className="panel-title"><span>AROUND THE OFFICE</span><span className="panel-meta">TODAY · 03 EVENTS</span></div>{meetings.map(meeting=><div className={'meeting '+(meeting.status==='now'?'meeting-now':'')} key={meeting.title}><span className="meeting-time">{meeting.time}</span><span className={'meeting-indicator meeting-'+meeting.status}/><div className="meeting-copy"><strong>{meeting.title}</strong><small>{meeting.place}<span className="meeting-presenter"> · {meeting.presenter}</span></small></div><span className={'meeting-state state-'+meeting.status}>{meeting.status==='now'?'LIVE':meeting.status==='next'?'UP NEXT':'LATER'}</span></div>)}</section>
   </div>
   <article className="home-feature scene-one"><div className="feature-shade"/><div className="feature-top"><span className="feature-kicker"><i/> QUALIPRO PEOPLE</span><span className="feature-index">01 / 04</span></div><div className="feature-story"><div className="overline">THIS WEEK · MALMÖ</div><h2>Good things<br/>happen <em>together.</em></h2><p>Join the team for an evening by the water.</p><button className="story-link" onClick={()=>onOpen('gallery')}>EXPLORE THE GALLERY <b>↗</b></button></div></article>
  </section>
  <section className="home-navigation" aria-label="Main sections">{sections.map((section,index)=><button key={section.id} className={'home-tile '+section.className+' '+(selected===index?'selected':'')} onFocus={()=>onSelect(index)} onMouseEnter={()=>onSelect(index)} onClick={()=>onOpen(section.id as Page)}><span className="tile-art"/><span className="tile-number">0{index+1}</span><span className="tile-content"><span className="tile-icon"><SectionIcon name={section.icon}/></span><span><strong>{section.name}</strong><small>{section.description}</small></span></span><span className="tile-arrow">↗</span></button>)}</section>
  <div className="home-bottom"><span><i className="live-dot"/> MALMÖ OFFICE · READY FOR THE DAY</span><span>NAVIGATE <kbd>←</kbd> <kbd>→</kbd> &nbsp; SELECT <kbd>OK</kbd></span></div>
 </main>;
}
