import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleMinus = () => setCount((prev) => Math.max(1, prev - 1));
  const handlePlus = () => setCount((prev) => Math.min(stock, prev + 1));

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button onClick={handleMinus} disabled={count === 1}>
          -
        </button>

        <span style={{ fontWeight: "bold" }}>{count}</span>

        <button onClick={handlePlus} disabled={count === stock}>
          +
        </button>
      </div>

      <button
        onClick={() => onAdd(count)}
        style={{ marginTop: 10, padding: 10 }}
      >
        Agregar al carrito
      </button>

      <p>Stock disponible: {stock}</p>
    </div>
  );
};

export default ItemCount;
