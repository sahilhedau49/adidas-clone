import React from "react";
import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router";
import { CartData } from "../context/cart";
import { OrderData } from "../context/order";
import axios from "axios";

const Success = () => {
  const navigate = useNavigate();
  const { emptyCart } = CartData();
  const { order } = OrderData();

  const handleNav = async () => {
    console.log(order);
    try {
      await axios.post("http://localhost:8000/addOrder", order[0]);
    } catch (error) {
      console.log(error);
    }
    emptyCart();
    navigate("/store/all");
  };

  return (
    <div>
      <div className="my-10">
        <div className="flex gap-3 place-content-center place-items-center">
          <FcApproval className="text-7xl" />
          <p className="text-4xl overflow-y-hidden">Order Placed !!!</p>
        </div>
        <div className="mt-8 flex place-content-center">
          <button
            onClick={handleNav}
            className="px-4 py-2 rounded-xl border-2 outline-none duration-200 hover:border-gray-900"
          >
            Continue Shopping 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
