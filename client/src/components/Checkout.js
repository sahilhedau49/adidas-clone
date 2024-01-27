import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js/pure";
import { CartData } from "../context/cart";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const api_url = process.env.React_App_Backend_API;
  const { user } = useAuth0();
  const { inCart } = CartData();

  const [addressData, setAddressData] = useState({
    name: "",
    phone: 0,
    housenumber: 0,
    address: "",
    pincode: 0,
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

  const isAddressCorrect = () => {
    if (
      addressData.name === "" ||
      addressData.phone === 0 ||
      addressData.pincode === 0 ||
      addressData.address === "" ||
      addressData.housenumber === 0 ||
      addressData.state === "" ||
      addressData.city === ""
    ) {
      toast.error("All fields are mandatory", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return false;
    }
    if (addressData.phone.length !== 10) {
      toast.error("Phone number is not valid", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return false;
    }
    if (addressData.pincode.length !== 6) {
      toast.error("Pincode is not valid", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return false;
    }

    return true;
  };

  const makePayment = async () => {
    if (inCart.length === 0) {
      return;
    }

    if (!isAddressCorrect()) {
      return;
    }

    let userData = {
      name: user.name,
      email: user.email,
      photoUrl: user.picture,
    };

    const stripe = await loadStripe(
      "pk_test_51OCLURSBwEURRPsmktzwpWbkEkOr6KJo060qt2mDBnT4pu2N6L1YoFPU4g40UZ5InZc0gGNdPq7vuHFCi2gqdY0x00zFkjSIL7"
    );

    const body = {
      products: inCart,
      addressData: addressData,
      userData: userData,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(`${api_url}/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

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
        <div className="mt-6 mb-4 text-3xl">
          <p className="overflow-y-hidden font-semibold text-gray-800">
            Address Details
          </p>
        </div>
        <div>
          <p className="pb-2 md:text-base">
            <span className="text-red-600 font-semibold">Note: </span>Make sure
            data is filled correct.
          </p>
        </div>
        <div className="w-[30%] mt-4 md:w-[80%]">
          <p className="pl-2 text-lg mb-1">Full Name*</p>
          <input
            placeholder="Full Name"
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="text"
            name="name"
          />
          <p className="pl-2 text-lg mb-1">Mobile number*</p>
          <input
            placeholder="Mobile number"
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="phone"
            name="phone"
          />
          <p className="pl-2 text-lg mb-1">House no.*</p>
          <input
            placeholder="House no."
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="pin"
            name="housenumber"
          />
          <p className="pl-2 text-lg mb-1">Address*</p>
          <input
            placeholder="Address"
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="address"
            name="address"
          />
          <p className="pl-2 text-lg mb-1">Pincode*</p>
          <input
            placeholder="Pincode"
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="pincode"
            name="pincode"
          />
          <p className="pl-2 text-lg mb-1">City*</p>
          <input
            placeholder="City"
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="text"
            name="city"
          />
          <p className="pl-2 text-lg mb-1">State*</p>
          <input
            placeholder="State"
            onChange={handleAddressDataChange}
            required
            className="w-full outline-none mb-3 px-4 py-1 rounded-xl border-2 hover:border-gray-900 duration-200"
            type="text"
            name="state"
          />
        </div>
      </div>
      <div>
        <button
          onClick={makePayment}
          className="block mx-auto w-[15%] my-10 text-white py-2 border-2 font-semibold bg-green-600 border-green-600 rounded-2xl duration-200 hover:text-black hover:bg-transparent md:w-[60%]"
        >
          Place Your Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
