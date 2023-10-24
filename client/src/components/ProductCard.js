import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, name, price, imgUrl } = props;
  return (
    <Link
      to={`/product/${id}`}
      className="flex justify-between h-[24rem] flex-col p-4 card-bg rounded-xl duration-300 bg-gray-200 hover:bg-gray-300"
    >
      <div className="h-[60%]">
        <img
          className="rounded-xl mx-auto max-h-[100%] max-w-[100%]"
          src={imgUrl}
          alt="Product Details"
        />
      </div>
      <div className="mt-4 h-[30%]">
        <div className="text-xl font-bold text-slate-700">{name}</div>
        <div className="mt-4 font-semibold">Rs. {price} /-</div>
      </div>
    </Link>
  );
};

export default ProductCard;
