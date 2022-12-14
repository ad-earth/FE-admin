import { Dispatch, SetStateAction } from "react";

export interface PropsType {
  // prevContents: string;
  contents: string;
  setContents: Dispatch<SetStateAction<string>>;
}
