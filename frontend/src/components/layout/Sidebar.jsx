import {
  FaHome,
  FaBoxOpen,
  FaWarehouse,
  FaFileInvoiceDollar,
  FaUsers,
  FaTruck,
  FaChartBar,
  FaCog,
  FaShoppingBasket,
  FaUserShield,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const menu = [
  { name: "Dashboard", icon: <FaHome />, path: "/" },

  { name: "Products", icon: <FaBoxOpen />, path: "/products" },

  { name: "Inventory", icon: <FaWarehouse />, path: "/inventory" },

  { name: "Billing", icon: <FaFileInvoiceDollar />, path: "/billing" },

  

  { name: "Customers", icon: <FaUsers />, path: "/customers" },

  

  {
    name: "Reports",
    icon: <FaChartBar />,
    path: "/reports",
    roles: ["ADMIN"],
  },

  {
    name: "Settings",
    icon: <FaCog />,
    path: "/settings",
    roles: ["ADMIN"],
  },

  {
  name: "Users",
  icon: <FaUserShield />,
  path: "/users",
  roles: ["ADMIN"],
},

];

function Sidebar() {
  const { user, logout } = useAuth();
  return (
    <div className="w-64 bg-green-700 text-white min-h-screen">

      <div className="text-2xl font-bold p-6 border-b border-green-600">

        🌾 Agri Shop

      </div>

      <div className="mt-4">

        {menu
  .filter(
    (item) =>
      !item.roles || item.roles.includes(user?.role)
  )
  .map((item) => (
    <Link
      key={item.name}
      to={item.path}
      className="flex items-center gap-3 px-6 py-4 hover:bg-green-600 transition"
    >
      {item.icon}
      {item.name}
    </Link>
  ))}

      </div>
 
        <div className="p-4 mt-auto">
  <button
    onClick={() => logout()}
    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg"
  >
    Logout
  </button>
</div>

    </div>
  );
}

export default Sidebar;