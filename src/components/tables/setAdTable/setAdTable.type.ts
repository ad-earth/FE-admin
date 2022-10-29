import { SetStateAction, Dispatch } from "react";

interface Prod {
  id: number;
  k_No: number;
  keyword: string;
  k_Level: number;
  k_Cost: number;
  k_Click: number;
  clickCost: number;
  k_Status: boolean;
}
interface ProdList {
  cnt: number;
  keywordList?: Prod[];
}
export interface PropsType {
  prodList?: ProdList;
  type?: string;
  checkedItems?: number[];
  setCheckedItems?: Dispatch<SetStateAction<number[]>>;
}
