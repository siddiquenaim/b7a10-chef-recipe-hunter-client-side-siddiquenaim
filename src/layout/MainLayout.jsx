import React from "react";
import Navbar from "../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-130px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
