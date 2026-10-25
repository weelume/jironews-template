'use client';
import {motion,useReducedMotion,type Variants} from 'framer-motion';
import Link from 'next/link';
import type {TemplateLocale} from '../../../types';
import {articles,editorial,impactMetrics} from '../content';
import {ArticleCard} from './ArticleCard';
import {Reveal,ease} from './Motion';
import {route,text} from './Layout';

type Props={locale:TemplateLocale;basePath:string};

// 轨迹绑定实际内容，而不是整列统一平移；减少动态效果时保留全部内容。
function entry(reduced:boolean|null,x:number,scale=1,blur=5):Variants {
 const visible={opacity:1,x:0,scale:1,filter:'blur(0px)'};
 return {hidden:reduced?visible:{opacity:0,x,scale,filter:`blur(${blur}px)`},visible:{...visible,transition:{duration:reduced?0:.75,ease}}};
}

export function EditorialSection({locale,basePath}:Props){
 const reduced=useReducedMotion();
 return <Reveal className="jn-section" id="editorials" y={60} duration={.85} stagger={.1} amount={.2}>
  <div className="jn-container jn-editorials">{editorial.map(group=><Reveal key={group.id} className="jn-editorial" y={40} duration={.8} stagger={.12} amount={.3}>
   <div className="jn-section-heading"><h2>{group.title[locale]}</h2><Link href={route(basePath,'articles')}>{text(locale,'查看全部','View All')}</Link></div>
   <div className="jn-editorial-content">
    <motion.div className="jn-editorial-featured" variants={entry(reduced,-50,.96)}><ArticleCard article={articles.find(a=>a.id===group.featured)!} locale={locale} basePath={basePath} reveal={false}/></motion.div>
    <motion.div className="jn-editorial-compact" variants={entry(reduced,50)}>{group.compact.map(id=><ArticleCard key={id} article={articles.find(a=>a.id===id)!} locale={locale} basePath={basePath} compact reveal={false}/>)}</motion.div>
   </div>
  </Reveal>)}</div>
 </Reveal>;
}



export function ImpactSection({locale,basePath}:Props){
 const reduced=useReducedMotion();
 const image=(name:string,side:'left'|'right')=><motion.div className={`jn-impact-image jn-impact-image-${side}`} variants={entry(reduced,side==='left'?-35:35,.92,6)} whileHover={reduced?undefined:{scale:1.04,rotate:side==='left'?-1:1}} transition={{type:'spring',stiffness:400,damping:20}}><img src={`/templates/jironews/images/${name}.jpg`} alt="" loading="lazy"/></motion.div>;
 return <Reveal className="jn-section jn-impact" id="impact" y={40} duration={.8} stagger={.12}>
  <div className="jn-container"><motion.p className="jn-badge" variants={{hidden:reduced?{}:{opacity:0,y:-16,scale:.92,filter:'blur(4px)'},visible:{opacity:1,y:0,scale:1,filter:'blur(0px)',transition:{duration:.6,ease}}}}>{text(locale,'真实故事 真实影响','REAL STORIES. REAL IMPACT.')}</motion.p>
   {impactMetrics.map(metric=><Reveal key={metric.id} className="jn-impact-row" y={35} duration={.7} stagger={.12}>
    {metric.left&&image(metric.left,'left')}
    <div className="jn-impact-copy"><h2>{metric.title[locale]}</h2><p>{metric.body[locale]}</p>{metric.id==='contributors'&&<Link href={route(basePath,'#latest-news')} className="jn-button jn-black">{text(locale,'探索最新新闻','Explore the Latest News')}</Link>}</div>
    {metric.right&&image(metric.right,'right')}
   </Reveal>)}
   <p className="jn-meta">{text(locale,'以上统计为演示内容','Figures are demonstration content.')}</p>
  </div>
 </Reveal>;
}
