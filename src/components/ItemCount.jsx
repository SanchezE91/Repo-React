import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => setCount((prev) => Math.max(1, prev - 1));
  const increment = () => setCount((prev) => Math.min(stock, prev + 1));

  const disabledAdd = stock === 0;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <button
          onClick={decrement}
          className="w-10 h-10 rounded-xl bg-gray-200 hover:bg-gray-300 transition font-bold"
        >
          -
        </button>

        <span className="text-lg font-semibold w-10 text-center">
          {count}
        </span>

        <button
          onClick={increment}
          disabled={count >= stock}
          className="w-10 h-10 rounded-xl bg-gray-200 hover:bg-gray-300 transition font-bold disabled:opacity-40"
        >
          +
        </button>
      </div>

      <button
        disabled={disabledAdd}
        className="px-4 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition disabled:opacity-40"
      >
        Agregar al carrito
      </button>

      {stock === 0 && (
        <p className="text-sm text-red-600">Sin stock</p>
      )}
    </div>
  );
};

export default ItemCount;

