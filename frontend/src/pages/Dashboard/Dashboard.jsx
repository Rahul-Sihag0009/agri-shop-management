import {
  FaBoxes,
  FaUsers,
  FaExclamationTriangle,
  FaRupeeSign,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

import Layout from "../../components/layout/Layout";
import Loading from "../../components/ui/Loading";
import StatCard from "../../components/ui/StatCard";

import useDashboardQuery from "../../hooks/useDashboardQuery";
import useMonthlySales from "../../hooks/useMonthlySales";

import SalesChart from "../../components/dashboard/SalesChart";
import LowStockTable from "../../components/dashboard/LowStockTable";
import useLowStock from "../../hooks/useLowStock";
import RecentSalesTable from "../../components/dashboard/RecentSalesTable";
import useRecentSales from "../../hooks/useRecentSales";
import TopProductsTable from "../../components/dashboard/TopProductsTable";
import useTopProducts from "../../hooks/useTopProducts";

function Dashboard() {
  // Dashboard Statistics
  const {
    data: stats,
    isLoading,
    error,
  } = useDashboardQuery();

  // Monthly Sales Chart
  const {
    data: monthlySales = [],
    isLoading: chartLoading,
  } = useMonthlySales();

  const {
  data: lowStockProducts = [],
  isLoading: lowStockLoading,
} = useLowStock();

  const {
  data: recentSales = [],
  isLoading: recentSalesLoading,
} = useRecentSales();

  const {
  data: topProducts = [],
  isLoading: topProductsLoading,
} = useTopProducts();

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

        {/* Header */}

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome 👋
            </h1>

            <p className="text-gray-500 mt-1">
              Here's what's happening in your shop today.
            </p>
          </div>

          <div className="text-gray-500">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>

        {/* Statistics Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

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
            value={`₹${(stats.revenue ?? 0).toLocaleString("en-IN")}`}
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



        </div>

        {/* Monthly Sales + Low Stock */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-4">
              📈 Monthly Sales
            </h2>

            {chartLoading ? (
              <Loading />
            ) : (
              <SalesChart data={monthlySales} />
            )}

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-4">
              ⚠ Low Stock Products
            </h2>

            {lowStockLoading ? (
  <Loading />
) : (
  <LowStockTable products={lowStockProducts} />
)}

          </div>

        </div>

        {/* Recent Sales + Top Selling */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

          <div className="bg-white rounded-xl shadow p-6">

              {recentSalesLoading ? (
              <Loading />
              ) : (
              <RecentSalesTable sales={recentSales} />
               )}

           </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-4">
              🔥 Top Selling Products
            </h2>

            {topProductsLoading ? (
    <Loading />
) : (
    <TopProductsTable products={topProducts} />
)}

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;