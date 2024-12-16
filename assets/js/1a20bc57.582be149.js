"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9114],{369:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||y[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(8084),o=(n(7378),n(369));const r={sidebar_position:6},i="CLI",l={unversionedId:"cli",id:"cli",title:"CLI",description:"Verdant has a CLI which is vital for generating client typings and upgrading your schema over time. You could theoretically do these things by hand, but it would be really complicated and type safety would be basically infeasible.",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/docs/react"},next:{title:"How it works",permalink:"/docs/category/how-it-works"}},s={},u=[{value:"How to use the CLI",id:"how-to-use-the-cli",level:2},{value:"WIP Schemas",id:"wip-schemas",level:2},{value:"Verifying your schema for deployment",id:"verifying-your-schema-for-deployment",level:3},{value:"Upgrading",id:"upgrading",level:2}],c={toc:u},p="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cli"},"CLI"),(0,o.yg)("p",null,"Verdant has a CLI which is vital for generating client typings and upgrading your schema over time. You could theoretically do these things by hand, but it would be really complicated and type safety would be basically infeasible."),(0,o.yg)("p",null,"The CLI generates client code which you ",(0,o.yg)("strong",{parentName:"p"},"should commit to version control.")," This code is vital to your app."),(0,o.yg)("p",null,"The CLI generates:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A client with your schema pre-loaded"),(0,o.yg)("li",{parentName:"ul"},"Strong typings for all your documents in your schema, and index filters for queries against those documents."),(0,o.yg)("li",{parentName:"ul"},"Migrations to go from one schema version to the next."),(0,o.yg)("li",{parentName:"ul"},"React hooks and associated typings, if you choose.")),(0,o.yg)("p",null,"The generated code also keeps historical versions of every deployed schema. This may seem excessive, but for local-first apps it's actually pretty important and powers migrations."),(0,o.yg)("h2",{id:"how-to-use-the-cli"},"How to use the CLI"),(0,o.yg)("p",null,"First, make some changes to your schema file which reflect changes you want to make to your app. I like to use this part of the process to think through how I want my data to work and plan out the features my changes will enable. Kind of like any other database schema work."),(0,o.yg)("p",null,"Then, run the CLI with ",(0,o.yg)("inlineCode",{parentName:"p"},"npx verdant -s <path to schema> -o <path to generated output>"),". Add ",(0,o.yg)("inlineCode",{parentName:"p"},"-r")," for React code generation, too."),(0,o.yg)("p",null,"The CLI will analyze your schema and the current state of your app and provide some options:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Start a new WIP schema with your schema changes and version N + 1"),(0,o.yg)("li",{parentName:"ul"},"Publish a new schema (from an existing WIP schema, or directly from new schema changes without a WIP phase) that's ready to deploy"),(0,o.yg)("li",{parentName:"ul"},"Just regenerate client code (useful when upgrading the CLI, this can fix bugs in generated code or add new features)")),(0,o.yg)("p",null,"Hopefully the process is guided enough to not require too much additional explanation."),(0,o.yg)("h2",{id:"wip-schemas"},"WIP Schemas"),(0,o.yg)("p",null,'One feature the CLI provides is iterating on schemas in "WIP" mode. This lets you make temporary changes to a schema when developing on your local device in order to test functionality. Before you deploy your app, you will need to mark your schema as production-ready.'),(0,o.yg)("p",null,"When using a WIP schema, a copy is made of your app data and moved into a temporary database. All your changes you make while testing will be applied on that copy of data. Sync is turned off, even if it's enabled in your development environment, because syncing changes made against a schema you may not end up using will introduce permanent invalid changes to your stored data on the server and other clients. There are ways I could make sync work with WIP schemas, but for now I haven't pursued them. Reach out if you find sync or multiplayer necessary to test your new schema locally. It's likely I will too at some point, just not yet."),(0,o.yg)("h3",{id:"verifying-your-schema-for-deployment"},"Verifying your schema for deployment"),(0,o.yg)("p",null,"It's important you don't deploy and use a WIP schema. If you do, any changes users make against that schema will be in a temporary copy of the database, just like local development, and so they'll be lost by the time you correct your mistake."),(0,o.yg)("p",null,"To help avoid this and other problems, Verdant has a ",(0,o.yg)("inlineCode",{parentName:"p"},"verdant-preflight")," CLI tool to validate your code before a deployment. Incorporate this into your testing suite, CI, PR approval process, or just before your final build and deploy. It will fail if any of these conditions are true:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Your client schema is WIP"),(0,o.yg)("li",{parentName:"ul"},"Your schema doesn't match what's preloaded in your generated client (client is out of date)"),(0,o.yg)("li",{parentName:"ul"},"You don't have a migration for your current schema version")),(0,o.yg)("p",null,"To use the preflight check, run the CLI with the ",(0,o.yg)("inlineCode",{parentName:"p"},"preflight")," command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"verdant preflight -s <path to schema> -o <path to output> -m <path to migrations>\n")),(0,o.yg)("h2",{id:"upgrading"},"Upgrading"),(0,o.yg)("p",null,"For anyone using Verdant before CLI v4 (probably nobody but me), you'll need to actually upgrade a lot of your generated client code before using the new CLI, including rewriting all historical schemas and changing some migration tool usage."),(0,o.yg)("p",null,"It's possible this upgrade (which runs automatically when you run the CLI) will fail. In that case, get in touch on Github and we can debug."),(0,o.yg)("p",null,"For any newcomers, please just use CLI > v4. It's much better and enables some key schema features in recent Verdant versions."))}y.isMDXComponent=!0}}]);