import { useCartProductContext } from "../context/CartProductContext";
import "./Product.css";

export default function Product({ product }) {
  const { cartProducts, handleAddProducts, handleDeleteProduct } =
    useCartProductContext();
  return (
    <div className="product-container">
      <img src={product.thumbnail} alt={product.title} className="prod-img" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {cartProducts.includes(product) ? (
        <button onClick={() => handleDeleteProduct(product.id)}>
          Remove to Cart
        </button>
      ) : (
        <button onClick={() => handleAddProducts(product)}>Add to Cart</button>
      )}
    </div>
  );
}
