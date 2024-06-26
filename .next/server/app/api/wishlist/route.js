"use strict";(()=>{var e={};e.id=9100,e.ids=[9100],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7681:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>h,patchFetch:()=>m,requestAsyncStorage:()=>l,routeModule:()=>u,serverHooks:()=>f,staticGenerationAsyncStorage:()=>d});var s={};r.r(s),r.d(s,{POST:()=>p});var a=r(49303),n=r(88716),o=r(60670),i=r(45926),c=r(87070);async function p(e){let{products:t}=await e.json(),r=e.headers.get("cookie")||"";if(!r.split(";").find(e=>e.trim().startsWith("accessToken="))?.split("=")[1])return c.NextResponse.json({message:"Unauthorized"},{status:401});try{let e=JSON.stringify({products:t});return await (0,i.updateDataMutation)({route:"/wishlist/add",dataType:"json",data:e,formatted:!0,method:"POST"}),c.NextResponse.json({success:!0},{status:200})}catch(e){return c.NextResponse.json({success:!1,error:e},{status:500})}}let u=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/wishlist/route",pathname:"/api/wishlist",filename:"route",bundlePath:"app/api/wishlist/route"},resolvedPagePath:"D:\\Works\\Client_Projects\\elite_commerce\\src\\app\\api\\wishlist\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:f}=u,h="/api/wishlist/route";function m(){return(0,o.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:d})}},97049:(e,t,r)=>{e.exports=r(23191).vendored["react-rsc"].ReactDOM},51749:(e,t,r)=>{e.exports=r(23191).vendored["react-rsc"].ReactServerDOMWebpackServerEdge},38238:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,t,r){let s=Reflect.get(e,t,r);return"function"==typeof s?s.bind(e):s}static set(e,t,r,s){return Reflect.set(e,t,r,s)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},45926:(e,t,r)=>{r.r(t),r.d(t,{$$ACTION_0:()=>c,updateDataMutation:()=>i});var s=r(24330);r(60166);var a=r(56889),n=r(71615),o=r(40618);let i=(0,s.j)("0b146066b212be61a4adc70fb18850d23693ca98",c);async function c({route:e,dataType:t="json",formatted:r=!1,data:s,method:o="PATCH"}){try{let i=n.cookies().get("accessToken")?.value;if(!i)throw Error("Access token not found, please login again!");let c=s;if(!r){let e={};if(s instanceof FormData)for(let[t,r]of Array.from(s.entries()))e[t]=r;"json"===t?c=JSON.stringify(e):(c=new FormData,Object.entries(e).forEach(([e,t])=>{c.append(e,t)}))}let p={authorization:`Bearer ${i}`};"json"===t&&(p["Content-Type"]="application/json");let u=await fetch(a.xW+e,{method:o,headers:p,body:c});return await u.json()}catch(e){throw e}}(0,o.h)([i]),(0,s.j)("ab54bbe1a2301d5da7b823362848644b98224357",i)},56889:(e,t,r)=>{r.d(t,{Sv:()=>a,V$:()=>s,xW:()=>n});let s="Elite Commerce",a="https://api.theqprint.com/",n="https://api.theqprint.com/api/v1"}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[8948,4599,5972],()=>r(7681));module.exports=s})();