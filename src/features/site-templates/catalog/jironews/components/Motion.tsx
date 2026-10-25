'use client';
import {motion,useReducedMotion,type Variants} from 'framer-motion';
import type {ReactNode} from 'react';
export const ease=[.16,1,.3,1] as const;
export function Reveal({children,className='',id,y=30,x=0,duration=.7,stagger=0,amount=.15}:{children:ReactNode;className?:string;id?:string;y?:number;x?:number;duration?:number;stagger?:number;amount?:number}){
 const reduced=useReducedMotion();
 const variants:Variants={hidden:{opacity:0,y,x},visible:{opacity:1,y:0,x:0,transition:{duration,ease,staggerChildren:stagger}}};
 return <motion.section id={id} className={className} variants={variants} initial={reduced?false:'hidden'} whileInView="visible" viewport={{once:false,amount}}>{children}</motion.section>
}
export function Typewriter({words}:{words:string[]}){
 return <Typed key={words.join('|')} words={words}/>;
}
import {useEffect,useState} from 'react';
function Typed({words}:{words:string[]}){
 const [state,setState]=useState({index:0,length:words[0]?.length??0,deleting:false});const reduced=useReducedMotion();
 useEffect(()=>{if(reduced||!words.length)return;const word=words[state.index];const timer=setTimeout(()=>setState(s=>s.deleting?s.length>0?{...s,length:s.length-1}:{index:(s.index+1)%words.length,length:0,deleting:false}:s.length<word.length?{...s,length:s.length+1}:{...s,deleting:true}),state.deleting?65:state.length===word.length?2200:110);return()=>clearTimeout(timer)},[state,words,reduced]);
 return <span className="jn-typed">{reduced?words[0]:words[state.index]?.slice(0,state.length)}<span aria-hidden="true" className="jn-cursor"/></span>
}
