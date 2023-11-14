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
      let p = product.price;
      product["totalPrice"] = p;
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
    localStorage.setItem("adidasCart", JSON.stringify(updatedCart));
    console.log("Deleted");
  };

  const incrementQuantity = (id) => {
    setInCart((prevState) => {
      let findProd = inCart.findIndex((obj) => {
        return obj._id === id;
      });

      const updatedData = [...prevState];
      let prevQuantity = updatedData[findProd].quantity;
      let p = updatedData[findProd].price;
      if (prevQuantity === 10) {
        return prevState;
      }

      updatedData[findProd] = {
        ...updatedData[findProd],
        quantity: prevQuantity + 1,
        totalPrice: (prevQuantity + 1) * p,
      };
      localStorage.setItem("adidasCart", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const decrementQuantity = (id) => {
    setInCart((prevState) => {
      let findProd = inCart.findIndex((obj) => {
        return obj._id === id;
      });

      const updatedData = [...prevState];
      let prevQuantity = updatedData[findProd].quantity;
      let p = updatedData[findProd].price;

      if (prevQuantity === 1) {
        return prevState;
      }

      updatedData[findProd] = {
        ...updatedData[findProd],
        quantity: prevQuantity - 1,
        totalPrice: (prevQuantity - 1) * p,
      };
      localStorage.setItem("adidasCart", JSON.stringify(updatedData));

      return updatedData;
    });
  };

  const getQuantity = (id) => {
    const idx = inCart.findIndex((obj) => {
      return obj._id === id;
    });
    return inCart[idx].quantity;
  };

  const getTotalCartAmount = () => {
    let amount = 0;
    inCart.forEach((obj) => {
      amount = amount + obj.totalPrice;
    });
    // console.log(amount);

    return amount;
  };

  const emptyCart = () => {
    setInCart([]);
    localStorage.removeItem("adidasCart");
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        inCart,
        deleteFromCart,
        incrementQuantity,
        decrementQuantity,
        getQuantity,
        getTotalCartAmount,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartData = () => {
  return useContext(CartContext);
};
