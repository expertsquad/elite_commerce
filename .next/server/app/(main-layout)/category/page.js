(()=>{var e={};e.id=9912,e.ids=[9912],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},75665:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c}),r(88993),r(86445),r(47985),r(32029),r(7629),r(11930),r(12523);var a=r(23191),s=r(88716),o=r(37922),l=r.n(o),n=r(95231),i={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>n[e]);r.d(t,i);let c=["",{children:["(main-layout)",{children:["category",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,88993)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\(main-layout)\\category\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,86445)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\(main-layout)\\category\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,47985)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\(main-layout)\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,32029)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,7629)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\error.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,11930)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,12523)),"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\not-found.tsx"]}],d=["D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\(main-layout)\\category\\page.tsx"],u="/(main-layout)/category/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(main-layout)/category/page",pathname:"/category",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},96394:(e,t,r)=>{Promise.resolve().then(r.bind(r,46724))},33265:(e,t,r)=>{"use strict";r.d(t,{default:()=>s.a});var a=r(43353),s=r.n(a)},43353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let a=r(91174);r(10326),r(17577);let s=a._(r(77028));function o(e,t){var r;let a={loading:e=>{let{error:t,isLoading:r,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e);let o={...a,...t};return(0,s.default)({...o,modules:null==(r=o.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},933:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let a=r(94129);function s(e){let{reason:t,children:r}=e;throw new a.BailoutToCSRError(t)}},77028:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let a=r(10326),s=r(17577),o=r(933),l=r(46618);function n(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(n(()=>null)),loading:null,ssr:!0},c=function(e){let t={...i,...e},r=(0,s.lazy)(()=>t.loader().then(n)),c=t.loading;function d(e){let n=c?(0,a.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.PreloadCss,{moduleIds:t.modules}),(0,a.jsx)(r,{...e})]}):(0,a.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(r,{...e})});return(0,a.jsx)(s.Suspense,{fallback:n,children:i})}return d.displayName="LoadableComponent",d}},46618:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return o}});let a=r(10326),s=r(55403);function o(e){let{moduleIds:t}=e,r=(0,s.getExpectedRequestStore)("next/dynamic css"),o=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,a.jsx)(a.Fragment,{children:o.map(e=>(0,a.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},84367:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(10326),s=r(35047);r(17577);let o=({totalPages:e,currentPage:t,redirectTo:r})=>{let o=(0,s.useRouter)(),l=e=>{e!==t&&o.push(`${r}/${e}`)};return(0,a.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[t>1&&a.jsx("button",{className:"cursor-pointer px-5 h-10 rounded-full border border-black-10 flex items-center justify-center hover:text-white hover:bg-gradient-primary transition-all",onClick:()=>{t>1&&l(t-1)},"aria-label":"Previous Page",children:"Previous"}),(()=>{let r=[];for(let s=1;s<=e;s++)s<=4||s>e-4||s>=t-1&&s<=t+1?r.push(a.jsx("button",{className:`cursor-pointer w-10 h-10 rounded-full border border-black-10 flex items-center justify-center hover:text-white hover:bg-gradient-primary transition-all ${s===t?"text-white bg-gradient-primary":""}`,onClick:()=>l(s),disabled:s===t,"aria-current":s===t?"page":void 0,"aria-label":`Page ${s}`,children:s},s)):(5===s||s===e-4)&&r.push(a.jsx("div",{className:"cursor-default w-10 h-10 rounded-full flex items-center justify-center",children:"..."},s));return r})(),t<e&&a.jsx("button",{className:"cursor-pointer px-5 h-10 rounded-full border border-black-10 flex items-center justify-center hover:text-white hover:bg-gradient-primary transition-all",onClick:()=>{t<e&&l(t+1)},"aria-label":"Next Page",children:"Next"})]})}},46724:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var a=r(10326);function s(){return a.jsx("div",{className:"fixed inset-0 z-50 h-dvh w-dvw flex items-center justify-center bg-white-transparent backdrop-blur-md",children:(0,a.jsxs)("div",{className:"flex items-center",children:[a.jsx("span",{className:"text-3xl mr-4",children:"Loading"}),(0,a.jsxs)("svg",{className:"animate-spin h-8 w-8 text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})]})})}var o=r(84367),l=r(33265),n=r(17577);let i=(0,l.default)(()=>r.e(4728).then(r.bind(r,84728)),{loadableGenerated:{modules:["app\\(main-layout)\\category\\_components\\FilterBySelection.tsx -> ./SortedProducts/MostPopularProducts"]}}),c=(0,l.default)(()=>r.e(8758).then(r.bind(r,78758)),{loadableGenerated:{modules:["app\\(main-layout)\\category\\_components\\FilterBySelection.tsx -> ./SortedProducts/NewProducts"]}}),d=(0,l.default)(()=>r.e(2586).then(r.bind(r,72586)),{loadableGenerated:{modules:["app\\(main-layout)\\category\\_components\\FilterBySelection.tsx -> ./SortedProducts/HighPriceProducts"]}}),u=(0,l.default)(()=>r.e(7875).then(r.bind(r,87875)),{loadableGenerated:{modules:["app\\(main-layout)\\category\\_components\\FilterBySelection.tsx -> ./SortedProducts/LowPriceProducts"]}}),m=({mostPopularProducts:e,newProducts:t,highPriceProducts:r,lowPriceProducts:l})=>{let[m,p]=(0,n.useState)("MostPopular"),x=Math.ceil(Number("MostPopular"===m?e?.meta?.total/e?.meta?.limit:"New"===m?t?.meta?.total/t?.meta?.limit:"HighPrice"===m?r?.meta?.total/r?.meta?.limit:"LowPrice"===m?l?.meta?.total/l?.meta?.limit:""));return(0,a.jsxs)("div",{className:" flex flex-col gap-6",children:[(0,a.jsxs)("div",{className:"flex md:flex-row flex-col-reverse md:gap-1 gap-2.5 md:items-center justify-between",children:[(0,a.jsxs)("span",{className:"text-lg",children:["MostPopular"===m?e?.meta?.total:"New"===m?t?.meta?.total:"HighPrice"===m?r?.meta?.total:"LowPrice"===m?l?.meta?.total:""," ","Items result found-"," "]}),a.jsx("div",{className:"border border-black-10 px-3 rounded-md w-auto ",children:(0,a.jsxs)("select",{name:"products-sort",className:"py-2 rounded-md outline-none border-none w-full  bg-transparent text-gray-700 active:text-fuchsia-700 ",onChange:e=>p(e.target.value),children:[a.jsx("option",{value:"MostPopular",children:"Most Popular"}),a.jsx("option",{value:"New",children:"New Product"}),a.jsx("option",{value:"HighPrice",children:"High Price"}),a.jsx("option",{value:"LowPrice",children:"Low Price"})]})})]}),a.jsx("div",{className:"grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around",children:"MostPopular"===m?a.jsx(n.Suspense,{fallback:a.jsx(s,{}),children:a.jsx(i,{products:e?.data})}):"New"===m?a.jsx(n.Suspense,{fallback:a.jsx(s,{}),children:a.jsx(c,{products:t?.data})}):"HighPrice"===m?a.jsx(n.Suspense,{fallback:a.jsx(s,{}),children:a.jsx(d,{products:r?.data})}):"LowPrice"===m?a.jsx(n.Suspense,{fallback:a.jsx(s,{}),children:a.jsx(u,{products:l?.data})}):a.jsx(a.Fragment,{})}),a.jsx("div",{className:"my-5",children:a.jsx(o.default,{totalPages:x,currentPage:1,redirectTo:"/category/page"})})]})}},88993:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,generateMetadata:()=>d});var a=r(19510);r(71159);var s=r(73584),o=r(68570);let l=(0,o.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\category\_components\FilterBySelection.tsx`),{__esModule:n,$$typeof:i}=l;l.default;let c=(0,o.createProxy)(String.raw`D:\Works\Client_Projects\elite_commerce\src\app\(main-layout)\category\_components\FilterBySelection.tsx#default`);async function d(){return{title:"Category | Elite Commerce",description:"All categories of products"}}let u=async()=>{let e=await (0,s.fetchData)({route:"/product",query:"sortBy=averageRating&sortOrder=desc",limit:12}),t=await (0,s.fetchData)({route:"/product",query:"sortBy=createdAt&sortOrder=desc",limit:12}),r=await (0,s.fetchData)({route:"/product",query:"sortBy=variants.sellingPrice&sortOrder=asc",limit:12}),o=await (0,s.fetchData)({route:"/product",query:"sortBy=variants.sellingPrice&sortOrder=desc",limit:12});return a.jsx("div",{className:"",children:a.jsx("div",{className:" mb-6",children:a.jsx("div",{className:"",children:a.jsx(c,{mostPopularProducts:e,newProducts:t,highPriceProducts:o,lowPriceProducts:r})})})})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[8948,4406,4599,3624,9834,5496,4788,4426,9069,2478],()=>r(75665));module.exports=a})();