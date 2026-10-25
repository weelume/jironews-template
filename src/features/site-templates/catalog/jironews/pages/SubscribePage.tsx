'use client';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout,Newsletter,text} from '../components/Layout';
export default function SubscribePage({locale='zh',basePath}:SiteTemplatePageProps){return <Layout locale={locale} basePath={basePath}><main id="jn-main" className="jn-container jn-inner"><h1 className="jn-page-title">{text(locale,'保持关注 先行一步','Stay Updated. Stay Ahead.')}</h1><p className="jn-intro">{text(locale,'每周精选，让重要的故事与你相遇。此模板仅提供本地邮箱格式校验，不创建订阅，不发送邮件，也不收取费用。','A weekly selection of stories worth your attention. This template only validates email format locally. It does not create subscriptions, send messages or charge fees.')}</p><div className="jn-newsletter-band"><Newsletter locale={locale}/></div></main></Layout>}
