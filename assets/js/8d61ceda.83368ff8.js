"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1093],{369:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,h=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(8084),o=(n(7378),n(369));const r={sidebar_position:8},i="Exporting and importing data",s={unversionedId:"local-storage/export",id:"local-storage/export",title:"Exporting and importing data",description:"Verdant clients can export all local data, and even download remote files if needed to include in the export.",source:"@site/docs/local-storage/export.md",sourceDirName:"local-storage",slug:"/local-storage/export",permalink:"/docs/local-storage/export",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"File storage",permalink:"/docs/local-storage/files"},next:{title:"Sync",permalink:"/docs/category/sync"}},l={},p=[{value:"Uses of exporting data",id:"uses-of-exporting-data",level:2},{value:"Using exports to transfer data between origins",id:"using-exports-to-transfer-data-between-origins",level:2},{value:"How the transfer works",id:"how-the-transfer-works",level:3},{value:"Limitations of exporting data",id:"limitations-of-exporting-data",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"exporting-and-importing-data"},"Exporting and importing data"),(0,o.yg)("p",null,"Verdant clients can export all local data, and even download remote files if needed to include in the export."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"const exportedData = await client.export({ downloadRemoteFiles: true });\n")),(0,o.yg)("p",null,"This exported data includes all document data, even change history. It also includes metadata about files, and the files themselves (as a list of ",(0,o.yg)("inlineCode",{parentName:"p"},"File"),"s)."),(0,o.yg)("p",null,"This means a client importing this dataset should behave identically to the client which exported it. The only caveat is that importing doesn't take on the original client's ",(0,o.yg)("em",{parentName:"p"},"sync identity"),"."),(0,o.yg)("h2",{id:"uses-of-exporting-data"},"Uses of exporting data"),(0,o.yg)("p",null,"Since local-first apps are tied to a domain for their local storage, exporting can allow you to transfer data if your app moves to a new domain. I don't recommend moving domains if you can help it. See how to do this relatively seamlessly below."),(0,o.yg)("h2",{id:"using-exports-to-transfer-data-between-origins"},"Using exports to transfer data between origins"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"First off, ",(0,o.yg)("strong",{parentName:"p"},"if your users are using sync, you don't need to do this")," - you can instead use the sync server to transfer data by moving users' sync endpoint over to the new server before completing the domain migration. A replica will populate the new sync server automatically and then you're ready to transition.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Also, ",(0,o.yg)("strong",{parentName:"p"},"on iOS, this doesn't work in a PWA"),". Apple restricts the storage context of PWAs on iPhones, so although the transfer itself will work, the new origin won't have access to the data when launched in Safari or installed as a new PWA. Aren't iPhones fun?")),(0,o.yg)("p",null,"Verdant has built-in tools to easily transfer a library from one origin (website) to another built on top of the ",(0,o.yg)("inlineCode",{parentName:"p"},"export")," functionality documented above. This is an experimental tool which uses an embedded ",(0,o.yg)("inlineCode",{parentName:"p"},"iframe")," to transmit the data file directly through the browser - no server required!"),(0,o.yg)("p",null,"First off, it's important that both sites are running the exact same codebase. To make the transition, point DNS records for both origins to the same hosted webpage. Any discrepancy in schemas will cause unworkable errors."),(0,o.yg)("p",null,"Then, add the following code snippet anywhere in your app:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"// assuming you have a ClientDescriptor instance handy here. You probably\n// already have a client ready somewhere!\nconst client = await clientDescriptor.open();\n\nconst backup = await('@verdant-web/store/backup');\nbackup.transferOrigins(\n    client,\n    'https://OLD-origin.com',\n    'https://NEW-origin.com',\n);\n")),(0,o.yg)("p",null,"That's the bulk of it! Since this code runs on both the new and old origins, the helper will synchronize the back-and-forth transfer negotiation for you from both sides."),(0,o.yg)("p",null,"The last thing you need to do to make this work is add a ",(0,o.yg)("inlineCode",{parentName:"p"},"?transfer=true")," query param to your NEW origin. This will initiate the transfer helper."),(0,o.yg)("p",null,"The most straightforward pattern here is to show a modal or something to the user explaining the domain move, and then give them a link to the new origin with ",(0,o.yg)("inlineCode",{parentName:"p"},"?transfer=true")," set. But if you don't want to explain anything, I guess you could just set up a redirect."),(0,o.yg)("p",null,"And, again, this doesn't work on iPhone PWAs. If your old app was an iPhone PWA... you have to instruct your user to export their data and import it after installing the new app \ud83d\ude1e."),(0,o.yg)("h3",{id:"how-the-transfer-works"},"How the transfer works"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"New app detects it's on the new origin and the ",(0,o.yg)("inlineCode",{parentName:"li"},"?transfer=true")," param is set."),(0,o.yg)("li",{parentName:"ol"},"New app creates an ",(0,o.yg)("inlineCode",{parentName:"li"},"iframe")," for the old origin."),(0,o.yg)("li",{parentName:"ol"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"iframe")," detects it's on the old origin and sends out a message to any parent window on the new origin that it's ready to transfer."),(0,o.yg)("li",{parentName:"ol"},"New app detects the message and responds with a go-ahead."),(0,o.yg)("li",{parentName:"ol"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"iframe")," does a client export and sends the data as an attachment in a post message."),(0,o.yg)("li",{parentName:"ol"},"The new app receives the export file, unbundles it, and loads it up. Then it deletes the query param."),(0,o.yg)("li",{parentName:"ol"},"Just in case (to avoid accidental resets), a local storage flag is also set to avoid another transfer in the future.")),(0,o.yg)("h2",{id:"limitations-of-exporting-data"},"Limitations of exporting data"),(0,o.yg)("p",null,"At the time of writing, exported data can only be imported again if the client's schema matches the schema of the export exactly. That means you can't import data from old versions."),(0,o.yg)("p",null,'This is a significant limitation which basically removes this data export as a reliable "backup" option for users. It relegates it to temporary operations, like transferring between domains, or simple data "take-away" for users who want to, say, download all their files.'),(0,o.yg)("p",null,"It's theoretically possible for me to support older versions, but I'm launching this as-is for now."))}u.isMDXComponent=!0}}]);