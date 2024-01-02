import React from "react";
import { UserAuth } from "../context/auth";

const Dashboard = () => {
  const { SignOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await SignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>Dashboard</div>
      <button onClick={handleSignOut} className="btn">
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
