'use client';
import Link from 'next/link';
import type {SiteTemplatePageProps} from '../../../types';
import {categories} from '../content';
import {Layout,text,route} from '../components/Layout';
export default function CategoriesPage({locale='zh',basePath}:SiteTemplatePageProps){return <Layout locale={locale} basePath={basePath}><main id="jn-main" className="jn-container jn-inner"><h1 className="jn-page-title">{text(locale,'探索分类','Explore Categories')}</h1><p className="jn-intro">{text(locale,'从生活的细节，到改变世界的创新。','From the details of everyday life to ideas that change the world.')}</p><div className="jn-categories">{categories.map(c=><Link key={c.id} href={route(basePath,'categories/'+c.id)}><img src={c.image} alt=""/>{c.name[locale]}</Link>)}</div></main></Layout>}
