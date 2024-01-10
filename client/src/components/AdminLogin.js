import React, { useState } from "react";
import { UserAuth } from "../context/auth";
import ErrorLog from "./ErrorLog";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { emailLogIn, errWhileLog } = UserAuth();

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
              <span className="text-2xl">Email</span>
            </label>
            <input
              type="text"
              name="email"
              onChange={getData}
              placeholder="Email"
              className="w-[70%] px-4 text-xl border-2 border-slate-800 rounded-xl md:w-[60%]"
            />
          </div>
          <div className="flex justify-between mb-6">
            <label className="px-4 py-2">
              <span className="text-2xl">Password</span>
            </label>
            <input
              type="password"
              name="password"
              onChange={getData}
              placeholder="Password"
              className="w-[70%] px-4 text-xl border-2 border-slate-800 rounded-xl md:w-[60%]"
            />
          </div>

          <div className="w-40 text-2xl text-slate-100 rounded-xl text-center py-2 mx-auto bg-slate-800 border-2 border-slate-900 hover:bg-transparent duration-300 hover:text-slate-900">
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
