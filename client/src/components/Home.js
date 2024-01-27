import React from "react";
import videomain from "../assets/videos/adidas-ad.mp4";
import { Link } from "react-router-dom";
import Sections from "./Sections";
import Fans from "./Fans";

const Home = () => {
  return (
    <div>
      <div className="p-20 pt-0 md:p-0 md:mb-10">
        <Link to={"/store/all"}>
          <video
            src={videomain}
            className="w-full"
            disablePictureInPicture
            autoPlay
            loop
            muted
          ></video>
        </Link>
      </div>
      <div>
        <Sections />
        <Fans />
      </div>
    </div>
  );
};

export default Home;
