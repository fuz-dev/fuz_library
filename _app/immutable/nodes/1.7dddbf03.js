import{n as x,e as u,t as h,s as S,c as d,a as v,b as g,d as m,f as j,i as _,g as b,h as E,j as $,k}from"../chunks/scheduler.7d6696d3.js";import{S as q,i as y}from"../chunks/index.72a405f9.js";import{p as C}from"../chunks/stores.792f7d6b.js";function H(i){var f;let t,s=i[0].status+"",r,o,n,p=((f=i[0].error)==null?void 0:f.message)+"",c;return{c(){t=u("h1"),r=h(s),o=S(),n=u("p"),c=h(p)},l(e){t=d(e,"H1",{});var a=v(t);r=g(a,s),a.forEach(m),o=j(e),n=d(e,"P",{});var l=v(n);c=g(l,p),l.forEach(m)},m(e,a){_(e,t,a),b(t,r),_(e,o,a),_(e,n,a),b(n,c)},p(e,[a]){var l;a&1&&s!==(s=e[0].status+"")&&E(r,s),a&1&&p!==(p=((l=e[0].error)==null?void 0:l.message)+"")&&E(c,p)},i:$,o:$,d(e){e&&(m(t),m(o),m(n))}}}function P(i,t,s){let r;return k(i,C,o=>s(0,r=o)),[r]}class B extends q{constructor(t){super(),y(this,t,P,H,x,{})}}export{B as component};
