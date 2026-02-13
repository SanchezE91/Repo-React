import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="w-full h-48 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {product.title}
        </h3>

        <p className="text-gray-600 mt-1">${product.price}</p>

        <Link
          to={`/item/${product.id}`}
          className="inline-block mt-4 px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
};

export default Item;
