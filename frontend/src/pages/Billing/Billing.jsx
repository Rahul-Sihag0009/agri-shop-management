import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomerForm from "../../components/billing/CustomerForm";
import PaymentSection from "../../components/billing/PaymentSection";
import useBilling from "../../hooks/useBilling";
import Cart from "../../components/billing/Cart";
import BillSummary from "../../components/billing/BillSummary";
import ProductSearch from "../../components/billing/ProductSearch";
import api from "../../services/api";
import { toast } from "react-toastify";

function Billing() {
  const navigate = useNavigate();
  const {
  cart,
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
  subtotal,
  gst,
  grandTotal,
} = useBilling();

const [customer, setCustomer] = useState({
    name: "",
    phone: "",
  });

  const [paymentMode, setPaymentMode] = useState("CASH");

  const handleGenerateInvoice = async () => {

  if (cart.length === 0) {
    toast.error("Cart is empty");
    return;
  }

  try {

    const payload = {
      customer,
      paymentMode,
      items: cart.map(item => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };

    const res = await api.post("/sales", payload);

    toast.success("Invoice Generated");

navigate(`/invoice/${res.data.sale.id}`);

    clearCart();

    setCustomer({
      name: "",
      phone: "",
    });

    setPaymentMode("CASH");

  } catch (err) {

    toast.error(
      err.response?.data?.message ||
      "Invoice generation failed"
    );

  }
};

  return (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-6">Billing</h1>

    <CustomerForm
      customer={customer}
      setCustomer={setCustomer}
    />

    <ProductSearch
      addToCart={addToCart}
    />

    <Cart
      cart={cart}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
      removeItem={removeItem}
    />

    <BillSummary
      subtotal={subtotal}
      gst={gst}
      grandTotal={grandTotal}
    />

    <PaymentSection
  paymentMode={paymentMode}
  setPaymentMode={setPaymentMode}
  handleGenerateInvoice={handleGenerateInvoice}
/>
  </div>
);
}

export default Billing;