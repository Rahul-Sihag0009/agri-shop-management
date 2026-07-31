import html2pdf from "html2pdf.js";

function InvoiceActions() {
  const downloadPDF = async () => {
  const element = document.querySelector(".invoice-container");

  // Convert oklch colors to safe colors temporarily
  element.querySelectorAll("*").forEach((el) => {
    const style = getComputedStyle(el);

    if (style.color.includes("oklch")) {
      el.style.color = "#000";
    }

    if (style.backgroundColor.includes("oklch")) {
      el.style.backgroundColor = "#fff";
    }

    if (style.borderColor.includes("oklch")) {
      el.style.borderColor = "#d1d5db";
    }
  });

  const options = {
    margin: 5,
    filename: "Invoice.pdf",
    image: {
      type: "jpeg",
      quality: 1,
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: {
    mode: ["avoid-all", "css", "legacy"],
  },
  };

  await html2pdf().set(options).from(element).save();
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