import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProductCardForOrders = ({ product }) => {
  const api_url = process.env.React_App_Backend_API;
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${api_url}/getProductByID?id=${product.productDetails}`
      );
      console.log(res);
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="mb-4 pb-4 border-b-2">
      <p
        onClick={() => navigate(`/product/${product.productDetails}`)}
        className="text-gray-900 mb-2 cursor-pointer"
      >
        {data?.name}
      </p>
      <img
        onClick={() => navigate(`/product/${product.productDetails}`)}
        src={data?.imgUrl}
        alt={data?.name}
        className="w-[10%] rounded-lg mb-2 cursor-pointer"
      />
      <p className="text-gray-600">
        Quantity: <span className="text-black">{product.quantity}</span>
      </p>
      <p className="text-gray-600">
        Total Price: <span className="text-black">₹{product.totalPrice}</span>
      </p>
    </div>
  );
};

export default ProductCardForOrders;
