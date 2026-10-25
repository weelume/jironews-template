'use client';
import {useEffect,useRef} from 'react';
import {useReducedMotion} from 'framer-motion';
import {cubeFaces} from '../content';
import type {TemplateLocale} from '../../../types';
export function NewsCube({locale}:{locale:TemplateLocale}){
 const cube=useRef<HTMLDivElement>(null);const reduced=useReducedMotion();
 useEffect(()=>{
  const element=cube.current;if(!element||reduced)return;
  // 使用时间差积分复刻旋转与惯性；松手后按原站 3.2/s 衰减，再恢复 -26°/s 自转。
  let frame=0,last=performance.now(),rotationX=0,rotationY=0,velocityX=0,velocityY=0,tiltX=0,tiltY=0,targetX=0,targetY=0,previousY=window.scrollY;
  let drag:{x:number;y:number}|null=null;
  let pointer={x:window.innerWidth/2,y:window.innerHeight/2};
  const clamp=(v:number,min:number,max:number)=>Math.max(min,Math.min(max,v));
  const addVertical=(v:number)=>{velocityX=clamp(velocityX-.52*v,-750,750)};
  const tick=(now:number)=>{
   const dt=Math.min((now-last)/1000,.05);last=now;velocityX*=Math.exp(-3.2*dt);velocityY*=Math.exp(-3.2*dt);rotationX+=(-26+velocityX)*dt;rotationY+=velocityY*dt;
   tiltX+=(targetX-tiltX)*Math.min(1,6.5*dt);tiltY+=(targetY-tiltY)*Math.min(1,6.5*dt);
   const rx=-18+rotationX+tiltY,ry=-4.5+tiltX+rotationY;element.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
   const x=rx*Math.PI/180,y=ry*Math.PI/180;
   element.querySelectorAll<HTMLElement>('[data-shade]').forEach((shade,i)=>{const face=cubeFaces[i];const light=i<4?Math.cos(face.angle*Math.PI/180+x)*Math.cos(y):(i===4?-1:1)*Math.sin(y)*Math.cos(x);shade.style.opacity=String(light>0?(1-light)*.22:.4)});
   frame=requestAnimationFrame(tick);
  };
  const wheel=(event:WheelEvent)=>{addVertical(event.deltaY);velocityY=clamp(velocityY-.35*event.deltaX,-450,450)};
  const scroll=()=>{const delta=window.scrollY-previousY;previousY=window.scrollY;const hero=element.closest<HTMLElement>('.jn-hero');if(hero){const rect=hero.getBoundingClientRect();const progress=clamp(-rect.top/(rect.height-window.innerHeight),0,1);if(progress>=.24&&progress<=.96&&Math.abs(delta)>.3){rotationX-=.45*delta;velocityX-=.9*delta}const stage=element.closest<HTMLElement>('.jn-cube-stage');if(stage){stage.style.opacity=String(progress>.92?Math.max(0,1-(progress-.92)*12.5):1);stage.style.translate=`${progress>.88?(progress-.88)*800:0}px 0`}}if(Math.abs(delta)>.5)addVertical(1.5*delta)};
  const move=(event:PointerEvent)=>{targetX=-38*clamp((event.clientX-window.innerWidth/2)/(window.innerWidth/2),-1,1);targetY=22*clamp((event.clientY-window.innerHeight/2)/(window.innerHeight/2),-1,1);const dx=event.clientX-pointer.x,dy=event.clientY-pointer.y;pointer={x:event.clientX,y:event.clientY};if(event.pointerType==='mouse'&&Math.hypot(dx,dy)>2){velocityX=clamp(velocityX+2.5*dy-1.8*dx,-800,800);velocityY-=.48*dx}if(drag){addVertical(-3.8*(event.clientY-drag.y));velocityY=clamp(velocityY+1.05*(event.clientX-drag.x),-450,450);drag={x:event.clientX,y:event.clientY}}};
  const down=(event:PointerEvent)=>{if(element.contains(event.target as Node)){drag={x:event.clientX,y:event.clientY};element.setPointerCapture(event.pointerId)}};
  const up=()=>{drag=null};const leave=()=>{targetX=0;targetY=0};
  frame=requestAnimationFrame(tick);window.addEventListener('wheel',wheel,{passive:true});window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('pointermove',move);element.addEventListener('pointerdown',down);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',up);document.addEventListener('mouseleave',leave);
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('wheel',wheel);window.removeEventListener('scroll',scroll);window.removeEventListener('pointermove',move);element.removeEventListener('pointerdown',down);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',up);document.removeEventListener('mouseleave',leave)};
 },[reduced]);
 return <div className="jn-cube-stage"><div className="jn-cube-perspective"><div ref={cube} className="jn-cube" role="img" aria-label={locale==='zh'?'可拖拽旋转的新闻立方体':'Interactive news cube, drag to rotate'}>{cubeFaces.map((face,i)=><div key={face.id} className="jn-cube-face" style={{transform:`${i<4?'rotateX':'rotateY'}(${face.angle}deg) translateZ(calc(var(--cube-size) / 2))`}}><img src={face.image} alt={face.label[locale]} draggable={false}/><span data-shade/></div>)}</div></div><div className="jn-cube-shadow"/><p className="jn-cube-hint">{locale==='zh'?'拖动或滚动 · 探索每一面':'DRAG OR SCROLL · EVERY SIDE OF THE STORY'}</p></div>
}
