import React from "react";
import "./header.style.scss";
import logo from "../../../assets/logo/header.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="right">
        <button>상품등록</button>
        <span>로그아웃</span>
      </div>
    </header>
  );
};

export default Header;
