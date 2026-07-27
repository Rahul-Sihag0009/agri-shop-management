import { useMemo, useState } from "react";
import useProducts from "../../hooks/useProducts";

function ProductSearch({ addToCart }) {
  const [search, setSearch] = useState("");

  const { products } = useProducts();

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return [];

    return products.filter(
      (product) =>
        product.quantity > 0 &&
        product.productName
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search, products]);

  return (
    <div className="bg-white shadow rounded p-4 mb-5">
      <h2 className="text-xl font-bold mb-3">
        Search Product
      </h2>

      <input
        className="border rounded p-3 w-full"
        placeholder="Search by product name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length > 0 && (
        <div className="border rounded mt-2 max-h-64 overflow-y-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                addToCart(product);
                setSearch("");
              }}
              className="p-3 border-b cursor-pointer hover:bg-green-100"
            >
              <div className="flex justify-between items-center">
                <div className="font-semibold">
                  {product.productName}
                </div>

                {product.quantity <= 5 && (
                  <span className="text-red-600 font-bold">
                    Low Stock
                  </span>
                )}
              </div>

              <div className="text-sm text-gray-600">
                Stock: {product.quantity} | ₹{product.sellingPrice}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductSearch;