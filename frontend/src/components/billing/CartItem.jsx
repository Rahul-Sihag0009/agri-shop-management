import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

function CartItem({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  return (
    <tr className="border-b">
      <td className="p-3">{item.productName}</td>

      <td>₹{item.sellingPrice.toFixed(2)}</td>

      <td>
        <button onClick={() => decreaseQty(item.id)}>
          <FaMinus />
        </button>

        <span className="mx-3">{item.quantity}</span>

        <button onClick={() => increaseQty(item.id)}>
          <FaPlus />
        </button>
      </td>

      <td>
        ₹{(item.quantity * item.sellingPrice).toFixed(2)}
      </td>

      <td>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-600"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

export default CartItem;