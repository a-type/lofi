"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3528],{369:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var o=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(l,".").concat(c)]||u[c]||y[c]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(8084),a=(n(7378),n(369));const r={sidebar_position:1},i="Your first Verdant app",s={unversionedId:"tutorials/your-first-app",id:"tutorials/your-first-app",title:"Your first Verdant app",description:"I find Verdant is pretty fun to work with once you get the hang of it, but it's not yet the most approachable framework. Not that it's particularly hard, more that I still haven't cracked how to make it immediately intuitive. So in the meantime, here's a walkthrough of creating a real app that will help show you how to make your own.",source:"@site/docs/tutorials/your-first-app.md",sourceDirName:"tutorials",slug:"/tutorials/your-first-app",permalink:"/docs/tutorials/your-first-app",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"}},l={},d=[{value:"What we&#39;re building",id:"what-were-building",level:2},{value:"What we&#39;re not building",id:"what-were-not-building",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Scaffold your app with <code>create @verdant-web/app</code>",id:"scaffold-your-app-with-create-verdant-webapp",level:2},{value:"Writing a schema",id:"writing-a-schema",level:2},{value:"Generating your client",id:"generating-your-client",level:2},{value:"Starting on the app",id:"starting-on-the-app",level:2},{value:"Test it out!",id:"test-it-out",level:2},{value:"Time for a schema revision!",id:"time-for-a-schema-revision",level:2},{value:"Writing our first migration",id:"writing-our-first-migration",level:2},{value:"Querying older entries",id:"querying-older-entries",level:2},{value:"Reactive updates",id:"reactive-updates",level:2},{value:"Building for deployment",id:"building-for-deployment",level:2},{value:"I want to point out...",id:"i-want-to-point-out",level:2},{value:"More things to explore",id:"more-things-to-explore",level:2}],p={toc:d},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"your-first-verdant-app"},"Your first Verdant app"),(0,a.yg)("p",null,"I find Verdant is pretty fun to work with once you get the hang of it, but it's not yet the most approachable framework. Not that it's particularly hard, more that I still haven't cracked how to make it immediately intuitive. So in the meantime, here's a walkthrough of creating a real app that will help show you how to make your own."),(0,a.yg)("h2",{id:"what-were-building"},"What we're building"),(0,a.yg)("p",null,"The app we'll be building is well-tailored for a small, local-first PWA. It's a daily mood tracker, which lets you record how you feel every day and see trends over time. Since it only stores a user's personal data, local-first is a great fit... rather than host everyone's data in one big database we have to pay for, we can make a great app with no server at all."),(0,a.yg)("h3",{id:"what-were-not-building"},"What we're not building"),(0,a.yg)("p",null,"Briefly, this won't include: any CSS, login, authentication, payments, or a server at all. Perhaps a later tutorial will focus on adding a server for sync and realtime."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,"The Verdant app scaffolding has a lot of opinions. Well, they happen to be my opinions, but I know they're not everyone's. Still, they'll be used in this tutorial."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It uses ",(0,a.yg)("inlineCode",{parentName:"li"},"pnpm"),". Run ",(0,a.yg)("inlineCode",{parentName:"li"},"npm i -g pnpm")," to install."),(0,a.yg)("li",{parentName:"ul"},"The code is all ESM. That means even for TypeScript files, you have to import with ",(0,a.yg)("inlineCode",{parentName:"li"},".js")," extensions."),(0,a.yg)("li",{parentName:"ul"},"The generated project is a monorepo, so you'll want to be familiar with how that works.")),(0,a.yg)("h2",{id:"scaffold-your-app-with-create-verdant-webapp"},"Scaffold your app with ",(0,a.yg)("inlineCode",{parentName:"h2"},"create @verdant-web/app")),(0,a.yg)("p",null,"You can use the scaffolding CLI to set up your repo."),(0,a.yg)("p",null,"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm create @verdant-web/app")," to run the bootstrapper. Choose the ",(0,a.yg)("inlineCode",{parentName:"p"},"local-only")," template for this project and give it a name."),(0,a.yg)("p",null,"This will get you started with a functional tooling set with a Vite-powered React app and a PWA service worker. It will also create your first Verdant schema."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'\u250c  create-verdant-app\n\u2502\n\u25c7  What template do you want to use?\n\u2502  The "local-only"     | A static webpage using Verdant for first-class IndexedDB DX (no sync)\n\u2502\n\u25c7  Where do you want to create your app?\n\u2502  ./mood-tracker\n\u2502\n\u25c7  What is the name of your app?\n\u2502  mood-tracker\n\u2502\n\u25c7  Copying complete\n\u2502\n\u25c7  Dependencies installed\n\u2502\n\u25c7  Client code generated\n\u2502\n\u25c7  Do you want to open the project in VS Code?\n\u2502  Yes\n\u2502\n\u2514  Done!\n')),(0,a.yg)("p",null,"Open your new project in an editor, and let's go ahead and create the first iteration of our app's schema."),(0,a.yg)("h2",{id:"writing-a-schema"},"Writing a schema"),(0,a.yg)("p",null,"Open up ",(0,a.yg)("inlineCode",{parentName:"p"},"./packages/verdant/src/schema.ts")," and let's get started!"),(0,a.yg)("p",null,"By default we've got an ",(0,a.yg)("inlineCode",{parentName:"p"},"items")," collection, an example akin to a to-do list. Let's modify our schema to match up to what our app will do."),(0,a.yg)("p",null,"Now it's time to get a little creative and start \"thinking in local-first.\" Suppose one day we want to add sync to our app. You could add the entry for May 3 on your phone while offline, then forget and add another entry for May 3 on your laptop. If we don't do this right, even with conflict resolution, you'll end up with 2 entries on May 3 -- and for our purposes, that would be confusing."),(0,a.yg)("p",null,"So to prevent this happening, it's time to get clever, and make the date our collection's primary key. Let's start from the schema below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import { collection, schema } from '@verdant-web/store';\n\nconst entries = collection({\n    name: 'entry',\n    primaryKey: 'date',\n    fields: {\n        date: {\n            type: 'string',\n            default: () => {\n                return new Date().toDateString();\n            },\n        },\n        mood: {\n            type: 'string',\n        },\n    },\n});\n\nexport default schema({\n    version: 1,\n    collections: {\n        entries,\n    },\n});\n")),(0,a.yg)("p",null,"Instead of a randomized ID, we're using the date string of the current day as the primary key. And yes, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"default")," function like that! It will run whenever a new document is created."),(0,a.yg)("p",null,"So now whenever any device creates an ",(0,a.yg)("inlineCode",{parentName:"p"},"entry")," on a particular day, they'll all get merged together, because they have the same primary key."),(0,a.yg)("p",null,"Now that we've got a basic schema ready, we can start using it."),(0,a.yg)("h2",{id:"generating-your-client"},"Generating your client"),(0,a.yg)("p",null,"To turn your schema into a full Verdant client, it's time to use the CLI. The scaffolded project we created has the CLI pre-configured to the ",(0,a.yg)("inlineCode",{parentName:"p"},"generate")," NPM script, so you can just run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm generate")," in the root directory."),(0,a.yg)("p",null,"The CLI reads your schema, compares it to the current client, and gives you some options. Since this is a new project, we're on schema version 1, and our schema starts out as WIP (work-in-progress)."),(0,a.yg)("p",null,"A WIP schema is a way to play around a bit with the shape of your data before committing to something. Once you bump your WIP schema to a production schema, you can deploy your app, but any further schema changes will need to be a new version with a new migration."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Our version 1 schema has a migration, too, which was generated by the CLI when we set up our project, but we don't really need to worry about it as there's no data to migrate. The version 1 migration is a good place to seed initial data, though.")),(0,a.yg)("p",null,"When we run the CLI this time, let's publish a production schema. Normally you'd probably wait longer and develop your app locally before doing a final production schema, but (spoilers) this tutorial is going to demonstrate schema version migrations a bit, so we'll pretend we're shipping this version of our schema to users."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u250c  \ud83c\udf3f Verdant CLI\n\u2502\n\u25c7  A WIP schema for version 1 is in progress. Choose a way to proceed:\n\u2502  \ud83d\udce6  Publish the final schema for version 1\n\u2502\n\u2502  \u2728 Applied new schema: version 1\n\u2502\n\u2514  \ud83c\udf3f Done!\n")),(0,a.yg)("h2",{id:"starting-on-the-app"},"Starting on the app"),(0,a.yg)("p",null,"Now we've got a fully typed client to work with, it's time to start making our app! Let's begin with a component that lets us add a new entry for today."),(0,a.yg)("p",null,"This code isn't going to be the simplest in the world, but I wanted something that demonstrates some real-world kind of problems you may want to solve. In this case, one problem is that we may not have an entry for today created yet, so we'll need to either create one or update an existing one when the user selects their mood. This means some branched logic, but it's not so bad, and it demonstrates some important ideas for how Verdant hooks work, too."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"// apps/web/src/components/entries/EntryCreator.tsx\nimport { hooks } from '@/store.js';\n\nexport function EntryCreator() {\n    // first we figure out the primary key for today's entry -\n    // that is, our current date string.\n    const today = new Date().toDateString();\n    // now we see if we have an entry already. this hook returns\n    // either an Entry or null. It will re-render the component if\n    // the entry is created by us _or_ someone else.\n    const todayEntry = hooks.useEntry(today);\n    // this hook gives us a reference to the Verdant client, which\n    // we can use to create a new Entry if one doesn't exist.\n    const client = hooks.useClient();\n\n    // here's the main logic for \"upserting\" an entry.\n    // NOTE: I know that 'bad' doesn't really fit the grammatical pattern of\n    // this typed mood value, that's on purpose. We'll fix it soon!\n    const onMoodChange = (mood: 'worst' | 'bad' | 'same' | 'better' | 'best') => {\n        // if we already have an entry, let's change its 'mood' field\n        if (todayEntry) {\n            // there is no need to 'await' here. all changes to existing documents\n            // in Verdant are synchronous\n            todayEntry.set('mood', mood);\n        } else {\n            // if we don't have an entry, we can 'put' a new one with today's\n            // date\n            client.entries.put({\n                date: today,\n                mood,\n            });\n        }\n    };\n\n    // this hook re-renders the component whenever the immediate fields\n    // of the Entry change. If `todayEntry` doesn't exist, it doesn't do\n    // anything. It also doesn't re-render for nested changes, unless\n    // you pass a config object as the second param.\n    hooks.useWatch(todayEntry);\n    // now we can get the current mood value for today's entry, if\n    // it exists.\n    const currentMood = todayEntry?.get('mood');\n\n    return (\n        <div>\n            <h2>How are you feeling today?</h2>\n            {/* Our buttons for mood entry will go here */}\n        </div>\n    );\n}\n")),(0,a.yg)("p",null,"For the actual mood entry buttons, there's nothing really Verdant-specific. I'm being really naive with this code, you'd probably want to create a reusable component or something, but this is functional."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"{\n    /* Put this where the other comment was */\n}\n<div style={{ display: 'flex', flexDirection: 'row' }}>\n    <button\n        style={{\n            background: currentMood === 'worst' ? 'lightblue' : 'white',\n        }}\n        onClick={() => onMoodChange('worst')}\n    >\n        \ud83d\ude2d\n    </button>\n    <button\n        style={{ background: currentMood === 'bad' ? 'lightblue' : 'white' }}\n        onClick={() => onMoodChange('bad')}\n    >\n        \ud83d\ude15\n    </button>\n    <button\n        style={{ background: currentMood === 'same' ? 'lightblue' : 'white' }}\n        onClick={() => onMoodChange('same')}\n    >\n        \ud83d\ude10\n    </button>\n    <button\n        style={{\n            background: currentMood === 'better' ? 'lightblue' : 'white',\n        }}\n        onClick={() => onMoodChange('better')}\n    >\n        \ud83d\ude42\n    </button>\n    <button\n        style={{ background: currentMood === 'best' ? 'lightblue' : 'white' }}\n        onClick={() => onMoodChange('best')}\n    >\n        \ud83d\ude01\n    </button>\n</div>;\n")),(0,a.yg)("p",null,"Let's drop this component on our ",(0,a.yg)("inlineCode",{parentName:"p"},"HomePage")," and delete the old ",(0,a.yg)("inlineCode",{parentName:"p"},"TodoList")," stuff while we're at it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { EntryCreator } from '@/components/entries/EntryCreator.jsx';\n\nexport interface HomePageProps {}\n\nexport function HomePage({}: HomePageProps) {\n    return (\n        <div>\n            <EntryCreator />\n        </div>\n    );\n}\n\nexport default HomePage;\n")),(0,a.yg)("h2",{id:"test-it-out"},"Test it out!"),(0,a.yg)("p",null,"Like that, we've already covered the core functionality of the app: creating daily entries and selecting a mood. That's genuinely it. You could build and ship this and it will work local-first and offline."),(0,a.yg)("p",null,"Time to try that for ourselves: run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm dev"),"."),(0,a.yg)("p",null,"At ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost:3000"),", you'll see your app! Click on an option and it will stay selected even if you reload the page. If you feel like it, set this tutorial aside and come back tomorrow and it should be back to no selection."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"A screenshot of 5 mood selector buttons. The &quot;same&quot; one is selected.",src:n(763).A,width:"487",height:"334"})),(0,a.yg)("h2",{id:"time-for-a-schema-revision"},"Time for a schema revision!"),(0,a.yg)("p",null,"That's a good starting point, but our app could do more. What if we show previous entries on the home screen? Also, while a plain string works ok for ",(0,a.yg)("inlineCode",{parentName:"p"},"mood"),", it would be preferable to have a proper typed value so we could be sure our data was consistent."),(0,a.yg)("p",null,"Let's take another pass at our schema. Reopen ",(0,a.yg)("inlineCode",{parentName:"p"},"schema.ts")," and make some changes:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import { collection, schema } from '@verdant-web/store';\n\nconst entries = collection({\n    name: 'entry',\n    primaryKey: 'date',\n    fields: {\n        date: {\n            type: 'string',\n            default: () => {\n                return new Date().toDateString();\n            },\n        },\n        mood: {\n            type: 'string',\n            // NEW!\n            options: ['worst', 'worse', 'same', 'better', 'best'],\n        },\n    },\n    // NEW!\n    indexes: {\n        date: {\n            field: 'date',\n        },\n    },\n});\n\nexport default schema({\n    version: 1,\n    collections: {\n        entries,\n    },\n});\n")),(0,a.yg)("p",null,"What did we change? We specified some concrete options for the ",(0,a.yg)("inlineCode",{parentName:"p"},"mood")," field (also notice how I've replaced ",(0,a.yg)("inlineCode",{parentName:"p"},"bad")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"worse")," here). We also added indexes to the document -- one for the ",(0,a.yg)("inlineCode",{parentName:"p"},"date")," field. This index will let us query on ",(0,a.yg)("inlineCode",{parentName:"p"},"date")," to show recent entries."),(0,a.yg)("p",null,"Now we can run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm generate")," again to make a new version of our schema. Let's make it another WIP version so we can test that our changes work in our app for what we want to build."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note that you don't bump your schema to ",(0,a.yg)("inlineCode",{parentName:"p"},"version: 2")," by hand. The CLI will do this for you.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u250c  \ud83c\udf3f Verdant CLI\n\u2502\n\u25c7  Schema version 1 already exists and yours is different. Choose a way to proceed:\n\u2502  \ud83c\udfd7\ufe0f  Start a new WIP schema for version 2\n\u2502\n\u2502  \u2b06\ufe0f  Bumped schema version to 2\n\u2502\n\u2502  \u2728 Applied new WIP schema: version 2\n\u2502\n\u25c7  A new migration was created for your schema changes. Open it in VS Code now?\n\u2502  Yes\n\u2502\n\u2514  \ud83c\udf3f Done!\n")),(0,a.yg)("p",null,"Let's also go ahead and open up our migration file at ",(0,a.yg)("inlineCode",{parentName:"p"},"packages/verdant/src/migrations/v2.ts"),". We have some work to do here."),(0,a.yg)("h2",{id:"writing-our-first-migration"},"Writing our first migration"),(0,a.yg)("p",null,"So as I've pointed out a few times now, I started this code using ",(0,a.yg)("inlineCode",{parentName:"p"},"bad")," as the second mood option, but in this new schema revision I've codified the second option should instead be ",(0,a.yg)("inlineCode",{parentName:"p"},"worse"),"."),(0,a.yg)("p",null,"Imagine if a user had been using our app and put in ",(0,a.yg)("inlineCode",{parentName:"p"},"bad")," for some of their entries already. ",(0,a.yg)("strong",{parentName:"p"},"This isn't just a thought exercise"),", you must learn to imagine scenarios like this when building local-first apps and changing your schema. If you don't properly take these changes into account, even with the protections I've tried to include in Verdant, you could end up with inconsistent data!"),(0,a.yg)("p",null,"So we need to write a migration which makes sure every Entry has a valid value for ",(0,a.yg)("inlineCode",{parentName:"p"},"mood")," according to our new schema. We can do this fairly simply with the migration scaffolding already provided by the CLI."),(0,a.yg)("p",null,"First, let's try just passing through the existing entry and see what happens..."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import v1Schema, {\n    MigrationTypes as V1Types,\n} from '../client/schemaVersions/v1.js';\nimport v2Schema, {\n    MigrationTypes as V2Types,\n} from '../client/schemaVersions/v2.js';\nimport { createMigration } from '@verdant-web/store';\n\nexport default createMigration<V1Types, V2Types>(\n    v1Schema,\n    v2Schema,\n    async ({ migrate }) => {\n        await migrate('entries', async (old) => ({\n            ...old,\n        }));\n    },\n);\n")),(0,a.yg)("p",null,"If you put this code in your editor, you'll see a Typescript error! Verdant has created typings for both the v1 schema and v2 schema, and it knows that ",(0,a.yg)("inlineCode",{parentName:"p"},"mood")," was previously a ",(0,a.yg)("inlineCode",{parentName:"p"},"string"),", but is now a union type ",(0,a.yg)("inlineCode",{parentName:"p"},"'worst' | 'worse' | 'same' | 'better' | 'best'"),". Typescript will not let us pass the old ",(0,a.yg)("inlineCode",{parentName:"p"},"mood")," off as the new one."),(0,a.yg)("p",null,"So let's fix it! We can pick out the ",(0,a.yg)("inlineCode",{parentName:"p"},"mood")," field and write some logic to make sure it's within the bounds of the new field."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import v1Schema, {\n    MigrationTypes as V1Types,\n} from '../client/schemaVersions/v1.js';\nimport v2Schema, {\n    MigrationTypes as V2Types,\n} from '../client/schemaVersions/v2.js';\nimport { createMigration } from '@verdant-web/store';\n\nexport default createMigration<V1Types, V2Types>(\n    v1Schema,\n    v2Schema,\n    async ({ migrate }) => {\n        await migrate('entries', async ({ mood, ...old }) => {\n            if (mood === 'bad') {\n                // convert \"bad\" to \"worse\" according to our new field options\n                return {\n                    ...old,\n                    mood: 'worse',\n                };\n            } else if (\n                // you might find this verbose, but simple, readable, and\n                // typesafe without casting is a good way to go for such\n                // crucial code as migrations.\n                mood === 'worst' ||\n                mood === 'worse' ||\n                mood === 'same' ||\n                mood === 'better' ||\n                mood === 'best'\n            ) {\n                return {\n                    ...old,\n                    mood,\n                };\n            } else {\n                return {\n                    ...old,\n                    // we need to supply *some* default...\n                    mood: 'same',\n                };\n            }\n        });\n    },\n);\n")),(0,a.yg)("p",null,"Now we have our first migration! But we're not done with making changes for our new schema yet. Verdant's CLI has generated new typings for our ",(0,a.yg)("inlineCode",{parentName:"p"},"Entry")," model, and now some of our code is also setting off Typescript errors."),(0,a.yg)("p",null,"Let's head back to ",(0,a.yg)("inlineCode",{parentName:"p"},"apps/web/src/components/entries/EntryCreator.tsx"),". We've got a few errors here, all related to ",(0,a.yg)("inlineCode",{parentName:"p"},"mood"),". Now's a good time to leverage the fancy types Verdant created for us. Starting with ",(0,a.yg)("inlineCode",{parentName:"p"},"onMoodChange"),", we can import the ",(0,a.yg)("inlineCode",{parentName:"p"},"EntryMood")," type, which gives us all valid options for the ",(0,a.yg)("inlineCode",{parentName:"p"},"mood")," field!"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const onMoodChange = (mood: EntryMood) => {\n    if (todayEntry) {\n        todayEntry.set('mood', mood);\n    } else {\n        client.entries.put({\n            date: today,\n            mood,\n        });\n    }\n};\n")),(0,a.yg)("p",null,"Now instead of a hand-written, hand-maintained union string type, we know this corresponds with what our model expects. Likewise, Typescript will stop complaining about this function. But we still have to track down other problems: all the uses of ",(0,a.yg)("inlineCode",{parentName:"p"},"bad")," in our code! Since ",(0,a.yg)("inlineCode",{parentName:"p"},"bad")," is no longer the proper value, Verdant's typings have singled it out for fixing. Replace the red-squigglied ",(0,a.yg)("inlineCode",{parentName:"p"},"bad")," strings with ",(0,a.yg)("inlineCode",{parentName:"p"},"worse"),", and now Typescript is happy."),(0,a.yg)("p",null,"It's not just making Typescript happy... not just an exercise in Correct Typing for its own sake. This is Verdant pointing out problems with how we're using our documents. These errors aren't superficial; they're mistakes that would cause data inconsistency if left unchecked (don't worry, even if the typings don't alert you, Verdant still checks these kinds of things at runtime, but it's far better to fail early)."),(0,a.yg)("p",null,"Ok, now we've fixed the errors. We can test our migration was successful by running our app! Well, you shouldn't see anything particularly strange going on. Our data has been migrated, and the app keeps working. Just like we want!"),(0,a.yg)("h2",{id:"querying-older-entries"},"Querying older entries"),(0,a.yg)("p",null,"So far we've done one query - for today's entry. But Verdant can do more complex queries than looking up a document by its primary key. We created an index on ",(0,a.yg)("inlineCode",{parentName:"p"},"date")," in our new schema, so now let's query the last 5 items and show them on the homescreen."),(0,a.yg)("p",null,"Here's a component that could do that:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { hooks } from '@/store.js';\n\nexport function RecentEntries() {\n    const [entries] = hooks.useAllEntriesInfinite({\n        key: 'recentEntries',\n        pageSize: 5,\n        index: {\n            where: 'date',\n            order: 'desc',\n        },\n    });\n\n    return (\n        <ul>\n            {entries.map((entry) => (\n                <li key={entry.get('date')}>\n                    {entry.get('date')} - {entry.get('mood')}\n                </li>\n            ))}\n        </ul>\n    );\n}\n")),(0,a.yg)("p",null,"I've gone ahead and set up an \"infinite\" paginated query. I imagine in a real app we'd want to continue to load more results as the user scrolls. Right now it just fetches the latest 5."),(0,a.yg)("p",null,"But wait! If you're used to working with dates in Javascript, you may realize something about our ",(0,a.yg)("inlineCode",{parentName:"p"},"date")," field and how it's ordered. If you're not, here's some examples of what those dates might look like:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Nov 23 2023")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"May 3 1992")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Jan 1 2000"))),(0,a.yg)("p",null,"Those won't sort like we want! Oh dear!"),(0,a.yg)("p",null,"Here's the thing about primary keys... you can't really change them easily. We ",(0,a.yg)("em",{parentName:"p"},"could")," rewrite all the entries, basically moving them from one place to another (you can actually do this in a migration if you want). But this can disrupt conflict resolution, because the new documents get new identities."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Side note: I chose a rather poor (but still unique and predictable) primary key to represent a date for this tutorial. When you're building your apps, try to take more care designing your primary key to avoid this kind of situation entirely! In most cases, though, a random ID is sufficient, so this kind of problem is less likely to affect you.")),(0,a.yg)("p",null,"The truth is, when you're working in local-first systems, you're likely to make mistakes like this at some point. Verdant tries to give you some tools to recover from them. In this case, while we can't rewrite our ",(0,a.yg)("inlineCode",{parentName:"p"},"date")," fields, we ",(0,a.yg)("em",{parentName:"p"},"can")," change the index we're querying on to fix the data and make it well-ordered."),(0,a.yg)("p",null,"Let's change our ",(0,a.yg)("inlineCode",{parentName:"p"},"date")," index from"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"  indexes: {\n    date: {\n      field: 'date',\n    },\n  },\n")),(0,a.yg)("p",null,"to"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"  indexes: {\n    date: {\n      type: 'number',\n      compute: (entry) => new Date(entry.date).getTime(),\n    },\n  },\n")),(0,a.yg)("p",null,"Now we're processing our English formatted Date back into an orderable Unix timestamp. Our new index will work fine with a simple query ordering!"),(0,a.yg)("p",null,"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm generate")," again and make a new WIP schema version to apply our changes."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Side note: WIP schemas don't run against your 'real' data. They create a new copy of that data in a temporary IndexedDB database so you can fool around a bit without ruining your dev environment. Doing another WIP revision creates a new copy of the database (from the original 'main' copy).")),(0,a.yg)("p",null,"Cool, now our entries can be queried in order. Let's add the ",(0,a.yg)("inlineCode",{parentName:"p"},"RecentEntries")," component to our home page, too."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { EntryCreator } from '@/components/entries/EntryCreator.jsx';\nimport { RecentEntries } from '@/components/entries/RecentEntries.jsx';\n\nexport interface HomePageProps {}\n\nexport function HomePage({}: HomePageProps) {\n    return (\n        <div>\n            <EntryCreator />\n            <RecentEntries />\n        </div>\n    );\n}\n\nexport default HomePage;\n")),(0,a.yg)("p",null,"And now we've got our recent entires. If you're doing this tutorial in one day, this will only show today's, of course."),(0,a.yg)("h2",{id:"reactive-updates"},"Reactive updates"),(0,a.yg)("p",null,"Play around a bit, try changing the mood for today. You'll probably notice that there's a small delay, and then the recent entry changes, too. We'll get to that delay in a moment. But the point I ",(0,a.yg)("em",{parentName:"p"},"want")," to make here is that you don't have to do anything particular to wire your changes from one query into a different one. No optimistic updates or cache invalidation. Verdant keeps track of this for you."),(0,a.yg)("p",null,"Now, here's a secret: the ",(0,a.yg)("inlineCode",{parentName:"p"},"Entry")," powering the selector and the ",(0,a.yg)("inlineCode",{parentName:"p"},"Entry")," being displayed in the list are ",(0,a.yg)("em",{parentName:"p"},"exactly the same object"),' in memory. Every "entity" in Verdant is cached by identity and only ever shows up once.'),(0,a.yg)("p",null,"So why the delay? Well, while the data of that Entry might change immediately (literally, synchronously!), the component that's rendering it in ",(0,a.yg)("inlineCode",{parentName:"p"},"RecentEntries")," isn't reactive to that change - it's not using ",(0,a.yg)("inlineCode",{parentName:"p"},"hooks.useWatch"),"! So it doesn't update until the slower reactivity trigger of refreshing the ",(0,a.yg)("inlineCode",{parentName:"p"},"useAllEntriesInfinite")," query, which has to round-trip to IndexedDB."),(0,a.yg)("p",null,"We can actually make this faster, by refactoring a bit to have the recent entries watch their respective documents for changes."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { hooks } from '@/store.js';\nimport { Entry } from '@mood-tracker/verdant';\n\nexport function RecentEntries() {\n    const [entries] = hooks.useAllEntriesInfinite({\n        key: 'recentEntries',\n        pageSize: 5,\n        index: {\n            where: 'date',\n            order: 'desc',\n        },\n    });\n\n    return (\n        <ul>\n            {entries.map((entry) => (\n                <RecentEntry entry={entry} key={entry.get('date')} />\n            ))}\n        </ul>\n    );\n}\n\nfunction RecentEntry({ entry }: { entry: Entry }) {\n    const { date, mood } = hooks.useWatch(entry);\n    return (\n        <li>\n            {date} - {mood}\n        </li>\n    );\n}\n")),(0,a.yg)("p",null,"This also gives me a chance to demonstrate two more Verdant goodies."),(0,a.yg)("p",null,"One, the named type generated for ",(0,a.yg)("inlineCode",{parentName:"p"},"Entry"),". Just like ",(0,a.yg)("inlineCode",{parentName:"p"},"EntryMood"),", it's a convenient way to refer to your data types. Verdant generates named types for every document, field, and subfield!"),(0,a.yg)("p",null,"Two, the version of ",(0,a.yg)("inlineCode",{parentName:"p"},"useWatch")," when you pass something that isn't ",(0,a.yg)("inlineCode",{parentName:"p"},"| null")," lets you destructure fields directly, rather than having to call ",(0,a.yg)("inlineCode",{parentName:"p"},".get")," on the entity itself. It's a little convenience helper that makes React code slightly cleaner."),(0,a.yg)("p",null,"Finally, if we try out our app again, that pesky delay is gone."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(4544).A})),(0,a.yg)("p",null,"Clicking on a mood now updates and re-renders all components that display that entry everywhere in the app, immediately, without needing to wait for data to reach IndexedDB or be queried again."),(0,a.yg)("h2",{id:"building-for-deployment"},"Building for deployment"),(0,a.yg)("p",null,"Great, now we've got some basic functionality! Let's build our app for deployment to a static site."),(0,a.yg)("p",null,"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build")," and..."),(0,a.yg)("p",null,"Oops!"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"@mood-tracker/verdant:build: > verdant preflight -s ./src/schema.ts -o ./src/client\n@mood-tracker/verdant:build:\n@mood-tracker/verdant:build: Canonical schema is WIP. Run the CLI to upgrade to a production schema before deploying.\n@mood-tracker/verdant:build: \u2009ELIFECYCLE\u2009 Command failed with exit code 1.\n@mood-tracker/verdant:build: \u2009ELIFECYCLE\u2009 Command failed with exit code 1.\n")),(0,a.yg)("p",null,"The starter kit is configured to run ",(0,a.yg)("inlineCode",{parentName:"p"},"verdant preflight")," before a production build. This CLI command checks over your code to be sure it's really ready to deploy to users."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Using the ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm preflight")," command can be helpful for making deployments safe, and in case it isn't clear, deploying new code can be much riskier in local-first apps than in cloud apps. One bad move could delete users' data with no recovery options. So if you're planning on shipping your app, you'll want to incorporate this preflight command in your CI. The starter kit places it in the build step, but you could move it to a separate job, just as long as it gates a deployment.")),(0,a.yg)("p",null,"We're still on a WIP schema! We don't want to ship this to production. First, we need to upgrade our schema to a production schema. This is easy, with ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm generate")," which runs the Verdant CLI."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u250c  \ud83c\udf3f Verdant CLI\n\u2502\n\u25c7  A WIP schema for version 2 is in progress. Choose a way to proceed:\n\u2502  \ud83d\udce6  Publish the final schema for version 2\n\u2502\n\u2502  \u2728 Applied new schema: version 2\n\u2502\n\u2514  \ud83c\udf3f Done!\n")),(0,a.yg)("p",null,"Now our schema is ready for deployment, and our ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build")," command succeeds."),(0,a.yg)("p",null,"The resulting output in ",(0,a.yg)("inlineCode",{parentName:"p"},"apps/web/dist")," is ready to be uploaded to any static website host, or you may want to set up your repo with automatic deployment via a provider like Vercel or Netlify."),(0,a.yg)("h2",{id:"i-want-to-point-out"},"I want to point out..."),(0,a.yg)("p",null,"We made a fully functional app, which provides some value to the user, persistently stores data on-device, and reactively updates the UI for every change. And we did it without:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A React state library like Redux or Zustand"),(0,a.yg)("li",{parentName:"ul"},"A React query and cache library like React Query or RTK Query"),(0,a.yg)("li",{parentName:"ul"},"Worrying about cache invalidation, async mutations, or optimistic updates")),(0,a.yg)("p",null,"The cool thing is no matter how complex your app gets or how big it grows, Verdant continues to work without these things really well. You might find yourself reaching for other tools sometimes, but it will be for more localized problems (like temporary session state) and not holistic ones. Verdant can power ambitious apps, like my ",(0,a.yg)("a",{parentName:"p",href:"https://gnocchi.club"},"cooking app Gnocchi"),", out of the box."),(0,a.yg)("p",null,"I hope this tutorial made you more excited for local-first development and how simple it can be, and perhaps also for Verdant in particular."),(0,a.yg)("h2",{id:"more-things-to-explore"},"More things to explore"),(0,a.yg)("p",null,"Your app comes pre-configured with a PWA-ready service worker and web manifest, but you'll want to customize these details with your own app information, of course."),(0,a.yg)("p",null,"There's also plenty more to explore in Verdant, including more advanced indexing, and of course setting up a server for sync."),(0,a.yg)("p",null,"But I hope this short tutorial gives you a microcosm of what it means to make a local-first / local-only app in Verdant, including some challenges and how to approach them."),(0,a.yg)("p",null,"Happy coding!"))}y.isMDXComponent=!0},763:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/app-1-df59564710eb6cddf38c7ec5377f8f74.png"},4544:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/fast-update-97d7f1b492877b8acb5c4aef96e13192.mp4"}}]);