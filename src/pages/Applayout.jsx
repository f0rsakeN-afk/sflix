import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div className="">
      <Header />
      <main className="container m-auto pt-24 px-4 lg:px-0 ">
        <Outlet />
      </main>
      
    </div>
  );
};

export default Applayout;
