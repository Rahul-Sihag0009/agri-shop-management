import html2pdf from "html2pdf.js";

function InvoiceActions() {
  const downloadPDF = () => {
    const element = document.querySelector(".invoice-container");

    const options = {
      margin: 0.4,
      filename: "Invoice.pdf",
      image: {
        type: "jpeg",
        quality: 1,
      },
      html2canvas: {
        scale: 2,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="flex justify-center gap-4 mt-6 print:hidden">
      <button
        onClick={() => window.print()}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
      >
        Print Invoice
      </button>

      <button
        onClick={downloadPDF}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
      >
        Download PDF
      </button>
    </div>
  );
}

export default InvoiceActions;