import{u as d,j as e,d as o,L as x}from"./index-n-Mj-w5F.js";import{I as u,a as h}from"./index.esm-iF2rPX6B.js";import{E as t}from"./AdminServices-G0hlKUD3.js";import{I as m}from"./InputArea-BBW6Yhkf.js";import{L as l}from"./index.esm-cFreCkwr.js";import{S as p}from"./SelectRole-M8rdx21s.js";import{u as f}from"./useLoginSubmit-KzLDclVY.js";import"./iconBase-gI-AVLnd.js";import"./httpService-jqtz-xtI.js";import"./toast--43O7F4z.js";import"./useDispatch-oTJCh-Ew.js";const j="/@/assets/create-account-office-5O8RoISS.jpeg",b="/@/assets/create-account-office-5O8RoISS.jpeg",R=()=>{const{t:s}=d(),{onSubmit:i,register:a,handleSubmit:n,errors:r,loading:c}=f();return e.jsx("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:e.jsx("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800",children:e.jsxs("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[e.jsxs("div",{className:"h-32 md:h-auto md:w-1/2",children:[e.jsx("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:j,alt:"Office"}),e.jsx("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:b,alt:"Office"})]}),e.jsx("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:"mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:s("CreateAccount")}),e.jsxs("form",{onSubmit:n(i),children:[e.jsx(l,{label:"Name"}),e.jsx(m,{register:a,label:"Name",name:"name",type:"text",placeholder:"Admin"}),e.jsx(t,{errorName:r.name}),e.jsx(l,{label:"Email"}),e.jsx(m,{register:a,label:"Email",name:"email",type:"email",placeholder:"john@doe.com"}),e.jsx(t,{errorName:r.email}),e.jsx(l,{label:"Password"}),e.jsx(m,{register:a,label:"Password",name:"password",type:"password",autocomplete:"current-password",placeholder:"***************"}),e.jsx(t,{errorName:r.password}),e.jsx(l,{label:"Staff Role"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(p,{register:a,label:"Role",name:"role"}),e.jsx(t,{errorName:r.role})]}),e.jsxs(o.Label,{className:"mt-6",check:!0,children:[e.jsx(o.Input,{type:"checkbox"}),e.jsxs("span",{className:"ml-2",children:[s("Iagree")," ",e.jsx("span",{className:"underline",children:s("privacyPolicy")})]})]}),e.jsx(o.Button,{disabled:c,type:"submit",className:"mt-4 h-12 w-full",to:"/dashboard",block:!0,children:s("CreateAccountTitle")})]}),e.jsx("hr",{className:"my-10"}),e.jsxs("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2 md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2",children:[e.jsx(u,{className:"w-4 h-4 mr-2"})," ",e.jsxs("span",{className:"ml-2",children:[" ",s("LoginWithFacebook")," "]})]}),e.jsxs("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2  md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full",children:[e.jsx(h,{className:"w-4 h-4 mr-2"})," ",e.jsx("span",{className:"ml-2",children:s("LoginWithGoogle")})]}),e.jsx("p",{className:"mt-4",children:e.jsx(x,{className:"text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:underline",to:"/login",children:s("AlreadyAccount")})})]})})]})})})};export{R as default};
