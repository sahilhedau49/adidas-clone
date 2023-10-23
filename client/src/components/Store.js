import React, { useEffect } from "react";
import Substores from "./Substores";
import Axios from "axios";

const Store = ({ category }) => {
  // fetch rerquest from specific category (get from props) and render down using map function

  // const getData = async (flag) => {
  //   let querry = flag;
  //   if (querry === "all") {
  //     querry = null;
  //   }
  //   const data = await Axios.get("http://localhost:8000/products", {
  //     category: querry,
  //   });
  //   console.log(data);
  // };

  // useEffect(() => {
  //   console.log("I am here");
  //   getData(category);
  // }, [category]);

  return (
    <div>
      <div>
        <Substores category={category} />
      </div>
    </div>
  );
};

export default Store;
