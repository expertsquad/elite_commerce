(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{5258:function(e,t,s){Promise.resolve().then(s.bind(s,678))},8064:function(e,t,s){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return a}});let r=s(4590);function a(e){let{createServerReference:t}=s(6671);return t(e,r.callServer)}},2319:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{IconComponent:t,className:s="",...a}=e;return(0,r.jsx)("div",{className:"relative inline-block",children:(0,r.jsx)(t,{className:"".concat(s),style:{stroke:"url(#gradient1)"},...a})})}},1902:function(e,t,s){"use strict";s.d(t,{S:function(){return i}});var r=s(7437),a=s(1054),l=s(2265);let n={user:{},setRefetch:()=>{}},i=(0,l.createContext)(n);t.default=e=>{let{children:t}=e,[s,d]=(0,l.useState)(n.user),[c,o]=(0,l.useState)(0);return(0,l.useEffect)(()=>{(async()=>{try{let{data:e}=await (0,a.p)({route:"/user/me"});d(e)}catch(e){}})()},[c]),(0,r.jsx)(i.Provider,{value:{user:s,setRefetch:o},children:t})}},1054:function(e,t,s){"use strict";s.d(t,{p:function(){return a},r:function(){return l}}),s(4590);var r=s(8064),a=(0,r.$)("35ddf41ff69e5ff250c7ca452dad145fa2af36ae"),l=(0,r.$)("277c156ab0d8fe426893b02d2d0844c0ba4283b2")},678:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return N}});var r=s(7437),a=s(8313),l=s(2265),n=s(7138),i=(0,s(5487).Z)("outline","edit","IconEdit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]]),d=s(2319),c=s(6613),o=s(1902),u=()=>{let{user:e}=(0,l.useContext)(o.S),{orderData:t}=(0,l.useContext)(c.Y),s=t.shippingAddress;return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("h3",{className:"uppercase text-lg font-semibold text-gradient-primary my-3 ",children:[" ","Contact Information"]}),(0,r.jsxs)("div",{className:"border border-black-10 rounded-lg p-5",children:[(0,r.jsx)("div",{className:" ",children:(0,r.jsxs)("div",{className:"flex items-center justify-between  gap-2 border-b border-black-10 py-2",children:[(0,r.jsxs)("div",{className:"flex lg:flex-row flex-col gap-2 lg:justify-between justify-start",children:[(0,r.jsxs)("small",{className:"flex items-center justify-center text-sm  gap-2",children:["Email: ",(0,r.jsxs)("p",{className:"text-base text-black-80",children:[" ",null==e?void 0:e.email]})]}),(0,r.jsxs)("small",{className:"flex items-center justify-center text-sm  gap-2",children:["Phone:"," ",(0,r.jsxs)("p",{className:"text-base text-black-80",children:[" ",e.phoneNumber]})]})]}),(0,r.jsxs)(n.default,{href:"/profile/account-details",className:"text-gradient-primary flex items-center justify-center gap-2",children:[(0,r.jsx)(d.Z,{IconComponent:i})," Edit"]})]})}),(0,r.jsxs)("div",{className:"flex items-center justify-between py-3",children:[(0,r.jsxs)("div",{className:"flex items-start justify-start gap-3 flex-col ",children:[(0,r.jsx)("h4",{className:"text-black-50",children:"Ship to"}),(0,r.jsx)("strong",{children:s.firstName+" "+s.lastName}),(0,r.jsx)("p",{children:s.streetAddress}),(0,r.jsx)("p",{children:s.country+" "+s.state+" "+s.zipCode}),(0,r.jsx)("p",{children:s.phoneNumber})]}),(0,r.jsx)("div",{className:"flex items-center justify-center ",children:(0,r.jsxs)(n.default,{href:"/shipping-info",className:"text-gradient-primary flex items-center justify-center gap-2",children:[(0,r.jsx)(d.Z,{IconComponent:i})," Edit"]})})]})]})]})},m=s(1181),p=s(3766),h=e=>{let{onNewAddressChange:t}=e,[s,a]=(0,l.useState)({firstName:"",lastName:"",phoneNumber:"",state:"",zipCode:"",companyName:"",streetAddress:"",country:"",isDefault:!1}),n=e=>{let{name:r,value:l,type:n,checked:i}=e.target,d={...s,[r]:"checkbox"===n?i:l};a(d),t(d)},{orderData:i,setOrderData:d}=(0,l.useContext)(c.Y),o=null==i?void 0:i.billingAddress;return(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2",children:[(0,r.jsx)(p.Z,{label:"First Name",type:"text",name:"firstName",placeholder:"Zayed",value:s.firstName,onChange:n,inputStyle:(null==o?void 0:o.firstName)===""?" border border-danger":""}),(0,r.jsx)(p.Z,{label:"Last Name",type:"text",name:"lastName",placeholder:"Hossain",value:s.lastName,onChange:n,inputStyle:(null==o?void 0:o.lastName)===""?" border border-danger":""}),(0,r.jsx)(p.Z,{label:"Phone Number",type:"text",name:"phoneNumber",placeholder:"017*******",value:s.phoneNumber,onChange:n,inputStyle:(null==o?void 0:o.phoneNumber)===""?" border border-danger":""}),(0,r.jsxs)("label",{htmlFor:"country",className:"text-black-50",children:["Select Country",(0,r.jsx)("select",{name:"country",id:"country",className:"w-full border border-black-10 text-black-80 px-3.5 py-2.5 mt-2 focus:outline-none focus:border-fuchsia-800 rounded-md",value:null==s?void 0:s.country,onChange:n,children:null===m.i||void 0===m.i?void 0:m.i.map(e=>(0,r.jsx)("option",{value:e,children:e},e))})]}),(0,r.jsx)(p.Z,{label:"State",type:"text",name:"state",placeholder:"California",value:s.state,onChange:n,inputStyle:(null==o?void 0:o.state)===""?" border border-danger":""}),(0,r.jsx)(p.Z,{label:"Zip Code",type:"text",name:"zipCode",placeholder:"00108",value:s.zipCode,onChange:n,inputStyle:(null==o?void 0:o.zipCode)===""?" border border-danger":""}),(0,r.jsx)(p.Z,{label:"Company Name (Optional)",type:"text",name:"companyName",placeholder:"Company Name",value:s.companyName,onChange:n}),(0,r.jsx)(p.Z,{label:"Street Address",type:"text",name:"streetAddress",placeholder:"1234 Main St",value:s.streetAddress,onChange:n,inputStyle:(null==o?void 0:o.streetAddress)===""?" border border-danger":""})]})})},x=()=>{let[e,t]=(0,l.useState)("sameAsShipping"),{orderData:s,setOrderData:a}=(0,l.useContext)(c.Y);(0,l.useEffect)(()=>{"sameAsShipping"===e&&a(e=>({...e,billingAddress:null==s?void 0:s.shippingAddress}))},[e,null==s?void 0:s.shippingAddress,a]);let n=e=>{let r=e.target.value;t(r),"sameAsShipping"===r&&a(e=>({...e,billingAddress:null==s?void 0:s.shippingAddress}))};return(0,r.jsxs)("div",{className:"md:border md:border-black-10 border-transparent md:p-7 p-5 rounded-lg",children:[(0,r.jsx)(u,{}),(0,r.jsxs)("div",{className:"my-5 flex items-center justify-start gap-5",children:[(0,r.jsxs)("label",{className:"inline-flex items-center mb-4 cursor-pointer",children:[(0,r.jsx)("div",{className:"w-5 h-5 rounded-full bg-white flex items-center justify-center border-gradient-primary p-[2px] ".concat("sameAsShipping"===e?"border-gradient-primary p-[2px]":""),children:"sameAsShipping"===e&&(0,r.jsx)("div",{className:"h-3 w-3 bg-gradient-primary rounded-full"})}),(0,r.jsx)("span",{className:"ml-2",children:"Same as Shipping Address"}),(0,r.jsx)("input",{type:"radio",value:"sameAsShipping",name:"billingOption",checked:"sameAsShipping"===e,onChange:n,className:"hidden"})]}),(0,r.jsxs)("label",{className:"inline-flex items-center mb-4 cursor-pointer",children:[(0,r.jsx)("div",{className:"w-5 h-5 rounded-full bg-white flex items-center justify-center border-gradient-primary p-[2px] ".concat("addNewBillingAddress"===e?"border-gradient-primary p-[2px]":""),children:"addNewBillingAddress"===e&&(0,r.jsx)("div",{className:"h-3 w-3 bg-gradient-primary rounded-full"})}),(0,r.jsx)("span",{className:"ml-2",children:"Use a different billing address"}),(0,r.jsx)("input",{type:"radio",value:"addNewBillingAddress",name:"billingOption",checked:"addNewBillingAddress"===e,onChange:n,className:"hidden"})]})]}),"addNewBillingAddress"===e&&(0,r.jsx)(h,{onNewAddressChange:t=>{"addNewBillingAddress"===e&&a(e=>({...e,billingAddress:t}))}})]})},g=s(6648),f=e=>{let{name:t,cardIcon:s,title:a,onSelect:l}=e;return(0,r.jsxs)("div",{className:"flex items-center justify-start gap-4 bg-gradient-primary-light p-5 rounded-lg ",children:[(0,r.jsx)("input",{type:"radio",className:"h-5 w-5",name:"paymentOption",onChange:l})," ",(0,r.jsx)(g.default,{alt:"Card Image",src:s,height:30,width:30}),(0,r.jsx)("p",{children:a})]})},b={src:"/_next/static/media/CODIcon.7ca065d0.svg",height:24,width:24,blurWidth:0,blurHeight:0},j=()=>{let{orderData:e,setOrderData:t}=(0,l.useContext)(c.Y);return(0,r.jsxs)("div",{className:"border border-black-10 p-7 rounded-lg my-7",children:[(0,r.jsx)("h3",{className:"uppercase text-lg font-semibold text-gradient-primary my-3 ",children:"Choose payment option:"}),(0,r.jsx)("div",{children:(0,r.jsx)(f,{name:"COD",title:"Cash On Delivery",cardIcon:b,onSelect:()=>{t({...e,payment:{...e.payment,paymentStatus:"Unpaid",paymentMethod:"COD"}})}})})]})};s(4590);var y=(0,s(8064).$)("ab54bbe1a2301d5da7b823362848644b98224357"),v=s(6463),N=()=>{let e=(0,v.useRouter)(),{orderData:t}=(0,l.useContext)(c.Y),s=async s=>{s.preventDefault(),s.stopPropagation();let r=null==t?void 0:t.shippingAddress,a=null==r?void 0:r.zipCode;"string"==typeof a&&(a=Number(a));let l=(null==t?void 0:t.billingAddress).zipCode;"string"==typeof l&&(l=Number(l));try{var n;let s=await y({route:"/online-order/add",data:JSON.stringify(t),method:"POST",formatted:!0}),r=null==s?void 0:null===(n=s.data)||void 0===n?void 0:n._id;(null==s?void 0:s.success)===!0&&(localStorage.removeItem("orderInit"),e.push("/successfull/".concat(r)))}catch(e){console.error(e)}};return(0,r.jsxs)("section",{className:"p-5 lg:p-0 max-w-7xl mx-auto flex w-full gap-5 flex-col md:flex-row mb-10",children:[(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(x,{}),(0,r.jsx)(j,{})]}),(0,r.jsx)("div",{children:(0,r.jsx)(a.default,{buttonText:"Place Order",submitAction:s})})]})}}},function(e){e.O(0,[231,8173,209,2971,7023,1744],function(){return e(e.s=5258)}),_N_E=e.O()}]);