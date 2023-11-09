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
    let findProd = inCart.findIndex((obj) => {
      return obj._id === product._id;
    });
    if (findProd === -1) {
      product["quantity"] = 1;
      let updatedCart = [...inCart, product];
      setInCart(updatedCart);
      localStorage.setItem("adidasCart", JSON.stringify(updatedCart));
    }
  };

  const deleteFromCart = (id) => {
    let updatedCart = inCart.filter((obj) => {
      return obj._id !== id;
    });
    setInCart(updatedCart);
    console.log("Deleted");
  };

  return (
    <CartContext.Provider value={{ addToCart, inCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartData = () => {
  return useContext(CartContext);
};
