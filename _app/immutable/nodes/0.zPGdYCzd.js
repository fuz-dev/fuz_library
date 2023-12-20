import{D as V,n as W,l as X,I as f,s as p,a3 as Z,d as c,f as y,g as U,i as d,u as $,m as ee,o as te,a4 as ae,a5 as ne,e as H,c as R,a as se,q as u,j as B,a6 as D}from"../chunks/scheduler.VeiI8_sV.js";import{S as le,i as re,t as A,b as N,c as oe,a as ce,m as de,d as ge}from"../chunks/index.fuk-fqrd.js";import{w as F}from"../chunks/index.PtFdhN8o.js";const ue=!0,fe=!1,Be=Object.freeze(Object.defineProperty({__proto__:null,prerender:ue,ssr:fe},Symbol.toStringTag,{value:"Module"})),ve=[{name:"hue_1",light:"210",summary:"blue"},{name:"color_1",light:"hsl(var(--hue_1), 55%, 50%)",dark:"hsl(var(--hue_1), 55%, 75%)"},{name:"hue_2",light:"120",summary:"green, triad with `--color_3` and `--color_4`"},{name:"color_2",light:"hsl(var(--hue_2), 55%, 32%)",dark:"hsl(var(--hue_2), 45%, 70%)",summary:"same as THEME_COLOR"},{name:"hue_3",light:"251",summary:"purple, triad with `--color_2` and `--color_4`"},{name:"color_3",light:"hsl(var(--hue_3), 50%, 50%)",dark:"hsl(var(--hue_3), 50%, 75%)"},{name:"hue_4",light:"26",summary:"orange, triad with `--color_2` and `--color_3`"},{name:"color_4",light:"hsl(var(--hue_4), 55%, 50%)",dark:"hsl(var(--hue_4), 65%, 75%)"},{name:"hue_5",light:"0",summary:"red"},{name:"color_5",light:"hsl(var(--hue_5), 50%, 50%)",dark:"hsl(var(--hue_5), 50%, 65%)"},{name:"hue_6",light:"32",summary:"brown"},{name:"color_6",light:"hsl(var(--hue_6), 97%, 22%)",dark:"hsl(var(--hue_6), 32%, 75%)"},{name:"hue_7",light:"335",summary:"pink"},{name:"color_7",light:"hsl(var(--hue_7), 74%, 56%)",dark:"hsl(var(--hue_7), 74%, 76%)"},{name:"darken_1",light:"#0000000f",summary:"6%"},{name:"darken_2",light:"#0000001f",summary:"12%"},{name:"darken_3",light:"#00000036",summary:"21%"},{name:"darken_4",light:"#00000052",summary:"32%"},{name:"darken_5",light:"#00000073",summary:"45%"},{name:"darken_6",light:"#000000a6",summary:"65%"},{name:"darken_7",light:"#000000cc",summary:"80%"},{name:"darken_8",light:"#000000e3",summary:"89%"},{name:"darken_9",light:"#000000f5",summary:"96%"},{name:"lighten_1",light:"#ffffff0f",summary:"6%"},{name:"lighten_2",light:"#ffffff1f",summary:"12%"},{name:"lighten_3",light:"#ffffff36",summary:"21%"},{name:"lighten_4",light:"#ffffff52",summary:"32%"},{name:"lighten_5",light:"#ffffff73",summary:"45%"},{name:"lighten_6",light:"#ffffffa6",summary:"65%"},{name:"lighten_7",light:"#ffffffcc",summary:"80%"},{name:"lighten_8",light:"#ffffffe3",summary:"89%"},{name:"lighten_9",light:"#fffffff5",summary:"96%"},{name:"tint_hue",light:"var(--hue_4)"},{name:"tint_saturation",light:"11%"},{name:"bg",light:"hsl(var(--tint_hue), var(--tint_saturation), 96%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 7%)"},{name:"fg",light:"hsl(var(--tint_hue), var(--tint_saturation), 7%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 96%)"},{name:"bg_1",light:"var(--lighten_1)",dark:"var(--darken_1)"},{name:"bg_2",light:"var(--lighten_2)",dark:"var(--darken_2)"},{name:"bg_3",light:"var(--lighten_3)",dark:"var(--darken_3)"},{name:"bg_4",light:"var(--lighten_4)",dark:"var(--darken_4)"},{name:"bg_5",light:"var(--lighten_5)",dark:"var(--darken_5)"},{name:"bg_6",light:"var(--lighten_6)",dark:"var(--darken_6)"},{name:"bg_7",light:"var(--lighten_7)",dark:"var(--darken_7)"},{name:"bg_8",light:"var(--lighten_8)",dark:"var(--darken_8)"},{name:"bg_9",light:"var(--lighten_9)",dark:"var(--darken_9)"},{name:"fg_1",light:"var(--darken_1)",dark:"var(--lighten_1)"},{name:"fg_2",light:"var(--darken_2)",dark:"var(--lighten_2)"},{name:"fg_3",light:"var(--darken_3)",dark:"var(--lighten_3)"},{name:"fg_4",light:"var(--darken_4)",dark:"var(--lighten_4)"},{name:"fg_5",light:"var(--darken_5)",dark:"var(--lighten_5)"},{name:"fg_6",light:"var(--darken_6)",dark:"var(--lighten_6)"},{name:"fg_7",light:"var(--darken_7)",dark:"var(--lighten_7)"},{name:"fg_8",light:"var(--darken_8)",dark:"var(--lighten_8)"},{name:"fg_9",light:"var(--darken_9)",dark:"var(--lighten_9)"},{name:"text_color",light:"var(--text_1)"},{name:"text_1",light:"hsl(var(--tint_hue), var(--tint_saturation), 16%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 80%)"},{name:"text_2",light:"hsl(var(--tint_hue), var(--tint_saturation), 32%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 65%)"},{name:"text_3",light:"hsl(var(--tint_hue), var(--tint_saturation), 48%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 50%)"},{name:"text_disabled",light:"var(--text_3)"},{name:"text_active",light:"hsl(var(--hue_1), 55%, 40%);",dark:"hsl(var(--hue_1), 65%, 65%);"},{name:"line_height",light:"var(--line_height_5)"},{name:"line_height_1",light:"1"},{name:"line_height_2",light:"1.1"},{name:"line_height_3",light:"1.2"},{name:"line_height_4",light:"1.35"},{name:"line_height_5",light:"1.5"},{name:"line_height_6",light:"1.75"},{name:"line_height_7",light:"2"},{name:"font_family",light:"system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",summary:"@source https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/"},{name:"font_family_mono",light:"ui-monospace, 'Fira Mono', monospace"},{name:"size_xs",light:"1rem"},{name:"size_sm",light:"1.3rem"},{name:"size_md",light:"1.6rem"},{name:"size_lg",light:"2.04rem"},{name:"size_1",light:"2.59rem"},{name:"size_2",light:"3.29rem"},{name:"size_3",light:"4.19rem"},{name:"size_4",light:"5.33rem"},{name:"size_5",light:"6.78rem"},{name:"size_6",light:"8.62rem"},{name:"size_7",light:"10.97rem"},{name:"size_8",light:"13.95rem"},{name:"size_9",light:"17.74rem"},{name:"link_color",light:"hsl(var(--hue_1), 61%, 35%)",dark:"hsl(var(--hue_1), 61%, 58%)"},{name:"text_decoration",light:"none"},{name:"text_decoration_hover",light:"underline"},{name:"text_decoration_selected",light:"underline"},{name:"link_active",light:"var(--text_color)"},{name:"spacing_xs5",light:"0.1rem"},{name:"spacing_xs4",light:"0.2rem"},{name:"spacing_xs3",light:"0.3rem"},{name:"spacing_xs2",light:"0.4rem"},{name:"spacing_xs",light:"0.6rem"},{name:"spacing_sm",light:"0.8rem"},{name:"spacing_md",light:"1rem"},{name:"spacing_lg",light:"1.3rem"},{name:"spacing_1",light:"1.6rem"},{name:"spacing_2",light:"2.1rem"},{name:"spacing_3",light:"2.6rem"},{name:"spacing_4",light:"3.3rem"},{name:"spacing_5",light:"4.2rem"},{name:"spacing_6",light:"5.4rem"},{name:"spacing_7",light:"6.9rem"},{name:"spacing_8",light:"8.7rem"},{name:"spacing_9",light:"11.1rem"},{name:"width_md",light:"800px"},{name:"width_sm",light:"320px"},{name:"border_color",light:"var(--border_3)"},{name:"border_1",light:"hsl(var(--tint_hue), 60%, 20%, 15%)",dark:"hsl(var(--tint_hue), 60%, 80%, 85%)"},{name:"border_2",light:"hsl(var(--tint_hue), 60%, 20%, 25%)",dark:"hsl(var(--tint_hue), 60%, 80%, 70%)"},{name:"border_3",light:"hsl(var(--tint_hue), 60%, 20%, 35%)",dark:"hsl(var(--tint_hue), 60%, 80%, 50%)"},{name:"border_4",light:"hsl(var(--tint_hue), 60%, 20%, 45%)",dark:"hsl(var(--tint_hue), 60%, 80%, 40%)"},{name:"border_5",light:"hsl(var(--tint_hue), 60%, 20%, 60%)",dark:"hsl(var(--tint_hue), 60%, 80%, 30%)"},{name:"border_disabled",light:"var(--border_3)"},{name:"border_width",light:"var(--border_width_1)"},{name:"border_width_1",light:"1px"},{name:"border_width_2",light:"2px"},{name:"border_width_3",light:"3px"},{name:"border_width_4",light:"4px"},{name:"border_width_5",light:"6px"},{name:"border_width_6",light:"8px"},{name:"border_style",light:"solid"},{name:"outline_width",light:"var(--outline_width_1)"},{name:"outline_width_1",light:"0"},{name:"outline_width_2",light:"var(--border_width_2)"},{name:"outline_width_3",light:"var(--border_width_1)"},{name:"outline_style",light:"solid"},{name:"outline_color",light:"var(--color_1)"},{name:"button_bg",light:"var(--fg_1)"},{name:"button_bg_hover",light:"var(--fg_2)"},{name:"button_bg_active",light:"var(--bg_3)"},{name:"button_bg_disabled",light:"transparent"},{name:"input_bg",light:"var(--bg_5)"},{name:"input_padding_y",light:"0"},{name:"input_padding_x",light:"var(--spacing_lg)"},{name:"input_width_min",light:"100px"},{name:"input_height",light:"var(--spacing_5)"},{name:"input_height_sm",light:"var(--spacing_4)"},{name:"input_height_inner",light:"calc(var(--input_height) - 2 * var(--border_width) - 2 * var(--input_padding_y))"},{name:"box_shadow",light:"2px 4px 9px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.28), 2px 14px 48px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.28)",dark:"2px 4px 9px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5)), 2px 14px 48px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5))"},{name:"box_shadow_lg",light:"2px 6px 14px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.8), 2px 6px 48px hsla(var(--tint_hue), var(--tint_saturation), 7%, 0.8)",dark:"2px 6px 18px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5)), 2px 6px 48px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--faded_5))"},{name:"drop_shadow",light:"drop-shadow(var(--box_shadow))"},{name:"drop_shadow_lg",light:"drop-shadow(var(--box_shadow_lg))"},{name:"icon_size",light:"var(--icon_size_md)"},{name:"icon_size_xs",light:"18px"},{name:"icon_size_sm",light:"32px"},{name:"icon_size_md",light:"48px"},{name:"icon_size_lg",light:"80px"},{name:"icon_size_1",light:"128px"},{name:"icon_size_2",light:"196px"},{name:"icon_size_3",light:"316px"},{name:"icon_size_4",light:"512px"},{name:"duration_1",light:"0.08s"},{name:"duration_2",light:"0.2s"},{name:"duration_3",light:"0.5s"},{name:"duration_4",light:"1s"},{name:"duration_5",light:"1.5s"},{name:"duration_6",light:"3s"},{name:"faded_1",light:"86%"},{name:"faded_2",light:"62%"},{name:"faded_3",light:"38%"},{name:"faded_4",light:"24%"},{name:"faded_5",light:"15%"},{name:"faded_6",light:"9%"},{name:"disabled_opacity",light:"var(--faded_1)"},{name:"border_radius",light:"var(--border_radius_md)"},{name:"border_radius_md",light:"calc(var(--input_height) / 2)"},{name:"border_radius_sm",light:"calc(var(--border_radius_md) / 1.618)"},{name:"border_radius_xs",light:"calc(var(--border_radius_sm) / 1.618)"},{name:"border_radius_xs2",light:"calc(var(--border_radius_xs) / 1.618)"}],_e={name:"base",items:[]},ie=[_e,{name:"low contrast",items:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue), var(--tint_saturation), 86%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 18%)"}]},{name:"high contrast",items:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_1",light:"hsl(var(--tint_hue), var(--tint_saturation), 8%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 90%)"},{name:"text_2",light:"hsl(var(--tint_hue), var(--tint_saturation), 16%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 83%)"},{name:"text_3",light:"hsl(var(--tint_hue), var(--tint_saturation), 24%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 75%)"}]}],ke=["light","auto","dark"],be="#257e25",pe=e=>{e==="dark"||e!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},K="color-scheme",ye=(e,a=K)=>{try{e===null?localStorage.removeItem(a):localStorage.setItem(a,e)}catch{}},xe=(e="auto",a=K)=>{let t;try{t=localStorage.getItem(a)}catch{return e}return ke.includes(t)?t:e},he="theme",we=(e,a=he)=>{try{e===null?localStorage.removeItem(a):localStorage.setItem(a,JSON.stringify(e))}catch{}},Ee=(e=ie[0],a=he)=>{try{const t=localStorage.getItem(a),n=t===null?t:JSON.parse(t);if(n)return n}catch{}return e},ze=(e="light",a=K)=>`
	try {
		let c = localStorage.getItem('${a}');
		if (c === 'auto' || (c !== 'dark' && c !== 'light')) {
			c = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		if (c === 'dark') document.documentElement.classList.add('dark');
	} catch (_) { ${e==="dark"?"document.documentElement.classList.add('dark');":""} }
`,Se=e=>`<style nonce="%sveltekit.nonce%">
	${e}
</style>`,Me=(e,a={})=>{const{comments:t=!1,id:n=null,empty_default_theme:l=!0,specificity:r=2}=a,_=e.name===ie[0].name?l?null:ve:e.items;if(!_?.length)return"";const s=_.map(o=>G(o)).filter(Boolean),h=_.map(o=>G(o,!0,t)).filter(Boolean),i=(n?"#"+n:":root").repeat(r);return`${s.length?`${i} {
	${s.join(`
	`)}
}`:""}
${h.length?`${i}.dark {
	${h.join(`
	`)}
}`:""}
`.trim()},G=(e,a=!1,t=!0)=>{const n=a?e.dark:e.light;return n?"--"+e.name+": "+n+";"+(t&&e.summary?" /* "+e.summary+" */":""):""},Oe=Symbol("theme"),Te=e=>V(Oe,e),Ce=Symbol("color_scheme"),Ie=e=>V(Ce,e),Le=e=>({style:e&1,theme_style_html:e&2,theme_setup_script:e&4,selected_theme:e&8,selected_color_scheme:e&16}),J=e=>({style:e[0],theme_style_html:e[1],theme_setup_script:e[2],selected_theme:e[3],selected_color_scheme:e[4]});function P(e){let a,t;return{c(){a=new ae(!1),t=f(),this.h()},l(n){a=ne(n,!1),t=f(),this.h()},h(){a.a=t},m(n,l){a.m(e[1],n,l),d(n,t,l)},p(n,l){l&2&&a.p(n[1])},d(n){n&&(c(t),a.d())}}}function Q(e){let a,t,n,l,r,_;return{c(){a=H("meta"),t=p(),n=H("meta"),l=p(),r=H("script"),_=new ae(!1),this.h()},l(s){a=R(s,"META",{name:!0,content:!0}),t=y(s),n=R(s,"META",{name:!0,content:!0}),l=y(s),r=R(s,"SCRIPT",{});var h=se(r);_=ne(h,!1),h.forEach(c),this.h()},h(){u(a,"name","color-scheme"),u(a,"content",e[6]),u(n,"name","theme-color"),u(n,"content",e[5]),_.a=null},m(s,h){d(s,a,h),d(s,t,h),d(s,n,h),d(s,l,h),d(s,r,h),_.m(e[2],r)},p(s,h){h&64&&u(a,"content",s[6]),h&32&&u(n,"content",s[5]),h&4&&_.p(s[2])},d(s){s&&(c(a),c(t),c(n),c(l),c(r))}}}function je(e){let a,t,n,l,r=e[1]&&P(e),_=e[2]&&Q(e);const s=e[22].default,h=X(s,e,e[21],J);return{c(){r&&r.c(),a=f(),_&&_.c(),t=f(),n=p(),h&&h.c()},l(i){const o=Z("svelte-1qw2uo0",document.head);r&&r.l(o),a=f(),_&&_.l(o),t=f(),o.forEach(c),n=y(i),h&&h.l(i)},m(i,o){r&&r.m(document.head,null),U(document.head,a),_&&_.m(document.head,null),U(document.head,t),d(i,n,o),h&&h.m(i,o),l=!0},p(i,[o]){i[1]?r?r.p(i,o):(r=P(i),r.c(),r.m(a.parentNode,a)):r&&(r.d(1),r=null),i[2]?_?_.p(i,o):(_=Q(i),_.c(),_.m(t.parentNode,t)):_&&(_.d(1),_=null),h&&h.p&&(!l||o&2097183)&&$(h,s,i,i[21],l?te(s,i[21],o,Le):ee(i[21]),J)},i(i){l||(A(h,i),l=!0)},o(i){N(h,i),l=!1},d(i){i&&c(n),r&&r.d(i),c(a),_&&_.d(i),c(t),h&&h.d(i)}}}function He(e,a,t){let n,l,r,_,s=B,h=()=>(s(),s=D(v,m=>t(19,_=m)),v),i,o=B,Y=()=>(o(),o=D(k,m=>t(20,i=m)),k);e.$$.on_destroy.push(()=>s()),e.$$.on_destroy.push(()=>o());let{$$slots:me={},$$scope:q}=a,{sync_color_scheme:x=pe}=a,{load_color_scheme:w=xe}=a,{save_color_scheme:E=ye}=a,{load_theme:z=Ee}=a,{save_theme:S=we}=a,{selected_theme:v=F(z())}=a;h(),Te(v);let{selected_color_scheme:k=F(w())}=a;Y(),Ie(k);let{color_scheme_fallback:g=void 0}=a,{color_scheme_css:M=void 0}=a,{theme_color:O=void 0}=a,{style:b=null}=a,{theme_style_html:T=null}=a,{theme_setup_script:C=null}=a,I=0,L=0,j=0;return e.$$set=m=>{"sync_color_scheme"in m&&t(7,x=m.sync_color_scheme),"load_color_scheme"in m&&t(8,w=m.load_color_scheme),"save_color_scheme"in m&&t(9,E=m.save_color_scheme),"load_theme"in m&&t(10,z=m.load_theme),"save_theme"in m&&t(11,S=m.save_theme),"selected_theme"in m&&h(t(3,v=m.selected_theme)),"selected_color_scheme"in m&&Y(t(4,k=m.selected_color_scheme)),"color_scheme_fallback"in m&&t(12,g=m.color_scheme_fallback),"color_scheme_css"in m&&t(13,M=m.color_scheme_css),"theme_color"in m&&t(14,O=m.theme_color),"style"in m&&t(0,b=m.style),"theme_style_html"in m&&t(1,T=m.theme_style_html),"theme_setup_script"in m&&t(2,C=m.theme_setup_script),"$$scope"in m&&t(21,q=m.$$scope)},e.$$.update=()=>{e.$$.dirty&524288&&t(18,n=_.name),e.$$.dirty&786432&&t(0,b=n===_e.name?null:Me(_)),e.$$.dirty&1&&t(1,T=b?Se(b):null),e.$$.dirty&4096&&t(2,C=ze(g)),e.$$.dirty&1081472&&t(15,I++,I)&&x?.(i),e.$$.dirty&1114624&&t(16,L++,L)&&E?.(i),e.$$.dirty&657408&&t(17,j++,j)&&S?.(_),e.$$.dirty&12288&&t(6,l=M??(g==="dark"||g==="light"?g:matchMedia("(prefers-color-scheme: dark)").matches?"dark light":"light dark")),e.$$.dirty&16384&&t(5,r=O??be)},[b,T,C,v,k,r,l,x,w,E,z,S,g,M,O,I,L,j,n,_,i,q,me]}class Re extends le{constructor(a){super(),re(this,a,He,je,W,{sync_color_scheme:7,load_color_scheme:8,save_color_scheme:9,load_theme:10,save_theme:11,selected_theme:3,selected_color_scheme:4,color_scheme_fallback:12,color_scheme_css:13,theme_color:14,style:0,theme_style_html:1,theme_setup_script:2})}}function Ae(e){let a;const t=e[0].default,n=X(t,e,e[1],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,r){n&&n.m(l,r),a=!0},p(l,r){n&&n.p&&(!a||r&2)&&$(n,t,l,l[1],a?te(t,l[1],r,null):ee(l[1]),null)},i(l){a||(A(n,l),a=!0)},o(l){N(n,l),a=!1},d(l){n&&n.d(l)}}}function Ne(e){let a,t,n;return t=new Re({props:{$$slots:{default:[Ae]},$$scope:{ctx:e}}}),{c(){a=p(),oe(t.$$.fragment),this.h()},l(l){Z("svelte-1dds5uu",document.head).forEach(c),a=y(l),ce(t.$$.fragment,l),this.h()},h(){document.title="@fuz.dev/fuz_library"},m(l,r){d(l,a,r),de(t,l,r),n=!0},p(l,[r]){const _={};r&2&&(_.$$scope={dirty:r,ctx:l}),t.$set(_)},i(l){n||(A(t.$$.fragment,l),n=!0)},o(l){N(t.$$.fragment,l),n=!1},d(l){l&&c(a),ge(t,l)}}}function Ke(e,a,t){let{$$slots:n={},$$scope:l}=a;return e.$$set=r=>{"$$scope"in r&&t(1,l=r.$$scope)},[n,l]}class De extends le{constructor(a){super(),re(this,a,Ke,Ne,W,{})}}export{De as component,Be as universal};
