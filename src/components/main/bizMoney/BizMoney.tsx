import React, { memo, useEffect, useState } from "react";
import "./bizMoney.style.scss";
import bizNav from "../../../assets/lcon/bizNav.svg";
// import useBizMoney from "./useBizMoney";
import { io } from "socket.io-client";

// const socket = io("http://13.125.243.20:3005", {
//   path: "/socket-admin",
//   transports: ["websocket"],
//   auth: {
//     token: process.env.REACT_APP_TEST_TOKEN,
//   },
// });
interface PropsType {
  type: string;
}
const BizMoney = (props: PropsType) => {
  const { type } = props;
  const [data, setData] = useState(12500);
  const title = type === "home" ? <h3>Biz money</h3> : <h3>내 비즈머니</h3>;
  const subtitle = "비즈머니를 간편하 게 충전하세요";
  const button = type === "home" ? "충전하기" : "충전";
  // useEffect(() => {
  //   socket.on("biz", (data) => {
  //     setData(data.a_Charge);
  //   });
  // }, [data]);

  if (type === "nav") {
    return (
      <section className="bizMoney nav">
        <div className="titleBox">
          <img src={bizNav} alt="bizIcon" />
          {title}
        </div>
        <div className="money">
          <p>
            {data} <span>원</span>
          </p>
          <button className="bizBtn">{button}</button>
        </div>
      </section>
    );
  }
  if (type === "home") {
    return (
      <section className="bizMoney home">
        {title}
        <p className="subtitle">{subtitle}</p>
        <div className="money">
          <p>
            {data} <span>원</span>
          </p>
          <button className="bizBtn">{button}</button>
        </div>
      </section>
    );
  }
};

export default memo(BizMoney);
