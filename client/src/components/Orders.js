import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderRow from "./OrderRow";

const Orders = () => {
  const api_url = process.env.React_App_Backend_API;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${api_url}/allOrders`);
      console.log(res.data);
      setOrders(res.data);
    };

    getData();
  }, []);

  return (
    <div className="w-screen min-h-screen py-10 px-40">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Orders</h1>
      </div>
      <div>
        {orders.map((order) => {
          return <OrderRow key={order._id} order={order} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
