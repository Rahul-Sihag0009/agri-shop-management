import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./Invoice.css";

function Invoice() {
  const { saleId } = useParams();

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    fetchInvoice();
  }, []);

  const fetchInvoice = async () => {
    try {
      const res = await api.get(`/sales/${saleId}`);
      setInvoice(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!invoice) {
    return (
      <div className="p-10 text-center text-xl">
        Loading Invoice...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-10 mt-10">

      <h1 className="text-4xl font-bold text-center">
        AGRI SHOP
      </h1>

      <p className="text-center text-gray-500">
        Seeds • Fertilizers • Pesticides
      </p>

      <hr className="my-6" />

      <div className="grid grid-cols-2 gap-5">

        <div>
          <p>
            <strong>Invoice No:</strong>
            {" "}
            {invoice.invoiceNumber}
          </p>

          <p>
            <strong>Date:</strong>
            {" "}
            {new Date(invoice.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div>
          <p>
            <strong>Customer:</strong>
            {" "}
            {invoice.customer?.name || "Walk-in Customer"}
          </p>

          <p>
            <strong>Phone:</strong>
            {" "}
            {invoice.customer?.phone || "-"}
          </p>
        </div>

      </div>

      <table className="w-full mt-8 border">

        <thead className="bg-green-600 text-white">

          <tr>

            <th className="p-3">Product</th>

            <th>Qty</th>

            <th>Price</th>

            <th>Total</th>

          </tr>

        </thead>

        <tbody>

          {invoice.items.map((item) => (

            <tr key={item.id} className="border-b">

              <td className="p-3">
                {item.product.productName}
              </td>

              <td>{item.quantity}</td>

              <td>₹{item.price}</td>

              <td>₹{item.total}</td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="mt-8 text-right">

        <h3>
          Subtotal :
          {" "}
          ₹{invoice.subtotal.toFixed(2)}
        </h3>

        <h3>
          GST :
          {" "}
          ₹{invoice.gst.toFixed(2)}
        </h3>

        <h2 className="text-2xl font-bold mt-2">
          Grand Total :
          {" "}
          ₹{invoice.grandTotal.toFixed(2)}
        </h2>

      </div>
       
       <div className="flex justify-center mt-8">
  <button
    onClick={() => window.print()}
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
  >
    Print Invoice
  </button>
</div>

    </div>
  );
}

export default Invoice;