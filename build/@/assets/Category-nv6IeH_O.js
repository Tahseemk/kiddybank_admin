import{u as y,j as e,r as o,S as _,d as l}from"./index-n-Mj-w5F.js";import{a as $,b as q,c as G}from"./Layout-Uoy8HDDZ.js";import{u as b}from"./index-oM8Nn_6I.js";import{C}from"./ProductServices-ppfcihlB.js";import{u as J,M as K}from"./DrawerButton-CC7bgkMS.js";import{u as Q}from"./useFilter-Zzka6Kl5.js";import{D as V}from"./EditDeleteButton-RGitrSAk.js";import{a as W,B as X}from"./BulkActionDrawer-IN1fGV6Z.js";import{P as Y}from"./PageTitle-tRfcP2yT.js";import{C as Z,a as ee}from"./CategoryTable-hRRCAeks.js";import{U as le}from"./UploadManyTwo-oEqFeSV7.js";import{T as se}from"./TableLoading-fjBCCBKo.js";import{C as ae}from"./ShowHideButton-0v0Cvicz.js";import{N as te}from"./NotFound-q_Rgz-SQ.js";import"./iconBase-gI-AVLnd.js";import"./httpService-jqtz-xtI.js";import"./spinner-R50PTWTV.js";import"./toast--43O7F4z.js";import"./AdminServices-G0hlKUD3.js";import"./index-MepfRMvd.js";import"./index.esm-cFreCkwr.js";import"./useDispatch-oTJCh-Ew.js";import"./InputArea-BBW6Yhkf.js";import"./Uploader-8ANEOpFA.js";import"./tslib.es6-YYMLUA4o.js";import"./exportFromJSON-vc2Lqcy6.js";const re=({title:n,handleProcess:r,processOption:a})=>{const{t:i}=y();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mb-3",children:e.jsxs("div",{className:"flex flex-wrap items-center float-right",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:n}),e.jsx(W,{onChange:r,checked:a,className:"react-switch md:ml-0 ml-3",uncheckedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"left",alignItems:"center",height:"100%",fontSize:12,color:"white",paddingRight:50,paddingTop:1,marginLeft:-40,whiteSpace:"nowrap"},children:i("ParentsOnly")}),width:115,height:28,handleDiameter:26,offColor:"#0e9f6e",onColor:"#2F855A",checkedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:12,color:"white",paddingLeft:8,paddingTop:1},children:i("All")})})]})})})},Ie=()=>{var j,u;const{toggleDrawer:n,lang:r}=o.useContext(_),{data:a,loading:i,error:h}=b(C.getAllCategory),{data:N}=b(C.getAllCategories),{handleDeleteMany:T,allId:g,handleUpdateMany:k,serviceId:v}=J(),{t:s}=y(),{handleSubmitCategory:p,categoryRef:f,totalResults:S,resultsPerPage:A,dataTable:F,serviceData:c,handleChangePage:D,filename:B,isDisabled:I,setCategoryType:P,handleSelectFile:M,handleUploadMultiple:R,handleRemoveSelectFile:E}=Q((j=a[0])!=null&&j.children?(u=a[0])==null?void 0:u.children:a),[m,U]=o.useState(!1),[t,d]=o.useState([]),[x,L]=o.useState(!1),z=()=>{var w;U(!m),d((w=a[0])==null?void 0:w.children.map(H=>H._id)),m&&d([])},O=()=>{P(""),f.current.value=""};return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:s("Category")}),e.jsx(V,{ids:g,setIsCheck:d}),e.jsx(X,{ids:g,title:"Categories",lang:r,data:a,isCheck:t}),e.jsx(K,{children:e.jsx(Z,{id:v,data:a,lang:r})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(l.CardBody,{className:"",children:e.jsxs("form",{onSubmit:p,className:"py-3  grid gap-4 lg:gap-6 xl:gap-6  xl:flex",children:[e.jsx("div",{className:"flex justify-start w-1/2 xl:w-1/2 md:w-full",children:e.jsx(le,{title:"Categories",exportData:N,filename:B,isDisabled:I,handleSelectFile:M,handleUploadMultiple:R,handleRemoveSelectFile:E})}),e.jsxs("div",{className:"lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0",children:[e.jsx("div",{className:"w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0",children:e.jsxs(l.Button,{disabled:t.length<1,onClick:()=>k(t),className:"w-full rounded-md h-12 text-gray-600 btn-gray",children:[e.jsx("span",{className:"mr-2",children:e.jsx($,{})}),s("BulkAction")]})}),e.jsx("div",{className:"w-full md:w-32 lg:w-32 xl:w-32  mr-3 mb-3 lg:mb-0",children:e.jsxs(l.Button,{disabled:t.length<1,onClick:()=>T(t),className:"w-full rounded-md h-12 bg-red-500 disabled  btn-red",children:[e.jsx("span",{className:"mr-2",children:e.jsx(q,{})}),s("Delete")]})}),e.jsx("div",{className:"w-full md:w-48 lg:w-48 xl:w-48",children:e.jsxs(l.Button,{onClick:n,className:"rounded-md h-12 w-full",children:[e.jsx("span",{className:"mr-2",children:e.jsx(G,{})}),s("AddCategory")]})})]})]})})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4",children:e.jsx(l.CardBody,{children:e.jsxs("form",{onSubmit:p,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(l.Input,{ref:f,type:"search",placeholder:s("SearchCategory")})}),e.jsxs("div",{className:"flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx("div",{className:"w-full mx-1",children:e.jsx(l.Button,{type:"submit",className:"h-12 w-full bg-emerald-700",children:"Filter"})}),e.jsx("div",{className:"w-full mx-1",children:e.jsx(l.Button,{layout:"outline",onClick:O,type:"reset",className:"px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})})]})]})})}),e.jsx(re,{title:" ",handleProcess:L,processOption:x,name:x}),i?e.jsx(se,{row:12,col:6,width:190,height:20}):h?e.jsx("span",{className:"text-center mx-auto text-red-500",children:h}):(c==null?void 0:c.length)!==0?e.jsxs(l.TableContainer,{className:"mb-8",children:[e.jsxs(l.Table,{children:[e.jsx(l.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(l.TableCell,{children:e.jsx(ae,{type:"checkbox",name:"selectAll",id:"selectAll",handleClick:z,isChecked:m})}),e.jsx(l.TableCell,{children:s("catIdTbl")}),e.jsx(l.TableCell,{children:s("catIconTbl")}),e.jsx(l.TableCell,{children:s("CatTbName")}),e.jsx(l.TableCell,{children:s("CatTbDescription")}),e.jsx(l.TableCell,{className:"text-center",children:s("catPublishedTbl")}),e.jsx(l.TableCell,{className:"text-right",children:s("catActionsTbl")})]})}),e.jsx(ee,{data:a,lang:r,isCheck:t,categories:F,setIsCheck:d,showChild:x})]}),e.jsx(l.TableFooter,{children:e.jsx(l.Pagination,{totalResults:S,resultsPerPage:A,onChange:D,label:"Table navigation"})})]}):e.jsx(te,{title:"Sorry, There are no categories right now."})]})};export{Ie as default};
