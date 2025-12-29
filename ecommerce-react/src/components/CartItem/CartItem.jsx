export default function CartItem({ item, onRemove }) {
  const subtotal = item.price * item.quantity;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: 12, alignItems: "center", borderBottom: "1px solid #eee", padding: "10px 0" }}>
      <img src={item.image} alt={item.title} style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 10 }} />
      <div>
        <strong>{item.title}</strong>
        <div style={{ color: "#555" }}>
          {item.quantity} x ${item.price} = <strong>${subtotal}</strong>
        </div>
      </div>
      <button onClick={() => onRemove(item.id)}>Eliminar</button>
    </div>
  );
}
