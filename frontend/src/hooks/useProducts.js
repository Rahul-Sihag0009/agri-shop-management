import { useEffect, useState } from "react";
import api from "../services/api";

export default function useProducts(search = "") {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await api.get("/products", {
        params: {
          search,
        },
      });

      setProducts(res.data.products);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search]);

  return {
    products,
    loading,
    refresh: fetchProducts,
  };
}