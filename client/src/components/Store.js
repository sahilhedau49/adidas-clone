import React, { useEffect, useState } from "react";
import Substores from "./Substores";
import axios from "axios";
import ProductCard from "./ProductCard";

const Store = ({ category }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((prod) => {
    return prod.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const getData = async (flag) => {
      let querry = flag;
      if (querry === "all") {
        const dataRsv = await axios.get(`http://localhost:8000/products/all`);
        setData(dataRsv.data);
        // console.log(dataRsv.data);
      } else {
        const dataRsv = await axios.get(
          `http://localhost:8000/products?category=${querry}`
        );
        setData(dataRsv.data);
      }
      // console.log(data);
    };

    getData(category);
  }, [category]);

  return (
    <div className="relative bg-gray-100 pb-20">
      <div className="absolute right-6 top-4 text-left">
        <p className="text-xl pb-2">Search: </p>
        <input
          onChange={handleSearchChange}
          className="px-4 py-2 border-2 border-gray-300 focus:border-2 focus:border-gray-950 outline-none duration-200 rounded-xl"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="my-20">
        <Substores category={category} />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-4 gap-1">
          {filteredData.map((product) => {
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
