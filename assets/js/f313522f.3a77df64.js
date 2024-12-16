"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8051],{369:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,y=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(8084),r=(n(7378),n(369));const o={sidebar_position:7},i="File storage",l={unversionedId:"local-storage/files",id:"local-storage/files",title:"File storage",description:"To work with files in Verdant, you add a file type field to a document. From there it acts similar to other fields, with a few notable peculiarities.",source:"@site/docs/local-storage/files.md",sourceDirName:"local-storage",slug:"/local-storage/files",permalink:"/docs/local-storage/files",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Undo, Redo, and Batching",permalink:"/docs/local-storage/undo"},next:{title:"Exporting and importing data",permalink:"/docs/local-storage/export"}},s={},c=[{value:"Asynchronous loading",id:"asynchronous-loading",level:3},{value:"Where are files stored?",id:"where-are-files-stored",level:3},{value:"How are files cleaned up?",id:"how-are-files-cleaned-up",level:3},{value:"Managing files that aren&#39;t associated with a particular document",id:"managing-files-that-arent-associated-with-a-particular-document",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"file-storage"},"File storage"),(0,r.yg)("p",null,"To work with files in Verdant, you add a ",(0,r.yg)("inlineCode",{parentName:"p"},"file")," type field to a document. From there it acts similar to other fields, with a few notable peculiarities."),(0,r.yg)("p",null,"You can call ",(0,r.yg)("inlineCode",{parentName:"p"},".set('fileField', file)")," on your document with any ",(0,r.yg)("inlineCode",{parentName:"p"},"File")," object - for example, one you get from a change event on an ",(0,r.yg)("inlineCode",{parentName:"p"},'<input type="file">'),"."),(0,r.yg)("p",null,"When you call ",(0,r.yg)("inlineCode",{parentName:"p"},".get('fileField')"),", you'll receive an immutable EntityFile object which represents your stored file. Access the ",(0,r.yg)("inlineCode",{parentName:"p"},".url")," field to make the file available in your app (for example, as an ",(0,r.yg)("inlineCode",{parentName:"p"},"<img>")," tag's ",(0,r.yg)("inlineCode",{parentName:"p"},"src"),")."),(0,r.yg)("h3",{id:"asynchronous-loading"},"Asynchronous loading"),(0,r.yg)("p",null,"Loading every file on every document you query would quickly become a memory hog, so instead Verdant waits until you access one to begin loading. The ",(0,r.yg)("inlineCode",{parentName:"p"},"EntityFile")," you get from your document instance will have a ",(0,r.yg)("inlineCode",{parentName:"p"},".loading")," property which is true while the file is being loaded. You can subscribe to ",(0,r.yg)("inlineCode",{parentName:"p"},"change")," events to listen for loading completion."),(0,r.yg)("p",null,"Until a file is loaded the ",(0,r.yg)("inlineCode",{parentName:"p"},".url")," field will be ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,r.yg)("p",null,"If the file fails to load for some reason, ",(0,r.yg)("inlineCode",{parentName:"p"},".failed")," will become ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,r.yg)("p",null,"You should handle these cases! In a synchronized world, especially, they could come up - even if only temporarily, while the client synchronizes or the server recovers from downtime."),(0,r.yg)("h3",{id:"where-are-files-stored"},"Where are files stored?"),(0,r.yg)("p",null,"For locally created files, Verdant stores the raw file data directly in IndexedDB. This means locally created files work offline and don't require a server to use."),(0,r.yg)("h3",{id:"how-are-files-cleaned-up"},"How are files cleaned up?"),(0,r.yg)("p",null,"Verdant decides when to delete local file data based on the following criteria:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The associated document field has been either replaced or deleted"),(0,r.yg)("li",{parentName:"ul"},"the document has rebased (squashed) all pending changes to that field")),(0,r.yg)("p",null,'To Verdant, this means "that field is gone and there\'s no way for this client to get it back." It considers any such file fields safe for local deletion.'),(0,r.yg)("p",null,"You might think about the undo feature! But when a file is 'deleted' in this sense, it's only marked for deletion."),(0,r.yg)("p",null,"It ",(0,r.yg)("em",{parentName:"p"},"is")," possible, but unlikely, if you're using sync, for such a file field to be restored (for example, a peer may have committed a change which undoes a deletion timestamped after local changes). But in such a scenario, Verdant will automatically re-fetch the file metadata from the server. For more information about files in a server-synchronized world, see ",(0,r.yg)("a",{parentName:"p",href:"../sync/files"},"Synchronizing files"),"."),(0,r.yg)("h2",{id:"managing-files-that-arent-associated-with-a-particular-document"},"Managing files that aren't associated with a particular document"),(0,r.yg)("p",null,"Perhaps you want to just have a collection of ",(0,r.yg)("em",{parentName:"p"},"files"),", not necessarily attached to one field on one particular document. You still have to manage these files in a schema, but you can create a new collection just for those files."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const storedFiles = collection({\n    name: 'storedFile',\n    primaryKey: 'id',\n    fields: {\n        id: {\n            type: 'string',\n        },\n        file: {\n            type: 'file',\n        },\n    },\n});\n")),(0,r.yg)("p",null,"You could reference a file stored in this way by its ID from any number of documents, or in other state."))}p.isMDXComponent=!0}}]);