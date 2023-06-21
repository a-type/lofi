"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8751],{8570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(79);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7626),o=(n(79),n(8570));const i={sidebar_position:6},r="React Router",l={unversionedId:"react-router",id:"react-router",title:"React Router",description:"A small, experimental, client-only router for React that includes cutting-edge Suspense and Concurrent Mode support. Designed to help your PWA feel like a native app, and integrate well with Verdant.",source:"@site/docs/react-router.md",sourceDirName:".",slug:"/react-router",permalink:"/docs/react-router",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/docs/react"},next:{title:"How it works",permalink:"/docs/category/how-it-works"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Suspense support",id:"suspense-support",level:3},{value:"Route options",id:"route-options",level:3},{value:"Links",id:"links",level:3},{value:"Outlet",id:"outlet",level:3},{value:"Showing a loader during long page transitions",id:"showing-a-loader-during-long-page-transitions",level:3},{value:"Other basic tools",id:"other-basic-tools",level:3},{value:"<code>useNavigate()</code>",id:"usenavigate",level:4},{value:"<code>useMatch({ path, end })</code>",id:"usematch-path-end-",level:4},{value:"<code>useSearchParams()</code>",id:"usesearchparams",level:4},{value:"Scroll restoration",id:"scroll-restoration",level:3},{value:"<code>&lt;RestoreScroll /&gt;</code>",id:"restorescroll-",level:4},{value:"<code>useScrollRestoration</code>",id:"usescrollrestoration",level:4},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Layout routes",id:"layout-routes",level:3},{value:"Parallel loading",id:"parallel-loading",level:3},{value:"Preloading lazy components",id:"preloading-lazy-components",level:4},{value:"Preloading with Verdant queries",id:"preloading-with-verdant-queries",level:4},{value:"Preloading with your own data",id:"preloading-with-your-own-data",level:4},{value:"Integrating preloaded data with Suspense",id:"integrating-preloaded-data-with-suspense",level:4},{value:"Skipping transitions",id:"skipping-transitions",level:3},{value:"Using navigation state",id:"using-navigation-state",level:3},{value:"Route data",id:"route-data",level:3},{value:"Intercepting navigation",id:"intercepting-navigation",level:3},{value:"Rendering non-matching routes",id:"rendering-non-matching-routes",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-router"},"React Router"),(0,o.kt)("p",null,"A small, experimental, client-only router for React that includes cutting-edge Suspense and Concurrent Mode support. Designed to help your PWA feel like a native app, and integrate well with Verdant."),(0,o.kt)("p",null,"This router is stand-alone and doesn't rely on any other Verdant packages. Feel free to use it in any client-focused React app. Just know that it won't be as battle-tested as the still-excellent React Router."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Routes are defined in a tree data structure, not React components. This was done because, while declarative components for routes are fun, they'd require extra, complicated plumbing to integrate well with the other key features."),(0,o.kt)("p",null,"Create your routes by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"makeRoutes"),", which provides typechecking for route contents."),(0,o.kt)("p",null,"You pass your routes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," component. Inside ",(0,o.kt)("inlineCode",{parentName:"p"},"Router"),", you can continue building up your global app UI structure. Render an ",(0,o.kt)("inlineCode",{parentName:"p"},"Outlet")," wherever you want to show your route content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes = makeRoutes([\n    {\n        path: '/',\n        exact: true,\n        component: HomePage,\n    },\n    {\n        path: '/posts',\n        component: lazy(() => import('./PostsPage.tsx')),\n    },\n]);\n\n<Router routes={routes}>\n    <main>\n        <nav>...</nav>\n        <div>\n            <Suspense>\n                <Outlet />\n            </Suspense>\n        </div>\n    </main>\n</Router>;\n")),(0,o.kt)("p",null,"If you define your routes outside the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," prop, you may want to wrap them in ",(0,o.kt)("inlineCode",{parentName:"p"},"makeRoutes")," to cast to the right typing."),(0,o.kt)("h3",{id:"suspense-support"},"Suspense support"),(0,o.kt)("p",null,"You'll probably want a top-level Suspense boundary. This will make it easy to utilize ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy")," components (code splitting) for routes."),(0,o.kt)("h3",{id:"route-options"},"Route options"),(0,o.kt)("p",null,"Each route can have more advanced options, including children."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  path: '/posts',\n  exact: false, // optional. only match a complete path\n  component: PostsPage,\n  onVisited: async (params) => {\n    // preload data your route will need as soon as it\n    // is mounted. this runs in parallel with any\n    // lazy component loading\n  },\n  children: [\n    {\n      // match a path parameter and it will be passed\n      // by name to your onAccessible/onVisited callbacks\n      // and returned by useParams()\n      path: ':id',\n      component: PostPage,\n    }\n  ]\n}\n")),(0,o.kt)("h3",{id:"links"},"Links"),(0,o.kt)("p",null,"Like React Router, ",(0,o.kt)("inlineCode",{parentName:"p"},"@verdant-web/react-router")," comes with a Link component you use to render links."),(0,o.kt)("p",null,"Unlike React Router, this component also does external links explicitly, and comes with a ",(0,o.kt)("inlineCode",{parentName:"p"},"newTab")," parameter for easy new-tabbing. Because I always end up reinventing these features in a wrapped Link component, anyway."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Link to="/posts/1">Post 1</Link>\n<Link to="https://google.com" newTab>Google</Link>\n<Link to="mailto://hi@you.site">Contact me</Link>\n// newTab on local paths opts out of router features\n<Link to="/tos" newTab>Terms of Service</Link>\n// use "external" to force router features on or off if you need to\n<Link to="https://still-this-site/posts/1" external={false}>Why</Link>\n')),(0,o.kt)("h3",{id:"outlet"},"Outlet"),(0,o.kt)("p",null,"Outlet is a 'slot' component that stands in for the matching route content of this nested routing level. Render an Outlet wherever you want your route UI to show up."),(0,o.kt)("p",null,'Outlets let you define "fixed" UI surrounding your route UI which doesn\'t change between routes.'),(0,o.kt)("p",null,"For example, on the ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," page, this structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<main>\n    <Navigation />\n    <Outlet />\n</main>\n")),(0,o.kt)("p",null,"is, for all intents and purposes,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<main>\n    <Navigation />\n    <HomePage />\n</main>\n")),(0,o.kt)("p",null,"If you have nested routes, the parent routes must render ",(0,o.kt)("inlineCode",{parentName:"p"},"<Outlet />"),", or they won't be shown."),(0,o.kt)("h3",{id:"showing-a-loader-during-long-page-transitions"},"Showing a loader during long page transitions"),(0,o.kt)("p",null,'One of the core features of this router is Suspense and Concurrent Mode support, which means when a user clicks a Link, the router will load the code necessary to render the next page before actually changing the UI. This mimics "native-like" behavior and makes your app feel more seamless, with fewer empty loading states.'),(0,o.kt)("p",null,"However, if it takes a long time to preload the next page, it might not look like clicking the link did anything! So this router provides some tools to help you provide user feedback during a longer page load."),(0,o.kt)("p",null,"You can wrap a global loader (like a progress bar at the top of the page) with ",(0,o.kt)("inlineCode",{parentName:"p"},"TransitionIndicator")," to show it during transitions, or you can call ",(0,o.kt)("inlineCode",{parentName:"p"},"useIsRouteTransitioning")," to get a boolean to use however you like."),(0,o.kt)("p",null,"Both of these accept a ",(0,o.kt)("inlineCode",{parentName:"p"},"delay")," parameter, which will delay turning the transition on for some amount of time, to prevent flickering during quick navigations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<TransitionIndicator delay={300}>\n    <GlobalSpinner />\n</TransitionIndicator>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const isNavigating = useIsRouteTransitioning(300);\n")),(0,o.kt)("p",null,"Additionally, the Link component receives a ",(0,o.kt)("inlineCode",{parentName:"p"},"data-transitioning")," attribute when it's clicked, until the navigation is complete. You can use this to immediately provide styling feedback when the user clicks a link."),(0,o.kt)("h3",{id:"other-basic-tools"},"Other basic tools"),(0,o.kt)("h4",{id:"usenavigate"},(0,o.kt)("inlineCode",{parentName:"h4"},"useNavigate()")),(0,o.kt)("p",null,"For programmatic navigation without ",(0,o.kt)("inlineCode",{parentName:"p"},"Link"),". Returns a callback you can use to manually navigate to a path. Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"{ replace: true }")," to the second parameter to replace instead of pushing state."),(0,o.kt)("h4",{id:"usematch-path-end-"},(0,o.kt)("inlineCode",{parentName:"h4"},"useMatch({ path, end })")),(0,o.kt)("p",null,"Determine if the current route matches a path you provide. For example, you might want to know if the app is on the ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages/1")," page. You could pass ",(0,o.kt)("inlineCode",{parentName:"p"},"useMatch({ path: '/pages/1' })"),". Or perhaps you want to know if it's on ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages"),", but not ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages/1"),". In that case, pass ",(0,o.kt)("inlineCode",{parentName:"p"},"end: true")," to indicate it should not match sub-routes."),(0,o.kt)("h4",{id:"usesearchparams"},(0,o.kt)("inlineCode",{parentName:"h4"},"useSearchParams()")),(0,o.kt)("p",null,"Although search params aren't included in routing logic, React Router set the standard for including them as part of a router's toolkit, so I've likewise exported a ",(0,o.kt)("inlineCode",{parentName:"p"},"useSearchParams")," which acts like a ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"URLSearchParams"),", writing to and reading from the query string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const [params, setParams] = useSearchParams();\nsetParams((old) => {\n    old.delete('foo');\n    return old;\n});\n")),(0,o.kt)("h3",{id:"scroll-restoration"},"Scroll restoration"),(0,o.kt)("p",null,"Scroll restoration is something you might overlook when integrating a router. And some routers do this for you automatically. But Verdant's router is pretty experimental, and scroll restoration is no exception. I tried to make it powerful and versatile."),(0,o.kt)("p",null,"To effectively restore scroll positions for navigation history, you'll need to either utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"RestoreScroll")," component or the ",(0,o.kt)("inlineCode",{parentName:"p"},"useScrollRestoration")," hook. The component is better for most use cases, but the hook exists for more complex scenarios (like animating scroll position, if you want to)."),(0,o.kt)("h4",{id:"restorescroll-"},(0,o.kt)("inlineCode",{parentName:"h4"},"<RestoreScroll />")),(0,o.kt)("p",null,"This component doesn't render any DOM, it invokes ",(0,o.kt)("inlineCode",{parentName:"p"},"useScrollRestoration")," internally. You can render it anywhere, but I recommend putting it ",(0,o.kt)("strong",{parentName:"p"},"inside a Suspense boundary alongside loaded data"),". As soon as this component is mounted, it will restore scroll position to the recorded value for the current history item. It works best if the relevant data on the page has already been loaded, so that the UI is in the right configuration to restore scroll. Otherwise, you can get 'stuck' at 0 because there's not enough content to scroll the container."),(0,o.kt)("p",null,"You can capture the scroll position of a container besides the window by passing its ref to ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollableRef"),". This is helpful if your primary scroll container on the page is part of the app's UI."),(0,o.kt)("h4",{id:"usescrollrestoration"},(0,o.kt)("inlineCode",{parentName:"h4"},"useScrollRestoration")),(0,o.kt)("p",null,"This hook takes two function parameters which allow you to customize the logic for recording and restoring scroll values."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onGetScrollPosition")," is called when the system wants to record scroll position. You can read the ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollY")," of the window, ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollTop")," of an element, or anything else you like."),(0,o.kt)("p",null,"This function should return a ",(0,o.kt)("inlineCode",{parentName:"p"},"[number,number]")," tuple, or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if you don't want to register a new scroll position (the previous one, if any, will be retained)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onScrollRestored")," is called with a ",(0,o.kt)("inlineCode",{parentName:"p"},"[number,number]")," tuple when scroll should be restored. Call ",(0,o.kt)("inlineCode",{parentName:"p"},"window.scrollTo"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"element.scrollTo"),", or even animate the scroll value as you like."),(0,o.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,o.kt)("h3",{id:"layout-routes"},"Layout routes"),(0,o.kt)("p",null,"You can create nested layers of routes, which means you can also create a layer which doesn't really 'consume' part of the path, but encapsulates a set of children in a meaningful way. These act as layout layers, providing some intermediate layer of UI which wraps any children."),(0,o.kt)("p",null,"I use this for delineating between pages which should or should not display common UI elements like navigation, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function LayoutWithNav() {\n    return (\n        <PageRoot>\n            <Outlet />\n            <Navigation />\n        </PageRoot>\n    );\n}\n\nconst routes = [\n    {\n        path: '/some-page-without-nav',\n        component: SomePageWithoutNav,\n    },\n    // any routes above this one will not have navigation by default\n    {\n        path: '/',\n        component: LayoutWithNav,\n        // all routes contained here have navigation and\n        // common page layout\n        children: [\n            {\n                index: true,\n                component: HomePage,\n            },\n            {\n                path: 'posts',\n                component: PostsPage,\n            },\n        ],\n    },\n];\n")),(0,o.kt)("h3",{id:"parallel-loading"},"Parallel loading"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onVisited")," is called as soon as a route is matched after a path change. This also ",(0,o.kt)("strong",{parentName:"p"},"includes nested routes"),". You can use this to load data or code in parallel with the new route."),(0,o.kt)("h4",{id:"preloading-lazy-components"},"Preloading lazy components"),(0,o.kt)("p",null,"One big boost you can do is preloading the route components needed to render the pages the user might go to next."),(0,o.kt)("p",null,"To do this we need something a bit more than React's built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy"),", because we want to pre-fetch the component code before rendering. I recommend ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ianschmitz/react-lazy-with-preload"},"react-lazy-with-preload"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const LazyPostsPage = lazyWithPreload(() => import('./PostsPage.jsx'));\n\nconst routes = [\n    {\n        path: '/',\n        component: HomePage,\n        // we think the user probably wants to load the Posts\n        // page soon, so we preload it on visit\n        onVisit: LazyPostsPage.preload,\n    },\n];\n")),(0,o.kt)("h4",{id:"preloading-with-verdant-queries"},"Preloading with Verdant queries"),(0,o.kt)("p",null,"This is ",(0,o.kt)("inlineCode",{parentName:"p"},"@verdant-web/react-router"),", after all, so you'd expect that preloading Verdant data should be easy."),(0,o.kt)("p",null,"Since all Verdant queries are cached, you can go ahead and run whatever query you anticipate using on a page. But since queries are disposed from the cache after a while if they aren't subscribed to, there are different techniques depending on which callback you use."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Also note that these examples assume you have a single, global Verdant client instance. If you have different instances provided by different levels of React context, you won't be able to use this feature as it works currently, sorry. Consider using ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," handlers on individual links to call queries on the Verdant client you get from context instead.")),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"onVisited"),", since the route is mounting, you can probably just fire-and-forget your query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  path: '/posts',\n  onVisited: () => {\n    client.posts.findAll();\n  },\n}\n")),(0,o.kt)("h4",{id:"preloading-with-your-own-data"},"Preloading with your own data"),(0,o.kt)("p",null,"Expect ",(0,o.kt)("inlineCode",{parentName:"p"},"onVisited")," to be called multiple times! Any preloading logic you do should be idempotent. For example, cache preloaded data, and only load it if the cache is empty. Even better, store the promise for your loading procedure and use that as your indicator that loading has already started, even if it hasn't completed yet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// this is just a rough idea, you might find a better way...\nconst preloadPromises = new Map<string, Promise<Data>>();\nconst preloadedData = new Map<string, Data>();\n\nfunction preload(key: string) {\n    if (preloadedData.has(key)) return preloadedData.get(key);\n    if (preloadPromises.has(key)) return preloadPromises.get(key);\n    const preloadPromise = loadData(key);\n    preloadPromises.set(key, preloadPromise);\n    preloadPromise.then((data) => {\n        preloadedData.set(key, data);\n        preloadPromises.delete(key);\n    });\n    return preloadPromise;\n}\n")),(0,o.kt)("p",null,"Hopefully you see what I'm going for, here. If the data is already loaded or is in flight, we bail out. Otherwise, we load it and cache it."),(0,o.kt)("h4",{id:"integrating-preloaded-data-with-suspense"},"Integrating preloaded data with Suspense"),(0,o.kt)("p",null,"This isn't ",(0,o.kt)("inlineCode",{parentName:"p"},"@verdant-web/react-router")," specific, but since Suspense is still not widely adopted as an end-user pattern, here's how you could integrate your preloaded data into your page component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostPage() {\n    const { id } = useParams<{ id: string }>();\n    const data = preloadedData.get(id);\n    if (!data) {\n        throw preload(id);\n    }\n\n    return (\n        <article>\n            <h1>{data.title}</h1>\n        </article>\n    );\n}\n")),(0,o.kt)("p",null,"With Suspense, our component can ",(0,o.kt)("inlineCode",{parentName:"p"},"throw")," a promise if the data isn't loaded yet. React will wait for the promise to resolve, then try re-rendering the component again. ",(0,o.kt)("strong",{parentName:"p"},"You must make sure the component doesn't throw again after the preload completes.")," That's why ",(0,o.kt)("inlineCode",{parentName:"p"},"preload")," returns early if the cached data is found."),(0,o.kt)("p",null,"Of course, you may never need to use this low-level Suspense functionality, but that's how you do it, if you're curious!"),(0,o.kt)("h3",{id:"skipping-transitions"},"Skipping transitions"),(0,o.kt)("p",null,"Sometimes you do want to show a skeleton of the next page instead of waiting for everything to load. For example, if you create a new resource and immediately navigate to the editor screen, you don't want to instead sit on the list page and wait for the editor page to load, which would be a confusing UX."),(0,o.kt)("p",null,"Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"skipTransition")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Link"),", or to the second parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," callback you get from ",(0,o.kt)("inlineCode",{parentName:"p"},"useNavigate"),", to skip the concurrent mode transitioning and instead immediately navigate and await loading states on the new page."),(0,o.kt)("h3",{id:"using-navigation-state"},"Using navigation state"),(0,o.kt)("p",null,"Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," and this state will be added to the route state during navigation. You can also pass ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," callback you get from ",(0,o.kt)("inlineCode",{parentName:"p"},"useNavigate"),", in the second parameter."),(0,o.kt)("p",null,"This can be utilized in the ",(0,o.kt)("inlineCode",{parentName:"p"},"onNavigation")," prop in ",(0,o.kt)("inlineCode",{parentName:"p"},"Router"),", or the callback passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"useOnLocationChange"),"."),(0,o.kt)("h3",{id:"route-data"},"Route data"),(0,o.kt)("p",null,"Each route has an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," prop. Pack in any useful context data you may want to reference for different routes, it's up to you. You can then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMatchingRoute")," hook to retrieve the current route and its data. The route returned will depend on the level of the app you're in - higher-up nested components will get higher-up nested routes!"),(0,o.kt)("h3",{id:"intercepting-navigation"},"Intercepting navigation"),(0,o.kt)("p",null,"Provide an ",(0,o.kt)("inlineCode",{parentName:"p"},"onNavigation")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," to globally intercept navigation. You can return ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," from this callback to cancel a navigation, while the path will still update to the new location. This probably has limited uses, but I'm considering using it to do transparent PWA updates during navigation when a new version of the service worker is available, by canceling navigation and reloading the page instead."),(0,o.kt)("h3",{id:"rendering-non-matching-routes"},"Rendering non-matching routes"),(0,o.kt)("p",null,"This router exposes some advanced tooling to render routes which ",(0,o.kt)("em",{parentName:"p"},"don't")," match the current URL. This is particularly useful for creating transitions during navigation or enabling swipe-gesture based navigation in mobile apps."),(0,o.kt)("p",null,"To render any route, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"RouteByPath")," component. It takes a path value which should match some routes in your router, and it will display the associated UI for those routes on any page."),(0,o.kt)("p",null,'As an example, if you were doing swipe navigation, you probably want to start rendering the upcoming page "to the side" as the user begins the gesture. After detecting the gesture has begun, you could render a ',(0,o.kt)("inlineCode",{parentName:"p"},"<RouteByPath>")," for the next page in a positioned container offscreen and animate it moving as the user moves their finger. Once the gesture is complete, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"useNavigate")," to perform the actual page change, at which point the primary ",(0,o.kt)("inlineCode",{parentName:"p"},"<Outlet />")," will begin rendering the new page. You might then want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"<RouteByPath>")," to show the prior page as it animates out of frame if the swipe was not 100% across the screen."),(0,o.kt)("p",null,"Also useful for route transitions is the ",(0,o.kt)("inlineCode",{parentName:"p"},"useNextMatchingRoute")," hook. This will return match information, including the route itself, for the 'next level down.' You can use this to create a transition root component which renders an Outlet as normal, but introspects the matching route with ",(0,o.kt)("inlineCode",{parentName:"p"},"useNextMatchingRoute")," to observe when it changes and render transition animations from the prior to the new route (using ",(0,o.kt)("inlineCode",{parentName:"p"},"RouteByPath"),"). There's an example in the ",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," folder of the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router")," package."),(0,o.kt)("p",null,"When I implemented swipe navigation in ",(0,o.kt)("a",{parentName:"p",href:"https://gnocchi.club"},"Gnocchi"),', I specified "left" and "right" page paths in each top-level route\'s ',(0,o.kt)("inlineCode",{parentName:"p"},"data"),", then utilized ",(0,o.kt)("inlineCode",{parentName:"p"},"useNextMatchingRoute")," in a component that wrapped the initial ",(0,o.kt)("inlineCode",{parentName:"p"},"<Outlet />")," to reference those paths and decide which routes to render during a gesture. There are still a few tricky things, like how to structure your page layout correctly to accommodate the animated containers, but the combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"useNextMatchingRoute")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RouteByPath")," makes the route rendering portion fairly straightforward!"))}d.isMDXComponent=!0}}]);