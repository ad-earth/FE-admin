import { delProducts } from "../../../shared/apis/api";
import { useMutation, useQueryClient } from "react-query";

const delProduct = async (p_No: number[]) => {
  return await delProducts(p_No);
};
export const useDelProdQuery = () => {
  const queryClient = useQueryClient();
  return useMutation((p_No: number[]) => delProduct(p_No), {
    onSuccess: () => {
      queryClient.invalidateQueries(["setProdList"]);
    },
  });
};
