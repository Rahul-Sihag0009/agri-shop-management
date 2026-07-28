function InvoiceHeader({ shop, invoice }) {
  return (
    <div className="border-b-2 border-green-700 pb-3 mb-3">
      <div className="flex justify-between items-start">

        {/* Left */}
        <div className="flex gap-3">

          {shop.logo ? (
            <img
              src={`http://localhost:5000${shop.logo}`}
              alt="Shop Logo"
              className="w-28 h-28 object-contain bg-white border rounded-xl p-2 shadow"
            />
          ) : (
            <div className="w-12 h-12 border rounded-lg flex items-center justify-center text-gray-400 text-xs">
              Logo
            </div>
          )}

          <div>
            <h1 className="text-xl font-bold text-green-700">
              {shop.shopName}
            </h1>

            <p className="mt-1 text-xs">
              <strong>Owner:</strong> {shop.ownerName}
            </p>

            <p className="mt-1 text-xs">
              <strong>Address:</strong> {shop.address}
            </p>

            <p className="mt-1 text-xs">
              <strong>Phone:</strong> {shop.phone}
            </p>

            <p className="mt-1 text-xs">
              <strong>Email:</strong> {shop.email}
            </p>

            <p className="mt-1 text-xs">
              <strong>GST No:</strong> {shop.gstNumber}
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="text-right">

          <h2 className="text-xl font-bold text-green-700">
            TAX INVOICE
          </h2>

          <div className="mt-2 bg-gray-100 rounded-lg p-3 space-y-1 text-sm">

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