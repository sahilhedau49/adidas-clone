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
    <div className="overflow-y-hidden min-h-screen bg-base-200">
      <div>
        <p className="italic mt-6 text-center font-extrabold text-[4rem] sm:text-6xl">
          Adidas Admin Login
        </p>
      </div>
      <form>
        <div className="">
          <div className="">
            <label className="">
              <span className="">Email</span>
            </label>
            <input
              type="text"
              name="email"
              onChange={getData}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="">
            <label className="">
              <span className="">Password</span>
            </label>
            <input
              type="password"
              name="password"
              onChange={getData}
              placeholder="password"
              className="input input-bordered"
            />
          </div>

          <div className="">
            <button onClick={handleSubmit} className="">
              Log In
            </button>
          </div>
        </div>
      </form>
      {errWhileLog && <ErrorLog />}
    </div>
  );
};

export default Login;
