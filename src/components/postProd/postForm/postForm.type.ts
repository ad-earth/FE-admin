export interface DataType {
  p_Category: string;
  p_Thumbnail: string[];
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: [
    {
      color: string | null;
      colorCode: string | null;
      option: string | null;
      optionPrice: number | null;
      optionCnt: number | null;
    }
  ];
  p_Desc: string;
  p_Content: string;
}

export interface DataEditType extends DataType {
  p_No: number;
}

export type OptListType = {
  id: number;
  colorCheck: boolean;
  optCheck: boolean;
  color: string | null;
  colorCode: string | null;
  option: string | null;
  optionPrice: number | null;
  optionCnt: number | null;
};

export interface ErrType {
  message: string;
}
