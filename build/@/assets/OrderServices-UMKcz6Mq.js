import{j as s,d}from"./index-QuqtdBpC.js";import{r as n}from"./httpService-JFspsh_8.js";const b=({status:e})=>s.jsx(s.Fragment,{children:s.jsxs("span",{className:"font-serif",children:[(e==="Pending"||e==="Inactive")&&s.jsx(d.Badge,{type:"warning",children:e}),e==="Waiting for Password Reset"&&s.jsx(d.Badge,{type:"warning",children:e}),e==="Processing"&&s.jsx(d.Badge,{children:e}),(e==="Delivered"||e==="Active")&&s.jsx(d.Badge,{type:"success",children:e}),e==="Cancel"&&s.jsx(d.Badge,{type:"danger",children:e}),e==="POS-Completed"&&s.jsx(d.Badge,{className:"dark:bg-teal-900 bg-teal-100",children:e})]})}),j={getAllOrders:async({body:e,headers:r,customerName:t,status:a,page:i=1,limit:h=8,day:c,method:o,startDate:l,endDate:g})=>{const $=t!==null?t:"",u=a!==null?a:"",m=c!==null?c:"",y=o!==null?o:"",p=l!==null?l:"",x=g!==null?g:"";return n.get(`/orders?customerName=${$}&status=${u}&day=${m}&page=${i}&limit=${h}&startDate=${p}&endDate=${x}&method=${y}`,e,r)},getAllOrdersTwo:async({invoice:e,body:r,headers:t})=>{const a=e!==null?e:"";return n.get(`/orders/all?invoice=${a}`,r,t)},getRecentOrders:async({page:e=1,limit:r=8,startDate:t="1:00",endDate:a="23:59"})=>n.get(`/orders/recent?page=${e}&limit=${r}&startDate=${t}&endDate=${a}`),getOrderCustomer:async(e,r)=>n.get(`/orders/customer/${e}`,r),getOrderById:async(e,r)=>n.get(`/orders/${e}`,r),updateOrder:async(e,r,t)=>n.put(`/orders/${e}`,r,t),deleteOrder:async e=>n.delete(`/orders/${e}`),getDashboardOrdersData:async({page:e=1,limit:r=8,endDate:t="23:59"})=>n.get(`/orders/dashboard?page=${e}&limit=${r}&endDate=${t}`),getDashboardAmount:async()=>n.get("/orders/dashboard-amount"),getDashboardCount:async()=>n.get("/orders/dashboard-count"),getDashboardRecentOrder:async({page:e=1,limit:r=8})=>n.get(`/orders/dashboard-recent-order?page=${e}&limit=${r}`),getBestSellerProductChart:async()=>n.get("/orders/best-seller/chart")};export{j as O,b as S};