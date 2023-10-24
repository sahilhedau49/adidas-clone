import React, { useEffect, useState } from "react";
import Substores from "./Substores";
import axios from "axios";
import ProductCard from "./ProductCard";

const Store = ({ category }) => {
  // fetch rerquest from specific category (get from props) and render down using map function

  const [data, setData] = useState([]);

  const getData = async (flag) => {
    let querry = flag;
    if (querry === "all") {
      const dataRsv = await axios.get(`http://localhost:8000/products/all`);
      setData(dataRsv.data.data);
      console.log(dataRsv.data.data);
    } else {
      const dataRsv = await axios.get(
        `http://localhost:8000/products?category=${querry}`
      );
      setData(dataRsv.data.data);
    }
    console.log(data);
  };

  useEffect(() => {
    getData(category);
  });

  return (
    <div className="bg-gray-100 pb-20">
      <div className="my-20">
        <Substores category={category} />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {data.map((product) => {
            return (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                imgUrl={product.imgUrl}
                category={product.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Store;
