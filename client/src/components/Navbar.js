import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/auth";

const Navbar = () => {
  const { user, SignOut } = UserAuth();
  const username = user?.email;
  const name = user.displayName;

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
      <div className="flex place-self-center gap-10">
        <Link className="text-xl font-semibold" to={"/store/all"}>
          Store
        </Link>
        <Link className="text-xl font-semibold" to={`/cart/${username}`}>
          Cart
        </Link>
        {!user && (
          <Link className="text-xl font-semibold" to={"/login"}>
            Log In
          </Link>
        )}
        {user && (
          <>
            <button className="text-xl font-semibold" onClick={handleSignOut}>
              Log Out
            </button>

            <div>{name}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
