"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6295],{8570:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(79);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7626),o=(t(79),t(8570));const i={sidebar_position:5},r="React",s={unversionedId:"react",id:"react",title:"React",description:"Verdant has React hooks generation. To enable it, pass --react to the CLI. A new module react.js will be emitted in the output directory. It exports one function, createHooks. Call it to construct hooks for your Verdant storage.",source:"@site/docs/react.md",sourceDirName:".",slug:"/react",permalink:"/docs/react",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tips and tricks for working in distributed systems",permalink:"/docs/sync/tips-and-tricks"},next:{title:"CLI",permalink:"/docs/cli"}},l={},c=[{value:"Context",id:"context",level:2},{value:"Suspense",id:"suspense",level:2},{value:"Typing of presence",id:"typing-of-presence",level:2},{value:"Custom mutation hooks",id:"custom-mutation-hooks",level:2},{value:"Usage examples",id:"usage-examples",level:2},{value:"Basic",id:"basic",level:3},{value:"<code>useField</code> hook",id:"usefield-hook",level:3},{value:"Advanced: changing client libraries",id:"advanced-changing-client-libraries",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react"},"React"),(0,o.kt)("p",null,"Verdant has React hooks generation. To enable it, pass ",(0,o.kt)("inlineCode",{parentName:"p"},"--react")," to the ",(0,o.kt)("a",{parentName:"p",href:"./local-storage/generate-client"},"CLI"),". A new module ",(0,o.kt)("inlineCode",{parentName:"p"},"react.js")," will be emitted in the output directory. It exports one function, ",(0,o.kt)("inlineCode",{parentName:"p"},"createHooks"),". Call it to construct hooks for your Verdant storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ClientDescriptor, ServerSync } from './client/index.js';\nimport { createHooks } from './client/react.js';\nimport migrations from './migrations.js';\n\nconst clientDesc = new ClientDescriptor({\n    namespace: 'todos',\n    migrations,\n    sync: {\n        authEndpoint: 'https://your.server/auth/sync',\n        initialPresence: {\n            emoji: '',\n        },\n    },\n});\n\n// export your generated hooks\nexport const hooks = createHooks();\n")),(0,o.kt)("p",null,"It will generate named hooks based on each document collection, plus a few utility hooks. For example, if you have the collection ",(0,o.kt)("inlineCode",{parentName:"p"},"todoItems"),", you will get these hooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useAllTodoItems"),": pass an index query to filter the list of returned items."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useOneTodoItem"),": pass an index query to filter the list of returned items, and only take the first match."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useTodoItem"),": Retrieves one document. You pass in an id."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useWatch"),': pass a "live document" to this and the component will update when that document changes. An unfortunate necessity of the WIP reactive object approach.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useSelf"),": returns your own presence."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"usePeerIds"),": returns an array of string user IDs of peers. Good for iterating over peers to render them."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"usePeer"),": pass a peer's user ID to retrieve their presence."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useViewId"),": pass a unique ID for a 'view' and the current replica's presence will be marked as 'on' that view."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useViewPeers"),": returns all peers on the same view as the current replica."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useField"),": pass an entity and a key, and this returns a bunch of useful stuff for working with a particular field. See below."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useSyncStatus"),": returns a boolean indicating whether sync is active or not.")),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"In addition to the generated hooks you also get a ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider"),". Pass your ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientDescriptor")," instance to ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," to provide a client for your hooks to use."),(0,o.kt)("p",null,"By using a Context in this way, you can instantiate different clients for the same schema and change the library your app is interacting with. See the advanced usage below."),(0,o.kt)("h2",{id:"suspense"},"Suspense"),(0,o.kt)("p",null,"The hooks use Suspense so that you don't have to write loading state conditional code in your components. All hooks return data directly. If the data is not ready, they suspend."),(0,o.kt)("p",null,"Wrap your app in a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Suspense>")," to handle this. You can create multiple layers of Suspense to handle loading more granularly."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks.Provider")," component has a Suspense boundary built-in as a final fallback, to prevent state loss further up the tree when loading. You can customize the fallback rendering by passing a ",(0,o.kt)("inlineCode",{parentName:"p"},"suspenseFallback")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks.Provider"),"."),(0,o.kt)("h2",{id:"typing-of-presence"},"Typing of presence"),(0,o.kt)("p",null,"By default, create hooks have ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," types for all presence values. To synchronize presence typings with your main client, provide the same Presence and Profile typings for both:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Presence {\n    emoji: string;\n}\n\nexport interface Profile {\n    // any data you may have put in profiles on the server\n}\n\nconst clientDesc = new ClientDescriptor<Presence, Profile>({\n    // ...\n});\n\n// for React support, also pass the typing arguments to createHooks\nexport const hooks = createHooks<Presence, Profile>();\n")),(0,o.kt)("h2",{id:"custom-mutation-hooks"},"Custom mutation hooks"),(0,o.kt)("p",null,"To create reusable hooks which utilize the client, you can chain ",(0,o.kt)("inlineCode",{parentName:"p"},".withMutations")," from the created hooks object and add your own custom hooks which take ",(0,o.kt)("inlineCode",{parentName:"p"},"client")," as a first parameter."),(0,o.kt)("p",null,"This can help encapsulate custom behaviors, instead of ad-hoc calling ",(0,o.kt)("inlineCode",{parentName:"p"},"useClient()")," and re-implementing them in multiple components."),(0,o.kt)("p",null,"Of course, you could do this in your own code; this is purely for convenience."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const hooks = createHooks<Presence, Profile>().withMutations({\n    useAddItem: (client) => {\n        return useCallback(\n            async (init: ItemInit) => {\n                const item = await client.items.put(init, { undoable: false });\n                analytics.reportItemCreated(item);\n                return item;\n            },\n            [client],\n        );\n    },\n});\n")),(0,o.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,o.kt)("h3",{id:"basic"},"Basic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Todos() {\n    const items = hooks.useAllTodoItems({\n        index: {\n            where: 'indexableDone',\n            equals: 'false',\n        },\n    });\n\n    return (\n        <ul>\n            {items.map((item) => (\n                <li key={item.get('id')}>{item.get('content')}</li>\n            ))}\n        </ul>\n    );\n}\n\nfunction App() {\n    return (\n        <Suspense fallback={<div>Loading...</div>}>\n            <hooks.Provider value={clientDescriptor}>\n                <Todos />\n            </hooks.Provider>\n        </Suspense>\n    );\n}\n")),(0,o.kt)("h3",{id:"usefield-hook"},(0,o.kt)("inlineCode",{parentName:"h3"},"useField")," hook"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useField")," hook provides some convenient tools for changing single entity fields."),(0,o.kt)("p",null,"The hook returns an object with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),": the live value of the field"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setValue"),": a setter to update the field"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"inputProps"),": props you can spread directly to an ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"textarea")," to wire it up"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"presence"),": data about other replicas interacting with the field")),(0,o.kt)("p",null,"The hook automatically interprets boolean field values for use with checkbox inputs. You don't even need to pass ",(0,o.kt)("inlineCode",{parentName:"p"},'type="checkbox"'),", just spread ",(0,o.kt)("inlineCode",{parentName:"p"},"inputProps"),"."),(0,o.kt)("p",null,"It also tracks presence on fields, starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"blur"),". The local replica will have its presence marked as editing the field for up to a minute after any modification. This presence is accessible to other replicas via the same ",(0,o.kt)("inlineCode",{parentName:"p"},"useField")," presence data, so you can show avatars or disable editing, or whatever."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// Note is a Verdant entity\nfunction NoteEditor({ note }: { note: Note }) {\n    const contentField = hooks.useField(note, 'content');\n    const pinnedField = hooks.useField(note, 'pinned');\n\n    return (\n        <div>\n            <textarea\n                {...contentField.inputProps}\n                // you can change field behavior when the field is 'in use'\n                // by someone else already\n                disabled={contentField.presence.occupied}\n            />\n            <input {...pinnedField.inputProps} />\n        </div>\n    );\n}\n")),(0,o.kt)("h3",{id:"advanced-changing-client-libraries"},"Advanced: changing client libraries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Todos() {\n    const items = hooks.useAllTodoItems({\n        index: {\n            where: 'indexableDone',\n            equals: 'false',\n        },\n    });\n\n    return (\n        <ul>\n            {items.map((item) => (\n                <li key={item.get('id')}>{item.get('content')}</li>\n            ))}\n        </ul>\n    );\n}\n\nfunction App({ libraryId }: { libraryId: string }) {\n    /**\n     * When the libraryId prop changes, we create a new client\n     * which authenticates against that library. The auth endpoint\n     * here would need to read that query parameter and create\n     * a token for the client to access the library.\n     */\n    const descriptor = useMemo(\n        () =>\n            new ClientDescriptor({\n                namespace: libraryId,\n                migrations,\n                sync: {\n                    authEndpoint: `http://localhost:3001/auth/sync?library=${libraryId}`,\n                    initialPresence: {},\n                    // start sync when ready - useful if you want to sync\n                    // in this setup. if you don't want to sync, that's fine too!\n                    autoStart: true,\n                },\n            }),\n        [libraryId],\n    );\n\n    useEffect(() => {\n        // when the client changes, shut it down.\n        return () => {\n            descriptor.close();\n        };\n    }, [descriptor]);\n\n    return (\n        <Suspense fallback={<div>Loading...</div>}>\n            <hooks.Provider value={clientDescriptor}>\n                <Todos />\n            </hooks.Provider>\n        </Suspense>\n    );\n}\n")))}u.isMDXComponent=!0}}]);