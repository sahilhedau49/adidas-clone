import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/auth";

const Navbar = () => {
  const { user, SignOut } = UserAuth();
  const username = user?.email.split("@")[0];
  // const username = "sahil";

  const handleSignOut = async () => {
    try {
      await SignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex border-b-2 border-slate-950 justify-between w-screen py-6 px-24">
      <div>
        <Link to={"/"}>
          <img className="w-20" src={logo} alt="Adidas Logo" />
        </Link>
      </div>
      <div className="flex place-items-center gap-10">
        <Link
          className="text-xl duration-300 font-semibold text-zinc-500 hover:text-black"
          to={"/store/all"}
        >
          Store
        </Link>
        <Link
          className="text-xl font-semibold duration-300 text-zinc-500 hover:text-black"
          to={`/cart/${username}`}
        >
          Cart
        </Link>
        {!user && (
          <Link
            className="text-xl font-semibold duration-300 text-zinc-500 hover:text-black"
            to={"/login"}
          >
            Log In
          </Link>
        )}
        {user && (
          <>
            <button
              className="text-xl font-semibold duration-300 text-zinc-500 hover:text-black"
              onClick={handleSignOut}
            >
              Log Out
            </button>

            <div className="flex gap-2 place-items-center">
              <img src={user.photoURL} className="w-10 rounded-full" />
              <div className="text-xl font-semibold duration-300 text-zinc-500 hover:text-black">
                {user.displayName}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
