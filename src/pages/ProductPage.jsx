import { useEffect, useState } from "react";
import Product from "../components/Product";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await fetch("https://dummyjson.com/products?limit=12");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        margin: "60px 100px",
        gap: "25px",
      }}
    >
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
