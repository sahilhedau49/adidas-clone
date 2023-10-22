import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="mt-20 p-10 bg-slate-900 text-center">
      <div className="text-4xl font-semibold overflow-y-hidden text-white mb-4">
        Newsletter
      </div>
      <div className="flex justify-center gap-4">
        <input
          className="text-xl font-medium text-slate-200 outline-none bg-opacity-20 bg-white py-2 px-8 rounded-full"
          type="email"
          placeholder="john.email.com"
        />
        <button className="btn btn-hover2 text-xl font-medium mt-3 bg-slate-900 text-white px-10 py-2 border-2 rounded-full">
          <Link>Subscribe</Link>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
