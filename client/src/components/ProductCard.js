import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, name, price, imgUrl } = props;
  return (
    <Link
      to={`/product/${id}`}
      className="flex justify-between h-[20rem] flex-col p-4 card-bg duration-300 bg-gray-200 hover:bg-gray-300"
    >
      <div className="h-[60%]">
        <img
          className="rounded-md mx-auto max-h-[100%] max-w-[100%]"
          src={imgUrl}
          alt="Product Details"
        />
      </div>
      <div className="mt-4 h-[30%]">
        <div className="text-xl font-bold text-slate-700">
          {`${name.substring(0, 20)} ...`}
        </div>
        <p className="mt-4">
          Price: <span className="line-through mx-2">{price + 1000}</span>
          <span className="text-red-600">{price}</span> /-
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
