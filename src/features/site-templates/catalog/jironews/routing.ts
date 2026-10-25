export function localizedHref(pathname:string,basePath:string,locale:'zh'|'en',suffix=''):string{
 const target=locale==='zh'?`${basePath}/en${pathname.slice(basePath.length)}`:`${basePath.replace(/\/en$/,'')}${pathname.slice(basePath.length)}`;
 return (target||'/')+suffix;
}
