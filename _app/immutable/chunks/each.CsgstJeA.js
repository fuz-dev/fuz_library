import{b as j,t as q}from"./index.fuk-fqrd.js";import{r as z}from"./scheduler.VeiI8_sV.js";function D(t){return t?.length!==void 0?t:Array.from(t)}function E(t,c){t.d(1),c.delete(t.key)}function F(t,c){j(t,1,1,()=>{c.delete(t.key)})}function G(t,c,M,v,S,y,d,x,m,A,h,b){let i=t.length,a=y.length,o=i;const r={};for(;o--;)r[t[o].key]=o;const f=[],w=new Map,u=new Map,g=[];for(o=a;o--;){const e=b(S,y,o),n=M(e);let s=d.get(n);s?v&&g.push(()=>s.p(e,c)):(s=A(n,e),s.c()),w.set(n,f[o]=s),n in r&&u.set(n,Math.abs(o-r[n]))}const p=new Set,k=new Set;function _(e){q(e,1),e.m(x,h),d.set(e.key,e),h=e.first,a--}for(;i&&a;){const e=f[a-1],n=t[i-1],s=e.key,l=n.key;e===n?(h=e.first,i--,a--):w.has(l)?!d.has(s)||p.has(s)?_(e):k.has(l)?i--:u.get(s)>u.get(l)?(k.add(s),_(e)):(p.add(l),i--):(m(n,d),i--)}for(;i--;){const e=t[i];w.has(e.key)||m(e,d)}for(;a;)_(f[a-1]);return z(g),f}export{E as d,D as e,F as o,G as u};
