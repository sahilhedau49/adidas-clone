import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="flex border-b-2 border-slate-950 justify-between w-screen py-6 px-24 md:px-2">
      <div>
        <Link to={"/"}>
          <img className="w-20 md:w-16 md:pl-4" src={logo} alt="Adidas Logo" />
        </Link>
      </div>
      <div className="flex place-items-center gap-10 md:flex-col">
        <Link
          className="text-lg duration-300 font-semibold text-zinc-500 hover:text-black"
          to={"/store/all"}
        >
          Store
        </Link>
        <Link
          className="text-lg font-semibold duration-300 text-zinc-500 hover:text-black"
          to={`/cart`}
        >
          Cart
        </Link>
        {!isAuthenticated && (
          <Link
            className="text-lg font-semibold duration-300 text-zinc-500 hover:text-black"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </Link>
        )}
        {isAuthenticated && (
          <>
            <button
              className="text-lg font-semibold duration-300 text-zinc-500 hover:text-black"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>

            <div className="flex gap-2 place-items-center">
              <img
                src={user.picture}
                className="w-8 rounded-full"
                alt="user avatar"
              />
              <div className="text-lg font-semibold duration-300 text-zinc-500 hover:text-black">
                {user.name}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
