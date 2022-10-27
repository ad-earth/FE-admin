import { useEffect, SetStateAction, Dispatch } from "react";

interface List {
  p_Name: string;
  p_No: number;
}

export interface PropsType {
  id?: string;
  itemList: (string | number)[];
  placeholder?: string;
  selected?: string;
  setSelected?: (val: string) => void;
  onChange?: () => void;
}
export interface AllPropsType {
  selected: number;
  setSelected: (val: number) => void;
  list: List[];
}
