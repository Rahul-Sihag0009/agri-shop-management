import useCreatePurchase from "../../hooks/useCreatePurchase";

function PurchaseSummary({
  supplier,
  cart,
  grandTotal,
  clearCart,
}) {
  const mutation = useCreatePurchase();

  const handleSave = () => {
    if (!supplier) {
      alert("Please select a supplier.");
      return;
    }

    if (cart.length === 0) {
      alert("Purchase cart is empty.");
      return;
    }

    mutation.mutate(
      {
        supplierId: Number(supplier),
        items: cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          costPrice: item.costPrice,
        })),
      },
      {
        onSuccess: () => {
          alert("Purchase saved successfully!");
          clearCart();
        },
      }
    );
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 mt-6">

      <div className="flex justify-between text-xl font-bold mb-4">
        <span>Grand Total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>

      <button
        onClick={handleSave}
        disabled={mutation.isPending}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded disabled:bg-gray-400"
      >
        {mutation.isPending ? "Saving..." : "Save Purchase"}
      </button>

    </div>
  );
}

export default PurchaseSummary;