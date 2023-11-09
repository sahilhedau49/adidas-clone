import React from "react";
import { CartData } from "../context/cart";
import CartRow from "./CartRow";
import "../global.css";

const Cart = () => {
  const { inCart } = CartData();

  return (
    <>
      <div className="w-[70%] pb-6 flex flex-col my-10 mx-auto text-center">
        <div className="bg-gray-400">
          <ul className="grid border-b-[1px] font-medium border-black py-6 grid-cols-5">
            <li>Name</li>
            <li>Image</li>
            <li>Quantity</li>
            <li>Price</li>
            <li>Delete</li>
          </ul>
        </div>
        <div className="bg-gray-200 max-h-[60vh] overflow-y-scroll">
          {inCart.map((product) => {
            return (
              <>
                <div className="overflow-visible">
                  <CartRow key={product._id} data={product} />
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
