import { Dispatch, SetStateAction } from "react";

export interface PropsType {
  contents: string;
  setContents: Dispatch<SetStateAction<string>>;
}
