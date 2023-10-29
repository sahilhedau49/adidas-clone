import React from "react";
import errorImg from "../assets/images/error.jpg";

const Error = () => {
  return (
    <div className="block w-fit mx-auto my-6">
      <div className="text-center">
        <p className="uppercase overflow-y-hidden mb-4 text-3xl font-semibold text-slate-600">
          Page not found
        </p>
        <img className="error-img" src={errorImg} alt="Error Message" />
      </div>
    </div>
  );
};

export default Error;
