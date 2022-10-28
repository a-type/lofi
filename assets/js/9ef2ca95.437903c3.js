"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6618],{4852:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(9231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),y=o,h=d["".concat(c,".").concat(y)]||d[y]||p[y]||a;return t?r.createElement(h,s(s({ref:n},l),{},{components:t})):r.createElement(h,s({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(7626),o=(t(9231),t(4852));const a={sidebar_position:2},s="Authorizing Sync",i={unversionedId:"sync/authorization",id:"sync/authorization",title:"Authorizing Sync",description:"To connect to sync, you must create an auth endpoint. This can be done automatically on the same server you use for sync, or you can define a custom endpoint on a different server.",source:"@site/docs/sync/authorization.md",sourceDirName:"sync",slug:"/sync/authorization",permalink:"/docs/sync/authorization",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sync/authorization.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sync Server",permalink:"/docs/sync/server"},next:{title:"Connecting a Client",permalink:"/docs/sync/client"}},c={},u=[],l={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authorizing-sync"},"Authorizing Sync"),(0,o.kt)("p",null,"To connect to sync, you must create an auth endpoint. This can be done automatically on the same server you use for sync, or you can define a custom endpoint on a different server."),(0,o.kt)("p",null,"Your endpoint must determine a ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libraryId")," for the connecting client and provide them to a ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenProvider"),", then return the created access token and the sync endpoint URL as JSON."),(0,o.kt)("p",null,"Below is an example of a basic auth endpoint which gets a session for the request (according to custom logic you should provide)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Request, Response } from 'express';\nimport { TokenProvider } from '@lo-fi/server';\n\nconst tokenProvider = new TokenProvider({\n    // this must be the exact same secret as the one you supplied to Server\n    secret: process.env.LOFI_SECRET!,\n});\n\nasync function getLoginSession(req: Request) {\n    // here you would, say, read a cookie value and retrieve\n    // a session from a database, or decode a JWT.\n}\n\nfunction lofiHandler(req: Request, res: Response) {\n    const session = await getLoginSession(req);\n    if (!session) {\n        return res.status(401).send('Please log in');\n    }\n\n    // this is just one way to decide what library the user can\n    // sync to with this token. you might instead store\n    // the user's library in their session, or use their userId\n    // as a personal library ID. Library ID is up to you, but\n    // every user who is given access to the same library will\n    // be interacting with the same data!\n    const libraryId = req.params.libraryId;\n\n    // TODO: before creating at token, if your library ID was determined\n    // by a user-supplied value (such as our request param above),\n    // you should probably authorize access for the client user.\n\n    const token = tokenProvider.getToken({\n        userId: session.userId,\n        libraryId: session.planId,\n    });\n\n    res.status(200).json({\n        accessToken: token,\n        // change this line to point to the correct host for your sync\n        // server. if you have multiple environments, this must take them\n        // into account.\n        syncEndpoint: `http://localhost:3000/lofi`,\n    });\n}\n")),(0,o.kt)("p",null,"This endpoint, wherever you choose to host it, will be supplied to the client to connect, authorize, and start syncing with your server."),(0,o.kt)("p",null,"Although it may seem cumbersome to have a separate endpoint for auth and sync, this flexibility allows you to host your main app server separately from your lo-fi sync server, or even implement advanced architectures like spinning up a new server for each library."))}p.isMDXComponent=!0}}]);