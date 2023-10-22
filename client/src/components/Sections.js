import React from "react";
import Shoes from "../assets/images/shoes.jpg";
import Clothing from "../assets/images/cloating.jpg";
import Accessories from "../assets/images/asserories.jpg";
import "../global.css";
import { Link } from "react-router-dom";

const Sections = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex w-[70%] gap-8 overflow-y-hidden">
        <div className="w-[50%] relative card-hover">
          <Link to={"/store/shoes"}>
            <img className="min-h-full min-w-full" src={Shoes} alt="shoes" />
            <p className="absolute min-h-[3rem] font-bold bottom-10 overflow-y-hidden left-10 text-4xl text-white">
              Shoes
            </p>
          </Link>
        </div>
        <div className="flex flex-col w-[50%] gap-8 overflow-y-hidden">
          <div className="relative card-hover">
            <Link to={"/store/clothing"}>
              <img
                className="min-h-full min-w-full"
                src={Clothing}
                alt="cloating"
              />
              <p className="absolute font-bold min-h-[3rem] bottom-5 overflow-y-hidden left-10 text-4xl text-white">
                Clothing
              </p>
            </Link>
          </div>
          <div className="relative card-hover">
            <Link to={"/store/accessories"}>
              <img
                className="min-h-full min-w-full"
                src={Accessories}
                alt="Accessories"
              />
              <p className="absolute font-bold min-h-[3rem] bottom-5 overflow-y-hidden left-10 text-4xl text-white">
                Accessories
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
