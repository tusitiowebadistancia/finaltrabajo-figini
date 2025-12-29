import { createContext, useMemo, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // [{id, title, price, quantity, stock, image}]

  const addItem = (item, quantity) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        const newQty = existing.quantity + quantity;
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: Math.min(newQty, item.stock) } : p
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);

  const totalUnits = useMemo(
    () => cart.reduce((acc, p) => acc + p.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((acc, p) => acc + p.quantity * p.price, 0),
    [cart]
  );

  const value = { cart, addItem, removeItem, clearCart, totalUnits, totalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
