import { SetStateAction, Dispatch } from "react";

interface List {
  id: number;
  p_Category: string;
  p_Name: string;
  p_No: number;
  p_Status: boolean;
}
export interface PropsType {
  prodList: List[];
  checkedItems: number[];
  setCheckedItems: Dispatch<SetStateAction<number[]>>;
}
