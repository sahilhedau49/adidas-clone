import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/auth";

const Newsletter = () => {
  const { user } = UserAuth();

  return (
    <div className="p-10 bg-slate-900 text-center">
      <div className="text-4xl font-semibold overflow-y-hidden text-white mb-4 md:text-xl">
        Newsletter
      </div>
      <div className="flex justify-center gap-4 md:flex-col">
        <input
          className="text-lg font-medium text-slate-200 outline-none bg-opacity-20 bg-white py-2 px-8 rounded-full md:text-base md:py-1"
          type="email"
          value={user?.email || ``}
          placeholder="john@gmail.com"
        />
        <button className="btn btn-hover2 text-lg font-medium bg-slate-900 text-white px-10 py-1 border-2 rounded-full md:text-base md:py-1 md:w-fit md:mx-auto">
          <Link>Subscribe</Link>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
