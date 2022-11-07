export interface SalesResponseType {
  cnt: number;
  totalPrice: number;
  products: {
    p_No: number;
    p_Name: string;
    p_Cnt: number;
    p_Price: number;
  }[];
}
