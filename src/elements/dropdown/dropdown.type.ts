import React from "react";

export interface PropsType {
  id: string;
  itemList: (string | number)[];
  placeholder?: string;
  selected?: string;
  setSelected?: (val: string) => void;
  onChange?: () => void;
}
