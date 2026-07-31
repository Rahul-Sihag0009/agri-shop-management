function InvoiceHeader({ shop, invoice }) {
  return (
    <div className="border-b-2 border-green-700 pb-3 mb-3">
      <div className="flex justify-between items-start gap-4">

        {/* Left */}
        <div className="flex gap-3 flex-1 min-w-0">

          {shop.logo ? (
            <img
              src={`http://localhost:5000${shop.logo}`}
              alt="Shop Logo"
              className="w-16 h-16 object-contain border p-1"
            />
          ) : (
            <div className="w-12 h-12 border rounded-lg flex items-center justify-center text-gray-400 text-xs">
              Logo
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h1 className="text-sm font-bold text-green-700">
              {shop.shopName}
            </h1>

            <p className="text-[9px]">
              <strong>Owner:</strong> {shop.ownerName}
            </p>

            <p className="text-[9px]">
              <strong>Address:</strong> {shop.address}
            </p>

            <p className="text-[9px]">
              <strong>Phone:</strong> {shop.phone}
            </p>

            <p className="text-[9px]">
              <strong>Email:</strong> {shop.email}
            </p>

            <p className="text-[9px]">
              <strong>GST No:</strong> {shop.gstNumber}
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="text-right shrink-0 w-52">

          <h2 className="text-sm font-bold text-green-700">
            TAX INVOICE
          </h2>

          <div className="mt-1 border p-1 text-[9px]">

            <p>
              <strong>Invoice No:</strong>{" "}
              {invoice.invoiceNumber}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(invoice.createdAt).toLocaleDateString()}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default InvoiceHeader;