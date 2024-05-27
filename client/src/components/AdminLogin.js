import React, { useState } from "react";
import { UserAuth } from "../context/auth";
import ErrorLog from "./ErrorLog";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { emailLogIn, errWhileLog } = UserAuth();
  // rshp

  const getData = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailLogIn(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="overflow-y-hidden bg-base-200">
      <div>
        <p className="mt-16 text-center font-bold text-[3rem] md:text-3xl">
          Adidas Admin Login
        </p>
      </div>
      <form>
        <div className="w-[40%] mx-auto my-16 md:w-[90%]">
          <div className="flex justify-between mb-6">
            <label className="px-4 py-2">
              <span className="text-2xl md:text-xl">Email</span>
            </label>
            <input
              type="text"
              name="email"
              onChange={getData}
              placeholder="Email"
              className="w-[70%] px-4 text-xl border-2 border-slate-800 rounded-xl md:w-[60%] md:text-lg"
            />
          </div>
          <div className="flex justify-between mb-6">
            <label className="px-4 py-2">
              <span className="text-2xl md:text-xl">Password</span>
            </label>
            <input
              type="password"
              name="password"
              onChange={getData}
              placeholder="Password"
              className="w-[70%] px-4 text-xl border-2 border-slate-800 rounded-xl md:w-[60%] md:text-lg"
            />
          </div>

          <div className="w-40 md:w-24 text-2xl md:text-xl text-slate-100 rounded-xl text-center py-2 md:py-1 mx-auto bg-slate-800 border-2 border-slate-900 hover:bg-transparent duration-300 hover:text-slate-900 md:mt-10">
            <button onClick={handleSubmit} className="">
              Log In
            </button>
          </div>

          {errWhileLog && <ErrorLog />}
        </div>
      </form>
    </div>
  );
};

export default Login;
