export interface OrderListType {
  id: number;
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
  p_Option: [string, string, number, number, number][];
  p_Price: number;
}

export interface OrdersResponseType {
  cnt: 97;
  list: OrderListType[];
}

export interface ExcelType {
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
