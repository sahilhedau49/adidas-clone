import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import OrderRow from "./OrderRow";

const Myorders = () => {
  const api_url = process.env.React_App_Backend_API;
  const [orders, setOrders] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `${api_url}/orders?username=${user.email.split("@")[0]}`
      );
      console.log(res.data);
      setOrders(res.data);
    };

    getData();
  }, [user]);

  return (
    <div className="w-screen min-h-screen py-10 px-40">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">My Orders</h1>
      </div>
      <div>
        {orders.map((order) => {
          return <OrderRow key={order._id} order={order} />;
        })}
      </div>
    </div>
  );
};

export default Myorders;
