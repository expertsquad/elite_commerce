(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6070],{6070:function(e,t,l){Promise.resolve().then(l.t.bind(l,8173,23)),Promise.resolve().then(l.t.bind(l,231,23)),Promise.resolve().then(l.bind(l,3890))},6648:function(e,t,l){"use strict";l.d(t,{default:function(){return s.a}});var r=l(5601),s=l.n(r)},6463:function(e,t,l){"use strict";var r=l(1169);l.o(r,"usePathname")&&l.d(t,{usePathname:function(){return r.usePathname}}),l.o(r,"useRouter")&&l.d(t,{useRouter:function(){return r.useRouter}})},5601:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{default:function(){return c},getImageProps:function(){return n}});let r=l(9920),s=l(497),i=l(8173),a=r._(l(1241));function n(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}}let c=i.Image},2796:function(e,t,l){"use strict";l.d(t,{z:function(){return s}});var r=l(7437);let s=e=>{let{children:t,className:l,onClick:s,disabled:i}=e,a="flex items-center justify-center gap-2 ".concat(l);return s?(0,r.jsx)("button",{className:a,onClick:s,children:t}):(0,r.jsx)("button",{className:"".concat(a," ").concat(i&&"opacity-50"),type:"submit",disabled:i,children:t})}},9399:function(e,t,l){"use strict";var r=l(7437);l(2265);let s=async e=>{let{handleSubmit:t,children:l,className:s}=e;return(0,r.jsx)("form",{className:s,action:t,children:l})};t.Z=s},9662:function(e,t,l){"use strict";var r=l(7437),s=l(2265),i=l(4887),a=l(2796),n=l(2966),c=l(6463);t.Z=e=>{let t,l,{show:o,setShow:d,children:u,alignment:h,className:m,isIntercepting:x=!1,showCancelBtnINSmallDevice:f=!1}=e,[v,p]=(0,s.useState)(!1),g=(0,c.useRouter)();"left"===h?(t="translate-x-0",l="-translate-x-1/2"):"center"===h?(t="scale-1",l="scale-0"):"right"===h&&(t="translate-x-0",l="translate-x-1/2"),(0,s.useEffect)(()=>{o?p(!0):p(!1)},[o]);let j=()=>{p(!1),x&&g.back(),setTimeout(()=>d(!1),300)};return(0,i.createPortal)((0,r.jsx)("div",{className:"fixed inset-0 z-50 backdrop-blur-sm bg-black-transparent transition-opacity duration-300 ease-in-out flex items-center ".concat("right"===h&&"justify-end"," ").concat("center"===h&&"justify-center"," ").concat(v?"opacity-100":"opacity-0"),onClick:j,children:(0,r.jsxs)("div",{className:"rounded-r-xl md:rounded-3xl relative shadow-black-50 drop-shadow-2xl bg-white lg:p-5 duration-300 ease-in-out\n         ".concat("center"!==h&&"h-full md:h-[calc(100%-16px)] md:m-2","\n           ").concat(v?t:l," ").concat(m),onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(a.z,{className:"absolute top-5 right-5 lg:top-6 lg:right-6 z-50 ".concat(f?"block":"hidden"),onClick:j,children:(0,r.jsx)(n.Z,{size:20})}),u]})}),document.body)}},7426:function(e,t,l){"use strict";var r=l(7437);l(2265);var s=l(8597);t.Z=e=>{let{rating:t,className:l="w-3.5 h-3.5 md:w-4.5 md:h-4.5"}=e,i=Math.round(t),a=5-i;return isNaN(i)||isNaN(a)?null:(0,r.jsxs)("div",{className:"flex items-center gap-0.5",children:[[...Array(i)].map((e,t)=>(0,r.jsx)(s.Z,{className:"text-[#E73C17] ".concat(l)},t)),[...Array(a)].map((e,t)=>(0,r.jsx)(s.Z,{className:"text-black-10 ".concat(l)},t))]})}},3388:function(e,t,l){"use strict";var r=l(7437),s=l(2796);l(2265);var i=l(4887);t.default=e=>{let{children:t,...l}=e,{pending:a}=(0,i.useFormStatus)();return(0,r.jsx)(s.z,{...l,disabled:a,children:t})}},3890:function(e,t,l){"use strict";l.d(t,{default:function(){return p}});var r=l(7437),s=l(2796),i=l(9662),a=l(2265),n=l(3259),c=(0,l(5487).Z)("outline","photo-plus","IconPhotoPlus",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4",key:"svg-2"}],["path",{d:"M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54",key:"svg-3"}],["path",{d:"M16 19h6",key:"svg-4"}],["path",{d:"M19 16v6",key:"svg-5"}]]),o=l(6648),d=e=>{let{name:t,url:l,multiple:s=!1,accept:i,maxSize:d,error:u,className:h,disabled:m,bottomText:x,uid:f=1}=e,[v,p]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"w-full h-full flex flex-col items-center justify-center relative ".concat(h),children:[(0,r.jsxs)("label",{className:"flex flex-col justify-center items-center h-full w-full",children:[v?(0,r.jsx)(o.default,{src:v,alt:t,fill:!0,className:"inset-0 object-cover"}):l?(0,r.jsx)(o.default,{src:n.Sv+l,alt:t,fill:!0,className:"inset-0 object-cover"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{width:30,height:30,stroke:1}),(0,r.jsxs)("span",{className:"flex flex-col text-center text-sm",children:[(0,r.jsx)("span",{children:"Select Your Image"}),d&&(0,r.jsxs)("small",{className:"text-gray-500",children:["Max size:"," ",(0,r.jsxs)("span",{className:"text-orange-700",children:[" ",d," MB"]})]}),(0,r.jsx)("span",{className:"text-fuchsia-800 underline font-medium",children:"Click to browse"})]})]}),(0,r.jsx)("input",{className:"hidden",name:t,id:f.toString(),type:"file",onChange:e=>{var t,l,r,s;if(d&&(null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.files)&&(null==e?void 0:null===(r=e.target)||void 0===r?void 0:null===(l=r.files[0])||void 0===l?void 0:l.size)>1048576*d){alert("File size should be less than ".concat(d," MB"));return}(null===(s=e.target.files)||void 0===s?void 0:s.length)&&p(URL.createObjectURL(e.target.files[0]))},accept:i,multiple:s,disabled:m})]}),(0,r.jsx)("p",{className:"mt-2 text-gray-500 ",children:x})]})},u=l(9399),h=l(3388),m=l(8597),x=e=>{let{orderItem:t,orderId:l,addCommentSubmitAction:s}=e,[i,c]=(0,a.useState)(0),x=(e,t)=>{t.preventDefault(),t.stopPropagation(),c(e+1)},f=async e=>{s(null==t?void 0:t.productId,l,i,e)};return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Product Review"}),(0,r.jsxs)("div",{className:"py-6 flex items-center justify-center flex-col gap-2 border-b border-black-10",children:[(0,r.jsx)("div",{className:"bg-gradient-primary-light p-8 rounded-full h-40 w-40",children:(0,r.jsx)(o.default,{src:"".concat(n.Sv+(null==t?void 0:t.productPhotos[0])),height:100,width:100,alt:"Product Photo"})}),(0,r.jsx)("p",{children:null==t?void 0:t.productName})]})]}),(0,r.jsxs)(u.Z,{handleSubmit:f,children:[(0,r.jsxs)("div",{className:"my-6 flex-grow",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("small",{children:"Rate your satisfaction"}),(0,r.jsx)("div",{className:"flex",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,r.jsx)(m.Z,{width:20,height:20,className:t<=i-1?"text-secondary":"text-black-50",onClick:e=>x(t,e)},t))})]}),(0,r.jsx)("textarea",{className:"w-full h-36 border border-black-10 rounded-lg p-5 my-5",maxLength:100,placeholder:"Write Here",name:"comment"}),(0,r.jsx)(d,{name:"reviewPhotos"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(h.default,{className:"py-2 w-full bg-gradient-primary rounded-full text-white",children:"Submit Review"})})]})]})},f=l(7426),v=e=>{var t,l;let{comment:i}=e;return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Product Review"}),(0,r.jsxs)("div",{className:"py-6 flex items-center justify-center flex-col gap-2 border-b border-black-10",children:[(0,r.jsx)("div",{className:"bg-gradient-primary-light p-8 rounded-full h-40 w-40",children:(0,r.jsx)(o.default,{src:"".concat(n.Sv+(null==i?void 0:null===(t=i.product)||void 0===t?void 0:t.productPhoto)),height:100,width:100,alt:"Product Photo"})}),(0,r.jsx)("p",{children:null==i?void 0:null===(l=i.product)||void 0===l?void 0:l.productName})]})]}),(0,r.jsxs)("div",{className:"my-6 flex-grow",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("small",{children:"Rate your satisfaction"}),(0,r.jsx)(f.Z,{rating:3})]}),(0,r.jsx)("textarea",{className:"w-full h-36 border border-black-10 rounded-lg p-5 my-5",maxLength:100,placeholder:"Write Here",value:null==i?void 0:i.comment})]}),(0,r.jsx)("div",{children:(0,r.jsx)(s.z,{className:"py-2 w-full bg-gradient-primary rounded-full text-white",children:"Submit Review"})})]})},p=e=>{let{isReviewed:t,orderStatus:l,comment:n,orderItem:c,orderId:o,addCommentSubmitAction:d}=e,[u,h]=(0,a.useState)(!1),[m,f]=(0,a.useState)(!1);return(0,r.jsxs)("div",{children:[!1===t&&"Delivered"===l?(0,r.jsx)(s.z,{onClick:()=>h(!0),className:"py-2 px-5 bg-gradient-primary text-white rounded-lg",children:"Review Now"}):!1===t&&"Delivered"!==l?(0,r.jsx)(s.z,{className:"py-2 px-5 bg-gradient-primary text-white rounded-lg disabled cursor-not-allowed opacity-50",children:"Review Now"}):(0,r.jsx)(s.z,{onClick:()=>f(!0),className:"py-2 px-5 bg-gradient-primary text-white rounded-lg",children:"Edit Review"}),u&&(0,r.jsx)(i.Z,{show:u,setShow:h,alignment:"right",className:"overflow-y-scroll p-3 w-[clamp(350px,80vw,450px)]",showCancelBtnINSmallDevice:!0,children:(0,r.jsx)(x,{orderItem:c,orderId:o,addCommentSubmitAction:d})}),m&&(0,r.jsx)(i.Z,{show:m,setShow:f,alignment:"right",className:"overflow-y-scroll p-3 w-[clamp(350px,80vw,450px)]",showCancelBtnINSmallDevice:!0,children:(0,r.jsx)(v,{comment:n})})]})}},3259:function(e,t,l){"use strict";l.d(t,{Sv:function(){return r},al:function(){return s}});let r="https://api.theqprint.com/",s={cartProducts:"cartProducts",wishlistProducts:"wishlistProducts",orderInit:"orderInit"}},5487:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var r=l(2265),s={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(e,t,l,i)=>{let a=(0,r.forwardRef)((l,a)=>{let{color:n="currentColor",size:c=24,stroke:o=2,className:d,children:u,...h}=l;return(0,r.createElement)("svg",{ref:a,...s[e],width:c,height:c,className:["tabler-icon","tabler-icon-".concat(t),d].join(" "),..."filled"===e?{fill:n}:{strokeWidth:o,stroke:n},...h},[...i.map(e=>{let[t,l]=e;return(0,r.createElement)(t,l)}),...Array.isArray(u)?u:[u]])});return a.displayName="".concat(l),a}},8597:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,l(5487).Z)("filled","star-filled","IconStarFilled",[["path",{d:"M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z",key:"svg-0"}]])},2966:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,l(5487).Z)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])}}]);