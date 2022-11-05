export interface PropsType {}

export type OrderListType = {
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
  p_Option: [string, string, string, number, number][];
};
