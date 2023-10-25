import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [quantity_error, setQuantity_error] = useState(false);

  const getData = async () => {
    const dataRsv = await axios.get(`http://localhost:8000/product/${id}`);
    setData(dataRsv.data);
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleATC = () => {
    if (count === 0) {
      setQuantity_error(true);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="w-[60%] mx-auto my-20">
        <div className="flex justify-between mb-10">
          <h2 className="text-3xl font-bold overflow-y-hidden">{data.name}</h2>
          <h3 className="uppercase text-lg text-slate-500">{data.category}</h3>
        </div>
        <div>
          <img className="w-[60%]" src={data.imgUrl} alt="Product" />
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
          <div className="flex mb-6">
            <p className="text-xl font-medium mr-6 mt-1">Quantity: </p>
            <div
              className="rounded-l-xl selection:bg-transparent cursor-pointer text-white bg-slate-700  text-center w-10 h-10 text-2xl font-bold "
              onClick={() => {
                count === 0 ? setCount(count) : setCount(count - 1);
              }}
            >
              -
            </div>
            <div className="text-center w-10 h-10 text-2xl font-bold">
              {count}
            </div>
            <div
              className="rounded-r-xl selection:bg-transparent cursor-pointer text-white bg-slate-700 text-center w-10 h-10 text-2xl font-bold"
              onClick={() => {
                setQuantity_error(false);
                setCount(count + 1);
                count < 10 ? setCount(count + 1) : setCount(count);
              }}
            >
              +
            </div>
          </div>
          {/* Add post method -- data will be stored in cart of user... */}
          <button
            onClick={handleATC}
            className="btn rounded-lg hover:bg-slate-800 border-2 border-black hover:text-slate-50 py-2 px-6 text-2xl"
          >
            Add to cart
          </button>
          {quantity_error && (
            <div className="mt-6 w-fit py-3 px-10 bg-red-400 rounded-2xl">
              <div>Please select quantity.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
