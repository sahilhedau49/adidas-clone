import React from "react";
import AdminRepo from "./AdminRepo";
import AdminControls from "./AdminControls";

const Dashboard = () => {
  return (
    <div className="w-full flex gap-4">
      <div className="w-[80%]">
        <AdminRepo category="all" />
      </div>
      <div className="w-[20%]">
        <AdminControls />
      </div>
    </div>
  );
};

export default Dashboard;
