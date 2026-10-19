import { useState } from 'react';
import { Menu, X, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label, Action } from './kyma-shared';
import hero from '@/assets/hero.asset.json';
import founder from '@/assets/founder.asset.json';
import sophie from '@/assets/sophie.asset.json';
import team1 from '@/assets/gallery-8.asset.json';
import team2 from '@/assets/gallery-9.asset.json';
export function KymaHero() {
 const [menu, setMenu] = useState(false); const [playing, setPlaying] = useState(false);
 return <><section className="dark-band hero" id="home"><div className="wrap">
  <header className="header"><a href="#home" className="wordmark" aria-label="Kyma home">ꓘYMA<sup>®</sup></a><Button variant="ghost" className="menu-button" onClick={() => setMenu(!menu)} aria-expanded={menu}>{menu ? <X/> : <Menu/>}<span>{menu ? 'Close' : 'Menu'}</span></Button></header>
  {menu && <nav className="menu-panel" aria-label="Main navigation">{[['Home','home'],['Who we are','about'],['Our services','services'],['How it works','process'],['Our team','team'],['Pricing','pricing'],['Contact','contact']].map(([name,id])=><Button variant="ghost" key={id} onClick={()=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false);}}>{name}<span>↗</span></Button>)}</nav>}
  <div className="hero-copy"><Label n="01">Eliminate your bottleneck</Label><h1>Scale your<br className="mobile-br"/> operations <em>[10x]</em> without hiring <em>[100]</em> people.</h1><div className="hero-description"><p>We build custom AI systems that handle your repetitive work, so you can focus on growth, not grunt work.</p><Action target="services">Our services</Action></div></div>
  <div className="hero-bottom"><div className="trusted"><div className="faces">{[founder,sophie,team1,team2,sophie].map((a,i)=><img key={i} src={a.url} alt="Client portrait"/>)}</div><div><span className="stars">★★★★★</span><p>Trusted by 50+ companies</p></div></div><div className="automation"><p>What used to take 6 hours now<br/> runs automatically without human oversight.</p><div className={`automation-image ${playing?'is-playing':''}`}><img src={hero.url} alt="AI automation robot with illuminated green visor"/><Button size="icon" className="play-button" aria-label={playing?'Pause automation preview':'Play automation preview'} onClick={()=>setPlaying(!playing)}>{playing?<Pause/>:<Play/>}</Button></div><div className="media-caption"><span>Live automation</span><span>2026</span></div></div></div>
 </div></section><div className="logo-strip"><div className="wrap">{[['✺','FocalPoint'],['✳','Convergence'],['◩','Command+R'],['✚','Clandestine']].map(([symbol,name])=><div key={name}><b>{symbol}</b><strong>{name}</strong></div>)}</div></div></>;
}