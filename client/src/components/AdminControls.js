import React from "react";
import { UserAuth } from "../context/auth";
import adminImg from "../assets/images/admin.png";
import { useNavigate } from "react-router";

const AdminControls = () => {
  const { SignOut, admin } = UserAuth();
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/dashboard/upload");
  };

  const handleSignOut = async () => {
    try {
      await SignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 h-[80vh] md:h-fit">
      <div className="h-[50%]">
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
      <div className="h-[50%] bg-slate-300 rounded-2xl flex border-2 duration-300 border-slate-500 hover:bg-zinc-300 md:h-[6rem] md:w-[40%] md:mx-auto md:mt-8">
        <button
          onClick={handleUploadClick}
          className="block mx-auto text-xl font-medium"
        >
          Publish New Product
        </button>
      </div>
    </div>
  );
};

export default AdminControls;
