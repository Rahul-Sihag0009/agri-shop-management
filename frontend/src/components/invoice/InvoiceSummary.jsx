function InvoiceSummary({ invoice, shop }) {
  return (
    <div className="flex justify-end">

      <table className="text-sm border-collapse">

        <tbody>

          <tr>
            <td className="pr-12 py-0">Subtotal</td>
            <td className="text-right py-0">
              {shop.currency}{Number(invoice.subtotal).toFixed(2)}
            </td>
          </tr>

          <tr>
            <td className="pr-12 py-0">GST</td>
            <td className="text-right py-0">
              {shop.currency}{Number(invoice.gst).toFixed(2)}
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <hr className="my-1" />
            </td>
          </tr>

          <tr className="font-bold text-lg text-green-700">
            <td className="py-0">Grand Total</td>
            <td className="text-right py-0">
              {shop.currency}{Number(invoice.grandTotal).toFixed(2)}
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default InvoiceSummary;