import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "./service/productService";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryNames = useMemo(
    () => ({
      herramientas: "Herramientas",
      seguridad: "Seguridad",
      accesorios: "Accesorios",
    }),
    []
  );

  const categoryTitle = categoryId ? categoryNames[categoryId] : null;

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setProducts([]);

    getProducts(categoryId)
      .then((data) => {
        if (isMounted) setProducts(data);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [categoryId]);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Título PRO fijo */}
        <header className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Herramientas, Seguridad y Accesorios
          </h2>

          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Elegí una categoría y encontrá lo que necesitás.
          </p>

          {categoryTitle && (
            <p className="mt-3 text-sm text-gray-500">
              Categoría actual:{" "}
              <span className="font-semibold">{categoryTitle}</span>
            </p>
          )}
        </header>

        {/* Contenido */}
        {loading ? (
          <p className="text-gray-600">Cargando productos...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-600">No hay productos para esta categoría.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((prod) => (
              <article
                key={prod.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="w-full h-48 bg-gray-100">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.jpg";
                    }}
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {prod.title}
                  </h3>

                  <p className="text-gray-600 mt-1">${prod.price}</p>

                  <Link
                    to={`/item/${prod.id}`}
                    className="inline-block mt-4 px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
                  >
                    Ver detalle
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ItemListContainer;



