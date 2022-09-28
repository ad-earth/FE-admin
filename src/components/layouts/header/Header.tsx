import React from "react";
import logo from "../../../assets/logo/header.png";
import "./header.style.scss";

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
