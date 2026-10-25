'use client';
import {dateText} from '../date';
import Link from 'next/link';
import type {SiteTemplatePageProps} from '../../../types';
import {articles,categories} from '../content';
import {Layout,text,route} from '../components/Layout';
import {ArticleCard} from '../components/ArticleCard';
export default function ArticlePage({articleId,locale='zh',basePath}:SiteTemplatePageProps&{articleId:string}){const article=articles.find(a=>a.id===articleId);if(!article)throw new Error('Unknown article: '+articleId);const category=categories.find(c=>c.id===article.category);return <Layout locale={locale} basePath={basePath}><main id="jn-main" className="jn-container jn-inner"><article className="jn-prose"><Link href={route(basePath,'articles')}>{text(locale,'全部文章','All articles')}</Link><p className="jn-meta">{category?.name[locale]} • {dateText(article.date,locale)}</p><h1 className="jn-page-title">{article.title[locale]}</h1><p className="jn-notice">{text(locale,'示例报道 · 约 4 分钟阅读 · 仅展示模板阅读体验','Sample editorial · 4 min read · Demonstration content')}</p><img className="jn-article-cover" src={article.image} alt={article.title[locale]}/>{article.body[locale].map((p,i)=><p key={i}>{p}</p>)}</article><div className="jn-section-heading jn-section"><h2>{text(locale,'继续阅读','Continue reading')}</h2></div><div className="jn-card-grid">{articles.filter(a=>a.id!==articleId).slice(0,3).map(a=><ArticleCard key={a.id} article={a} locale={locale} basePath={basePath}/>)}</div></main></Layout>}
