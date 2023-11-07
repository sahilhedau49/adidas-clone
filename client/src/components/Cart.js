import React from "react";
import { CartData } from "../context/cart";
import CartRow from "./CartRow";

const Cart = () => {
  const { inCart } = CartData();

  return (
    <>
      <div className="w-[70%] flex flex-col my-10 px-8  mx-auto text-center">
        <div>
          <ul className="grid border-b-[1px] border-black py-6 grid-cols-5">
            <li>Name</li>
            <li>Image</li>
            <li>Quantity</li>
            <li>Price</li>
            <li>Delete</li>
          </ul>
        </div>
        {inCart.map((product) => {
          return (
            <>
              <div className="mt-10">
                <CartRow data={product} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
