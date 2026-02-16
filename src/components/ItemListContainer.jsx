import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./service/productService";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryNames = {
    herramientas: "Herramientas",
    seguridad: "Seguridad",
    accesorios: "Accesorios",
  };

  const categoryTitle = categoryId ? categoryNames[categoryId] : null;

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10">
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

        {loading ? (
          <p className="text-gray-600">Cargando productos...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-600">No hay productos para esta categoría.</p>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </main>
  );
};

export default ItemListContainer;
