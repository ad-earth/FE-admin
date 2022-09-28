import React from "react";
import { Outlet } from "react-router-dom";
import "./defaultLayout.style.scss";
//components
import Header from "../header/Header";
import Nav from "../nav/Nav";

const DefaultLayout = () => {
  return (
    <div id="DefaultLayout">
      <Header />
      <main>
        <Nav />
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
