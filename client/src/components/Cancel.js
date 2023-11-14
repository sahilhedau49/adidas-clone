import React from "react";
import { FcCancel } from "react-icons/fc";
import { useNavigate } from "react-router";

const Cancel = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/store/all");
  };

  return (
    <div>
      <div className="my-10">
        <div className="flex gap-3 place-content-center place-items-center">
          <FcCancel className="text-7xl" />
          <p className="text-4xl overflow-y-hidden">Order Cancelled !!!</p>
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

export default Cancel;
