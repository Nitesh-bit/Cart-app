import CartProducts from "../components/CartProducts";
import { useCartProductContext } from "../context/CartProductContext";

export default function CartPage() {
  const { cartProducts } = useCartProductContext();
  const totalPrice = cartProducts.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );

  return (
    <>
      <h2 style={{ margin: "50px 105px 20px" }}>Your Cart</h2>
      <h3 style={{ margin: "10px 105px" }}>Your total : ${totalPrice}</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          margin: "60px 100px",
          gap: "25px",
        }}
      >
        {cartProducts.map((product) => {
          return <CartProducts key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
