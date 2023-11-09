import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { CartData } from "../context/cart";

const CartRow = ({ data }) => {
  const { deleteFromCart } = CartData();

  const handleDel = () => {
    deleteFromCart(data._id);
  };

  return (
    <div className="grid grid-cols-5 border-b-[1px] py-6 border-slate-700">
      <div className="my-auto text-[0.9rem] px-4">{data.name}</div>
      <img
        className="block mx-auto w-16 my-auto rounded-md"
        src={data.imgUrl}
      ></img>
      <div className="flex justify-center place-items-center">
        <div className="rounded-l-md selection:bg-transparent cursor-pointer text-white bg-gray-600 text-center w-8 h-8 text-xl">
          -
        </div>
        <div className="text-center w-8 text-lg">{data.quantity}</div>
        <div className="rounded-r-md selection:bg-transparent cursor-pointer text-white bg-gray-600 text-center w-8 h-8 text-xl">
          +
        </div>
      </div>
      <div className="my-auto">{data.price} /-</div>
      <div className="my-auto text-2xl text-gray-800">
        <button onClick={handleDel}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default CartRow;
