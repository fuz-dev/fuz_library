import{n as _,l as p,u as $,m as g,o as k}from"./scheduler.7d6696d3.js";import{S as d,i as b,c as u,a as c,m,t as l,b as f,d as i}from"./index.72a405f9.js";import{L as y}from"./Library_Panel.ef2a2ce8.js";import{P as h}from"./Package_Summary.c2119064.js";function L(s){let e,r;return e=new h({props:{pkg:s[0]}}),{c(){u(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){m(e,t,a),r=!0},p(t,a){const n={};a&1&&(n.pkg=t[0]),e.$set(n)},i(t){r||(l(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){i(e,t)}}}function P(s){let e;const r=s[1].default,t=p(r,s,s[2],null),a=t||L(s);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,o){a&&a.m(n,o),e=!0},p(n,o){t?t.p&&(!e||o&4)&&$(t,r,n,n[2],e?k(r,n[2],o,null):g(n[2]),null):a&&a.p&&(!e||o&1)&&a.p(n,e?o:-1)},i(n){e||(l(a,n),e=!0)},o(n){f(a,n),e=!1},d(n){a&&a.d(n)}}}function S(s){let e,r;return e=new y({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){u(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){m(e,t,a),r=!0},p(t,[a]){const n={};a&5&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(l(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){i(e,t)}}}function w(s,e,r){let{$$slots:t={},$$scope:a}=e,{pkg:n}=e;return s.$$set=o=>{"pkg"in o&&r(0,n=o.pkg),"$$scope"in o&&r(2,a=o.$$scope)},[n,t,a]}class v extends d{constructor(e){super(),b(this,e,w,S,_,{pkg:0})}}export{v as L};
