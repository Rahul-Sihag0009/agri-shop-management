function InvoiceFooter() {
  return (
    <div className="mt-0 pt-2">

      <div className="flex justify-between items-end">

        <div>

          <p className="font-semibold">
            Thank you for your purchase!
          </p>

          <p className="text-gray-500 mt-1 text-sm">
            We appreciate your business and look forward to serving you again.
          </p>

        </div>

        <div className="text-center">

          <div className="border-t border-black w-40 mt-3"></div>

          <p className="mt-1 text-sm font-semibold">
            Authorized Signature
          </p>

        </div>

      </div>

    </div>
  );
}

export default InvoiceFooter;