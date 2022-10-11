import React from "react";
import styles from "./header.module.scss";
import logo from "../../../assets/logo/header.svg";
import { SmallWhiteBtn } from "../../../elements/buttons/Buttons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  //상품등록 페이지 이동
  const btnClick = () => navigate({ pathname: "/PostProd" });
  //메인 페이지 이동
  const logoClick = () => navigate({ pathname: "/home" });
  //로그아웃 클릭
  const logoutClcik = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.clear();
      navigate("/", { replace: true });
    } else {
      return;
    }
  };

  return (
    <header>
      <img src={logo} alt="logo" onClick={logoClick} />
      <div className={styles.headerRight}>
        <SmallWhiteBtn onClick={btnClick}>상품등록</SmallWhiteBtn>
        <span onClick={logoutClcik}>로그아웃</span>
      </div>
    </header>
  );
};

export default Header;
