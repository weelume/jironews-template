'use client';
import {dateText} from '../date';
import Link from 'next/link';
import {motion,useReducedMotion} from 'framer-motion';
import {categories,type Article} from '../content';
import type {TemplateLocale} from '../../../types';
import {route} from './Layout';
import {ease} from './Motion';
export function ArticleCard({article,locale,basePath,compact=false}:{article:Article;locale:TemplateLocale;basePath:string;compact?:boolean}){const reduced=useReducedMotion();const category=categories.find(c=>c.id===article.category);return <motion.article className={`jn-card ${compact?'jn-card-compact':''}`} variants={{hidden:{opacity:0,y:30,scale:.96},visible:{opacity:1,y:0,scale:1,transition:{duration:.65,ease}}}} whileHover={reduced?undefined:{y:-4}}><Link href={route(basePath,'articles/'+article.id)}><div className="jn-card-image"><img src={article.image} alt={article.title[locale]} loading="lazy"/></div><div><p className="jn-meta">{category?.name[locale]} <span>• {dateText(article.date,locale)}</span></p><h3>{article.title[locale]}</h3></div></Link></motion.article>}
