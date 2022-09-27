import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Nav from "./Nav";

const DefaultLayout = () => {
  return (
    <section style={{ width: "100%", height: "100%" }}>
      <Header />
      <main
        style={{
          width: "100%",
          display: "flex",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <Nav />
        <Outlet />
      </main>
    </section>
  );
};

export default DefaultLayout;
