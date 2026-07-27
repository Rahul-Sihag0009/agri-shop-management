import {
  FaBoxes,
  FaUsers,
  FaExclamationTriangle,
  FaRupeeSign,
  FaShoppingCart,
} from "react-icons/fa";
import Layout from "../../components/layout/Layout";
import Loading from "../../components/ui/Loading";
import StatCard from "../../components/ui/StatCard";

import useDashboardQuery from "../../hooks/useDashboardQuery";
import { FaChartLine } from "react-icons/fa";
function Dashboard() {
  const {
  data: stats,
  isLoading,
  error,
} = useDashboardQuery();

  if (isLoading) return <Loading />;
  
  if (error) {
  return (
    <div className="text-red-600 p-6">
      Failed to load dashboard.
    </div>
  );
}
  return (
    <Layout>
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    
        <StatCard
          title="Products"
          value={stats.totalProducts}
          icon={<FaBoxes />}
          color="text-blue-600"
        />

        <StatCard
          title="Customers"
          value={stats.totalCustomers}
          icon={<FaUsers />}
          color="text-green-600"
        />

        <StatCard
          title="Sales"
          value={stats.totalSales}
          icon={<FaShoppingCart />}
          color="text-purple-600"
        />

        <StatCard
          title="Revenue"
          value={`₹${stats.revenue.toLocaleString("en-IN")}`}
          icon={<FaRupeeSign />}
          color="text-yellow-600"
        />

        <StatCard
          title="Low Stock"
          value={stats.lowStock}
          icon={<FaExclamationTriangle />}
          color="text-red-600"
        />

        <StatCard
          title="Out Of Stock"
          value={stats.outOfStock}
          icon={<FaExclamationTriangle />}
          color="text-red-800"
        />

        <StatCard
    title="Profit"
    value={`₹${(stats.profit ?? 0).toLocaleString("en-IN")}`}
    icon={<FaChartLine />}
    color="text-green-700"
/>

      </div>

    </div>
  </Layout>
  );
}

export default Dashboard;