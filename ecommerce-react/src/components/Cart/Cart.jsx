import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>Carrito</h1>
        <p>Carrito vacío.</p>
        <Link to="/">Volver al catálogo →</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((p) => (
        <CartItem key={p.id} item={p} onRemove={removeItem} />
      ))}

      <h3 style={{ marginTop: 14 }}>Total: ${totalPrice}</h3>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout">Finalizar compra →</Link>
      </div>
    </div>
  );
}
