import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js/pure";
import { CartData } from "../context/cart";

const Checkout = () => {
  const { inCart } = CartData();
  const [addressData, setAddressData] = useState({
    name: "",
    phone: "",
    housenumber: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleAddressDataChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const makePayment = async () => {
    if (inCart.length === 0) {
      return;
    }

    const stripe = await loadStripe(
      "pk_test_51OCLURSBwEURRPsmktzwpWbkEkOr6KJo060qt2mDBnT4pu2N6L1YoFPU4g40UZ5InZc0gGNdPq7vuHFCi2gqdY0x00zFkjSIL7"
    );

    const body = {
      products: inCart,
      addressData: addressData,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:8000/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div>
      <div className="flex flex-col place-items-center">
        <div className="my-6 text-3xl">
          <p className="overflow-y-hidden">Address Details</p>
        </div>
        <div className="w-[30%]">
          <p className="pl-2 text-xl mb-1">Full Name*</p>
          <input
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="text"
            name="name"
          />
          <p className="pl-2 text-xl mb-1">Mobile number*</p>
          <input
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="phone"
            name="phone"
          />
          <p className="pl-2 text-xl mb-1">House no.*</p>
          <input
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="pin"
            name="housenumber"
          />
          <p className="pl-2 text-xl mb-1">Address*</p>
          <input
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="address"
            name="address"
          />
          <p className="pl-2 text-xl mb-1">Pincode*</p>
          <input
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="pincode"
            name="pincode"
          />
          <p className="pl-2 text-xl mb-1">City*</p>
          <input
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="text"
            name="city"
          />
          <p className="pl-2 text-xl mb-1">State*</p>
          <input
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="text"
            name="state"
          />
        </div>
      </div>
      <div className="">
        <button
          onClick={makePayment}
          className="block mx-auto w-[15%] my-10 text-white py-2 border-2 font-semibold bg-green-600 border-green-600 rounded-2xl duration-200 hover:text-black hover:bg-transparent"
        >
          Place Your Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
