import { useEffect, useRef, useState } from 'react';
export function ScrollStatement({ text }: { text: string }) {
 const ref = useRef<HTMLSpanElement>(null);const [progress,setProgress]=useState(0);
 useEffect(()=>{const update=()=>{if(!ref.current)return;const r=ref.current.getBoundingClientRect();setProgress(Math.max(0,Math.min(1,(window.innerHeight*.8-r.top)/(window.innerHeight*.55))));};update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
 const words=text.split(' ');return <span ref={ref} className="scroll-statement">{words.map((word,i)=><span key={i} className={progress>(i+1)/words.length?'word-complete':progress>i/words.length?'word-active':'word-pending'}>{word} </span>)}</span>;
}
export function PainStatement() {
 const ref=useRef<HTMLElement>(null);const [resolved,setResolved]=useState(false);
 useEffect(()=>{const update=()=>{if(!ref.current)return;setResolved(ref.current.getBoundingClientRect().top < -window.innerHeight*.25);};window.addEventListener('scroll',update,{passive:true});update();return()=>window.removeEventListener('scroll',update);},[]);
 return <section ref={ref} className={`pain-scroll ${resolved?'pain-resolved':''}`}><div className="pain-sticky"><h2>{resolved?<>AI automation<br/> eliminates them all.</>:<>Your team is<br/> drowning in<br/> work that<br/> shouldn't exist.</>}</h2><span className="section-label">{resolved?'Human potential. Unlocked.':'Customer support backlog. Manual reports. Endless admin.'}</span></div></section>;
}