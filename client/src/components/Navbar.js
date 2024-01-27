import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CgMenu, CgClose } from "react-icons/cg";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex border-b-2 border-slate-950 justify-between w-screen py-6 px-24 md:px-2">
      <div>
        <Link to={"/"}>
          <img className="w-20 md:w-16 md:pl-4" src={logo} alt="Adidas Logo" />
        </Link>
      </div>
      <Fade right>
        <div
          className={`flex place-items-center gap-10 md:duration-300 md:flex-col md:z-10 md:gap-8 mobile-nav-bg md:text-black md:absolute md:top-0 md:py-20 md:left-0 md:w-[100vw] md:h-fit ${
            openMenu ? "md:translate-x-0" : "md:hidden"
          }`}
        >
          <Link
            className="text-lg md:text-xl duration-300 md:font-medium font-semibold text-zinc-500 md:text-black hover:text-black"
            to={"/store/all"}
          >
            Store
          </Link>
          <Link
            className="text-lg md:text-xl font-semibold md:font-medium duration-300 text-zinc-500 md:text-black hover:text-black"
            to={`/cart`}
          >
            Cart
          </Link>
          {!isAuthenticated && (
            <Link
              className="text-lg md:text-xl font-semibold md:font-medium duration-300 text-zinc-500 md:text-black hover:text-black"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </Link>
          )}
          {isAuthenticated && (
            <button
              className="text-lg md:text-xl font-semibold md:font-medium duration-300 text-zinc-500 md:text-black hover:text-black"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          )}
          {isAuthenticated && (
            <div className="flex gap-4 place-items-center">
              <img
                src={user.picture}
                className="w-8 md:w-10 rounded-full"
                alt="user"
              />
              <div className="text-lg md:text-xl md:font-medium font-semibold duration-300 text-zinc-500 md:text-black hover:text-black">
                {user.name}
              </div>
            </div>
          )}
        </div>
      </Fade>
      <div
        className={`hidden md:inline-block py-3 md:z-50 text-3xl text-slate-950`}
      >
        <CgMenu
          name="menu-outline"
          className={`absolute top-6 right-8 ${
            openMenu ? "md:hidden" : "md:inline-block"
          }`}
          onClick={() => setOpenMenu(true)}
        />
        <CgClose
          name="close-outline"
          className={`absolute top-6 right-8 ${
            openMenu ? "md:inline-block" : "md:hidden"
          }`}
          onClick={() => setOpenMenu(false)}
        />
      </div>
    </div>
  );
};

export default Navbar;
