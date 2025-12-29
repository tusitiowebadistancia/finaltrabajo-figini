import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartWidget() {
  const { totalUnits } = useContext(CartContext);

  return (
    <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      <span style={{ fontSize: 22 }}>🛒</span>
      {totalUnits > 0 && (
        <span
          style={{
            position: "absolute",
            top: -8,
            right: -10,
            background: "black",
            color: "white",
            borderRadius: 999,
            padding: "2px 7px",
            fontSize: 12,
          }}
        >
          {totalUnits}
        </span>
      )}
    </div>
  );
}
