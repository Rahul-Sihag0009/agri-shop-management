import { useMemo, useState } from "react";

export default function useBilling() {
  const [cart, setCart] = useState([]);

  // Add Product
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, {
  ...product,
  quantity: 1,
  quantityInStock: product.quantity,
}];
    });
  };

  // Increase Quantity
  const increaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) => {
      if (item.id !== id) return item;

      if (item.quantity >= item.quantityInStock) {
        return item;
      }

      return {
        ...item,
        quantity: item.quantity + 1,
      };
    })
  );
};

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Product
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Totals
  const subtotal = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.quantity * item.sellingPrice,
      0
    );
  }, [cart]);

  const gst = useMemo(() => {
  return cart.reduce(
    (sum, item) =>
      sum +
      (item.quantity * item.purchasePrice * item.gst) / 100,
    0
  );
}, [cart]);

  const grandTotal = useMemo(() => subtotal + gst, [subtotal, gst]);

  return {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    subtotal,
    gst,
    grandTotal,
  };
}