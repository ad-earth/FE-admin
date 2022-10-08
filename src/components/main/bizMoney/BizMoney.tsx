import React, { memo, useEffect, useState } from "react";
import styles from "./bizMoney.module.scss";
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
  const [money, setMoney] = useState<number>(2120000);
  const title = type === "home" ? <h3>Biz money</h3> : <h3>내 비즈머니</h3>;
  const subtitle = "비즈머니를 간편하 게 충전하세요";
  const button = type === "home" ? "충전하기" : "충전";
  // useEffect(() => {
  //   socket.on("biz", (data) => {
  //     setMoney(data.a_Charge);
  //   });
  // }, [data]);

  if (type === "nav") {
    return (
      <section className={`${styles.bizMoney} ${styles.nav}`}>
        <div className={styles.titleBox}>
          <img src={bizNav} alt="bizIcon" />
          {title}
        </div>
        <div className={styles.money}>
          <p>
            {money} <span>원</span>
          </p>
          <button className={styles.bizBtn}>{button}</button>
        </div>
      </section>
    );
  }
  if (type === "home") {
    return (
      <section className={`${styles.bizMoney} ${styles.home}`}>
        {title}
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.money}>
          <p>
            {money} <span>원</span>
          </p>
          <button className={styles.bizBtn}>{button}</button>
        </div>
      </section>
    );
  }
};

export default memo(BizMoney);