import Item from "./item";

const ItemList = ({ products }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ItemList;

