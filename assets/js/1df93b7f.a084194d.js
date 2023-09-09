"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3237],{3310:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(79),l=n(9841),s=n(7454),r=n(3267);const o={main:"main_iUjq",heroBanner:"heroBanner_qdFl",heroContent:"heroContent_mKPX",features:"features_cAfv",title:"title_GqtP",buttons:"buttons_AeoN",scene:"scene_DH5P",video:"video__Zov",featuresTitle:"featuresTitle_MgoA",musing:"musing_iC7b",explanation:"explanation_FK9Q",featureStep:"featureStep_wfSU",featureStepReverse:"featureStepReverse_BopD",featureStepInfo:"featureStepInfo_zxuZ",featureStepCode:"featureStepCode_KwCm",heroCode:"heroCode_u6tt",heroCodeMobile:"heroCodeMobile_f2Pm"};var i=n(2489),c=n(4394);function u(){const{siteConfig:e}=(0,r.Z)();return a.createElement("main",{className:o.main},a.createElement("header",{className:(0,l.Z)("hero",o.heroBanner)},a.createElement("div",{className:o.scene},a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,src:"/Silence-sm.m4v",className:o.video})),a.createElement("div",{className:(0,l.Z)("container",o.heroContent)},a.createElement("h1",{className:o.title},e.title,"\ud83c\udf3f"),a.createElement("h2",{className:o.subtitle},"is a framework and philosophy for small, sustainable, human web apps"),a.createElement("div",{className:o.buttons},a.createElement(s.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Read the documentation")))),a.createElement(i.Z,{language:"typescript",showLineNumbers:!0,title:"app.ts",className:`${o.heroCode} ${o.heroCodeMobile}`},"// initialize your data directly on\n// the client\nconst post = await client.posts.put({\n\ttitle: 'Hello World'\n});\n\n// reactively update your UI\npost.subscribe(\n\t'change',\n\t() => {\n\t\tbodyText.innerText =\n\t\t\tpost.get('content');\n\t},\n);\n\n// synchronously interact with data\npost.set(\n\t'content',\n\t`Verdant makes both local storage\n\tand synchronized data feel as simple\n\tas plain objects.`\n);\n\n// build rich apps with\n// simple tools\npost.set('image', fileInput.files[0]);\npost.get('tags').push('local-first');\n\n// now your post is saved locally\n// and synced to the server,\n// even if you're offline\n// or refresh the page\n\t\t\t\t\t"),a.createElement(i.Z,{language:"typescript",showLineNumbers:!0,title:"app.ts",className:`${o.heroCode}`},"// initialize your data directly on the client\nconst post = await client.posts.put({\n\ttitle: 'Hello World'\n});\n\n// reactively update your UI\npost.subscribe(\n\t'change',\n\t() => bodyText.innerText = post.get('content'),\n);\n\n// synchronously interact with data\npost.set(\n\t'content',\n\t`Verdant makes both local storage and synchronized data\n\tfeel as simple as plain objects.`\n);\n\n// build rich apps with simple tools\npost.set('image', fileInput.files[0]);\npost.get('tags').push('local-first');\n\n// now your post is saved locally and synced to the server,\n// even if you're offline or refresh the page\n\t\t\t\t\t"),a.createElement("section",{className:o.musing},a.createElement("p",null,"There is a little plant on a shelf near my desk. It's no larger than the size of a dime. For years I've watered it, but it never changes. It neither grows nor dies, but it is alive."),a.createElement("p",null,"Some living things must wait patiently for their season."),a.createElement("p",null,"Some living things are only meant to be what they are."),a.createElement("p",null,"They are no less alive."),a.createElement("p",null,a.createElement("strong",null,"Verdant")," is an approach to software which aims to make space for these overlooked forms of life. Nurture your idea at its own pace, free from the expectations of endless growth and pressures of cycles of debt.")),a.createElement("section",{className:o.explanation},a.createElement("p",null,a.createElement("strong",null,"Verdant")," gives access to this new-old way of building software to modern web developers, leveraging established and familiar technologies."),a.createElement("p",null,"On a technical level, it allows you to:"),a.createElement("ul",null,a.createElement("li",null,a.createElement("details",null,a.createElement("summary",null,"\ud83d\udcf1 ",a.createElement("span",null,"Run your whole web app on the user's device")),a.createElement("p",null,"Using IndexedDB and built-in reactive queries and objects,"," ",a.createElement("strong",null,"Verdant")," apps feels are easy to make, fast, and fun."))),a.createElement("li",null,a.createElement("details",null,a.createElement("summary",null,"\ud83d\udcf6 ",a.createElement("span",null,"Work offline and leverage advanced functionality")),a.createElement("p",null,a.createElement("strong",null,"Verdant")," apps can work offline when configured with a service worker, and feature tools like undo and file storage out of the box."))),a.createElement("li",null,a.createElement("details",null,a.createElement("summary",null,"\ud83d\udd03 ",a.createElement("span",null,"Sync data between devices")),a.createElement("p",null,a.createElement("strong",null,"Verdant")," apps can sync data between devices by connecting to a plain Node server with a SQLite database. Authenticate and store additional user data using familiar technologies of your choosing.")))),a.createElement("p",null,"I made ",a.createElement("strong",null,"Verdant")," to build my cooking app"," ",a.createElement("a",{href:"https://gnocchi.club"},"Gnocchi"),", and I've open-sourced it for anyone else with similar goals. My ambition is not to revolutionize computing, it's only to build sustainable, human apps."),a.createElement("p",null,"To do this, I've adopted a few principles:"),a.createElement("ul",null,a.createElement("li",null,a.createElement("details",null,a.createElement("summary",null,"\ud83c\udf3f ",a.createElement("span",null,"Grow at your own pace")),a.createElement("p",null,"Not every idea must produce billion-dollar returns. Sometimes it's enough to let something exist, and see what comes of it."," ",a.createElement("strong",null,"Verdant")," is designed to limit the cost of producing and maintaining small apps. The simplest, local-only"," ",a.createElement("strong",null,"Verdant")," app costs only as much as your domain name."))),a.createElement("li",null,a.createElement("details",null,a.createElement("summary",null,"\ud83c\udf31 ",a.createElement("span",null,"Operate sustainably")),a.createElement("p",null,a.createElement("strong",null,"Verdant")," is designed to help you earn revenue in proportion to your costs, by doing the simple thing: charging for access to costly services, like servers. Despite manifestos against endless-growth-capitalism, I don't think profit is a dirty word. A sustainable business is one which can pay for itself, including your time and effort."))),a.createElement("li",null,a.createElement("details",null,a.createElement("summary",null,"\ud83d\udeb2 ",a.createElement("span",null,"Practicality over perfection")),a.createElement("p",null,"In a vacuum, software developers gravitate toward imagined ideas of perfect systems. But we are human, and our users are human. Often what humans want is not perfection someday, but usefulness today. ",a.createElement("strong",null,"Verdant")," embraces simple solutions which produce real outcomes, and avoids complex systems pursuing abstract perfection."))))),a.createElement("section",{className:o.features},a.createElement("h2",{className:o.featuresTitle},"How to use Verdant"),a.createElement("div",{className:o.featureStep},a.createElement("div",{className:o.featureStepInfo},a.createElement("h3",null,"Build a schema"),a.createElement("ul",null,a.createElement("li",null,"Define model fields, defaults, and query indexes"),a.createElement("li",null,"Schemas are TypeScript, so you can use familiar code and modules"),a.createElement("li",null,"Create migrations as your schema evolves"))),a.createElement("div",{className:o.featureStepCode},a.createElement(i.Z,{language:"typescript",showLineNumbers:!0,title:"schema.ts"},"import {\n\tcollection,\n\tschema\n} from '@verdant-web/store';\nimport cuid from 'cuid';\n\nconst posts = collection({\n\tname: 'post',\n\tprimaryKey: 'id',\n\tfields: {\n\t\tid: {\n\t\t\ttype: 'string',\n\t\t\tdefault: cuid,\n\t\t},\n\t\ttitle: {\n\t\t\ttype: 'string',\n\t\t},\n\t\tbody: {\n\t\t\ttype: 'string',\n\t\t},\n\t\tcreatedAt: {\n\t\t\ttype: 'number',\n\t\t\tdefault: Date.now,\n\t\t},\n\t\timage: {\n\t\t\ttype: 'file',\n\t\t\tnullable: true,\n\t\t}\n\t},\n});\n\nexport default schema({\n\tversion: 1,\n\tcollections: {\n\t\tposts\n\t}\n});\n"))),a.createElement("div",{className:(0,l.Z)(o.featureStep,o.featureStepReverse)},a.createElement("div",{className:o.featureStepInfo},a.createElement("h3",null,"Generate a client"),a.createElement("ul",null,a.createElement("li",null,"Generated code is type-safe to your schema"),a.createElement("li",null,"Queries and models are reactive"),a.createElement("li",null,"React hook bindings included"))),a.createElement("div",{className:o.featureStepCode},a.createElement(i.Z,{language:"typescript",showLineNumbers:!0,title:"client.ts"},"import {\n\tClientDescriptor,\n\tcreateHooks,\n\tmigrations\n} from './generated.js';\n\nexport const clientDescriptor =\n\tnew ClientDescriptor({\n\t\tmigrations,\n\t\tnamespace: 'demo',\n\t})\n\n// React hooks are created for you\nexport const hooks = createHooks();\n\nasync function getAllPosts() {\n\tconst client = await\n\t\tclientDescriptor.open();\n\tconst posts = await client.posts\n\t\t.findAll().resolved;\n\treturn posts;\n}\n"))),a.createElement("div",{className:o.featureStep},a.createElement("div",{className:o.featureStepInfo},a.createElement("h3",null,"Store local data"),a.createElement("ul",null,a.createElement("li",null,"Store data in IndexedDB, no server or internet connection required"),a.createElement("li",null,"Undo/redo and optimistic updates out of the box"),a.createElement("li",null,"Assign files directly to model fields"))),a.createElement("div",{className:o.featureStepCode},a.createElement(i.Z,{language:"typescript",showLineNumbers:!0,title:"app.tsx"},"const post = await client.posts.put({\n\ttitle: 'All the Trees of the Field will Clap their Hands',\n\tbody: '',\n});\n\npost.set('body', 'There is a little plant on a shelf near my desk...');\n\nfileInput.addEventListener('change', () => {\n\tconst file = fileInput.files[0];\n\tpost.set('image', file);\n});\n\nclient.undoHistory.undo();\n"))),a.createElement("div",{className:(0,l.Z)(o.featureStep,o.featureStepReverse)},a.createElement("div",{className:(0,l.Z)(o.featureStepInfo)},a.createElement("h3",null,"Sync with a server"),a.createElement("ul",null,a.createElement("li",null,"Access data across devices"),a.createElement("li",null,"Share a library with collaborators"),a.createElement("li",null,"Peer presence data and profile info"),a.createElement("li",null,"Works realtime, pull-based, even switching dynamically"))),a.createElement("div",{className:o.featureStepCode},a.createElement(i.Z,{language:"typescript",showLineNumbers:!0,title:"server.ts"},"import { Server } from '@verdant-web/server';\n\nconst server = new Server({\n\tdatabaseFile: 'db.sqlite',\n\ttokenSecret: 'secret',\n\tprofiles: {\n\t\tget: async (userId: string) => {\n\t\t\treturn {\n\t\t\t\tid: userId,\n\t\t\t}\n\t\t}\n\t}\n});\n\nserver.listen(3000);\n")))),a.createElement("section",{style:{marginBottom:"80px"}},a.createElement("div",{className:o.buttons},a.createElement(s.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get Started"))))}function m(){return a.createElement(c.Z,null,a.createElement(u,null))}}}]);