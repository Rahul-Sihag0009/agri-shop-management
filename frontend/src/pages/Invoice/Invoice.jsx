import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import InvoiceHeader from "../../components/invoice/InvoiceHeader";
import InvoiceItemsTable from "../../components/invoice/InvoiceItemsTable";
import InvoiceInfo from "../../components/invoice/InvoiceInfo";
import InvoiceSummary from "../../components/invoice/InvoiceSummary";
import InvoiceFooter from "../../components/invoice/InvoiceFooter";
import InvoiceActions from "../../components/invoice/InvoiceActions";

import "./Invoice.css";

function Invoice() {
  const { saleId } = useParams();

  const [invoice, setInvoice] = useState(null);
  const [shop, setShop] = useState(null);

  useEffect(() => {
    fetchInvoice();
    fetchShop();
  }, []);

  const fetchInvoice = async () => {
    try {
      const res = await api.get(`/sales/${saleId}`);
      setInvoice(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchShop = async () => {
    try {
      const res = await api.get("/shop");
      setShop(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!invoice || !shop) {
    return (
      <div className="p-10 text-center text-xl">
        Loading Invoice...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-6 invoice-container">

        <InvoiceHeader
          shop={shop}
          invoice={invoice}
        />

        <InvoiceInfo
          invoice={invoice}
        />

        <div className="space-y-1">

  <InvoiceItemsTable
    invoice={invoice}
    shop={shop}
  />

  <InvoiceSummary
    invoice={invoice}
    shop={shop}
  />

  <InvoiceFooter />

</div>

      </div>

      <InvoiceActions />

    </div>
  );
}

export default Invoice;