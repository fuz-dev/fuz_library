import{n as w,e as A,c as C,a as D,d as m,q as E,i as h,H as v,I as f,j as H}from"../chunks/scheduler.VeiI8_sV.js";import{S as x,i as q,g as I,e as S,t as u,b as _,c as p,a as j,m as $,d as g}from"../chunks/index.fuk-fqrd.js";import{e as y,u as L,o as M}from"../chunks/each.CsgstJeA.js";import{g as N}from"../chunks/tome.axIBrIr2.js";function k(i,r,n){const e=i.slice();return e[1]=r[n],e}function b(i,r){let n,e,a,l;var c=r[1].component;function o(t,s){return{}}return c&&(e=v(c,o())),{key:i,first:null,c(){n=f(),e&&p(e.$$.fragment),a=f(),this.h()},l(t){n=f(),e&&j(e.$$.fragment,t),a=f(),this.h()},h(){this.first=n},m(t,s){h(t,n,s),e&&$(e,t,s),h(t,a,s),l=!0},p(t,s){if(r=t,s&1&&c!==(c=r[1].component)){if(e){I();const d=e;_(d.$$.fragment,1,0,()=>{g(d,1)}),S()}c?(e=v(c,o()),p(e.$$.fragment),u(e.$$.fragment,1),$(e,a.parentNode,a)):e=null}},i(t){l||(e&&u(e.$$.fragment,t),l=!0)},o(t){e&&_(e.$$.fragment,t),l=!1},d(t){t&&(m(n),m(a)),e&&g(e,t)}}}function P(i){let r,n=[],e=new Map,a,l=y(i[0]);const c=o=>o[1];for(let o=0;o<l.length;o+=1){let t=k(i,l,o),s=c(t);e.set(s,n[o]=b(s,t))}return{c(){r=A("div");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){r=C(o,"DIV",{class:!0});var t=D(r);for(let s=0;s<n.length;s+=1)n[s].l(t);t.forEach(m),this.h()},h(){E(r,"class","tomes svelte-92b2vp")},m(o,t){h(o,r,t);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(r,null);a=!0},p(o,[t]){t&1&&(l=y(o[0]),I(),n=L(n,t,c,1,o,l,e,r,M,b,null,k),S())},i(o){if(!a){for(let t=0;t<l.length;t+=1)u(n[t]);a=!0}},o(o){for(let t=0;t<n.length;t+=1)_(n[t]);a=!1},d(o){o&&m(r);for(let t=0;t<n.length;t+=1)n[t].d()}}}function V(i,r,n){let{tomes:e}=r;return i.$$set=a=>{"tomes"in a&&n(0,e=a.tomes)},[e]}class z extends x{constructor(r){super(),q(this,r,V,P,w,{tomes:0})}}function B(i){let r,n;return r=new z({props:{tomes:Array.from(i[0].values())}}),{c(){p(r.$$.fragment)},l(e){j(r.$$.fragment,e)},m(e,a){$(r,e,a),n=!0},p:H,i(e){n||(u(r.$$.fragment,e),n=!0)},o(e){_(r.$$.fragment,e),n=!1},d(e){g(r,e)}}}function F(i){return[N()]}class Q extends x{constructor(r){super(),q(this,r,F,B,w,{})}}export{Q as component};