import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="main">
        <Navbar />
        <Outlet />
    </div>
  );
};

export default Layout;