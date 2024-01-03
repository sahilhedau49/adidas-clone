import React from "react";
import { UserAuth } from "../context/auth";
import adminImg from "../assets/images/admin.png";

const AdminControls = () => {
  const { SignOut, admin } = UserAuth();

  const handleSignOut = async () => {
    try {
      await SignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10">
      <div className="info">
        <h1 className="overflow-y-hidden mb-6 text-3xl font-semibold text-center">
          Admin
        </h1>
        <img className="block mx-auto w-20" src={adminImg} />
        <h1 className="block mx-auto w-fit mt-4 text-xl">{admin.email}</h1>
      </div>
      <div className="mt-4">
        <button
          onClick={handleSignOut}
          className="selection:invisible block bg-slate-800 text-slate-50 mx-auto px-6 rounded-xl py-1 border-2 border-slate-900 "
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AdminControls;
