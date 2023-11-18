import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, name, price, imgUrl } = props;
  return (
    <Link
      to={`/product/${id}`}
      className="flex justify-between h-full flex-col p-4 card-bg duration-300 bg-gray-200 hover:bg-gray-300"
    >
      <div className="h-[12rem] md:h-[8rem]">
        <img
          className="rounded-md mx-auto max-h-[100%] max-w-[100%]"
          src={imgUrl}
          alt="Product Details"
        />
      </div>
      <div className="mt-4 h-[30%] md:mt-2 md:h-max">
        <div className="text-lg font-bold text-slate-700 md:text-sm">
          {`${name.substring(0, 20)} ...`}
        </div>
        <p className="mt-4 text-xl md:text-sm md:mt-2">
          Price: <span className="text-sky-700">{price}</span> /-
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
