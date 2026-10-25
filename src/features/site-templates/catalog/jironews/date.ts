import type {TemplateLocale} from '../../types';
export function dateText(value:string,locale:TemplateLocale){const date=new Date(value);if(Number.isNaN(date.valueOf()))throw new Error('Invalid editorial date: '+value);return new Intl.DateTimeFormat(locale==='zh'?'zh-CN':'en-US',{year:'numeric',month:'short',day:'numeric',timeZone:'UTC'}).format(date)}
