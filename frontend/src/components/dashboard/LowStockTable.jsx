function LowStockTable({ products = [] }) {
  if (!products.length) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          ⚠ Low Stock Products
        </h2>

        <p className="text-gray-500">
          No low stock products 🎉
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-4">
        ⚠ Low Stock Products
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-2">
              Product
            </th>

            <th className="text-center">
              Stock
            </th>

            <th className="text-center">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product.id}
              className="border-b"
            >

              <td className="py-3">
                {product.productName}
              </td>

              <td className="text-center">
                {product.quantity}
              </td>

              <td className="text-center">

                {product.quantity === 0 ? (

                  <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                    Out
                  </span>

                ) : product.quantity <= 2 ? (

                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                    Critical
                  </span>

                ) : (

                  <span className="bg-yellow-400 px-2 py-1 rounded text-sm">
                    Low
                  </span>

                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default LowStockTable;