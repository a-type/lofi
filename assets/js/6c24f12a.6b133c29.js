"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6649],{8570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(79);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(7626),o=(n(79),n(8570));const r={sidebar_position:10},s="Access Control",i={unversionedId:"sync/access",id:"sync/access",title:"Access Control",description:'Verdant has limited access for document access control in sync\'d environments. This is still an early days, kicking-the-tires approach. As such I\'ve limited the power of it to two modes: "shared" (default) and "private" (only devices you own can see the document).',source:"@site/docs/sync/access.md",sourceDirName:"sync",slug:"/sync/access",permalink:"/docs/sync/access",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Server Persistent Storage",permalink:"/docs/sync/storage"},next:{title:"Tips and tricks for working in distributed systems",permalink:"/docs/sync/tips-and-tricks"}},c={},l=[{value:"Changing access",id:"changing-access",level:2},{value:"A warning about custom <code>primaryKey</code> \u26a0\ufe0f\u26a0\ufe0f\u26a0\ufe0f",id:"a-warning-about-custom-primarykey-\ufe0f\ufe0f\ufe0f",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"access-control"},"Access Control"),(0,o.kt)("p",null,'Verdant has limited access for document access control in sync\'d environments. This is still an early days, kicking-the-tires approach. As such I\'ve limited the power of it to two modes: "shared" (default) and "private" (only devices you own can see the document).'),(0,o.kt)("p",null,"Access control happens at the root document level only. Sub-fields cannot be independently authorized."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"While not currently available, the goal of incubating this feature is to allow granting document access to specific users by ID, or groups of users by shared group assignment / roles. I'm testing real-world behavior before expanding use cases though.")),(0,o.kt)("p",null,"To create a document with access control, pass an ",(0,o.kt)("inlineCode",{parentName:"p"},"access")," parameter to the second object of ",(0,o.kt)("inlineCode",{parentName:"p"},".put"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"client.recipes.put({ title: 'Penne alla Vodka' }, { access: 'private' });\n")),(0,o.kt)("p",null,"Currently only ",(0,o.kt)("inlineCode",{parentName:"p"},"private")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"shared")," are supported. ",(0,o.kt)("inlineCode",{parentName:"p"},"shared")," does nothing, really; all documents default to shared already and no access info is assigned when using it."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"private")," documents are authorized for access by all replicas connecting to sync which are assigned a token for the User ID of the replica which created the document. The server will refuse to replicate any data related to the document to any unauthorized replicas, so other users shouldn't even be aware that the document exists."),(0,o.kt)("h2",{id:"changing-access"},"Changing access"),(0,o.kt)("p",null,"Because access control is embedded into document operations, and Verdant history is immutable, document access is also immutable. Right now the only way to 'change' access is to create a copy of the document. You can do this like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const publicRecipe = await client.recipes.clone(privateRecipe, {\n    access: 'shared',\n});\n")),(0,o.kt)("p",null,"This creates a new document. If you want to 'move' a document from public to private or vice versa, you should delete the old one."),(0,o.kt)("p",null,"This is not the most convenient thing in the world, sure, but anything else would create unexpected behavior. For example, changing a document's access partway through its history, even with a full re-initialization, would create inconsistent document history across replicas. If you doubt the importance of this, consider what would happen if you took a public document and made it private from the perspective of a replica which was not part of the private access group. The replica would have no indication the document was altered and continue using it as before -- and those public changes would also get mashed together with changes on the now-private document. Maybe I haven't explained this well, but just trust me: convenient or no, it's best to keep access immutable and make a new document."),(0,o.kt)("h2",{id:"a-warning-about-custom-primarykey-\ufe0f\ufe0f\ufe0f"},"A warning about custom ",(0,o.kt)("inlineCode",{parentName:"h2"},"primaryKey")," \u26a0\ufe0f\u26a0\ufe0f\u26a0\ufe0f"),(0,o.kt)("p",null,"Using a specific 'well known' value for a document's primary key can have benefits, using a primary key value which can collide with another document's primary key is NOT SUPPORTED for documents with access control. Two separate documents, authorized to different users, which have the same primary key, will essentially share a history, which will produce confusing results (similar to the problems with mutable access above)."),(0,o.kt)("p",null,"Using a non-random primary key is only really useful to ensure 'canonical' status of a document in synchronized scenarios. Given that authorized documents aren't synced to all replicas, this canonicity doesn't make as much sense. If you need to be able to look up an access-controlled document by a 'well known' identifier, please use a custom index and ",(0,o.kt)("inlineCode",{parentName:"p"},"findOne")," instead. This won't guarantee uniqueness of that identifier, but it will at least work in a sane way."),(0,o.kt)("p",null,"If this doesn't meet your requirements, we can talk and maybe there's a better solution."))}d.isMDXComponent=!0}}]);