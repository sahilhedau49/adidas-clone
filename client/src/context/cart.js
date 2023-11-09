import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [inCart, setInCart] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("adidasCart"));
    if (data) {
      setInCart(data);
    }
  }, []);

  const addToCart = (product) => {
    product["quantity"] = 1;
    let updatedCart = [...inCart, product];
    setInCart(updatedCart);
    localStorage.setItem("adidasCart", JSON.stringify(updatedCart));
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
