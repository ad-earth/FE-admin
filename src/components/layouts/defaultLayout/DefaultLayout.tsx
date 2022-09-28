import React from "react";
import { Outlet } from "react-router-dom";
import "./defaultLayout.style.scss";
//components
import Header from "../header/Header";
import Nav from "../nav/Nav";

const DefaultLayout = () => {
  return (
    <section id="DefaultLayout">
      <Header />
      <main>
        <Nav />
        <Outlet />
      </main>
    </section>
  );
};

export default DefaultLayout;
