function BillSummary({
  subtotal,
  gst,
  grandTotal,
}) {
  return (
    <div className="bg-white rounded shadow p-5 mt-5">

      <h2 className="text-xl font-bold mb-4">
        Bill Summary
      </h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>GST</span>
        <span>₹{gst.toFixed(2)}</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold text-xl mt-3">
        <span>Grand Total</span>
        <span>₹{grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default BillSummary;