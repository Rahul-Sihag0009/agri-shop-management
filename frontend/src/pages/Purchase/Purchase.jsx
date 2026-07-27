import { useState } from "react";
import SupplierSelect from "../../components/purchase/SupplierSelect";
import PurchaseProductSearch from "../../components/purchase/PurchaseProductSearch";
import usePurchase from "../../hooks/usePurchase";
import PurchaseCart from "../../components/purchase/PurchaseCart";
import PurchaseSummary from "../../components/purchase/PurchaseSummary";

function Purchase() {
  const [supplier, setSupplier] = useState("");
  const {
  cart,
  addToCart,
  updateQuantity,
  updateCostPrice,
  removeItem,
  grandTotal,
  clearCart,
} = usePurchase();

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Purchase Management
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Supplier
          </h2>

          <SupplierSelect
  value={supplier}
  onChange={setSupplier}
/>
<PurchaseProductSearch
  addToCart={addToCart}
/>
        </div>

        <div className="bg-white p-5 rounded shadow">

          <h2 className="text-xl font-semibold mb-4">
            Purchase Cart
          </h2>

          <PurchaseCart
  cart={cart}
  updateQuantity={updateQuantity}
  updateCostPrice={updateCostPrice}
  removeItem={removeItem}
/>
<PurchaseSummary
  supplier={supplier}
  cart={cart}
  grandTotal={grandTotal}
  clearCart={clearCart}
/>
        </div>

      </div>

    </div>
  );
}

export default Purchase;