import { lazy } from "react";

// use lazy for better code splitting
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Attributes = lazy(() => import("@/pages/Attributes"));
const ChildAttributes = lazy(() => import("@/pages/ChildAttributes"));
const Products = lazy(() => import("@/pages/Products"));
const ProductDetails = lazy(() => import("@/pages/ProductDetails"));
const Category = lazy(() => import("@/pages/Category"));
const ChildCategory = lazy(() => import("@/pages/ChildCategory"));
const Customers = lazy(() => import("@/pages/Customers"));
const CustomerOrder = lazy(() => import("@/pages/CustomerOrder"));
const Orders = lazy(() => import("@/pages/Orders"));
const OrderInvoice = lazy(() => import("@/pages/OrderInvoice"));
const Coupons = lazy(() => import("@/pages/Coupons"));
const Page404 = lazy(() => import("@/pages/404"));
const EditProfile = lazy(() => import("@/pages/EditProfile"));


const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/attributes",
    component: Attributes,
  },
  {
    path: "/attributes/:id",
    component: ChildAttributes,
  },
  {
    path: "/product/:id",
    component: ProductDetails,
  },
  {
    path: "/categories",
    component: Category,
  },
  {
    path: "/categories/:id",
    component: ChildCategory,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/customer-order/:id",
    component: CustomerOrder,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/order/:id",
    component: OrderInvoice,
  },
  {
    path: "/coupons",
    component: Coupons,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/edit-profile",
    component: EditProfile,
  },
];

export default routes;
