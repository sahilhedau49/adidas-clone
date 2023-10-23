import React from "react";

const ProductCard = (props) => {
  const { name, price, imgUrl, category } = props;
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <div>
        <img src={imgUrl} alt="Product Image" />
      </div>
      <div>{category}</div>
    </div>
  );
};

export default ProductCard;
