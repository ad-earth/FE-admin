import React from "react";
import styles from "./header.module.scss";
import logo from "../../../assets/logo/header.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className={styles.headerRight}>
        <button>상품등록</button>
        <span>로그아웃</span>
      </div>
    </header>
  );
};

export default Header;
