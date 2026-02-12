import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "./service/productService";

const ItemListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

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
    <div className="item-container">
      <h2>{mensaje}</h2>

      {categoryId && <h3>Categoría: {categoryId}</h3>}

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {products.map((prod) => (
            <div
              key={prod.id}
              style={{
                border: "1px solid #ddd",
                padding: 12,
                borderRadius: 10,
              }}
            >
              <h3>{prod.title}</h3>
              <p>${prod.price}</p>
              <Link to={`/item/${prod.id}`}>Ver detalle</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

