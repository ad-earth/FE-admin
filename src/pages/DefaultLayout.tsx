import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <section style={{ width: "100%", height: "100%" }}>
      <header
        style={{ width: "100%", height: "80px", backgroundColor: "#25779C" }}
      >
        Header
      </header>
      <main style={{ width: "100%", display: "flex" }}>
        <nav style={{ width: "256px", backgroundColor: "#25779C" }}>nav</nav>
        <Outlet />
      </main>
    </section>
  );
};

export default DefaultLayout;
