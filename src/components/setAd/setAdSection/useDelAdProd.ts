import { delAdProd } from "../../../shared/apis/api";
import { useMutation } from "react-query";

const delProd = async (p_No: number, k_No: number[]) => {
  return await delAdProd(p_No, k_No);
};
export const useDelAdProd = (p_No: number) => {
  return useMutation((k_No: number[]) => delProd(p_No, k_No));
};
