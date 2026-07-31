function InvoiceFooter() {
  return (
    <div className="mt-2 pt-1">

      <div className="flex justify-between items-end">

        <div>

          <p className="font-semibold text-[10px]">
            Thank you for your purchase!
          </p>

          <p className="text-gray-500 text-[9px]">
            We appreciate your business and look forward to serving you again.
          </p>

        </div>

        <div className="text-center">

          <div className="border-t border-black w-24 mt-3"></div>

          <p className="mt-1 text-[9px] font-semibold">
            Authorized Signature
          </p>

        </div>

      </div>

    </div>
  );
}

export default InvoiceFooter;