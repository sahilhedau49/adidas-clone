import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [inCart, setInCart] = useState([]);

  const addToCart = (product, count) => {
    product["quantity"] = count;
    setInCart([...inCart, product]);

    // Add to local storage work remaining
  };

  return (
    <CartContext.Provider value={{ addToCart, inCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartData = () => {
  return useContext(CartContext);
};
