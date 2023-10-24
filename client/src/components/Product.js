import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const [data, setData] = useState([]);
  const id = useParams();

  const getData = async () => {
    // const dataRsv = await axios.get();
    //   setData(dataRsv.data.data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  });

  return <div>Product</div>;
};

export default Product;
