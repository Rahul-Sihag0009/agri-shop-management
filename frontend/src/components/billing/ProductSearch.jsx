import { useEffect, useState } from "react";
import api from "../../services/api";

function ProductSearch({ addToCart }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!search.trim()) {
        setProducts([]);
        return;
      }

      try {
        const res = await api.get("/products", {
          params: {
            search,
          },
        });

        setProducts(res.data.products);
      } catch (err) {
        console.error(err);
      }
    };

    const timer = setTimeout(fetchProducts, 300);

    return () => clearTimeout(timer);
  }, [search]);

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

      {products.length > 0 && (
        <div className="border rounded mt-2 max-h-64 overflow-y-auto">

          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                addToCart(product);
                setSearch("");
                setProducts([]);
              }}
              className="p-3 border-b cursor-pointer hover:bg-green-100"
            >
              <div className="font-semibold">
                {product.productName}
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