'use client';
import Link from 'next/link';
import {useState} from 'react';
import {motion,useReducedMotion} from 'framer-motion';
import type {TemplateLocale} from '../../../types';
import {route,text} from './Layout';
import {ease} from './Motion';
const cards=[
 {id:'technology',title:{zh:'人工智能如何改变未来的工作',en:'How AI Is Changing the Future of Work'},category:{zh:'科技',en:'Technology'},date:'2025-03-07',image:'photo-1618005182384-a83a8bd57fbe'},
 {id:'science',title:{zh:'全球领导人共同应对气候挑战',en:'Global Leaders Meet to Tackle Climate Challenges'},category:{zh:'世界',en:'World'},date:'2025-02-22',image:'photo-1451187580459-43490279c0fa'},
 {id:'business',title:{zh:'科技股领涨带动全球市场回升',en:'Markets Rally as Tech Stocks Lead Global Surge'},category:{zh:'商业',en:'Business'},date:'2025-02-28',image:'photo-1486406146926-c627a92ad1ab'},
];
export function SubscriptionCards({locale,basePath}:{locale:TemplateLocale;basePath:string}){
 const [hovered,setHovered]=useState<string|null>(null);const reduced=useReducedMotion();
 return <motion.div className="jn-subscription-deck" initial={reduced?false:'hidden'} whileInView="visible" viewport={{once:false,amount:.15}} variants={{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.35,delayChildren:.2}}}}>{cards.map((card,i)=><motion.article key={card.id} className="jn-subscription-card" variants={{hidden:{opacity:0,x:180,scale:.95},visible:{opacity:1,x:(i-1)*190,scale:1,rotate:i===1?-14:0,transition:{duration:.75,ease}}}} whileHover={reduced?undefined:{rotate:0,y:i===1?-8:-6,scale:1.02}} onHoverStart={()=>setHovered(card.id)} onHoverEnd={()=>setHovered(null)} style={{zIndex:hovered===card.id?50:(i+1)*10}}><div className="jn-subscription-image"><img src={'/templates/jironews/images/'+card.image+'.jpg'} alt="" loading="lazy"/><span>{card.category[locale]}</span><time dateTime={card.date}>{new Intl.DateTimeFormat(locale==='zh'?'zh-CN':'en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(card.date))}</time></div><h3>{card.title[locale].split(locale==='zh'?'':' ').map((word,j)=><motion.span key={j} initial={reduced?false:{opacity:0,x:-8}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{duration:.35,delay:.2+.05*j,ease}}>{word}{locale==='en'?' ':''}</motion.span>)}</h3><Link className="jn-button jn-black" href={route(basePath,'categories/'+card.id)}>{text(locale,'继续阅读','Read more')}</Link></motion.article>)}</motion.div>
}
