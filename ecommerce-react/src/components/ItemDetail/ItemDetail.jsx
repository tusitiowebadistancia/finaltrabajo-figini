import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(item, qty);
    setAdded(true); // ocultar ItemCount
  };

  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", borderRadius: 14, objectFit: "cover" }}
      />
      <div>
        <h2 style={{ marginTop: 0 }}>{item.title}</h2>
        <p style={{ color: "#555" }}>{item.description}</p>
        <p style={{ fontWeight: 800, fontSize: 18 }}>${item.price}</p>

        {item.stock <= 0 ? (
          <p style={{ color: "crimson" }}>Producto sin stock</p>
        ) : added ? (
          <Link to="/cart">Ir al carrito →</Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        )}
      </div>
    </section>
  );
}
