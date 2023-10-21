import React from "react";
import videomain from "../assets/videos/videomain.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="p-20 pt-0">
        <Link to={"/store"}>
          <video src={videomain} className="w-full" autoPlay loop muted></video>
        </Link>
      </div>
    </div>
  );
};

export default Home;
