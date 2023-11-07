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

  const addToCart = (product, count) => {
    product["quantity"] = count;
    setInCart([...inCart, product]);
    localStorage.setItem("adidasCart", JSON.stringify(inCart));

    // There is small delay in adding latest data into local storage
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
