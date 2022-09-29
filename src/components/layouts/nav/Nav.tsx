import React from "react";
import "./nav.style.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ width: "13vw", backgroundColor: "#25779C" }}>
      {nav.map((data) => (
        <ul key={data.id}>
          <li>
            <NavLink
              to={data.path}
              style={({ isActive }) => ({
                color: `${isActive ? "red" : "blue"}`,
              })}
              className="navLink"
            >
              {data.name}
            </NavLink>
          </li>
        </ul>
      ))}
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
