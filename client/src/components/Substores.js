import React from "react";
import { NavLink } from "react-router-dom";

const Substores = ({ category }) => {
  return (
    <div className="flex text-center justify-center flex-col md:flex-row md:gap-6 md:px-10 md:justify-between">
      <div className="md:my-auto md:block md:mx-auto">
        <h1 className="text-3xl font-semibold uppercase overflow-y-hidden md:text-xl">
          {category}
        </h1>
      </div>
      <div className="mt-8">
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
