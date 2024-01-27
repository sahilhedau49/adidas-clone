import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartData } from "../context/cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const api_url = process.env.React_App_Backend_API;
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { addToCart } = CartData();

  useEffect(() => {
    const getData = async () => {
      const dataRsv = await axios.get(`${api_url}/product/${id}`);
      setData(dataRsv.data);
    };

    getData();
  }, [id]);

  const handleATC = () => {
    addToCart(data);
    toast.success("Added to cart 🛒", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="bg-gray-100">
      <div className="w-[60%] mx-auto py-20 md:py-10 md:w-[80%]">
        <div className="flex justify-between mb-10">
          <h2 className="text-3xl w-[70%] font-bold overflow-y-hidden md:text-xl">
            {data.name}
          </h2>
          <h3 className="uppercase text-lg text-slate-500 md:text-sm">
            {data.category}
          </h3>
        </div>
        <div>
          <img
            className="w-[30%] md:w-[100%]"
            src={data.imgUrl}
            alt="Product"
          />
        </div>
        <div className="text-xl text-slate-700 mt-10 md:text-sm">
          <p>{data.description}</p>
        </div>
        <div className="text-2xl my-6 font-semibold md:text-xl">
          <p>
            Price: <span className="text-sky-600">{data.price}</span> /-
          </p>
        </div>
        <div>
          {data.price && (
            <button
              onClick={handleATC}
              className="btn rounded-lg hover:bg-slate-800 border-2 border-black hover:text-slate-50 py-2 px-6 text-xl md:text-lg md:py-1"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
