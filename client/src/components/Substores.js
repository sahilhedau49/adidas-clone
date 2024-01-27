import React from "react";
import { NavLink } from "react-router-dom";

const Substores = ({ category }) => {
  return (
    <div className="flex text-center justify-center flex-col md:flex-row md:mt-8 md:gap-4 md:px-6 md:justify-between">
      <div className="md:w-[60%] md:place-content-center md:my-auto">
        <h1 className="text-3xl font-semibold uppercase overflow-y-hidden md:text-base">
          {category}
        </h1>
      </div>
      <div className="md:w-[50%] mt-8 md:mt-0">
        <ul className="flex justify-center gap-8 md:flex-col md:gap-2">
          <NavLink
            className="px-4 py-1 border-2 rounded-xl md:text-sm"
            to={"/store/all"}
          >
            <li>ALL</li>
          </NavLink>
          <NavLink
            className="px-4 py-1 border-2 rounded-xl md:text-sm"
            to={"/store/shoes"}
          >
            <li>SHOES</li>
          </NavLink>
          <NavLink
            className="px-4 py-1 border-2 rounded-xl md:text-sm"
            to={"/store/clothing"}
          >
            <li>CLOTHING</li>
          </NavLink>
          <NavLink
            className="px-4 py-1 border-2 rounded-xl md:text-sm"
            to={"/store/accessories"}
          >
            <li>ACCESSORIES</li>
          </NavLink>
          <NavLink
            className="px-4 py-1 border-2 rounded-xl md:text-sm"
            to={"/store/fanstore"}
          >
            <li>FAN STORE</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Substores;
