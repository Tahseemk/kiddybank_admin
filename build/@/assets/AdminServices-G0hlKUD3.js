import{j as n}from"./index-n-Mj-w5F.js";import{r as s}from"./httpService-jqtz-xtI.js";const d=({errorName:t})=>n.jsx(n.Fragment,{children:t&&n.jsx("span",{className:"text-red-400 text-sm mt-2",children:t.message})}),i={registerAdmin:async t=>s.post("/admin/register",t),loginAdmin:async t=>s.post("/admin/adminLogin",t),forgetPassword:async t=>s.put("/admin/forget-password",t),resetPassword:async t=>s.put("/admin/reset-password",t),signUpWithProvider:async t=>s.post("/admin/signup",t),addStaff:async t=>s.post("/admin/add",t),getAllStaff:async t=>s.get("/admin",t),getStaffById:async(t,r)=>s.post(`/admin/${t}`,r),updateStaff:async(t,r)=>s.put(`/admin/${t}`,r),updateStaffStatus:async(t,r)=>s.put(`/admin/update-status/${t}`,r),deleteStaff:async t=>s.delete(`/admin/${t}`)};export{i as A,d as E};
