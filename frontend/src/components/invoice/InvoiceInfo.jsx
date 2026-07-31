function InvoiceInfo({ invoice }) {
  return (
    <div className="border-b pb-1 mb-1">

      <div className="grid-cols-2 gap-2 text-[10px]">

        <div>

          <p>
            <span className="font-semibold">
              Customer :
            </span>{" "}
            {invoice.customer?.name || "Walk-in Customer"}
          </p>

          <p className="">
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

  {invoice.paymentMode === "UNPAID" ? (
    <span className="text-red-600 font-semibold">
      {" "}Unpaid
    </span>
  ) : (
    <span className="text-green-600 font-semibold">
      {" "}Paid
    </span>
  )}
</p>

        </div>

      </div>

    </div>
  );
}

export default InvoiceInfo;