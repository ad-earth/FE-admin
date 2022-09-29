import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("https://13.125.243.20/biz");
const useBizMoney = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  // const [lastPong, setLastPong] = useState(null);
  const queryClient = useQueryClient();
  console.log(socket);
  //소켓 io
  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("connect");
  //     setIsConnected(true);
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("disconnect");
  //     setIsConnected(false);
  //     // socket.open();
  //   });

  //   socket.on("pong", () => {
  //     // setLastPong(new Date().toISOString());
  //   });

  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //     socket.off("pong");
  //   };
  // }, [queryClient]);

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
