interface ExcelType {
  orderNo: number;
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
interface DataType {
  o_No: number;
  p_No: number;
  p_Name: string;
  p_Cnt: number;
  u_Id: string;
  d_Name: string;
  d_Address1: string;
  d_Address2: string;
  d_Address3: string;
  d_Phone: string;
  d_Memo: string;
  o_Date: string;
  o_Status: string;
}

export const useExcelData = (data: DataType[]) => {
  let excelList: ExcelType[] = [];
  data &&
    data.map((item: DataType) => {
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
