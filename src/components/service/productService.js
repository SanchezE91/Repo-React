import { products } from "../../data/products";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getProducts = async (categoryId) => {
  await delay(700);

  if (!categoryId) return products;

  return products.filter((p) => p.category === categoryId);
};

export const getProductById = async (id) => {
  await delay(700);

  const product = products.find((p) => p.id === id);

  if (!product) throw new Error("Producto no encontrado");

  return product;
};

