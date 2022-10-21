export interface PropsType {
  orderList: {
    d_Address1: string;
    d_Address2: string;
    d_Address3: string;
    d_Memo: string;
    d_Name: string;
    d_Phone: string;
    id: number;
    o_Date: string;
    o_No: number;
    o_Status: string;
    p_Cnt: number;
    p_Name: string;
    p_No: number;
    p_Option: (string | number)[][];
    p_Price: number;
    u_Id: string;
  }[];
  date: string;
  product: string;
  status: string;
}
