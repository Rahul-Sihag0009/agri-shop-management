function PaymentSection({
  paymentMode,
  setPaymentMode,
  handleGenerateInvoice,
}) {
  return (
    <div className="bg-white shadow rounded p-4 mt-5">

      <h2 className="text-xl font-bold mb-4">
        Payment
      </h2>

      <select
  className="border rounded p-3 w-full"
  value={paymentMode}
  onChange={(e) => {
    console.log("Selected:", e.target.value);
    setPaymentMode(e.target.value);
  }}
>
  <option value="CASH">Cash</option>
  <option value="UPI">UPI</option>
  <option value="UNPAID">Unpaid</option>
</select>

<button
  onClick={handleGenerateInvoice}
  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full text-lg font-semibold"
>
  Generate Invoice
</button>
    </div>
  );
}

export default PaymentSection;