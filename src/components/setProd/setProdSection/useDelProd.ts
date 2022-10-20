import { delProducts } from "../../../shared/apis/api";
import { useMutation } from "react-query";

const delProduct = async (p_No: number[]) => {
  return await delProducts(p_No);
};
export const useDelProd = () => {
  return useMutation((p_No: number[]) => delProduct(p_No));
};
