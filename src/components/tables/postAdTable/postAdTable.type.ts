import { SetStateAction, Dispatch } from "react";

export interface InitalStateType {
  pNo?: number | null;
  pName?: string | null;
  keyword?: string | null;
  level?: number | undefined;
  levelCost?: number;
  cost?: number | null;
  adStatus?: boolean;
}
export interface PropsType {
  initalState: InitalStateType;
  setInitalState: Dispatch<SetStateAction<InitalStateType>>;
}
