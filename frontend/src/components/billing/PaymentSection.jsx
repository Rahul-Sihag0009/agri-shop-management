function PaymentSection({
  paymentMode,
  setPaymentMode,
}) {
  return (
    <div className="bg-white shadow rounded p-4 mt-5">

      <h2 className="text-xl font-bold mb-4">
        Payment
      </h2>

      <select
        className="border rounded p-3 w-full"
        value={paymentMode}
        onChange={(e) => setPaymentMode(e.target.value)}
      >
        <option value="CASH">Cash</option>
        <option value="UPI">UPI</option>
        <option value="CARD">Card</option>
        <option value="CREDIT">Credit</option>
      </select>

<button
  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full text-lg font-semibold"
>
  Generate Invoice
</button>
    </div>
  );
}

export default PaymentSection;