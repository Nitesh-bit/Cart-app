import { createContext, useContext, useState } from "react";

const CartProductContext = createContext();

// context provider function
export const CartProductProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  function handleAddProducts(prod) {
    setCartProducts((prev) => [...prev, prod]);
  }

  function handleDeleteProduct(id) {
    setCartProducts(
      cartProducts.filter((prod) => {
        return prod.id !== id;
      })
    );
  }

  return (
    <CartProductContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        handleAddProducts,
        handleDeleteProduct,
      }}
    >
      {children}
    </CartProductContext.Provider>
  );
};

//Custom hook for useContext so that we don't have to import context and useContext
export const useCartProductContext = () => {
  const data = useContext(CartProductContext);
  return data;
};
