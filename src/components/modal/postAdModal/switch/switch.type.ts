import { SetStateAction, Dispatch } from "react";

export interface SwitchType {
  adStatus: boolean;
  setAdStatus: Dispatch<SetStateAction<boolean>>;
}
