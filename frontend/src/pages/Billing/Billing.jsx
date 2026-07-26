import { useState } from "react";

import CustomerForm from "../../components/billing/CustomerForm";
import PaymentSection from "../../components/billing/PaymentSection";
import useBilling from "../../hooks/useBilling";
import Cart from "../../components/billing/Cart";
import BillSummary from "../../components/billing/BillSummary";
import ProductSearch from "../../components/billing/ProductSearch";

function Billing() {
  const {
  cart,
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
  subtotal,
  gst,
  grandTotal,
} = useBilling();

const [customer, setCustomer] = useState({
    name: "",
    phone: "",
  });

  const [paymentMode, setPaymentMode] = useState("CASH");


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
    />
  </div>
);
}

export default Billing;