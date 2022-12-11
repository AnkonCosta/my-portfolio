import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Main = () => {
  return (
    <div className="flex ">
      <div className="w-2/12 mx-1 border-r-2 border-black ">
        <Navbar></Navbar>
      </div>
      <div className="w-10/12 mx-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
