import{n as i,t as l,b as m,i as o,d as c,e as p,c as u,p as _,q as d,j as f}from"./scheduler.VeiI8_sV.js";import{S as h,i as $,c as b,a as x,m as g,t as v,b as B,d as C}from"./index.fuk-fqrd.js";import{B as q}from"./Breadcrumb.VQCabXM_.js";function S(r){let t;return{c(){t=l("🔡")},l(a){t=m(a,"🔡")},m(a,e){o(a,t,e)},d(a){a&&c(t)}}}function j(r){let t,a=".";return{c(){t=p("div"),t.textContent=a,this.h()},l(e){t=u(e,"DIV",{slot:!0,"data-svelte-h":!0}),_(t)!=="svelte-1hrc1ki"&&(t.textContent=a),this.h()},h(){d(t,"slot","separator")},m(e,s){o(e,t,s)},p:f,d(e){e&&c(t)}}}function k(r){let t,a;return t=new q({props:{path:"/a/b/c",selected_path:r[0],base_path:"/library/Breadcrumb",$$slots:{separator:[j],default:[S]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,s){g(t,e,s),a=!0},p(e,[s]){const n={};s&1&&(n.selected_path=e[0]),s&2&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){a||(v(t.$$.fragment,e),a=!0)},o(e){B(t.$$.fragment,e),a=!1},d(e){C(t,e)}}}function w(r,t,a){let{selected_path:e}=t;return r.$$set=s=>{"selected_path"in s&&a(0,e=s.selected_path)},[e]}class I extends h{constructor(t){super(),$(this,t,w,k,i,{selected_path:0})}}export{I as B};