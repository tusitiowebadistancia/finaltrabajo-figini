import Item from "../Item/Item";

export default function ItemList({ items }) {
  return (
    <div className="row g-4">
      {items.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-lg-4">
          <Item item={p} />
        </div>
      ))}
    </div>
  );
}
