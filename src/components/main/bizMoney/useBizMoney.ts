// import { useQueryClient } from "react-query";

const useBizMoney = () => {
  return 0;
};

export default useBizMoney;

// //웹소켓
// // const sendPing = () => {
// //   socket.emit("ping");
// // };
// // const queryClient = useQueryClient();
// // useEffect(() => {
// //   const websocket = new WebSocket("wss://echo.websocket.org/");
// //   websocket.onopen = () => {
// //     console.log("connected");
// //   };
// //   websocket.onmessage = (event) => {
// //     const data = JSON.parse(event.data);
// //     const queryKey = [...data.entity, data.id].filter(Boolean);
// //     queryClient.invalidateQueries(queryKey);
// //   };
