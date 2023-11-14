import React from "react";
import errorImg from "../assets/images/error.jpg";

const Error = () => {
  return (
    <div className="my-6">
      <img
        className="block mx-auto w-[60%]"
        src={errorImg}
        alt="Error Message"
      />
    </div>
  );
};

export default Error;
