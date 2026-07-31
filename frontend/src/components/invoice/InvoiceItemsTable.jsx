function InvoiceItemsTable({ invoice, shop }) {
  return (
    <div className="overflow-x-auto">

      <table className="w-full border text-[10px]">

        <thead>

          <tr className="bg-green-700 text-white">

            <th className="px-1 py-0.5 text-left text-[10px]">#</th>

            <th className="px-1 py-0.5 text-left text-[10px]">Product</th>

            <th className="px-1 py-0.5 text-center text-[10px]">Qty</th>

            <th className="px-1 py-0.5 text-right text-[10px]">Rate</th>

            <th className="px-1 py-0.5 text-right text-[10px]">Amount</th>

          </tr>

        </thead>

        <tbody>
  {invoice.items.map((item, index) => (
    <tr key={item.id} className="border-b border-gray-200">

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