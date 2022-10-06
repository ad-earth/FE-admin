import React from "react";
import "./nav.style.scss";
import { NavLink } from "react-router-dom";
import BizMoney from "../../main/BizMoney";

const Nav = () => {
  return (
    <nav id="nav">
      {/* Biz money */}
      <div className="bizMoney">
        <BizMoney />
      </div>
      {/* sideNav */}
      <ul className="asideNav">
        {nav.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "isActive" : "inactive")}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button>회원 탈퇴</button>
    </nav>
  );
};
const nav = [
  { id: 1, name: "메인", path: "/home" },
  { id: 2, name: "상품 관리", path: "/postProd" },
  { id: 3, name: "배송 관리", path: "/shipping_service" },
  { id: 4, name: "상품 보고서", path: "/prod_report" },
  { id: 5, name: "광고 등록", path: "/ProdReport" },
  { id: 6, name: "광고 관리", path: "/PostAd" },
  { id: 7, name: "광고 보고서", path: "/ad_report" },
];

export default Nav;
