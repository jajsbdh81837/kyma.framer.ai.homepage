import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import founder from '@/assets/founder.asset.json';
import sophie from '@/assets/sophie.asset.json';
export function Label({ n, children }: { n: string; children: React.ReactNode }) { return <p className="section-label"><span>[{n}]</span>{children}_</p>; }
export function Action({ children, target = 'contact', className = '' }: { children: React.ReactNode; target?: string; className?: string }) { return <Button className={`action ${className}`} onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })}><span>{children}</span><span className="pixel-arrow" aria-hidden="true">↗</span></Button>; }
export function Person({ who = 'founder' }: { who?: 'founder' | 'sophie' }) { return <div className="person"><img src={who === 'founder' ? founder.url : sophie.url} alt={who === 'founder' ? 'Anders Eriksson' : 'Sophie Bergman'} /><div><strong>{who === 'founder' ? 'Anders Eriksson' : 'Sophie Bergman'}</strong><small>{who === 'founder' ? 'Founder & CEO' : 'Head of client solutions'}</small></div></div>; }