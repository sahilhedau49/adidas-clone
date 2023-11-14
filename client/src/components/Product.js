import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartData } from "../context/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { addToCart } = CartData();

  useEffect(() => {
    const getData = async () => {
      const dataRsv = await axios.get(`http://localhost:8000/product/${id}`);
      setData(dataRsv.data);
    };

    getData();
  }, [id]);

  const handleATC = () => {
    addToCart(data);
    toast.success("Added to cart 🛒", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="bg-gray-100">
      <div className="w-[60%] mx-auto my-20">
        <div className="flex justify-between mb-10">
          <h2 className="text-3xl w-[70%] font-bold overflow-y-hidden">
            {data.name}
          </h2>
          <h3 className="uppercase text-lg text-slate-500">{data.category}</h3>
        </div>
        <div>
          <img className="w-[30%]" src={data.imgUrl} alt="Product" />
        </div>
        <div className="text-xl text-slate-700 mt-10">
          <p>{data.description}</p>
        </div>
        <div className="text-2xl my-6 font-semibold">
          <p>
            Price:{" "}
            <span className="line-through mx-2">{data.price + 1000}</span>
            <span className="text-red-600">{data.price}</span> /-
          </p>
        </div>
        <div>
          <button
            onClick={handleATC}
            className="btn rounded-lg hover:bg-slate-800 border-2 border-black hover:text-slate-50 py-2 px-6 text-xl"
          >
            Add to cart
          </button>
          <ToastContainer
            className="overflow-y-hidden"
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
