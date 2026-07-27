import { useState } from "react";
import Layout from "../../components/layout/Layout";
import useSalesReport from "../../hooks/useSalesReport";
import DataTable from "../../components/ui/DataTable";

function Reports() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const {
    data = [],
    isLoading,
  } = useSalesReport(startDate, endDate);

  return (
    <Layout>
      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Sales Reports
        </h1>

        {/* Date Filters */}

        <div className="bg-white rounded-xl shadow p-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="font-semibold block mb-2">
                From
              </label>

              <input
                type="date"
                className="border rounded p-3 w-full"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                To
              </label>

              <input
                type="date"
                className="border rounded p-3 w-full"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

          </div>

        </div>

        {/* Report Table */}

        <div className="mt-6">

          {isLoading ? (

            <p className="text-center text-lg">
              Loading...
            </p>

          ) : (

            <DataTable
              columns={[
                {
                  header: "Invoice",
                  key: "invoiceNumber",
                },
                {
                  header: "Customer",
                  render: (row) =>
                    row.customer?.name || "Walk-in Customer",
                },
                {
                  header: "Total",
                  render: (row) =>
                    `₹${row.grandTotal.toFixed(2)}`,
                },
                {
                  header: "Date",
                  render: (row) =>
                    new Date(row.createdAt).toLocaleDateString(),
                },
              ]}
              data={data}
            />

          )}

        </div>

      </div>
    </Layout>
  );
}

export default Reports;