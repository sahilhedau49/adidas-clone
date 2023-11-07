import React from "react";
import { CartData } from "../context/cart";

const CartRow = ({ data }) => {
  const handleDel = () => {};

  return (
    <div className="grid grid-cols-5 ">
      <div className="my-auto">{data.name}</div>
      <img className="block mx-auto w-12 my-auto" src={data.imgUrl}></img>
      <div className="my-auto">{data.quantity}</div>
      <div className="my-auto">{data.price}</div>
      <div className="my-auto">
        <button onClick={handleDel}>DEL</button>
      </div>
    </div>
  );
};

export default CartRow;
