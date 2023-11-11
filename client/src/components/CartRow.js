import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { CartData } from "../context/cart";
import "../global.css";

const CartRow = ({ data }) => {
  const { deleteFromCart, decrementQuantity, incrementQuantity, getQuantity } =
    CartData();

  const handleDel = () => {
    deleteFromCart(data._id);
  };

  const shouldDecDisableBtn = getQuantity(data._id) === 1;
  const shouldIncDisableBtn = getQuantity(data._id) === 10;

  return (
    <div className="grid-cart border-b-[1px] py-6 border-slate-700">
      <div className="my-auto text-[0.9rem] px-4">{data.name}</div>
      <img
        className="block mx-auto w-20 my-auto rounded-md"
        src={data.imgUrl}
      ></img>
      <div className="flex justify-center place-items-center">
        <button
          disabled={shouldDecDisableBtn}
          onClick={() => {
            decrementQuantity(data._id);
          }}
          className="disabled-btn rounded-l-md selection:bg-transparent cursor-pointer text-white bg-gray-600 text-center w-7 h-7 text-lg "
        >
          -
        </button>
        <div className="text-center w-8 text-lg">{data.quantity}</div>
        <button
          disabled={shouldIncDisableBtn}
          onClick={() => {
            incrementQuantity(data._id);
          }}
          className="disabled-btn rounded-r-md selection:bg-transparent cursor-pointer text-white bg-gray-600 text-center w-7 h-7 text-lg"
        >
          +
        </button>
      </div>
      <div className="my-auto">
        {data.totalPrice.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </div>
      <div className="my-auto text-2xl text-gray-800">
        <button onClick={handleDel} className="duration-200 hover:text-red-600">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default CartRow;
