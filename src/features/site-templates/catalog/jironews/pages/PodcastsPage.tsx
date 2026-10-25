'use client';
import type {SiteTemplatePageProps} from '../../../types';
import {podcasts} from '../content';
import {Layout,text} from '../components/Layout';
export default function PodcastsPage({locale='zh',basePath}:SiteTemplatePageProps){return <Layout locale={locale} basePath={basePath}><main id="jn-main" className="jn-container jn-inner"><h1 className="jn-page-title">{text(locale,'新闻间播客','The Newsroom Podcast')}</h1><p className="jn-intro">{text(locale,'原站公开预览未提供音频文件，以下节目为展示内容，尚不可播放。','The public reference preview provides no audio files. These are presentation episodes and cannot be played yet.')}</p><div className="jn-card-grid">{podcasts.map(p=><article key={p.id}><img className="jn-article-cover" src={p.image} alt=""/><p className="jn-meta">{p.duration}</p><h2>{p.title[locale]}</h2><p className="jn-notice">{text(locale,'演示节目 · 暂无媒体源','Demo episode · No media source supplied')}</p></article>)}</div></main></Layout>}
