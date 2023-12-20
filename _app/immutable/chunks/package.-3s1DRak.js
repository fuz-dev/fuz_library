import{s as a,a as d}from"./string.0421sbAQ.js";const b=(t,e,o)=>{const{name:i}=e,s=(r=>r?d(a(d(r,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null),n=e.homepage??null,l=!e.private&&!!e.exports&&e.version!=="0.0.1",v=l?"https://www.npmjs.com/package/"+e.name:null,p=l&&s?s+"/blob/main/CHANGELOG.md":null,_=m(i),u=s?a(s,"https://github.com/").split("/")[0]:null;return{url:t,package_json:e,src_json:o,name:i,repo_name:_,repo_url:s,owner_name:u,homepage_url:n,npm_url:v,changelog_url:p,published:l}},m=t=>t[0]==="@"?t.split("/")[1]:t,g=t=>a(new URL(t).host,"www."),f={name:"@fuz.dev/fuz_library",version:"0.23.0",description:"components and helpers for Svelte, SvelteKit, and Fuz",icon:"🧶",public:!0,license:"MIT",homepage:"https://library.fuz.dev/",repository:"https://github.com/fuz-dev/fuz_library",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},type:"module",engines:{node:">=20.10"},scripts:{start:"gro dev",dev:"gro dev",build:"gro build",test:"gro test",deploy:"gro deploy"},files:["dist"],peerDependencies:{"@grogarden/util":"*","@sveltejs/kit":"*",svelte:"*"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@feltjs/eslint-config":"^0.4.1","@fuz.dev/fuz":"^0.81.0","@fuz.dev/fuz_code":"^0.5.0","@grogarden/gro":"^0.107.0","@grogarden/util":"^0.18.1","@sveltejs/adapter-static":"^3.0.1","@sveltejs/kit":"^2.0.4","@sveltejs/package":"^2.2.4","@sveltejs/vite-plugin-svelte":"^3.0.1","@types/node":"^20.10.5","@typescript-eslint/eslint-plugin":"^6.15.0","@typescript-eslint/parser":"^6.15.0",eslint:"^8.56.0","eslint-plugin-svelte":"^2.35.1",prettier:"^3.1.1","prettier-plugin-svelte":"^3.1.2","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^4.2.8","svelte-check":"^3.6.2",tslib:"^2.6.2",typescript:"^5.3.3",uvu:"^0.5.6",zod:"^3.22.4"},eslintConfig:{root:!0,extends:"@feltjs",rules:{"no-console":1}},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},exports:{"./Alert.svelte":{svelte:"./dist/Alert.svelte",default:"./dist/Alert.svelte",types:"./dist/Alert.svelte.d.ts"},"./alert.js":{default:"./dist/alert.js",types:"./dist/alert.d.ts"},"./Breadcrumb.svelte":{svelte:"./dist/Breadcrumb.svelte",default:"./dist/Breadcrumb.svelte",types:"./dist/Breadcrumb.svelte.d.ts"},"./Card.svelte":{svelte:"./dist/Card.svelte",default:"./dist/Card.svelte",types:"./dist/Card.svelte.d.ts"},"./Copy_To_Clipboard.svelte":{svelte:"./dist/Copy_To_Clipboard.svelte",default:"./dist/Copy_To_Clipboard.svelte",types:"./dist/Copy_To_Clipboard.svelte.d.ts"},"./Devmode_Controls.svelte":{svelte:"./dist/Devmode_Controls.svelte",default:"./dist/Devmode_Controls.svelte",types:"./dist/Devmode_Controls.svelte.d.ts"},"./devmode.js":{default:"./dist/devmode.js",types:"./dist/devmode.d.ts"},"./Github_Logo.svelte":{svelte:"./dist/Github_Logo.svelte",default:"./dist/Github_Logo.svelte",types:"./dist/Github_Logo.svelte.d.ts"},"./helpers.js":{default:"./dist/helpers.js",types:"./dist/helpers.d.ts"},"./Hue_Input.svelte":{svelte:"./dist/Hue_Input.svelte",default:"./dist/Hue_Input.svelte",types:"./dist/Hue_Input.svelte.d.ts"},"./Library_Footer.svelte":{svelte:"./dist/Library_Footer.svelte",default:"./dist/Library_Footer.svelte",types:"./dist/Library_Footer.svelte.d.ts"},"./Library_Header.svelte":{svelte:"./dist/Library_Header.svelte",default:"./dist/Library_Header.svelte",types:"./dist/Library_Header.svelte.d.ts"},"./Library_Menu.svelte":{svelte:"./dist/Library_Menu.svelte",default:"./dist/Library_Menu.svelte",types:"./dist/Library_Menu.svelte.d.ts"},"./Library_Nav.svelte":{svelte:"./dist/Library_Nav.svelte",default:"./dist/Library_Nav.svelte",types:"./dist/Library_Nav.svelte.d.ts"},"./Library_Panel.svelte":{svelte:"./dist/Library_Panel.svelte",default:"./dist/Library_Panel.svelte",types:"./dist/Library_Panel.svelte.d.ts"},"./Library_Vocab.svelte":{svelte:"./dist/Library_Vocab.svelte",default:"./dist/Library_Vocab.svelte",types:"./dist/Library_Vocab.svelte.d.ts"},"./Library.svelte":{svelte:"./dist/Library.svelte",default:"./dist/Library.svelte",types:"./dist/Library.svelte.d.ts"},"./Package_Detail.svelte":{svelte:"./dist/Package_Detail.svelte",default:"./dist/Package_Detail.svelte",types:"./dist/Package_Detail.svelte.d.ts"},"./package_meta.js":{default:"./dist/package_meta.js",types:"./dist/package_meta.d.ts"},"./Package_Summary.svelte":{svelte:"./dist/Package_Summary.svelte",default:"./dist/Package_Summary.svelte",types:"./dist/Package_Summary.svelte.d.ts"},"./Pending_Animation.svelte":{svelte:"./dist/Pending_Animation.svelte",default:"./dist/Pending_Animation.svelte",types:"./dist/Pending_Animation.svelte.d.ts"},"./Pending_Button.svelte":{svelte:"./dist/Pending_Button.svelte",default:"./dist/Pending_Button.svelte",types:"./dist/Pending_Button.svelte.d.ts"},"./Redirect.svelte":{svelte:"./dist/Redirect.svelte",default:"./dist/Redirect.svelte",types:"./dist/Redirect.svelte.d.ts"},"./Teleport.svelte":{svelte:"./dist/Teleport.svelte",default:"./dist/Teleport.svelte",types:"./dist/Teleport.svelte.d.ts"},"./Tome_Detail.svelte":{svelte:"./dist/Tome_Detail.svelte",default:"./dist/Tome_Detail.svelte",types:"./dist/Tome_Detail.svelte.d.ts"},"./Tome_Title.svelte":{svelte:"./dist/Tome_Title.svelte",default:"./dist/Tome_Title.svelte",types:"./dist/Tome_Title.svelte.d.ts"},"./tome.js":{default:"./dist/tome.js",types:"./dist/tome.d.ts"}}},h={name:"@fuz.dev/fuz_library",version:"0.23.0",modules:{"./Alert.svelte":{path:"Alert.svelte",declarations:[]},"./alert.js":{path:"alert.ts",declarations:[{name:"Alert_Status",kind:"type"},{name:"Alert_Status_Options",kind:"type"},{name:"alert_status_options",kind:"variable"}]},"./Breadcrumb.svelte":{path:"Breadcrumb.svelte",declarations:[]},"./Card.svelte":{path:"Card.svelte",declarations:[]},"./Copy_To_Clipboard.svelte":{path:"Copy_To_Clipboard.svelte",declarations:[]},"./Devmode_Controls.svelte":{path:"Devmode_Controls.svelte",declarations:[]},"./devmode.js":{path:"devmode.ts",declarations:[{name:"get_devmode",kind:"function"},{name:"set_devmode",kind:"function"}]},"./Github_Logo.svelte":{path:"Github_Logo.svelte",declarations:[]},"./helpers.js":{path:"helpers.ts",declarations:[{name:"LIBRARY_PATH",kind:"variable"},{name:"to_library_path_info",kind:"function"}]},"./Hue_Input.svelte":{path:"Hue_Input.svelte",declarations:[]},"./Library_Footer.svelte":{path:"Library_Footer.svelte",declarations:[]},"./Library_Header.svelte":{path:"Library_Header.svelte",declarations:[]},"./Library_Menu.svelte":{path:"Library_Menu.svelte",declarations:[]},"./Library_Nav.svelte":{path:"Library_Nav.svelte",declarations:[]},"./Library_Panel.svelte":{path:"Library_Panel.svelte",declarations:[]},"./Library_Vocab.svelte":{path:"Library_Vocab.svelte",declarations:[]},"./Library.svelte":{path:"Library.svelte",declarations:[]},"./Package_Detail.svelte":{path:"Package_Detail.svelte",declarations:[]},"./package_meta.js":{path:"package_meta.ts",declarations:[{name:"Package",kind:"type"},{name:"Package_Meta",kind:"type"},{name:"parse_package_meta",kind:"function"},{name:"parse_repo_name",kind:"function"},{name:"format_host",kind:"function"},{name:"parse_org_url",kind:"function"}]},"./Package_Summary.svelte":{path:"Package_Summary.svelte",declarations:[]},"./Pending_Animation.svelte":{path:"Pending_Animation.svelte",declarations:[]},"./Pending_Button.svelte":{path:"Pending_Button.svelte",declarations:[]},"./Redirect.svelte":{path:"Redirect.svelte",declarations:[]},"./Teleport.svelte":{path:"Teleport.svelte",declarations:[]},"./Tome_Detail.svelte":{path:"Tome_Detail.svelte",declarations:[]},"./Tome_Title.svelte":{path:"Tome_Title.svelte",declarations:[]},"./tome.js":{path:"tome.ts",declarations:[{name:"Tome",kind:"variable"},{name:"init_tome",kind:"function"},{name:"get_tomes",kind:"function"},{name:"set_tomes",kind:"function"},{name:"get_tome",kind:"function"}]}}};export{f as a,g as f,b as p,h as s};