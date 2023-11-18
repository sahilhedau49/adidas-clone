import React from "react";
import { Link } from "react-router-dom";

const Fans = () => {
  return (
    <div className="mt-20 pb-20 md:mt-10 md:pb-10">
      <div className="text-center">
        <h2 className="text-2xl text-slate-500 mb-3 md:text-lg md:mb-2">
          Fans Store
        </h2>
        <h2 className="text-6xl overflow-y-hidden font-extrabold text uppercase md:text-2xl">
          Follow your <span className="text-gradient">team</span>
        </h2>
        <p className="mt-3 text-xl text-slate-500 md:text-base md:px-8">
          Find your favourite team/club's jursey sponsered by Adidas...
        </p>
        <Link to={"/store/fanstore"}>
          <button className="btn btn-hover1 mt-3 bg-slate-900 text-white px-10 py-2 border-2 rounded-full md:py-1 md:px-6">
            Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Fans;
