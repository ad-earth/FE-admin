import { Dispatch, SetStateAction } from "react";

export interface PropsType {
  thumb1Url: string;
  setThumb1Url: Dispatch<SetStateAction<string>>;
  thumb2Url: string;
  setThumb2Url: Dispatch<SetStateAction<string>>;
}

export interface ThumbImgType {
  file: File;
  fileName: string;
  thumbnail: string;
  type: string;
}
