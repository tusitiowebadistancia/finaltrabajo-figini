import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={item.image}
        className="card-img-top"
        alt={item.title}
        style={{ height: 180, objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text mb-2">${item.price}</p>

        <p className={`small ${item.stock > 0 ? "text-success" : "text-danger"}`}>
          {item.stock > 0 ? `Existencias: ${item.stock}` : "Sin stock"}
        </p>

        <Link to={`/item/${item.id}`} className="btn btn-outline-primary mt-auto">
          Ver detalle →
        </Link>
      </div>
    </div>
  );
}
