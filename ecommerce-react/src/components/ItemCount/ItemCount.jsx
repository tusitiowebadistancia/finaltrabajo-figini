import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(Math.min(Math.max(initial, 1), stock));

  const dec = () => setCount((c) => Math.max(1, c - 1));
  const inc = () => setCount((c) => Math.min(stock, c + 1));

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 12 }}>
      <button onClick={dec} disabled={count <= 1}>-</button>
      <span style={{ minWidth: 22, textAlign: "center" }}>{count}</span>
      <button onClick={inc} disabled={count >= stock}>+</button>

      <button onClick={() => onAdd(count)} disabled={stock <= 0}>
        Agregar al carrito
      </button>
    </div>
  );
}
