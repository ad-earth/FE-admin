import React from "react";

export interface PropsType {
  itemList: string[];
  selected?: string;
  setSelected?: (val: string) => void;
  onChange?: () => void;
}
