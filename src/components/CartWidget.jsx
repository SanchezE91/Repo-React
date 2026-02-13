const CartWidget = () => {
  return (
    <div className="relative">
      <span className="text-2xl">🛒</span>
      <span className="absolute -top-2 -right-3 bg-white text-green-700 text-xs font-bold px-2 py-1 rounded-full">
        10
      </span>
    </div>
  );
};

export default CartWidget;
