import { ExcelType, OrderListType } from "./serviceTable.type";

export const useExcelData = (data: OrderListType[]) => {
  let excelList: ExcelType[] = [];
  data &&
    data.map((item: OrderListType) => {
      const list = {
        orderNo: item.o_No,
        prodNo: item.p_No,
        prodName: item.p_Name,
        prodQty: item.p_Cnt,
        userId: item.u_Id,
        userName: item.d_Name,
        address: `[${item.d_Address1}] ${item.d_Address2} ${item.d_Address3}`,
        phone: item.d_Phone,
        comment: item.d_Memo,
        orderDate: item.o_Date,
        status: item.o_Status,
      };
      excelList.push(list);
    });
  return excelList;
};
