import {
  FaHome,
  FaBoxOpen,
  FaWarehouse,
  FaFileInvoiceDollar,
  FaUsers,
  FaTruck,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const menu = [
  { name: "Dashboard", icon: <FaHome />, path: "/" },
  { name: "Products", icon: <FaBoxOpen />, path: "/products" },
  { name: "Inventory", icon: <FaWarehouse />, path: "/inventory" },
  { name: "Billing", icon: <FaFileInvoiceDollar />, path: "/billing" },
  { name: "Customers", icon: <FaUsers />, path: "/customers" },
  { name: "Suppliers", icon: <FaTruck />, path: "/suppliers" },
  { name: "Reports", icon: <FaChartBar />, path: "/reports" },
  { name: "Settings", icon: <FaCog />, path: "/settings" },
];

function Sidebar() {
  return (
    <div className="w-64 bg-green-700 text-white min-h-screen">

      <div className="text-2xl font-bold p-6 border-b border-green-600">

        🌾 Agri Shop

      </div>

      <div className="mt-4">

        {menu.map((item) => (

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

    </div>
  );
}

export default Sidebar;