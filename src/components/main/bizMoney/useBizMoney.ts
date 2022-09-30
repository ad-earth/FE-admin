import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://13.125.243.20:3005", {
  path: "/socket-admin",
  transports: ["websocket"],
  auth: {
    token: process.env.REACT_APP_TEST_TOKEN,
  },
});

const useBizMoney = () => {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [lastPong, setLastPong] = useState(null);
  const queryClient = useQueryClient();

  // const token = process.env.REACT_APP_TEST_TOKEN;
  // socket.emit("biz", token);
  socket.on("biz", (data) => {
    console.log("dddd");
    console.log(data);
  });
  // // 소켓 io
  // useEffect(() => {
  //   // socket.on("connect", () => {
  //   //   console.log("connect");
  //   //   // setIsConnected(true);
  //   // });
  //   // socket.on("disconnect", () => {
  //   //   console.log("disconnect");
  //   //   // setIsConnected(true);
  //   // });
  //   // return () => {
  //   //   socket.off("connect");
  //   // };
  // }, []);

  //웹소켓
  // const sendPing = () => {
  //   socket.emit("ping");
  // };
  // const queryClient = useQueryClient();
  // useEffect(() => {
  //   const websocket = new WebSocket("wss://echo.websocket.org/");
  //   websocket.onopen = () => {
  //     console.log("connected");
  //   };
  //   websocket.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     const queryKey = [...data.entity, data.id].filter(Boolean);
  //     queryClient.invalidateQueries(queryKey);
  //   };

  //   return () => {
  //     websocket.close();
  //   };
  // }, [queryClient]);
};

export default useBizMoney;
