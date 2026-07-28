import {
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
} from "react-icons/fa";

import StatCard from "./StatCard";

function DashboardStats({ stats }) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatCard
        title="Products"
        value={stats.totalProducts}
        icon={<FaBoxOpen />}
        color="bg-green-100"
      />

      <StatCard
        title="Customers"
        value={stats.totalCustomers}
        icon={<FaUsers />}
        color="bg-blue-100"
      />

      <StatCard
        title="Sales"
        value={stats.totalSales}
        icon={<FaShoppingCart />}
        color="bg-yellow-100"
      />

      <StatCard
        title="Revenue"
        value={`₹${stats.revenue}`}
        icon={<FaDollarSign />}
        color="bg-purple-100"
      />

    </div>

  );

}

export default DashboardStats;
