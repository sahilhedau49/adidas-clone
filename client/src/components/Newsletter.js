import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";

const Newsletter = () => {
  const { user } = useAuth0();

  const handleSubscribe = () => {
    toast.success("😇 You have successfully subscribed to our newsletter", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="p-10 bg-slate-900 text-center">
      <div className="text-4xl font-semibold overflow-y-hidden text-white mb-4 md:text-xl">
        Newsletter
      </div>
      <div className="flex justify-center gap-4 md:flex-col">
        <input
          className="text-lg font-medium text-slate-200 outline-none bg-opacity-20 bg-white py-2 px-8 rounded-full md:text-base md:py-1 md:w-[60%] md:mx-auto"
          type="email"
          value={user?.email || ``}
          placeholder="john@gmail.com"
        />
        <button
          onClick={handleSubscribe}
          className="btn btn-hover2 text-lg font-medium bg-slate-900 text-white px-10 py-1 border-2 rounded-full md:text-base md:py-1 md:w-fit md:mx-auto"
        >
          Subscribe
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Newsletter;
