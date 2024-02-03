import{r as k,S as z,u as G,j as e,d as s}from"./index-n-Mj-w5F.js";import{h as K}from"./Layout-Uoy8HDDZ.js";import{e as E}from"./exportFromJSON-vc2Lqcy6.js";import{a as Q}from"./toast--43O7F4z.js";import{u as W}from"./index-oM8Nn_6I.js";import{u as X}from"./useFilter-Zzka6Kl5.js";import{O as L}from"./OrderServices-WUVYMiWr.js";import{N as Y}from"./NotFound-q_Rgz-SQ.js";import{u as Z,P as ee}from"./PageTitle-tRfcP2yT.js";import{O as se}from"./OrderTable-3sliM4H7.js";import{T as te}from"./TableLoading-fjBCCBKo.js";import{s as le}from"./spinner-R50PTWTV.js";import"./iconBase-gI-AVLnd.js";import"./httpService-jqtz-xtI.js";import"./ProductServices-ppfcihlB.js";import"./useDispatch-oTJCh-Ew.js";import"./SelectStatus-x9HyXm1G.js";const ye=()=>{var O,D,S,P;const{time:m,setTime:x,status:u,endDate:g,setStatus:p,setEndDate:j,startDate:b,currentPage:I,searchText:v,searchRef:f,method:y,setMethod:C,setStartDate:T,setSearchText:M,handleChangePage:R,handleSubmitForAll:B,resultsPerPage:N}=k.useContext(z),{t}=G(),[o,c]=k.useState(!1),{data:l,loading:_,error:w}=W(()=>L.getAllOrders({day:m,method:y,status:u,page:I,endDate:g,startDate:b,limit:N,customerName:v})),{currency:V,getNumber:H,getNumberTwo:n}=Z(),{dataTable:J,serviceData:h}=X(l==null?void 0:l.orders),U=async()=>{var a,d,A;try{c(!0);const i=await L.getAllOrders({page:1,day:m,method:y,status:u,endDate:g,download:!0,startDate:b,limit:l==null?void 0:l.totalDoc,customerName:v}),q=(a=i==null?void 0:i.orders)==null?void 0:a.map(r=>{var F;return{_id:r._id,invoice:r.invoice,subTotal:n(r.subTotal),shippingCost:n(r.shippingCost),discount:n(r==null?void 0:r.discount),total:n(r.total),paymentMethod:r.paymentMethod,status:r.status,user_info:(F=r==null?void 0:r.user_info)==null?void 0:F.name,createdAt:r.createdAt,updatedAt:r.updatedAt}});E({data:q,fileName:"orders",exportType:E.types.csv}),c(!1)}catch(i){c(!1),Q(((A=(d=i==null?void 0:i.response)==null?void 0:d.data)==null?void 0:A.message)||(i==null?void 0:i.message))}},$=()=>{x(""),C(""),p(""),j(""),T(""),M(""),f.current.value=""};return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:t("Orders")}),e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(s.CardBody,{children:e.jsxs("form",{onSubmit:B,children:[e.jsxs("div",{className:"grid gap-4 lg:gap-4 xl:gap-6 md:gap-2 md:grid-cols-5 py-2",children:[e.jsx("div",{children:e.jsx(s.Input,{ref:f,type:"search",name:"search",placeholder:"Search by Customer Name"})}),e.jsx("div",{children:e.jsxs(s.Select,{onChange:a=>p(a.target.value),children:[e.jsx("option",{value:"Status",defaultValue:!0,hidden:!0,children:t("Status")}),e.jsx("option",{value:"Delivered",children:t("PageOrderDelivered")}),e.jsx("option",{value:"Pending",children:t("PageOrderPending")}),e.jsx("option",{value:"Processing",children:t("PageOrderProcessing")}),e.jsx("option",{value:"Cancel",children:t("OrderCancel")})]})}),e.jsx("div",{children:e.jsxs(s.Select,{onChange:a=>x(a.target.value),children:[e.jsx("option",{value:"Order limits",defaultValue:!0,hidden:!0,children:t("Orderlimits")}),e.jsx("option",{value:"5",children:t("DaysOrders5")}),e.jsx("option",{value:"7",children:t("DaysOrders7")}),e.jsx("option",{value:"15",children:t("DaysOrders15")}),e.jsx("option",{value:"30",children:t("DaysOrders30")})]})}),e.jsx("div",{children:e.jsxs(s.Select,{onChange:a=>C(a.target.value),children:[e.jsx("option",{value:"Method",defaultValue:!0,hidden:!0,children:t("Method")}),e.jsx("option",{value:"Cash",children:t("Cash")}),e.jsx("option",{value:"Card",children:t("Card")}),e.jsx("option",{value:"Credit",children:t("Credit")})]})}),e.jsx("div",{children:o?e.jsxs(s.Button,{disabled:!0,type:"button",className:"h-12 w-full",children:[e.jsx("img",{src:le,alt:"Loading",width:20,height:10})," ",e.jsx("span",{className:"font-serif ml-2 font-light",children:"Processing"})]}):e.jsxs("button",{onClick:U,disabled:((O=l==null?void 0:l.orders)==null?void 0:O.length)<=0||o,type:"button",className:`${(((D=l==null?void 0:l.orders)==null?void 0:D.length)<=0||o)&&"opacity-50 cursor-not-allowed bg-emerald-600"} flex items-center justify-center text-sm leading-5 h-12 w-full text-center transition-colors duration-150 font-medium px-6 py-2 rounded-md text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 `,children:["Download All Orders",e.jsx("span",{className:"ml-2 text-base",children:e.jsx(K,{})})]})})]}),e.jsxs("div",{className:"grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2",children:[e.jsxs("div",{children:[e.jsx(s.Label,{children:"Start Date"}),e.jsx(s.Input,{type:"date",name:"startDate",onChange:a=>T(a.target.value)})]}),e.jsxs("div",{children:[e.jsx(s.Label,{children:"End Date"}),e.jsx(s.Input,{type:"date",name:"startDate",onChange:a=>j(a.target.value)})]}),e.jsxs("div",{className:"mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsxs("div",{className:"w-full mx-1",children:[e.jsx(s.Label,{style:{visibility:"hidden"},children:"Filter"}),e.jsx(s.Button,{type:"submit",className:"h-12 w-full bg-emerald-700",children:"Filter"})]}),e.jsxs("div",{className:"w-full",children:[e.jsx(s.Label,{style:{visibility:"hidden"},children:"Reset"}),e.jsx(s.Button,{layout:"outline",onClick:$,type:"reset",className:"px-4 md:py-1 py-3 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})]})]})]})]})})}),((S=l==null?void 0:l.methodTotals)==null?void 0:S.length)>0&&e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4",children:e.jsx(s.CardBody,{children:e.jsx("div",{className:"flex gap-1",children:(P=l==null?void 0:l.methodTotals)==null?void 0:P.map((a,d)=>e.jsx("div",{className:"dark:text-gray-300",children:(a==null?void 0:a.method)&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"font-medium",children:[" ",a.method]})," :"," ",e.jsxs("span",{className:"font-semibold mr-2",children:[V,H(a.total)]})]})},d+1))})})}),_?e.jsx(te,{row:12,col:7,width:160,height:20}):w?e.jsx("span",{className:"text-center mx-auto text-red-500",children:w}):(h==null?void 0:h.length)!==0?e.jsxs(s.TableContainer,{className:"mb-8 dark:bg-gray-900",children:[e.jsxs(s.Table,{children:[e.jsx(s.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(s.TableCell,{children:t("InvoiceNo")}),e.jsx(s.TableCell,{children:t("TimeTbl")}),e.jsx(s.TableCell,{children:t("CustomerName")}),e.jsx(s.TableCell,{children:t("MethodTbl")}),e.jsx(s.TableCell,{children:t("AmountTbl")}),e.jsx(s.TableCell,{children:t("OderStatusTbl")}),e.jsx(s.TableCell,{children:t("ActionTbl")}),e.jsx(s.TableCell,{className:"text-right",children:t("InvoiceTbl")})]})}),e.jsx(se,{orders:J})]}),e.jsx(s.TableFooter,{children:e.jsx(s.Pagination,{totalResults:l==null?void 0:l.totalDoc,resultsPerPage:N,onChange:R,label:"Table navigation"})})]}):e.jsx(Y,{title:"Sorry, There are no orders right now."})]})};export{ye as default};
