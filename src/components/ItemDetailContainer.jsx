import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "./service/productService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    setNotFound(false);

    getProductById(itemId)
      .then((res) => setProduct(res))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-block mb-6 text-sm text-blue-600 hover:underline"
        >
          ← Volver al catálogo
        </Link>

        {loading ? (
          <p className="text-gray-600">Cargando detalle...</p>
        ) : notFound ? (
          <p className="text-gray-600">Producto no encontrado.</p>
        ) : (
          <ItemDetail product={product} />
        )}
      </div>
    </main>
  );
};

export default ItemDetailContainer;
