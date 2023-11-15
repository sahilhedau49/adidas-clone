import React from "react";
import { CartData } from "../context/cart";
import CartRow from "./CartRow";
import "../global.css";
import { useNavigate } from "react-router";

const Cart = () => {
  const { inCart, getTotalCartAmount } = CartData();
  const navigate = useNavigate();

  let Subtotal = getTotalCartAmount();

  const navToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="flex">
        <div className="w-[65%] pb-6 flex flex-col my-10 mx-10 text-center">
          <div className="bg-gray-400">
            <ul className="grid-cart border-b-[1px] font-medium border-black py-6">
              <li>Name</li>
              <li>Image</li>
              <li>Quantity</li>
              <li>Price</li>
              <li>Delete</li>
            </ul>
          </div>
          <div className="custom-scrollbar bg-gray-200 max-h-[60vh] overflow-y-scroll">
            {inCart.map((product) => {
              return (
                <div key={product._id}>
                  <div className="overflow-visible">
                    <CartRow data={product} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[30%] px-14 py-10 rounded-l-[50px] h-fit m-10 mr-0 summary-box">
          <h1 className="mb-6 text-3xl overflow-y-hidden">Summary</h1>
          <div className="flex justify-between mb-3">
            <p className="text-xl text-gray-800">Subtotal: </p>
            <p className="text-lg font-semibold">
              {Subtotal.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </p>
          </div>
          <div className="flex justify-between pb-3 border-b-2 border-neutral-950">
            <p className="text-xl text-gray-800">Delivery Charges: </p>
            <p className="text-lg font-semibold text-green-600"> FREE</p>
          </div>
          <div className="flex justify-between my-3">
            <p className="text-xl text-gray-800">Total: </p>
            <p className="text-xl font-semibold">
              {Subtotal.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </p>
          </div>
          <button
            onClick={navToCheckout}
            className="mt-3 w-full text-white py-2 border-2 bg-gray-700 border-gray-700 rounded-2xl duration-200 hover:text-black hover:bg-transparent"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
