import React from "react";
import Substores from "./Substores";

const Store = ({ category }) => {
  // fetch rerquest from specific category (get from props) and render down using map function

  return (
    <div>
      <div>
        <Substores category={category} />
      </div>
    </div>
  );
};

export default Store;
