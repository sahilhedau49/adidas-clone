import React from "react";
import { CartData } from "../context/cart";

const Cart = () => {
  const { inCart } = CartData();

  // Map all data and design remaining...
  return (
    <>
      <div>
        {inCart.map((product) => {
          return (
            <>
              <div>{product.name}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
