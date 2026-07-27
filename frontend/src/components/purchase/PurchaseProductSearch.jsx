import { useMemo, useState } from "react";
import useProducts from "../../hooks/useProducts";

function PurchaseProductSearch({ addToCart }) {
  const [search, setSearch] = useState("");

  const { products } = useProducts();

  const filteredProducts = useMemo(() => {
    if (!search) return [];

    return products.filter((product) =>
      product.productName
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, products]);

  return (
    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-bold mb-4">
        Search Product
      </h2>

      <input
        type="text"
        className="border rounded p-3 w-full"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length > 0 && (

        <div className="border rounded mt-3 max-h-72 overflow-y-auto">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="p-3 border-b cursor-pointer hover:bg-green-100"
              onClick={() => {
                addToCart(product);
                setSearch("");
              }}
            >

              <div className="font-semibold">
                {product.productName}
              </div>

              <div className="text-sm text-gray-600">
                Current Stock : {product.quantity}
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default PurchaseProductSearch;