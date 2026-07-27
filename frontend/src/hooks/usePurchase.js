import { useState, useMemo } from "react";

export default function usePurchase() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      return;
    }

    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
        costPrice: product.purchasePrice || 0,
      },
    ]);
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Number(quantity) }
          : item
      )
    );
  };

  const updateCostPrice = (id, costPrice) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, costPrice: Number(costPrice) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const grandTotal = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.quantity * item.costPrice,
      0
    );
  }, [cart]);

  const clearCart = () => setCart([]);

  return {
    cart,
    addToCart,
    updateQuantity,
    updateCostPrice,
    removeItem,
    grandTotal,
    clearCart,
  };
}