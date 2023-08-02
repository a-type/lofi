"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4461],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(7626),r=(n(79),n(8570));const a={sidebar_position:6},l="Synchronizing files",o={unversionedId:"sync/files",id:"sync/files",title:"Synchronizing files",description:"When you create files locally, they are flagged as unsynced until you next go online.",source:"@site/docs/sync/files.md",sourceDirName:"sync",slug:"/sync/files",permalink:"/docs/sync/files",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Presence & Profiles",permalink:"/docs/sync/presence"},next:{title:"Advanced: Transports",permalink:"/docs/sync/transports"}},s={},c=[{value:"Storing files",id:"storing-files",level:2},{value:"Exposing a file upload endpoint",id:"exposing-a-file-upload-endpoint",level:2},{value:"When the server cleans up files",id:"when-the-server-cleans-up-files",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"synchronizing-files"},"Synchronizing files"),(0,r.kt)("p",null,"When you create files locally, they are flagged as unsynced until you next go online."),(0,r.kt)("p",null,"When going online, any file data which was unsynced is sent to the the server. If it fails to upload, depending on the response code, a retry will be scheduled later."),(0,r.kt)("p",null,"If you're already online when a local file is created, it will be uploaded ASAP."),(0,r.kt)("p",null,"Meanwhile, in parallel, the normal Verdant data sync protocol will synchronize any associated field which references that file. This means that peers may receive data about a file field before the client that created it has finished uploading the file itself, and well before that client can proceed to download it."),(0,r.kt)("p",null,"For this reason, you should always handle the ",(0,r.kt)("inlineCode",{parentName:"p"},".loading === true")," case on any EntityFile you use, and probably ",(0,r.kt)("inlineCode",{parentName:"p"},".failed === true")," as well in case the server has problems."),(0,r.kt)("h2",{id:"storing-files"},"Storing files"),(0,r.kt)("p",null,"You must provide a file storage backend to the server to sync files. This can be the default ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalFileStorage")," backend which is exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@verdant-web/server"),", or you can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileStorage")," interface yourself to connect to a different file storage service (like S3, etc)."),(0,r.kt)("p",null,"If you don't supply a storage backend, syncing files will fail."),(0,r.kt)("h2",{id:"exposing-a-file-upload-endpoint"},"Exposing a file upload endpoint"),(0,r.kt)("p",null,"If you use the built-in Verdant server (via calling ",(0,r.kt)("inlineCode",{parentName:"p"},"server.listen()"),") the file endpoint will be created for you."),(0,r.kt)("p",null,"If you integrate the Verdant server into a custom HTTP server, you must route an endpoint to for files to ",(0,r.kt)("inlineCode",{parentName:"p"},"server.handleFileRequest"),". The endpoint must end in ",(0,r.kt)("inlineCode",{parentName:"p"},"/files/<file id>")," and accept both POST and GET. For example, an Express middleware:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"app.use('/Verdant/files/:fileId', lofiServer.handleFileRequest);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TODO: make this friendlier.")),(0,r.kt)("h2",{id:"when-the-server-cleans-up-files"},"When the server cleans up files"),(0,r.kt)("p",null,"The server has a broader view of the overall sync status of the library, so it hangs onto files a little longer than clients and waits to be sure the file is officially pending deletion."),(0,r.kt)("p",null,'"Officially pending deletion" means:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The field associated with the file is deleted and all pending operations the server knows about have been applied to it"),(0,r.kt)("li",{parentName:"ul"},"Since the field has been rebased to this state, that means all clients have acknowledged the deletion as it currently stands")),(0,r.kt)("p",null,"However, these conditions don't guarantee the file field will not be restored by a client - specifically if there is an 'undo delete' operation waiting on a client's undo stack."),(0,r.kt)("p",null,"To guard against this contingency, the server only marks the file's metadata as ",(0,r.kt)("inlineCode",{parentName:"p"},"pendingDeleteAt: <timestamp>"),". The next time all replicas disconnect from the library, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"pendingDeleteAt")," timestamp is older than 1 day, the file will be permanently deleted. This is a heuristic more than a guarantee, but it's a reasonable tradeoff against having to synchronize undo stack states."))}p.isMDXComponent=!0}}]);