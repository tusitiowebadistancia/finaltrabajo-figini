import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "black" : "#444",
  fontWeight: isActive ? 700 : 500,
});

export default function NavBar() {
  return (
    <header style={{ borderBottom: "1px solid #eee" }}>
      <nav
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: 800 }}>
          TechStore
        </Link>

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <NavLink to="/" style={linkStyle}>Catálogo</NavLink>
          <NavLink to="/category/laptops" style={linkStyle}>Laptops</NavLink>
          <NavLink to="/category/audio" style={linkStyle}>Audio</NavLink>
          <NavLink to="/category/accesorios" style={linkStyle}>Accesorios</NavLink>
          <NavLink to="/cart" style={linkStyle}><CartWidget /></NavLink>
        </div>
      </nav>
    </header>
  );
}
