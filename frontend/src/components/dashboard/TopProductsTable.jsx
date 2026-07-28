function TopProductsTable({ products = [] }) {

  if (!products.length) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">
          🔥 Top Selling Products
        </h2>

        <p className="text-gray-500">
          No sales available.
        </p>
      </div>
    );
  }

  return (
    <div>

      <h2 className="text-xl font-semibold mb-4">
        🔥 Top Selling Products
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-2">
              Rank
            </th>

            <th className="text-left">
              Product
            </th>

            <th className="text-center">
              Sold
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product, index) => (

            <tr
              key={product.id}
              className="border-b"
            >

              <td className="py-3">

                {index === 0 && "🥇"}

                {index === 1 && "🥈"}

                {index === 2 && "🥉"}

                {index > 2 && index + 1}

              </td>

              <td>

                {product.productName}

              </td>

              <td className="text-center">

                {product.quantitySold}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TopProductsTable;