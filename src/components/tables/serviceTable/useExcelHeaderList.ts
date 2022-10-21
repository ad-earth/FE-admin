export const useExcelHeaderList = () => {
  return [
    { label: "주문번호", key: "orderNo" },
    { label: "상품번호", key: "prodNo" },
    { label: "상품명", key: "prodName" },
    { label: "수량", key: "prodQty" },
    { label: "아이디", key: "userId" },
    { label: "수령인", key: "userName" },
    { label: "주소", key: "address" },
    { label: "연락처", key: "phone" },
    { label: "배송메시지", key: "comment" },
    { label: "주문일자", key: "orderDate" },
    { label: "배송상태", key: "status" },
  ];
};
