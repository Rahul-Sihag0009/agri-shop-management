import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../ui/Button";
import EmptyState from "../ui/EmptyState";

function ProductTable({
  products,
  onEdit,
  onDelete,
}) {

  if (products.length === 0) {
    return (
      <EmptyState
        title="No Products Found"
        description="Click 'Add Product' to create your first inventory product."
      />
    );
  }

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

            <td className="p-3">
              {product.productName}
            </td>

            <td>{product.company}</td>

            <td>{product.category}</td>

            <td>{product.quantity}</td>

            <td>₹ {product.sellingPrice}</td>

            <td>

              <div className="flex gap-2">

                <Button
                  variant="secondary"
                  onClick={() => onEdit(product)}
                >
                  <FaEdit />
                </Button>

                <Button
                  variant="danger"
                  onClick={() => onDelete(product.id)}
                >
                  <FaTrash />
                </Button>

              </div>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default ProductTable;