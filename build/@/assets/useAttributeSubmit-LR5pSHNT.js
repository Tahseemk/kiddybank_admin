import{e as P,r as u,S as R}from"./index-n-Mj-w5F.js";import{u as T}from"./index.esm-cFreCkwr.js";import{A as f}from"./ProductServices-ppfcihlB.js";import{a as p,n as S}from"./toast--43O7F4z.js";import{u as U}from"./DrawerButton-CC7bgkMS.js";const J=r=>{const o=P(),{isDrawerOpen:C,closeDrawer:m,setIsUpdate:g,lang:y}=u.useContext(R),[c,h]=u.useState([]),[s,I]=u.useState(y),[w,x]=u.useState({}),[v,E]=u.useState(!1),[O,i]=u.useState(!1),{setServiceId:b}=U();let A=[];(async()=>{for(let t=0;t<c.length;t++)A=[...A,{name:{[s]:c[t]}}]})();const{handleSubmit:V,register:L,setValue:n,clearErrors:d,formState:{errors:j}}=T(),B=async({title:t,name:a,option:e})=>{try{if(i(!0),!r&&c.length===0){p("Minimum one value is required for add attribute!");return}const l={title:{[s]:t},name:{[s]:a},variants:A,option:e,type:"attribute",lang:s};if(r){const D=await f.updateAttributes(r,l);g(!0),i(!1),S(D.message),m(),b()}else{const D=await f.addAttribute(l);g(!0),i(!1),S(D.message),m(),b()}}catch(l){p(l?l.response.data.message:l.message),m(),i(!1),b()}},k=async({name:t})=>{try{if(i(!0),r){const a=await f.updateChildAttributes({ids:o.pathname.split("/")[2],id:r},{name:{[s]:t},status:v?"show":"hide"});g(!0),i(!1),S(a.message),m()}else{const a=await f.addChildAttribute(o.pathname.split("/")[2],{name:{[s]:t},status:v?"show":"hide"});g(!0),i(!1),S(a.message),m()}}catch(a){p(a?a.response.data.message:a.message),m(),i(!1),b()}},q=t=>{I(t),Object.keys(w).length>0&&(n("title",w.title[t||"en"]),n("name",w.name[t||"en"]))},F=t=>{h([...c.filter((a,e)=>e!==t)])},M=t=>{t.preventDefault(),t.target.value!==""&&(h([...c,t.target.value]),t.target.value="")};return u.useEffect(()=>{if(!C){x({}),n("title"),n("name"),n("option"),d("title"),d("name"),d("option"),h([]),I(y),n("language",s);return}o.pathname==="/attributes"&&r?(async()=>{var t,a;try{const e=await f.getAttributeById(r);e&&(x(e),n("title",e.title[s||"en"]),n("name",e.name[s||"en"]),n("option",e.option))}catch(e){p(((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||(e==null?void 0:e.message))}})():o.pathname===`/attributes/${o.pathname.split("/")[2]}`&&(async()=>{var t,a;try{const e=await f.getChildAttributeById({id:o.pathname.split("/")[2],ids:r});e&&(n("name",e.name[s||"en"]),E(e.status==="show"))}catch(e){p(((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||(e==null?void 0:e.message))}})()},[d,r,C,n,o,s,y]),{handleSubmit:V,onSubmits:k,onSubmit:B,register:L,errors:j,variants:c,setVariants:h,addVariant:M,removeVariant:F,published:v,setPublished:E,isSubmitting:O,handleSelectLanguage:q}};export{J as u};
