import React from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} className="w-36" alt="logo-image" />
    </Link>
  );
};

export default Logo;
