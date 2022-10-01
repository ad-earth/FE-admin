import React, { memo, useEffect, useState } from "react";
// import useBizMoney from "./useBizMoney";
import { io } from "socket.io-client";

// const socket = io("http://13.125.243.20:3005", {
//   path: "/socket-admin",
//   transports: ["websocket"],
//   auth: {
//     token: process.env.REACT_APP_TEST_TOKEN,
//   },
// });

const BizMoney = () => {
  const [data, setData] = useState(0);

  // useEffect(() => {
  //   socket.on("biz", (data) => {
  //     setData(data.a_Charge);
  //   });
  // }, [data]);

  return <div>{data}</div>;
};

export default memo(BizMoney);
