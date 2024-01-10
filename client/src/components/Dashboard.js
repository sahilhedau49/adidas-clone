import React from "react";
import AdminRepo from "./AdminRepo";
import AdminControls from "./AdminControls";

const Dashboard = () => {
  return (
    <div className="w-full flex gap-4 md:flex-col-reverse">
      <div className="w-[80%] md:w-full">
        <AdminRepo category="all" />
      </div>
      <div className="w-[20%] md:w-full">
        <AdminControls />
      </div>
    </div>
  );
};

export default Dashboard;
