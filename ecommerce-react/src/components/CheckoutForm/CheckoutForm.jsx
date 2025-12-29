import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../firebase/firestore";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  if (cart.length === 0 && !orderId) {
    return (
      <div>
        <h1>Checkout</h1>
        <p>No hay items para comprar.</p>
        <Link to="/">Ir al catálogo →</Link>
      </div>
    );
  }

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!buyer.name || !buyer.phone || !buyer.email) {
      setError("Completá todos los campos.");
      return;
    }

    const order = {
      buyer,
      items: cart.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        quantity: p.quantity,
      })),
      total: totalPrice,
    };

    try {
      setLoading(true);
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      setError("Ocurrió un error generando la orden.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div>
        <h1>¡Compra confirmada!</h1>
        <p>Tu id de orden es:</p>
        <code style={{ fontSize: 16 }}>{orderId}</code>
        <div style={{ marginTop: 12 }}>
          <Link to="/">Volver al catálogo →</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total a pagar: <strong>${totalPrice}</strong></p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10, maxWidth: 420 }}>
        <input name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} />
        <input name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} />
        <input name="email" placeholder="Email" value={buyer.email} onChange={handleChange} />
        {error && <p style={{ color: "crimson" }}>{error}</p>}
        <button disabled={loading}>{loading ? "Generando orden..." : "Confirmar compra"}</button>
      </form>
    </div>
  );
}
