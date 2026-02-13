import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 bg-white rounded-2xl shadow-lg p-6">
      <div className="w-full h-80 bg-gray-100 rounded-2xl overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>

        <p className="text-gray-600 mt-3 leading-relaxed">
          {product.description}
        </p>

        <p className="text-2xl font-semibold mt-5 text-gray-900">
          ${product.price}
        </p>

        <div className="mt-6">
          <ItemCount stock={product.stock} initial={1} />
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Stock disponible: {product.stock}
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
