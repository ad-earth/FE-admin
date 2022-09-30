import { testData } from "../../tables/serviceTable/test";

interface ListType {
  orderNo: Number;
  prodNo: number;
  prodName: string;
  prodQty: number;
  userId: string;
  userName: string;
  address: string;
  phone: string;
  comment: string;
  orderDate: string;
  status: string;
}

export function useExcel() {
  let orderList: ListType[] = [];
  testData.map((list) => {
    const newOrderList: ListType = {
      orderNo: list.o_No,
      prodNo: list.p_No,
      prodName: list.p_Name,
      prodQty: list.p_Cnt,
      userId: list.u_Id,
      userName: list.d_Name,
      address: list.d_Address1 + list.d_Address2,
      phone: list.d_Phone,
      comment: list.d_Memo,
      orderDate: list.o_Date,
      status: list.o_Status,
    };
    orderList.push(newOrderList);
  });
  return orderList;
}
