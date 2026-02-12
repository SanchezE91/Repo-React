import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/productService";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  const handleAdd = (qty) => {
    alert(`Agregaste ${qty} unidad(es) de ${product.title}`);
  };

  if (loading) return <p style={{ padding: 16 }}>Cargando detalle...</p>;

  if (!product)
    return (
      <div style={{ padding: 16 }}>
        <h2>Producto no encontrado</h2>
        <Link to="/">Volver</Link>
      </div>
    );

  return (
    <div style={{ padding: 16 }}>
      <Link to="/">← Volver</Link>

      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>
        Categoría: <b>{product.category}</b>
      </p>

      <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetailContainer;
