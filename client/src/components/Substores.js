import React from "react";
import { Link, NavLink } from "react-router-dom";

const Substores = ({ category }) => {
  return (
    <div className="flex text-center justify-center flex-col">
      <div>
        <h1 className="text-3xl font-semibold uppercase overflow-y-hidden">
          {category}
        </h1>
      </div>
      <div className="mt-8">
        <ul className="flex justify-center gap-8">
          <NavLink className="px-4 py-1 border-2 rounded-xl" to={"/store/all"}>
            <li>ALL</li>
          </NavLink>
          <NavLink
            className="px-4 py-1 border-2 rounded-xl"
            to={"/store/shoes"}
          >
            <li>SHOES</li>
          </NavLink>
          <NavLink
            className="px-4 py-1 border-2 rounded-xl"
            to={"/store/clothing"}
          >
            <li>CLOTHING</li>
          </NavLink>
          <NavLink
            className="px-4 py-1 border-2 rounded-xl"
            to={"/store/accessories"}
          >
            <li>ACCESSORIES</li>
          </NavLink>
          <NavLink
            className="px-4 py-1 border-2 rounded-xl"
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
