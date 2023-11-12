"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6737],{8570:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(79);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return o?r.createElement(f,i(i({ref:t},c),{},{components:o})):r.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8543:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=o(7626),a=(o(79),o(8570));const n={sidebar_position:8},i="Comparisons to other local-first tools",s={unversionedId:"comparisons",id:"comparisons",title:"Comparisons to other local-first tools",description:"Local-first is pretty new on the web, so it makes sense you'd want to choose carefully when adopting technologies. Clear mass-adoption winners haven't really emerged yet, and tradeoffs are everywhere.",source:"@site/docs/comparisons.md",sourceDirName:".",slug:"/comparisons",permalink:"/docs/comparisons",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"React Router",permalink:"/docs/react-router"}},l={},u=[{value:"Local storage tradeoffs",id:"local-storage-tradeoffs",level:2},{value:"You might like these if:",id:"you-might-like-these-if",level:3},{value:"You might dislike these if:",id:"you-might-dislike-these-if",level:3},{value:"Sync tradeoffs",id:"sync-tradeoffs",level:2},{value:"You might like these if:",id:"you-might-like-these-if-1",level:3},{value:"You might dislike these if:",id:"you-might-dislike-these-if-1",level:3}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"comparisons-to-other-local-first-tools"},"Comparisons to other local-first tools"),(0,a.kt)("p",null,"Local-first is pretty new on the web, so it makes sense you'd want to choose carefully when adopting technologies. Clear mass-adoption winners haven't really emerged yet, and tradeoffs are everywhere."),(0,a.kt)("p",null,"So here's an attempt at a concise and honest summary of tradeoffs in Verdant. Obviously I'll have some bias toward my framework, but really, I built Verdant for me and it doesn't bother me much if you choose something else, so I think you'll find I'm being pretty candid here."),(0,a.kt)("h2",{id:"local-storage-tradeoffs"},"Local storage tradeoffs"),(0,a.kt)("p",null,"Verdant prioritizes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2b50 Limiting storage usage over time: old changes are compressed and dropped"),(0,a.kt)("li",{parentName:"ul"},"\u2b50 Future-proofing and flexibility: ",(0,a.kt)("a",{parentName:"li",href:"/docs/local-storage/migrations"},"Migrations")),(0,a.kt)("li",{parentName:"ul"},"Safe data usage: ",(0,a.kt)("a",{parentName:"li",href:"/docs/local-storage/schema"},"Schemas")),(0,a.kt)("li",{parentName:"ul"},"Out-of-the-box usage: start storing and querying immediately, no choices to make about persistence layers or conflict resolution choices"),(0,a.kt)("li",{parentName:"ul"},"Document-based data: no formal relations between objects, but deep nested objects is encouraged")),(0,a.kt)("p",null,"Those marked with a \u2b50 are choices I think are particularly unique at time of writing in this space. I'm not aware of any other conflict-avoidant, syncing storage which doesn't monotonically grow utilized storage space on-device over time, and I'm aware of very few other solutions for local-first data storage which focus on migrating data as the app changes (for others, see ",(0,a.kt)("a",{parentName:"p",href:"https://electric-sql.com/docs/usage/migrations"},"ElectricSQL")," and ",(0,a.kt)("a",{parentName:"p",href:"https://vlcn.io/docs/cr-sqlite/migrations"},"VLCN"),", but IMO neither of these is as easy as Verdant, yet)."),(0,a.kt)("p",null,"Verdant ",(0,a.kt)("em",{parentName:"p"},"de"),"prioritizes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f Query speed: IndexedDB is slow and Verdant isn't particularly optimized, either."),(0,a.kt)("li",{parentName:"ul"},"Storage adaptability: No alternate persistence options, plugins, or functionality 'hooks.'"),(0,a.kt)("li",{parentName:"ul"},"Complex queries: only index-based queries are supported, there's no SQL or even a rudimentary dynamic query language. You can do complicated queries, but you'll need to write complicated indexes to make that work. Verdant will eventually force you to do advanced filtering in-memory on a larger result set (remember, all data is already local).")),(0,a.kt)("h3",{id:"you-might-like-these-if"},"You might like these if:"),(0,a.kt)("p",null,"You're worried about local-first deployment and how it might restrict your ability to pivot your approach to app features or data model in the future while maintaining user data on their devices"),(0,a.kt)("h3",{id:"you-might-dislike-these-if"},"You might dislike these if:"),(0,a.kt)("p",null,"Your app has any specific performance needs (like 60fps multiplayer) and you're not able to rely on technical work-arounds (like pre-loading queries) and slight-of-hand (like cursor interpolation)."),(0,a.kt)("p",null,"You really like SQL and relational models. Although, let me say, I do too... but I found for local-first, documents are actually fairly nice to work with."),(0,a.kt)("h2",{id:"sync-tradeoffs"},"Sync tradeoffs"),(0,a.kt)("p",null,"Verdant prioritizes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Working on your existing server infrastructure (provided it's NodeJS lol)"),(0,a.kt)("li",{parentName:"ul"},"Extreme simplicity of deployment model: 1 server, SQLite database"),(0,a.kt)("li",{parentName:"ul"},"Versatility of network transport: polling or websockets")),(0,a.kt)("p",null,"Verdant ",(0,a.kt)("em",{parentName:"p"},"de"),"prioritizes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f Horizontal scaling. User storage libraries would have to be sharded to fit on specific servers. Servers can't talk to one another today."),(0,a.kt)("li",{parentName:"ul"},"Performance: I haven't scaled anything up much on Verdant so I don't know how many users will fit on a server. I'll probably improve this over time if any of my apps get more users."),(0,a.kt)("li",{parentName:"ul"},"Variability of storage: you only get to choose where the SQLite database goes. Can't be integrated into another database, can't use Postgres, etc.")),(0,a.kt)("h3",{id:"you-might-like-these-if-1"},"You might like these if:"),(0,a.kt)("p",null,"You already have a Node server and don't want to have to set up much to get started with sync. Or, generally, if you're more focused on building a product than worrying about sync protocols and storage backends."),(0,a.kt)("h3",{id:"you-might-dislike-these-if-1"},"You might dislike these if:"),(0,a.kt)("p",null,"You've got strong opinions about backend systems and databases, or use another language for your backend."),(0,a.kt)("p",null,"Or, if you won't want to host any backend at all (Verdant has no cloud offering)."))}d.isMDXComponent=!0}}]);