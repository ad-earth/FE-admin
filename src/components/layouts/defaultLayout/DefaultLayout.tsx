import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./defaultLayout.module.scss";

//components
import Header from "../header/Header";
import Nav from "../nav/Nav";

const DefaultLayout = () => {
  return (
    <div id={styles.DefaultLayout}>
      <Header />
      <main>
        <Nav />
        <div className={styles.mainWrap}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
