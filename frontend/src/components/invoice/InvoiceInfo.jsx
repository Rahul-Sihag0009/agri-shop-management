function InvoiceInfo({ invoice }) {
  return (
    <div className="border-b border-gray-300 pb-3 mb-4">

      <div className="grid grid-cols-2 gap-6 text-sm">

        <div>

          <p>
            <span className="font-semibold">
              Customer :
            </span>{" "}
            {invoice.customer?.name || "Walk-in Customer"}
          </p>

          <p className="mt-1">
            <span className="font-semibold">
              Phone :
            </span>{" "}
            {invoice.customer?.phone || "-"}
          </p>

        </div>

        <div className="text-right">

          <p>
            <span className="font-semibold">
              Payment :
            </span>{" "}
            {invoice.paymentMode}
          </p>

          <p className="mt-1">
            <span className="font-semibold">
              Status :
            </span>

            <span className="text-green-600 font-semibold">
              {" "}Paid
            </span>

          </p>

        </div>

      </div>

    </div>
  );
}

export default InvoiceInfo;