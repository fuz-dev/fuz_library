var B=Object.defineProperty;var R=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(R(t,typeof e!="symbol"?e+"":e,n),n);function G(){}const ft=t=>t;function z(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function _t(){return Object.create(null)}function I(t){t.forEach(F)}function ht(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function mt(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function pt(t,e){return t!=t?e==e:t!==e}function yt(t){return Object.keys(t).length===0}function U(t,...e){if(t==null){for(const i of e)i(void 0);return G}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t,e,n){t.$$.on_destroy.push(U(e,n))}function bt(t,e,n,i){if(t){const s=L(t,e,n,i);return t[0](s)}}function L(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function Et(t,e,n,i,s,r){if(s){const c=L(e,n,i,r);t.p(c,s)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let g=!1;function Tt(){g=!0}function Nt(){g=!1}function W(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:W(1,s,q=>e[n[q]].claim_order,a))-1;i[l]=n[u]+1;const C=u+1;n[C]=l,s=Math.max(C,s)}const r=[],c=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);r.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<r.length&&c[l].claim_order>=r[a].claim_order;)a++;const u=a<r.length?r[a]:null;t.insertBefore(c[l],u)}}function K(t,e){t.appendChild(e)}function Q(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=v("style");return e.textContent="/* empty */",V(Q(t),e),e.sheet}function V(t,e){return K(t.head||t,e),e.sheet}function X(t,e){if(g){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Y(t,e,n){t.insertBefore(e,n||null)}function Z(t,e,n){g&&!n?X(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function kt(){return A(" ")}function Ct(){return A("")}function Dt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const $=["width","height"];function tt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&$.indexOf(i)===-1?t[i]=e[i]:k(t,i,e[i])}function Ht(t,e){for(const n in e)k(t,n,e[n])}function et(t,e){Object.keys(e).forEach(n=>{nt(t,n,e[n])})}function nt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:k(t,e,n)}function Lt(t){return/-/.test(t)?et:tt}function jt(t){return t.dataset.svelteH}function Mt(t){return Array.from(t.childNodes)}function M(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,s=!1){M(t);const r=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function S(t,e,n,i){return P(t,s=>s.nodeName===e,s=>{const r=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||r.push(o.name)}r.forEach(c=>s.removeAttribute(c))},()=>i(e))}function Pt(t,e,n){return S(t,e,n,v)}function St(t,e,n){return S(t,e,n,j)}function it(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function Ot(t){return it(t," ")}function D(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function qt(t,e){const n=D(t,"HTML_TAG_START",0),i=D(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);M(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const r=s.slice(1,s.length-1);if(r.length===0)return new b(e);for(const c of r)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,r)}function Bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Rt(t,e){t.value=e??""}function Gt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function zt(t,e,n){t.classList.toggle(e,!!n)}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ft(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const r=s.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(s)):r===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ct{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=j(n.nodeName):this.e=v(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Y(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class b extends ct{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Z(this.t,this.n[i],n)}}function It(t,e){return new t(e)}let y;function x(t){y=t}function d(){if(!y)throw new Error("Function called outside component initialization");return y}function Ut(t){d().$$.on_mount.push(t)}function Wt(t){d().$$.after_update.push(t)}function Jt(t){d().$$.on_destroy.push(t)}function Kt(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=st(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,r)}),!r.defaultPrevented}return!0}}function Qt(t,e){return d().$$.context.set(t,e),e}function Vt(t){return d().$$.context.get(t)}function Xt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],H=[];let h=[];const T=[],O=Promise.resolve();let N=!1;function lt(){N||(N=!0,O.then(ot))}function Yt(){return lt(),O}function rt(t){h.push(t)}function Zt(t){T.push(t)}const E=new Set;let _=0;function ot(){if(_!==0)return;const t=y;do{try{for(;_<m.length;){const e=m[_];_++,x(e),at(e.$$)}}catch(e){throw m.length=0,_=0,e}for(x(null),m.length=0,_=0;H.length;)H.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];E.has(n)||(E.add(n),n())}h.length=0}while(m.length);for(;T.length;)T.pop()();N=!1,E.clear(),x(t)}function at(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}function $t(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{m as $,z as A,tt as B,Vt as C,Qt as D,j as E,St as F,Ht as G,It as H,Ct as I,Dt as J,Wt as K,Ut as L,Yt as M,H as N,rt as O,Q as P,vt as Q,ht as R,st as S,ft as T,_t as U,ot as V,yt as W,$t as X,y as Y,x as Z,F as _,Mt as a,lt as a0,Tt as a1,Nt as a2,Ft as a3,b as a4,qt as a5,U as a6,Xt as a7,Lt as a8,Kt as a9,Zt as aa,Rt as ab,Jt as ac,it as b,Pt as c,w as d,v as e,Ot as f,X as g,Bt as h,Z as i,G as j,gt as k,bt as l,wt as m,pt as n,xt as o,jt as p,k as q,I as r,kt as s,A as t,Et as u,dt as v,mt as w,Gt as x,zt as y,At as z};
