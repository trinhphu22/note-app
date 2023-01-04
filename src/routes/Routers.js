import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Test from "../pages/Test";

const Routers = () => {
  const LinkLayout = () => {
    return (
      <div className="home">
        <Navbar />
        <div className="home__main">
          <Header />
          <Outlet />
        </div>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<LinkLayout />}>
        <Route index element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
};

export default Routers;
