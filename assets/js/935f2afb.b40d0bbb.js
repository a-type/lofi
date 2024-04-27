"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Intro to Verdant","href":"/docs/intro","docId":"intro"},{"type":"link","label":"The Verdant manifesto on sustainable software","href":"/docs/manifesto","docId":"manifesto"},{"type":"category","label":"Storing & Querying","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Why have a schema?","href":"/docs/local-storage/schema","docId":"local-storage/schema"},{"type":"link","label":"Generating the client code","href":"/docs/local-storage/generate-client","docId":"local-storage/generate-client"},{"type":"link","label":"Migrations","href":"/docs/local-storage/migrations","docId":"local-storage/migrations"},{"type":"link","label":"Indexes & Querying","href":"/docs/local-storage/querying","docId":"local-storage/querying"},{"type":"link","label":"Documents & Entities","href":"/docs/local-storage/entities","docId":"local-storage/entities"},{"type":"link","label":"Undo, Redo, and Batching","href":"/docs/local-storage/undo","docId":"local-storage/undo"},{"type":"link","label":"File storage","href":"/docs/local-storage/files","docId":"local-storage/files"},{"type":"link","label":"Exporting and importing data","href":"/docs/local-storage/export","docId":"local-storage/export"}],"href":"/docs/category/storing--querying"},{"type":"category","label":"Sync","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Sync Server","href":"/docs/sync/server","docId":"sync/server"},{"type":"link","label":"Authenticating Sync","href":"/docs/sync/authentication","docId":"sync/authentication"},{"type":"link","label":"Connecting a Client","href":"/docs/sync/client","docId":"sync/client"},{"type":"link","label":"Presence & Profiles","href":"/docs/sync/presence","docId":"sync/presence"},{"type":"link","label":"Advanced: Transports","href":"/docs/sync/transports","docId":"sync/transports"},{"type":"link","label":"Synchronizing files","href":"/docs/sync/files","docId":"sync/files"},{"type":"link","label":"Pruning Invalid Data","href":"/docs/sync/pruning","docId":"sync/pruning"}],"href":"/docs/category/sync"},{"type":"link","label":"React","href":"/docs/react","docId":"react"},{"type":"link","label":"CLI","href":"/docs/cli","docId":"cli"},{"type":"category","label":"How it works","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Initial sync","href":"/docs/internals/initial-sync","docId":"internals/initial-sync"},{"type":"link","label":"Protocol assumptions","href":"/docs/internals/assumptions","docId":"internals/assumptions"},{"type":"link","label":"Entity IDs","href":"/docs/internals/entity-ids","docId":"internals/entity-ids"}],"href":"/docs/category/how-it-works"},{"type":"link","label":"React Router","href":"/docs/react-router","docId":"react-router"},{"type":"link","label":"Comparisons to other local-first tools","href":"/docs/comparisons","docId":"comparisons"},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Your first Verdant app","href":"/docs/tutorials/your-first-app","docId":"tutorials/your-first-app"}],"href":"/docs/category/tutorials"}]},"docs":{"cli":{"id":"cli","title":"CLI","description":"Verdant has a CLI which is vital for generating client typings and upgrading your schema over time. You could theoretically do these things by hand, but it would be really complicated and type safety would be basically infeasible.","sidebar":"tutorialSidebar"},"comparisons":{"id":"comparisons","title":"Comparisons to other local-first tools","description":"Local-first is pretty new on the web, so it makes sense you\'d want to choose carefully when adopting technologies. Clear mass-adoption winners haven\'t really emerged yet, and tradeoffs are everywhere.","sidebar":"tutorialSidebar"},"internals/assumptions":{"id":"internals/assumptions","title":"Protocol assumptions","description":"Collecting some thoughts about assumptions made in Verdant\'s sync protocols. May format this to be more readable at some point, but for now it\'s mostly for me (doubt you\'re considering implementing your own replica client).","sidebar":"tutorialSidebar"},"internals/entity-ids":{"id":"internals/entity-ids","title":"Entity IDs","description":"Each \\"entity\\" (basically any document or nested object) has a unique ID (referred to in Verdant source code as an \\"oid\\" or \\"object ID\\"). This ID links operations to the entity they operate on.","sidebar":"tutorialSidebar"},"internals/initial-sync":{"id":"internals/initial-sync","title":"Initial sync","description":"When a replica comes online, it must exchange information with the server until they share a common understanding of the operation history of the library in question.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Intro to Verdant","description":"An IndexedDB-powered database and data sync solution for lightweight, local-first web apps.","sidebar":"tutorialSidebar"},"local-storage/entities":{"id":"local-storage/entities","title":"Documents & Entities","description":"Queries return Documents. A Document provides a .get method to retrieve properties, and a .set to set them - as well as other utility methods depending on its type. All root documents are Object Entities, which also provide .update. Since Documents can contain arbitrary sub-objects, you can retrieve lists off them, which comes as List Entities and provide some common list methods too.","sidebar":"tutorialSidebar"},"local-storage/export":{"id":"local-storage/export","title":"Exporting and importing data","description":"Verdant clients can export all local data, and even download remote files if needed to include in the export.","sidebar":"tutorialSidebar"},"local-storage/files":{"id":"local-storage/files","title":"File storage","description":"To work with files in Verdant, you add a file type field to a document. From there it acts similar to other fields, with a few notable peculiarities.","sidebar":"tutorialSidebar"},"local-storage/generate-client":{"id":"local-storage/generate-client","title":"Generating the client code","description":"Using your schema, you can generate your typed client code using Verdant\'s CLI.","sidebar":"tutorialSidebar"},"local-storage/migrations":{"id":"local-storage/migrations","title":"Migrations","description":"Every schema change requires a migration, including the initial one. When you increment your schema version number and run the Verdant generate CLI, it will automatically generate the migration files for you and create a copy of your schema for use in future migrations.","sidebar":"tutorialSidebar"},"local-storage/querying":{"id":"local-storage/querying","title":"Indexes & Querying","description":"By default you can retrieve lists of all documents in a collection, or just one by its primary key.","sidebar":"tutorialSidebar"},"local-storage/schema":{"id":"local-storage/schema","title":"Why have a schema?","description":"Verdant requires all data be defined in a schema. That may seem cumbersome, but knowing what data looks like is essential to changing the shape of that data over time as your app evolves. Data lives on user devices, not your servers, so getting migrations right is very important&mdash;data loss or corruption can be unrecoverable, and no backups exist.","sidebar":"tutorialSidebar"},"local-storage/undo":{"id":"local-storage/undo","title":"Undo, Redo, and Batching","description":"Local changes are undoable as long as you don\'t refresh the page. To undo a change, call client.undoHistory.undo(). To redo and undone change, call client.undoHistory.redo().","sidebar":"tutorialSidebar"},"manifesto":{"id":"manifesto","title":"The Verdant manifesto on sustainable software","description":"Verdant was designed for purpose, with a built-in business model meant to enable the gradual and sustainable growth of your consumer app as a small business.","sidebar":"tutorialSidebar"},"react":{"id":"react","title":"React","description":"Verdant has React hooks generation. To enable it, pass --react to the CLI. A new module react.js will be emitted in the output directory. It exports one function, createHooks. Call it to construct hooks for your Verdant storage.","sidebar":"tutorialSidebar"},"react-router":{"id":"react-router","title":"React Router","description":"A small, experimental, client-only router for React that includes cutting-edge Suspense and Concurrent Mode support. Designed to help your PWA feel like a native app, and integrate well with Verdant.","sidebar":"tutorialSidebar"},"sync/authentication":{"id":"sync/authentication","title":"Authenticating Sync","description":"To connect to sync, you must create an auth endpoint. This can be done automatically on the same server you use for sync, or you can define a custom endpoint on a different server.","sidebar":"tutorialSidebar"},"sync/client":{"id":"sync/client","title":"Connecting a Client","description":"To connect your client to the server, you must pass it sync configuration.","sidebar":"tutorialSidebar"},"sync/files":{"id":"sync/files","title":"Synchronizing files","description":"When you create files locally, they are flagged as unsynced until you next go online.","sidebar":"tutorialSidebar"},"sync/presence":{"id":"sync/presence","title":"Presence & Profiles","description":"Once you\'re syncing, presence info is available on client.sync.presence (where client is your instance of Client).","sidebar":"tutorialSidebar"},"sync/pruning":{"id":"sync/pruning","title":"Pruning Invalid Data","description":"Verdant has a lot of tricks up its sleeve for providing strong schema support while still making sure the data your app sees stays consistent, even when some peers haven\'t updated their app yet.","sidebar":"tutorialSidebar"},"sync/server":{"id":"sync/server","title":"Sync Server","description":"Verdant doesn\'t sync by default. It\'s offline-first, sync-optional. I built it that way because my goal is to support nice local-only anonymous experiences, and add sync & realtime on as an incentive to sign up (and potentially subscribe) to your app.","sidebar":"tutorialSidebar"},"sync/transports":{"id":"sync/transports","title":"Advanced: Transports","description":"Verdant can sync over HTTP requests or WebSockets. By default, it automatically uses HTTP when a user is the only one connected to a library, and switches to WebSockets when other users are online.","sidebar":"tutorialSidebar"},"tutorials/your-first-app":{"id":"tutorials/your-first-app","title":"Your first Verdant app","description":"I find Verdant is pretty fun to work with once you get the hang of it, but it\'s not yet the most approachable framework. Not that it\'s particularly hard, more that I still haven\'t cracked how to make it immediately intuitive. So in the meantime, here\'s a walkthrough of creating a real app that will help show you how to make your own.","sidebar":"tutorialSidebar"}}}')}}]);