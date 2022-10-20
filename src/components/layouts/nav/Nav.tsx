import React from "react";
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import BizMoney from "../../main/bizMoney/BizMoney";

const Nav = () => {
  return (
    <nav id={styles.nav}>
      {/* Biz money */}
      <div className={styles.bizMoneyBox}>
        <BizMoney type="nav" />
      </div>
      {/* sideNav */}
      <ul className={styles.asideNav}>
        {nav.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${styles.isActive}` : `${styles.inactive}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className={styles.withdrawal}>회원 탈퇴</button>
    </nav>
  );
};
const nav = [
  { id: 1, name: "메인", path: "/home" },
  { id: 2, name: "상품 관리", path: "/setProd" },
  { id: 3, name: "배송 관리", path: "/shipping_service" },
  { id: 4, name: "상품 보고서", path: "/sales_report" },
  { id: 5, name: "광고 등록", path: "/ProdReport" },
  { id: 6, name: "광고 관리", path: "/PostAd" },
  { id: 7, name: "광고 보고서", path: "/ad_report" },
];

export default Nav;
