import { Dispatch, SetStateAction } from "react";

export interface PropsType {
  setFilterData: Dispatch<SetStateAction<any>>;
}
export interface Product {
  p_No: number;
  p_Name: string;
}
export interface ResType {
  productList: Product[];
}