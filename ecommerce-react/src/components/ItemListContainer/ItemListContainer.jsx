import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../firebase/firestore";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // ✅ NORMALIZACIÓN DE CATEGORÍA
    const normalizedCategory = categoryId
      ? categoryId.toLowerCase().trim()
      : undefined;

    getProducts(normalizedCategory)
      .then(setItems)
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (items.length === 0) return <p>No hay productos en esta categoría.</p>;

  return (
    <>
      <h1 style={{ marginBottom: 12 }}>
        {categoryId ? `Categoría: ${categoryId}` : "Catálogo"}
      </h1>
      <ItemList items={items} />
    </>
  );
}
