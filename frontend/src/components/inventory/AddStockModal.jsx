import { useState } from "react";
import api from "../../services/api";

function AddStockModal({
  product,
  onClose,
  onSuccess,
}) {
  const [quantity, setQuantity] = useState("");
  const [reason, setReason] = useState("PURCHASE");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/stock/add", {
        productId: product.id,
        quantity: Number(quantity),
        reason,
        remarks,
      });

      alert("Stock Added Successfully");

      onSuccess();

      onClose();
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white p-6 rounded-lg w-[400px]">

        <h2 className="text-2xl font-bold mb-5">
          Add Stock
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="number"
            placeholder="Quantity"
            className="border w-full p-3 rounded mb-4"
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
            required
          />

          <select
            className="border w-full p-3 rounded mb-4"
            value={reason}
            onChange={(e)=>setReason(e.target.value)}
          >
            <option value="PURCHASE">Purchase</option>
            <option value="RETURN">Return</option>
            <option value="ADJUSTMENT">Adjustment</option>
          </select>

          <textarea
            className="border w-full p-3 rounded mb-4"
            placeholder="Remarks"
            value={remarks}
            onChange={(e)=>setRemarks(e.target.value)}
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>

            <button
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddStockModal;