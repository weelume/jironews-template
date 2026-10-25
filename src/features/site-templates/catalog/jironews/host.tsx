'use client';
import {createContext,useContext,type ReactNode} from 'react';
import {brand} from './config/brand';
export interface JironewsHost {brandName:{zh:string;en:string};logo:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:{zh:string;en:string};marketplaceAriaLabel?:{zh:string;en:string};filing?:ReactNode}
const Context=createContext<JironewsHost>({brandName:brand.name,logo:brand.logo});
export function JironewsHostProvider({children,...host}:JironewsHost&{children:ReactNode}){return <Context.Provider value={host}>{children}</Context.Provider>}
export const useJironewsHost=()=>useContext(Context);
