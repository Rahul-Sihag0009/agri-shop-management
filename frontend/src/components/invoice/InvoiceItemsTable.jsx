function InvoiceItemsTable({ invoice, shop }) {
  return (
    <div className="overflow-x-auto">

      <table className="w-full border border-gray-300 text-sm">

        <thead>

          <tr className="bg-green-700 text-white">

            <th className="px-2 py-1 text-left text-sm">#</th>

            <th className="px-2 py-1 text-left text-sm">Product</th>

            <th className="px-2 py-1 text-center text-sm">Qty</th>

            <th className="px-2 py-1 text-right text-sm">Rate</th>

            <th className="px-2 py-1 text-right text-sm">Amount</th>

          </tr>

        </thead>

        <tbody>
  {invoice.items.map((item, index) => (
    <tr key={item.id} className="border-b">

      <td className="px-2 py-1">
        {index + 1}
      </td>

      <td className="px-2 py-1 font-medium">
        {item.product.productName}
      </td>

      <td className="px-2 py-1 text-center">
        {item.quantity}
      </td>

      <td className="px-2 py-1 text-right">
        {shop.currency}{Number(item.price).toFixed(2)}
      </td>

      <td className="px-2 py-1 text-right font-semibold">
        {shop.currency}{Number(item.total).toFixed(2)}
      </td>

    </tr>
  ))}
</tbody>

      </table>

    </div>
  );
}

export default InvoiceItemsTable;