import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import AddStockModal from "../../components/inventory/AddStockModal";
function Inventory() {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
const [showModal, setShowModal] = useState(false);
  const {
    products,
    loading,
    refresh,
  } = useProducts(search);

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Inventory Management
      </h1>

      <input
        className="border rounded p-3 w-full md:w-96 mb-6"
        placeholder="Search Products..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border">

          <thead className="bg-green-600 text-white">

            <tr>

              <th className="p-3">Product</th>

              <th>Company</th>

              <th>Stock</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {products.map(product=>{

              let status="Good";
              let color="text-green-600";

              if(product.quantity===0){
                status="Out of Stock";
                color="text-red-600";
              }
              else if(product.quantity<=product.minimumStock){
                status="Low Stock";
                color="text-yellow-600";
              }

              return(

                <tr key={product.id} className="border-b">

                  <td className="p-3">
                    {product.productName}
                  </td>

                  <td>
                    {product.company}
                  </td>

                  <td>
                    {product.quantity}
                  </td>

                  <td className={color}>
                    {status}
                  </td>

                  <td>

                    <button
  className="bg-green-600 text-white px-3 py-1 rounded"
  onClick={() => {
    setSelectedProduct(product);
    setShowModal(true);
  }}
>
  Add Stock
</button>

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>
      )}
{showModal && (
  <AddStockModal
    product={selectedProduct}
    onClose={() => setShowModal(false)}
    onSuccess={refresh}
  />
)}
    </div>
  );
}

export default Inventory;