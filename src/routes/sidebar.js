import {
  FiGrid,
  FiUsers,
  FiCompass,
  FiSlack,
} from "react-icons/fi";

const sidebar = [
  {
    path: "/dashboard", // the url
    icon: FiGrid, // icon
    name: "Dashboard", // name that appear in Sidebar
  },

  {
    icon: FiSlack,
    name: "Product",
    routes: [
      {
        path: "/products",
        name: "All Products",
      },
      // {
      //   path: "/categories",
      //   name: "Categories",
      // },
      // {
      //   path: "/attributes",
      //   name: "Attributes",
      // },
      // {
      //   path: "/coupons",
      //   name: "Coupons",
      // },
    ],
  },
  {
    path: "/customers",
    icon: FiUsers,
    name: "Customers",
  },
  {
    path: "/orders",
    icon: FiCompass,
    name: "Orders",
  },
];

export default sidebar;
