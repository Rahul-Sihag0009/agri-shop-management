function CustomerDetails({ invoice }) {
  return (
    <div className="grid grid-cols-2 gap-8 mb-8">

      {/* Customer Details */}

      <div className="border rounded-lg p-5">

        <h3 className="text-lg font-semibold border-b pb-2 mb-3">
          Customer Details
        </h3>

        <p>
          <strong>Name:</strong>{" "}
          {invoice.customer?.name || "Walk-in Customer"}
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          {invoice.customer?.phone || "-"}
        </p>

      </div>

      {/* Payment Details */}

      <div className="border rounded-lg p-5">

        <h3 className="text-lg font-semibold border-b pb-2 mb-3">
          Payment Details
        </h3>

        <p>
          <strong>Payment Mode:</strong>{" "}
          {invoice.paymentMode}
        </p>

        <p>
          <strong>Invoice Status:</strong>{" "}
          <span className="text-green-600 font-semibold">
            Paid
          </span>
        </p>

      </div>

    </div>
  );
}

export default CustomerDetails;