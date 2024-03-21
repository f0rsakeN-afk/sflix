import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex fixed top-0 w-full z-20 justify-between items-center shadow-xl px-3 lg:px-36 py-2 bg-white">
      <Logo />
      <div className="flex items-center justify-center gap-4 md:gap-8">
        <NavLink
          to="home"
          className="text-xl text-gray-700 font-semibold hover:text-blue-600 hover:underline underline-offset-2"
        >
          Home
        </NavLink>
        <NavLink
          to="movies"
          className="text-xl text-gray-700 font-semibold hover:text-blue-600 hover:underline underline-offset-2"
        >
          Movies
        </NavLink>

        <NavLink
          to="about"
          className="text-xl text-gray-700 font-semibold hover:text-blue-600 hover:underline underline-offset-2"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
