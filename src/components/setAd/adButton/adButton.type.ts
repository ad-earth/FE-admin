import { SetStateAction, Dispatch } from "react";

export interface PropsType {
  setDelhandler: Dispatch<SetStateAction<boolean>>;
  setAddhandler: Dispatch<SetStateAction<boolean>>;
  prodLength: number;
}