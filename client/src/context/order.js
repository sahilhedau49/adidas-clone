import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("orderedData"));
    if (data) {
      setOrder(data);
    }
  }, []);

  const addOrder = (data) => {
    let updatedData = [data];
    setOrder(updatedData);
    localStorage.setItem("orderedData", JSON.stringify(order));
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        addOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const OrderData = () => {
  return useContext(OrderContext);
};
