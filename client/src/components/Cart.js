import React from "react";
import { CartData } from "../context/cart";
import CartRow from "./CartRow";

const Cart = () => {
  const { inCart } = CartData();

  return (
    <>
      <div className="w-[70%] bg-gray-200 pb-6 flex flex-col my-10 px-8  mx-auto text-center">
        <div>
          <ul className="grid border-b-[1px] border-black py-6 grid-cols-5">
            <li>Name</li>
            <li>Image</li>
            <li>Quantity</li>
            <li>Price</li>
            <li>Delete</li>
          </ul>
        </div>
        <div className="max-h-[60vh] overflow-y-scroll">
          {inCart.map((product) => {
            return (
              <>
                <div className="overflow-visible">
                  <CartRow data={product} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
