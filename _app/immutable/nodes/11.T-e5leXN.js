import{n as we,I as ke,i as m,d,k as Be,l as Ie,A as Le,e as $,s as C,c as v,a as O,f as h,q as z,a8 as qe,y as S,g,u as Ee,m as De,o as Ve,t as Ae,b as Fe,h as Me,p as q,j as B}from"../chunks/scheduler.VeiI8_sV.js";import{S as Re,i as xe,t as _,b as p,g as Ne,e as Te,c as E,a as D,m as V,d as k}from"../chunks/index.fuk-fqrd.js";import{b as ce}from"../chunks/singletons.6Uk6UavE.js";import{T as Pe,C as x}from"../chunks/Tome_Detail.OxPqwXG4.js";import{a as Ue}from"../chunks/tome.axIBrIr2.js";import{g as Ye}from"../chunks/spread.AQEXjpNi.js";import{p as Ge}from"../chunks/stores.Q2ocatEm.js";const He=i=>({}),je=i=>({}),Je=i=>({}),Se=i=>({});function Oe(i){let e,s;const l=i[15].icon,n=Ie(l,i,i[14],Se),a=n||Ke(i);return{c(){e=$("div"),a&&a.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var o=O(e);a&&a.l(o),o.forEach(d),this.h()},h(){z(e,"class","icon svelte-515js9")},m(t,o){m(t,e,o),a&&a.m(e,null),s=!0},p(t,o){n?n.p&&(!s||o&16384)&&Ee(n,l,t,t[14],s?Ve(l,t[14],o,Je):De(t[14]),Se):a&&a.p&&(!s||o&8)&&a.p(t,s?o:-1)},i(t){s||(_(a,t),s=!0)},o(t){p(a,t),s=!1},d(t){t&&d(e),a&&a.d(t)}}}function Ke(i){let e;return{c(){e=Ae(i[3])},l(s){e=Fe(s,i[3])},m(s,l){m(s,e,l)},p(s,l){l&8&&Me(e,s[3])},d(s){s&&d(e)}}}function ze(i){let e,s;const l=i[15].icon,n=Ie(l,i,i[14],je),a=n||Qe(i);return{c(){e=$("div"),a&&a.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var o=O(e);a&&a.l(o),o.forEach(d),this.h()},h(){z(e,"class","icon svelte-515js9")},m(t,o){m(t,e,o),a&&a.m(e,null),s=!0},p(t,o){n?n.p&&(!s||o&16384)&&Ee(n,l,t,t[14],s?Ve(l,t[14],o,He):De(t[14]),je):a&&a.p&&(!s||o&8)&&a.p(t,s?o:-1)},i(t){s||(_(a,t),s=!0)},o(t){p(a,t),s=!1},d(t){t&&d(e),a&&a.d(t)}}}function Qe(i){let e;return{c(){e=Ae(i[3])},l(s){e=Fe(s,i[3])},m(s,l){m(s,e,l)},p(s,l){l&8&&Me(e,s[3])},d(s){s&&d(e)}}}function be(i){let e,s,l,n,a,t=(i[0]==="left"||i[0]==="above")&&Oe(i);const o=i[15].default,I=Ie(o,i,i[14],null);let u=(i[0]==="right"||i[0]==="below")&&ze(i),T=[{class:"card"},i[1],i[8]],A={};for(let f=0;f<T.length;f+=1)A=Le(A,T[f]);return{c(){e=$(i[9]),t&&t.c(),s=C(),l=$("div"),I&&I.c(),n=C(),u&&u.c(),this.h()},l(f){e=v(f,(i[9]||"null").toUpperCase(),{class:!0});var b=O(e);t&&t.l(b),s=h(b),l=v(b,"DIV",{class:!0});var j=O(l);I&&I.l(j),j.forEach(d),n=h(b),u&&u.l(b),b.forEach(d),this.h()},h(){z(l,"class","content svelte-515js9"),qe(i[9])(e,A),S(e,"link",i[2]),S(e,"selected",i[10]),S(e,"left",i[7]),S(e,"right",i[6]),S(e,"above",i[5]),S(e,"below",i[4]),S(e,"svelte-515js9",!0)},m(f,b){m(f,e,b),t&&t.m(e,null),g(e,s),g(e,l),I&&I.m(l,null),g(e,n),u&&u.m(e,null),a=!0},p(f,b){f[0]==="left"||f[0]==="above"?t?(t.p(f,b),b&1&&_(t,1)):(t=Oe(f),t.c(),_(t,1),t.m(e,s)):t&&(Ne(),p(t,1,1,()=>{t=null}),Te()),I&&I.p&&(!a||b&16384)&&Ee(I,o,f,f[14],a?Ve(o,f[14],b,null):De(f[14]),null),f[0]==="right"||f[0]==="below"?u?(u.p(f,b),b&1&&_(u,1)):(u=ze(f),u.c(),_(u,1),u.m(e,null)):u&&(Ne(),p(u,1,1,()=>{u=null}),Te()),qe(f[9])(e,A=Ye(T,[{class:"card"},b&2&&f[1],b&256&&f[8]])),S(e,"link",f[2]),S(e,"selected",f[10]),S(e,"left",f[7]),S(e,"right",f[6]),S(e,"above",f[5]),S(e,"below",f[4]),S(e,"svelte-515js9",!0)},i(f){a||(_(t),_(I,f),_(u),a=!0)},o(f){p(t),p(I,f),p(u),a=!1},d(f){f&&d(e),t&&t.d(),I&&I.d(f),u&&u.d()}}}function We(i){let e=i[9],s,l,n=i[9]&&be(i);return{c(){n&&n.c(),s=ke()},l(a){n&&n.l(a),s=ke()},m(a,t){n&&n.m(a,t),m(a,s,t),l=!0},p(a,[t]){a[9]?e?we(e,a[9])?(n.d(1),n=be(a),e=a[9],n.c(),n.m(s.parentNode,s)):n.p(a,t):(n=be(a),e=a[9],n.c(),n.m(s.parentNode,s)):e&&(n.d(1),n=null,e=a[9])},i(a){l||(_(n,a),l=!0)},o(a){p(n,a),l=!1},d(a){a&&d(s),n&&n.d(a)}}}function Xe(i,e,s){let l,n,a,t,o,I,u,T,A,f;Be(i,Ge,w=>s(13,f=w));let{$$slots:b={},$$scope:j}=e,{tag:F=void 0}=e,{href:M=void 0}=e,{align:N="left"}=e,{attrs:fe=void 0}=e;return i.$$set=w=>{"tag"in w&&s(11,F=w.tag),"href"in w&&s(12,M=w.href),"align"in w&&s(0,N=w.align),"attrs"in w&&s(1,fe=w.attrs),"$$scope"in w&&s(14,j=w.$$scope)},i.$$.update=()=>{i.$$.dirty&4096&&s(2,l=!!M),i.$$.dirty&12292&&s(10,n=l&&f.url.pathname===M),i.$$.dirty&2052&&s(9,a=F||(l?"a":"div")),i.$$.dirty&4100&&s(8,t=l?{href:M}:void 0),i.$$.dirty&1&&s(7,o=N==="left"),i.$$.dirty&1&&s(6,I=N==="right"),i.$$.dirty&1&&s(5,u=N==="above"),i.$$.dirty&1&&s(4,T=N==="below"),i.$$.dirty&4&&s(3,A=l?"🔗":"🪧")},[N,fe,l,A,T,u,I,o,t,a,n,F,M,f,j,b]}class W extends Re{constructor(e){super(),xe(this,e,Xe,We,we,{tag:11,href:12,align:0,attrs:1})}}function Ze(i){let e,s="just",l,n,a="a card";return{c(){e=$("div"),e.textContent=s,l=C(),n=$("div"),n.textContent=a},l(t){e=v(t,"DIV",{"data-svelte-h":!0}),q(e)!=="svelte-1wwxlfu"&&(e.textContent=s),l=h(t),n=v(t,"DIV",{"data-svelte-h":!0}),q(n)!=="svelte-1hs3asp"&&(n.textContent=a)},m(t,o){m(t,e,o),m(t,l,o),m(t,n,o)},p:B,d(t){t&&(d(e),d(l),d(n))}}}function ye(i){let e,s="a",l,n,a="link";return{c(){e=$("div"),e.textContent=s,l=C(),n=$("div"),n.textContent=a},l(t){e=v(t,"DIV",{"data-svelte-h":!0}),q(e)!=="svelte-1fsn4ep"&&(e.textContent=s),l=h(t),n=v(t,"DIV",{"data-svelte-h":!0}),q(n)!=="svelte-w75lo8"&&(n.textContent=a)},m(t,o){m(t,e,o),m(t,l,o),m(t,n,o)},p:B,d(t){t&&(d(e),d(l),d(n))}}}function et(i){let e,s="custom",l,n,a="icon";return{c(){e=$("div"),e.textContent=s,l=C(),n=$("div"),n.textContent=a},l(t){e=v(t,"DIV",{"data-svelte-h":!0}),q(e)!=="svelte-vmmvvx"&&(e.textContent=s),l=h(t),n=v(t,"DIV",{"data-svelte-h":!0}),q(n)!=="svelte-1cibtwz"&&(n.textContent=a)},m(t,o){m(t,e,o),m(t,l,o),m(t,n,o)},p:B,d(t){t&&(d(e),d(l),d(n))}}}function tt(i){let e,s="📖";return{c(){e=$("div"),e.textContent=s,this.h()},l(l){e=v(l,"DIV",{slot:!0,"data-svelte-h":!0}),q(e)!=="svelte-9ojz2d"&&(e.textContent=s),this.h()},h(){z(e,"slot","icon")},m(l,n){m(l,e,n)},p:B,d(l){l&&d(e)}}}function nt(i){let e,s="custom",l,n,a="tag";return{c(){e=$("div"),e.textContent=s,l=C(),n=$("div"),n.textContent=a},l(t){e=v(t,"DIV",{"data-svelte-h":!0}),q(e)!=="svelte-vmmvvx"&&(e.textContent=s),l=h(t),n=v(t,"DIV",{"data-svelte-h":!0}),q(n)!=="svelte-1oncg6y"&&(n.textContent=a)},m(t,o){m(t,e,o),m(t,l,o),m(t,n,o)},p:B,d(t){t&&(d(e),d(l),d(n))}}}function st(i){let e,s="href is",l,n,a="selected";return{c(){e=$("div"),e.textContent=s,l=C(),n=$("div"),n.textContent=a},l(t){e=v(t,"DIV",{"data-svelte-h":!0}),q(e)!=="svelte-18p4e9p"&&(e.textContent=s),l=h(t),n=v(t,"DIV",{"data-svelte-h":!0}),q(n)!=="svelte-6p7kcz"&&(n.textContent=a)},m(t,o){m(t,e,o),m(t,l,o),m(t,n,o)},p:B,d(t){t&&(d(e),d(l),d(n))}}}function lt(i){let e,s="align",l,n,a="icon right";return{c(){e=$("div"),e.textContent=s,l=C(),n=$("div"),n.textContent=a},l(t){e=v(t,"DIV",{"data-svelte-h":!0}),q(e)!=="svelte-enennf"&&(e.textContent=s),l=h(t),n=v(t,"DIV",{"data-svelte-h":!0}),q(n)!=="svelte-18gjpl"&&(n.textContent=a)},m(t,o){m(t,e,o),m(t,l,o),m(t,n,o)},p:B,d(t){t&&(d(e),d(l),d(n))}}}function at(i){let e,s="align",l,n,a="icon above";return{c(){e=$("div"),e.textContent=s,l=C(),n=$("div"),n.textContent=a},l(t){e=v(t,"DIV",{"data-svelte-h":!0}),q(e)!=="svelte-enennf"&&(e.textContent=s),l=h(t),n=v(t,"DIV",{"data-svelte-h":!0}),q(n)!=="svelte-1c94rqw"&&(n.textContent=a)},m(t,o){m(t,e,o),m(t,l,o),m(t,n,o)},p:B,d(t){t&&(d(e),d(l),d(n))}}}function it(i){let e,s="align",l,n,a="icon below";return{c(){e=$("div"),e.textContent=s,l=C(),n=$("div"),n.textContent=a},l(t){e=v(t,"DIV",{"data-svelte-h":!0}),q(e)!=="svelte-enennf"&&(e.textContent=s),l=h(t),n=v(t,"DIV",{"data-svelte-h":!0}),q(n)!=="svelte-12w8wi4"&&(n.textContent=a)},m(t,o){m(t,e,o),m(t,l,o),m(t,n,o)},p:B,d(t){t&&(d(e),d(l),d(n))}}}function ot(i){let e,s,l,n,a,t,o,I,u,T,A,f,b,j,F,M,N,fe,w,X,ue,L,me,P,Z,$e,U,ve,Y,y,_e,G,ge,H,ee,pe,J,Ce,K,te,he,Q,de;return l=new x({props:{content:`import Card from
	'@fuz.dev/fuz_library/Card.svelte';`,lang:"ts"}}),a=new x({props:{content:`<Card>
  <div>just</div>
  <div>a card</div>
</Card>`}}),o=new W({props:{$$slots:{default:[Ze]},$$scope:{ctx:i}}}),T=new x({props:{content:`<Card href="${ce}/">
  <div>a</div>
  <div>link</div>
</Card>`}}),f=new W({props:{href:ce+"/",$$slots:{default:[ye]},$$scope:{ctx:i}}}),F=new x({props:{content:`<Card>
  <div>custom</div>
  <div>icon</div>
  <div slot="icon">📖</div>
</Card>`}}),N=new W({props:{$$slots:{icon:[tt],default:[et]},$$scope:{ctx:i}}}),X=new x({props:{content:`<Card tag="button">
  <div>custom</div>
  <div>tag</div>
</Card>`}}),L=new W({props:{tag:"button",$$slots:{default:[nt]},$$scope:{ctx:i}}}),Z=new x({props:{content:`<Card href="${ce}/library/Card">
  <div>href is</div>
  <div>selected</div>
</Card>`}}),U=new W({props:{href:i[1]+"/Card",$$slots:{default:[st]},$$scope:{ctx:i}}}),y=new x({props:{content:`<Card align="right">
  <div>align</div>
  <div>icon right</div>
</Card>`}}),G=new W({props:{align:"right",$$slots:{default:[lt]},$$scope:{ctx:i}}}),ee=new x({props:{content:`<Card align="above">
  <div>align</div>
  <div>icon above</div>
</Card>`}}),J=new W({props:{align:"above",$$slots:{default:[at]},$$scope:{ctx:i}}}),te=new x({props:{content:`<Card align="below">
  <div>align</div>
  <div>icon below</div>
</Card>`}}),Q=new W({props:{align:"below",$$slots:{default:[it]},$$scope:{ctx:i}}}),{c(){e=$("div"),s=$("section"),E(l.$$.fragment),n=C(),E(a.$$.fragment),t=C(),E(o.$$.fragment),I=C(),u=$("section"),E(T.$$.fragment),A=C(),E(f.$$.fragment),b=C(),j=$("section"),E(F.$$.fragment),M=C(),E(N.$$.fragment),fe=C(),w=$("section"),E(X.$$.fragment),ue=C(),E(L.$$.fragment),me=C(),P=$("section"),E(Z.$$.fragment),$e=C(),E(U.$$.fragment),ve=C(),Y=$("section"),E(y.$$.fragment),_e=C(),E(G.$$.fragment),ge=C(),H=$("section"),E(ee.$$.fragment),pe=C(),E(J.$$.fragment),Ce=C(),K=$("section"),E(te.$$.fragment),he=C(),E(Q.$$.fragment),this.h()},l(r){e=v(r,"DIV",{class:!0});var c=O(e);s=v(c,"SECTION",{class:!0});var R=O(s);D(l.$$.fragment,R),n=h(R),D(a.$$.fragment,R),t=h(R),D(o.$$.fragment,R),R.forEach(d),I=h(c),u=v(c,"SECTION",{class:!0});var ne=O(u);D(T.$$.fragment,ne),A=h(ne),D(f.$$.fragment,ne),ne.forEach(d),b=h(c),j=v(c,"SECTION",{class:!0});var se=O(j);D(F.$$.fragment,se),M=h(se),D(N.$$.fragment,se),se.forEach(d),fe=h(c),w=v(c,"SECTION",{class:!0});var le=O(w);D(X.$$.fragment,le),ue=h(le),D(L.$$.fragment,le),le.forEach(d),me=h(c),P=v(c,"SECTION",{class:!0});var ae=O(P);D(Z.$$.fragment,ae),$e=h(ae),D(U.$$.fragment,ae),ae.forEach(d),ve=h(c),Y=v(c,"SECTION",{class:!0});var ie=O(Y);D(y.$$.fragment,ie),_e=h(ie),D(G.$$.fragment,ie),ie.forEach(d),ge=h(c),H=v(c,"SECTION",{class:!0});var oe=O(H);D(ee.$$.fragment,oe),pe=h(oe),D(J.$$.fragment,oe),oe.forEach(d),Ce=h(c),K=v(c,"SECTION",{class:!0});var re=O(K);D(te.$$.fragment,re),he=h(re),D(Q.$$.fragment,re),re.forEach(d),c.forEach(d),this.h()},h(){z(s,"class","svelte-1mxq4n8"),z(u,"class","svelte-1mxq4n8"),z(j,"class","svelte-1mxq4n8"),z(w,"class","svelte-1mxq4n8"),z(P,"class","svelte-1mxq4n8"),z(Y,"class","svelte-1mxq4n8"),z(H,"class","svelte-1mxq4n8"),z(K,"class","svelte-1mxq4n8"),z(e,"class","prose box")},m(r,c){m(r,e,c),g(e,s),V(l,s,null),g(s,n),V(a,s,null),g(s,t),V(o,s,null),g(e,I),g(e,u),V(T,u,null),g(u,A),V(f,u,null),g(e,b),g(e,j),V(F,j,null),g(j,M),V(N,j,null),g(e,fe),g(e,w),V(X,w,null),g(w,ue),V(L,w,null),g(e,me),g(e,P),V(Z,P,null),g(P,$e),V(U,P,null),g(e,ve),g(e,Y),V(y,Y,null),g(Y,_e),V(G,Y,null),g(e,ge),g(e,H),V(ee,H,null),g(H,pe),V(J,H,null),g(e,Ce),g(e,K),V(te,K,null),g(K,he),V(Q,K,null),de=!0},p(r,c){const R={};c&4&&(R.$$scope={dirty:c,ctx:r}),o.$set(R);const ne={};c&4&&(ne.$$scope={dirty:c,ctx:r}),f.$set(ne);const se={};c&4&&(se.$$scope={dirty:c,ctx:r}),N.$set(se);const le={};c&4&&(le.$$scope={dirty:c,ctx:r}),L.$set(le);const ae={};c&4&&(ae.$$scope={dirty:c,ctx:r}),U.$set(ae);const ie={};c&4&&(ie.$$scope={dirty:c,ctx:r}),G.$set(ie);const oe={};c&4&&(oe.$$scope={dirty:c,ctx:r}),J.$set(oe);const re={};c&4&&(re.$$scope={dirty:c,ctx:r}),Q.$set(re)},i(r){de||(_(l.$$.fragment,r),_(a.$$.fragment,r),_(o.$$.fragment,r),_(T.$$.fragment,r),_(f.$$.fragment,r),_(F.$$.fragment,r),_(N.$$.fragment,r),_(X.$$.fragment,r),_(L.$$.fragment,r),_(Z.$$.fragment,r),_(U.$$.fragment,r),_(y.$$.fragment,r),_(G.$$.fragment,r),_(ee.$$.fragment,r),_(J.$$.fragment,r),_(te.$$.fragment,r),_(Q.$$.fragment,r),de=!0)},o(r){p(l.$$.fragment,r),p(a.$$.fragment,r),p(o.$$.fragment,r),p(T.$$.fragment,r),p(f.$$.fragment,r),p(F.$$.fragment,r),p(N.$$.fragment,r),p(X.$$.fragment,r),p(L.$$.fragment,r),p(Z.$$.fragment,r),p(U.$$.fragment,r),p(y.$$.fragment,r),p(G.$$.fragment,r),p(ee.$$.fragment,r),p(J.$$.fragment,r),p(te.$$.fragment,r),p(Q.$$.fragment,r),de=!1},d(r){r&&d(e),k(l),k(a),k(o),k(T),k(f),k(F),k(N),k(X),k(L),k(Z),k(U),k(y),k(G),k(ee),k(J),k(te),k(Q)}}}function rt(i){let e,s;return e=new Pe({props:{tome:i[0],$$slots:{default:[ot]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,n){V(e,l,n),s=!0},p(l,[n]){const a={};n&4&&(a.$$scope={dirty:n,ctx:l}),e.$set(a)},i(l){s||(_(e.$$.fragment,l),s=!0)},o(l){p(e.$$.fragment,l),s=!1},d(l){k(e,l)}}}const ft="Card";function dt(i){const e=Ue(ft),s=`${ce}/library`;return[e,s]}class pt extends Re{constructor(e){super(),xe(this,e,dt,rt,we,{})}}export{pt as component};