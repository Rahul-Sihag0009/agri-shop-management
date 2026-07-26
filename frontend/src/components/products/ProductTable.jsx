import { FaEdit, FaTrash } from "react-icons/fa";

function ProductTable({
  products,
  onEdit,
  onDelete,
}) {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-green-600 text-white">
          <th className="p-3">Product</th>
          <th>Company</th>
          <th>Category</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b">
            <td className="p-3">{product.productName}</td>

            <td>{product.company}</td>

            <td>{product.category}</td>

            <td>{product.quantity}</td>

            <td>₹ {product.sellingPrice}</td>

            <td>
              <button
                onClick={() => onEdit(product)}
                className="text-blue-600 mr-3"
              >
                <FaEdit />
              </button>

              <button
                onClick={() => onDelete(product.id)}
                className="text-red-600"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;