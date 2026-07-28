function RecentSalesTable({ sales = [] }) {
  if (!sales.length) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">
          🧾 Recent Sales
        </h2>

        <p className="text-gray-500">
          No recent sales found.
        </p>
      </div>
    );
  }

  return (
    <div>

      <h2 className="text-xl font-semibold mb-4">
        🧾 Recent Sales
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-2">Customer</th>

            <th className="text-center">Amount</th>

            <th className="text-center">Date</th>

          </tr>

        </thead>

        <tbody>

          {sales.map((sale) => (

            <tr
              key={sale.id}
              className="border-b"
            >

              <td className="py-3">
                {sale.customer?.name || "Walk-in Customer"}
              </td>

              <td className="text-center">
                ₹{sale.grandTotal.toLocaleString("en-IN")}
              </td>

              <td className="text-center">
                {new Date(sale.createdAt).toLocaleDateString("en-IN")}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentSalesTable;