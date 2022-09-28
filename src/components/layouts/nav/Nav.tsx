import React from "react";
import "./nav.style.scss";
import { NavLink } from "react-router-dom";
import BizMoney from "../../mypage/BizMoney";

const Nav = () => {
  return (
    <nav>
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
  { id: 3, name: "배송 관리", path: "/SetProd" },
  { id: 4, name: "상품 보고서", path: "/SetParcel" },
  { id: 5, name: "광고 등록", path: "/ProdReport" },
  { id: 5, name: "광고 관리", path: "/PostAd" },
  { id: 5, name: "광고 보고서", path: "/SetAd" },
];

export default Nav;