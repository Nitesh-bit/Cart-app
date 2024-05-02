import { useCartProductContext } from "../context/CartProductContext";
import "./CartProducts.css";

export default function CartProducts({ product }) {
  const { handleDeleteProduct } = useCartProductContext();
  return (
    <div className="product-container">
      <img src={product.thumbnail} alt={product.title} className="prod-img" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => handleDeleteProduct(product.id)}>
        Remove Product
      </button>
    </div>
  );
}
